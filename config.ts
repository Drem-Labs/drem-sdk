import * as dotenv from 'dotenv';
import { defineConfig } from '@dethcrypto/eth-sdk'

// load the dotenv
dotenv.config();

// to make things more efficient, eth-sdk uses the abis in the abis/ folder
  // since many of these are proxies, make sure the scanner is correct OR make the abis yourself
    // note: scanners CAN follow proxies. They just require a bit of manual button clicking to do so
export default defineConfig({
  contracts: {
    polygonMumbai: {
      StepTreeLib: "0x475C7FACa98F18588C0281185bC35389dA90B5FA",
      DremHub: "0x27f04bAE5C17f8556D58c3c6B32F030643C47F5a",
      FeeController: "0x9f814Ff3fE04099cDD04Ad93C0307fE09F8194f9",
      PriceAggreagtor: "0xd804c3DF1AB160fc7cb406F9902ea3be43107e42",
      AssetRegistry: "0x6dC1CD636fd04C437F48d61d92C4CC2AccBAC1cB",
      VaultDeployer: "0x0Cbb6850d43a9a40b2265851E63488cE7D29bbf8",
      DremCollectModule: "0x8D27D2791f687847399843F1BAE08D9810F96603",
      Vault: "0xb625c3af5CE0a4c9a2ee6188d6e29146906B2e0D",
      steps: {
        TransferStep: "0x6B6ec4B5f1d9230BabaA7120fc2775B4cfD26321",
        UniswapV3SwapStep: "0x6a70E935Ae5Cec477413a6B8bc1b508577c059F9"
      },
      testing: {
        MockERC20: "0x3e02538fDF82daD570A5dB5deDC4CC165061798E"  // should be treated as WETH, as it is eth/usd paired
      },
      lens: {
        LensHub: "0x7582177F9E536aB0b6c721e11f383C326F2Ad1D5",
        ProfileCreation: "0x4fe8deB1cf6068060dE50aA584C3adf00fbDB87f"
      }
    },
  },
  rpc: {
    polygonMumbai: process.env.MUMBAI_RPC
  },
  outputPath: "./src/base"
})
