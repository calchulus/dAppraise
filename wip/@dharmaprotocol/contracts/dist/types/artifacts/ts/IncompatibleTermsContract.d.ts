export declare const IncompatibleTermsContract: {
    "contractName": string;
    "abi": {
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
    }[];
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
                "IncompatibleTermsContract": number[];
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
                "attributes": {
                    "constant": boolean;
                    "implemented": boolean;
                    "isConstructor": boolean;
                    "modifiers": any[];
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": number;
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
            "events": {};
            "links": {};
            "address": string;
        };
        "42": {
            "events": {};
            "links": {};
            "address": string;
        };
        "70": {
            "events": {};
            "links": {};
            "address": string;
        };
    };
    "schemaVersion": string;
    "updatedAt": string;
};
