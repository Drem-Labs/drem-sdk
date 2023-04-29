import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { StepTreeLib, StepTreeLibInterface } from "../../polygonMumbai/StepTreeLib";
export declare class StepTreeLib__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "NodeWindPercentTooLarge";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NonRootNodeNullParent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NonRootNodeWindPercentZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RootNodeNonNullParent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RootWindPercentNotZero";
        readonly type: "error";
    }];
    static createInterface(): StepTreeLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StepTreeLib;
}
