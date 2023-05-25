import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ProfileCreation, ProfileCreationInterface } from "../../../polygonMumbai/lens/ProfileCreation";
export declare class ProfileCreation__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ILensHub";
            readonly name: "hub";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "HandleContainsInvalidCharacters";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HandleFirstCharInvalid";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HandleLengthInvalid";
        readonly type: "error";
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
        readonly name: "proxyCreateProfile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProfileCreationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProfileCreation;
}
