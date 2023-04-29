import { providers, Signer, Wallet } from 'ethers';
import * as dotenv from 'dotenv';
import { Manager } from '../src/manager';
import { InvalidChainError } from '../src/lib/errors';
import './reference/setup';


describe('Manager', () => {
  // load the dotenv
  dotenv.config();

  // set the chain id
  const chainId = parseInt(process.env.CHAIN_ID);


  // create some random user to work with everything
  const user = Wallet.createRandom();

  describe('constructor', () => {
    it('should throw an error for an invalid chain id', () => {
      expect(() => new Manager(12345, user)).toThrowError('Invalid Chain Id');
    });

    it('should not throw an error for a valid chain id', () => {
      expect(() => new Manager(chainId, user)).not.toThrow();
    });
  });

  // test that deploying an sdk does not throw an error
  describe('sdk', () => {
    it('should not throw an error when creating an sdk with this chain id', () => {
      const manager  = new Manager(chainId, user);

      expect(() => {
        manager.sdk();
      }).not.toThrow();
    });

    // the manager should never even be able to be created with an invalid chain id --> can assume that the sdk could not even attempt to be created
  });
});
