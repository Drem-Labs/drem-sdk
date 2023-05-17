import { user, manager } from './reference/setup';
import { deployMockTransferVault } from './reference/utils/deploy';
import { DremManager } from '../src/manager';
import { VaultDeployer } from '../src/vaultDeployer';
import { Vault } from '../src/vault';
import { InvalidChainError } from '../src/lib/errors';

describe('Vault', () => {
  describe('constructor', () => {
    it('should create a vault', () => {
      expect(() => {
        var vault = deployMockTransferVault(user, manager);
      }).not.toThrow();
    });
  });

  describe('', () => {
    it('should get a step tree', () => {

    });
  });

});
