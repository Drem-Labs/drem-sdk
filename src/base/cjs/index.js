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
const DremCollectModule_json_1 = __importDefault(require("../../../abis/polygonMumbai/DremCollectModule.json"));
const Vault_json_1 = __importDefault(require("../../../abis/polygonMumbai/Vault.json"));
const TransferStep_json_1 = __importDefault(require("../../../abis/polygonMumbai/steps/TransferStep.json"));
const UniswapV3SwapStep_json_1 = __importDefault(require("../../../abis/polygonMumbai/steps/UniswapV3SwapStep.json"));
const MockERC20_json_1 = __importDefault(require("../../../abis/polygonMumbai/testing/MockERC20.json"));
const LensHub_json_1 = __importDefault(require("../../../abis/polygonMumbai/lens/LensHub.json"));
const ProfileCreation_json_1 = __importDefault(require("../../../abis/polygonMumbai/lens/ProfileCreation.json"));
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
        "VaultDeployer": getContract('0x0Cbb6850d43a9a40b2265851E63488cE7D29bbf8', VaultDeployer_json_1.default, defaultSignerOrProvider),
        "DremCollectModule": getContract('0x8D27D2791f687847399843F1BAE08D9810F96603', DremCollectModule_json_1.default, defaultSignerOrProvider),
        "Vault": getContract('0xb625c3af5CE0a4c9a2ee6188d6e29146906B2e0D', Vault_json_1.default, defaultSignerOrProvider),
        "steps": {
            "TransferStep": getContract('0x6B6ec4B5f1d9230BabaA7120fc2775B4cfD26321', TransferStep_json_1.default, defaultSignerOrProvider),
            "UniswapV3SwapStep": getContract('0x6a70E935Ae5Cec477413a6B8bc1b508577c059F9', UniswapV3SwapStep_json_1.default, defaultSignerOrProvider),
        },
        "testing": {
            "MockERC20": getContract('0x3e02538fDF82daD570A5dB5deDC4CC165061798E', MockERC20_json_1.default, defaultSignerOrProvider),
        },
        "lens": {
            "LensHub": getContract('0x7582177F9E536aB0b6c721e11f383C326F2Ad1D5', LensHub_json_1.default, defaultSignerOrProvider),
            "ProfileCreation": getContract('0x4fe8deB1cf6068060dE50aA584C3adf00fbDB87f', ProfileCreation_json_1.default, defaultSignerOrProvider),
        },
    };
}
exports.getPolygonMumbaiSdk = getPolygonMumbaiSdk;
