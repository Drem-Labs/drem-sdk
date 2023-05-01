import { DremManager } from './manager';

// class for a vault
export class Vault {
    // make a base, as all the view functions are going to be in odd types without accounting for decimals
    base: any;

    constructor(manager: DremManager, vaultAddress: string) {
        // create a vault
        this.base = manager.sdk().Vault;

        // attach the vault to the vault address
        this.base.attach(vaultAddress);
    }

    // need to return the totalValue (account for decimals)
    totalValue(): number {
        // get the important values from the smart contract

        // return the total value in number format
        return 0;
    }
}

/*
TO DO:
- would be nice if base had a type
    - needs to be dependent on what chain the manager is on
*/
