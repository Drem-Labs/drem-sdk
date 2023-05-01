import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TransferStep, TransferStepInterface } from "../../../polygonMumbai/steps/TransferStep";
export declare class TransferStep__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_dremHub";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_assetRegistry";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_feeController";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientFunds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidStepPosition";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotHubOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StepDeprecated";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StepDisabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StepLegacied";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ASSET_REGISTRY";
        readonly outputs: readonly [{
            readonly internalType: "contract IAssetRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DREM_HUB";
        readonly outputs: readonly [{
            readonly internalType: "contract DremHub";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PRICE_AGGREGATOR";
        readonly outputs: readonly [{
            readonly internalType: "contract IPriceAggregator";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeController";
        readonly outputs: readonly [{
            readonly internalType: "contract IFeeController";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_stepNodeKey";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "init";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_feeController";
            readonly type: "address";
        }];
        readonly name: "setFeeController";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_caller";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "unwind";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_denominationAsset";
            readonly type: "address";
        }];
        readonly name: "value";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_caller";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "wind";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TransferStepInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TransferStep;
}
