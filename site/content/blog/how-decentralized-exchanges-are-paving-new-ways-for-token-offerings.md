---
title: How decentralized exchanges are paving new ways for token offerings
date: 2020-05-06T00:04:10-00:00
image: /images/blog/dex-offering.png
draft: false
keywords:
- ethereum
- erc20
- token
- offering
description:  An overview on the new ways that decentralized exchanges offer for a token offering and listing. 
---

We could all agree that initial coin offerings (ICOs) that we've seen in 2017. are gone but the need for a blockchain project crowdsale mechanism is still here. For a short time we've also seen initial exchange offerings (IEOs) and security token offerings (STOs) were almost there but seems like regulations, required for it's success, were not.

## What is Initial DEX Offering (IDO)?

Recently, on April 28th., a token sale with a new mechanism was launched via a decentralized exchange [Uniswap](https://uniswap.io). This was done by [UMA protocol](https://umaproject.org/), an Ethereum-based platform for issuing and trading synthetic assets. 

### How Uniswap exchange offering worked

What UMA Protocol did was [put 2% of total token supply](https://medium.com/uma-project/umas-initial-uniswap-listing-afa7b6f6a330) into Uniswap for sale with the starting price of 0.26$ per token. Because the Uniswap exchange works on liquidity pools, UMA had to provide 535k$ of ETH into a newly created liquidity pool to have that initial price.

However, on Uniswap price is not determined by the order book but it changes with the rate of bonding curve so while buying tokens the price is moving up. 

{{<figure src="/images/blog/bonding-curve.png" title="Bonding curve formula" link="https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281" target="_blank" >}}

The above graph represents the exchange rate between tokens where the invariant formula is:
`x * y = k`

```
k - constant that does not change
x - quantity of ETH (or with Uniswap v2 it can be another ERC20 for which liquidity has created)
y - quantity of ERC20 token such us UMA
```

Anyone buying or selling tokens is effectively shifting the price position on the x * y curve. This means when you go to buy a token which has some current exchange rate, you'll end up making a trade with an average price that's a bit higher than that rate. How big the change is depends if someone made a trade just before you or how many tokens you are buying. For instance, if 1 DAI = 0.00493 ETH and you make a trade of 1 ETH for 202 DAI, making a trade with 100 ETH will not get you 20200 DAI but probably 20170 because the price has moved a lot on the curve. 

What happened with UMA ERC20 tokens is that after 3 days the price stabilized roughly around 1$ which is 4x the initial price. [Movement of the UMA price](https://explore.duneanalytics.com/public/dashboards/YCmHZqHfTkO0B1N1C0YZnLSOLtIHBtZfyuXji8iG) had it's peaks as there was a lot of rush to buy the tokens at lower price (before the price moved up the curve).
 Therefore, a lot of frontrunning transactions with high gas costs got executed before "normal" orders. This lead to UMA trading at ~5x the initial price only 25 minutes after the launch, making some buyers unhappy as they bought at this higher price. At some point, it was bought for even more than 2$.

At the end, the average price of UMA was around 0.5$ and they made a bit more than 2mil dollars worth of ETH.

This process could be improved to prevent this kind of speculation. One way could be a dutch action-like mechanism where the process is reversed and the pool is initialized with a part of the token at a high rate (max. price). Then the distributor buybacks from the pool until  the price gets lower and investors start to buying in. Another interesting approach has [Gnosis protocol](https://www.theblockcrypto.com/post/61622/consensys-spin-off-gnosis-launches-decentralized-exchange-with-focus-on-best-price-execution) where trades are executed in batches with a single price clearing.

In the future, we'll probably see more of such token offerings which DEXs facilitate and we congratulate UMA protocol for making this attempt first with their ERC20 token.


## What has changed in the way of token listing

Projects that needed to list their tokens have looked now only for a way to enter a centralized exchange i.e. Binance. The biggest benefit of these exchanges is the number of users and volume. Also, nice UIs. Also, a high cost for the listing. On the other hand, we have decentralized exchanges that are inexpensive and free to list but they have a low liquidity which means that it takes more time for a user's order to get filled.

With the rise of DEXes and automated market makers (AMM) such as Uniswap we may see now a different token progression. Projects can provide liquidity for their tokens on Uniswap and enable trading instantly. In case the token trades well and can sustain an order book, it should go well on DEXes. Later, when the token is mature enough it could take the last step and probably list on a centralized exchange. 

We can't say that [Binance Launchpad](https://launchpad.binance.com/) will be replaced by Uniswap or similar service but it is a fair alternative as [trading volumes on DEXes](https://dex.watch) increase. 

*Hopefully this article has given you more ideas for your business. If you need a consultation related to the blockchain technology, get in touch with us using the contact form below. NodeFactory is a blockchain R&D company that turns ideas into reliable solutions and we are always looking for new adventures!*
