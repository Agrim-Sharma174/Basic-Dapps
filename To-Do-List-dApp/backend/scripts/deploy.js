const {ethers} = require("hardhat");

async function main() {
  const toDoContract = await ethers.getContractFactory("todo");

  const deployedToDoContract = await toDoContract.deploy();

  await deployedToDoContract.deployed();

  console.log( 
    "To-Do Contract Address:", deployedToDoContract.address
   );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
