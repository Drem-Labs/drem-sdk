import { * as ethers } from 'ethers';
import { CollectSettings, CollectSettingsStruct } from './CollectSettings';
import { DeploymentInfo, DeploymentInfoStruct } from '../DataTypes/DeploymentInfo';
import { StepTree } from '../../stepTree';

export type InitDataStruct = [CollectSettingsStruct, DeploymentInfoStruct, string[]];

export class InitData {
    // collect settings
    collectSettings: CollectSettings;

    // deployment info
    deploymentInfo: DeploymentInfo;

    // store the step tree, so you can get the variable args later (can't get in a synchronous constructor)
    stepTree: StepTree;

    // constructor: collect settings, deployment info, step tree
    constructor(collectSettings: CollectSettings, deploymentInfo: DeploymentInfo, stepTree: StepTree) {
        // set the internal data members
        this.collectSettings = collectSettings;
        this.deploymentInfo = deploymentInfo;
        this.stepTree = stepTree;
    }

    // needs to go to a struct
    // this must be asynchronous due to the amount of data being pulled out of the step tree
    async toStruct(): Promise<InitDataStruct> {
        return [
            this.collectSettings.toStruct(),
            this.deploymentInfo.toStruct(),
            (await this.stepTree.toVariableArgs())
            ];
    }

    // get the types
    structTypes(): string[] {
        // get the types for each struct
        return [
            this.collectSettings.structType(),
            this.deploymentInfo.structType(),
            "string[]"
            ];
    }


    // make a toBytes, so this struct can be fed into a post
    async toBytes(): Promise<string> {
        var values = await this.toStruct();
        var types = this.structTypes();

        // encode the struct with ethers and return it
        var bytes = ethers.utils.defaultAbiEncoder(types, values);

    }
}

/* NOTES
- should be used in conjunction with the Post endpoint of the Lens API: https://docs.lens.xyz/docs/create-post-typed-data
    - really just constructing this data type and calling toBytes() --> feed into UnknownCollectModuleParams: https://docs.lens.xyz/docs/create-post-typed-data#unknowncollectmodule
        - see drem-core repository for collect module address: https://github.com/Drem-Labs/drem-core/
*/
