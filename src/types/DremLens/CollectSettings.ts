// constant struct type
const STRUCT_TYPE = "(bool)";

export type CollectSettingsStruct = [boolean];

export class CollectSettings {
    // only followers boolean
    onlyFollowers: boolean;

    constructor(onlyFollowers: boolean) {
        this.onlyFollowers = onlyFollowers;
    }

    // needs to go to a struct
    toStruct(): CollectSettingsStruct {
        return [this.onlyFollowers];
    }

    // struct type
    structType(): string {
        return STRUCT_TYPE;
    }
}
