import { providers, Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSignerOrProvider: Signer | providers.Provider): any;
export type PolygonMumbaiSdk = ReturnType<typeof getPolygonMumbaiSdk>;
export declare function getPolygonMumbaiSdk(defaultSignerOrProvider: Signer | providers.Provider): {
    StepTreeLib: types.polygonMumbai.StepTreeLib;
    DremHub: types.polygonMumbai.DremHub;
    FeeController: types.polygonMumbai.FeeController;
    PriceAggreagtor: types.polygonMumbai.PriceAggreagtor;
    AssetRegistry: types.polygonMumbai.AssetRegistry;
    VaultDeployer: types.polygonMumbai.VaultDeployer;
    DremCollectModule: types.polygonMumbai.DremCollectModule;
    Vault: types.polygonMumbai.Vault;
    steps: {
        TransferStep: types.polygonMumbai.steps.TransferStep;
        UniswapV3SwapStep: types.polygonMumbai.steps.UniswapV3SwapStep;
    };
    testing: {
        MockERC20: types.polygonMumbai.testing.MockERC20;
    };
    lens: {
        LensHub: types.polygonMumbai.lens.LensHub;
        ProfileCreation: types.polygonMumbai.lens.ProfileCreation;
    };
};
