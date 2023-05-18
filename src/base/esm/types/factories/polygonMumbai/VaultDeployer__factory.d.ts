import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VaultDeployer, VaultDeployerInterface } from "../../polygonMumbai/VaultDeployer";
export declare class VaultDeployer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_dremHub";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_assetRegistryAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_priceAggregatorAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_feeControllerAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "vault";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "VaultDeployed";
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
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "admin";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "denominationAsset";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "interactionAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "parentIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "windPercent";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "fixedArgData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct DataTypes.StepInfo[]";
                readonly name: "steps";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint24";
                    readonly name: "entranceFee";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "exitFee";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "performanceFee";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "managementFee";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "address";
                    readonly name: "collector";
                    readonly type: "address";
                }];
                readonly internalType: "struct DataTypes.FeeInfo";
                readonly name: "feeInfo";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.DeploymentInfo";
            readonly name: "_deploymentInfo";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_variableEncodedArgs";
            readonly type: "bytes[]";
        }];
        readonly name: "deployVault";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVaultImplementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "init";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    static createInterface(): VaultDeployerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VaultDeployer;
}
