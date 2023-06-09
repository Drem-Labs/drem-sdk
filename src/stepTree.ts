import { Percent } from './types/Percent';
import { Node } from './types/Node';
import { BaseStep } from './steps/BaseStep';
import { DremManager } from './manager';
import { PercentageOverflowError, InvalidStepError, RootNodeNonNullParentError, RootWindPercentNotZeroError, NodeInvalidParentError, NodeWindPercentZeroError } from './lib/errors'
import { StepInfo } from  './types/DataTypes/StepInfo';

// create the step tree
export class StepTree {
    root: number;
    nodes: {[key: number]: Node} = {};  // nodes and data should be accessible to the frontend

    // should store the next node key, so you don't have to compute
    nextNodeKey: number;

    // keep the hub
    hub: any;

    // constructor to get the hub
    constructor(manager: DremManager) {
        // get the hub
        this.hub = manager.sdk().DremHub;
    }

    // add a node
    // good to check the wind percent later, as it doesn't require anything
    // in the step, can add
    async insert(parentIndex: number, step: BaseStep, windPercent: number): Promise<void> {
        // validate the step
        await this._validateStep(step);

        // case 1: need to set the root
        if (this.root === undefined) {
            // check the inputs
            if (parentIndex != 0) { throw new RootNodeNonNullParentError("Root should not have a parent"); }
            if (windPercent != 0) { throw new RootWindPercentNotZeroError("Root not being wound, should not have wind percent"); }

            // set the root value to 1
            this.nextNodeKey = 1;
            this.root = this.nextNodeKey;

            // set the node
            this.nodes[this.nextNodeKey] = new Node(parentIndex, this.nextNodeKey, step, windPercent);
        }
        else {
            // get the parent
            var parent = this.nodes[parentIndex];

            // parent must be valid
            var parentKey = parent.getKey();
            if ((parentKey === 0) || (parentKey >= this.nextNodeKey)) { throw new NodeInvalidParentError('Parent must be between 0 and ' + this.nextNodeKey); }

            // need non-zero wind
            if (windPercent === 0) { throw new NodeWindPercentZeroError('Nodes must wind'); }

            // sum the wind percents & see if there is any room for more (children cannot access parent nodes, so it must be done here)
            var windPercentTotal = new Percent(0);
            windPercentTotal.add(windPercent);

            // run the loop
            var length = parent.getChildrenLength();
            for (var i = 0; i < length; i += 1) {
                // increment the percent total --> will throw if it overflows
                windPercentTotal.add(this.nodes[parent.getChild(i)].getWindPercent());
            }

            // create the node
            this.nodes[this.nextNodeKey] = new Node(parentIndex, this.nextNodeKey, step, windPercent);

            // add the node to the children
            parent.pushChild(this.nextNodeKey);

            // set the parent
            // this may be unnecessary (we changed the parent, but not sure if this is reflected in the mapping), but we can test that theory later
            this.nodes[parentIndex] = parent;
        }

        // increment the next node key
        this.nextNodeKey += 1;
    }

    // removal algorithm: remove the node and all its children
    async remove(key: number): Promise<void> {
        // get the node
        var node = this.nodes[key];

        // remove all the node's children
        var length = node.getChildrenLength();
        for (var i = 0; i < length; i += 1) {
            // remove the child node by its key
            await this.remove(this.nodes[node.getChild(i)].getKey());
        }

        // remove the node itself
        delete this.nodes[key];
    }

    // validate the step with the drem hub
    async _validateStep(step: BaseStep): Promise<void> {
        // check the step address with the drem hub
        var valid = (await this.hub.isStepWhitelisted(step.base.address));

        // if the step isn't in the drem hub, return that it is not valid
        if (!valid) {
            throw new InvalidStepError(step.base.address + " is not a whitelisted step");
        }
    }

    // function to export all of these to steps (step info type)
    // we are passing a step tree into the vault deployer, so this needs to create the intermediate data related to steps
    async toStepInfoArray(): Promise<StepInfo[]> {
        // create step info for the number of nodes in the tree
        const stepInfoArray = await Promise.all(this._getOrderedNodes().map(async (node) => {
            // get the result
            var stepInfo = await node.toStepInfo();

            return stepInfo;
        }));

        // return the step info
        return stepInfoArray;
    }

    // will we need variable args, which are represented as byte strings (can get them from each of the steps)
    async toVariableArgs(): Promise<string[]> {
        // create a variable arg array
        var variableArgs = await Promise.all(this._getOrderedNodes().map(async (node) => {
            var variableArgData = await node.getStep().getVariableArgData();

            return variableArgData;
        }));

        return variableArgs;
    }

    // validate the children --> check if the wind percents are correct
    private _validateChildren(node: Node): void {
        // iterate over the children of the node
            // see if the children's wind percent adds to 100% (precision factor)
    }

    // get the nodes in order
    private _getOrderedNodes(): Node[] {
        // get the keys and values in order of their sorting
        const sortedKeys = Object.keys(this.nodes)
        sortedKeys.sort();

        const sortedValues = sortedKeys.map((key) => this.nodes[key]);

        return sortedValues;
    }
}

/* NOTES
- adding & removing a root will not work
    - can add this as a feature later if requested
    - cannot insert keys between each other, must remove node and rebuild children if you want to switch the order
        - can add this functionality later, just more complex than necessary for MVP
- removals recurse, so be careful!
- we can build getters, but I am not sure if this will create much value, other than adding complexity
    - nodes in a mapping seem to make sense, allowing iteration anyway, so easiest just to leave them as is
*/

/* To Do:
- validate the children!
    - ensure that we are combining correct amount in & outs
    - there is an algorithm in the step tree lib --> can use it to validate here as well
        - worth it to deploy contracts that can easily verify?
            - step tree contract?
            - this would be the most consistent with the on-chain implementation, and rpcs are fast enough to make it work well
- need to write a ton more tests for this (workable, but we want to be more sure, as users are going to do a ton to these strategies, and we want to ensure a seamless deployment experience)
*/
