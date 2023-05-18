import { NodeOutOfBoundsError } from '../lib/errors';
import { BaseStep } from '../steps/BaseStep';
import { Percent } from './Percent';
import { StepInfo } from './DataTypes/StepInfo';

// precision factor (for nodes)
export const PRECISION_FACTOR = 1_000_000;

// compute the maximum of each node
export const MAX_NODES = 10;
export const MAX_PARENT = MAX_NODES - 1;
export const MAX_CHILDREN = MAX_NODES - 1;

// need to have safe setters, as these are complex
// note: these nodes do NOT need to have children, as these will be assigned in the smart contract
    // nodes point up --> just have information about themselves and where they come from
// these nodes must be exportable into step info --> should be connected with more than an address
    // should be a step, which has an address type
export class Node {
    // make all the information readonly, so only the setters can change them
    private parentIndex: number;
    private key: number;
    private step: BaseStep;  // needs to be a step with more complex information
    private windPercent: Percent;

    private children: number[]; // each node can have up to 9 children, this is for internal accounting with the step tree

    // constructor --> set everything at once
    constructor(parentIndex: number, key: number, step: BaseStep, windPercent: number) {
        // set all the variables with their setters
        this.setParentIndex(parentIndex);
        this.setKey(key);
        this.setStep(step);
        this.setWindPercent(windPercent);
    }

    // safe setters and getters
    // just set the parentIndex, make sure it is inside bounds
    setParentIndex(parentIndex: number): void {
        if (parentIndex > MAX_PARENT) {
            throw new NodeOutOfBoundsError('Cannot have a parentIndex over length ' + MAX_PARENT);
        }

        // validate the parent as a key
        this._validateKey(parentIndex);

        // set the parentIndex
        this.parentIndex = parentIndex;
    }

    // keys must be between 0 and the max nodes
    setKey(key: number): void {
        // validate the key
        this._validateKey(key);

        // save the key
        this.key = key;
    }

    // set the step
    setStep(step: BaseStep): void {
        this.step = step;
    }

    // set the wind percent
    setWindPercent(windPercent: number): void {
        this.windPercent = new Percent(windPercent);
    }

    // push a child (simpler operation, goes to end of children)
    pushChild(childKey: number): void {
        // validate the key
        this._validateKey(childKey);

        // ensure that the children don't have too many nodes
        if (this.children.length >= MAX_CHILDREN) {
            throw new NodeOutOfBoundsError('children already full');
        }

        // add the child into the last slot of the array
        this.children.push(childKey);
    }

    // push many children
    pushChildren(childrenKeys: number[]): void {
        if ((this.children.length + childrenKeys.length) >= MAX_CHILDREN) {
            throw new NodeOutOfBoundsError('children will overflow with addition');
        }

        // concatenate the arrays
        this.children.concat(childrenKeys);
    }

    // add a child
    addChild(childIndex: number, childKey: number): void {
        // validate both of them as keys (essentially the same)
        this._validateKey(childIndex);
        this._validateKey(childKey);

        // splice the child in where it is supposed to go
        this.children.splice(childIndex, 0, childKey)
    }


    // replace a child

    // getters
    getParentIndex(): number {
        return this.parentIndex;
    }

    getKey(): number {
        return this.key;
    }

    getStep(): BaseStep {
        return this.step;
    }

    getWindPercent(): number {
        return this.windPercent.value;
    }

    getChild(index: number): number {
        return this.children[index];
    }

    getChildren(): number[] {
        return this.children;
    }

    getChildrenLength(): number {
        return this.children.length;
    }

    // export to stepInfo
    // need to convert the wind percent into a number with the precision factor
    async toStepInfo(): Promise<StepInfo> {
        var fixedArgData = await this.step.getFixedArgData();

        var stepInfo = new StepInfo(this.step.base.address, this.parentIndex, (this.windPercent.value * PRECISION_FACTOR), fixedArgData);

        return stepInfo;
    }

    // validate child
    private _validateKey(key: number): void {
        // ensure that the key is an integer, as it won't throw until much later
        // index should be safe, as this will throw here
        if (!Number.isInteger(key)) {
            throw new NodeOutOfBoundsError('key must be an integer');
        }
        else if ((key < 0) || (key > MAX_NODES)) {
            throw new NodeOutOfBoundsError('Nodes cannot have an index greater than ' + MAX_NODES);
        }
    }
}
