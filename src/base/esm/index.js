import { Contract } from 'ethers';
import polygonMumbai_StepTreeLib_abi from '../../../abis/polygonMumbai/StepTreeLib.json';
import polygonMumbai_DremHub_abi from '../../../abis/polygonMumbai/DremHub.json';
import polygonMumbai_FeeController_abi from '../../../abis/polygonMumbai/FeeController.json';
import polygonMumbai_PriceAggreagtor_abi from '../../../abis/polygonMumbai/PriceAggreagtor.json';
import polygonMumbai_AssetRegistry_abi from '../../../abis/polygonMumbai/AssetRegistry.json';
import polygonMumbai_VaultDeployer_abi from '../../../abis/polygonMumbai/VaultDeployer.json';
import polygonMumbai_Vault_abi from '../../../abis/polygonMumbai/Vault.json';
import polygonMumbai_steps_TransferStep_abi from '../../../abis/polygonMumbai/steps/TransferStep.json';
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
        "VaultDeployer": getContract('0x33334081Bb86EDDDa17ac9c90E347Dd0ec2EDed9', polygonMumbai_VaultDeployer_abi, defaultSignerOrProvider),
        "Vault": getContract('0xfbD21fC5300fEa410E6786eb0C5A663009230097', polygonMumbai_Vault_abi, defaultSignerOrProvider),
        "steps": {
            "TransferStep": getContract('0x42E77022147BE8e35A4a64b03091C26C77ADD346', polygonMumbai_steps_TransferStep_abi, defaultSignerOrProvider),
        },
    };
}
