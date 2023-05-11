import { InvalidStepError } from '../lib/errors';

export class BaseStep {
    // address is accessible from base, no need to rewrite it
    base: any;

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

    // this will be overloaded with real arguments using the vault and not type any
    async load(vault: any, stepKey: number): void {
        throw new InvalidStepError('This step cannot be loaded. Please contact SDK development team.');
    }

    // autoset (overridden in steps)
    async autoset(amountIn: number): void {

    }

    // all other setters will be different, really no reason to make them here
        // no reason to set the wind percent, as this is handled at the node level, not the step level
}
