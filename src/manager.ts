import { providers, Signer } from 'ethers';
import { getPolygonMumbaiSdk } from "./base";
import { InvalidChainError } from "./lib/errors";

// declare the sdk type
type GetSdkType = (defaultSignerOrProvider: Signer | providers.Provider) => any;

// want to abstract away the chain, so do so here
export class DremManager {
    // keep chain & access information
    chainId: number;
    defaultSignerOrProvider: Signer | providers.Provider;
    private baseSdk: any;

    // set the chain ids and their functions
    sdks: Record<number, GetSdkType> = {
        // mumbai
        80001: getPolygonMumbaiSdk
    }

    // set the chain id to direct which sdk to provide
    constructor(chainId: number, defaultSignerOrProvider: Signer | providers.Provider) {
        // validate the input(s)
        if (!(chainId in this.sdks)) {
            throw new InvalidChainError("Chain options: 137, 80001");
        }

        // set the chain and access information
        this.chainId = chainId;
        this.defaultSignerOrProvider = defaultSignerOrProvider;
    }

    // get an sdk
    sdk() {
        // set the sdk if not yet done
        if (this.baseSdk === undefined) {
            this.baseSdk = this.sdks[this.chainId](this.defaultSignerOrProvider);
        }

        // return the sdk
        return this.baseSdk;
    }
}

/* NOTES
- DremManager should not carry an address, as this is an asynchronous call that only can come out of the signer
    - the address of a user should always be available from the wallet provider anyway, which makes storage here redundant and potentially confusing
*/
