import { TransferStep } from './transfer/transferStep';
import { UniswapV3SwapStep } from './uniswap-v3/uniswapV3SwapStep';
import { DremManager } from '../manager';
import { InvalidStepError } from '../lib/errors';


// some basic class to be used
interface Class<T> {
    new (arg: T): any;
}

// create a directory between step addresses and classes
// can't integrate with the manager, as this uses all the steps, which need the manager to initialize
// address --> class (chain id will be handled by the manager)
export class StepDirectory {
    // keep the manager to autoload the object
    private manager;

    // keep all the classes (must be here, as they all inherit from the manager)
    private stepMapping: Record<number, Record<string, Class<DremManager>>> = {
        80001: {
            "0x6b6ec4b5f1d9230babaa7120fc2775b4cfd26321": TransferStep,
            "0x6a70e935ae5cec477413a6b8bc1b508577c059f9": UniswapV3SwapStep
        }
    };

    constructor(manager: DremManager) {
        this.manager = manager;
    }

    // external get from directory
    getStep(address: string): any {
        const Step = this.stepMapping[this.manager.chainId][address.toLowerCase()];

        if (!Step) {
            throw new InvalidStepError('No step found for address ' + address);
        }

        var newStep = new Step(this.manager);

        return newStep;
    }
}


function makeTransferStep(manager: DremManager): TransferStep {
    var step = new TransferStep(manager);

    return step;
}
