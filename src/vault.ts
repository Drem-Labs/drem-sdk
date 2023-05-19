import { DremManager } from './manager';
import { StepTree } from './stepTree';
import { BaseStep } from './steps/BaseStep';
import { PRECISION_FACTOR, Node } from './types/Node';
import { StepDirectory } from './steps/StepDirectory';

// class for a vault
export class Vault {
    // make a base, as all the view functions are going to be in odd types without accounting for decimals
    base: any;

    // keep the manager
    private manager: DremManager;

    // keep a step directory for recursive calls
    private stepDirectory: StepDirectory;

    constructor(manager: DremManager, vaultAddress: string) {
        // keep the manager
        this.manager = manager;

        // create a vault
        this.base = manager.sdk().Vault;

        // attach the vault to the vault address
        this.base = this.base.attach(vaultAddress);

        // create the step directory
        this.stepDirectory = new StepDirectory(manager);
    }

    // need to return the totalValue (account for decimals)


    // get the tree
    async getTree(): Promise<StepTree> {
        // start with a blank tree
        var stepTree = new StepTree(this.manager);

        // start at the root node & recurse through the children
        await this._addNode(stepTree, 1);

        // load all the steps (this is getting the fixed args --> should not need each other --> do them all at once)
        // this lacks context if passed with .map, so going to use a for loop
        const promises: Promise<void>[] = [];
        for (var node of Object.values(stepTree.nodes)) {
            const promise = this._loadNode(node);
            promises.push(promise);
        }
        await Promise.all(promises);

        // return the tree
        return stepTree;
    }

    // get a node
    private async _getNode(index: number): Promise<Node> {
        // get the node data from the base
        var nodeData = await this.base.getNode(index);

        // get the step from the address
        var step = this.stepDirectory.getStep(nodeData.stepAddress);

        // set the wind percent
        var windPercent = nodeData.windPercent.toNumber() / PRECISION_FACTOR;

        // set up the node, which will need to have the children available for later iteration
        var node = new Node(nodeData.parent, nodeData.key, step, windPercent);

        // add the node children
        node.pushChildren(nodeData.children);

        return node;

    }

    // internal add node
    private async _addNode(stepTree: StepTree, nodeIndex: number): Promise<void> {
        // if the node index is 0, return
        if (nodeIndex === 0) {
            return;
        }

        // get the node
        var node = await this._getNode(nodeIndex);

        // add the node (this is direct --> forgoes checks, as we cannot alter the chain anyway)
            // does not really matter which order this happens in, which makes it easily asynchronous
        stepTree.nodes[node.getKey()] = node;

        await Promise.all(node.getChildren().map(async (childKey) => this._addNode(stepTree, childKey)));
    }

    // load a node's step
    private async _loadNode(node: Node): Promise<void> {
        await node.getStep().load(this, node.getKey());
    }

    // wind --> pass sharesIn

    // unwind --> pass sharesOut
}

/*
TO DO:
- would be nice if base had a type
    - needs to be dependent on what chain the manager is on, which I don't have a solution for (maybe typecast on the constructor, but I'm not sure if this is possible)
- use Promise.all() to add all the children
    - more complex, but more efficient
- would be good to have wind/unwind, but these are taking a backseat to the collect module
*/
