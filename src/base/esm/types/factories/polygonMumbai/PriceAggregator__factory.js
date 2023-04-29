/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_dremHub",
                type: "address",
            },
            {
                internalType: "address",
                name: "_ethToUSDAggregator",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "AssetNotSupported",
        type: "error",
    },
    {
        inputs: [],
        name: "EmptyArray",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAggregatorRate",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAssetArrays",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidInputArrays",
        type: "error",
    },
    {
        inputs: [],
        name: "NotHubOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "StaleEthRate",
        type: "error",
    },
    {
        inputs: [],
        name: "StaleUSDRate",
        type: "error",
    },
    {
        inputs: [],
        name: "ZeroAddress",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "DREM_HUB",
        outputs: [
            {
                internalType: "contract DremHub",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ETH_TO_USD_AGGREGATOR",
        outputs: [
            {
                internalType: "contract AggregatorV3Interface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "STALE_ETH_PRICE_LIMIT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "STALE_USD_PRICE_LIMIT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_assets",
                type: "address[]",
            },
            {
                internalType: "contract AggregatorV3Interface[]",
                name: "_aggregators",
                type: "address[]",
            },
            {
                internalType: "enum DataTypes.RateAsset[]",
                name: "_rateAssets",
                type: "uint8[]",
            },
        ],
        name: "addSupportedAssets",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_inputAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_inputAsset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_outputAsset",
                type: "address",
            },
        ],
        name: "convertAsset",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "_inputAmounts",
                type: "uint256[]",
            },
            {
                internalType: "address[]",
                name: "_inputAssets",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "_outputAsset",
                type: "address",
            },
        ],
        name: "convertAssets",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
        ],
        name: "getSupportedAssetInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "contract AggregatorV3Interface",
                        name: "aggregator",
                        type: "address",
                    },
                    {
                        internalType: "enum DataTypes.RateAsset",
                        name: "rateAsset",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "units",
                        type: "uint256",
                    },
                ],
                internalType: "struct DataTypes.SupportedAssetInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
        ],
        name: "isAssetSupported",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_assets",
                type: "address[]",
            },
        ],
        name: "removeSupportedAssets",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
class PriceAggregator__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
PriceAggregator__factory.abi = _abi;
export { PriceAggregator__factory };