import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FeeController, FeeControllerInterface } from "../../polygonMumbai/FeeController";
export declare class FeeController__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_dremHub";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "FeesAlreadySet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCollector";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFee";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotHubOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotVaultAdmin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAddress";
        readonly type: "error";
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
        readonly name: "FEE_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_FEE";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PRECISION_FACTOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_funds";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "calculateDepositFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dremFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "adminFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeesPayable";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_funds";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_caller";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "calculateWithdrawalFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dremFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "adminFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeesPayable";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_asset";
            readonly type: "address";
        }];
        readonly name: "collectFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDremCollector";
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
            readonly name: "_stepLen";
            readonly type: "uint256";
        }];
        readonly name: "getDremFees";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaxVaultFees";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "getVaultCollector";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "getVaultFees";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_dremCollector";
            readonly type: "address";
        }];
        readonly name: "setDremCollector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_stepLen";
            readonly type: "uint256";
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
            readonly name: "_fees";
            readonly type: "tuple";
        }];
        readonly name: "setDremFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly name: "_maxVaultFees";
            readonly type: "tuple";
        }];
        readonly name: "setMaxVaultFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collector";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly name: "setVaultFeeCollector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly name: "_feeInfo";
            readonly type: "tuple";
        }];
        readonly name: "setVaultFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FeeControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeController;
}
