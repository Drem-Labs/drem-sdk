import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace DataTypes {
    type SupportedAssetInfoStruct = {
        aggregator: PromiseOrValue<string>;
        rateAsset: PromiseOrValue<BigNumberish>;
        units: PromiseOrValue<BigNumberish>;
    };
    type SupportedAssetInfoStructOutput = [string, number, BigNumber] & {
        aggregator: string;
        rateAsset: number;
        units: BigNumber;
    };
}
export interface PriceAggregatorInterface extends utils.Interface {
    functions: {
        "DREM_HUB()": FunctionFragment;
        "ETH_TO_USD_AGGREGATOR()": FunctionFragment;
        "STALE_ETH_PRICE_LIMIT()": FunctionFragment;
        "STALE_USD_PRICE_LIMIT()": FunctionFragment;
        "addSupportedAssets(address[],address[],uint8[])": FunctionFragment;
        "convertAsset(uint256,address,address)": FunctionFragment;
        "convertAssets(uint256[],address[],address)": FunctionFragment;
        "getSupportedAssetInfo(address)": FunctionFragment;
        "isAssetSupported(address)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "removeSupportedAssets(address[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DREM_HUB" | "ETH_TO_USD_AGGREGATOR" | "STALE_ETH_PRICE_LIMIT" | "STALE_USD_PRICE_LIMIT" | "addSupportedAssets" | "convertAsset" | "convertAssets" | "getSupportedAssetInfo" | "isAssetSupported" | "proxiableUUID" | "removeSupportedAssets" | "upgradeTo" | "upgradeToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "DREM_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "ETH_TO_USD_AGGREGATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "STALE_ETH_PRICE_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "STALE_USD_PRICE_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "addSupportedAssets", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "convertAsset", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "convertAssets", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getSupportedAssetInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAssetSupported", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeSupportedAssets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "DREM_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ETH_TO_USD_AGGREGATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STALE_ETH_PRICE_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STALE_USD_PRICE_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSupportedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupportedAssetInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAssetSupported", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSupportedAssets", data: BytesLike): Result;
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
export interface PriceAggregator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PriceAggregatorInterface;
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
        ETH_TO_USD_AGGREGATOR(overrides?: CallOverrides): Promise<[string]>;
        STALE_ETH_PRICE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        STALE_USD_PRICE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        addSupportedAssets(_assets: PromiseOrValue<string>[], _aggregators: PromiseOrValue<string>[], _rateAssets: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        convertAsset(_inputAmount: PromiseOrValue<BigNumberish>, _inputAsset: PromiseOrValue<string>, _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertAssets(_inputAmounts: PromiseOrValue<BigNumberish>[], _inputAssets: PromiseOrValue<string>[], _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupportedAssetInfo(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.SupportedAssetInfoStructOutput]>;
        isAssetSupported(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        removeSupportedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
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
    ETH_TO_USD_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
    STALE_ETH_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    STALE_USD_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    addSupportedAssets(_assets: PromiseOrValue<string>[], _aggregators: PromiseOrValue<string>[], _rateAssets: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    convertAsset(_inputAmount: PromiseOrValue<BigNumberish>, _inputAsset: PromiseOrValue<string>, _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    convertAssets(_inputAmounts: PromiseOrValue<BigNumberish>[], _inputAssets: PromiseOrValue<string>[], _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getSupportedAssetInfo(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.SupportedAssetInfoStructOutput>;
    isAssetSupported(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    removeSupportedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
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
        ETH_TO_USD_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
        STALE_ETH_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        STALE_USD_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        addSupportedAssets(_assets: PromiseOrValue<string>[], _aggregators: PromiseOrValue<string>[], _rateAssets: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        convertAsset(_inputAmount: PromiseOrValue<BigNumberish>, _inputAsset: PromiseOrValue<string>, _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertAssets(_inputAmounts: PromiseOrValue<BigNumberish>[], _inputAssets: PromiseOrValue<string>[], _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSupportedAssetInfo(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.SupportedAssetInfoStructOutput>;
        isAssetSupported(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        removeSupportedAssets(_assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
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
        ETH_TO_USD_AGGREGATOR(overrides?: CallOverrides): Promise<BigNumber>;
        STALE_ETH_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        STALE_USD_PRICE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        addSupportedAssets(_assets: PromiseOrValue<string>[], _aggregators: PromiseOrValue<string>[], _rateAssets: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        convertAsset(_inputAmount: PromiseOrValue<BigNumberish>, _inputAsset: PromiseOrValue<string>, _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertAssets(_inputAmounts: PromiseOrValue<BigNumberish>[], _inputAssets: PromiseOrValue<string>[], _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSupportedAssetInfo(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAssetSupported(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        removeSupportedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
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
        ETH_TO_USD_AGGREGATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STALE_ETH_PRICE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STALE_USD_PRICE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addSupportedAssets(_assets: PromiseOrValue<string>[], _aggregators: PromiseOrValue<string>[], _rateAssets: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        convertAsset(_inputAmount: PromiseOrValue<BigNumberish>, _inputAsset: PromiseOrValue<string>, _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertAssets(_inputAmounts: PromiseOrValue<BigNumberish>[], _inputAssets: PromiseOrValue<string>[], _outputAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupportedAssetInfo(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAssetSupported(_asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSupportedAssets(_assets: PromiseOrValue<string>[], overrides?: Overrides & {
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
