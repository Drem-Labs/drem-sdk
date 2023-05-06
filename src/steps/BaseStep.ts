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

    // all setters will be different, really no reason to make them here
}
