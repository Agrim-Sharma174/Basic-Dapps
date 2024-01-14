const { ethers } = require("hardhat")

const main = async () => {
  const jobBoardFactory = await ethers.getContractFactory("JobBoard");

  const deployedJobBoardContract = await jobBoardFactory.deploy();

  await deployedJobBoardContract.deployed();

  console.log("Contract deployed to:", deployedJobBoardContract.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})