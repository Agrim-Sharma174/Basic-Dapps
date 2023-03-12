// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract todo {
    
    string todo[];

    function setTodo(string memory _todo) public {
        todo.push(_todo);
    }

}