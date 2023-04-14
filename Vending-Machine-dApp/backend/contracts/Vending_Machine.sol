// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Vending_Machine {
    //two state variables
    address public owner;
    mapping(address => uint) public donutBalance;

    // setting state in constructor
    constructor() {
        owner = msg.sender;
        donutBalance[address(this)] = 100;
    }

    function getDonutBalance() view public returns (uint) {
        return donutBalance[address(this)];
    }

    function getOwnedBalance(address user) view external returns(uint) {
        return donutBalance[user];
    }

    //This function will allow the owner to add more donuts to the machine
    function reStock(uint _amount) public {
        require(msg.sender == owner, "Only owner can can restock");
        donutBalance[address(this)] += _amount;
    }

    function purchase(uint _amount) public payable {
        require(msg.value >= _amount* 0.001 ether,"You don't have enough ether to purchase this amount of donuts");
        require(donutBalance[address(this)] >= _amount, "Not enough donuts in stock");
        donutBalance[address(this)] -= _amount;
        donutBalance[msg.sender] += _amount;
    }

}
