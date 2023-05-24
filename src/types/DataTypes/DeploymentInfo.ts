import { StepInfoStruct, StepInfo } from './StepInfo';
import { FeeInfoStruct, FeeInfo } from './FeeInfo';

export type DeploymentInfoStruct = [string, string, string, string, StepInfoStruct[], FeeInfoStruct];

// deployment info, which can be created and exported to a struct
export class DeploymentInfo {
    admin: string;
    name: string;
    symbol: string;
    denominationAsset: string;
    stepInfoArray: StepInfo[];
    feeInfo: FeeInfo;

    constructor(admin: string, name: string, symbol: string, denominationAsset: string, feeInfo: FeeInfo, stepInfoArray: StepInfo[]) {
        this.admin = admin;
        this.name = name;
        this.symbol = symbol;
        this.denominationAsset = denominationAsset;
        this.stepInfoArray = stepInfoArray;
        this.feeInfo = feeInfo;
    }

    // to struct (converting all underlying stuff to a struct also)
    toStruct(): DeploymentInfoStruct {
        return [
            this.admin,
            this.name,
            this.symbol,
            this.denominationAsset,
            this._stepInfoStructArray(),
            this.feeInfo.toStruct()
            ];
    }

    // internal function to construct the step info struct
    private _stepInfoStructArray(): StepInfoStruct[] {
        // create an array to write to
        var stepInfoStructArray: StepInfoStruct[] = [];

        // push the array with the step info structs
        for (var i = 0; i < this.stepInfoArray.length; i += 1) {
            var stepInfoStruct = this.stepInfoArray[i].toStruct();
            stepInfoStructArray.push(stepInfoStruct);
        }

        // return the step info struct array
        return stepInfoStructArray;
    }
}

/* To Do:
- add check for admin being a real address
- add check for denomination asset --> going to become asynchronous
    - this may be best done on the export, but I'm not sure --> leaving it up to later developer discretion
*/
