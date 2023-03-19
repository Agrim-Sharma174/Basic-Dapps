// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Expense_Tracker {

    // First make struct for Transaction Having two properties text and amount
    struct Transaction {
        string text;
        int amount;
    }

    Transaction[] public transactions; // Array of Transaction

    function addTransaction(string memory _text, int _amount) public {
        transactions.push( Transaction(_text, _amount) );
    }

    function getTransaction() view public returns (Transaction[] memory) {
        return transactions;
    }

    function deleteTransaction(uint _index) public {
        transactions[_index] = transactions[transactions.length - 1];
        transactions.pop();
    }

    function getTransactionsLength() view public returns(uint) {
        return transactions.length;
    }

}