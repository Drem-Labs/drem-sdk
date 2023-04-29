import { providers, Signer, Wallet } from 'ethers';
import * as dotenv from 'dotenv';
import { DremManager } from '../src/manager';
import { getVault } from '../src/vault';
import { InvalidChainError } from '../src/lib/errors';

// import hardhat
const hre = require('hardhat');
/*import { ethers } from 'hardhat';*/

describe('Vault', () => {
  // load the dotenv
  dotenv.config();


  // set the chain id
  const chainId = parseInt(process.env.CHAIN_ID);

  // create some random user to work with everything
  const user = Wallet.createRandom();

  // create a manager to work with everything
  const manager = new DremManager(chainId, user);


  // set the vault address
    // note: temporarily hardcoded, but we will use the deployer once it has been built
  const vaultAddress = "0xfbD21fC5300fEa410E6786eb0C5A663009230097";

  describe('constructor', () => {
    it('should become a vault with the ethers implementation', () => {
      expect(() => {
        let vault = getVault(manager, vaultAddress);
      }).not.toThrow();
    });
  });

});
