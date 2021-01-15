---
title: DeFi hacks - millions lost in 2020
date: 2021-01-14T19:08:59-00:00
image: /images/blog/defi.png
draft: false
keywords:
- defi
- hack
- solidity
- oracle
description: An overview on some Decentralized finance (DeFi) hacks and exploitations that happened during 2020.
author: Nikola Mlinaric
---

# DeFi Hacks - millions lost in 2020

## The good and the bad
Decentralized finance (DeFi) brings the commonly known things like saving and lending money from our regular lives into the blockchain world but with some nice twists. DeFi is growing at a very fast pace, ending 2020. with the total value locked (TVL) being [$15.32 billion](https://defipulse.com/) which is 22x more than at the end of 2019.

Being a fairly young and emerging technology, things are developing at a very fast pace, meaning that besides all the current great things there is a certainty that much more will follow. But things in DeFi are not all sunshine and roses and the reason for this is the number of hacks that have happened in 2020. Only in the top 15 hacks over 120 million dollars was stolen and according to [The Block Research](https://www.theblockcrypto.com/linked/89830/hackers-stole-120-million-via-15-defi-hacks-in-2020) only $45.6 million was recovered which is not an easy thing to do as blockchain actions are not reversible. This is not unexpected as so many DeFi projects were released during the year but it’s certainly something that we should all learn from, especially from the developer’s perspective.

## Let’s see some of the things that happened

### The Compound case, an oracle gone bad

Being the third-largest DeFi platform and considered as one of the best doesn’t mean you are invulnerable to exploits. In [Compound](https://compound.finance/)’s case the exploit was a quite heavy one, around [$85 million of loans](https://twitter.com/rleshner/status/1332139014334287872) were liquidated on the platform, so let’s explain what happened.
To borrow cryptocurrency, users have to put up collateral that exceeds the amount they are borrowing. Meaning that the collateral is locked in a smart contract until some ending condition is met. In an alternative scenario, it can happen that the collateral may become undercollateralized and the loan gets liquidated. Blockchain doesn’t know the current prices of each coin on each exchange so it has to get it somewhere. Here *oracles* come into play as they bring off-chain data into blockchain (smart contracts), making a connection between those two worlds.
In this case, the price of DAI/USDC was pushed on [Coinbase PRO](https://pro.coinbase.com/trade/DAI-USDC) (the only source for Compound’s oracle) by someone or by natural market pressures to $1.3, tricking the blockchain via it’s oracle that the price of DAI stable coin had shot up.

{{<figure src="/images/blog/dai-usdc-spike-on-coinbase-pro.png" title="Screenshot of DAI-USDC price spike on Coinbase PRO" >}}

With that data the blockchain thought that the DAI price was too high and that many of the loans were undercollateralized and liquidated them, resulting in huge losses.


### The Harvest case, a flash loan gone bad

[Harvest](https://harvest.finance/) is a lending platform that automatically farms the highest yield available from other DeFi protocols. On Oct. 26, due to an exploit, Harvest was drained for $24 million but easily that could have been even much more.

Due to an “engineering error” (that’s how the Harvest team called it), the attacker was able to use *flash loans* to manipulate the value of Harvest Finance’s reserves held in the Curve protocol. The flash loans drove down the prices of USDT and USDC on Harvest, allowing the attacker to buy more stablecoins than it would normally be able to. This allowed them to pay back the flash loans and make a profit on the side. The hacker swapped the stolen funds for renBTC, exited with BTC and returned $2.5 million of the stolen funds to developers.

### The COVER protocol case, a Solidity bug gone bad

At the end of 2020., [COVER protocol](https://www.coverprotocol.com/) was a victim of an infinite printing scheme hack causing the price of the COVER token to plunge from around $850 to less than $10. The exploit was achieved through a bug in one of the contracts where pool data was cached in memory to save some gas. Pool data was later updated in storage but the cached data was forgotten to be updated. The outdated cached data is later used in calculations and that enabled the hack.

The hacker cashed out the tokens in other cryptocurrencies including ETH, DAI and WBTC, but hours later, a white hat hacker claimed responsibility for the attack and [returned funds](https://twitter.com/bantg/status/1343553858354737156?s=21).

To resolve the exploit the COVER protocol team took a snapshot one block before the exploit and issued a new token to those users. In addition to that Binance, one of the world’s biggest CEXs compensated a total of around $10 million from its [Binance SAFU](https://academy.binance.com/en/glossary/secure-asset-fund-for-users) fund.

## How can we all do better?

Everything in software engineering is not perfect and development is prone to making mistakes and suffering from exploits. The same rules apply to blockchain, whether or not being a younger technology and not so much tested or more mature. But, as always, there are some things that can be done to prevent or at least to minimize harm.

In the case of Compound, the obvious thing that could have been done to prevent such an exploit from happening is to use more than one oracle for price information. There is no “one size fits all” solution but if you *really* need to use oracles, you can use multiple reports, or if that’s not possible then include a delay with one source averaging the price over time to potentially prevent anomalies.

In the second case, it could be possible to prevent depositing and withdrawing funds within a single transaction. In case that’s not an option, to minimize the possible damage of flash loans, withdrawals of stablecoins can be handled in separate transactions.

Solidity bugs are best to prevent by having more extensive testing, covering edge cases and running static analyzers. Most importantly, doing an external audit is very helpful because more eyes can see things from different angles. Also, open bounties for white-hat hackers with good prizes have proven to be effective as well.

*NodeFactory is a blockchain R&D company that turns ideas into reliable solutions. If you need a consultation related to the blockchain technology, get in touch with us using the contact form below.*
