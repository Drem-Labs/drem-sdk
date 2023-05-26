import { CollectSettings, CollectSettingsStruct } from './CollectSettings';
import { DeploymentInfo, DeploymentInfoStruct } from '../DataTypes/DeploymentInfo';
import { StepTree } from '../../stepTree';
import { DremLensDataType } from '../DremLens';

export type InitDataStruct = [CollectSettingsStruct, DeploymentInfoStruct, string[]];

export class InitData extends DremLensDataType {
    // collect settings
    collectSettings: CollectSettings;

    // deployment info
    deploymentInfo: DeploymentInfo;

    // store the step tree, so you can get the variable args later (can't get in a synchronous constructor)
    stepTree: StepTree;

    // constructor: collect settings, deployment info, step tree
    constructor(collectSettings: CollectSettings, deploymentInfo: DeploymentInfo, stepTree: StepTree) {
        super();

        // set the internal data members
        this.collectSettings = collectSettings;
        this.deploymentInfo = deploymentInfo;
        this.stepTree = stepTree;
    }

    // needs to go to a struct
    // this must be asynchronous due to the amount of data being pulled out of the step tree
    async toStruct(): Promise<InitDataStruct> {
        return [
            (await this.collectSettings.toStruct()),
            (await this.deploymentInfo.toStruct()),
            (await this.stepTree.toVariableArgs())
            ];
    }

    // get the types
    structTypes(): string[] {
        // get the types for each struct
        return [
            this.collectSettings.structType(),
            this.deploymentInfo.structType(),
            'bytes[]'
            ];
    }
}

/* NOTES
- should be used in conjunction with the Post endpoint of the Lens API: https://docs.lens.xyz/docs/create-post-typed-data
    - really just constructing this data type and calling toBytes() --> feed into UnknownCollectModuleParams: https://docs.lens.xyz/docs/create-post-typed-data#unknowncollectmodule
        - see drem-core repository for collect module address: https://github.com/Drem-Labs/drem-core/
- why isn't this exportable from the step tree?
    - need to give it collect settings and deployment info, which are both unique from the step tree, warranting its own object
*/
