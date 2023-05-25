import { DeploymentInfo } from '../src/types/DataTypes/DeploymentInfo';
import { FeeInfo } from '../src/types/DataTypes/FeeInfo';
import { InitData } from '../src/types/DremLens/InitData';
import { CollectSettings } from '../src/types/DremLens/CollectSettings';
import { manager, user } from './reference/setup';
import { createProfile, PostData } from './reference/utils/lens';
import { createMockTranserStepTree } from './reference/utils/deploy';


describe('Collect', () => {
    // keep a collect module
    var collectModule = manager.sdk().DremCollectModule;

    // keep the mock erc20
    var mockERC20 = manager.sdk().testing.MockERC20;

    describe('inititalize', () => {
        it('should be inititalizable', async () => {
            // create a profile for bob
            var bobId = await createProfile(manager, user, 'drembob');

            // create a step tree
            // funds mover will be the collect module
            var stepTree = await createMockTranserStepTree(manager, user, collectModule.address);

            // get the step info
            var stepInfoArray = await stepTree.toStepInfoArray();

            // set the fee and deployment info
            var feeInfo = new FeeInfo(0, 0, 0, 0, user.address);
            var deploymentInfo = new DeploymentInfo(user.address, 'Sample Vault', 'SV', mockERC20.address, feeInfo, stepInfoArray);

            // create the collect settings
            var collectSettings = new CollectSettings(false);

            // get the init data
            var initData = new InitData(collectSettings, deploymentInfo, stepTree);

            // create some post data
            var postData = new PostData(manager, bobId, (await initData.toBytes()));

            // make a post from the user
            await expect(
                manager.sdk().lens.LensHub.post(postData.toStruct())
                ).resolves.toBeDefined();

        });
    });

    // test processing a collection
});

/* NOTES
- cannot test if this works with the lens API, as we are working on a forked chain (actions here are not deployed to mainnt)
    - this means we need to interact directly with the smart contracts to test the interactions
*/
