import { FeeInfo } from '../../../src/types/DataTypes/FeeInfo';
import { user, manager, giveMatic } from '../../reference/setup';
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
        it.concurrent('should be deployable', async () => {
            // start a tree
            var stepTree = new StepTree(manager);

            // create a transfer step
            var transferStep = new TransferStep(manager);

            // insert the transfer step into the tree
            await stepTree.insert(0, transferStep, 0);

            // give matic to the user
            await giveMatic(user.address, 1);

            // user needs some funds
            var preciseAmount = (1 * (10 ** (await mockERC20.decimals()))).toString();
            await mockERC20.mint(user.address, preciseAmount);

            // set the funds into the transfer step (1 matic)
            await transferStep.setFundsIn(1, mockERC20.address);

            // check the alloance with the transfer step
            await transferStep.checkAllowance(vaultDeployer.base.address);

            // create some null fee info
            var feeInfo = new FeeInfo(0, 0, 0, 0, user.address);

            // deploy the vault with the deployer
            await expect(
                vaultDeployer.deployVault(user.address, "Sample Vault", "SV", mockERC20.address, feeInfo, stepTree)
                ).resolves.toBeDefined();
        }, 10000);
    });
});
