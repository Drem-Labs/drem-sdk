import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace DataTypes {
    type FeesPayableStruct = {
        dremFee: PromiseOrValue<BigNumberish>;
        adminFee: PromiseOrValue<BigNumberish>;
    };
    type FeesPayableStructOutput = [BigNumber, BigNumber] & {
        dremFee: BigNumber;
        adminFee: BigNumber;
    };
    type FeeInfoStruct = {
        entranceFee: PromiseOrValue<BigNumberish>;
        exitFee: PromiseOrValue<BigNumberish>;
        performanceFee: PromiseOrValue<BigNumberish>;
        managementFee: PromiseOrValue<BigNumberish>;
        collector: PromiseOrValue<string>;
    };
    type FeeInfoStructOutput = [number, number, number, number, string] & {
        entranceFee: number;
        exitFee: number;
        performanceFee: number;
        managementFee: number;
        collector: string;
    };
}
export interface FeeControllerInterface extends utils.Interface {
    functions: {
        "DREM_HUB()": FunctionFragment;
        "FEE_PERIOD()": FunctionFragment;
        "MAX_FEE()": FunctionFragment;
        "PRECISION_FACTOR()": FunctionFragment;
        "calculateDepositFees(uint256,address)": FunctionFragment;
        "calculateWithdrawalFees(uint256,address,address)": FunctionFragment;
        "collectFees(uint256,address)": FunctionFragment;
        "getDremCollector()": FunctionFragment;
        "getDremFees(uint256)": FunctionFragment;
        "getMaxVaultFees()": FunctionFragment;
        "getVaultCollector(address)": FunctionFragment;
        "getVaultFees(address)": FunctionFragment;
        "setDremCollector(address)": FunctionFragment;
        "setDremFees(uint256,(uint24,uint24,uint24,uint24,address))": FunctionFragment;
        "setMaxVaultFees((uint24,uint24,uint24,uint24,address))": FunctionFragment;
        "setVaultFeeCollector(address,address)": FunctionFragment;
        "setVaultFees((uint24,uint24,uint24,uint24,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DREM_HUB" | "FEE_PERIOD" | "MAX_FEE" | "PRECISION_FACTOR" | "calculateDepositFees" | "calculateWithdrawalFees" | "collectFees" | "getDremCollector" | "getDremFees" | "getMaxVaultFees" | "getVaultCollector" | "getVaultFees" | "setDremCollector" | "setDremFees" | "setMaxVaultFees" | "setVaultFeeCollector" | "setVaultFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "DREM_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "FEE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRECISION_FACTOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateDepositFees", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "calculateWithdrawalFees", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "collectFees", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDremCollector", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDremFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMaxVaultFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVaultCollector", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getVaultFees", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDremCollector", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDremFees", values: [PromiseOrValue<BigNumberish>, DataTypes.FeeInfoStruct]): string;
    encodeFunctionData(functionFragment: "setMaxVaultFees", values: [DataTypes.FeeInfoStruct]): string;
    encodeFunctionData(functionFragment: "setVaultFeeCollector", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setVaultFees", values: [DataTypes.FeeInfoStruct]): string;
    decodeFunctionResult(functionFragment: "DREM_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FEE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRECISION_FACTOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateDepositFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateWithdrawalFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDremCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDremFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxVaultFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVaultCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVaultFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDremCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDremFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxVaultFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVaultFeeCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVaultFees", data: BytesLike): Result;
    events: {};
}
export interface FeeController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FeeControllerInterface;
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
        FEE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_FEE(overrides?: CallOverrides): Promise<[number]>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateDepositFees(_funds: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.FeesPayableStructOutput]>;
        calculateWithdrawalFees(_funds: PromiseOrValue<BigNumberish>, _caller: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.FeesPayableStructOutput]>;
        collectFees(_amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDremCollector(overrides?: CallOverrides): Promise<[string]>;
        getDremFees(_stepLen: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.FeeInfoStructOutput]>;
        getMaxVaultFees(overrides?: CallOverrides): Promise<[DataTypes.FeeInfoStructOutput]>;
        getVaultCollector(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getVaultFees(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.FeeInfoStructOutput]>;
        setDremCollector(_dremCollector: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDremFees(_stepLen: PromiseOrValue<BigNumberish>, _fees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxVaultFees(_maxVaultFees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVaultFeeCollector(_collector: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVaultFees(_feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DREM_HUB(overrides?: CallOverrides): Promise<string>;
    FEE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_FEE(overrides?: CallOverrides): Promise<number>;
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    calculateDepositFees(_funds: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.FeesPayableStructOutput>;
    calculateWithdrawalFees(_funds: PromiseOrValue<BigNumberish>, _caller: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.FeesPayableStructOutput>;
    collectFees(_amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDremCollector(overrides?: CallOverrides): Promise<string>;
    getDremFees(_stepLen: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.FeeInfoStructOutput>;
    getMaxVaultFees(overrides?: CallOverrides): Promise<DataTypes.FeeInfoStructOutput>;
    getVaultCollector(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getVaultFees(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.FeeInfoStructOutput>;
    setDremCollector(_dremCollector: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDremFees(_stepLen: PromiseOrValue<BigNumberish>, _fees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxVaultFees(_maxVaultFees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVaultFeeCollector(_collector: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVaultFees(_feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DREM_HUB(overrides?: CallOverrides): Promise<string>;
        FEE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_FEE(overrides?: CallOverrides): Promise<number>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
        calculateDepositFees(_funds: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.FeesPayableStructOutput>;
        calculateWithdrawalFees(_funds: PromiseOrValue<BigNumberish>, _caller: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.FeesPayableStructOutput>;
        collectFees(_amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getDremCollector(overrides?: CallOverrides): Promise<string>;
        getDremFees(_stepLen: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.FeeInfoStructOutput>;
        getMaxVaultFees(overrides?: CallOverrides): Promise<DataTypes.FeeInfoStructOutput>;
        getVaultCollector(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getVaultFees(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.FeeInfoStructOutput>;
        setDremCollector(_dremCollector: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDremFees(_stepLen: PromiseOrValue<BigNumberish>, _fees: DataTypes.FeeInfoStruct, overrides?: CallOverrides): Promise<void>;
        setMaxVaultFees(_maxVaultFees: DataTypes.FeeInfoStruct, overrides?: CallOverrides): Promise<void>;
        setVaultFeeCollector(_collector: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setVaultFees(_feeInfo: DataTypes.FeeInfoStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        DREM_HUB(overrides?: CallOverrides): Promise<BigNumber>;
        FEE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
        calculateDepositFees(_funds: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        calculateWithdrawalFees(_funds: PromiseOrValue<BigNumberish>, _caller: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        collectFees(_amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDremCollector(overrides?: CallOverrides): Promise<BigNumber>;
        getDremFees(_stepLen: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxVaultFees(overrides?: CallOverrides): Promise<BigNumber>;
        getVaultCollector(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getVaultFees(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setDremCollector(_dremCollector: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDremFees(_stepLen: PromiseOrValue<BigNumberish>, _fees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxVaultFees(_maxVaultFees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVaultFeeCollector(_collector: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVaultFees(_feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DREM_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FEE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateDepositFees(_funds: PromiseOrValue<BigNumberish>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateWithdrawalFees(_funds: PromiseOrValue<BigNumberish>, _caller: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collectFees(_amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDremCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDremFees(_stepLen: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxVaultFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVaultCollector(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVaultFees(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDremCollector(_dremCollector: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDremFees(_stepLen: PromiseOrValue<BigNumberish>, _fees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxVaultFees(_maxVaultFees: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVaultFeeCollector(_collector: PromiseOrValue<string>, _vault: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVaultFees(_feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
