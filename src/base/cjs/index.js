"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolygonMumbaiSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const StepTreeLib_json_1 = __importDefault(require("../../../abis/polygonMumbai/StepTreeLib.json"));
const DremHub_json_1 = __importDefault(require("../../../abis/polygonMumbai/DremHub.json"));
const FeeController_json_1 = __importDefault(require("../../../abis/polygonMumbai/FeeController.json"));
const PriceAggreagtor_json_1 = __importDefault(require("../../../abis/polygonMumbai/PriceAggreagtor.json"));
const AssetRegistry_json_1 = __importDefault(require("../../../abis/polygonMumbai/AssetRegistry.json"));
const VaultDeployer_json_1 = __importDefault(require("../../../abis/polygonMumbai/VaultDeployer.json"));
const Vault_json_1 = __importDefault(require("../../../abis/polygonMumbai/Vault.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getPolygonMumbaiSdk(defaultSignerOrProvider) {
    return {
        "StepTreeLib": getContract('0x475C7FACa98F18588C0281185bC35389dA90B5FA', StepTreeLib_json_1.default, defaultSignerOrProvider),
        "DremHub": getContract('0x27f04bAE5C17f8556D58c3c6B32F030643C47F5a', DremHub_json_1.default, defaultSignerOrProvider),
        "FeeController": getContract('0x9f814Ff3fE04099cDD04Ad93C0307fE09F8194f9', FeeController_json_1.default, defaultSignerOrProvider),
        "PriceAggreagtor": getContract('0xd804c3DF1AB160fc7cb406F9902ea3be43107e42', PriceAggreagtor_json_1.default, defaultSignerOrProvider),
        "AssetRegistry": getContract('0x6dC1CD636fd04C437F48d61d92C4CC2AccBAC1cB', AssetRegistry_json_1.default, defaultSignerOrProvider),
        "VaultDeployer": getContract('0x33334081Bb86EDDDa17ac9c90E347Dd0ec2EDed9', VaultDeployer_json_1.default, defaultSignerOrProvider),
        "Vault": getContract('0xfbD21fC5300fEa410E6786eb0C5A663009230097', Vault_json_1.default, defaultSignerOrProvider),
    };
}
exports.getPolygonMumbaiSdk = getPolygonMumbaiSdk;
