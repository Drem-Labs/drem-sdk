import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface AssetRegistryInterface extends utils.Interface {
    functions: {
        "DREM_HUB()": FunctionFragment;
        "PRICE_AGGREGATOR()": FunctionFragment;
        "addDenominationAssets(address[])": FunctionFragment;
        "addWhitelistedAssets(address[])": FunctionFragment;
        "getDenominationAssets()": FunctionFragment;
        "getWhitelistedAssets()": FunctionFragment;
        "isAssetDenominationAsset(address)": FunctionFragment;
        "isAssetWhitelisted(address)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "removeDenominationAssets(address[])": FunctionFragment;
        "removeWhitelistedAssets(address[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DREM_HUB" | "PRICE_AGGREGATOR" | "addDenominationAssets" | "addWhitelistedAssets" | "getDenominationAssets" | "getWhitelistedAssets" | "isAssetDenominationAsset" | "isAssetWhitelisted" | "proxiableUUID" | "removeDenominationAssets" | "removeWhitelistedAssets" | "upgradeTo" | "upgradeToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "DREM_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICE_AGGREGATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "addDenominationAssets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "addWhitelistedAssets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getDenominationAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAssetDenominationAsset", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAssetWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeDenominationAssets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "removeWhitelistedAssets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "DREM_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICE_AGGREGATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addDenominationAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addWhitelistedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDenominationAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAssetDenominationAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAssetWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDenominationAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeWhitelistedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface AssetRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AssetRegistryInterface;
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
        DREM_HUB(overrides?: CallOverrides): Promise<[string]>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<[string]>;
        addDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDenominationAssets(overrides?: CallOverrides): Promise<[string[]]>;
        getWhitelistedAssets(overrides?: CallOverrides): Promise<[string[]]>;
        isAssetDenominationAsset(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isAssetWhitelisted(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        removeDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DREM_HUB(overrides?: CallOverrides): Promise<string>;
    PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
    addDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDenominationAssets(overrides?: CallOverrides): Promise<string[]>;
    getWhitelistedAssets(overrides?: CallOverrides): Promise<string[]>;
    isAssetDenominationAsset(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isAssetWhitelisted(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    removeDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DREM_HUB(overrides?: CallOverrides): Promise<string>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
        addDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        addWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        getDenominationAssets(overrides?: CallOverrides): Promise<string[]>;
        getWhitelistedAssets(overrides?: CallOverrides): Promise<string[]>;
        isAssetDenominationAsset(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isAssetWhitelisted(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        removeDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        removeWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        DREM_HUB(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<BigNumber>;
        addDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDenominationAssets(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedAssets(overrides?: CallOverrides): Promise<BigNumber>;
        isAssetDenominationAsset(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAssetWhitelisted(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        removeDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DREM_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDenominationAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAssetDenominationAsset(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAssetWhitelisted(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeDenominationAssets(_denominationAssets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeWhitelistedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
