import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UniswapV3SwapStep, UniswapV3SwapStepInterface } from "../../../polygonMumbai/steps/UniswapV3SwapStep";
export declare class UniswapV3SwapStep__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_dremHub";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_assetRegistry";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ApprovalFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AssetNotWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmountOutMinimum";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDeadline";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidStepPosition";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidUniFee";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StepDeprecatedOrDisabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StepDisabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StepLegaciedDeprecatedOrDisabled";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_stepNodeKey";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "assetIn";
        readonly outputs: readonly [{
            readonly internalType: "address";
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
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "assetOut";
        readonly outputs: readonly [{
            readonly internalType: "address";
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
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "getSwapStepData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "path";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "reversedPath";
                readonly type: "bytes";
            }];
            readonly internalType: "struct UniswapV3Lib.SwapFixedData";
            readonly name: "";
            readonly type: "tuple";
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
            readonly name: "_encodedFixedArgs";
            readonly type: "bytes";
        }];
        readonly name: "init";
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
            readonly name: "_stepNodeKey";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_encodedVariableArgs";
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
            readonly name: "_stepNodeKey";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokensProduced";
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
            readonly name: "_stepNodeKey";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_encodedVariableArgs";
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
    static createInterface(): UniswapV3SwapStepInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3SwapStep;
}
