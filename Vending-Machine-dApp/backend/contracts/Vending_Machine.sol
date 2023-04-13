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

}