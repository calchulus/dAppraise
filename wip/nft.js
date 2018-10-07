
/**
 * Define an address for a debtor who will own the collateral on the blockchain.
 * Replace this with an address that you own, such as your MetaMask account address.
 */
const DEBTOR_ADDRESS = "0x1ea1992138cf9f0de544ba6855e1361207797428";
// Define some amount of max gas to use in the transactions.
const MAX_GAS = 4712388;
// We use the two above variables to define default transaction arguments.
const TX_DEFAULTS = {
    from: DEBTOR_ADDRESS,
    gas: MAX_GAS,
};

console.log("Loading the ERC721 contract...");
@dharmaprotocol.contracts.loadMintableERC721ContractAsync(TX_DEFAULTS).then(async (erc721) => {
  // ...
    
     // Find out the number of tokens that have been minted thus far.
    const numTokens = await erc721.totalSupply.callAsync();
    console.log(
        `The ERC721 contract has loaded. There have been ${numTokens} tokens minted so far.`
    );
    // We can use the number of tokens as the token ID, which will be unique as
    // long as we increment it by one each time we mint a token. It is also okay to use
    // a randomly generated token ID.
    const tokenId = numTokens;
    console.log(
        `Attempting to create token with ID: ${tokenId}. Please approve the transaction.`
    );
    // Mint a new token and transfer it to the debtor's address defined above.
    let txHash = await erc721.mint.sendTransactionAsync(DEBTOR_ADDRESS, tokenId);

    console.log("Waiting for the transaction to be mined. This may take a while...");
    // Wait for this transaction to be mined before proceeding to the next step.
        await dharma.blockchain.awaitTransactionMinedAsync(txHash);
    
        // Confirm that it was created.
    const tokenExists = await erc721.exists.callAsync(tokenId);

    if (!tokenExists) {
        throw new Error("Something went wrong and the token doesn't exist!");
    };
});
                                                                   
      /*
     * Once this has completed, the debtor will have an ERC721 token that they can use
     * for collateral for a loan on Dharma Protocol.
     *
     * Log the ID of the token, and save it so we can use it when creating the debt order.
     */
    console.log(`New token minted with ID: ${tokenId.toString()}`);