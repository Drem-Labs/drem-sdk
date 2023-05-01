import { NodeOutOfBounds } from '../lib/errors';
import { BaseStep } from '../steps/BaseStep';
import { Percent } from './Percent';

// precision factor (for nodes)
const PRECISION_FACTOR = 1_000_000;

// compute the maximum of each node
const MAX_NODES = 10;
const MAX_PARENT = MAX_NODES - 1;
const MAX_CHILDREN = MAX_NODES - 1;

// need to have safe setters, as these are complex
// note: these nodes do NOT need to have children, as these will be assigned in the smart contract
    // nodes point up --> just have information about themselves and where they come from
// these nodes must be exportable into step info --> should be connected with more than an address
    // should be a step, which has an address type
export class Node {
    parentIndex: number;
    key: number;
    step: BaseStep;  // needs to be a step with more complex information
    windPercent: Percent;

    children: number[9]; // each node can have up to 9 children, this is for internal accounting with the step tree

    // constructor --> set everything at once
    constructor(parentIndex: number, key: number, step: BaseStep, windPercent: number) {
        // set all the variables with their setters
        this.setParentIndex(parentIndex);
        this.setKey(key);
        this.setStep(step);
        this.setWindPercent(number);
    }

    // safe setters and getters
    // just set the parentIndex, make sure it is inside bounds
    setParentIndex(parentIndex: number): void {
        if (parentIndex > MAX_PARENT) {
            throw NodeOutOfBounds('Cannot have a parentIndex over length ' + MAX_PARENT);
        }
        else if (!Number.isInteger(parentIndex)) {
            throw NodeOutOfBounds('Cannot have a non-integer parentIndex');
        }

        // set the parentIndex
        this.parentIndex = parentIndex;
    }

    // keys must be between 0 and the max nodes
    setKey(key: number): void {
        if ((key < 0) || (key > MAX_NODES)) {
            throw NodeOutOfBounds('Nodes cannot have an index greater than ' + MAX_NODES);
        }
        else if (!Number.isInteger(parentIndex)) {
            throw NodeOutOfBounds('Cannot have a non-integer key');
        }

        // save the key
        this.key = key;
    }

    // set the step
    setStep(step: BaseStep): void {

    }


    // export to stepInfo
    // should check the wind percents of its children --> ensures that all below this node are valid
    // need to convert the wind percent into a number with the precision factor
}
