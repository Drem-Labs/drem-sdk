import { InvalidStepError } from '../lib/errors';
import { DremManager } from '../manager';

export class BaseStep {
    // address is accessible from base, no need to rewrite it
    base: any;

    // going to want to keep the manager to use the signer later
        // want this to be updated in one place if it changes
    protected manager: DremManager;

    // constructor to keep the manager
    constructor(manager: DremManager) {
        // keep the manger
        this.manager = manager;
    }

    // should be able to store fixed arg data, as this should not be stored in the node
    // all arg data should be stored in a readable form and only be converted when forming the vault

    // getters for the fixed and variable arg data --> return null bytes
    // lots of conversion going on here --> going to make them promises
    async getFixedArgData(): Promise<string> {
        return "0x00";
    }

    async getVariableArgData(): Promise<string> {
        return "0x00";
    }

    // this will be overloaded with real arguments using the vault
    // base step needs to have the vault & steptree as type any, so there is no conflict
    //
    async load(vault: any, stepKey: number): void {
        throw new InvalidStepError('This step cannot be loaded. Please contact SDK development team.');
    }

    // autoset (overridden in steps)
    async autoset(amountIn: number): void {

    }

    // all other setters will be different, really no reason to make them here
        // no reason to set the wind percent, as this is handled at the node level, not the step level
}
