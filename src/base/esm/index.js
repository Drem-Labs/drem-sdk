import { Contract } from 'ethers';
import polygonMumbai_StepTreeLib_abi from '../../../abis/polygonMumbai/StepTreeLib.json';
import polygonMumbai_DremHub_abi from '../../../abis/polygonMumbai/DremHub.json';
import polygonMumbai_FeeController_abi from '../../../abis/polygonMumbai/FeeController.json';
import polygonMumbai_PriceAggreagtor_abi from '../../../abis/polygonMumbai/PriceAggreagtor.json';
import polygonMumbai_AssetRegistry_abi from '../../../abis/polygonMumbai/AssetRegistry.json';
import polygonMumbai_VaultDeployer_abi from '../../../abis/polygonMumbai/VaultDeployer.json';
import polygonMumbai_DremCollectModule_abi from '../../../abis/polygonMumbai/DremCollectModule.json';
import polygonMumbai_Vault_abi from '../../../abis/polygonMumbai/Vault.json';
import polygonMumbai_steps_TransferStep_abi from '../../../abis/polygonMumbai/steps/TransferStep.json';
import polygonMumbai_steps_UniswapV3SwapStep_abi from '../../../abis/polygonMumbai/steps/UniswapV3SwapStep.json';
import polygonMumbai_testing_MockERC20_abi from '../../../abis/polygonMumbai/testing/MockERC20.json';
import polygonMumbai_lens_LensHub_abi from '../../../abis/polygonMumbai/lens/LensHub.json';
import polygonMumbai_lens_ProfileCreation_abi from '../../../abis/polygonMumbai/lens/ProfileCreation.json';
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getPolygonMumbaiSdk(defaultSignerOrProvider) {
    return {
        "StepTreeLib": getContract('0x475C7FACa98F18588C0281185bC35389dA90B5FA', polygonMumbai_StepTreeLib_abi, defaultSignerOrProvider),
        "DremHub": getContract('0x27f04bAE5C17f8556D58c3c6B32F030643C47F5a', polygonMumbai_DremHub_abi, defaultSignerOrProvider),
        "FeeController": getContract('0x9f814Ff3fE04099cDD04Ad93C0307fE09F8194f9', polygonMumbai_FeeController_abi, defaultSignerOrProvider),
        "PriceAggreagtor": getContract('0xd804c3DF1AB160fc7cb406F9902ea3be43107e42', polygonMumbai_PriceAggreagtor_abi, defaultSignerOrProvider),
        "AssetRegistry": getContract('0x6dC1CD636fd04C437F48d61d92C4CC2AccBAC1cB', polygonMumbai_AssetRegistry_abi, defaultSignerOrProvider),
        "VaultDeployer": getContract('0x0Cbb6850d43a9a40b2265851E63488cE7D29bbf8', polygonMumbai_VaultDeployer_abi, defaultSignerOrProvider),
        "DremCollectModule": getContract('0x8D27D2791f687847399843F1BAE08D9810F96603', polygonMumbai_DremCollectModule_abi, defaultSignerOrProvider),
        "Vault": getContract('0xb625c3af5CE0a4c9a2ee6188d6e29146906B2e0D', polygonMumbai_Vault_abi, defaultSignerOrProvider),
        "steps": {
            "TransferStep": getContract('0x6B6ec4B5f1d9230BabaA7120fc2775B4cfD26321', polygonMumbai_steps_TransferStep_abi, defaultSignerOrProvider),
            "UniswapV3SwapStep": getContract('0x6a70E935Ae5Cec477413a6B8bc1b508577c059F9', polygonMumbai_steps_UniswapV3SwapStep_abi, defaultSignerOrProvider),
        },
        "testing": {
            "MockERC20": getContract('0x3e02538fDF82daD570A5dB5deDC4CC165061798E', polygonMumbai_testing_MockERC20_abi, defaultSignerOrProvider),
        },
        "lens": {
            "LensHub": getContract('0x7582177F9E536aB0b6c721e11f383C326F2Ad1D5', polygonMumbai_lens_LensHub_abi, defaultSignerOrProvider),
            "ProfileCreation": getContract('0x4fe8deB1cf6068060dE50aA584C3adf00fbDB87f', polygonMumbai_lens_ProfileCreation_abi, defaultSignerOrProvider),
        },
    };
}
