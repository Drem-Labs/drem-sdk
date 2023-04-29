import { HardhatRuntimeEnvironment } from "hardhat/types";
import * as dotenv from 'dotenv';

// load the dotenv
dotenv.config();

let hre: HardhatRuntimeEnvironment;

function forkChain(hre: HardhatRuntimeEnvironment) {
  // get the chain id
  let chainId: number = parseInt(process.env.CHAIN_ID);

  // set the url as a string
  let url: string = '';
  if (chainId == 80001) {
    url = process.env.MUMBAI_RPC;
  }
  else if (chainId == 137) {
    url = process.env.POLYGON_RPC;
  }

  // Fork Mumbai at block number 1
  hre.network.provider.request({
    method: 'hardhat_reset',
    params: [{
      forking: {
        url: url
      }
    }]
  });
}


// fork hardhat
beforeAll(function () {
    const hre = require('hardhat');
    // forkChain(hre);
});
