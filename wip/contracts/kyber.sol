// Kyber ERC20 to ERC 20 token Template
// This is used for those who are looking to be an intermediary to swap between ERC20s to help bridge the difference in desired tokens for Alice and Bob


function swapTokenToToken (KyberNetworkProxyInterface _kyberNetworkProxy, ERC20 srcToken, uint srcQty, ERC20 destToken, address destAddress) public {

    uint minRate;

    //getExpectedRate returns expected rate and slippage rate
    //we use the slippage rate as the minRate
    (, minRate) = _kyberNetworkProxy.getExpectedRate(srcToken, destToken, srcQty);

    //check that the user has allowed token transfer to this contract
    require(srcToken.transferFrom(msg.sender, this, srcQty));

    // Mitigate ERC20 Approve front-running attack, by initially setting
    // allowance to 0
    require(srcToken.approve(_kyberNetworkProxy, 0));

    //approve tokens so network can take them during the swap
    srcToken.approve(address(_kyberNetworkProxy), srcQty);
    uint destAmount = _kyberNetworkProxy.swapTokenToToken(srcToken, srcQty, destToken, minRate);

    //send received tokens to destination address
    require(destToken.transfer(destAddress, destAmount));
    }


//This one is used by Alice if she has tokens that are not ETH that she can swap such that Bob
can receive the ETH as collateral

//@param _kyberNetworkProxy kyberNetworkProxy contract address
//@param token source token contract address
//@param tokenQty token wei amount
//@param destAddress address to send swapped tokens to
//@param maxDestQty max number of tokens in swap outcome. will be sent to destAddress
//@param minRate minimum conversion rate for the swap
function swapTokenToEtherWithChange (
    KyberNetworkProxyInterface _kyberNetworkProxy,
    ERC20 token,
    uint tokenQty,
    address destAddress,
    uint maxDestQty,
    uint minRate
)
    public
{
    uint beforeTransferBalance = srcToken.balanceOf(this);

    //check that tokens has been transferred to this contract
    require(token.transferFrom(msg.sender, this, tokenQty));

    // Mitigate ERC20 Approve front-running attack, by initially setting
    // allowance to 0
    require(token.approve(_kyberNetworkProxy, 0));

    //approve tokens so network can take them during the swap
    token.approve(address(_kyberNetworkProxy), tokenQty);

    _kyberNetworkProxy.trade(token, tokenQty, ETH_TOKEN_ADDRESS, destAddress, maxDestQty, minRate, 0);
    uint change = srcToken.balanceOf(this) - beforeTransferBalance;

    //return any remaining source tokens to user
    token.transfer(msg.sender, change);
}


// Allow someone to go short on altcoin and relatively long ETH

//@dev assumed to be receiving ether wei
//@param _kyberNetworkProxy kyberNetworkProxy contract address
//@param token destination token contract address
//@param destAddress address to send swapped tokens to
function swapEtherToToken (KyberNetworkProxyInterface _kyberNetworkProxy, ERC20 token, address destAddress) public payable {

    uint minRate;
    (, minRate) = _kyberNetworkProxy.getExpectedRate(ETH_TOKEN_ADDRESS, token, msg.value);

    //will send back tokens to this contract's address
    uint destAmount = _kyberNetworkProxy.swapEtherToToken.value(msg.value)(token, minRate);

    //send received tokens to destination address
    require(token.transfer(destAddress, destAmount));
    }