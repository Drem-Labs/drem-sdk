import * as dotenv from 'dotenv';
import { DremManager } from '../../src/manager';

// import hardhat
export const { ethers } = require('hardhat');

// load the dotenv
dotenv.config();

// set the chain id
export const chainId = parseInt(process.env.CHAIN_ID);

// create some random user to work with everything
export const user = ethers.Wallet.createRandom();
export const signer = user.connect(ethers.provider);

// create a manager & sdk to work with everything
export const manager = new DremManager(chainId, signer);

// send matic to the user
export async function giveMatic(userAddress: string, amount: number) {
    const [sender] = await ethers.getSigners();
    await sender.sendTransaction({
        to: userAddress,
        value: ethers.utils.parseUnits(amount.toString(), 18)
    });
}
