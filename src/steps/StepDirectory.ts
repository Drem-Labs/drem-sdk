import { TransferStep } from './transfer/transferStep';
/*import { UniswapV3SwapStep } from './uniswap-v3/uniswapV3SwapStep';*/
import { DremManager } from '../manager';

// create a directory between step addresses and classes
// can't integrate with the manager, as this uses all the steps, which need the manager to initialize
// address --> class (chain id will be handled by the manager)
export class StepDirectory {
    // keep the manager to autoload the object
    private manager;

    // keep all the classes (must be here, as they all inherit from the manager)
    private stepMapping: Record<number, Record<string, any>> = {
        80001: {
            "0x42e77022147be8e35a4a64b03091c26c77add346": TransferStep,
            /*"0x6a70e935ae5cec477413a6b8bc1b508577c059f9": UniswapV3SwapStep*/
        }
    };

    constructor(manager: DremManager) {
        this.manager = manager;
    }

    // external get from directory
    getStep(address: string): any {
        var Step = this.stepMapping[this.manager.chainId][address.toLowerCase()];

        var newStep = new Step(this.manager);

        return newStep;
    }
}
