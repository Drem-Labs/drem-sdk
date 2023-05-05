export class BaseStep {
    // address is accessible from base, no need to rewrite it
    base: any;

    // should be able to store fixed arg data, as this should not be stored in the node
    // best to store this arg data here, as it should depend on the vault --> can give the frontend more information about what the step will do
    fixedArgData: string;

    // variable arg data --> steps can be used for wind and unwind
    variableArgData: string;
}
