import { Percent } from './types/Percent';
import { Node } from './types/Node';
import { BaseStep } from './steps/BaseStep';
import { DremManager } from './manager';
import { PercentageOverflowError, InvalidStepError, RootNodeNonNullParentError, RootWindPercentNotZeroError, NodeInvalidParentError, NodeWindPercentZeroError } from './lib/errors'
import { StepInfo } from  './types/DataTypes/StepInfo';

// create the step tree
export class StepTree {
    root: number;
    nodes: {[key: number]: Node} = {};

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
    async insert(parentIndex: number, key: number, step: BaseStep, windPercent: number): Promise<void> {
        // validate the step
        await this._validateStep(step);

        // create the node
        var newNode = new Node(parentIndex, key, step, windPercent);

        // case 1: need to set the root
        if (this.root === undefined) {
            // check the inputs
            if (parentIndex != 0) { throw new RootNodeNonNullParentError("Root should not have a parent"); }
            if (windPercent != 0) { throw new RootWindPercentNotZeroError("Root not being wound, should not have wind percent"); }

            // set the root value to 1
            this.nextNodeKey = 1;
            this.root = this.nextNodeKey;

            // set the node
            this.nodes[this.nextNodeKey] = newNode;
        }
        else {
            // get the parent
            var parent = this.nodes[parentIndex];

            // parent must be valid
            var parentKey = parent.getKey();
            if ((parentKey === 0) || (parentKey >= this.nextNodeKey)) { throw new NodeInvalidParentError('Parent must be between 0 and ' + this.nextNodeKey); }

            // need non-zero wind
            // THIS IS UP FOR DEBATE AT THE SMART CONTRACT LEVEL
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
    toStepInfoArray(): StepInfo[] {
        // create step info for the number of nodes in the tree
        var stepInfoArray: StepInfo[];

        // iterate over the nodes in the tree
        const nodeLen = Object.keys(this.nodes).length;
        for (var i = 0; i < nodeLen; i += 1) {
            // contruct step info for each node
            var stepInfo = this.nodes[i].toStepInfo();
            stepInfoArray.push(stepInfo);

            // validate the children of the node
            this._validateChildren(this.nodes[i]);
        }

        // return the step info
        return stepInfoArray;
    }

    // will we need variable args, which are represented as byte strings (can get them from each of the steps)
    toVariableArgs(): string[] {
        // create a variable arg array
        var variableArgs: string[];

        // iterate over the nodes to get the variable args out
        const nodeLen = Object.keys(this.nodes).length;
        for (var i = 0; i < nodeLen; i += 1) {
            // get the variable arg data
            var variableArgData = await this.nodes[i].getStep().getVariableArgData();

            // push the variable args from whatever node --> step is storing
            variableArgs.push(variableArgData);
        }

        return variableArgs;
    }

    // validate the children --> check if the wind percents are correct
    private _validateChildren(node: Node): void {
        // iterate over the children of the node
            // see if the children's wind percent adds to 100% (precision factor)
    }
}

/* NOTES
- adding & removing a root will not work
    - can add this as a feature later if requested
    - cannot insert keys between each other, must remove node and rebuild children if you want to switch the order
        - can add this functionality later, just more complex than necessary for MVP
- removals recurse, so be careful!
*/

/* To Do:
- validate the children!
*/
