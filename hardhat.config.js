require('dotenv').config();
import { HardhatUserConfig } from 'hardhat/config';
import 'hardhat';

// set the url as a string
let url: string = '';
if (chainId == 80001) {
  url = process.env.MUMBAI_RPC;
}
else if (chainId == 137) {
  url = process.env.POLYGON_RPC;
}

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: url,
      },
    },
  },
}

export default config
