import { manager } from './reference/setup';
import { StepTree } from '../src/stepTree';
import { Node } from '../src/types/Node';
import { InvalidChainError } from '../src/lib/errors';
import { TransferStep } from '../src/steps/transfer/transferStep';


describe('StepTree', () => {
  // get the transfer step
  var transferStep = new TransferStep(manager);

  describe('constructor', () => {
    it('should create a step tree builder', () => {
      expect(() => {
        var stepTree = new StepTree(manager);
      }).not.toThrow();
    });
  });

  // insert a root node: the transfer step
  describe('insert', () => {
    it('should add a root node', async () => {
      // create a step tree
      var stepTree = new StepTree(manager);

      // add a root node
      await stepTree.insert(0, 1, transferStep, 0);

      // assert that the root node matches the parentIndex, key, step, and wind percent (no children)
      expect(stepTree.nodes[1].getParentIndex()).toBe(0);
      expect(stepTree.nodes[1].getKey()).toBe(1);
      expect(stepTree.nodes[1].getStep()).toBe(transferStep);
      expect(stepTree.nodes[1].getWindPercent()).toBe(0);
    });
  });

  // remove the root node: the transfer step
  describe('remove', () => {
    it('should remove a root node', () => {
      // create a step stree

      // add a root node

      // remove a root node

      // assert that there are no nodes in the tree
    })
  });

  // insert: root + 2 swaps

  // insert: root + 2 swaps + 1 stake

  // insert: root + 2 swaps + 1 stake, remove stake (leaf)

  // insert: root + 2 swaps + 1 stake, remove swap (internal)

  // insert: root + 2 swaps + 1 stake, remove root

});


/*
To Do:
- need to add tests as these contracts get deployed
- if contracts are live on polygon, but not on mainnet, can split the tests
*/
