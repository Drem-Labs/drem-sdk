// percent issues
export class InvalidPercentError extends Error {}
export class PercentageOverflowError extends Error {}

// node errors
export class NodeOutOfBoundsError extends Error {}

// tree errors
export class RootNodeNonNullParentError extends Error {}
export class RootWindPercentNotZeroError extends Error {}
export class NodeInvalidParentError extends Error {}
export class NodeWindPercentZeroError extends Error {}

// step errors
export class InvalidStepError extends Error {}
export class VariableArgsNotSetError extends Error {}

// token issues
export class InsufficientAllowance extends Error {}
export class InsufficientBalance extends Error {}
export class AssetNotWhitelisted extends Error {}

// vault errors
export class VaultNotFoundError extends Error {};

// complex errors
export class InvalidChainError extends Error {}

/*
NOTES
- didn't add error names, feel free to do so if you think it helps!
*/
