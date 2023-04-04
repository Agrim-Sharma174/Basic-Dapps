const { ethers } = require("hardhat")

const main = async () => {

  const blogContract = await ethers.getContractFactory("Blog");

  const deployedBlogContract = await blogContract.deploy();

  await deployedBlogContract.deployed();

  console.log("Blog deployed to:", deployedBlogContract.address);
}

main() // This is the line that executes the script
  .then(() => process.exit(0)) // This is the line that exits the script
.catch((error) => { // This is the line that catches any errors
console.error(error); // This is the line that logs the error
process.exit(1); // This is the line that exits the script
});