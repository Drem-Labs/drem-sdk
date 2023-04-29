import { providers, Signer } from 'ethers';
import { getPolygonMumbaiSdk } from "./base";
import { InvalidChainError } from "./lib/errors";

// declare the sdk type
type GetSdkType = (defaultSignerOrProvider: Signer | providers.Provider) => any;

// want to abstract away the chain, so do so here
export class Manager {
    // keep chain & access information
    chainId: number;
    defaultSignerOrProvider: Signer | providers.Provider;

    // set the chain ids and their functions
    sdks: Record<number, GetSdkType> = {
        // mumbai
        80001: getPolygonMumbaiSdk
    }

    // set the chain id to direct which sdk to provide
    constructor(chainId: number, defaultSignerOrProvider: Signer | providers.Provider) {
        // validate the input(s)
        if (!(chainId in sdks)) {
            throw new InvalidChainError();
        }

        // set the chain and access information
        this.chainId = chainId;
        this.defaultSignerOrProvider = defaultSignerOrProvider;
    }

    // get an sdk
    sdk() {
        return sdks[this.chainId](this.defaultSignerOrProvider);
    }
}
