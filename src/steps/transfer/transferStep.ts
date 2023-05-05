import { BaseStep } from '../BaseStep';
import { DremManager } from '../../manager';

// really, the transfer step does not do much, so this is just filler to maintain project structure
export class TransferStep extends BaseStep {
    // constructor should take a manager and get the step
    constructor(manager: DremManager) {
        super();

        // get the transfer step
        this.base = manager.sdk().steps.TransferStep;
    }

    // no fixed args, so no need to set them

    // setter for variable arg data

    // getter for variable arg data
}
