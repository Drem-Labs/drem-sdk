import { providers, Signer, Wallet } from 'ethers';
import * as dotenv from 'dotenv';
import { DremManager } from '../../src/manager';

// import hardhat
const hre = require('hardhat');

// load the dotenv
dotenv.config();

// set the chain id
const chainId = parseInt(process.env.CHAIN_ID);

// create some random user to work with everything
const user = Wallet.createRandom();

// create a manager & sdk to work with everything
export const manager = new DremManager(chainId, user);
