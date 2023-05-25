import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace DataTypes {
    type EIP712SignatureStruct = {
        v: PromiseOrValue<BigNumberish>;
        r: PromiseOrValue<BytesLike>;
        s: PromiseOrValue<BytesLike>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type EIP712SignatureStructOutput = [
        number,
        string,
        string,
        BigNumber
    ] & {
        v: number;
        r: string;
        s: string;
        deadline: BigNumber;
    };
    type CollectWithSigDataStruct = {
        collector: PromiseOrValue<string>;
        profileId: PromiseOrValue<BigNumberish>;
        pubId: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type CollectWithSigDataStructOutput = [
        string,
        BigNumber,
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        collector: string;
        profileId: BigNumber;
        pubId: BigNumber;
        data: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type CommentDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        profileIdPointed: PromiseOrValue<BigNumberish>;
        pubIdPointed: PromiseOrValue<BigNumberish>;
        referenceModuleData: PromiseOrValue<BytesLike>;
        collectModule: PromiseOrValue<string>;
        collectModuleInitData: PromiseOrValue<BytesLike>;
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
    };
    type CommentDataStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        string
    ] & {
        profileId: BigNumber;
        contentURI: string;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type CommentWithSigDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        profileIdPointed: PromiseOrValue<BigNumberish>;
        pubIdPointed: PromiseOrValue<BigNumberish>;
        referenceModuleData: PromiseOrValue<BytesLike>;
        collectModule: PromiseOrValue<string>;
        collectModuleInitData: PromiseOrValue<BytesLike>;
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type CommentWithSigDataStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        contentURI: string;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
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
    type FollowWithSigDataStruct = {
        follower: PromiseOrValue<string>;
        profileIds: PromiseOrValue<BigNumberish>[];
        datas: PromiseOrValue<BytesLike>[];
        sig: DataTypes.EIP712SignatureStruct;
    };
    type FollowWithSigDataStructOutput = [
        string,
        BigNumber[],
        string[],
        DataTypes.EIP712SignatureStructOutput
    ] & {
        follower: string;
        profileIds: BigNumber[];
        datas: string[];
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type ProfileStructStruct = {
        pubCount: PromiseOrValue<BigNumberish>;
        followModule: PromiseOrValue<string>;
        followNFT: PromiseOrValue<string>;
        handle: PromiseOrValue<string>;
        imageURI: PromiseOrValue<string>;
        followNFTURI: PromiseOrValue<string>;
    };
    type ProfileStructStructOutput = [
        BigNumber,
        string,
        string,
        string,
        string,
        string
    ] & {
        pubCount: BigNumber;
        followModule: string;
        followNFT: string;
        handle: string;
        imageURI: string;
        followNFTURI: string;
    };
    type PublicationStructStruct = {
        profileIdPointed: PromiseOrValue<BigNumberish>;
        pubIdPointed: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        referenceModule: PromiseOrValue<string>;
        collectModule: PromiseOrValue<string>;
        collectNFT: PromiseOrValue<string>;
    };
    type PublicationStructStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        contentURI: string;
        referenceModule: string;
        collectModule: string;
        collectNFT: string;
    };
    type MirrorDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        profileIdPointed: PromiseOrValue<BigNumberish>;
        pubIdPointed: PromiseOrValue<BigNumberish>;
        referenceModuleData: PromiseOrValue<BytesLike>;
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
    };
    type MirrorDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string
    ] & {
        profileId: BigNumber;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type MirrorWithSigDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        profileIdPointed: PromiseOrValue<BigNumberish>;
        pubIdPointed: PromiseOrValue<BigNumberish>;
        referenceModuleData: PromiseOrValue<BytesLike>;
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type MirrorWithSigDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        referenceModule: string;
        referenceModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type PostDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        collectModule: PromiseOrValue<string>;
        collectModuleInitData: PromiseOrValue<BytesLike>;
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
    };
    type PostDataStructOutput = [
        BigNumber,
        string,
        string,
        string,
        string,
        string
    ] & {
        profileId: BigNumber;
        contentURI: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type PostWithSigDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        contentURI: PromiseOrValue<string>;
        collectModule: PromiseOrValue<string>;
        collectModuleInitData: PromiseOrValue<BytesLike>;
        referenceModule: PromiseOrValue<string>;
        referenceModuleInitData: PromiseOrValue<BytesLike>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type PostWithSigDataStructOutput = [
        BigNumber,
        string,
        string,
        string,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        contentURI: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetDefaultProfileWithSigDataStruct = {
        wallet: PromiseOrValue<string>;
        profileId: PromiseOrValue<BigNumberish>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetDefaultProfileWithSigDataStructOutput = [
        string,
        BigNumber,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        wallet: string;
        profileId: BigNumber;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetDispatcherWithSigDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        dispatcher: PromiseOrValue<string>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetDispatcherWithSigDataStructOutput = [
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        dispatcher: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetFollowModuleWithSigDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        followModule: PromiseOrValue<string>;
        followModuleInitData: PromiseOrValue<BytesLike>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetFollowModuleWithSigDataStructOutput = [
        BigNumber,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        followModule: string;
        followModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetFollowNFTURIWithSigDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        followNFTURI: PromiseOrValue<string>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetFollowNFTURIWithSigDataStructOutput = [
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        followNFTURI: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetProfileImageURIWithSigDataStruct = {
        profileId: PromiseOrValue<BigNumberish>;
        imageURI: PromiseOrValue<string>;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetProfileImageURIWithSigDataStructOutput = [
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        imageURI: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
}
export declare namespace IERC721Time {
    type TokenDataStruct = {
        owner: PromiseOrValue<string>;
        mintTimestamp: PromiseOrValue<BigNumberish>;
    };
    type TokenDataStructOutput = [string, BigNumber] & {
        owner: string;
        mintTimestamp: BigNumber;
    };
}
export interface LensHubInterface extends utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnWithSig(uint256,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
        "collect(uint256,uint256,bytes)": FunctionFragment;
        "collectWithSig((address,uint256,uint256,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "comment((uint256,string,uint256,uint256,bytes,address,bytes,address,bytes))": FunctionFragment;
        "commentWithSig((uint256,string,uint256,uint256,bytes,address,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "commentWithSig_Dispatcher((uint256,string,uint256,uint256,bytes,address,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "createProfile((address,string,string,address,bytes,string))": FunctionFragment;
        "defaultProfile(address)": FunctionFragment;
        "emitCollectNFTTransferEvent(uint256,uint256,uint256,address,address)": FunctionFragment;
        "emitFollowNFTTransferEvent(uint256,uint256,address,address)": FunctionFragment;
        "exists(uint256)": FunctionFragment;
        "follow(uint256[],bytes[])": FunctionFragment;
        "followWithSig((address,uint256[],bytes[],(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getCollectModule(uint256,uint256)": FunctionFragment;
        "getCollectNFT(uint256,uint256)": FunctionFragment;
        "getCollectNFTImpl()": FunctionFragment;
        "getContentURI(uint256,uint256)": FunctionFragment;
        "getDispatcher(uint256)": FunctionFragment;
        "getDomainSeparator()": FunctionFragment;
        "getFollowModule(uint256)": FunctionFragment;
        "getFollowNFT(uint256)": FunctionFragment;
        "getFollowNFTImpl()": FunctionFragment;
        "getFollowNFTURI(uint256)": FunctionFragment;
        "getGovernance()": FunctionFragment;
        "getHandle(uint256)": FunctionFragment;
        "getProfile(uint256)": FunctionFragment;
        "getProfileIdByHandle(string)": FunctionFragment;
        "getPub(uint256,uint256)": FunctionFragment;
        "getPubCount(uint256)": FunctionFragment;
        "getPubPointer(uint256,uint256)": FunctionFragment;
        "getPubType(uint256,uint256)": FunctionFragment;
        "getReferenceModule(uint256,uint256)": FunctionFragment;
        "getState()": FunctionFragment;
        "initialize(string,string,address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isCollectModuleWhitelisted(address)": FunctionFragment;
        "isFollowModuleWhitelisted(address)": FunctionFragment;
        "isProfileCreatorWhitelisted(address)": FunctionFragment;
        "isReferenceModuleWhitelisted(address)": FunctionFragment;
        "mintTimestampOf(uint256)": FunctionFragment;
        "mirror((uint256,uint256,uint256,bytes,address,bytes))": FunctionFragment;
        "mirrorWithSig((uint256,uint256,uint256,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "mirrorWithSig_Dispatcher((uint256,uint256,uint256,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "name()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "permit(address,uint256,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
        "permitForAll(address,address,bool,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
        "post((uint256,string,address,bytes,address,bytes))": FunctionFragment;
        "postWithSig((uint256,string,address,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "postWithSig_Dispatcher((uint256,string,address,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setDefaultProfile(uint256)": FunctionFragment;
        "setDefaultProfileWithSig((address,uint256,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setDispatcher(uint256,address)": FunctionFragment;
        "setDispatcherWithSig((uint256,address,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setEmergencyAdmin(address)": FunctionFragment;
        "setFollowModule(uint256,address,bytes)": FunctionFragment;
        "setFollowModuleWithSig((uint256,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setFollowNFTURI(uint256,string)": FunctionFragment;
        "setFollowNFTURIWithSig((uint256,string,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setGovernance(address)": FunctionFragment;
        "setProfileImageURI(uint256,string)": FunctionFragment;
        "setProfileImageURIWithSig((uint256,string,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setState(uint8)": FunctionFragment;
        "sigNonces(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenDataOf(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "whitelistCollectModule(address,bool)": FunctionFragment;
        "whitelistFollowModule(address,bool)": FunctionFragment;
        "whitelistProfileCreator(address,bool)": FunctionFragment;
        "whitelistReferenceModule(address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "balanceOf" | "burn" | "burnWithSig" | "collect" | "collectWithSig" | "comment" | "commentWithSig" | "commentWithSig_Dispatcher" | "createProfile" | "defaultProfile" | "emitCollectNFTTransferEvent" | "emitFollowNFTTransferEvent" | "exists" | "follow" | "followWithSig" | "getApproved" | "getCollectModule" | "getCollectNFT" | "getCollectNFTImpl" | "getContentURI" | "getDispatcher" | "getDomainSeparator" | "getFollowModule" | "getFollowNFT" | "getFollowNFTImpl" | "getFollowNFTURI" | "getGovernance" | "getHandle" | "getProfile" | "getProfileIdByHandle" | "getPub" | "getPubCount" | "getPubPointer" | "getPubType" | "getReferenceModule" | "getState" | "initialize" | "isApprovedForAll" | "isCollectModuleWhitelisted" | "isFollowModuleWhitelisted" | "isProfileCreatorWhitelisted" | "isReferenceModuleWhitelisted" | "mintTimestampOf" | "mirror" | "mirrorWithSig" | "mirrorWithSig_Dispatcher" | "name" | "ownerOf" | "permit" | "permitForAll" | "post" | "postWithSig" | "postWithSig_Dispatcher" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setDefaultProfile" | "setDefaultProfileWithSig" | "setDispatcher" | "setDispatcherWithSig" | "setEmergencyAdmin" | "setFollowModule" | "setFollowModuleWithSig" | "setFollowNFTURI" | "setFollowNFTURIWithSig" | "setGovernance" | "setProfileImageURI" | "setProfileImageURIWithSig" | "setState" | "sigNonces" | "supportsInterface" | "symbol" | "tokenByIndex" | "tokenDataOf" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "whitelistCollectModule" | "whitelistFollowModule" | "whitelistProfileCreator" | "whitelistReferenceModule"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "burnWithSig", values: [PromiseOrValue<BigNumberish>, DataTypes.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: "collect", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "collectWithSig", values: [DataTypes.CollectWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "comment", values: [DataTypes.CommentDataStruct]): string;
    encodeFunctionData(functionFragment: "commentWithSig", values: [DataTypes.CommentWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "commentWithSig_Dispatcher", values: [DataTypes.CommentWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "createProfile", values: [DataTypes.CreateProfileDataStruct]): string;
    encodeFunctionData(functionFragment: "defaultProfile", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "emitCollectNFTTransferEvent", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "emitFollowNFTTransferEvent", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "exists", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "follow", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "followWithSig", values: [DataTypes.FollowWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCollectModule", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCollectNFT", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCollectNFTImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContentURI", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDispatcher", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDomainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFollowModule", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFollowNFT", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFollowNFTImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFollowNFTURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGovernance", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHandle", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getProfile", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getProfileIdByHandle", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPub", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPubCount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPubPointer", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPubType", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReferenceModule", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getState", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isCollectModuleWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isFollowModuleWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isProfileCreatorWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isReferenceModuleWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mintTimestampOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mirror", values: [DataTypes.MirrorDataStruct]): string;
    encodeFunctionData(functionFragment: "mirrorWithSig", values: [DataTypes.MirrorWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "mirrorWithSig_Dispatcher", values: [DataTypes.MirrorWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        DataTypes.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: "permitForAll", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        DataTypes.EIP712SignatureStruct
    ]): string;
    encodeFunctionData(functionFragment: "post", values: [DataTypes.PostDataStruct]): string;
    encodeFunctionData(functionFragment: "postWithSig", values: [DataTypes.PostWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "postWithSig_Dispatcher", values: [DataTypes.PostWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDefaultProfile", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setDefaultProfileWithSig", values: [DataTypes.SetDefaultProfileWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setDispatcher", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDispatcherWithSig", values: [DataTypes.SetDispatcherWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setEmergencyAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFollowModule", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setFollowModuleWithSig", values: [DataTypes.SetFollowModuleWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setFollowNFTURI", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFollowNFTURIWithSig", values: [DataTypes.SetFollowNFTURIWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setGovernance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setProfileImageURI", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setProfileImageURIWithSig", values: [DataTypes.SetProfileImageURIWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setState", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sigNonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenDataOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "whitelistCollectModule", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "whitelistFollowModule", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "whitelistProfileCreator", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "whitelistReferenceModule", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commentWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commentWithSig_Dispatcher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitCollectNFTTransferEvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitFollowNFTTransferEvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "follow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "followWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollectModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollectNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollectNFTImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContentURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDispatcher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowNFTImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowNFTURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHandle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProfileIdByHandle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPub", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPubCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPubPointer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPubType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferenceModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCollectModuleWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFollowModuleWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProfileCreatorWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isReferenceModuleWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintTimestampOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mirror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mirrorWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mirrorWithSig_Dispatcher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "post", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postWithSig_Dispatcher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultProfileWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDispatcher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDispatcherWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowModuleWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowNFTURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowNFTURIWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProfileImageURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProfileImageURIWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sigNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenDataOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistCollectModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistFollowModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistProfileCreator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistReferenceModule", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface LensHub extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LensHubInterface;
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
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnWithSig(tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collect(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commentWithSig_Dispatcher(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultProfile(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        emitFollowNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, followNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        follow(profileIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getCollectModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getCollectNFT(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<[string]>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getDispatcher(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;
        getFollowModule(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getFollowNFT(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<[string]>;
        getFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getGovernance(overrides?: CallOverrides): Promise<[string]>;
        getHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.ProfileStructStructOutput]>;
        getProfileIdByHandle(handle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPub(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.PublicationStructStructOutput]>;
        getPubCount(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPubPointer(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPubType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        getReferenceModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getState(overrides?: CallOverrides): Promise<[number]>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isCollectModuleWhitelisted(collectModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mirrorWithSig_Dispatcher(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        permitForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        postWithSig_Dispatcher(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDispatcher(profileId: PromiseOrValue<BigNumberish>, dispatcher: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, followNFTURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProfileImageURI(profileId: PromiseOrValue<BigNumberish>, imageURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IERC721Time.TokenDataStructOutput]>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistCollectModule(collectModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnWithSig(tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collect(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commentWithSig_Dispatcher(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultProfile(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    emitFollowNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, followNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    follow(profileIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getCollectModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getCollectNFT(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getCollectNFTImpl(overrides?: CallOverrides): Promise<string>;
    getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getDispatcher(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getDomainSeparator(overrides?: CallOverrides): Promise<string>;
    getFollowModule(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getFollowNFT(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getFollowNFTImpl(overrides?: CallOverrides): Promise<string>;
    getFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getGovernance(overrides?: CallOverrides): Promise<string>;
    getHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.ProfileStructStructOutput>;
    getProfileIdByHandle(handle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getPub(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.PublicationStructStructOutput>;
    getPubCount(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPubPointer(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getPubType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    getReferenceModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getState(overrides?: CallOverrides): Promise<number>;
    initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isCollectModuleWhitelisted(collectModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mirrorWithSig_Dispatcher(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    permitForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    postWithSig_Dispatcher(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDispatcher(profileId: PromiseOrValue<BigNumberish>, dispatcher: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, followNFTURI: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProfileImageURI(profileId: PromiseOrValue<BigNumberish>, imageURI: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IERC721Time.TokenDataStructOutput>;
    tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistCollectModule(collectModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        burnWithSig(tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        collect(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        commentWithSig_Dispatcher(vars: DataTypes.CommentWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        defaultProfile(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        emitFollowNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, followNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        follow(profileIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber[]>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getCollectModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getCollectNFT(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<string>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getDispatcher(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getDomainSeparator(overrides?: CallOverrides): Promise<string>;
        getFollowModule(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getFollowNFT(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<string>;
        getFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getGovernance(overrides?: CallOverrides): Promise<string>;
        getHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.ProfileStructStructOutput>;
        getProfileIdByHandle(handle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPub(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.PublicationStructStructOutput>;
        getPubCount(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPubPointer(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPubType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        getReferenceModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getState(overrides?: CallOverrides): Promise<number>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, newGovernance: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isCollectModuleWhitelisted(collectModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        mirrorWithSig_Dispatcher(vars: DataTypes.MirrorWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        permitForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, sig: DataTypes.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        post(vars: DataTypes.PostDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        postWithSig_Dispatcher(vars: DataTypes.PostWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDefaultProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setDispatcher(profileId: PromiseOrValue<BigNumberish>, dispatcher: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, followNFTURI: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setProfileImageURI(profileId: PromiseOrValue<BigNumberish>, imageURI: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IERC721Time.TokenDataStructOutput>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        whitelistCollectModule(collectModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
    };
    estimateGas: {
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnWithSig(tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collect(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commentWithSig_Dispatcher(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultProfile(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        emitFollowNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, followNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        follow(profileIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCollectModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCollectNFT(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<BigNumber>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDispatcher(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        getFollowModule(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFollowNFT(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<BigNumber>;
        getFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGovernance(overrides?: CallOverrides): Promise<BigNumber>;
        getHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getProfileIdByHandle(handle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPub(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPubCount(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPubPointer(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPubType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReferenceModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getState(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isCollectModuleWhitelisted(collectModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mirrorWithSig_Dispatcher(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        permitForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        postWithSig_Dispatcher(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDispatcher(profileId: PromiseOrValue<BigNumberish>, dispatcher: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, followNFTURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProfileImageURI(profileId: PromiseOrValue<BigNumberish>, imageURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistCollectModule(collectModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnWithSig(tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collect(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commentWithSig_Dispatcher(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultProfile(wallet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emitCollectNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, collectNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        emitFollowNFTTransferEvent(profileId: PromiseOrValue<BigNumberish>, followNFTId: PromiseOrValue<BigNumberish>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exists(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        follow(profileIds: PromiseOrValue<BigNumberish>[], datas: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollectModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollectNFT(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContentURI(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDispatcher(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDomainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowModule(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowNFT(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHandle(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProfileIdByHandle(handle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPub(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPubCount(profileId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPubPointer(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPubType(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReferenceModule(profileId: PromiseOrValue<BigNumberish>, pubId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getState(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCollectModuleWhitelisted(collectModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFollowModuleWhitelisted(followModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProfileCreatorWhitelisted(profileCreator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isReferenceModuleWhitelisted(referenceModule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintTimestampOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mirrorWithSig_Dispatcher(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(spender: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        permitForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        postWithSig_Dispatcher(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultProfile(profileId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDispatcher(profileId: PromiseOrValue<BigNumberish>, dispatcher: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmergencyAdmin(newEmergencyAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFollowModule(profileId: PromiseOrValue<BigNumberish>, followModule: PromiseOrValue<string>, followModuleInitData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFollowNFTURI(profileId: PromiseOrValue<BigNumberish>, followNFTURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGovernance(newGovernance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProfileImageURI(profileId: PromiseOrValue<BigNumberish>, imageURI: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setState(newState: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDataOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistCollectModule(collectModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistFollowModule(followModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistProfileCreator(profileCreator: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelistReferenceModule(referenceModule: PromiseOrValue<string>, whitelist: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
