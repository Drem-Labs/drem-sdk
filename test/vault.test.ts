import { user, manager } from './reference/setup';
import { deployMockTransferVault } from './reference/utils/deploy';
import { DremManager } from '../src/manager';
import { VaultDeployer } from '../src/vaultDeployer';
import { Vault } from '../src/vault';
import { InvalidChainError } from '../src/lib/errors';

describe('Vault', () => {
  // set the vault deployer
  var vaultDeployer = new VaultDeployer(manager);

  describe('constructor', () => {
    it('should create a vault', () => {
      expect(() => {
        var vault = vaultDeployer.;
      }).not.toThrow();
    });
  });

  describe('base', () => {
    it('should get a root node', () => {
      // create a vault
      var vaultAddress = deployMockTransferVault(user, manager);
      var vault = new Vault(manager, vaultAddress);

      expect(() => {
        // get the root node
        var root = await vault.base.stepTree.;

        // check that the root has some non-zero value

      }).toBe(true);
    });
  });

});
