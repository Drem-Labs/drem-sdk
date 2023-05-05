import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace UniswapV3Lib {
    type SwapFixedDataStruct = {
        path: PromiseOrValue<BytesLike>;
        reversedPath: PromiseOrValue<BytesLike>;
    };
    type SwapFixedDataStructOutput = [string, string] & {
        path: string;
        reversedPath: string;
    };
}
export interface UniswapV3SwapStepInterface extends utils.Interface {
    functions: {
        "ASSET_REGISTRY()": FunctionFragment;
        "DREM_HUB()": FunctionFragment;
        "PRICE_AGGREGATOR()": FunctionFragment;
        "assetIn(uint256,address)": FunctionFragment;
        "assetOut(uint256,address)": FunctionFragment;
        "getSwapStepData(uint256,address)": FunctionFragment;
        "init(uint256,bytes)": FunctionFragment;
        "unwind(address,uint256,uint256,bytes)": FunctionFragment;
        "value(uint256,uint256,address)": FunctionFragment;
        "wind(address,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ASSET_REGISTRY" | "DREM_HUB" | "PRICE_AGGREGATOR" | "assetIn" | "assetOut" | "getSwapStepData" | "init" | "unwind" | "value" | "wind"): FunctionFragment;
    encodeFunctionData(functionFragment: "ASSET_REGISTRY", values?: undefined): string;
    encodeFunctionData(functionFragment: "DREM_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICE_AGGREGATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "assetIn", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "assetOut", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSwapStepData", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "init", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "unwind", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "value", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "wind", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "ASSET_REGISTRY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DREM_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICE_AGGREGATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapStepData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwind", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wind", data: BytesLike): Result;
    events: {};
}
export interface UniswapV3SwapStep extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV3SwapStepInterface;
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
        assetIn(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        assetOut(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getSwapStepData(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[UniswapV3Lib.SwapFixedDataStructOutput]>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, _encodedFixedArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unwind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        value(_stepNodeKey: PromiseOrValue<BigNumberish>, _tokensProduced: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        wind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ASSET_REGISTRY(overrides?: CallOverrides): Promise<string>;
    DREM_HUB(overrides?: CallOverrides): Promise<string>;
    PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
    assetIn(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    assetOut(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getSwapStepData(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<UniswapV3Lib.SwapFixedDataStructOutput>;
    init(_stepNodeKey: PromiseOrValue<BigNumberish>, _encodedFixedArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unwind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    value(_stepNodeKey: PromiseOrValue<BigNumberish>, _tokensProduced: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    wind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<string>;
        DREM_HUB(overrides?: CallOverrides): Promise<string>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
        assetIn(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        assetOut(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getSwapStepData(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<UniswapV3Lib.SwapFixedDataStructOutput>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, _encodedFixedArgs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        unwind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        value(_stepNodeKey: PromiseOrValue<BigNumberish>, _tokensProduced: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        wind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;
        DREM_HUB(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<BigNumber>;
        assetIn(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        assetOut(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapStepData(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, _encodedFixedArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unwind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        value(_stepNodeKey: PromiseOrValue<BigNumberish>, _tokensProduced: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        wind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DREM_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetIn(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetOut(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapStepData(_stepNodeKey: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_stepNodeKey: PromiseOrValue<BigNumberish>, _encodedFixedArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unwind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        value(_stepNodeKey: PromiseOrValue<BigNumberish>, _tokensProduced: PromiseOrValue<BigNumberish>, _denominationAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wind(_caller: PromiseOrValue<string>, _stepNodeKey: PromiseOrValue<BigNumberish>, _amountIn: PromiseOrValue<BigNumberish>, _encodedVariableArgs: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
