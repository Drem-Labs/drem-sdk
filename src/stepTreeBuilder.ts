import { DremManager } from './manager';
import { StepTree } from './types/stepTree'

// export a steptree class that is easy to work with
export class StepTreeBuilder {
    // lib for the underlying ethers implementation
    lib: any;

    // need to mirror a tree, as structs are not available outside the library
    tree: any;

    // constructor gets the correct implementation from the manager
    constructor(manager: DremManager) {
        // create the lib
        this.lib = manager.sdk().StepTreeLib;
    }

    // need to be able to add a root (returns nothing, just adds to this object)
    addRoot(): void {
        //tree.
    }

    // need to be able to add nodes --> parent, children
}
