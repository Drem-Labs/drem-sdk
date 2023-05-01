import { DremManager } from './manager';

// create a class that can create vaults
export class VaultDeployer {
    // make a base
    base: any;

    constructor(manager: DremManager) {
        // create the vault deployer
        this.base = manager.sdk().VaultDeployer;
    }

    // function to deploy a StepTree --> becomes a vault
}
