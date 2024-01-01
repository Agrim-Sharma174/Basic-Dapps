// SPDX-License-Provider:MIT
pragma solidity ^0.8.19;

contract Game {
    constructor() {}
    
    // Randomly pick a number out of 0 to 2^256 - 1
    function pickACard() private view returns (uint256) {
        uint256 pickedCard = uint256(
            keccak256(
                abi.encodePacked(blockhash(block.number), block.timestamp)
            )
        );
        return pickedCard;
    }

}