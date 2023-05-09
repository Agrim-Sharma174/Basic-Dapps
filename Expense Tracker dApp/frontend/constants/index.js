export const EXPENSE_TRACKER_CONTRACT_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_text",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "_amount",
          "type": "int256"
        }
      ],
      "name": "addTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "deleteTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransaction",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "amount",
              "type": "int256"
            }
          ],
          "internalType": "struct Expense_Tracker.Transaction[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransactionsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transactions",
      "outputs": [
        {
          "internalType": "string",
          "name": "text",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "amount",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
export const EXPENSE_TRACKER_CONTRACT_ADDRESS = "0xD17df90D7c4413Ae7B0CA58Ab3F66C9fc6405D8E"