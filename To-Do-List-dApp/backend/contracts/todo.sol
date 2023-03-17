// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract todo {
    
    string[] public todo;

    function setTodo(string memory _todo) public {
        todo.push(_todo);
    }

    function getTodo() public view returns(string[] memory) {
        return todo;
    }

    function getTodoLength() public view returns(uint256 ) {
        uint256 lengthOFTodo = todo.length();
        return lengthOFTodo;
    }

    function deleteTodo(uint256 _index) public {
        require(_index < todo.length(), "The index doesn't exist");
        todo[_index] = todo[todo.length() - 1];
        todo.pop();
    }

}