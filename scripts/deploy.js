// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require('hardhat');

async function main() {
  const MyContract = await ethers.getContractFactory('MyContract');
  const myContract = await upgrades.deployProxy(MyContract, [1], { initializer: 'initialize' });
  await myContract.deployed();

  console.log('MyContract deployed at:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});