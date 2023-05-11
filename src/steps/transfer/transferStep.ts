import { Signer, Contract, BigNumber, utils, providers } from 'ethers';
import { BaseStep } from '../BaseStep';
import { DremManager } from '../../manager';
import { ERC20_ABI } from '../../abis/ERC20';
import { VariableArgsNotSetError, InsufficientBalance, InsufficientAllowance } from '../../lib/errors';

// really, the transfer step does not do much, so this is just filler to maintain project structure
export class TransferStep extends BaseStep {
    // going to want to keep the manager to use the signer later
        // want this to be updated in one place if it changes
    private manager: DremManager;

    // amount, denomination asset
    private amount: number;
    private denominationAsset: Contract;

    // constructor should take a manager and get the step
    constructor(manager: DremManager) {
        super();

        // get the transfer step
        this.base = manager.sdk().steps.TransferStep;

        // keep the manger
        this.manager = manager;
    }

    // no fixed args, so no need to set them

    // load from a vault (no use for the stepkey)
    async load(vault: any, stepKey: number): void {
        // get the address
        var denominationAssetAddress = await vault.getDenominationAsset();

        // set the denomination asset
        this.denominationAsset = new Contract(denominationAsset, ERC20_ABI, this.manager.defaultSignerOrProvider);
    }

    // setter for variable arg data
    // allow any number to be input, as this will be converted when getting variable arg data
    async setFundsIn(amount: number, denominationAsset: string): Promise<void> {
        this.denominationAsset = new Contract(denominationAsset, ERC20_ABI, this.manager.defaultSignerOrProvider);
        this.amount = amount;

        // check the funds in, and set them to 0 if they are incorrect
        await this.checkFunds().catch((error) => {
            this.amount = 0;

            // throw the error
            throw error;
        })
    }

    // convert the readable data into binary when requested to get the variable arg data
    async getVariableArgData(): Promise<string> {
        // get the amount for export
        var preciseAmount = await this.getPreciseAmount();

        // set the internal variable arg data
        var variableArgData = utils.defaultAbiCoder.encode(["uint256"], [preciseAmount]);

        return variableArgData;
    }

    // get the amount
    getAmount(): number {
        return this.amount;
    }

    // get the precise amount
    async getPreciseAmount(): Promise<BigNumber> {
        // get the denomination asset's contract (will check the variable args here)
        var erc20 = this.getDenominationAsset();

        // get the denomination asset's decimals & precision factor
        var decimals = await erc20.decimals();
        var precisionFactor = BigNumber.from((10**decimals).toString());

        // set the amount in with the precision factor to an integer
        // round the number to the correct amount
        var preciseAmount = precisionFactor.mul(this.getAmount());

        return preciseAmount;
    }

    // get the denomination asset (should return a contract)
    getDenominationAsset(): Contract {
        this._checkVariableArgsSet();

        return this.denominationAsset;
    }

    // check the funds of the user
    async checkFunds(): Promise<void> {
        // if the default is a provider, throw
        // need to have this inside the function to keep test suite from throwing error
        if (this.manager.defaultSignerOrProvider instanceof providers.Provider) {
            throw new InsufficientBalance('Provider cannot have a balance. Init manager with a signer instead.');
        }

        // get the precise amount
        var preciseAmount = await this.getPreciseAmount();

        // check the balance of the owner
        var address = await this.manager.defaultSignerOrProvider.getAddress();
        var balance = await this.getDenominationAsset().balanceOf(address);

        // throw if insufficient
        if (balance < preciseAmount) {
            throw new InsufficientBalance('User lacks the funds to transfer into this vault.');
        }

    }

    // check the allowance of the user for this asset
    async checkAllowance(spenderAddress: string, setOnCheck=true): Promise<void> {
        // must be a signer, not a provider
        // need to have this inside the function to keep test suite from throwing error
        if (this.manager.defaultSignerOrProvider instanceof providers.Provider) {
            throw new InsufficientBalance('Provider cannot have a balance. Init manager with a signer instead.');
        }

        // get the precise amount
        var preciseAmount = await this.getPreciseAmount();

        // get the asset
        var erc20 = this.getDenominationAsset();

        // check that allowance with the denoimnation asset
        var ownerAddress = await this.manager.defaultSignerOrProvider.getAddress();
        var allowance = await erc20.allowance(ownerAddress, spenderAddress);

        // set the allowance to the amount necessary if it is insufficient & return the
        if (preciseAmount > allowance) {
            // should throw here, unless we can set on check
            if (setOnCheck) {
                // check, allow the ERC20 to throw if this is not done correctly
                await erc20.approve(spenderAddress, preciseAmount);
            }
            else {
                throw new InsufficientAllowance(spenderAddress + ' is not allowed to spend ' + this.amount + ' of ' + this.denominationAsset);
            }
        }
    }

    // ensure that the variable args have been set
    private _checkVariableArgsSet(): void {
        if (this.denominationAsset === undefined) {
            throw new VariableArgsNotSetError('Make sure to .setFundsIn() before using this step!');
        }
    }
}

/* To Do:
- check that the denomination asset is the correct one on funds in --> can save yourself later
    - currently asynchronous to allow for this later
*/
