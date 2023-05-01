import { InvalidPercentError, NodeOutOfBounds } from '../lib/errors';

// precision factor (for nodes)
const PRECISION_FACTOR = 1_000_000;

// compute the maximum of each node
const MAX_NODES = 10;
const MAX_PARENT = MAX_NODES - 1;
const MAX_CHILDREN = MAX_NODES - 1;

// a simple class for defining percentages
class Percent extends number {
    constructor(value: number) {
        if ( (value < 0) || (value > 1) ) {
            throw InvalidPercentError('Percent must be between 0 and 1');
        }

        // no error --> assign the value
        this = value;
    }
}

// need to have safe setters, as these are complex
// these nodes must be exportable into step info --> should be connected with more than an address
    // should be a step, which has an address typ
export class Node<StepType> {
    parent: bigint;
    key: bigint;
    step: StepType;  // needs to be a step with more complex information
    windPercent: Percent;

    // constructor --> set everything at once
    constructor(parent: bigint, key: bigint, step: StepType, windPercent: number) {
        // set all the variables with their setters
        setParent(parent);
        setKey(key);
        setStep(step);
        setWindPercent(number);
    }

    // safe setters and getters
    // just set the parent, make sure it is inside bounds
    setParent(parent: bigint): void {
        if (parent > MAX_PARENT) {
            throw NodeOutOfBounds('Cannot have a parent over length ' + MAX_PARENT);
        }

        // set the parent
        this.parent = parent;
    }

    // keys must be between 0 and tthe max nodes

    // export to stepInfo
    // need to convert the wind percent into a bigint with the precision factor
    toStruct(): [bigint, bigint[9], bigint, string, bigint] {
        var adjWindPercent:bigint = <bigint>(windPercent * PRECISION_FACTOR);
    }
}
