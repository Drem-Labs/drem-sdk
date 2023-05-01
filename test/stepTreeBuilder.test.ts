import { providers, Signer, Wallet } from 'ethers';
import * as dotenv from 'dotenv';
import { DremManager } from '../src/manager';
import { StepTreeBuilder } from '../src/stepTreeBuilder';
import { InvalidChainError } from '../src/lib/errors';

// import hardhat
const hre = require('hardhat');

describe('StepTreeBuilder', () => {
  // load the dotenv
  dotenv.config();

  // set the chain id
  const chainId = parseInt(process.env.CHAIN_ID);

  // create some random user to work with everything
  const user = Wallet.createRandom();

  // create a manager to work with everything
  const manager = new DremManager(chainId, user);

  describe('constructor', () => {
    it('should create a step tree builder', () => {
      expect(() => {
        var stepTree = new StepTreeBuilder(manager);
        console.log(stepTree.tree);
      }).not.toThrow();
    });
  });

});
