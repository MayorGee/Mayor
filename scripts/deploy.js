const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const weiAmount = await ethers.provider.getBalance(deployer.address);

    const formattedAmount = ethers.formatEther(weiAmount);
    console.log('Account balance:', formattedAmount);

    const Token = await ethers.getContractFactory("Mayor");
    const token = await Token.deploy();

    console.log("Token Address: ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});