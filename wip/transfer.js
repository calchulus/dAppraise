// Import BigNumber.js version 5.0.0, which we will use when posting numbers to the blockchain.
import * as BigNumber from "bignumber.js";


const DEBTOR_ADDRESS = "0x601e6e7711b9e3b1b20e1e8016038a32dfc86ddd";
// Define some amount of max gas to use in the transactions.
const MAX_GAS = 4712388;
// We use the two above variables to define default transaction arguments.
const TX_DEFAULTS = {
    from: DEBTOR_ADDRESS,
    gas: MAX_GAS,
};

// The id of the token we'll use.
const TOKEN_ID = new BigNumber(0);


// Load a deployed ERC721 contract that has the ability to mint tokens.
console.log("Loading the ERC721 contract...");
dharma.contracts.loadMintableERC721ContractAsync(TX_DEFAULTS).then(async (erc721) => {
  // ...
    
    
    // Load the contract that will hold this ERC721 token as collateral when order is filled.
console.log("Loading collateralizer contract...");
const collateralizerContract = await dharma.contracts.loadERC721CollateralizerAsync();
const collateralizerAddress = collateralizerContract.address;
    
        // We need to grant the collateralizer contract the ability to lock our ERC721
    // as collateral when the debt order is eventually filled.
    console.log(
        "Please approve the transaction to give the " +
        "collateralizer contract access to the collateral."
    );
    txHash = await erc721.approve.sendTransactionAsync(
        collateralizerAddress,
        TOKEN_ID,
    );

    // Wait for this transaction to be mined before checking the approvals are correct.
    console.log("Waiting for the transaction to be mined (may take a while)...");
    await dharma.blockchain.awaitTransactionMinedAsync(txHash);
    
    
      // Confirm that we have the correct approval.
    const approvedAddress = await erc721.getApproved.callAsync(TOKEN_ID);
    const collateralizerApproved = (approvedAddress === collateralizerAddress);

    if (!collateralizerApproved) {
        throw new Error(
            "Something went wrong and the collateralizer doesn't have approval yet!"
        );
    }
    console.log("The collateralizer has approval for collateralization!");
});

await loanRequest.signAsDebtor();

await loanRequest.signAsDebtor(debtorAddress);

const loanRequest = await LoanRequest.createAndSignAsDebtor(dharma, terms, debtorAddress);