import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace StepTreeLib {
    type NodeStruct = {
        parent: PromiseOrValue<BigNumberish>;
        children: PromiseOrValue<BigNumberish>[];
        key: PromiseOrValue<BigNumberish>;
        stepAddress: PromiseOrValue<string>;
        windPercent: PromiseOrValue<BigNumberish>;
    };
    type NodeStructOutput = [
        number,
        number[],
        number,
        string,
        BigNumber
    ] & {
        parent: number;
        children: number[];
        key: number;
        stepAddress: string;
        windPercent: BigNumber;
    };
}
export declare namespace DataTypes {
    type StepInfoStruct = {
        interactionAddress: PromiseOrValue<string>;
        parentIndex: PromiseOrValue<BigNumberish>;
        windPercent: PromiseOrValue<BigNumberish>;
        fixedArgData: PromiseOrValue<BytesLike>;
    };
    type StepInfoStructOutput = [string, number, BigNumber, string] & {
        interactionAddress: string;
        parentIndex: number;
        windPercent: BigNumber;
        fixedArgData: string;
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
    type AssetExpectationStruct = {
        assetAddress: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type AssetExpectationStructOutput = [string, BigNumber] & {
        assetAddress: string;
        amount: BigNumber;
    };
}
export interface VaultInterface extends utils.Interface {
    functions: {
        "ASSET_REGISTRY()": FunctionFragment;
        "DECIMAL_SHARE_BUFFER()": FunctionFragment;
        "DREM_HUB()": FunctionFragment;
        "FEE_CONTROLLER()": FunctionFragment;
        "MAX_SHARES()": FunctionFragment;
        "MAX_STEPS()": FunctionFragment;
        "MAX_VALUE()": FunctionFragment;
        "MIN_SHARES()": FunctionFragment;
        "PRECISION_FACTOR()": FunctionFragment;
        "PRICE_AGGREGATOR()": FunctionFragment;
        "VERSION()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "cumulativePaid(address)": FunctionFragment;
        "cumulativeTime(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "execute(address,bytes)": FunctionFragment;
        "getAdmin()": FunctionFragment;
        "getDenominationAsset()": FunctionFragment;
        "getNode(uint256)": FunctionFragment;
        "getSteps()": FunctionFragment;
        "getTotalSteps()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "init(address,string,string,address,(address,uint8,uint256,bytes)[],(uint24,uint24,uint24,uint24,address))": FunctionFragment;
        "name()": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "stakeValue(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalValue()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unwindSteps(uint256,bytes[])": FunctionFragment;
        "windSteps(uint256,bytes[])": FunctionFragment;
        "withdraw(uint256,(address,uint256)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ASSET_REGISTRY" | "DECIMAL_SHARE_BUFFER" | "DREM_HUB" | "FEE_CONTROLLER" | "MAX_SHARES" | "MAX_STEPS" | "MAX_VALUE" | "MIN_SHARES" | "PRECISION_FACTOR" | "PRICE_AGGREGATOR" | "VERSION" | "allowance" | "approve" | "balanceOf" | "cumulativePaid" | "cumulativeTime" | "decimals" | "decreaseAllowance" | "execute" | "getAdmin" | "getDenominationAsset" | "getNode" | "getSteps" | "getTotalSteps" | "increaseAllowance" | "init" | "name" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "stakeValue" | "supportsInterface" | "symbol" | "totalSupply" | "totalValue" | "transfer" | "transferFrom" | "unwindSteps" | "windSteps" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "ASSET_REGISTRY", values?: undefined): string;
    encodeFunctionData(functionFragment: "DECIMAL_SHARE_BUFFER", values?: undefined): string;
    encodeFunctionData(functionFragment: "DREM_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "FEE_CONTROLLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_SHARES", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STEPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VALUE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_SHARES", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRECISION_FACTOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICE_AGGREGATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cumulativePaid", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cumulativeTime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "execute", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDenominationAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNode", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSteps", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSteps", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "init", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        DataTypes.StepInfoStruct[],
        DataTypes.FeeInfoStruct
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "stakeValue", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unwindSteps", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "windSteps", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [PromiseOrValue<BigNumberish>, DataTypes.AssetExpectationStruct[]]): string;
    decodeFunctionResult(functionFragment: "ASSET_REGISTRY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DECIMAL_SHARE_BUFFER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DREM_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FEE_CONTROLLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_SHARES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STEPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VALUE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_SHARES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRECISION_FACTOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICE_AGGREGATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativePaid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDenominationAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSteps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSteps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwindSteps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "windSteps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface Vault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VaultInterface;
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
        DECIMAL_SHARE_BUFFER(overrides?: CallOverrides): Promise<[BigNumber]>;
        DREM_HUB(overrides?: CallOverrides): Promise<[string]>;
        FEE_CONTROLLER(overrides?: CallOverrides): Promise<[string]>;
        MAX_SHARES(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_STEPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_SHARES(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<[string]>;
        VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        cumulativePaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        cumulativeTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execute(_to: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAdmin(overrides?: CallOverrides): Promise<[string]>;
        getDenominationAsset(overrides?: CallOverrides): Promise<[string]>;
        getNode(_stepNodeKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[StepTreeLib.NodeStructOutput]>;
        getSteps(overrides?: CallOverrides): Promise<[string[]]>;
        getTotalSteps(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        init(_admin: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _denominationAsset: PromiseOrValue<string>, _steps: DataTypes.StepInfoStruct[], _feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stakeValue(_investor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unwindSteps(_sharesRedeemed: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        windSteps(_amountIn: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(shareAmount: PromiseOrValue<BigNumberish>, expectations: DataTypes.AssetExpectationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ASSET_REGISTRY(overrides?: CallOverrides): Promise<string>;
    DECIMAL_SHARE_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;
    DREM_HUB(overrides?: CallOverrides): Promise<string>;
    FEE_CONTROLLER(overrides?: CallOverrides): Promise<string>;
    MAX_SHARES(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_STEPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_SHARES(overrides?: CallOverrides): Promise<BigNumber>;
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
    PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    cumulativePaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    cumulativeTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execute(_to: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAdmin(overrides?: CallOverrides): Promise<string>;
    getDenominationAsset(overrides?: CallOverrides): Promise<string>;
    getNode(_stepNodeKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<StepTreeLib.NodeStructOutput>;
    getSteps(overrides?: CallOverrides): Promise<string[]>;
    getTotalSteps(overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    init(_admin: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _denominationAsset: PromiseOrValue<string>, _steps: DataTypes.StepInfoStruct[], _feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stakeValue(_investor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalValue(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unwindSteps(_sharesRedeemed: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    windSteps(_amountIn: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(shareAmount: PromiseOrValue<BigNumberish>, expectations: DataTypes.AssetExpectationStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<string>;
        DECIMAL_SHARE_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;
        DREM_HUB(overrides?: CallOverrides): Promise<string>;
        FEE_CONTROLLER(overrides?: CallOverrides): Promise<string>;
        MAX_SHARES(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STEPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_SHARES(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativePaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        execute(_to: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getAdmin(overrides?: CallOverrides): Promise<string>;
        getDenominationAsset(overrides?: CallOverrides): Promise<string>;
        getNode(_stepNodeKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<StepTreeLib.NodeStructOutput>;
        getSteps(overrides?: CallOverrides): Promise<string[]>;
        getTotalSteps(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        init(_admin: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _denominationAsset: PromiseOrValue<string>, _steps: DataTypes.StepInfoStruct[], _feeInfo: DataTypes.FeeInfoStruct, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        stakeValue(_investor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalValue(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        unwindSteps(_sharesRedeemed: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        windSteps(_amountIn: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        withdraw(shareAmount: PromiseOrValue<BigNumberish>, expectations: DataTypes.AssetExpectationStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;
        DECIMAL_SHARE_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;
        DREM_HUB(overrides?: CallOverrides): Promise<BigNumber>;
        FEE_CONTROLLER(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SHARES(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STEPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_SHARES(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<BigNumber>;
        VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativePaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execute(_to: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        getDenominationAsset(overrides?: CallOverrides): Promise<BigNumber>;
        getNode(_stepNodeKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSteps(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSteps(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        init(_admin: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _denominationAsset: PromiseOrValue<string>, _steps: DataTypes.StepInfoStruct[], _feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stakeValue(_investor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalValue(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unwindSteps(_sharesRedeemed: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        windSteps(_amountIn: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(shareAmount: PromiseOrValue<BigNumberish>, expectations: DataTypes.AssetExpectationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ASSET_REGISTRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DECIMAL_SHARE_BUFFER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DREM_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FEE_CONTROLLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_SHARES(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_STEPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_SHARES(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRECISION_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICE_AGGREGATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativePaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativeTime(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execute(_to: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDenominationAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNode(_stepNodeKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSteps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSteps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        init(_admin: PromiseOrValue<string>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _denominationAsset: PromiseOrValue<string>, _steps: DataTypes.StepInfoStruct[], _feeInfo: DataTypes.FeeInfoStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stakeValue(_investor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unwindSteps(_sharesRedeemed: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        windSteps(_amountIn: PromiseOrValue<BigNumberish>, _variableDataPerStep: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(shareAmount: PromiseOrValue<BigNumberish>, expectations: DataTypes.AssetExpectationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
