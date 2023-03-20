const {ethers} = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  // A contract factory in ethers is an abstraction used to deploy new smart contracts,
  // so ExpenseTrackerContract here is a factory of instances of our Expense_Tracker contract.
  const ExpenseTrackerContract = await ethers.getContractFactory('Expense_Tracker');

  //deployment of contract
  const deployedExpenseTrackerContract = await ExpenseTrackerContract.deploy();

  await deployedExpenseTrackerContract.deployed(); //waiting for contract to deploy

  //printing the address of the deployed contract
  console.log("Contract deployed to address:", deployedExpenseTrackerContract.address);

}

// invokation of the main function and checking for errors in the code below
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})