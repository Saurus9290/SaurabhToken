
const hre = require("hardhat");

async function main() {
  const SaurabhToken = await hre.ethers.getContractFactory("SaurabhToken");
  const saurabhToken = await SaurabhToken.deploy();

  await saurabhToken.deployed();

  console.log(`SaurabhToken address: ${saurabhToken.address}`);

  const mint = await saurabhToken.mint("0x4Fb6728f0bBb0a3528b53a88a638171c1c1F615D", "1000000000000000000000")
  await mint.wait();
  console.log("Tokens are minted successfully minted");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
