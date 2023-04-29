import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PriceAggregator, PriceAggregatorInterface } from "../../polygonMumbai/PriceAggregator";
export declare class PriceAggregator__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_dremHub";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_ethToUSDAggregator";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AssetNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EmptyArray";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAggregatorRate";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAssetArrays";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInputArrays";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotHubOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StaleEthRate";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StaleUSDRate";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAddress";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
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
        readonly name: "ETH_TO_USD_AGGREGATOR";
        readonly outputs: readonly [{
            readonly internalType: "contract AggregatorV3Interface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "STALE_ETH_PRICE_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "STALE_USD_PRICE_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "contract AggregatorV3Interface[]";
            readonly name: "_aggregators";
            readonly type: "address[]";
        }, {
            readonly internalType: "enum DataTypes.RateAsset[]";
            readonly name: "_rateAssets";
            readonly type: "uint8[]";
        }];
        readonly name: "addSupportedAssets";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_inputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_inputAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_outputAsset";
            readonly type: "address";
        }];
        readonly name: "convertAsset";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_inputAmounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_inputAssets";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "_outputAsset";
            readonly type: "address";
        }];
        readonly name: "convertAssets";
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
            readonly name: "_asset";
            readonly type: "address";
        }];
        readonly name: "getSupportedAssetInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract AggregatorV3Interface";
                readonly name: "aggregator";
                readonly type: "address";
            }, {
                readonly internalType: "enum DataTypes.RateAsset";
                readonly name: "rateAsset";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "units";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.SupportedAssetInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_asset";
            readonly type: "address";
        }];
        readonly name: "isAssetSupported";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_assets";
            readonly type: "address[]";
        }];
        readonly name: "removeSupportedAssets";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): PriceAggregatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PriceAggregator;
}
