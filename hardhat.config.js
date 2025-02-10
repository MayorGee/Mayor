require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { 
    PRIVATE_KEY, 
    ALCHEMY_SEPOLIA_URL
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
