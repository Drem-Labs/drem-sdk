import { Signer, Contract, utils } from 'ethers';
import { BaseStep } from '../BaseStep';
import { DremManager } from '../../manager';
import { ERC20_ABI } from '../../abis/ERC20';

// really, the transfer step does not do much, so this is just filler to maintain project structure
export class TransferStep extends BaseStep {
    // going to want to keep the manager to use the signer later
        // want this to be updated in one place if it changes
    private manager: DremManager;

    // amount, denomination asset
    private amount: number;
    private denomoinationAsset: Contract;

    // constructor should take a manager and get the step
    constructor(manager: DremManager) {
        super();

        // get the transfer step
        this.base = manager.sdk().steps.TransferStep;

        // keep the manger
        this.manager = manager;
    }

    // no fixed args, so no need to set them

    // setter for variable arg data
    // allow any number to be input, as this will be converted when getting variable arg data
    async setFundsIn(amount: number, denomoinationAsset: string): Promise<void> {
        this.amount = amount;
        this.denomoinationAsset = new Contract(denomoinationAsset, ERC20_ABI, this.manager.defaultSignerOrProvider);
    }

    // convert the readable data into binary when requested to get the variable arg data
    async getVariableArgData(): Promise<string> {
        // get the denomination asset's contract
        var erc20 = this.getDenominationAsset();

        // get the denomination asset's decimals & precision factor
        var decimals = await erc20.decimals();
        var precisionFactor = 10**decimals;

        // set the amount in with the precision factor to an integer
        // round the number to the correct amount
        var preciseNum = Math.round(this.amount * precisionFactor)

        // set the internal variable arg data
        var variableArgData = utils.defaultAbiCoder.encode(["uint256"], [preciseNum]);

        return variableArgData;
    }

    // get the amount
    getAmount(): number {
        return this.amount;
    }

    // get the denomination asset (should return a contract)
    getDenominationAsset(): Contract {
        return this.denomoinationAsset;
    }
}

/* To Do:
- check that the denomination asset is the correct one on funds in --> can save yourself later
    - currently asynchronous to allow for this later
*/
