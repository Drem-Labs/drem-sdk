import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { LensHub, LensHubInterface } from "../../../polygonMumbai/lens/LensHub";
export declare class LensHub__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "followNFTImpl";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "collectNFTImpl";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CallerNotCollectNFT";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CallerNotFollowNFT";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotInitImplementation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DispatcherNotSet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EmergencyAdminCannotUnpause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InitParamsInvalid";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Initialized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotGovernance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotGovernanceOrEmergencyAdmin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotOwnerOrApproved";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotProfileOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotProfileOwnerOrDispatcher";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Paused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ProfileCreatorNotWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ProfileImageURILengthInvalid";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PublicationDoesNotExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PublishingPaused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SignatureExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SignatureInvalid";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroSpender";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "approved";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "contentURI";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "collectModule";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "collectModuleReturnData";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "referenceModule";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "referenceModuleReturnData";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "PostCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "v";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "r";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "s";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.EIP712Signature";
            readonly name: "sig";
            readonly type: "tuple";
        }];
        readonly name: "burnWithSig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "collect";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "collector";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.CollectWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "collectWithSig";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "contentURI";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "collectModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "collectModuleInitData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct DataTypes.CommentData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "comment";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "contentURI";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "collectModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "collectModuleInitData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.CommentWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "commentWithSig";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "contentURI";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "collectModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "collectModuleInitData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.CommentWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "commentWithSig_Dispatcher";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "handle";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "imageURI";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "followModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "followModuleInitData";
                readonly type: "bytes";
            }, {
                readonly internalType: "string";
                readonly name: "followNFTURI";
                readonly type: "string";
            }];
            readonly internalType: "struct DataTypes.CreateProfileData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "createProfile";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "wallet";
            readonly type: "address";
        }];
        readonly name: "defaultProfile";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "collectNFTId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "emitCollectNFTTransferEvent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "followNFTId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "emitFollowNFTTransferEvent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "exists";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "profileIds";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "datas";
            readonly type: "bytes[]";
        }];
        readonly name: "follow";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "follower";
                readonly type: "address";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "profileIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "datas";
                readonly type: "bytes[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.FollowWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "followWithSig";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }];
        readonly name: "getCollectModule";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }];
        readonly name: "getCollectNFT";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCollectNFTImpl";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }];
        readonly name: "getContentURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "getDispatcher";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDomainSeparator";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "getFollowModule";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "getFollowNFT";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFollowNFTImpl";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "getFollowNFTURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGovernance";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "getHandle";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "getProfile";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "pubCount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "followModule";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "followNFT";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "handle";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "imageURI";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "followNFTURI";
                readonly type: "string";
            }];
            readonly internalType: "struct DataTypes.ProfileStruct";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "handle";
            readonly type: "string";
        }];
        readonly name: "getProfileIdByHandle";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }];
        readonly name: "getPub";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "contentURI";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "collectModule";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "collectNFT";
                readonly type: "address";
            }];
            readonly internalType: "struct DataTypes.PublicationStruct";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "getPubCount";
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
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }];
        readonly name: "getPubPointer";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }];
        readonly name: "getPubType";
        readonly outputs: readonly [{
            readonly internalType: "enum DataTypes.PubType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "pubId";
            readonly type: "uint256";
        }];
        readonly name: "getReferenceModule";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getState";
        readonly outputs: readonly [{
            readonly internalType: "enum DataTypes.ProtocolState";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "newGovernance";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "collectModule";
            readonly type: "address";
        }];
        readonly name: "isCollectModuleWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "followModule";
            readonly type: "address";
        }];
        readonly name: "isFollowModuleWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "profileCreator";
            readonly type: "address";
        }];
        readonly name: "isProfileCreatorWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "referenceModule";
            readonly type: "address";
        }];
        readonly name: "isReferenceModuleWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "mintTimestampOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct DataTypes.MirrorData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "mirror";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.MirrorWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "mirrorWithSig";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubIdPointed";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.MirrorWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "mirrorWithSig_Dispatcher";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "v";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "r";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "s";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.EIP712Signature";
            readonly name: "sig";
            readonly type: "tuple";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "v";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "r";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "s";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.EIP712Signature";
            readonly name: "sig";
            readonly type: "tuple";
        }];
        readonly name: "permitForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "contentURI";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "collectModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "collectModuleInitData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct DataTypes.PostData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "post";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "contentURI";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "collectModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "collectModuleInitData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.PostWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "postWithSig";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "contentURI";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "collectModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "collectModuleInitData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "referenceModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "referenceModuleInitData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.PostWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "postWithSig_Dispatcher";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }];
        readonly name: "setDefaultProfile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "wallet";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.SetDefaultProfileWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "setDefaultProfileWithSig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "dispatcher";
            readonly type: "address";
        }];
        readonly name: "setDispatcher";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "dispatcher";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.SetDispatcherWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "setDispatcherWithSig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newEmergencyAdmin";
            readonly type: "address";
        }];
        readonly name: "setEmergencyAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "followModule";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "followModuleInitData";
            readonly type: "bytes";
        }];
        readonly name: "setFollowModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "followModule";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "followModuleInitData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.SetFollowModuleWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "setFollowModuleWithSig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "followNFTURI";
            readonly type: "string";
        }];
        readonly name: "setFollowNFTURI";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "followNFTURI";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.SetFollowNFTURIWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "setFollowNFTURIWithSig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newGovernance";
            readonly type: "address";
        }];
        readonly name: "setGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "profileId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "imageURI";
            readonly type: "string";
        }];
        readonly name: "setProfileImageURI";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "profileId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "imageURI";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.EIP712Signature";
                readonly name: "sig";
                readonly type: "tuple";
            }];
            readonly internalType: "struct DataTypes.SetProfileImageURIWithSigData";
            readonly name: "vars";
            readonly type: "tuple";
        }];
        readonly name: "setProfileImageURIWithSig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum DataTypes.ProtocolState";
            readonly name: "newState";
            readonly type: "uint8";
        }];
        readonly name: "setState";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "sigNonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenDataOf";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "uint96";
                readonly name: "mintTimestamp";
                readonly type: "uint96";
            }];
            readonly internalType: "struct IERC721Time.TokenData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenOfOwnerByIndex";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "collectModule";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelist";
            readonly type: "bool";
        }];
        readonly name: "whitelistCollectModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "followModule";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelist";
            readonly type: "bool";
        }];
        readonly name: "whitelistFollowModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "profileCreator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelist";
            readonly type: "bool";
        }];
        readonly name: "whitelistProfileCreator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "referenceModule";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelist";
            readonly type: "bool";
        }];
        readonly name: "whitelistReferenceModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): LensHubInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LensHub;
}
