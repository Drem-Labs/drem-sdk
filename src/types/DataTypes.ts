// this is an incredibly simple datatype, as it should only be used intermediately
    // it does not check to be used with correct values, so these checks need to be done elsewhere
export class StepInfo {
    interactionAddress: string;
    parentIndex: number;
    windPercent: number;  // this is NOT a percent, as it is just before the deployment
    fixedArgData: string;

    // some constructor
    constructor(interactionAddress: string, parentIndex: number, windPercent: number, fixedArgData: string) {
        // set the variables
        this.interactionAddress = interactionAddress;
        this.parentIndex = parentIndex;
        this.windPercent = windPercent;
        this.fixedArgData = fixedArgData;
    }

    // export to struct
    toStruct(): any[] {
        // format the struct as it should be
        return [this.interactionAddress, this.parentIndex, this.windPercent, this.fixedArgData];
    }
}
