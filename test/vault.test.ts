import { manager } from './reference/setup';
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
      expect(() => {
        var vault = new Vault(manager, vaultAddress);
      });
    });
  });

});
