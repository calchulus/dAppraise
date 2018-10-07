export declare const ContractRegistry: {
    "contractName": string;
    "abi": ({
        "constant": boolean;
        "inputs": any[];
        "name": string;
        "outputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
    } | {
        "constant": boolean;
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "name": string;
        "outputs": any[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
    } | {
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
    } | {
        "anonymous": boolean;
        "inputs": {
            "indexed": boolean;
            "name": string;
            "type": string;
        }[];
        "name": string;
        "type": string;
    })[];
    "bytecode": string;
    "deployedBytecode": string;
    "sourceMap": string;
    "deployedSourceMap": string;
    "source": string;
    "sourcePath": string;
    "ast": {
        "attributes": {
            "absolutePath": string;
            "exportedSymbols": {
                "ContractRegistry": number[];
            };
        };
        "children": ({
            "attributes": {
                "literals": string[];
            };
            "id": number;
            "name": string;
            "src": string;
        } | {
            "attributes": {
                "SourceUnit": number;
                "absolutePath": string;
                "file": string;
                "scope": number;
                "symbolAliases": any[];
                "unitAlias": string;
            };
            "id": number;
            "name": string;
            "src": string;
        } | {
            "attributes": {
                "contractDependencies": number[];
                "contractKind": string;
                "documentation": any;
                "fullyImplemented": boolean;
                "linearizedBaseContracts": number[];
                "name": string;
                "scope": number;
            };
            "children": ({
                "attributes": {
                    "arguments": any[];
                };
                "children": {
                    "attributes": {
                        "contractScope": any;
                        "name": string;
                        "referencedDeclaration": number;
                        "type": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                }[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "anonymous": boolean;
                    "name": string;
                };
                "children": {
                    "children": ({
                        "attributes": {
                            "constant": boolean;
                            "indexed": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "contractScope": any;
                                "name": string;
                                "referencedDeclaration": number;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    } | {
                        "attributes": {
                            "constant": boolean;
                            "indexed": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "name": string;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    })[];
                    "id": number;
                    "name": string;
                    "src": string;
                }[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "canonicalName": string;
                    "name": string;
                };
                "children": {
                    "attributes": {
                        "name": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                }[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "name": string;
                    "scope": number;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "type": string;
                    "value": any;
                    "visibility": string;
                };
                "children": {
                    "attributes": {
                        "contractScope": any;
                        "name": string;
                        "referencedDeclaration": number;
                        "type": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                }[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "implemented": boolean;
                    "isConstructor": boolean;
                    "modifiers": any[];
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": any;
                    "visibility": string;
                };
                "children": ({
                    "children": {
                        "attributes": {
                            "constant": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "name": string;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "parameters": any[];
                    };
                    "children": any[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": {
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "operator": string;
                                "type": string;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": any;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "type": string;
                                    "value": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "attributes": {
                                    "argumentTypes": any;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "isStructConstructorCall": boolean;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "type": string;
                                    "type_conversion": boolean;
                                };
                                "children": {
                                    "attributes": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "type": string;
                                        "value": string;
                                    };
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                })[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "implemented": boolean;
                    "isConstructor": boolean;
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": any;
                    "visibility": string;
                };
                "children": ({
                    "children": ({
                        "attributes": {
                            "constant": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "contractScope": any;
                                "name": string;
                                "referencedDeclaration": number;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    } | {
                        "attributes": {
                            "constant": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "name": string;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    })[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "parameters": any[];
                    };
                    "children": any[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "arguments": any[];
                    };
                    "children": {
                        "attributes": {
                            "argumentTypes": any;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "type": string;
                            "value": string;
                        };
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": ({
                        "attributes": {
                            "assignments": any[];
                            "initialValue": any;
                        };
                        "children": {
                            "attributes": {
                                "constant": boolean;
                                "name": string;
                                "scope": number;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "type": string;
                                "value": any;
                                "visibility": string;
                            };
                            "children": {
                                "attributes": {
                                    "name": string;
                                    "type": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            }[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    } | {
                        "children": ({
                            "attributes": {
                                "argumentTypes": any;
                                "commonType": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "operator": string;
                                "type": string;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": any;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "type": string;
                                    "value": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "attributes": {
                                    "argumentTypes": any;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "member_name": string;
                                    "referencedDeclaration": any;
                                    "type": string;
                                };
                                "children": {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "type": string;
                                        "value": string;
                                    };
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        } | {
                            "children": ({
                                "children": {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "operator": string;
                                        "type": string;
                                    };
                                    "children": ({
                                        "attributes": {
                                            "argumentTypes": any;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "isStructConstructorCall": boolean;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "type": string;
                                            "type_conversion": boolean;
                                        };
                                        "children": ({
                                            "attributes": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        })[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    })[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "children": {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "isStructConstructorCall": boolean;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "type": string;
                                        "type_conversion": boolean;
                                    };
                                    "children": {
                                        "attributes": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "children": {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "operator": string;
                                        "type": string;
                                    };
                                    "children": ({
                                        "attributes": {
                                            "argumentTypes": any;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "isStructConstructorCall": boolean;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "type": string;
                                            "type_conversion": boolean;
                                        };
                                        "children": {
                                            "attributes": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    })[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        } | {
                            "children": ({
                                "attributes": {
                                    "argumentTypes": any;
                                    "commonType": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "operator": string;
                                    "type": string;
                                };
                                "children": ({
                                    "attributes": {
                                        "argumentTypes": any;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "type": string;
                                        "value": string;
                                    };
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                } | {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "member_name": string;
                                        "referencedDeclaration": any;
                                        "type": string;
                                    };
                                    "children": {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                })[];
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "children": ({
                                    "children": {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "operator": string;
                                            "type": string;
                                        };
                                        "children": ({
                                            "attributes": {
                                                "argumentTypes": any;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "isStructConstructorCall": boolean;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "type": string;
                                                "type_conversion": boolean;
                                            };
                                            "children": ({
                                                "attributes": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            })[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        })[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                } | {
                                    "children": {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "isStructConstructorCall": boolean;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "type": string;
                                            "type_conversion": boolean;
                                        };
                                        "children": {
                                            "attributes": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                } | {
                                    "children": {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "operator": string;
                                            "type": string;
                                        };
                                        "children": ({
                                            "attributes": {
                                                "argumentTypes": any;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "isStructConstructorCall": boolean;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "type": string;
                                                "type_conversion": boolean;
                                            };
                                            "children": {
                                                "attributes": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        })[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                })[];
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "children": ({
                                    "attributes": {
                                        "argumentTypes": any;
                                        "commonType": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "operator": string;
                                        "type": string;
                                    };
                                    "children": ({
                                        "attributes": {
                                            "argumentTypes": any;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "member_name": string;
                                            "referencedDeclaration": any;
                                            "type": string;
                                        };
                                        "children": {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    })[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                } | {
                                    "children": ({
                                        "children": {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "operator": string;
                                                "type": string;
                                            };
                                            "children": ({
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "isStructConstructorCall": boolean;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "type": string;
                                                    "type_conversion": boolean;
                                                };
                                                "children": ({
                                                    "attributes": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                })[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            })[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "children": {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "isStructConstructorCall": boolean;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "type": string;
                                                "type_conversion": boolean;
                                            };
                                            "children": {
                                                "attributes": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "children": {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "operator": string;
                                                "type": string;
                                            };
                                            "children": ({
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "isStructConstructorCall": boolean;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "type": string;
                                                    "type_conversion": boolean;
                                                };
                                                "children": {
                                                    "attributes": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            })[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    })[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                } | {
                                    "children": ({
                                        "attributes": {
                                            "argumentTypes": any;
                                            "commonType": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "operator": string;
                                            "type": string;
                                        };
                                        "children": ({
                                            "attributes": {
                                                "argumentTypes": any;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "type": string;
                                                "value": string;
                                            };
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "attributes": {
                                                "argumentTypes": any;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "member_name": string;
                                                "referencedDeclaration": any;
                                                "type": string;
                                            };
                                            "children": {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        })[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "children": ({
                                            "children": {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "operator": string;
                                                    "type": string;
                                                };
                                                "children": ({
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "isStructConstructorCall": boolean;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "type": string;
                                                        "type_conversion": boolean;
                                                    };
                                                    "children": ({
                                                        "attributes": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    } | {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    })[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                })[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "children": {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "isStructConstructorCall": boolean;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "type": string;
                                                    "type_conversion": boolean;
                                                };
                                                "children": {
                                                    "attributes": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "children": {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "operator": string;
                                                    "type": string;
                                                };
                                                "children": ({
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "isStructConstructorCall": boolean;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "type": string;
                                                        "type_conversion": boolean;
                                                    };
                                                    "children": {
                                                        "attributes": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                })[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        })[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "children": ({
                                            "attributes": {
                                                "argumentTypes": any;
                                                "commonType": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "operator": string;
                                                "type": string;
                                            };
                                            "children": ({
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "type": string;
                                                    "value": string;
                                                };
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "member_name": string;
                                                    "referencedDeclaration": any;
                                                    "type": string;
                                                };
                                                "children": {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            })[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "children": ({
                                                "children": {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "operator": string;
                                                        "type": string;
                                                    };
                                                    "children": ({
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    } | {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "isStructConstructorCall": boolean;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "type": string;
                                                            "type_conversion": boolean;
                                                        };
                                                        "children": ({
                                                            "attributes": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "lValueRequested": boolean;
                                                                "type": string;
                                                                "value": string;
                                                            };
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        } | {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "type": string;
                                                                "value": string;
                                                            };
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        })[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    })[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "children": {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "isStructConstructorCall": boolean;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "type": string;
                                                        "type_conversion": boolean;
                                                    };
                                                    "children": {
                                                        "attributes": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "children": {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "operator": string;
                                                        "type": string;
                                                    };
                                                    "children": ({
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    } | {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "isStructConstructorCall": boolean;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "type": string;
                                                            "type_conversion": boolean;
                                                        };
                                                        "children": {
                                                            "attributes": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "type": string;
                                                                "value": string;
                                                            };
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    })[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            })[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        } | {
                                            "children": ({
                                                "attributes": {
                                                    "argumentTypes": any;
                                                    "commonType": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "operator": string;
                                                    "type": string;
                                                };
                                                "children": ({
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "type": string;
                                                        "value": string;
                                                    };
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "member_name": string;
                                                        "referencedDeclaration": any;
                                                        "type": string;
                                                    };
                                                    "children": {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                })[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "children": ({
                                                    "children": {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "operator": string;
                                                            "type": string;
                                                        };
                                                        "children": ({
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "type": string;
                                                                "value": string;
                                                            };
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        } | {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "isStructConstructorCall": boolean;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "type": string;
                                                                "type_conversion": boolean;
                                                            };
                                                            "children": ({
                                                                "attributes": {
                                                                    "argumentTypes": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    }[];
                                                                    "isConstant": boolean;
                                                                    "isLValue": boolean;
                                                                    "isPure": boolean;
                                                                    "lValueRequested": boolean;
                                                                    "type": string;
                                                                    "value": string;
                                                                };
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            } | {
                                                                "attributes": {
                                                                    "argumentTypes": any;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "type": string;
                                                                    "value": string;
                                                                };
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            })[];
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        })[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "children": {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "isStructConstructorCall": boolean;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "type": string;
                                                            "type_conversion": boolean;
                                                        };
                                                        "children": {
                                                            "attributes": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "type": string;
                                                                "value": string;
                                                            };
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "children": {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "operator": string;
                                                            "type": string;
                                                        };
                                                        "children": ({
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "type": string;
                                                                "value": string;
                                                            };
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        } | {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "isStructConstructorCall": boolean;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "type": string;
                                                                "type_conversion": boolean;
                                                            };
                                                            "children": {
                                                                "attributes": {
                                                                    "argumentTypes": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    }[];
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "type": string;
                                                                    "value": string;
                                                                };
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            }[];
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        })[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                })[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            } | {
                                                "children": ({
                                                    "attributes": {
                                                        "argumentTypes": any;
                                                        "commonType": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "operator": string;
                                                        "type": string;
                                                    };
                                                    "children": ({
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "type": string;
                                                            "value": string;
                                                        };
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    } | {
                                                        "attributes": {
                                                            "argumentTypes": any;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "member_name": string;
                                                            "referencedDeclaration": any;
                                                            "type": string;
                                                        };
                                                        "children": {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "type": string;
                                                                "value": string;
                                                            };
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    })[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "children": ({
                                                        "children": {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "lValueRequested": boolean;
                                                                "operator": string;
                                                                "type": string;
                                                            };
                                                            "children": ({
                                                                "attributes": {
                                                                    "argumentTypes": any;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "type": string;
                                                                    "value": string;
                                                                };
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            } | {
                                                                "attributes": {
                                                                    "argumentTypes": any;
                                                                    "isConstant": boolean;
                                                                    "isLValue": boolean;
                                                                    "isPure": boolean;
                                                                    "isStructConstructorCall": boolean;
                                                                    "lValueRequested": boolean;
                                                                    "names": any[];
                                                                    "type": string;
                                                                    "type_conversion": boolean;
                                                                };
                                                                "children": ({
                                                                    "attributes": {
                                                                        "argumentTypes": {
                                                                            "typeIdentifier": string;
                                                                            "typeString": string;
                                                                        }[];
                                                                        "isConstant": boolean;
                                                                        "isLValue": boolean;
                                                                        "isPure": boolean;
                                                                        "lValueRequested": boolean;
                                                                        "type": string;
                                                                        "value": string;
                                                                    };
                                                                    "id": number;
                                                                    "name": string;
                                                                    "src": string;
                                                                } | {
                                                                    "attributes": {
                                                                        "argumentTypes": any;
                                                                        "overloadedDeclarations": any[];
                                                                        "referencedDeclaration": number;
                                                                        "type": string;
                                                                        "value": string;
                                                                    };
                                                                    "id": number;
                                                                    "name": string;
                                                                    "src": string;
                                                                })[];
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            })[];
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    } | {
                                                        "children": {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "isStructConstructorCall": boolean;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "type": string;
                                                                "type_conversion": boolean;
                                                            };
                                                            "children": {
                                                                "attributes": {
                                                                    "argumentTypes": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    }[];
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "type": string;
                                                                    "value": string;
                                                                };
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            }[];
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    } | {
                                                        "children": {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "lValueRequested": boolean;
                                                                "operator": string;
                                                                "type": string;
                                                            };
                                                            "children": ({
                                                                "attributes": {
                                                                    "argumentTypes": any;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "type": string;
                                                                    "value": string;
                                                                };
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            } | {
                                                                "attributes": {
                                                                    "argumentTypes": any;
                                                                    "isConstant": boolean;
                                                                    "isLValue": boolean;
                                                                    "isPure": boolean;
                                                                    "isStructConstructorCall": boolean;
                                                                    "lValueRequested": boolean;
                                                                    "names": any[];
                                                                    "type": string;
                                                                    "type_conversion": boolean;
                                                                };
                                                                "children": {
                                                                    "attributes": {
                                                                        "argumentTypes": {
                                                                            "typeIdentifier": string;
                                                                            "typeString": string;
                                                                        }[];
                                                                        "overloadedDeclarations": any[];
                                                                        "referencedDeclaration": number;
                                                                        "type": string;
                                                                        "value": string;
                                                                    };
                                                                    "id": number;
                                                                    "name": string;
                                                                    "src": string;
                                                                }[];
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            })[];
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    })[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                } | {
                                                    "children": {
                                                        "children": {
                                                            "attributes": {
                                                                "argumentTypes": any;
                                                                "arguments": any[];
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "isStructConstructorCall": boolean;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "type": string;
                                                                "type_conversion": boolean;
                                                            };
                                                            "children": {
                                                                "attributes": {
                                                                    "argumentTypes": any[];
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "type": string;
                                                                    "value": string;
                                                                };
                                                                "id": number;
                                                                "name": string;
                                                                "src": string;
                                                            }[];
                                                            "id": number;
                                                            "name": string;
                                                            "src": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "src": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "src": string;
                                                })[];
                                                "id": number;
                                                "name": string;
                                                "src": string;
                                            })[];
                                            "id": number;
                                            "name": string;
                                            "src": string;
                                        })[];
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    })[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                })[];
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        })[];
                        "id": number;
                        "name": string;
                        "src": string;
                    } | {
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "isStructConstructorCall": boolean;
                                "lValueRequested": boolean;
                                "names": any[];
                                "type": string;
                                "type_conversion": boolean;
                            };
                            "children": {
                                "attributes": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "type": string;
                                    "value": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            }[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    })[];
                    "id": number;
                    "name": string;
                    "src": string;
                })[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "implemented": boolean;
                    "isConstructor": boolean;
                    "modifiers": any[];
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": any;
                    "visibility": string;
                };
                "children": ({
                    "children": {
                        "attributes": {
                            "constant": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "name": string;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "parameters": any[];
                    };
                    "children": any[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": {
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "isStructConstructorCall": boolean;
                                "lValueRequested": boolean;
                                "names": any[];
                                "type": string;
                                "type_conversion": boolean;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "type": string;
                                    "value": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "attributes": {
                                    "argumentTypes": any;
                                    "commonType": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "operator": string;
                                    "type": string;
                                };
                                "children": ({
                                    "attributes": {
                                        "argumentTypes": any;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "type": string;
                                        "value": string;
                                    };
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                } | {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "isStructConstructorCall": boolean;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "type": string;
                                        "type_conversion": boolean;
                                    };
                                    "children": ({
                                        "attributes": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    } | {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "hexvalue": string;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "subdenomination": any;
                                            "token": string;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    })[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                })[];
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                })[];
                "id": number;
                "name": string;
                "src": string;
            })[];
            "id": number;
            "name": string;
            "src": string;
        })[];
        "id": number;
        "name": string;
        "src": string;
    };
    "compiler": {
        "name": string;
        "version": string;
    };
    "networks": {
        "1": {
            "events": {
                "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
            };
            "links": {};
            "address": string;
        };
        "42": {
            "events": {
                "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
            };
            "links": {};
            "address": string;
        };
        "70": {
            "events": {
                "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
            };
            "links": {};
            "address": string;
        };
    };
    "schemaVersion": string;
    "updatedAt": string;
};