import { DremManager } from './manager';
import { StepTree } from './stepTree';

// class for a vault
export class Vault {
    // make a base, as all the view functions are going to be in odd types without accounting for decimals
    base: any;

    // keep the manager
    private manager: DremManager;

    constructor(manager: DremManager, vaultAddress: string) {
        // keep the manager
        this.manager = manager;

        // create a vault
        this.base = manager.sdk().Vault;

        // attach the vault to the vault address
        this.base.attach(vaultAddress);
    }

    // need to return the totalValue (account for decimals)

    // get the tree
    async getTree(): StepTree {
        // start with a blank tree
        var stepTree = new StepTree(this.manager);

        // start at the root node & iterate through the children
            // not trivial, as you need to get the root out of the stored step tree --> get a mapping from a struct
        _addNode()

        // load all the steps (this is getting the fixed args --> should not need each other --> do them all at once)
    }

    // internal add node
    private _addNode(stepTree: StepTree): void {
        // add the node

        // iterate through thte children and add them
    }

    // wind --> pass sharesIn

    // unwind --> pass sharesOut
}

/*
TO DO:
- would be nice if base had a type
    - needs to be dependent on what chain the manager is on
*/
