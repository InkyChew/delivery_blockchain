var contractDeliveryABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_oTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dtime",
				"type": "string"
			}
		],
		"name": "createOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "_oTime",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_cTime",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_dtime",
				"type": "string"
			}
		],
		"name": "NewOrder",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_cust",
				"type": "address"
			}
		],
		"name": "getOrdersByCust",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
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
		"name": "orders",
		"outputs": [
			{
				"internalType": "string",
				"name": "orderTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cookTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deliverTime",
				"type": "string"
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
		"name": "orderToCustomer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]