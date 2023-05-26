import { DremManager } from '../src/manager';
import { StepTree } from '../src/stepTree';
import { getLensVault } from '../src/vault';
import { DeploymentInfo } from '../src/types/DataTypes/DeploymentInfo';
import { FeeInfo } from '../src/types/DataTypes/FeeInfo';
import { InitData } from '../src/types/DremLens/InitData';
import { CollectSettings } from '../src/types/DremLens/CollectSettings';
import { ProcessingData } from '../src/types/DremLens/ProcessingData';
import { ethers, chainId, manager, user } from './reference/setup';
import { createProfile, PostData } from './reference/utils/lens';
import { createMockTransferStepTree } from './reference/utils/deploy';
import { giveMatic } from './reference/setup';


describe('Collect', () => {
    // keep a collect module
    var collectModule = manager.sdk().DremCollectModule;

    // keep the mock erc20
    var mockERC20 = manager.sdk().testing.MockERC20;

    // global deployment information
    var aliceId: number;
    var stepTree: StepTree;
    var feeInfo: FeeInfo;
    var deploymentInfo: DeploymentInfo;
    var collectSettings: CollectSettings;
    var initData: InitData;
    var postData: PostData;

    // create a bob, with his own manager
    var bob = ethers.Wallet.createRandom();
    var bobSigner = bob.connect(ethers.provider);
    var bobManager = new DremManager(chainId, bobSigner);

    // before all tests, create some data
    beforeAll(async () => {
        // create a profile for alice
            // note: need to add .test on query, but not on creation
        aliceId = await createProfile(manager, user, 'dremalice.test');
    });

    // brand new step tree each time, as these will be different vaults
    beforeEach(async () => {
        // create a step tree
        // funds mover will be the collect module
        stepTree = await createMockTransferStepTree(manager, user, collectModule.address);

        // set the fee and deployment info
        feeInfo = new FeeInfo(0, 0, 0, 0, user.address);
        deploymentInfo = new DeploymentInfo(user.address, 'Sample Vault', 'SV', mockERC20.address, feeInfo, stepTree);

        // create the collect settings
        collectSettings = new CollectSettings(false);

        // get the init data
        initData = new InitData(collectSettings, deploymentInfo, stepTree);

        // create some post data
        postData = new PostData(manager, aliceId, (await initData.toBytes()));
    });

    // test initialization
    it('should be inititalizable', async () => {
        // make a post from the user
            // appears not to be working due to a whitelisting issue
        await expect(
            manager.sdk().lens.LensHub.post(postData.toStruct())
            ).resolves.toBeDefined();

    }, 10000);

    // test processing a collection (from bob's perspective, not alice's)
    it('should be collectable', async () => {
        // deploy a vault from alice
        var resp = await manager.sdk().lens.LensHub.post(postData.toStruct());
        await resp.wait();  // can be the minimum amount of confirmations here, don't need to worry

        // no need for bob to have a profile, as this is not a follower-only vault

        // need to get alice's post (will be done via GraphQL in production, but getting it from the chain here)
        var lensHub = bobManager.sdk().lens.LensHub;
        var filter = lensHub.filters.PostCreated(aliceId);
        var events = await lensHub.queryFilter(filter, 'latest');
        var pubId = events[0].args.pubId;

        // use the pub id, as this can be used with the SDK to get the associated vault
            // this makes more sense as a workflow, as there are likely to be posts that are not vaults
        // get the vault, based on a publication id
        var vault = await getLensVault(bobManager, aliceId, pubId);

        // get the step tree out of the vault
        var bobStepTree = await vault.getTree();

        // give some matic & mockERC20
        await giveMatic(bob.address, 1);
        var mockERC20 = bobManager.sdk().testing.MockERC20;
        var preciseAmount = (1 * (10 ** (await mockERC20.decimals()))).toString();
        await mockERC20.mint(bob.address, preciseAmount);

        // set the step tree to use the mock erc20 granted
        // this is a transfer step because of how the vault gets nodes (with the step directory)
        var transferStep: any = bobStepTree.nodes[1].getStep();
        await transferStep.setFundsIn(1);
        await transferStep.checkAllowance(bobManager.sdk().DremCollectModule.address);  // error with where the funds are moved from

        // create some processing data (no follower token id)
        var processingData = new ProcessingData(0, stepTree);

        // collect the vault using lens
        await expect(manager.sdk().lens.LensHub.collect(aliceId, pubId, processingData.toBytes())).resolves.toBeDefined();

    }, 10000);
});

/* NOTES
- cannot test if this works with the lens API, as we are working on a forked chain (actions here are not deployed to mainnt)
    - this means we need to interact directly with the smart contracts to test the interactions
*/
