import { DremManager } from './manager';
import { StepTree } from './stepTree';
import { DeploymentInfo } from './types/DataTypes/DeploymentInfo';
import { FeeInfo } from './types/DataTypes/FeeInfo';

// create a class that can create vaults
export class VaultDeployer {
    // make a base
    base: any;

    constructor(manager: DremManager) {
        // create the vault deployer
        this.base = manager.sdk().VaultDeployer;
    }

    // function to deploy a vault with the required information
    // going to be asynchronous, as it may take a while
    async deployVault(admin: string, name: string, symbol: string, denominationAsset: string, feeInfo: FeeInfo, stepTree: StepTree, setOnCheck=true): Promise<string> {
        // get the step info array
        var stepInfoArray = await stepTree.toStepInfoArray();

        // create the deployment info (this is where admin should be checked for validity, not in this function)
        var deploymentInfo = new DeploymentInfo(admin, name, symbol, denominationAsset, feeInfo, stepInfoArray);

        // variable args will be generated by the tree, so just need to call deploy vault now!
        var variableArgs = await stepTree.toVariableArgs();
        var vaultAddress = await this.base.deployVault(deploymentInfo.toStruct(), variableArgs);

        return vaultAddress;
    }
}


/*
To Do:
- ethers errors are not great, we should catch these and throw better ones when deploying the vault
*/
