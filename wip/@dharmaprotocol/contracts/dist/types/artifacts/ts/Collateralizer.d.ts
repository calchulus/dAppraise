export declare const Collateralizer: {
    "contractName": string;
    "abi": ({
        "constant": boolean;
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "name": string;
        "outputs": {
            "name": string;
            "type": string;
        }[];
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
                "Collateralizer": number[];
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
                "symbolAliases": {
                    "foreign": number;
                    "local": any;
                }[];
                "unitAlias": string;
            };
            "id": number;
            "name": string;
            "src": string;
        } | {
            "attributes": {
                "contractDependencies": number[];
                "contractKind": string;
                "documentation": string;
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
                "children": ({
                    "attributes": {
                        "contractScope": any;
                        "name": string;
                        "referencedDeclaration": number;
                        "type": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "name": string;
                        "type": string;
                    };
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
                        "type": string;
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
                    "constant": boolean;
                    "name": string;
                    "scope": number;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "type": string;
                    "visibility": string;
                };
                "children": ({
                    "attributes": {
                        "name": string;
                        "type": string;
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
                        "children": {
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
                        }[];
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
            } | {
                "attributes": {
                    "constant": boolean;
                    "name": string;
                    "scope": number;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "type": string;
                    "visibility": string;
                };
                "children": ({
                    "attributes": {
                        "name": string;
                        "type": string;
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
            } | {
                "attributes": {
                    "anonymous": boolean;
                    "name": string;
                };
                "children": {
                    "children": {
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
                    "name": string;
                    "visibility": string;
                };
                "children": ({
                    "attributes": {
                        "parameters": any[];
                    };
                    "children": any[];
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
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "member_name": string;
                                        "referencedDeclaration": number;
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
                                    "isConstant": boolean;
                                    "isInlineArray": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
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
                    } | {
                        "attributes": {
                            "assignments": number[];
                        };
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
                    } | {
                        "attributes": {
                            "assignments": number[];
                        };
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
                                            "member_name": string;
                                            "referencedDeclaration": number;
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
                                "lValueRequested": boolean;
                                "operator": string;
                                "type": string;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": any;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                                        "member_name": string;
                                        "referencedDeclaration": number;
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
                        "attributes": {
                            "functionReturnParameters": number;
                        };
                        "children": {
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
                                    "isConstant": boolean;
                                    "isInlineArray": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
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
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "member_name": string;
                                            "referencedDeclaration": number;
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
                                                "member_name": string;
                                                "referencedDeclaration": number;
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
                            "assignments": number[];
                        };
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
                        } | {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
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
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "operator": string;
                                "prefix": boolean;
                                "type": string;
                            };
                            "children": {
                                "attributes": {
                                    "argumentTypes": any;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                                        "member_name": string;
                                        "referencedDeclaration": number;
                                        "type": string;
                                    };
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
                                    "isConstant": boolean;
                                    "isInlineArray": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
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
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "member_name": string;
                                            "referencedDeclaration": number;
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
                                "prefix": boolean;
                                "type": string;
                            };
                            "children": {
                                "attributes": {
                                    "argumentTypes": any;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                            "assignments": number[];
                        };
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
                                    "member_name": string;
                                    "referencedDeclaration": number;
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
                                        "member_name": string;
                                        "referencedDeclaration": number;
                                        "type": string;
                                    };
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
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "member_name": string;
                                    "referencedDeclaration": number;
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
                    "modifiers": any[];
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": any;
                    "visibility": string;
                };
                "children": ({
                    "attributes": {
                        "parameters": any[];
                    };
                    "children": any[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
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
                                "length": any;
                                "type": string;
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
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": {
                        "attributes": {
                            "functionReturnParameters": number;
                        };
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
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "member_name": string;
                                    "referencedDeclaration": number;
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
                    "children": ({
                        "attributes": {
                            "assignments": number[];
                        };
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
                    } | {
                        "attributes": {
                            "assignments": number[];
                        };
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
                                "children": {
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
                            "functionReturnParameters": number;
                        };
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isInlineArray": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
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
                    "children": {
                        "attributes": {
                            "functionReturnParameters": number;
                        };
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
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "member_name": string;
                                    "referencedDeclaration": number;
                                    "type": string;
                                };
                                "children": {
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
                                }[];
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
                                        "member_name": string;
                                        "referencedDeclaration": number;
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
                    "modifiers": any[];
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
                    })[];
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
                                    "isConstant": boolean;
                                    "isInlineArray": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                                        "member_name": string;
                                        "referencedDeclaration": number;
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
                                "lValueRequested": boolean;
                                "operator": string;
                                "type": string;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": any;
                                    "isConstant": boolean;
                                    "isInlineArray": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
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
                    } | {
                        "attributes": {
                            "assignments": number[];
                        };
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
                                    "member_name": string;
                                    "referencedDeclaration": number;
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
                    } | {
                        "attributes": {
                            "functionReturnParameters": number;
                        };
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isInlineArray": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
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
                "0x38f12634ebefbe7f6767652aae05e220f95e0ca8ef8353c9c9c5ae439a592aec": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x2621540e2b91ca10330d6a7cbd6fb8cab2396f91c4935ad76b1183770819fa1f": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x50d195a4b80a950617a8e0e18ac9dd4c0236ac72d5e12355d881443823870d39": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0xa7719809501f9c6d300c1d70c740a513621190dadd4b70979ab7e111de840ad3": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x696a299b0518a440ebad835840fdd2ecb4d58b2531aebe60e92099ea662ade38": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": boolean;
                    "inputs": any[];
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
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
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
                "0x38f12634ebefbe7f6767652aae05e220f95e0ca8ef8353c9c9c5ae439a592aec": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x2621540e2b91ca10330d6a7cbd6fb8cab2396f91c4935ad76b1183770819fa1f": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x50d195a4b80a950617a8e0e18ac9dd4c0236ac72d5e12355d881443823870d39": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0xa7719809501f9c6d300c1d70c740a513621190dadd4b70979ab7e111de840ad3": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x696a299b0518a440ebad835840fdd2ecb4d58b2531aebe60e92099ea662ade38": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": boolean;
                    "inputs": any[];
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
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
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
                "0x38f12634ebefbe7f6767652aae05e220f95e0ca8ef8353c9c9c5ae439a592aec": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x2621540e2b91ca10330d6a7cbd6fb8cab2396f91c4935ad76b1183770819fa1f": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x50d195a4b80a950617a8e0e18ac9dd4c0236ac72d5e12355d881443823870d39": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": boolean;
                    "inputs": any[];
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
