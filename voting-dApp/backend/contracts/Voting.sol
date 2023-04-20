// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract voting {
    struct Candidate {
        string name;
        uint256 votes_count;
    }

    uint public candidatesCount;
    address public voter;
    address[] public addressesArray;

    // mapping id => Candidate name and votes count

    

}