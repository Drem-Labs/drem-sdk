import { providers, Signer, Wallet } from 'ethers';
import { Manager } from '../src/manager';
import { InvalidChainError } from '../src/lib/errors';

describe('Manager', () => {
  const defaultSignerOrProvider: Signer | providers.Provider = new Wallet();

  describe('constructor', () => {
    it('should throw an error for an invalid chain id', () => {
      expect(() => new Manager(12345, defaultSignerOrProvider)).toThrowError(InvalidChainError);
    });

    it('should not throw an error for a valid chain id', () => {
      expect(() => new Manager(80001, defaultSignerOrProvider)).not.toThrow();
    });
  });

  describe('sdk', () => {
    it('should return an SDK for a valid chain id', () => {
      const manager = new Manager(80001, defaultSignerOrProvider);
      expect(manager.sdk()).toBeDefined();
    });

    it('should throw an error for an invalid chain id', () => {
      const manager = new Manager(12345, defaultSignerOrProvider);
      expect(() => manager.sdk()).toThrowError(InvalidChainError);
    });
  });
});
