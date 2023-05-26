import { DremManager } from '../src/manager';
import { getLensVault } from '../src/vault';
import { DeploymentInfo } from '../src/types/DataTypes/DeploymentInfo';
import { FeeInfo } from '../src/types/DataTypes/FeeInfo';
import { InitData } from '../src/types/DremLens/InitData';
import { CollectSettings } from '../src/types/DremLens/CollectSettings';
import { ethers, chainId, manager, user } from './reference/setup';
import { createProfile, PostData } from './reference/utils/lens';
import { createMockTransferStepTree } from './reference/utils/deploy';


describe('Collect', () => {
    // keep a collect module
    var collectModule = manager.sdk().DremCollectModule;

    // keep the mock erc20
    var mockERC20 = manager.sdk().testing.MockERC20;

    // create a bob, with his own manager
    var bob = ethers.Wallet.createRandom();
    var bobSigner = bob.connect(ethers.provider);
    var bobManager = new DremManager(chainId, bobSigner);

    describe('inititalize', () => {
        it('should be inititalizable', async () => {
            // create a profile for alice
                // note: need to add .test on query, but not on creation
            var aliceId = await createProfile(manager, user, 'dremalice.test');

            // create a step tree
            // funds mover will be the collect module
            var stepTree = await createMockTransferStepTree(manager, user, collectModule.address);

            // set the fee and deployment info
            var feeInfo = new FeeInfo(0, 0, 0, 0, user.address);
            var deploymentInfo = new DeploymentInfo(user.address, 'Sample Vault', 'SV', mockERC20.address, feeInfo, stepTree);

            // create the collect settings
            var collectSettings = new CollectSettings(false);

            // get the init data
            var initData = new InitData(collectSettings, deploymentInfo, stepTree);

            // create some post data
            var postData = new PostData(manager, aliceId, (await initData.toBytes()));

            // make a post from the user
                // appears not to be working due to a whitelisting issue
            await expect(
                manager.sdk().lens.LensHub.post(postData.toStruct())
                ).resolves.toBeDefined();

        }, 10000);
    });

    // test processing a collection
    describe('process', () => {
        it('should be collectable', async () => {
            // no need for bob user, as this is not a follower-only vault

            // need to get alice's post (will be done via GraphQL in production, but getting it from the chain here)

            // get the vault, based on a publication id

            // get the step tree out of the vault

            // give some matic & mockERC20

            // collect the vault

        }, 10000);
    });
});

/* NOTES
- cannot test if this works with the lens API, as we are working on a forked chain (actions here are not deployed to mainnt)
    - this means we need to interact directly with the smart contracts to test the interactions
*/
