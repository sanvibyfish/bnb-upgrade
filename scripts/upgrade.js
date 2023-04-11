const { ethers, upgrades } = require('hardhat');

async function main() {
  const proxyAddress = '0xF6Dd69af5bAa032227BC56cC0c0fc782aD398F67'; 
  const MyContract2 = await ethers.getContractFactory('MyContract2');
  await upgrades.upgradeProxy(proxyAddress, MyContract2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });