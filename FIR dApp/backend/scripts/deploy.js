const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const officerAddress = "0x0000000000000000000000000000000000000000"; // Replace with your desired officer address
  const FIRComplaintsContract = await ethers.getContractFactory("FIRComplaints");
  const deployedFIRComplaintsContract = await FIRComplaintsContract.deploy(officerAddress);
  await deployedFIRComplaintsContract.deployed();
  console.log(
    "FIR complaint Contract Address:",
    deployedFIRComplaintsContract.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
