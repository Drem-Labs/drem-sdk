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
}
