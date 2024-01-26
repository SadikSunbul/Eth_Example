//require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const PRIVATE_KEY = process.env.ETH_PK1;


module.exports = {
    solidity: "0.8.20",
    defaultNetwork: 'eth',
    networks: {
      mainnet: {
        url: `https://api.avax.network/ext/bc/C/rpc`,
          accounts: [`${PRIVATE_KEY}`]
      },
      eth: {
        url: `${process.env.ETH_RPC}`,
          accounts: [`${PRIVATE_KEY}`]
      }
    }
};