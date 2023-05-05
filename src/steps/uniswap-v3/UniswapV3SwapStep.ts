import { BaseStep } from '../BaseStep';
import { DremManager } from '../../manager';

export class UniswapV3SwapStep extends BaseStep {
    constructor(manager: DremManager) {
        super();

        // get the swap step
        this.base = manager.sdk().steps.UniswapV3SwapStep;
    }

    // setter for fixed arg data

    // setter for variable arg data

    // getter for fixed arg data

    // getter for variable arg data
}

/* To Do:
- need to simplify the winding for exports
*/
