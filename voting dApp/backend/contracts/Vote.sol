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
        function vote(uint _id) public {
        require(!voters[msg.sender], "You have already voted once!");
        require(_id >= 0 && _id <= candidatesCount);
        voters[msg.sender] = true;
        candidates[_id].votes_count++; 
        voter = msg.sender;
        addressesArray.push(voter); 
    }
}