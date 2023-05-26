import { StepTree } from '../../stepTree';
import { StepInfoStruct, StepInfo } from './StepInfo';
import { FeeInfoStruct, FeeInfo } from './FeeInfo';

const STRUCT_TYPE = '(address,string,string,address,(address,uint8,uint256,bytes)[],(uint24,uint24,uint24,uint24,address))';

export type DeploymentInfoStruct = [string, string, string, string, StepInfoStruct[], FeeInfoStruct];

// deployment info, which can be created and exported to a struct
export class DeploymentInfo {
    admin: string;
    name: string;
    symbol: string;
    denominationAsset: string;
    stepTree: StepTree;
    feeInfo: FeeInfo;

    // this is a synchronous call, but the step info array is complex, so passing a step tree is much simpler
    constructor(admin: string, name: string, symbol: string, denominationAsset: string, feeInfo: FeeInfo, stepTree: StepTree) {
        this.admin = admin;
        this.name = name;
        this.symbol = symbol;
        this.denominationAsset = denominationAsset;
        this.stepTree = stepTree;
        this.feeInfo = feeInfo;
    }

    // to struct (converting all underlying stuff to a struct also)
    async toStruct(): Promise<DeploymentInfoStruct> {
        return [
            this.admin,
            this.name,
            this.symbol,
            this.denominationAsset,
            (await this._stepInfoStructArray()),
            this.feeInfo.toStruct()
            ];
    }

    // get the type of the struct --> in VaultDeployer.d.ts
    structType(): string {
        return STRUCT_TYPE;
    }

    // internal function to construct the step info struct
    private async _stepInfoStructArray(): Promise<StepInfoStruct[]> {
        // get the step info array
        var stepInfoArray = await this.stepTree.toStepInfoArray();

        // create an array to write to
        var stepInfoStructArray: StepInfoStruct[] = [];

        // push the array with the step info structs (should be pretty quick, so don't worry about concurrency)
        for (var i = 0; i < stepInfoArray.length; i += 1) {
            var stepInfoStruct = stepInfoArray[i].toStruct();
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
