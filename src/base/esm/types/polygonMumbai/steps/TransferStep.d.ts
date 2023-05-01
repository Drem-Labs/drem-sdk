import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface TransferStepInterface extends utils.Interface {
    functions: {
        "ASSET_REGISTRY()": FunctionFragment;
        "DREM_HUB()": FunctionFragment;
        "PRICE_AGGREGATOR()": FunctionFragment;
        "feeController()": FunctionFragment;
        "init(uint256,bytes)": FunctionFragment;
        "setFeeController(address)": FunctionFragment;
        "unwind(address,uint256,uint256,bytes)": FunctionFragment;
        "value(uint256,address)": FunctionFragment;
        "wind(address,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ASSET_REGISTRY" | "DREM_HUB" | "PRICE_AGGREGATOR" | "feeController" | "init" | "setFeeController" | "unwind" | "value" | "wind"): FunctionFragment;
    encodeFunctionData(functionFragment: "ASSET_REGISTRY", values?: undefined): string;
    encodeFunctionData(functionFragment: "DREM_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICE_AGGREGATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeController", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setFeeController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unwind", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "value", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "wind", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "ASSET_REGISTRY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DREM_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICE_AGGREGATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwind", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wind", data: BytesLike): Result;
    events: {};
}
export interface TransferStep extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TransferStepInterface;
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
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<[string]>;
        DREM_HUB(overrides?: CallOverrides): Promise<[string]>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<[string]>;
        feeController(overrides?: CallOverrides): Promise<[string]>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeController(_feeController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unwind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        value(arg0: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        wind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ASSET_REGISTRY(overrides?: CallOverrides): Promise<string>;
    DREM_HUB(overrides?: CallOverrides): Promise<string>;
    PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
    feeController(overrides?: CallOverrides): Promise<string>;
    init(_stepNodeKey: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeController(_feeController: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unwind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    value(arg0: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    wind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<string>;
        DREM_HUB(overrides?: CallOverrides): Promise<string>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
        feeController(overrides?: CallOverrides): Promise<string>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setFeeController(_feeController: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unwind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        value(arg0: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        wind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;
        DREM_HUB(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<BigNumber>;
        feeController(overrides?: CallOverrides): Promise<BigNumber>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeController(_feeController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unwind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        value(arg0: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        wind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DREM_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeController(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeController(_feeController: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unwind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        value(arg0: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wind(_caller: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
