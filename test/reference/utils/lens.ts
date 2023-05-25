import * as ethers from 'ethers';
import { Wallet } from 'ethers';
import { DremManager } from '../../../src/manager';

// error for lens stuff
class LensError extends Error {}

export type CreateProfileDataStruct = [string, string, string, string, string, string];

// profile creation class
export class CreateProfileData {
    to: string;
    handle: string;
    imageURI: string = '';
    followModule: string;
    followModuleInitData: string = '0x00';
    followNFTURI: string = '';

    constructor(manager: DremManager, to: string, handle: string) {
        // set the data members
        this.to = to;
        this.handle = handle;

        // get the follow module
        this._getFollowModule(manager);
    }

    // to struct function
    toStruct(): CreateProfileDataStruct {
        return [
            this.to,
            this.handle,
            this.imageURI,
            this.followModule,
            this.followModuleInitData,
            this.followNFTURI
            ];
    }

    private _getFollowModule(manager: DremManager): void {
        // set the follow module based on the manager
        if (manager.chainId === 137) {
            this.followModule = '0x057ccDf5153bE1081830a6C3D507C9dfE1ac8e4E';
        }
        else if (manager.chainId === 80001) {
            this.followModule = '0x62D0EcAB45428087d91a94EE33E141B7496Ad7c3';
        }
        else {
            throw new LensError('Invalid chainId: ' + manager.chainId);
        }
    }
}


// class for post data
type PostDataStruct = [number, string, string, string, string, string];
export class PostData {
    // internal data types with defaults
    profileId: number;
    contentURI: string = '';
    collectModule: string;
    collectModuleInitData: string;
    referenceModule: string = ethers.constants.AddressZero;
    referenceModuleInitData: string = '0x00';

    constructor(manager: DremManager, profileId: number, collectModuleInitData: string) {
        // set the internal data members
        this.profileId = profileId;
        this.collectModule = manager.sdk().DremCollectModule.address;
        this.collectModuleInitData = collectModuleInitData;
    }

    // send everything to a struct
    toStruct(): PostDataStruct {
        return [
            this.profileId,
            this.contentURI,
            this.collectModule,
            this.collectModuleInitData,
            this.referenceModule,
            this.referenceModuleInitData
            ];
    }
}


// function to create a profile
export async function createProfile(manager: DremManager, user: Wallet, handle: string): Promise<number> {
    // get the sdk
    var sdk = manager.sdk();

    // create the profile data
    var profileData = new CreateProfileData(manager, user.address, handle);

    // create a profile
    await sdk.lens.ProfileCreation.proxyCreateProfile(profileData.toStruct());

    // get the profile id by checking the handle (as long as the profile creation worked)
    var profileId = (await sdk.lens.LensHub.getProfileIdByHandle(handle)).toNumber();

    return profileId;
}
