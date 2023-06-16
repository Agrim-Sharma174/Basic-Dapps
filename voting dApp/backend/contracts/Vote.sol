//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Vote {
    struct Candidate{
        string name;
        uint voteCount;
    }
    constructor() {
        addCandidate("Agrim");
        addCandidate("Sharma");
    }
    addCandidate(string memory _name) public {
        uint256 _id = candidatesCount ;
        candidates[_id] = Candidate(_candidateName, 0);
        candidatesCount++ ;
        return _id ;
    }
}