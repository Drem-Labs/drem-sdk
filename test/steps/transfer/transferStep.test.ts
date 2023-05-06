import { FeeInfo } from '../../../src/types/DataTypes/FeeInfo';
import { user, manager } from '../../reference/setup';
import { VaultDeployer } from '../../../src/vaultDeployer';
import { StepTree } from '../../../src/stepTree';
import { TransferStep } from '../../../src/steps/transfer/transferStep';

import { DeploymentInfo } from '../../../src/types/DataTypes/DeploymentInfo';

describe('TransferStep', () => {
    // keep a vault deployer for use
    var vaultDeployer = new VaultDeployer(manager);

    // keep the mock erc20 on hand
    var mockERC20 = manager.sdk().testing.MockERC20;

    describe('constructor', () => {
        it('should create a transfer step', () => {
            expect(() => {
                var transferStep = new TransferStep(manager);
            }).not.toThrow();
        });
    });

    // deployment tests both init and winding capabilities
    describe('deployment', () => {
        it('should be deployable', async () => {
            // start a tree
            var stepTree = new StepTree(manager);

            // create a transfer step
            var transferStep = new TransferStep(manager);

            // insert the transfer step into the tree
            await stepTree.insert(0, 1, transferStep, 0);

            // set the funds into the transfer step (1 eth)
            await transferStep.setFundsIn(1, mockERC20.address);

            // create some null fee info
            var feeInfo = new FeeInfo(0, 0, 0, 0, user.address);

            // deploy the vault with the deployer
            await expect(
                vaultDeployer.deployVault(user.address, "Sample Vault", "SV", mockERC20.address, feeInfo, stepTree)
                ).resolves.toBeDefined();
        });
    });
});
