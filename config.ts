import { defineConfig } from '@dethcrypto/eth-sdk'


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
      VaultDeployer: "0x33334081Bb86EDDDa17ac9c90E347Dd0ec2EDed9",
      Vault: "0xfbD21fC5300fEa410E6786eb0C5A663009230097",
      steps: {
        TransferStep: "0x42E77022147BE8e35A4a64b03091C26C77ADD346"
      }
    },
  },
  outputPath: "./src/base"
})
