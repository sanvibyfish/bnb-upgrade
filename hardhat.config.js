require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
const { privateKey } = require('./secrets.json');

module.exports = {
  solidity: '0.8.9',
  networks: {
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: [privateKey],
      gasPrice: 20000000000, // 20 Gwei
      chainId: 97,
    },
  },
  etherscan: {
    apiKey: "EGKR56D638MG2MATIQPDH3EA6RB526HS2T",
  },
};