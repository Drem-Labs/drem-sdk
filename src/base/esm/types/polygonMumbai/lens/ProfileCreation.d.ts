import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace DataTypes {
    type CreateProfileDataStruct = {
        to: PromiseOrValue<string>;
        handle: PromiseOrValue<string>;
        imageURI: PromiseOrValue<string>;
        followModule: PromiseOrValue<string>;
        followModuleInitData: PromiseOrValue<BytesLike>;
        followNFTURI: PromiseOrValue<string>;
    };
    type CreateProfileDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        to: string;
        handle: string;
        imageURI: string;
        followModule: string;
        followModuleInitData: string;
        followNFTURI: string;
    };
}
export interface ProfileCreationInterface extends utils.Interface {
    functions: {
        "proxyCreateProfile((address,string,string,address,bytes,string))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "proxyCreateProfile"): FunctionFragment;
    encodeFunctionData(functionFragment: "proxyCreateProfile", values: [DataTypes.CreateProfileDataStruct]): string;
    decodeFunctionResult(functionFragment: "proxyCreateProfile", data: BytesLike): Result;
    events: {};
}
export interface ProfileCreation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProfileCreationInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        proxyCreateProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    proxyCreateProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        proxyCreateProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        proxyCreateProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        proxyCreateProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
