import { user, manager } from './reference/setup';
import { deployMockTransferVault } from './reference/utils/deploy';
import { DremManager } from '../src/manager';
import { VaultDeployer } from '../src/vaultDeployer';
import { Vault } from '../src/vault';
import { InvalidChainError } from '../src/lib/errors';

describe('Vault', () => {
  describe('constructor', () => {
    it('should create a vault', async () => {
      await expect(
        deployMockTransferVault(user, manager)
        ).resolves.toBeDefined();
    }, 10000);
  });

  describe('getTree', () => {
    it('should get a step tree', async () => {
      var vault = await deployMockTransferVault(user, manager);

      // get the tree
      var stepTree = await vault.getTree();

      // check the number of nodes in the tree
      expect(Object.keys(stepTree.nodes).length).toBe(1);
    }, 10000);
  });

});
