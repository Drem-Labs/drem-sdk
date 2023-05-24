
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
}
