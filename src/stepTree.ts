import { Percent } from './types/Percent';
import { Node } from './types/Node';
import { BaseStep } from './steps/BaseStep';
import { DremManager } from './manager';
import { PercentageOverflowError, InvalidStepError, RootNodeNonNullParentError, RootWindPercentNotZeroError, NodeInvalidParentError, NodeWindPercentZeroError } from './lib/errors'

// create the step tree
export class StepTree {
    root: Node;
    nodes: {[key: number]: Node} = {};

    // should store the next node key, so you don't have to compute
    nextNodeKey: number;

    // keep the hub
    hub: any;

    // constructor to get the hub
    constructor(manager: DremManager) {
        // create the lib
        this.hub = manager.sdk().DremHub;
    }

    // validate the step with the drem hub
    async validateStep(step: BaseStep): Promise<void> {
        // check the step address with the drem hub
        var valid = (await this.hub.isStepWhitelisted(step.base.address));

        // if the step isn't in the drem hub, return that it is not valid
        if (!valid) {
            throw new InvalidStepError(step.base.address + " is not a whitelisted step");
        }
    }

    // add a node
    // good to check the wind percent later, as it doesn't require anything
    async insert(parentIndex: number, key: number, step: BaseStep, windPercent: number): Promise<void> {
        // validate the step
        this.validateStep(step);

        // create the node
        var newNode = new Node(parentIndex, key, step, windPercent);

        // case 1: need to set the root
        if (!(this.root === undefined)) {
            // check the inputs
            if (parentIndex != 0) { throw new RootNodeNonNullParentError("Root should not have a parent"); }
            if (windPercent != 0) { throw new RootWindPercentNotZeroError("Root not being wound, should not have wind percent"); }

            // set the root value to 1
            this.nextNodeKey = 1;
            this.root = new Node(parentIndex, this.nextNodeKey, step, windPercent)
        }
        else {
            // get the parent
            var parent = this.nodes[parentIndex];

            // parent must be valid
            if ((parent.key === 0) || (parent.key >= this.nextNodeKey)) { throw new NodeInvalidParentError('Parent must be between 0 and ' + this.nextNodeKey); }

            // need non-zero wind
            // THIS IS UP FOR DEBATE AT THE SMART CONTRACT LEVEL
            if (windPercent == 0) { throw new NodeWindPercentZeroError('Nodes must wind'); }

            // sum the wind percents & see if there is any room for more (children cannot access parent nodes, so it must be done here)
            var windPercentTotal = new Percent(0);
            windPercentTotal.add(windPercent);
            for (var i = 0; i < parent.children.length; i += 1) {
                // increment the percent total
                windPercentTotal.addPercent(this.nodes[parent.children[i]].windPercent);

            }

            // create the node
            this.nodes[this.nextNodeKey] = new Node(parentIndex, this.nextNodeKey, step, windPercent);

            // add the node to the children
            parent.children[parent.children.length] = this.nextNodeKey;

            // set the parent
            // this may be unnecessary, but we can test that theory later
            this.nodes[parentIndex] = parent;
        }

        // increment the next node key
        this.nextNodeKey += 1;
    }

    // removal algorithm

    // function to export all of these to steps (step info type)

}

/* NOTES
- adding & removing a root will not work
    - can add this as a feature later if requested
    - cannot insert keys between each other, must remove node and rebuild children if you want to switch the order
        - can add this functionality later, just more complex than necessary for MVP
- removals recurse, so be careful!
*/
