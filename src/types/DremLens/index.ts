import * as ethers from 'ethers';

// class for drem lens data types --> only necessary if exporting to bytes, which is only for init and processing
export class DremLensDataType {
    // some to struct that returns some array
    async toStruct(): Promise<any[]> {
        return [];
    }

    // some struct types
    structTypes(): string[] {
        return [];
    }

    // make a toBytes, so this struct can be fed into a post
    async toBytes(): Promise<string> {
        var values = await this.toStruct();
        var types = this.structTypes();

        // encode the struct with ethers and return it
        var bytes = ethers.utils.defaultAbiCoder.encode(types, values);

        return bytes;
    }
}
