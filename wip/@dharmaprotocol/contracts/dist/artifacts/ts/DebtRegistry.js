"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebtRegistry = {
    "contractName": "DebtRegistry",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "EDIT_CONTEXT",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getTermsContractParameters",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "addAuthorizedEditAgent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "name": "newBeneficiary",
                    "type": "address"
                }
            ],
            "name": "modifyBeneficiary",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuthorizedInsertAgents",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getTerms",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "debtor",
                    "type": "address"
                }
            ],
            "name": "getDebtorsDebts",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "INSERT_CONTEXT",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "revokeEditAgentAuthorization",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "doesEntryExist",
            "outputs": [
                {
                    "name": "exists",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "addAuthorizedInsertAgent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getBeneficiary",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "revokeInsertAgentAuthorization",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_version",
                    "type": "address"
                },
                {
                    "name": "_beneficiary",
                    "type": "address"
                },
                {
                    "name": "_debtor",
                    "type": "address"
                },
                {
                    "name": "_underwriter",
                    "type": "address"
                },
                {
                    "name": "_underwriterRiskRating",
                    "type": "uint256"
                },
                {
                    "name": "_termsContract",
                    "type": "address"
                },
                {
                    "name": "_termsContractParameters",
                    "type": "bytes32"
                },
                {
                    "name": "_salt",
                    "type": "uint256"
                }
            ],
            "name": "insert",
            "outputs": [
                {
                    "name": "_agreementId",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getIssuanceBlockTimestamp",
            "outputs": [
                {
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getTermsContract",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuthorizedEditAgents",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "underwriter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "underwriterRiskRating",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "termsContract",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "termsContractParameters",
                    "type": "bytes32"
                }
            ],
            "name": "LogInsertEntry",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "previousBeneficiary",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newBeneficiary",
                    "type": "address"
                }
            ],
            "name": "LogModifyEntryBeneficiary",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "agent",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "callingContext",
                    "type": "string"
                }
            ],
            "name": "Authorized",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "agent",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "callingContext",
                    "type": "string"
                }
            ],
            "name": "AuthorizationRevoked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Pause",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Unpause",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        }
    ],
    "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506123298061006d6000396000f300606060405260043610610133576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632be84c6614610138578063314a522e146101c65780633f4ba83a1461020957806342cc6b041461021e5780635969549e146102575780635c975abb1461029d57806364a666f2146102ca5780636be39bda146103345780638456cb59146103aa5780638ad1d846146103bf5780638da5cb5b1461044d5780638dadc81d146104a25780638eaa6ac014610530578063932993951461064d5780639758af1e14610686578063ad655998146106c5578063ba20dda4146106fe578063c205e64c14610765578063cf9df5eb1461079e578063d69dbf631461088e578063f2fde38b146108c9578063f6f494c914610902578063f94df67814610969575b600080fd5b341561014357600080fd5b61014b6109d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018b578082015181840152602081019050610170565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101d157600080fd5b6101eb600480803560001916906020019091905050610a0c565b60405180826000191660001916815260200191505060405180910390f35b341561021457600080fd5b61021c610a4a565b005b341561022957600080fd5b610255600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b08565b005b341561026257600080fd5b61029b60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bb1565b005b34156102a857600080fd5b6102b0610d44565b604051808215151515815260200191505060405180910390f35b34156102d557600080fd5b6102dd610d57565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610320578082015181840152602081019050610305565b505050509050019250505060405180910390f35b341561033f57600080fd5b610359600480803560001916906020019091905050610d6e565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b34156103b557600080fd5b6103bd610dee565b005b34156103ca57600080fd5b6103f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eae565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561043957808201518184015260208101905061041e565b505050509050019250505060405180910390f35b341561045857600080fd5b610460610f4f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104ad57600080fd5b6104b5610f74565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f55780820151818401526020810190506104da565b50505050905090810190601f1680156105225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053b57600080fd5b610555600480803560001916906020019091905050610fad565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561065857600080fd5b610684600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061112a565b005b341561069157600080fd5b6106ab6004808035600019169060200190919050506111d3565b604051808215151515815260200191505060405180910390f35b34156106d057600080fd5b6106fc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061124a565b005b341561070957600080fd5b6107236004808035600019169060200190919050506112f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561077057600080fd5b61079c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611351565b005b34156107a957600080fd5b610870600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506113fa565b60405180826000191660001916815260200191505060405180910390f35b341561089957600080fd5b6108b3600480803560001916906020019091905050611835565b6040518082815260200191505060405180910390f35b34156108d457600080fd5b610900600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611873565b005b341561090d57600080fd5b6109276004808035600019169060200190919050506119c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561097457600080fd5b61097c611a26565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109bf5780820151818401526020810190506109a4565b505050509050019250505060405180910390f35b6040805190810160405280601281526020017f646562742d72656769737472792d65646974000000000000000000000000000081525081565b600081610a18816111d3565b1515610a2357600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aa557600080fd5b600060149054906101000a900460ff161515610ac057600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b6357600080fd5b610bae816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611a3d9092919063ffffffff16565b50565b6000610bc7336006611c1990919063ffffffff16565b1515610bd257600080fd5b600060149054906101000a900460ff16151515610bee57600080fd5b82610bf8816111d3565b1515610c0357600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c4057600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610d5f61216e565b610d696003611c72565b905090565b60008082610d7b816111d3565b1515610d8657600080fd5b60016000856000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008660001916600019168152602001908152602001600020600501549250925050915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e4957600080fd5b600060149054906101000a900460ff16151515610e6557600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610eb6612182565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f4357602002820191906000526020600020905b81546000191681526020019060010190808311610f2b575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280601481526020017f646562742d72656769737472792d696e7365727400000000000000000000000081525081565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118557600080fd5b6111d0816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611d0a9092919063ffffffff16565b50565b60008073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112a557600080fd5b6112f0816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611a3d9092919063ffffffff16565b50565b6000816112ff816111d3565b151561130a57600080fd5b60016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113ac57600080fd5b6113f7816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611d0a9092919063ffffffff16565b50565b6000611404612196565b600061141a336003611c1990919063ffffffff16565b151561142557600080fd5b600060149054906101000a900460ff1615151561144157600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561147e57600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018760001916815260200142815250925061151b838b87612000565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561159657600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281611746919061222f565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b600081611841816111d3565b151561184c57600080fd5b60016000846000191660001916815260200190815260200160002060060154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118ce57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000816119d4816111d3565b15156119df57600080fd5b60016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b611a2e61216e565b611a386006611c72565b905090565b611a478383612159565b1515611a5257600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281611ac2919061225b565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015611bda578082015181840152602081019050611bbf565b50505050905090810190601f168015611c075780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c7a61216e565b81600201805480602002602001604051908101604052809291908181526020018280548015611cfe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611cb4575b50505050509050919050565b6000806000611d198686611c19565b1515611d2457600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611d8657fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e1757fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611efc57fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f449190612287565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fbe578082015181840152602081019050611fa3565b50505050905090810190601f168015611feb5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b60006121658383611c19565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b8154818355818115116122565781836000526020600020918201910161225591906122b3565b5b505050565b8154818355818115116122825781836000526020600020918201910161228191906122d8565b5b505050565b8154818355818115116122ae578183600052602060002091820191016122ad91906122d8565b5b505050565b6122d591905b808211156122d15760008160009055506001016122b9565b5090565b90565b6122fa91905b808211156122f65760008160009055506001016122de565b5090565b905600a165627a7a7230582074aea0a4adc7528fede4b5202cc26596cee63ca05fd30fdc6038dc70d1c23e8e0029",
    "deployedBytecode": "0x606060405260043610610133576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632be84c6614610138578063314a522e146101c65780633f4ba83a1461020957806342cc6b041461021e5780635969549e146102575780635c975abb1461029d57806364a666f2146102ca5780636be39bda146103345780638456cb59146103aa5780638ad1d846146103bf5780638da5cb5b1461044d5780638dadc81d146104a25780638eaa6ac014610530578063932993951461064d5780639758af1e14610686578063ad655998146106c5578063ba20dda4146106fe578063c205e64c14610765578063cf9df5eb1461079e578063d69dbf631461088e578063f2fde38b146108c9578063f6f494c914610902578063f94df67814610969575b600080fd5b341561014357600080fd5b61014b6109d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018b578082015181840152602081019050610170565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101d157600080fd5b6101eb600480803560001916906020019091905050610a0c565b60405180826000191660001916815260200191505060405180910390f35b341561021457600080fd5b61021c610a4a565b005b341561022957600080fd5b610255600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b08565b005b341561026257600080fd5b61029b60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bb1565b005b34156102a857600080fd5b6102b0610d44565b604051808215151515815260200191505060405180910390f35b34156102d557600080fd5b6102dd610d57565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610320578082015181840152602081019050610305565b505050509050019250505060405180910390f35b341561033f57600080fd5b610359600480803560001916906020019091905050610d6e565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b34156103b557600080fd5b6103bd610dee565b005b34156103ca57600080fd5b6103f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eae565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561043957808201518184015260208101905061041e565b505050509050019250505060405180910390f35b341561045857600080fd5b610460610f4f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104ad57600080fd5b6104b5610f74565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f55780820151818401526020810190506104da565b50505050905090810190601f1680156105225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053b57600080fd5b610555600480803560001916906020019091905050610fad565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561065857600080fd5b610684600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061112a565b005b341561069157600080fd5b6106ab6004808035600019169060200190919050506111d3565b604051808215151515815260200191505060405180910390f35b34156106d057600080fd5b6106fc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061124a565b005b341561070957600080fd5b6107236004808035600019169060200190919050506112f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561077057600080fd5b61079c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611351565b005b34156107a957600080fd5b610870600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506113fa565b60405180826000191660001916815260200191505060405180910390f35b341561089957600080fd5b6108b3600480803560001916906020019091905050611835565b6040518082815260200191505060405180910390f35b34156108d457600080fd5b610900600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611873565b005b341561090d57600080fd5b6109276004808035600019169060200190919050506119c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561097457600080fd5b61097c611a26565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109bf5780820151818401526020810190506109a4565b505050509050019250505060405180910390f35b6040805190810160405280601281526020017f646562742d72656769737472792d65646974000000000000000000000000000081525081565b600081610a18816111d3565b1515610a2357600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aa557600080fd5b600060149054906101000a900460ff161515610ac057600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b6357600080fd5b610bae816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611a3d9092919063ffffffff16565b50565b6000610bc7336006611c1990919063ffffffff16565b1515610bd257600080fd5b600060149054906101000a900460ff16151515610bee57600080fd5b82610bf8816111d3565b1515610c0357600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c4057600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610d5f61216e565b610d696003611c72565b905090565b60008082610d7b816111d3565b1515610d8657600080fd5b60016000856000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008660001916600019168152602001908152602001600020600501549250925050915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e4957600080fd5b600060149054906101000a900460ff16151515610e6557600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610eb6612182565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f4357602002820191906000526020600020905b81546000191681526020019060010190808311610f2b575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280601481526020017f646562742d72656769737472792d696e7365727400000000000000000000000081525081565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118557600080fd5b6111d0816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611d0a9092919063ffffffff16565b50565b60008073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112a557600080fd5b6112f0816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611a3d9092919063ffffffff16565b50565b6000816112ff816111d3565b151561130a57600080fd5b60016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113ac57600080fd5b6113f7816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611d0a9092919063ffffffff16565b50565b6000611404612196565b600061141a336003611c1990919063ffffffff16565b151561142557600080fd5b600060149054906101000a900460ff1615151561144157600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561147e57600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018760001916815260200142815250925061151b838b87612000565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561159657600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281611746919061222f565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b600081611841816111d3565b151561184c57600080fd5b60016000846000191660001916815260200190815260200160002060060154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118ce57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000816119d4816111d3565b15156119df57600080fd5b60016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b611a2e61216e565b611a386006611c72565b905090565b611a478383612159565b1515611a5257600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281611ac2919061225b565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015611bda578082015181840152602081019050611bbf565b50505050905090810190601f168015611c075780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c7a61216e565b81600201805480602002602001604051908101604052809291908181526020018280548015611cfe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611cb4575b50505050509050919050565b6000806000611d198686611c19565b1515611d2457600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611d8657fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e1757fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611efc57fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f449190612287565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fbe578082015181840152602081019050611fa3565b50505050905090810190601f168015611feb5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b60006121658383611c19565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b8154818355818115116122565781836000526020600020918201910161225591906122b3565b5b505050565b8154818355818115116122825781836000526020600020918201910161228191906122d8565b5b505050565b8154818355818115116122ae578183600052602060002091820191016122ad91906122d8565b5b505050565b6122d591905b808211156122d15760008160009055506001016122b9565b5090565b90565b6122fa91905b808211156122f65760008160009055506001016122de565b5090565b905600a165627a7a7230582074aea0a4adc7528fede4b5202cc26596cee63ca05fd30fdc6038dc70d1c23e8e0029",
    "sourceMap": "1124:8996:3:-;;;268:5:30;247:26;;;;;;;;;;;;;;;;;;;;509:10:32;501:5;;:18;;;;;;;;;;;;;;;;;;1124:8996:3;;;;;;",
    "deployedSourceMap": "1124:8996:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1975:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7833:221:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:30;;;;;;;;;;;;;;5634:152:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;4712:495;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8885:164:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;8179:284:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:30;;;;;;;;;;;;;;9457:145:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;238:20:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1907:62:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6659:533:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6239:168;;;;;;;;;;;;;;;;;;;;;;;;;;;;3027:178;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5336:158;;;;;;;;;;;;;;;;;;;;;;;;;;;;7265:196;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5920:174;;;;;;;;;;;;;;;;;;;;;;;;;;;;3371:1170;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8565:226;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;7545:201:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9154:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1975:58:3;;;;;;;;;;;;;;;;;;;;:::o;7833:221::-;7972:7;7942:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;8002:8;:21;8011:11;8002:21;;;;;;;;;;;;;;;;;:45;;;7995:52;;7833:221;;;;:::o;833:87:30:-;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:30;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;5634:152:3:-;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5728:51:3;5759:5;5766:12;;;;;;;;;;;;;;;;;;5728:20;:30;;:51;;;;;:::i;:::-;5634:152;:::o;4712:495::-;4944:27;2632:45;2666:10;2632:20;:33;;:45;;;;:::i;:::-;2624:54;;;;;;;;416:6:30;;;;;;;;;;;415:7;407:16;;;;;;;;4874:11:3;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;4914:14;2908:1;2885:25;;:11;:25;;;;2877:34;;;;;;;;4974:8;:21;4983:11;4974:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;4944:63;;5054:14;5018:8;:21;5027:11;5018:21;;;;;;;;;;;;;;;;;:33;;;:50;;;;;;;;;;;;;;;;;;5176:14;5079:121;;5143:19;5079:121;;5118:11;5079:121;;;;;;;;;;;;;2804:1;429::30;4712:495:3;;;:::o;247:26:30:-;;;;;;;;;;;;;:::o;8885:164:3:-;8966:9;;:::i;:::-;8998:44;:22;:42;:44::i;:::-;8991:51;;8885:164;:::o;8179:284::-;8299:7;8308;8270:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;8352:8;:21;8361:11;8352:21;;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;8401:8;:21;8410:11;8401:21;;;;;;;;;;;;;;;;;:45;;;8331:125;;;;8179:284;;;;:::o;666:85:30:-;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:30;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;9457:145:3:-;9542:9;;:::i;:::-;9574:13;:21;9588:6;9574:21;;;;;;;;;;;;;;;9567:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9457:145;;;:::o;238:20:32:-;;;;;;;;;;;;;:::o;1907:62:3:-;;;;;;;;;;;;;;;;;;;;:::o;6659:533::-;6737:7;6746;6755;6764:4;6770:7;6779;6788:4;6829:8;:21;6838:11;6829:21;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;6872:8;:21;6881:11;6872:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;6919:8;:21;6928:11;6919:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;6966:8;:21;6975:11;6966:21;;;;;;;;;;;;;;;;;:43;;;7023:8;:21;7032:11;7023:21;;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;7072:8;:21;7081:11;7072:21;;;;;;;;;;;;;;;;;:45;;;7131:8;:21;7140:11;7131:21;;;;;;;;;;;;;;;;;:44;;;6808:377;;;;;;;;;;;;;;6659:533;;;;;;;;;:::o;6239:168::-;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;6339:61:3;6380:5;6387:12;;;;;;;;;;;;;;;;;;6339:20;:40;;:61;;;;;:::i;:::-;6239:168;:::o;3027:178::-;3117:11;3196:1;3151:47;;:8;:21;3160:11;3151:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;:47;;;;3144:54;;3027:178;;;:::o;5336:158::-;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5432:55:3;5465:5;5472:14;;;;;;;;;;;;;;;;;;5432:22;:32;;:55;;;;;:::i;:::-;5336:158;:::o;7265:196::-;7391:7;7362:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;7421:8;:21;7430:11;7421:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;7414:40;;7265:196;;;;:::o;5920:174::-;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;6022:65:3;6065:5;6072:14;;;;;;;;;;;;;;;;;;6022:22;:42;;:65;;;;;:::i;:::-;5920:174;:::o;3371:1170::-;3761:20;3797:18;;:::i;:::-;4049:19;2510:47;2546:10;2510:22;:35;;:47;;;;:::i;:::-;2502:56;;;;;;;;416:6:30;;;;;;;;;;;415:7;407:16;;;;;;;;3730:12:3;2908:1;2885:25;;:11;:25;;;;2877:34;;;;;;;;3818:220;;;;;;;;;3837:8;3818:220;;;;;;3859:12;3818:220;;;;;;3885:12;3818:220;;;;;;3911:22;3818:220;;;;3947:14;3818:220;;;;;;3975:24;3818:220;;;;;;;4013:15;3818:220;;;3797:241;;4071:38;4087:5;4094:7;4103:5;4071:15;:38::i;:::-;4049:60;;4173:1;4128:47;;:8;:21;4137:11;4128:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;:47;;;4120:56;;;;;;;;4211:5;4187:8;:21;4196:11;4187:21;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4226:13;:22;4240:7;4226:22;;;;;;;;;;;;;;;:40;;;;;;;;;;;:::i;:::-;;;;;;;;;;4254:11;4226:40;;;;;;;;;;;;4361:5;:17;;;4277:228;;4330:5;:17;;;4277:228;;4305:11;4277:228;;;;4392:5;:27;;;4433:5;:19;;;4466:5;:29;;;4277:228;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4523:11;4516:18;;429:1:30;3371:1170:3;;;;;;;;;;;;:::o;8565:226::-;8703:14;8673:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;8740:8;:21;8749:11;8740:21;;;;;;;;;;;;;;;;;:44;;;8733:51;;8565:226;;;;:::o;832:169:32:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;7545:201:3:-;7674:7;7644:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;7704:8;:21;7713:11;7704:21;;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;7697:42;;7545:201;;;;:::o;9154:160::-;9233:9;;:::i;:::-;9265:42;:20;:40;:42::i;:::-;9258:49;;9154:160;:::o;1732:383:13:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1990:5;1963:33;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383:13;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;3646:162::-;3748:9;;:::i;:::-;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;2121:1168::-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168:13;;;;;;:::o;9728:390:3:-;9842:7;9895:6;:14;;;9923:7;9944:6;:18;;;9976:6;:28;;;10018:6;:20;;;10052:6;:30;;;10096:5;9872:239;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9865:246;;9728:390;;;;;:::o;3467:173:13:-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;1124:8996:3:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\n\n\n/**\n * The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\n * Dharma protocol.  It authorizes a limited number of agents to\n * perform mutations on it -- those agents can be changed at any\n * time by the contract's owner.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtRegistry is Pausable, PermissionEvents {\n    using SafeMath for uint;\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    struct Entry {\n        address version;\n        address beneficiary;\n        address underwriter;\n        uint underwriterRiskRating;\n        address termsContract;\n        bytes32 termsContractParameters;\n        uint issuanceBlockTimestamp;\n    }\n\n    // Primary registry mapping agreement IDs to their corresponding entries\n    mapping (bytes32 => Entry) internal registry;\n\n    // Maps debtor addresses to a list of their debts' agreement IDs\n    mapping (address => bytes32[]) internal debtorToDebts;\n\n    PermissionsLib.Permissions internal entryInsertPermissions;\n    PermissionsLib.Permissions internal entryEditPermissions;\n\n    string public constant INSERT_CONTEXT = \"debt-registry-insert\";\n    string public constant EDIT_CONTEXT = \"debt-registry-edit\";\n\n    event LogInsertEntry(\n        bytes32 indexed agreementId,\n        address indexed beneficiary,\n        address indexed underwriter,\n        uint underwriterRiskRating,\n        address termsContract,\n        bytes32 termsContractParameters\n    );\n\n    event LogModifyEntryBeneficiary(\n        bytes32 indexed agreementId,\n        address indexed previousBeneficiary,\n        address indexed newBeneficiary\n    );\n\n    modifier onlyAuthorizedToInsert() {\n        require(entryInsertPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyAuthorizedToEdit() {\n        require(entryEditPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyExtantEntry(bytes32 agreementId) {\n        require(doesEntryExist(agreementId));\n        _;\n    }\n\n    modifier nonNullBeneficiary(address beneficiary) {\n        require(beneficiary != address(0));\n        _;\n    }\n\n    /* Ensures an entry with the specified agreement ID exists within the debt registry. */\n    function doesEntryExist(bytes32 agreementId)\n        public\n        view\n        returns (bool exists)\n    {\n        return registry[agreementId].beneficiary != address(0);\n    }\n\n    /**\n     * Inserts a new entry into the registry, if the entry is valid and sender is\n     * authorized to make 'insert' mutations to the registry.\n     */\n    function insert(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        onlyAuthorizedToInsert\n        whenNotPaused\n        nonNullBeneficiary(_beneficiary)\n        returns (bytes32 _agreementId)\n    {\n        Entry memory entry = Entry(\n            _version,\n            _beneficiary,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            block.timestamp\n        );\n\n        bytes32 agreementId = _getAgreementId(entry, _debtor, _salt);\n\n        require(registry[agreementId].beneficiary == address(0));\n\n        registry[agreementId] = entry;\n        debtorToDebts[_debtor].push(agreementId);\n\n        LogInsertEntry(\n            agreementId,\n            entry.beneficiary,\n            entry.underwriter,\n            entry.underwriterRiskRating,\n            entry.termsContract,\n            entry.termsContractParameters\n        );\n\n        return agreementId;\n    }\n\n    /**\n     * Modifies the beneficiary of a debt issuance, if the sender\n     * is authorized to make 'modifyBeneficiary' mutations to\n     * the registry.\n     */\n    function modifyBeneficiary(bytes32 agreementId, address newBeneficiary)\n        public\n        onlyAuthorizedToEdit\n        whenNotPaused\n        onlyExtantEntry(agreementId)\n        nonNullBeneficiary(newBeneficiary)\n    {\n        address previousBeneficiary = registry[agreementId].beneficiary;\n\n        registry[agreementId].beneficiary = newBeneficiary;\n\n        LogModifyEntryBeneficiary(\n            agreementId,\n            previousBeneficiary,\n            newBeneficiary\n        );\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function addAuthorizedInsertAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.authorize(agent, INSERT_CONTEXT);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function addAuthorizedEditAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.authorize(agent, EDIT_CONTEXT);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function revokeInsertAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.revokeAuthorization(agent, INSERT_CONTEXT);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function revokeEditAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.revokeAuthorization(agent, EDIT_CONTEXT);\n    }\n\n    /**\n     * Returns the parameters of a debt issuance in the registry.\n     *\n     * TODO(kayvon): protect this function with our `onlyExtantEntry` modifier once the restriction\n     * on the size of the call stack has been addressed.\n     */\n    function get(bytes32 agreementId)\n        public\n        view\n        returns(address, address, address, uint, address, bytes32, uint)\n    {\n        return (\n            registry[agreementId].version,\n            registry[agreementId].beneficiary,\n            registry[agreementId].underwriter,\n            registry[agreementId].underwriterRiskRating,\n            registry[agreementId].termsContract,\n            registry[agreementId].termsContractParameters,\n            registry[agreementId].issuanceBlockTimestamp\n        );\n    }\n\n    /**\n     * Returns the beneficiary of a given issuance\n     */\n    function getBeneficiary(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns(address)\n    {\n        return registry[agreementId].beneficiary;\n    }\n\n    /**\n     * Returns the terms contract address of a given issuance\n     */\n    function getTermsContract(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns (address)\n    {\n        return registry[agreementId].termsContract;\n    }\n\n    /**\n     * Returns the terms contract parameters of a given issuance\n     */\n    function getTermsContractParameters(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns (bytes32)\n    {\n        return registry[agreementId].termsContractParameters;\n    }\n\n    /**\n     * Returns a tuple of the terms contract and its associated parameters\n     * for a given issuance\n     */\n    function getTerms(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns(address, bytes32)\n    {\n        return (\n            registry[agreementId].termsContract,\n            registry[agreementId].termsContractParameters\n        );\n    }\n\n    /**\n     * Returns the timestamp of the block at which a debt agreement was issued.\n     */\n    function getIssuanceBlockTimestamp(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns (uint timestamp)\n    {\n        return registry[agreementId].issuanceBlockTimestamp;\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'insert' mutations\n     */\n    function getAuthorizedInsertAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryInsertPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'modifyBeneficiary' mutations\n     */\n    function getAuthorizedEditAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryEditPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of debt agreements a debtor is party to,\n     * with each debt agreement listed by agreement ID.\n     */\n    function getDebtorsDebts(address debtor)\n        public\n        view\n        returns(bytes32[])\n    {\n        return debtorToDebts[debtor];\n    }\n\n    /**\n     * Helper function for computing the hash of a given issuance,\n     * and, in turn, its agreementId\n     */\n    function _getAgreementId(Entry _entry, address _debtor, uint _salt)\n        internal\n        pure\n        returns(bytes32)\n    {\n        return keccak256(\n            _entry.version,\n            _debtor,\n            _entry.underwriter,\n            _entry.underwriterRiskRating,\n            _entry.termsContract,\n            _entry.termsContractParameters,\n            _salt\n        );\n    }\n}\n",
    "sourcePath": "/Users/kayvon/dharma/charta/contracts/DebtRegistry.sol",
    "ast": {
        "attributes": {
            "absolutePath": "/Users/kayvon/dharma/charta/contracts/DebtRegistry.sol",
            "exportedSymbols": {
                "DebtRegistry": [
                    2590
                ]
            }
        },
        "children": [
            {
                "attributes": {
                    "literals": [
                        "solidity",
                        "0.4",
                        ".18"
                    ]
                },
                "id": 2064,
                "name": "PragmaDirective",
                "src": "584:23:3"
            },
            {
                "attributes": {
                    "SourceUnit": 4722,
                    "absolutePath": "/Users/kayvon/dharma/charta/contracts/libraries/PermissionsLib.sol",
                    "file": "./libraries/PermissionsLib.sol",
                    "scope": 2591,
                    "symbolAliases": [
                        {
                            "foreign": 2065,
                            "local": null
                        },
                        {
                            "foreign": 2066,
                            "local": null
                        }
                    ],
                    "unitAlias": ""
                },
                "id": 2067,
                "name": "ImportDirective",
                "src": "609:82:3"
            },
            {
                "attributes": {
                    "SourceUnit": 8763,
                    "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
                    "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
                    "scope": 2591,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 2068,
                "name": "ImportDirective",
                "src": "692:55:3"
            },
            {
                "attributes": {
                    "SourceUnit": 8665,
                    "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                    "scope": 2591,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 2069,
                "name": "ImportDirective",
                "src": "748:60:3"
            },
            {
                "attributes": {
                    "contractDependencies": [
                        4517,
                        8664,
                        8818
                    ],
                    "contractKind": "contract",
                    "documentation": "The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\nDharma protocol.  It authorizes a limited number of agents to\nperform mutations on it -- those agents can be changed at any\ntime by the contract's owner.\n * Author: Nadav Hollander -- Github: nadavhollander",
                    "fullyImplemented": true,
                    "linearizedBaseContracts": [
                        2590,
                        4517,
                        8664,
                        8818
                    ],
                    "name": "DebtRegistry",
                    "scope": 2591
                },
                "children": [
                    {
                        "attributes": {
                            "arguments": [
                                null
                            ]
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "Pausable",
                                    "referencedDeclaration": 8664,
                                    "type": "contract Pausable"
                                },
                                "id": 2070,
                                "name": "UserDefinedTypeName",
                                "src": "1149:8:3"
                            }
                        ],
                        "id": 2071,
                        "name": "InheritanceSpecifier",
                        "src": "1149:8:3"
                    },
                    {
                        "attributes": {
                            "arguments": [
                                null
                            ]
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "PermissionEvents",
                                    "referencedDeclaration": 4517,
                                    "type": "contract PermissionEvents"
                                },
                                "id": 2072,
                                "name": "UserDefinedTypeName",
                                "src": "1159:16:3"
                            }
                        ],
                        "id": 2073,
                        "name": "InheritanceSpecifier",
                        "src": "1159:16:3"
                    },
                    {
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "SafeMath",
                                    "referencedDeclaration": 8762,
                                    "type": "library SafeMath"
                                },
                                "id": 2074,
                                "name": "UserDefinedTypeName",
                                "src": "1188:8:3"
                            },
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 2075,
                                "name": "ElementaryTypeName",
                                "src": "1201:4:3"
                            }
                        ],
                        "id": 2076,
                        "name": "UsingForDirective",
                        "src": "1182:24:3"
                    },
                    {
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "PermissionsLib",
                                    "referencedDeclaration": 4721,
                                    "type": "library PermissionsLib"
                                },
                                "id": 2077,
                                "name": "UserDefinedTypeName",
                                "src": "1217:14:3"
                            },
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "PermissionsLib.Permissions",
                                    "referencedDeclaration": 4541,
                                    "type": "struct PermissionsLib.Permissions storage pointer"
                                },
                                "id": 2078,
                                "name": "UserDefinedTypeName",
                                "src": "1236:26:3"
                            }
                        ],
                        "id": 2079,
                        "name": "UsingForDirective",
                        "src": "1211:52:3"
                    },
                    {
                        "attributes": {
                            "canonicalName": "DebtRegistry.Entry",
                            "name": "Entry",
                            "scope": 2590,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "version",
                                    "scope": 2094,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "address",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "address",
                                            "type": "address"
                                        },
                                        "id": 2080,
                                        "name": "ElementaryTypeName",
                                        "src": "1292:7:3"
                                    }
                                ],
                                "id": 2081,
                                "name": "VariableDeclaration",
                                "src": "1292:15:3"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "beneficiary",
                                    "scope": 2094,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "address",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "address",
                                            "type": "address"
                                        },
                                        "id": 2082,
                                        "name": "ElementaryTypeName",
                                        "src": "1317:7:3"
                                    }
                                ],
                                "id": 2083,
                                "name": "VariableDeclaration",
                                "src": "1317:19:3"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "underwriter",
                                    "scope": 2094,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "address",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "address",
                                            "type": "address"
                                        },
                                        "id": 2084,
                                        "name": "ElementaryTypeName",
                                        "src": "1346:7:3"
                                    }
                                ],
                                "id": 2085,
                                "name": "VariableDeclaration",
                                "src": "1346:19:3"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "underwriterRiskRating",
                                    "scope": 2094,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "uint",
                                            "type": "uint256"
                                        },
                                        "id": 2086,
                                        "name": "ElementaryTypeName",
                                        "src": "1375:4:3"
                                    }
                                ],
                                "id": 2087,
                                "name": "VariableDeclaration",
                                "src": "1375:26:3"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "termsContract",
                                    "scope": 2094,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "address",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "address",
                                            "type": "address"
                                        },
                                        "id": 2088,
                                        "name": "ElementaryTypeName",
                                        "src": "1411:7:3"
                                    }
                                ],
                                "id": 2089,
                                "name": "VariableDeclaration",
                                "src": "1411:21:3"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "termsContractParameters",
                                    "scope": 2094,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "bytes32",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "bytes32",
                                            "type": "bytes32"
                                        },
                                        "id": 2090,
                                        "name": "ElementaryTypeName",
                                        "src": "1442:7:3"
                                    }
                                ],
                                "id": 2091,
                                "name": "VariableDeclaration",
                                "src": "1442:31:3"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "issuanceBlockTimestamp",
                                    "scope": 2094,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "uint",
                                            "type": "uint256"
                                        },
                                        "id": 2092,
                                        "name": "ElementaryTypeName",
                                        "src": "1483:4:3"
                                    }
                                ],
                                "id": 2093,
                                "name": "VariableDeclaration",
                                "src": "1483:27:3"
                            }
                        ],
                        "id": 2094,
                        "name": "StructDefinition",
                        "src": "1269:248:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "registry",
                            "scope": 2590,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "bytes32",
                                            "type": "bytes32"
                                        },
                                        "id": 2095,
                                        "name": "ElementaryTypeName",
                                        "src": "1609:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "contractScope": null,
                                            "name": "Entry",
                                            "referencedDeclaration": 2094,
                                            "type": "struct DebtRegistry.Entry storage pointer"
                                        },
                                        "id": 2096,
                                        "name": "UserDefinedTypeName",
                                        "src": "1620:5:3"
                                    }
                                ],
                                "id": 2097,
                                "name": "Mapping",
                                "src": "1600:26:3"
                            }
                        ],
                        "id": 2098,
                        "name": "VariableDeclaration",
                        "src": "1600:44:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "debtorToDebts",
                            "scope": 2590,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "mapping(address => bytes32[] storage ref)",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "type": "mapping(address => bytes32[] storage ref)"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "address",
                                            "type": "address"
                                        },
                                        "id": 2099,
                                        "name": "ElementaryTypeName",
                                        "src": "1729:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "length": null,
                                            "type": "bytes32[] storage pointer"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2100,
                                                "name": "ElementaryTypeName",
                                                "src": "1740:7:3"
                                            }
                                        ],
                                        "id": 2101,
                                        "name": "ArrayTypeName",
                                        "src": "1740:9:3"
                                    }
                                ],
                                "id": 2102,
                                "name": "Mapping",
                                "src": "1720:30:3"
                            }
                        ],
                        "id": 2103,
                        "name": "VariableDeclaration",
                        "src": "1720:53:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "entryInsertPermissions",
                            "scope": 2590,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "struct PermissionsLib.Permissions storage ref",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "PermissionsLib.Permissions",
                                    "referencedDeclaration": 4541,
                                    "type": "struct PermissionsLib.Permissions storage pointer"
                                },
                                "id": 2104,
                                "name": "UserDefinedTypeName",
                                "src": "1780:26:3"
                            }
                        ],
                        "id": 2105,
                        "name": "VariableDeclaration",
                        "src": "1780:58:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "entryEditPermissions",
                            "scope": 2590,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "struct PermissionsLib.Permissions storage ref",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "PermissionsLib.Permissions",
                                    "referencedDeclaration": 4541,
                                    "type": "struct PermissionsLib.Permissions storage pointer"
                                },
                                "id": 2106,
                                "name": "UserDefinedTypeName",
                                "src": "1844:26:3"
                            }
                        ],
                        "id": 2107,
                        "name": "VariableDeclaration",
                        "src": "1844:56:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "name": "INSERT_CONTEXT",
                            "scope": 2590,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "string memory",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "string",
                                    "type": "string storage pointer"
                                },
                                "id": 2108,
                                "name": "ElementaryTypeName",
                                "src": "1907:6:3"
                            },
                            {
                                "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "646562742d72656769737472792d696e73657274",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "string",
                                    "type": "literal_string \"debt-registry-insert\"",
                                    "value": "debt-registry-insert"
                                },
                                "id": 2109,
                                "name": "Literal",
                                "src": "1947:22:3"
                            }
                        ],
                        "id": 2110,
                        "name": "VariableDeclaration",
                        "src": "1907:62:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "name": "EDIT_CONTEXT",
                            "scope": 2590,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "string memory",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "string",
                                    "type": "string storage pointer"
                                },
                                "id": 2111,
                                "name": "ElementaryTypeName",
                                "src": "1975:6:3"
                            },
                            {
                                "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "646562742d72656769737472792d65646974",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "string",
                                    "type": "literal_string \"debt-registry-edit\"",
                                    "value": "debt-registry-edit"
                                },
                                "id": 2112,
                                "name": "Literal",
                                "src": "2013:20:3"
                            }
                        ],
                        "id": 2113,
                        "name": "VariableDeclaration",
                        "src": "1975:58:3"
                    },
                    {
                        "attributes": {
                            "anonymous": false,
                            "name": "LogInsertEntry"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": true,
                                            "name": "agreementId",
                                            "scope": 2127,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2114,
                                                "name": "ElementaryTypeName",
                                                "src": "2070:7:3"
                                            }
                                        ],
                                        "id": 2115,
                                        "name": "VariableDeclaration",
                                        "src": "2070:27:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": true,
                                            "name": "beneficiary",
                                            "scope": 2127,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2116,
                                                "name": "ElementaryTypeName",
                                                "src": "2107:7:3"
                                            }
                                        ],
                                        "id": 2117,
                                        "name": "VariableDeclaration",
                                        "src": "2107:27:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": true,
                                            "name": "underwriter",
                                            "scope": 2127,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2118,
                                                "name": "ElementaryTypeName",
                                                "src": "2144:7:3"
                                            }
                                        ],
                                        "id": 2119,
                                        "name": "VariableDeclaration",
                                        "src": "2144:27:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": false,
                                            "name": "underwriterRiskRating",
                                            "scope": 2127,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2120,
                                                "name": "ElementaryTypeName",
                                                "src": "2181:4:3"
                                            }
                                        ],
                                        "id": 2121,
                                        "name": "VariableDeclaration",
                                        "src": "2181:26:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": false,
                                            "name": "termsContract",
                                            "scope": 2127,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2122,
                                                "name": "ElementaryTypeName",
                                                "src": "2217:7:3"
                                            }
                                        ],
                                        "id": 2123,
                                        "name": "VariableDeclaration",
                                        "src": "2217:21:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": false,
                                            "name": "termsContractParameters",
                                            "scope": 2127,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2124,
                                                "name": "ElementaryTypeName",
                                                "src": "2248:7:3"
                                            }
                                        ],
                                        "id": 2125,
                                        "name": "VariableDeclaration",
                                        "src": "2248:31:3"
                                    }
                                ],
                                "id": 2126,
                                "name": "ParameterList",
                                "src": "2060:225:3"
                            }
                        ],
                        "id": 2127,
                        "name": "EventDefinition",
                        "src": "2040:246:3"
                    },
                    {
                        "attributes": {
                            "anonymous": false,
                            "name": "LogModifyEntryBeneficiary"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": true,
                                            "name": "agreementId",
                                            "scope": 2135,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2128,
                                                "name": "ElementaryTypeName",
                                                "src": "2333:7:3"
                                            }
                                        ],
                                        "id": 2129,
                                        "name": "VariableDeclaration",
                                        "src": "2333:27:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": true,
                                            "name": "previousBeneficiary",
                                            "scope": 2135,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2130,
                                                "name": "ElementaryTypeName",
                                                "src": "2370:7:3"
                                            }
                                        ],
                                        "id": 2131,
                                        "name": "VariableDeclaration",
                                        "src": "2370:35:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": true,
                                            "name": "newBeneficiary",
                                            "scope": 2135,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2132,
                                                "name": "ElementaryTypeName",
                                                "src": "2415:7:3"
                                            }
                                        ],
                                        "id": 2133,
                                        "name": "VariableDeclaration",
                                        "src": "2415:30:3"
                                    }
                                ],
                                "id": 2134,
                                "name": "ParameterList",
                                "src": "2323:128:3"
                            }
                        ],
                        "id": 2135,
                        "name": "EventDefinition",
                        "src": "2292:160:3"
                    },
                    {
                        "attributes": {
                            "name": "onlyAuthorizedToInsert",
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2136,
                                "name": "ParameterList",
                                "src": "2489:2:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 10503,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 2137,
                                                        "name": "Identifier",
                                                        "src": "2502:7:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "bool",
                                                            "type_conversion": false
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "isAuthorized",
                                                                    "referencedDeclaration": 4692,
                                                                    "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2105,
                                                                            "type": "struct PermissionsLib.Permissions storage ref",
                                                                            "value": "entryInsertPermissions"
                                                                        },
                                                                        "id": 2138,
                                                                        "name": "Identifier",
                                                                        "src": "2510:22:3"
                                                                    }
                                                                ],
                                                                "id": 2139,
                                                                "name": "MemberAccess",
                                                                "src": "2510:35:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "sender",
                                                                    "referencedDeclaration": null,
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 10500,
                                                                            "type": "msg",
                                                                            "value": "msg"
                                                                        },
                                                                        "id": 2140,
                                                                        "name": "Identifier",
                                                                        "src": "2546:3:3"
                                                                    }
                                                                ],
                                                                "id": 2141,
                                                                "name": "MemberAccess",
                                                                "src": "2546:10:3"
                                                            }
                                                        ],
                                                        "id": 2142,
                                                        "name": "FunctionCall",
                                                        "src": "2510:47:3"
                                                    }
                                                ],
                                                "id": 2143,
                                                "name": "FunctionCall",
                                                "src": "2502:56:3"
                                            }
                                        ],
                                        "id": 2144,
                                        "name": "ExpressionStatement",
                                        "src": "2502:56:3"
                                    },
                                    {
                                        "id": 2145,
                                        "name": "PlaceholderStatement",
                                        "src": "2568:1:3"
                                    }
                                ],
                                "id": 2146,
                                "name": "Block",
                                "src": "2492:84:3"
                            }
                        ],
                        "id": 2147,
                        "name": "ModifierDefinition",
                        "src": "2458:118:3"
                    },
                    {
                        "attributes": {
                            "name": "onlyAuthorizedToEdit",
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2148,
                                "name": "ParameterList",
                                "src": "2611:2:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 10503,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 2149,
                                                        "name": "Identifier",
                                                        "src": "2624:7:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "bool",
                                                            "type_conversion": false
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "isAuthorized",
                                                                    "referencedDeclaration": 4692,
                                                                    "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2107,
                                                                            "type": "struct PermissionsLib.Permissions storage ref",
                                                                            "value": "entryEditPermissions"
                                                                        },
                                                                        "id": 2150,
                                                                        "name": "Identifier",
                                                                        "src": "2632:20:3"
                                                                    }
                                                                ],
                                                                "id": 2151,
                                                                "name": "MemberAccess",
                                                                "src": "2632:33:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "sender",
                                                                    "referencedDeclaration": null,
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 10500,
                                                                            "type": "msg",
                                                                            "value": "msg"
                                                                        },
                                                                        "id": 2152,
                                                                        "name": "Identifier",
                                                                        "src": "2666:3:3"
                                                                    }
                                                                ],
                                                                "id": 2153,
                                                                "name": "MemberAccess",
                                                                "src": "2666:10:3"
                                                            }
                                                        ],
                                                        "id": 2154,
                                                        "name": "FunctionCall",
                                                        "src": "2632:45:3"
                                                    }
                                                ],
                                                "id": 2155,
                                                "name": "FunctionCall",
                                                "src": "2624:54:3"
                                            }
                                        ],
                                        "id": 2156,
                                        "name": "ExpressionStatement",
                                        "src": "2624:54:3"
                                    },
                                    {
                                        "id": 2157,
                                        "name": "PlaceholderStatement",
                                        "src": "2688:1:3"
                                    }
                                ],
                                "id": 2158,
                                "name": "Block",
                                "src": "2614:82:3"
                            }
                        ],
                        "id": 2159,
                        "name": "ModifierDefinition",
                        "src": "2582:114:3"
                    },
                    {
                        "attributes": {
                            "name": "onlyExtantEntry",
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2171,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2160,
                                                "name": "ElementaryTypeName",
                                                "src": "2727:7:3"
                                            }
                                        ],
                                        "id": 2161,
                                        "name": "VariableDeclaration",
                                        "src": "2727:19:3"
                                    }
                                ],
                                "id": 2162,
                                "name": "ParameterList",
                                "src": "2726:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 10503,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 2163,
                                                        "name": "Identifier",
                                                        "src": "2758:7:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "bool",
                                                            "type_conversion": false
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    ],
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2202,
                                                                    "type": "function (bytes32) view returns (bool)",
                                                                    "value": "doesEntryExist"
                                                                },
                                                                "id": 2164,
                                                                "name": "Identifier",
                                                                "src": "2766:14:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2161,
                                                                    "type": "bytes32",
                                                                    "value": "agreementId"
                                                                },
                                                                "id": 2165,
                                                                "name": "Identifier",
                                                                "src": "2781:11:3"
                                                            }
                                                        ],
                                                        "id": 2166,
                                                        "name": "FunctionCall",
                                                        "src": "2766:27:3"
                                                    }
                                                ],
                                                "id": 2167,
                                                "name": "FunctionCall",
                                                "src": "2758:36:3"
                                            }
                                        ],
                                        "id": 2168,
                                        "name": "ExpressionStatement",
                                        "src": "2758:36:3"
                                    },
                                    {
                                        "id": 2169,
                                        "name": "PlaceholderStatement",
                                        "src": "2804:1:3"
                                    }
                                ],
                                "id": 2170,
                                "name": "Block",
                                "src": "2748:64:3"
                            }
                        ],
                        "id": 2171,
                        "name": "ModifierDefinition",
                        "src": "2702:110:3"
                    },
                    {
                        "attributes": {
                            "name": "nonNullBeneficiary",
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "beneficiary",
                                            "scope": 2185,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2172,
                                                "name": "ElementaryTypeName",
                                                "src": "2846:7:3"
                                            }
                                        ],
                                        "id": 2173,
                                        "name": "VariableDeclaration",
                                        "src": "2846:19:3"
                                    }
                                ],
                                "id": 2174,
                                "name": "ParameterList",
                                "src": "2845:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 10503,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 2175,
                                                        "name": "Identifier",
                                                        "src": "2877:7:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "operator": "!=",
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2173,
                                                                    "type": "address",
                                                                    "value": "beneficiary"
                                                                },
                                                                "id": 2176,
                                                                "name": "Identifier",
                                                                "src": "2885:11:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "address",
                                                                    "type_conversion": true
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "type": "type(address)",
                                                                            "value": "address"
                                                                        },
                                                                        "id": 2177,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "2900:7:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "hexvalue": "30",
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "subdenomination": null,
                                                                            "token": "number",
                                                                            "type": "int_const 0",
                                                                            "value": "0"
                                                                        },
                                                                        "id": 2178,
                                                                        "name": "Literal",
                                                                        "src": "2908:1:3"
                                                                    }
                                                                ],
                                                                "id": 2179,
                                                                "name": "FunctionCall",
                                                                "src": "2900:10:3"
                                                            }
                                                        ],
                                                        "id": 2180,
                                                        "name": "BinaryOperation",
                                                        "src": "2885:25:3"
                                                    }
                                                ],
                                                "id": 2181,
                                                "name": "FunctionCall",
                                                "src": "2877:34:3"
                                            }
                                        ],
                                        "id": 2182,
                                        "name": "ExpressionStatement",
                                        "src": "2877:34:3"
                                    },
                                    {
                                        "id": 2183,
                                        "name": "PlaceholderStatement",
                                        "src": "2921:1:3"
                                    }
                                ],
                                "id": 2184,
                                "name": "Block",
                                "src": "2867:62:3"
                            }
                        ],
                        "id": 2185,
                        "name": "ModifierDefinition",
                        "src": "2818:111:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "doesEntryExist",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2202,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2186,
                                                "name": "ElementaryTypeName",
                                                "src": "3051:7:3"
                                            }
                                        ],
                                        "id": 2187,
                                        "name": "VariableDeclaration",
                                        "src": "3051:19:3"
                                    }
                                ],
                                "id": 2188,
                                "name": "ParameterList",
                                "src": "3050:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "exists",
                                            "scope": 2202,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 2189,
                                                "name": "ElementaryTypeName",
                                                "src": "3117:4:3"
                                            }
                                        ],
                                        "id": 2190,
                                        "name": "VariableDeclaration",
                                        "src": "3117:11:3"
                                    }
                                ],
                                "id": 2191,
                                "name": "ParameterList",
                                "src": "3116:13:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2191
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "!=",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "beneficiary",
                                                            "referencedDeclaration": 2083,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2192,
                                                                        "name": "Identifier",
                                                                        "src": "3151:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2187,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2193,
                                                                        "name": "Identifier",
                                                                        "src": "3160:11:3"
                                                                    }
                                                                ],
                                                                "id": 2194,
                                                                "name": "IndexAccess",
                                                                "src": "3151:21:3"
                                                            }
                                                        ],
                                                        "id": 2195,
                                                        "name": "MemberAccess",
                                                        "src": "3151:33:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "address",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(address)",
                                                                    "value": "address"
                                                                },
                                                                "id": 2196,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "3188:7:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "30",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 0",
                                                                    "value": "0"
                                                                },
                                                                "id": 2197,
                                                                "name": "Literal",
                                                                "src": "3196:1:3"
                                                            }
                                                        ],
                                                        "id": 2198,
                                                        "name": "FunctionCall",
                                                        "src": "3188:10:3"
                                                    }
                                                ],
                                                "id": 2199,
                                                "name": "BinaryOperation",
                                                "src": "3151:47:3"
                                            }
                                        ],
                                        "id": 2200,
                                        "name": "Return",
                                        "src": "3144:54:3"
                                    }
                                ],
                                "id": 2201,
                                "name": "Block",
                                "src": "3134:71:3"
                            }
                        ],
                        "id": 2202,
                        "name": "FunctionDefinition",
                        "src": "3027:178:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "insert",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_version",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2203,
                                                "name": "ElementaryTypeName",
                                                "src": "3396:7:3"
                                            }
                                        ],
                                        "id": 2204,
                                        "name": "VariableDeclaration",
                                        "src": "3396:16:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_beneficiary",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2205,
                                                "name": "ElementaryTypeName",
                                                "src": "3422:7:3"
                                            }
                                        ],
                                        "id": 2206,
                                        "name": "VariableDeclaration",
                                        "src": "3422:20:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_debtor",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2207,
                                                "name": "ElementaryTypeName",
                                                "src": "3452:7:3"
                                            }
                                        ],
                                        "id": 2208,
                                        "name": "VariableDeclaration",
                                        "src": "3452:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_underwriter",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2209,
                                                "name": "ElementaryTypeName",
                                                "src": "3477:7:3"
                                            }
                                        ],
                                        "id": 2210,
                                        "name": "VariableDeclaration",
                                        "src": "3477:20:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_underwriterRiskRating",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2211,
                                                "name": "ElementaryTypeName",
                                                "src": "3507:4:3"
                                            }
                                        ],
                                        "id": 2212,
                                        "name": "VariableDeclaration",
                                        "src": "3507:27:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_termsContract",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2213,
                                                "name": "ElementaryTypeName",
                                                "src": "3544:7:3"
                                            }
                                        ],
                                        "id": 2214,
                                        "name": "VariableDeclaration",
                                        "src": "3544:22:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_termsContractParameters",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2215,
                                                "name": "ElementaryTypeName",
                                                "src": "3576:7:3"
                                            }
                                        ],
                                        "id": 2216,
                                        "name": "VariableDeclaration",
                                        "src": "3576:32:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_salt",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2217,
                                                "name": "ElementaryTypeName",
                                                "src": "3618:4:3"
                                            }
                                        ],
                                        "id": 2218,
                                        "name": "VariableDeclaration",
                                        "src": "3618:10:3"
                                    }
                                ],
                                "id": 2219,
                                "name": "ParameterList",
                                "src": "3386:248:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_agreementId",
                                            "scope": 2292,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2227,
                                                "name": "ElementaryTypeName",
                                                "src": "3761:7:3"
                                            }
                                        ],
                                        "id": 2228,
                                        "name": "VariableDeclaration",
                                        "src": "3761:20:3"
                                    }
                                ],
                                "id": 2229,
                                "name": "ParameterList",
                                "src": "3760:22:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2147,
                                            "type": "modifier ()",
                                            "value": "onlyAuthorizedToInsert"
                                        },
                                        "id": 2220,
                                        "name": "Identifier",
                                        "src": "3658:22:3"
                                    }
                                ],
                                "id": 2221,
                                "name": "ModifierInvocation",
                                "src": "3658:22:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 8625,
                                            "type": "modifier ()",
                                            "value": "whenNotPaused"
                                        },
                                        "id": 2222,
                                        "name": "Identifier",
                                        "src": "3689:13:3"
                                    }
                                ],
                                "id": 2223,
                                "name": "ModifierInvocation",
                                "src": "3689:13:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2185,
                                            "type": "modifier (address)",
                                            "value": "nonNullBeneficiary"
                                        },
                                        "id": 2224,
                                        "name": "Identifier",
                                        "src": "3711:18:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2206,
                                            "type": "address",
                                            "value": "_beneficiary"
                                        },
                                        "id": 2225,
                                        "name": "Identifier",
                                        "src": "3730:12:3"
                                    }
                                ],
                                "id": 2226,
                                "name": "ModifierInvocation",
                                "src": "3711:32:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2231
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "entry",
                                                    "scope": 2292,
                                                    "stateVariable": false,
                                                    "storageLocation": "memory",
                                                    "type": "struct DebtRegistry.Entry memory",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "contractScope": null,
                                                            "name": "Entry",
                                                            "referencedDeclaration": 2094,
                                                            "type": "struct DebtRegistry.Entry storage pointer"
                                                        },
                                                        "id": 2230,
                                                        "name": "UserDefinedTypeName",
                                                        "src": "3797:5:3"
                                                    }
                                                ],
                                                "id": 2231,
                                                "name": "VariableDeclaration",
                                                "src": "3797:18:3"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": true,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "struct DebtRegistry.Entry memory",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2094,
                                                            "type": "type(struct DebtRegistry.Entry storage pointer)",
                                                            "value": "Entry"
                                                        },
                                                        "id": 2232,
                                                        "name": "Identifier",
                                                        "src": "3818:5:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2204,
                                                            "type": "address",
                                                            "value": "_version"
                                                        },
                                                        "id": 2233,
                                                        "name": "Identifier",
                                                        "src": "3837:8:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2206,
                                                            "type": "address",
                                                            "value": "_beneficiary"
                                                        },
                                                        "id": 2234,
                                                        "name": "Identifier",
                                                        "src": "3859:12:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2210,
                                                            "type": "address",
                                                            "value": "_underwriter"
                                                        },
                                                        "id": 2235,
                                                        "name": "Identifier",
                                                        "src": "3885:12:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2212,
                                                            "type": "uint256",
                                                            "value": "_underwriterRiskRating"
                                                        },
                                                        "id": 2236,
                                                        "name": "Identifier",
                                                        "src": "3911:22:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2214,
                                                            "type": "address",
                                                            "value": "_termsContract"
                                                        },
                                                        "id": 2237,
                                                        "name": "Identifier",
                                                        "src": "3947:14:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2216,
                                                            "type": "bytes32",
                                                            "value": "_termsContractParameters"
                                                        },
                                                        "id": 2238,
                                                        "name": "Identifier",
                                                        "src": "3975:24:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "timestamp",
                                                            "referencedDeclaration": null,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 10492,
                                                                    "type": "block",
                                                                    "value": "block"
                                                                },
                                                                "id": 2239,
                                                                "name": "Identifier",
                                                                "src": "4013:5:3"
                                                            }
                                                        ],
                                                        "id": 2240,
                                                        "name": "MemberAccess",
                                                        "src": "4013:15:3"
                                                    }
                                                ],
                                                "id": 2241,
                                                "name": "FunctionCall",
                                                "src": "3818:220:3"
                                            }
                                        ],
                                        "id": 2242,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3797:241:3"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2244
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "agreementId",
                                                    "scope": 2292,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "bytes32",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "bytes32",
                                                            "type": "bytes32"
                                                        },
                                                        "id": 2243,
                                                        "name": "ElementaryTypeName",
                                                        "src": "4049:7:3"
                                                    }
                                                ],
                                                "id": 2244,
                                                "name": "VariableDeclaration",
                                                "src": "4049:19:3"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "bytes32",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_struct$_Entry_$2094_memory_ptr",
                                                                    "typeString": "struct DebtRegistry.Entry memory"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2589,
                                                            "type": "function (struct DebtRegistry.Entry memory,address,uint256) pure returns (bytes32)",
                                                            "value": "_getAgreementId"
                                                        },
                                                        "id": 2245,
                                                        "name": "Identifier",
                                                        "src": "4071:15:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2231,
                                                            "type": "struct DebtRegistry.Entry memory",
                                                            "value": "entry"
                                                        },
                                                        "id": 2246,
                                                        "name": "Identifier",
                                                        "src": "4087:5:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2208,
                                                            "type": "address",
                                                            "value": "_debtor"
                                                        },
                                                        "id": 2247,
                                                        "name": "Identifier",
                                                        "src": "4094:7:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2218,
                                                            "type": "uint256",
                                                            "value": "_salt"
                                                        },
                                                        "id": 2248,
                                                        "name": "Identifier",
                                                        "src": "4103:5:3"
                                                    }
                                                ],
                                                "id": 2249,
                                                "name": "FunctionCall",
                                                "src": "4071:38:3"
                                            }
                                        ],
                                        "id": 2250,
                                        "name": "VariableDeclarationStatement",
                                        "src": "4049:60:3"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 10503,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 2251,
                                                        "name": "Identifier",
                                                        "src": "4120:7:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "operator": "==",
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "beneficiary",
                                                                    "referencedDeclaration": 2083,
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "type": "struct DebtRegistry.Entry storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2098,
                                                                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                                    "value": "registry"
                                                                                },
                                                                                "id": 2252,
                                                                                "name": "Identifier",
                                                                                "src": "4128:8:3"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2244,
                                                                                    "type": "bytes32",
                                                                                    "value": "agreementId"
                                                                                },
                                                                                "id": 2253,
                                                                                "name": "Identifier",
                                                                                "src": "4137:11:3"
                                                                            }
                                                                        ],
                                                                        "id": 2254,
                                                                        "name": "IndexAccess",
                                                                        "src": "4128:21:3"
                                                                    }
                                                                ],
                                                                "id": 2255,
                                                                "name": "MemberAccess",
                                                                "src": "4128:33:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "address",
                                                                    "type_conversion": true
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "type": "type(address)",
                                                                            "value": "address"
                                                                        },
                                                                        "id": 2256,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "4165:7:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "hexvalue": "30",
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "subdenomination": null,
                                                                            "token": "number",
                                                                            "type": "int_const 0",
                                                                            "value": "0"
                                                                        },
                                                                        "id": 2257,
                                                                        "name": "Literal",
                                                                        "src": "4173:1:3"
                                                                    }
                                                                ],
                                                                "id": 2258,
                                                                "name": "FunctionCall",
                                                                "src": "4165:10:3"
                                                            }
                                                        ],
                                                        "id": 2259,
                                                        "name": "BinaryOperation",
                                                        "src": "4128:47:3"
                                                    }
                                                ],
                                                "id": 2260,
                                                "name": "FunctionCall",
                                                "src": "4120:56:3"
                                            }
                                        ],
                                        "id": 2261,
                                        "name": "ExpressionStatement",
                                        "src": "4120:56:3"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "type": "struct DebtRegistry.Entry storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2098,
                                                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                    "value": "registry"
                                                                },
                                                                "id": 2262,
                                                                "name": "Identifier",
                                                                "src": "4187:8:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2244,
                                                                    "type": "bytes32",
                                                                    "value": "agreementId"
                                                                },
                                                                "id": 2263,
                                                                "name": "Identifier",
                                                                "src": "4196:11:3"
                                                            }
                                                        ],
                                                        "id": 2264,
                                                        "name": "IndexAccess",
                                                        "src": "4187:21:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2231,
                                                            "type": "struct DebtRegistry.Entry memory",
                                                            "value": "entry"
                                                        },
                                                        "id": 2265,
                                                        "name": "Identifier",
                                                        "src": "4211:5:3"
                                                    }
                                                ],
                                                "id": 2266,
                                                "name": "Assignment",
                                                "src": "4187:29:3"
                                            }
                                        ],
                                        "id": 2267,
                                        "name": "ExpressionStatement",
                                        "src": "4187:29:3"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "uint256",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "push",
                                                            "referencedDeclaration": null,
                                                            "type": "function (bytes32) returns (uint256)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "bytes32[] storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2103,
                                                                            "type": "mapping(address => bytes32[] storage ref)",
                                                                            "value": "debtorToDebts"
                                                                        },
                                                                        "id": 2268,
                                                                        "name": "Identifier",
                                                                        "src": "4226:13:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2208,
                                                                            "type": "address",
                                                                            "value": "_debtor"
                                                                        },
                                                                        "id": 2269,
                                                                        "name": "Identifier",
                                                                        "src": "4240:7:3"
                                                                    }
                                                                ],
                                                                "id": 2270,
                                                                "name": "IndexAccess",
                                                                "src": "4226:22:3"
                                                            }
                                                        ],
                                                        "id": 2271,
                                                        "name": "MemberAccess",
                                                        "src": "4226:27:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2244,
                                                            "type": "bytes32",
                                                            "value": "agreementId"
                                                        },
                                                        "id": 2272,
                                                        "name": "Identifier",
                                                        "src": "4254:11:3"
                                                    }
                                                ],
                                                "id": 2273,
                                                "name": "FunctionCall",
                                                "src": "4226:40:3"
                                            }
                                        ],
                                        "id": 2274,
                                        "name": "ExpressionStatement",
                                        "src": "4226:40:3"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2127,
                                                            "type": "function (bytes32,address,address,uint256,address,bytes32)",
                                                            "value": "LogInsertEntry"
                                                        },
                                                        "id": 2275,
                                                        "name": "Identifier",
                                                        "src": "4277:14:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2244,
                                                            "type": "bytes32",
                                                            "value": "agreementId"
                                                        },
                                                        "id": 2276,
                                                        "name": "Identifier",
                                                        "src": "4305:11:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "beneficiary",
                                                            "referencedDeclaration": 2083,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2231,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "entry"
                                                                },
                                                                "id": 2277,
                                                                "name": "Identifier",
                                                                "src": "4330:5:3"
                                                            }
                                                        ],
                                                        "id": 2278,
                                                        "name": "MemberAccess",
                                                        "src": "4330:17:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "underwriter",
                                                            "referencedDeclaration": 2085,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2231,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "entry"
                                                                },
                                                                "id": 2279,
                                                                "name": "Identifier",
                                                                "src": "4361:5:3"
                                                            }
                                                        ],
                                                        "id": 2280,
                                                        "name": "MemberAccess",
                                                        "src": "4361:17:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "underwriterRiskRating",
                                                            "referencedDeclaration": 2087,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2231,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "entry"
                                                                },
                                                                "id": 2281,
                                                                "name": "Identifier",
                                                                "src": "4392:5:3"
                                                            }
                                                        ],
                                                        "id": 2282,
                                                        "name": "MemberAccess",
                                                        "src": "4392:27:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContract",
                                                            "referencedDeclaration": 2089,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2231,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "entry"
                                                                },
                                                                "id": 2283,
                                                                "name": "Identifier",
                                                                "src": "4433:5:3"
                                                            }
                                                        ],
                                                        "id": 2284,
                                                        "name": "MemberAccess",
                                                        "src": "4433:19:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContractParameters",
                                                            "referencedDeclaration": 2091,
                                                            "type": "bytes32"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2231,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "entry"
                                                                },
                                                                "id": 2285,
                                                                "name": "Identifier",
                                                                "src": "4466:5:3"
                                                            }
                                                        ],
                                                        "id": 2286,
                                                        "name": "MemberAccess",
                                                        "src": "4466:29:3"
                                                    }
                                                ],
                                                "id": 2287,
                                                "name": "FunctionCall",
                                                "src": "4277:228:3"
                                            }
                                        ],
                                        "id": 2288,
                                        "name": "ExpressionStatement",
                                        "src": "4277:228:3"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2229
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                        null
                                                    ],
                                                    "referencedDeclaration": 2244,
                                                    "type": "bytes32",
                                                    "value": "agreementId"
                                                },
                                                "id": 2289,
                                                "name": "Identifier",
                                                "src": "4523:11:3"
                                            }
                                        ],
                                        "id": 2290,
                                        "name": "Return",
                                        "src": "4516:18:3"
                                    }
                                ],
                                "id": 2291,
                                "name": "Block",
                                "src": "3787:754:3"
                            }
                        ],
                        "id": 2292,
                        "name": "FunctionDefinition",
                        "src": "3371:1170:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "modifyBeneficiary",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2330,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2293,
                                                "name": "ElementaryTypeName",
                                                "src": "4739:7:3"
                                            }
                                        ],
                                        "id": 2294,
                                        "name": "VariableDeclaration",
                                        "src": "4739:19:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "newBeneficiary",
                                            "scope": 2330,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2295,
                                                "name": "ElementaryTypeName",
                                                "src": "4760:7:3"
                                            }
                                        ],
                                        "id": 2296,
                                        "name": "VariableDeclaration",
                                        "src": "4760:22:3"
                                    }
                                ],
                                "id": 2297,
                                "name": "ParameterList",
                                "src": "4738:45:3"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2308,
                                "name": "ParameterList",
                                "src": "4934:0:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2159,
                                            "type": "modifier ()",
                                            "value": "onlyAuthorizedToEdit"
                                        },
                                        "id": 2298,
                                        "name": "Identifier",
                                        "src": "4807:20:3"
                                    }
                                ],
                                "id": 2299,
                                "name": "ModifierInvocation",
                                "src": "4807:20:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 8625,
                                            "type": "modifier ()",
                                            "value": "whenNotPaused"
                                        },
                                        "id": 2300,
                                        "name": "Identifier",
                                        "src": "4836:13:3"
                                    }
                                ],
                                "id": 2301,
                                "name": "ModifierInvocation",
                                "src": "4836:13:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2171,
                                            "type": "modifier (bytes32)",
                                            "value": "onlyExtantEntry"
                                        },
                                        "id": 2302,
                                        "name": "Identifier",
                                        "src": "4858:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2294,
                                            "type": "bytes32",
                                            "value": "agreementId"
                                        },
                                        "id": 2303,
                                        "name": "Identifier",
                                        "src": "4874:11:3"
                                    }
                                ],
                                "id": 2304,
                                "name": "ModifierInvocation",
                                "src": "4858:28:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2185,
                                            "type": "modifier (address)",
                                            "value": "nonNullBeneficiary"
                                        },
                                        "id": 2305,
                                        "name": "Identifier",
                                        "src": "4895:18:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2296,
                                            "type": "address",
                                            "value": "newBeneficiary"
                                        },
                                        "id": 2306,
                                        "name": "Identifier",
                                        "src": "4914:14:3"
                                    }
                                ],
                                "id": 2307,
                                "name": "ModifierInvocation",
                                "src": "4895:34:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2310
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "previousBeneficiary",
                                                    "scope": 2330,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "address",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "address",
                                                            "type": "address"
                                                        },
                                                        "id": 2309,
                                                        "name": "ElementaryTypeName",
                                                        "src": "4944:7:3"
                                                    }
                                                ],
                                                "id": 2310,
                                                "name": "VariableDeclaration",
                                                "src": "4944:27:3"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "beneficiary",
                                                    "referencedDeclaration": 2083,
                                                    "type": "address"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct DebtRegistry.Entry storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2098,
                                                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                    "value": "registry"
                                                                },
                                                                "id": 2311,
                                                                "name": "Identifier",
                                                                "src": "4974:8:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2294,
                                                                    "type": "bytes32",
                                                                    "value": "agreementId"
                                                                },
                                                                "id": 2312,
                                                                "name": "Identifier",
                                                                "src": "4983:11:3"
                                                            }
                                                        ],
                                                        "id": 2313,
                                                        "name": "IndexAccess",
                                                        "src": "4974:21:3"
                                                    }
                                                ],
                                                "id": 2314,
                                                "name": "MemberAccess",
                                                "src": "4974:33:3"
                                            }
                                        ],
                                        "id": 2315,
                                        "name": "VariableDeclarationStatement",
                                        "src": "4944:63:3"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "address"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "member_name": "beneficiary",
                                                            "referencedDeclaration": 2083,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2316,
                                                                        "name": "Identifier",
                                                                        "src": "5018:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2294,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2317,
                                                                        "name": "Identifier",
                                                                        "src": "5027:11:3"
                                                                    }
                                                                ],
                                                                "id": 2318,
                                                                "name": "IndexAccess",
                                                                "src": "5018:21:3"
                                                            }
                                                        ],
                                                        "id": 2319,
                                                        "name": "MemberAccess",
                                                        "src": "5018:33:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2296,
                                                            "type": "address",
                                                            "value": "newBeneficiary"
                                                        },
                                                        "id": 2320,
                                                        "name": "Identifier",
                                                        "src": "5054:14:3"
                                                    }
                                                ],
                                                "id": 2321,
                                                "name": "Assignment",
                                                "src": "5018:50:3"
                                            }
                                        ],
                                        "id": 2322,
                                        "name": "ExpressionStatement",
                                        "src": "5018:50:3"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2135,
                                                            "type": "function (bytes32,address,address)",
                                                            "value": "LogModifyEntryBeneficiary"
                                                        },
                                                        "id": 2323,
                                                        "name": "Identifier",
                                                        "src": "5079:25:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2294,
                                                            "type": "bytes32",
                                                            "value": "agreementId"
                                                        },
                                                        "id": 2324,
                                                        "name": "Identifier",
                                                        "src": "5118:11:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2310,
                                                            "type": "address",
                                                            "value": "previousBeneficiary"
                                                        },
                                                        "id": 2325,
                                                        "name": "Identifier",
                                                        "src": "5143:19:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2296,
                                                            "type": "address",
                                                            "value": "newBeneficiary"
                                                        },
                                                        "id": 2326,
                                                        "name": "Identifier",
                                                        "src": "5176:14:3"
                                                    }
                                                ],
                                                "id": 2327,
                                                "name": "FunctionCall",
                                                "src": "5079:121:3"
                                            }
                                        ],
                                        "id": 2328,
                                        "name": "ExpressionStatement",
                                        "src": "5079:121:3"
                                    }
                                ],
                                "id": 2329,
                                "name": "Block",
                                "src": "4934:273:3"
                            }
                        ],
                        "id": 2330,
                        "name": "FunctionDefinition",
                        "src": "4712:495:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "addAuthorizedInsertAgent",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agent",
                                            "scope": 2345,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2331,
                                                "name": "ElementaryTypeName",
                                                "src": "5370:7:3"
                                            }
                                        ],
                                        "id": 2332,
                                        "name": "VariableDeclaration",
                                        "src": "5370:13:3"
                                    }
                                ],
                                "id": 2333,
                                "name": "ParameterList",
                                "src": "5369:15:3"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2336,
                                "name": "ParameterList",
                                "src": "5422:0:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 8792,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 2334,
                                        "name": "Identifier",
                                        "src": "5408:9:3"
                                    }
                                ],
                                "id": 2335,
                                "name": "ModifierInvocation",
                                "src": "5408:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory",
                                                                    "typeString": "string memory"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "authorize",
                                                            "referencedDeclaration": 4591,
                                                            "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2105,
                                                                    "type": "struct PermissionsLib.Permissions storage ref",
                                                                    "value": "entryInsertPermissions"
                                                                },
                                                                "id": 2337,
                                                                "name": "Identifier",
                                                                "src": "5432:22:3"
                                                            }
                                                        ],
                                                        "id": 2339,
                                                        "name": "MemberAccess",
                                                        "src": "5432:32:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2332,
                                                            "type": "address",
                                                            "value": "agent"
                                                        },
                                                        "id": 2340,
                                                        "name": "Identifier",
                                                        "src": "5465:5:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2110,
                                                            "type": "string memory",
                                                            "value": "INSERT_CONTEXT"
                                                        },
                                                        "id": 2341,
                                                        "name": "Identifier",
                                                        "src": "5472:14:3"
                                                    }
                                                ],
                                                "id": 2342,
                                                "name": "FunctionCall",
                                                "src": "5432:55:3"
                                            }
                                        ],
                                        "id": 2343,
                                        "name": "ExpressionStatement",
                                        "src": "5432:55:3"
                                    }
                                ],
                                "id": 2344,
                                "name": "Block",
                                "src": "5422:72:3"
                            }
                        ],
                        "id": 2345,
                        "name": "FunctionDefinition",
                        "src": "5336:158:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "addAuthorizedEditAgent",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agent",
                                            "scope": 2360,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2346,
                                                "name": "ElementaryTypeName",
                                                "src": "5666:7:3"
                                            }
                                        ],
                                        "id": 2347,
                                        "name": "VariableDeclaration",
                                        "src": "5666:13:3"
                                    }
                                ],
                                "id": 2348,
                                "name": "ParameterList",
                                "src": "5665:15:3"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2351,
                                "name": "ParameterList",
                                "src": "5718:0:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 8792,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 2349,
                                        "name": "Identifier",
                                        "src": "5704:9:3"
                                    }
                                ],
                                "id": 2350,
                                "name": "ModifierInvocation",
                                "src": "5704:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory",
                                                                    "typeString": "string memory"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "authorize",
                                                            "referencedDeclaration": 4591,
                                                            "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2107,
                                                                    "type": "struct PermissionsLib.Permissions storage ref",
                                                                    "value": "entryEditPermissions"
                                                                },
                                                                "id": 2352,
                                                                "name": "Identifier",
                                                                "src": "5728:20:3"
                                                            }
                                                        ],
                                                        "id": 2354,
                                                        "name": "MemberAccess",
                                                        "src": "5728:30:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2347,
                                                            "type": "address",
                                                            "value": "agent"
                                                        },
                                                        "id": 2355,
                                                        "name": "Identifier",
                                                        "src": "5759:5:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2113,
                                                            "type": "string memory",
                                                            "value": "EDIT_CONTEXT"
                                                        },
                                                        "id": 2356,
                                                        "name": "Identifier",
                                                        "src": "5766:12:3"
                                                    }
                                                ],
                                                "id": 2357,
                                                "name": "FunctionCall",
                                                "src": "5728:51:3"
                                            }
                                        ],
                                        "id": 2358,
                                        "name": "ExpressionStatement",
                                        "src": "5728:51:3"
                                    }
                                ],
                                "id": 2359,
                                "name": "Block",
                                "src": "5718:68:3"
                            }
                        ],
                        "id": 2360,
                        "name": "FunctionDefinition",
                        "src": "5634:152:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "revokeInsertAgentAuthorization",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agent",
                                            "scope": 2375,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2361,
                                                "name": "ElementaryTypeName",
                                                "src": "5960:7:3"
                                            }
                                        ],
                                        "id": 2362,
                                        "name": "VariableDeclaration",
                                        "src": "5960:13:3"
                                    }
                                ],
                                "id": 2363,
                                "name": "ParameterList",
                                "src": "5959:15:3"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2366,
                                "name": "ParameterList",
                                "src": "6012:0:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 8792,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 2364,
                                        "name": "Identifier",
                                        "src": "5998:9:3"
                                    }
                                ],
                                "id": 2365,
                                "name": "ModifierInvocation",
                                "src": "5998:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory",
                                                                    "typeString": "string memory"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "revokeAuthorization",
                                                            "referencedDeclaration": 4677,
                                                            "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2105,
                                                                    "type": "struct PermissionsLib.Permissions storage ref",
                                                                    "value": "entryInsertPermissions"
                                                                },
                                                                "id": 2367,
                                                                "name": "Identifier",
                                                                "src": "6022:22:3"
                                                            }
                                                        ],
                                                        "id": 2369,
                                                        "name": "MemberAccess",
                                                        "src": "6022:42:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2362,
                                                            "type": "address",
                                                            "value": "agent"
                                                        },
                                                        "id": 2370,
                                                        "name": "Identifier",
                                                        "src": "6065:5:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2110,
                                                            "type": "string memory",
                                                            "value": "INSERT_CONTEXT"
                                                        },
                                                        "id": 2371,
                                                        "name": "Identifier",
                                                        "src": "6072:14:3"
                                                    }
                                                ],
                                                "id": 2372,
                                                "name": "FunctionCall",
                                                "src": "6022:65:3"
                                            }
                                        ],
                                        "id": 2373,
                                        "name": "ExpressionStatement",
                                        "src": "6022:65:3"
                                    }
                                ],
                                "id": 2374,
                                "name": "Block",
                                "src": "6012:82:3"
                            }
                        ],
                        "id": 2375,
                        "name": "FunctionDefinition",
                        "src": "5920:174:3"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "revokeEditAgentAuthorization",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agent",
                                            "scope": 2390,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2376,
                                                "name": "ElementaryTypeName",
                                                "src": "6277:7:3"
                                            }
                                        ],
                                        "id": 2377,
                                        "name": "VariableDeclaration",
                                        "src": "6277:13:3"
                                    }
                                ],
                                "id": 2378,
                                "name": "ParameterList",
                                "src": "6276:15:3"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2381,
                                "name": "ParameterList",
                                "src": "6329:0:3"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 8792,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 2379,
                                        "name": "Identifier",
                                        "src": "6315:9:3"
                                    }
                                ],
                                "id": 2380,
                                "name": "ModifierInvocation",
                                "src": "6315:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory",
                                                                    "typeString": "string memory"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "revokeAuthorization",
                                                            "referencedDeclaration": 4677,
                                                            "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2107,
                                                                    "type": "struct PermissionsLib.Permissions storage ref",
                                                                    "value": "entryEditPermissions"
                                                                },
                                                                "id": 2382,
                                                                "name": "Identifier",
                                                                "src": "6339:20:3"
                                                            }
                                                        ],
                                                        "id": 2384,
                                                        "name": "MemberAccess",
                                                        "src": "6339:40:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2377,
                                                            "type": "address",
                                                            "value": "agent"
                                                        },
                                                        "id": 2385,
                                                        "name": "Identifier",
                                                        "src": "6380:5:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2113,
                                                            "type": "string memory",
                                                            "value": "EDIT_CONTEXT"
                                                        },
                                                        "id": 2386,
                                                        "name": "Identifier",
                                                        "src": "6387:12:3"
                                                    }
                                                ],
                                                "id": 2387,
                                                "name": "FunctionCall",
                                                "src": "6339:61:3"
                                            }
                                        ],
                                        "id": 2388,
                                        "name": "ExpressionStatement",
                                        "src": "6339:61:3"
                                    }
                                ],
                                "id": 2389,
                                "name": "Block",
                                "src": "6329:78:3"
                            }
                        ],
                        "id": 2390,
                        "name": "FunctionDefinition",
                        "src": "6239:168:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "get",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2391,
                                                "name": "ElementaryTypeName",
                                                "src": "6672:7:3"
                                            }
                                        ],
                                        "id": 2392,
                                        "name": "VariableDeclaration",
                                        "src": "6672:19:3"
                                    }
                                ],
                                "id": 2393,
                                "name": "ParameterList",
                                "src": "6671:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2394,
                                                "name": "ElementaryTypeName",
                                                "src": "6737:7:3"
                                            }
                                        ],
                                        "id": 2395,
                                        "name": "VariableDeclaration",
                                        "src": "6737:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2396,
                                                "name": "ElementaryTypeName",
                                                "src": "6746:7:3"
                                            }
                                        ],
                                        "id": 2397,
                                        "name": "VariableDeclaration",
                                        "src": "6746:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2398,
                                                "name": "ElementaryTypeName",
                                                "src": "6755:7:3"
                                            }
                                        ],
                                        "id": 2399,
                                        "name": "VariableDeclaration",
                                        "src": "6755:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2400,
                                                "name": "ElementaryTypeName",
                                                "src": "6764:4:3"
                                            }
                                        ],
                                        "id": 2401,
                                        "name": "VariableDeclaration",
                                        "src": "6764:4:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2402,
                                                "name": "ElementaryTypeName",
                                                "src": "6770:7:3"
                                            }
                                        ],
                                        "id": 2403,
                                        "name": "VariableDeclaration",
                                        "src": "6770:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2404,
                                                "name": "ElementaryTypeName",
                                                "src": "6779:7:3"
                                            }
                                        ],
                                        "id": 2405,
                                        "name": "VariableDeclaration",
                                        "src": "6779:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2440,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2406,
                                                "name": "ElementaryTypeName",
                                                "src": "6788:4:3"
                                            }
                                        ],
                                        "id": 2407,
                                        "name": "VariableDeclaration",
                                        "src": "6788:4:3"
                                    }
                                ],
                                "id": 2408,
                                "name": "ParameterList",
                                "src": "6736:57:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2408
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "tuple(address,address,address,uint256,address,bytes32,uint256)"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "version",
                                                            "referencedDeclaration": 2081,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2409,
                                                                        "name": "Identifier",
                                                                        "src": "6829:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2392,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2410,
                                                                        "name": "Identifier",
                                                                        "src": "6838:11:3"
                                                                    }
                                                                ],
                                                                "id": 2411,
                                                                "name": "IndexAccess",
                                                                "src": "6829:21:3"
                                                            }
                                                        ],
                                                        "id": 2412,
                                                        "name": "MemberAccess",
                                                        "src": "6829:29:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "beneficiary",
                                                            "referencedDeclaration": 2083,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2413,
                                                                        "name": "Identifier",
                                                                        "src": "6872:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2392,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2414,
                                                                        "name": "Identifier",
                                                                        "src": "6881:11:3"
                                                                    }
                                                                ],
                                                                "id": 2415,
                                                                "name": "IndexAccess",
                                                                "src": "6872:21:3"
                                                            }
                                                        ],
                                                        "id": 2416,
                                                        "name": "MemberAccess",
                                                        "src": "6872:33:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "underwriter",
                                                            "referencedDeclaration": 2085,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2417,
                                                                        "name": "Identifier",
                                                                        "src": "6919:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2392,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2418,
                                                                        "name": "Identifier",
                                                                        "src": "6928:11:3"
                                                                    }
                                                                ],
                                                                "id": 2419,
                                                                "name": "IndexAccess",
                                                                "src": "6919:21:3"
                                                            }
                                                        ],
                                                        "id": 2420,
                                                        "name": "MemberAccess",
                                                        "src": "6919:33:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "underwriterRiskRating",
                                                            "referencedDeclaration": 2087,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2421,
                                                                        "name": "Identifier",
                                                                        "src": "6966:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2392,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2422,
                                                                        "name": "Identifier",
                                                                        "src": "6975:11:3"
                                                                    }
                                                                ],
                                                                "id": 2423,
                                                                "name": "IndexAccess",
                                                                "src": "6966:21:3"
                                                            }
                                                        ],
                                                        "id": 2424,
                                                        "name": "MemberAccess",
                                                        "src": "6966:43:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContract",
                                                            "referencedDeclaration": 2089,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2425,
                                                                        "name": "Identifier",
                                                                        "src": "7023:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2392,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2426,
                                                                        "name": "Identifier",
                                                                        "src": "7032:11:3"
                                                                    }
                                                                ],
                                                                "id": 2427,
                                                                "name": "IndexAccess",
                                                                "src": "7023:21:3"
                                                            }
                                                        ],
                                                        "id": 2428,
                                                        "name": "MemberAccess",
                                                        "src": "7023:35:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContractParameters",
                                                            "referencedDeclaration": 2091,
                                                            "type": "bytes32"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2429,
                                                                        "name": "Identifier",
                                                                        "src": "7072:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2392,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2430,
                                                                        "name": "Identifier",
                                                                        "src": "7081:11:3"
                                                                    }
                                                                ],
                                                                "id": 2431,
                                                                "name": "IndexAccess",
                                                                "src": "7072:21:3"
                                                            }
                                                        ],
                                                        "id": 2432,
                                                        "name": "MemberAccess",
                                                        "src": "7072:45:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "issuanceBlockTimestamp",
                                                            "referencedDeclaration": 2093,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2433,
                                                                        "name": "Identifier",
                                                                        "src": "7131:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2392,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2434,
                                                                        "name": "Identifier",
                                                                        "src": "7140:11:3"
                                                                    }
                                                                ],
                                                                "id": 2435,
                                                                "name": "IndexAccess",
                                                                "src": "7131:21:3"
                                                            }
                                                        ],
                                                        "id": 2436,
                                                        "name": "MemberAccess",
                                                        "src": "7131:44:3"
                                                    }
                                                ],
                                                "id": 2437,
                                                "name": "TupleExpression",
                                                "src": "6815:370:3"
                                            }
                                        ],
                                        "id": 2438,
                                        "name": "Return",
                                        "src": "6808:377:3"
                                    }
                                ],
                                "id": 2439,
                                "name": "Block",
                                "src": "6798:394:3"
                            }
                        ],
                        "id": 2440,
                        "name": "FunctionDefinition",
                        "src": "6659:533:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "getBeneficiary",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2456,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2441,
                                                "name": "ElementaryTypeName",
                                                "src": "7289:7:3"
                                            }
                                        ],
                                        "id": 2442,
                                        "name": "VariableDeclaration",
                                        "src": "7289:19:3"
                                    }
                                ],
                                "id": 2443,
                                "name": "ParameterList",
                                "src": "7288:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2456,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2447,
                                                "name": "ElementaryTypeName",
                                                "src": "7391:7:3"
                                            }
                                        ],
                                        "id": 2448,
                                        "name": "VariableDeclaration",
                                        "src": "7391:7:3"
                                    }
                                ],
                                "id": 2449,
                                "name": "ParameterList",
                                "src": "7390:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2171,
                                            "type": "modifier (bytes32)",
                                            "value": "onlyExtantEntry"
                                        },
                                        "id": 2444,
                                        "name": "Identifier",
                                        "src": "7346:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2442,
                                            "type": "bytes32",
                                            "value": "agreementId"
                                        },
                                        "id": 2445,
                                        "name": "Identifier",
                                        "src": "7362:11:3"
                                    }
                                ],
                                "id": 2446,
                                "name": "ModifierInvocation",
                                "src": "7346:28:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2449
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "beneficiary",
                                                    "referencedDeclaration": 2083,
                                                    "type": "address"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct DebtRegistry.Entry storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2098,
                                                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                    "value": "registry"
                                                                },
                                                                "id": 2450,
                                                                "name": "Identifier",
                                                                "src": "7421:8:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2442,
                                                                    "type": "bytes32",
                                                                    "value": "agreementId"
                                                                },
                                                                "id": 2451,
                                                                "name": "Identifier",
                                                                "src": "7430:11:3"
                                                            }
                                                        ],
                                                        "id": 2452,
                                                        "name": "IndexAccess",
                                                        "src": "7421:21:3"
                                                    }
                                                ],
                                                "id": 2453,
                                                "name": "MemberAccess",
                                                "src": "7421:33:3"
                                            }
                                        ],
                                        "id": 2454,
                                        "name": "Return",
                                        "src": "7414:40:3"
                                    }
                                ],
                                "id": 2455,
                                "name": "Block",
                                "src": "7404:57:3"
                            }
                        ],
                        "id": 2456,
                        "name": "FunctionDefinition",
                        "src": "7265:196:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "getTermsContract",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2472,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2457,
                                                "name": "ElementaryTypeName",
                                                "src": "7571:7:3"
                                            }
                                        ],
                                        "id": 2458,
                                        "name": "VariableDeclaration",
                                        "src": "7571:19:3"
                                    }
                                ],
                                "id": 2459,
                                "name": "ParameterList",
                                "src": "7570:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2472,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2463,
                                                "name": "ElementaryTypeName",
                                                "src": "7674:7:3"
                                            }
                                        ],
                                        "id": 2464,
                                        "name": "VariableDeclaration",
                                        "src": "7674:7:3"
                                    }
                                ],
                                "id": 2465,
                                "name": "ParameterList",
                                "src": "7673:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2171,
                                            "type": "modifier (bytes32)",
                                            "value": "onlyExtantEntry"
                                        },
                                        "id": 2460,
                                        "name": "Identifier",
                                        "src": "7628:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2458,
                                            "type": "bytes32",
                                            "value": "agreementId"
                                        },
                                        "id": 2461,
                                        "name": "Identifier",
                                        "src": "7644:11:3"
                                    }
                                ],
                                "id": 2462,
                                "name": "ModifierInvocation",
                                "src": "7628:28:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2465
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "termsContract",
                                                    "referencedDeclaration": 2089,
                                                    "type": "address"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct DebtRegistry.Entry storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2098,
                                                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                    "value": "registry"
                                                                },
                                                                "id": 2466,
                                                                "name": "Identifier",
                                                                "src": "7704:8:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2458,
                                                                    "type": "bytes32",
                                                                    "value": "agreementId"
                                                                },
                                                                "id": 2467,
                                                                "name": "Identifier",
                                                                "src": "7713:11:3"
                                                            }
                                                        ],
                                                        "id": 2468,
                                                        "name": "IndexAccess",
                                                        "src": "7704:21:3"
                                                    }
                                                ],
                                                "id": 2469,
                                                "name": "MemberAccess",
                                                "src": "7704:35:3"
                                            }
                                        ],
                                        "id": 2470,
                                        "name": "Return",
                                        "src": "7697:42:3"
                                    }
                                ],
                                "id": 2471,
                                "name": "Block",
                                "src": "7687:59:3"
                            }
                        ],
                        "id": 2472,
                        "name": "FunctionDefinition",
                        "src": "7545:201:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "getTermsContractParameters",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2488,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2473,
                                                "name": "ElementaryTypeName",
                                                "src": "7869:7:3"
                                            }
                                        ],
                                        "id": 2474,
                                        "name": "VariableDeclaration",
                                        "src": "7869:19:3"
                                    }
                                ],
                                "id": 2475,
                                "name": "ParameterList",
                                "src": "7868:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2488,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2479,
                                                "name": "ElementaryTypeName",
                                                "src": "7972:7:3"
                                            }
                                        ],
                                        "id": 2480,
                                        "name": "VariableDeclaration",
                                        "src": "7972:7:3"
                                    }
                                ],
                                "id": 2481,
                                "name": "ParameterList",
                                "src": "7971:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2171,
                                            "type": "modifier (bytes32)",
                                            "value": "onlyExtantEntry"
                                        },
                                        "id": 2476,
                                        "name": "Identifier",
                                        "src": "7926:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2474,
                                            "type": "bytes32",
                                            "value": "agreementId"
                                        },
                                        "id": 2477,
                                        "name": "Identifier",
                                        "src": "7942:11:3"
                                    }
                                ],
                                "id": 2478,
                                "name": "ModifierInvocation",
                                "src": "7926:28:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2481
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "termsContractParameters",
                                                    "referencedDeclaration": 2091,
                                                    "type": "bytes32"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct DebtRegistry.Entry storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2098,
                                                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                    "value": "registry"
                                                                },
                                                                "id": 2482,
                                                                "name": "Identifier",
                                                                "src": "8002:8:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2474,
                                                                    "type": "bytes32",
                                                                    "value": "agreementId"
                                                                },
                                                                "id": 2483,
                                                                "name": "Identifier",
                                                                "src": "8011:11:3"
                                                            }
                                                        ],
                                                        "id": 2484,
                                                        "name": "IndexAccess",
                                                        "src": "8002:21:3"
                                                    }
                                                ],
                                                "id": 2485,
                                                "name": "MemberAccess",
                                                "src": "8002:45:3"
                                            }
                                        ],
                                        "id": 2486,
                                        "name": "Return",
                                        "src": "7995:52:3"
                                    }
                                ],
                                "id": 2487,
                                "name": "Block",
                                "src": "7985:69:3"
                            }
                        ],
                        "id": 2488,
                        "name": "FunctionDefinition",
                        "src": "7833:221:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "getTerms",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2511,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2489,
                                                "name": "ElementaryTypeName",
                                                "src": "8197:7:3"
                                            }
                                        ],
                                        "id": 2490,
                                        "name": "VariableDeclaration",
                                        "src": "8197:19:3"
                                    }
                                ],
                                "id": 2491,
                                "name": "ParameterList",
                                "src": "8196:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2511,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2495,
                                                "name": "ElementaryTypeName",
                                                "src": "8299:7:3"
                                            }
                                        ],
                                        "id": 2496,
                                        "name": "VariableDeclaration",
                                        "src": "8299:7:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2511,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2497,
                                                "name": "ElementaryTypeName",
                                                "src": "8308:7:3"
                                            }
                                        ],
                                        "id": 2498,
                                        "name": "VariableDeclaration",
                                        "src": "8308:7:3"
                                    }
                                ],
                                "id": 2499,
                                "name": "ParameterList",
                                "src": "8298:18:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2171,
                                            "type": "modifier (bytes32)",
                                            "value": "onlyExtantEntry"
                                        },
                                        "id": 2492,
                                        "name": "Identifier",
                                        "src": "8254:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2490,
                                            "type": "bytes32",
                                            "value": "agreementId"
                                        },
                                        "id": 2493,
                                        "name": "Identifier",
                                        "src": "8270:11:3"
                                    }
                                ],
                                "id": 2494,
                                "name": "ModifierInvocation",
                                "src": "8254:28:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2499
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "tuple(address,bytes32)"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContract",
                                                            "referencedDeclaration": 2089,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2500,
                                                                        "name": "Identifier",
                                                                        "src": "8352:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2490,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2501,
                                                                        "name": "Identifier",
                                                                        "src": "8361:11:3"
                                                                    }
                                                                ],
                                                                "id": 2502,
                                                                "name": "IndexAccess",
                                                                "src": "8352:21:3"
                                                            }
                                                        ],
                                                        "id": 2503,
                                                        "name": "MemberAccess",
                                                        "src": "8352:35:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContractParameters",
                                                            "referencedDeclaration": 2091,
                                                            "type": "bytes32"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct DebtRegistry.Entry storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2098,
                                                                            "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                            "value": "registry"
                                                                        },
                                                                        "id": 2504,
                                                                        "name": "Identifier",
                                                                        "src": "8401:8:3"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2490,
                                                                            "type": "bytes32",
                                                                            "value": "agreementId"
                                                                        },
                                                                        "id": 2505,
                                                                        "name": "Identifier",
                                                                        "src": "8410:11:3"
                                                                    }
                                                                ],
                                                                "id": 2506,
                                                                "name": "IndexAccess",
                                                                "src": "8401:21:3"
                                                            }
                                                        ],
                                                        "id": 2507,
                                                        "name": "MemberAccess",
                                                        "src": "8401:45:3"
                                                    }
                                                ],
                                                "id": 2508,
                                                "name": "TupleExpression",
                                                "src": "8338:118:3"
                                            }
                                        ],
                                        "id": 2509,
                                        "name": "Return",
                                        "src": "8331:125:3"
                                    }
                                ],
                                "id": 2510,
                                "name": "Block",
                                "src": "8321:142:3"
                            }
                        ],
                        "id": 2511,
                        "name": "FunctionDefinition",
                        "src": "8179:284:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "getIssuanceBlockTimestamp",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2527,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2512,
                                                "name": "ElementaryTypeName",
                                                "src": "8600:7:3"
                                            }
                                        ],
                                        "id": 2513,
                                        "name": "VariableDeclaration",
                                        "src": "8600:19:3"
                                    }
                                ],
                                "id": 2514,
                                "name": "ParameterList",
                                "src": "8599:21:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "timestamp",
                                            "scope": 2527,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2518,
                                                "name": "ElementaryTypeName",
                                                "src": "8703:4:3"
                                            }
                                        ],
                                        "id": 2519,
                                        "name": "VariableDeclaration",
                                        "src": "8703:14:3"
                                    }
                                ],
                                "id": 2520,
                                "name": "ParameterList",
                                "src": "8702:16:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2171,
                                            "type": "modifier (bytes32)",
                                            "value": "onlyExtantEntry"
                                        },
                                        "id": 2515,
                                        "name": "Identifier",
                                        "src": "8657:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2513,
                                            "type": "bytes32",
                                            "value": "agreementId"
                                        },
                                        "id": 2516,
                                        "name": "Identifier",
                                        "src": "8673:11:3"
                                    }
                                ],
                                "id": 2517,
                                "name": "ModifierInvocation",
                                "src": "8657:28:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2520
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "issuanceBlockTimestamp",
                                                    "referencedDeclaration": 2093,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct DebtRegistry.Entry storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2098,
                                                                    "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                                                    "value": "registry"
                                                                },
                                                                "id": 2521,
                                                                "name": "Identifier",
                                                                "src": "8740:8:3"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2513,
                                                                    "type": "bytes32",
                                                                    "value": "agreementId"
                                                                },
                                                                "id": 2522,
                                                                "name": "Identifier",
                                                                "src": "8749:11:3"
                                                            }
                                                        ],
                                                        "id": 2523,
                                                        "name": "IndexAccess",
                                                        "src": "8740:21:3"
                                                    }
                                                ],
                                                "id": 2524,
                                                "name": "MemberAccess",
                                                "src": "8740:44:3"
                                            }
                                        ],
                                        "id": 2525,
                                        "name": "Return",
                                        "src": "8733:51:3"
                                    }
                                ],
                                "id": 2526,
                                "name": "Block",
                                "src": "8723:68:3"
                            }
                        ],
                        "id": 2527,
                        "name": "FunctionDefinition",
                        "src": "8565:226:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "getAuthorizedInsertAgents",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2528,
                                "name": "ParameterList",
                                "src": "8919:2:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2538,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address[] memory",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "length": null,
                                                    "type": "address[] storage pointer"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "address",
                                                            "type": "address"
                                                        },
                                                        "id": 2529,
                                                        "name": "ElementaryTypeName",
                                                        "src": "8966:7:3"
                                                    }
                                                ],
                                                "id": 2530,
                                                "name": "ArrayTypeName",
                                                "src": "8966:9:3"
                                            }
                                        ],
                                        "id": 2531,
                                        "name": "VariableDeclaration",
                                        "src": "8966:9:3"
                                    }
                                ],
                                "id": 2532,
                                "name": "ParameterList",
                                "src": "8965:11:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2532
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        null
                                                    ],
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "address[] memory",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                null
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "getAuthorizedAgents",
                                                            "referencedDeclaration": 4720,
                                                            "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2105,
                                                                    "type": "struct PermissionsLib.Permissions storage ref",
                                                                    "value": "entryInsertPermissions"
                                                                },
                                                                "id": 2533,
                                                                "name": "Identifier",
                                                                "src": "8998:22:3"
                                                            }
                                                        ],
                                                        "id": 2534,
                                                        "name": "MemberAccess",
                                                        "src": "8998:42:3"
                                                    }
                                                ],
                                                "id": 2535,
                                                "name": "FunctionCall",
                                                "src": "8998:44:3"
                                            }
                                        ],
                                        "id": 2536,
                                        "name": "Return",
                                        "src": "8991:51:3"
                                    }
                                ],
                                "id": 2537,
                                "name": "Block",
                                "src": "8981:68:3"
                            }
                        ],
                        "id": 2538,
                        "name": "FunctionDefinition",
                        "src": "8885:164:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "getAuthorizedEditAgents",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2539,
                                "name": "ParameterList",
                                "src": "9186:2:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2549,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address[] memory",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "length": null,
                                                    "type": "address[] storage pointer"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "address",
                                                            "type": "address"
                                                        },
                                                        "id": 2540,
                                                        "name": "ElementaryTypeName",
                                                        "src": "9233:7:3"
                                                    }
                                                ],
                                                "id": 2541,
                                                "name": "ArrayTypeName",
                                                "src": "9233:9:3"
                                            }
                                        ],
                                        "id": 2542,
                                        "name": "VariableDeclaration",
                                        "src": "9233:9:3"
                                    }
                                ],
                                "id": 2543,
                                "name": "ParameterList",
                                "src": "9232:11:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2543
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        null
                                                    ],
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "address[] memory",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                null
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "getAuthorizedAgents",
                                                            "referencedDeclaration": 4720,
                                                            "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2107,
                                                                    "type": "struct PermissionsLib.Permissions storage ref",
                                                                    "value": "entryEditPermissions"
                                                                },
                                                                "id": 2544,
                                                                "name": "Identifier",
                                                                "src": "9265:20:3"
                                                            }
                                                        ],
                                                        "id": 2545,
                                                        "name": "MemberAccess",
                                                        "src": "9265:40:3"
                                                    }
                                                ],
                                                "id": 2546,
                                                "name": "FunctionCall",
                                                "src": "9265:42:3"
                                            }
                                        ],
                                        "id": 2547,
                                        "name": "Return",
                                        "src": "9258:49:3"
                                    }
                                ],
                                "id": 2548,
                                "name": "Block",
                                "src": "9248:66:3"
                            }
                        ],
                        "id": 2549,
                        "name": "FunctionDefinition",
                        "src": "9154:160:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "getDebtorsDebts",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "debtor",
                                            "scope": 2562,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2550,
                                                "name": "ElementaryTypeName",
                                                "src": "9482:7:3"
                                            }
                                        ],
                                        "id": 2551,
                                        "name": "VariableDeclaration",
                                        "src": "9482:14:3"
                                    }
                                ],
                                "id": 2552,
                                "name": "ParameterList",
                                "src": "9481:16:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2562,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32[] memory",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "length": null,
                                                    "type": "bytes32[] storage pointer"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "bytes32",
                                                            "type": "bytes32"
                                                        },
                                                        "id": 2553,
                                                        "name": "ElementaryTypeName",
                                                        "src": "9542:7:3"
                                                    }
                                                ],
                                                "id": 2554,
                                                "name": "ArrayTypeName",
                                                "src": "9542:9:3"
                                            }
                                        ],
                                        "id": 2555,
                                        "name": "VariableDeclaration",
                                        "src": "9542:9:3"
                                    }
                                ],
                                "id": 2556,
                                "name": "ParameterList",
                                "src": "9541:11:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2556
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2103,
                                                            "type": "mapping(address => bytes32[] storage ref)",
                                                            "value": "debtorToDebts"
                                                        },
                                                        "id": 2557,
                                                        "name": "Identifier",
                                                        "src": "9574:13:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2551,
                                                            "type": "address",
                                                            "value": "debtor"
                                                        },
                                                        "id": 2558,
                                                        "name": "Identifier",
                                                        "src": "9588:6:3"
                                                    }
                                                ],
                                                "id": 2559,
                                                "name": "IndexAccess",
                                                "src": "9574:21:3"
                                            }
                                        ],
                                        "id": 2560,
                                        "name": "Return",
                                        "src": "9567:28:3"
                                    }
                                ],
                                "id": 2561,
                                "name": "Block",
                                "src": "9557:45:3"
                            }
                        ],
                        "id": 2562,
                        "name": "FunctionDefinition",
                        "src": "9457:145:3"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "_getAgreementId",
                            "payable": false,
                            "scope": 2590,
                            "stateMutability": "pure",
                            "superFunction": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_entry",
                                            "scope": 2589,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "struct DebtRegistry.Entry memory",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "contractScope": null,
                                                    "name": "Entry",
                                                    "referencedDeclaration": 2094,
                                                    "type": "struct DebtRegistry.Entry storage pointer"
                                                },
                                                "id": 2563,
                                                "name": "UserDefinedTypeName",
                                                "src": "9753:5:3"
                                            }
                                        ],
                                        "id": 2564,
                                        "name": "VariableDeclaration",
                                        "src": "9753:12:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_debtor",
                                            "scope": 2589,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2565,
                                                "name": "ElementaryTypeName",
                                                "src": "9767:7:3"
                                            }
                                        ],
                                        "id": 2566,
                                        "name": "VariableDeclaration",
                                        "src": "9767:15:3"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_salt",
                                            "scope": 2589,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2567,
                                                "name": "ElementaryTypeName",
                                                "src": "9784:4:3"
                                            }
                                        ],
                                        "id": 2568,
                                        "name": "VariableDeclaration",
                                        "src": "9784:10:3"
                                    }
                                ],
                                "id": 2569,
                                "name": "ParameterList",
                                "src": "9752:43:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 2589,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2570,
                                                "name": "ElementaryTypeName",
                                                "src": "9842:7:3"
                                            }
                                        ],
                                        "id": 2571,
                                        "name": "VariableDeclaration",
                                        "src": "9842:7:3"
                                    }
                                ],
                                "id": 2572,
                                "name": "ParameterList",
                                "src": "9841:9:3"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2572
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "bytes32",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 10494,
                                                            "type": "function () pure returns (bytes32)",
                                                            "value": "keccak256"
                                                        },
                                                        "id": 2573,
                                                        "name": "Identifier",
                                                        "src": "9872:9:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "version",
                                                            "referencedDeclaration": 2081,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2564,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "_entry"
                                                                },
                                                                "id": 2574,
                                                                "name": "Identifier",
                                                                "src": "9895:6:3"
                                                            }
                                                        ],
                                                        "id": 2575,
                                                        "name": "MemberAccess",
                                                        "src": "9895:14:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2566,
                                                            "type": "address",
                                                            "value": "_debtor"
                                                        },
                                                        "id": 2576,
                                                        "name": "Identifier",
                                                        "src": "9923:7:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "underwriter",
                                                            "referencedDeclaration": 2085,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2564,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "_entry"
                                                                },
                                                                "id": 2577,
                                                                "name": "Identifier",
                                                                "src": "9944:6:3"
                                                            }
                                                        ],
                                                        "id": 2578,
                                                        "name": "MemberAccess",
                                                        "src": "9944:18:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "underwriterRiskRating",
                                                            "referencedDeclaration": 2087,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2564,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "_entry"
                                                                },
                                                                "id": 2579,
                                                                "name": "Identifier",
                                                                "src": "9976:6:3"
                                                            }
                                                        ],
                                                        "id": 2580,
                                                        "name": "MemberAccess",
                                                        "src": "9976:28:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContract",
                                                            "referencedDeclaration": 2089,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2564,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "_entry"
                                                                },
                                                                "id": 2581,
                                                                "name": "Identifier",
                                                                "src": "10018:6:3"
                                                            }
                                                        ],
                                                        "id": 2582,
                                                        "name": "MemberAccess",
                                                        "src": "10018:20:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "termsContractParameters",
                                                            "referencedDeclaration": 2091,
                                                            "type": "bytes32"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2564,
                                                                    "type": "struct DebtRegistry.Entry memory",
                                                                    "value": "_entry"
                                                                },
                                                                "id": 2583,
                                                                "name": "Identifier",
                                                                "src": "10052:6:3"
                                                            }
                                                        ],
                                                        "id": 2584,
                                                        "name": "MemberAccess",
                                                        "src": "10052:30:3"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2568,
                                                            "type": "uint256",
                                                            "value": "_salt"
                                                        },
                                                        "id": 2585,
                                                        "name": "Identifier",
                                                        "src": "10096:5:3"
                                                    }
                                                ],
                                                "id": 2586,
                                                "name": "FunctionCall",
                                                "src": "9872:239:3"
                                            }
                                        ],
                                        "id": 2587,
                                        "name": "Return",
                                        "src": "9865:246:3"
                                    }
                                ],
                                "id": 2588,
                                "name": "Block",
                                "src": "9855:263:3"
                            }
                        ],
                        "id": 2589,
                        "name": "FunctionDefinition",
                        "src": "9728:390:3"
                    }
                ],
                "id": 2590,
                "name": "ContractDefinition",
                "src": "1124:8996:3"
            }
        ],
        "id": 2591,
        "name": "SourceUnit",
        "src": "584:9537:3"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
    },
    "networks": {
        "1": {
            "events": {
                "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "beneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "underwriter",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "underwriterRiskRating",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "termsContract",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "termsContractParameters",
                            "type": "bytes32"
                        }
                    ],
                    "name": "LogInsertEntry",
                    "type": "event"
                },
                "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "previousBeneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newBeneficiary",
                            "type": "address"
                        }
                    ],
                    "name": "LogModifyEntryBeneficiary",
                    "type": "event"
                },
                "0x3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogAddAuthorizedInsertAgent",
                    "type": "event"
                },
                "0x1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogAddAuthorizedEditAgent",
                    "type": "event"
                },
                "0xc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b12": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogRevokeInsertAgentAuthorization",
                    "type": "event"
                },
                "0xd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af921": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogRevokeEditAgentAuthorization",
                    "type": "event"
                },
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Pause",
                    "type": "event"
                },
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Unpause",
                    "type": "event"
                },
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agent",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "callingContext",
                            "type": "string"
                        }
                    ],
                    "name": "Authorized",
                    "type": "event"
                },
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agent",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "callingContext",
                            "type": "string"
                        }
                    ],
                    "name": "AuthorizationRevoked",
                    "type": "event"
                }
            },
            "links": {},
            "address": "0x4e0f2b97307ad60b741f993c052733acc1ea5811"
        },
        "42": {
            "events": {
                "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "issuanceHash",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "beneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "underwriter",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "underwriterRiskRating",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "termsContract",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "termsContractParameters",
                            "type": "bytes32"
                        }
                    ],
                    "name": "LogInsertEntry",
                    "type": "event"
                },
                "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "issuanceHash",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "previousBeneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newBeneficiary",
                            "type": "address"
                        }
                    ],
                    "name": "LogModifyEntryBeneficiary",
                    "type": "event"
                },
                "0x3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogAddAuthorizedInsertAgent",
                    "type": "event"
                },
                "0x1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogAddAuthorizedEditAgent",
                    "type": "event"
                },
                "0xc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b12": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogRevokeInsertAgentAuthorization",
                    "type": "event"
                },
                "0xd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af921": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogRevokeEditAgentAuthorization",
                    "type": "event"
                },
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Pause",
                    "type": "event"
                },
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Unpause",
                    "type": "event"
                },
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agent",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "callingContext",
                            "type": "string"
                        }
                    ],
                    "name": "Authorized",
                    "type": "event"
                },
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agent",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "callingContext",
                            "type": "string"
                        }
                    ],
                    "name": "AuthorizationRevoked",
                    "type": "event"
                }
            },
            "links": {},
            "address": "0x9662d6cae0e6914a388cb96c1c161cc4d12c3d7a"
        },
        "70": {
            "events": {
                "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "beneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "underwriter",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "underwriterRiskRating",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "termsContract",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "termsContractParameters",
                            "type": "bytes32"
                        }
                    ],
                    "name": "LogInsertEntry",
                    "type": "event"
                },
                "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "previousBeneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newBeneficiary",
                            "type": "address"
                        }
                    ],
                    "name": "LogModifyEntryBeneficiary",
                    "type": "event"
                },
                "0x3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogAddAuthorizedInsertAgent",
                    "type": "event"
                },
                "0x1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogAddAuthorizedEditAgent",
                    "type": "event"
                },
                "0xc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b12": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogRevokeInsertAgentAuthorization",
                    "type": "event"
                },
                "0xd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af921": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "agent",
                            "type": "address"
                        }
                    ],
                    "name": "LogRevokeEditAgentAuthorization",
                    "type": "event"
                },
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Pause",
                    "type": "event"
                },
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Unpause",
                    "type": "event"
                },
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agent",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "callingContext",
                            "type": "string"
                        }
                    ],
                    "name": "Authorized",
                    "type": "event"
                },
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agent",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "callingContext",
                            "type": "string"
                        }
                    ],
                    "name": "AuthorizationRevoked",
                    "type": "event"
                }
            },
            "links": {},
            "address": "0x1d02b56e6c96f7794151f9113f5329cdb79d10ff"
        }
    },
    "schemaVersion": "1.0.1",
    "updatedAt": "2018-07-02T23:10:15.222Z"
};
//# sourceMappingURL=DebtRegistry.js.map