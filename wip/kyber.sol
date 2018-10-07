// Kyber ERC20 to ERC 20 token Template function swapTokenToToken (KyberNetworkProxyInterface _kyberNetworkProxy, ERC20 srcToken, uint srcQty, ERC20 destToken, address destAddress) public {

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

//@param _kyberNetworkProxy kyberNetworkProxy contract address
//@param token source token contract address
//@param tokenQty token wei amount
//@param destAddress address to send swapped ETH to
function swapTokenToEther (KyberNetworkProxyInterface _kyberNetworkProxy, ERC20 token, uint tokenQty, address destAddress) public {

    uint minRate;
    (, minRate) = _kyberNetworkProxy.getExpectedRate(token, ETH_TOKEN_ADDRESS, tokenQty);

    //check that the user has allowed token transfer to this contract
    require(token.transferFrom(msg.sender, this, tokenQty));

    // Mitigate ERC20 Approve front-running attack, by initially setting
    // allowance to 0
    require(srcToken.approve(_kyberNetworkProxy, 0));

    //approve tokens so network can take them during the swap
    token.approve(address(_kyberNetworkProxy), tokenQty);
    uint destAmount = _kyberNetworkProxy.swapTokenToEther(token, tokenQty, minRate);

    //send received ethers to destination address
    require(destAddress.transfer(destAmount));
    }