---
title: How to become a validator in the new Ethereum 2.0 proof of stake system
date: 2019-10-28T18:04:10-00:00
image: /images/blog/ethereum20-validator.png
draft: false
keywords:
- ethereum 2.0
- proof of staking
- validator rewards
- chainguardian
description: Learn how Ethereum Proof of Stake system will look, what do you need to become a validator and how to do it. 
---

This article explains how someone will be able to become a validator in Ethereum 2.0. New Ethereum will replace mining process as seen current Ethereum and use Proof of Stake consensus where validators will be the one maintaining the network. Those validators attestations are written on the Beacon chain. However, we won't get into those technical details and you don't even have to know all of that to take part in validating blocks.


### What's the current status of Ethereum 2.0 development?

Specification is there and seven different node clients are actively working on their implementation. The reason for this is that they are written in different languages and will have a different specializations i.e. being focused on the browser or resource constrained devices. Also, not all of them will survive (but that's ok). In current Ethereum (Eth1) survivors are Geth and Parity. Current active Eth2 clients are: [Lodestar](https://github.com/ChainSafe/lodestar), [Nimbus](https://github.com/status-im/nimbus), [Lighthouse](https://github.com/sigp/lighthouse), [Prysm](https://github.com/prysmaticlabs/prysm), [Trinity](https://github.com/ethereum/trinity) and [Teku](https://github.com/ConsenSys/teku).


They all have their own testnets but they all gathered in September on an interoperability event and created a multi-client testnet. Here is the [historic tweet](https://twitter.com/JonnyRhea/status/1172233598109442049) and we are glad that we could be there! Thanks Consensys.

{{<figure src="https://pbs.twimg.com/media/EEWcf2pW4AUQNJ6?format=jpg&name=4096x4096" title="First launch of the Ethereum 2.0 clients, tweet by Joseph Delong" >}}

Good news is that in the latest Eth2 spec release (v0.9.0) an official deposit contract has been declared as finished!

***Update on Jan 8 2020:*** BLS standards announced as completed in Eth2 spec! No more roadblocks.

All initial deposits, that will happen on Eth1 chain, will be used by Eth2 chain to secure the network upon launch by leveraging the security pool and value of existing Ether.

#### Update January 2021.

Mainnet is live with 4 working clients (Lighthouse, Nimbus, Prysm and Teku).
You can read more on latest Eth2 phase on [Launchpad website](https://launchpad.ethereum.org/).

### Testnet

Latest working testnet is [Pyrmont](https://pyrmont.launchpad.ethereum.org/), a public network where you can stake Goerli test ETH and join as validator.

### How much can you earn by being a validator?

What a great question! Yes, you get a reward if your attestations get included in a block but the reward depends on the whole state of the network i.e. how many validators are online. The economics of this are still being examined and are to be tested. Latest estimates are that validators can expect *4.6% – 10.3%* in annualized rewards. However, the spec is still being updated which results in a lot of estimates so we can only recommend you the following links to understand better:
 
 - [Examining the Proposed Validator Economics of Ethereum 2.0](https://media.consensys.net/examining-the-proposed-validator-economics-of-ethereum-2-0-82b934fb4326)
 - [Eth 2.0 Economics](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-economics/)
 - [ETH2 Calculator](https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=107311254)


Basically, the math for validator return of investment (ROI) is:
```
ROI = Validator rewards + Network fees - Cost to run a validator node
```

The goal is to encourage people to become validators and have many as possible to secure the network. Therefore, the whole PoS system is a collective rewards scheme where the more people online, the more everyone earns. Vice versa, the less people online, the less that people are earning. It is why there is a slight *penalty* if your validator client goes offline at any point. For example, if the current interest rate is 5%, you would lose 0.0137% of your deposit every day, but gain that for every day you're online. In case of a bigger issue where 33% of validators are offline and you're offline, you can lose 60% in 18 days. If at any point your deposit drops below 16 ETH you will be removed from the validator set entirely.

#### Update January 2021.

**Current APR is 12%.**

### What do you need to become a validator?

Basically, here are the minimum requirements for being a validator:
 - have 32 ETH,
 - run validator node 24/7 (this can be your PC, remote server, Raspberry Pi or similar) with Internet connection,
 - have access to beacon node.

Hardware requirements for running the node will be better determined during testnet activities. For the validator client only something like Raspberry Pi will be enough but in case you are running your Beacon node, you'll need a more powerful CPU and storage space.

Keep in mind that your uptime and therefore an Internet connection are the most important things as your stake gets slashed if you are offline, meaning that you are losing your money.

**Note on using Infura or similar nodes:** Using remote public nodes such as Infura is not a recommended setup. In case of Infura downtime, you could get slashed in a serious amount.
Same goes for hosted VPS on services such as AWS.

### How to become a validator?

The validator setup requires some technical knowledge and understanding.
However, we want to enable everyone to easily become a validator and know how well they perform.
This will be possible with the desktop app that we are working on - [ChainGuardian](https://chainguardian.nodefactory.io).
App is still in development (beta), but you can track our progress our [NodeFactory Twitter](https://twitter.com/nodefactoryio) or [join our Discord](https://discord.gg/k6Cu6PB)! This app is being built thanks to [MolochDAO](https://molochdao.com).

ChainGuardian is a desktop validator client that supports running on Windows/Linux/Mac.
As a user, you will be able to have everything in one app with a graphical interface: running a validator client and a beacon node.
Most importantly, you will be able to observe the performance of your node, return of investment and get notified if your node is down so you don't lose your earnings!

Here are a couple of sneak peaks below. Please check our [website](https://chainguardian.nodefactory.io/) for latest updates and releases.

{{<figure src="/images/blog/chainguardian_collage.png" title="ChainGuardian desktop application previews" >}}

Basically, to become a validator, here are the steps that one needs to take:

1. Install one of the previously listed Eth2 clients.
2. Get Ether. In testnet case that's Görli ETH. Here is a working [faucet](https://faucet.goerli.mudit.blog/). 
3. Generate a validator public and private key pair (used for signing your claims as a validator).
4. Start your validator client along with Beacon chain. You can use your Beacon chain node or some existing public server.
5. Make the ETH deposit (stake) to Eth1.
6. Wait to get assigned as validator. Once your validator client is up and running you just have to wait for it's activation. This can take hours (testnet currently) or days (mainnet currently) because of a voting period in which new deposits are added to the running chain from other validators.
7. Watch your validator create, vote and attest for blocks as well as earn rewards!

Once again, those steps will be a part of the ChainGuardian app onboarding. 

## Note about your key pairs
 
What's important to understand when handling your validator node are validator keys. You should have a ***signing key*** which is a hot wallet - unlocked account that app client uses for voting and proposing blocks. Also, you need a ***withdrawal*** key that is a separated cold wallet which will be used for funds withdrawal in case you want to stop being a validator or your signing key gets comprimised.

The process of creation can be done on [launchpad](https://launchpad.ethereum.org/) and [eth2 deposit CLI](https://github.com/ethereum/eth2.0-deposit-cli/releases/) as it is the only audited code and therefore recommended way.

### Conclusion

This is Ethereum 2.0 (Serenity) Phase 0 which includes launch of Beacon chain that manages the Casper Proof of Stake protocol for itself and all of the shard chains. Being a Phase 0 only, we won't have all the new features of Ethereum 2.0 just yet. For example, there is currently no way to withdraw deposited Ether from Eth2 as it is effectively burned in Eth1. However, although the transfers weren't planned in Phase 0, this is still open to discussion and changes.

Once Phase 0 is complete, there will be two active Ethereum chains - Eth1 chain (current) and the Eth2 chain (Beacon chain). They will operate in parallel during the Phase 1 and Phase 2 as well. However, the [Eth1 to Eth2 transition](https://ethresear.ch/t/the-eth1-eth2-transition/6265) is planned.

It may seem that this Phase is not that significant as we won't be available to use everything from Ethereum that we got used to but this is the foundation of the entire system. If we compare this phase to the beginning of the mining period, then we can certainly draw conclusions about advantages and profits in being the first in the line. However, there are all kinds of risks but seeing the community around this and efforts of the core developers, it's only possible to be positive about how things will roll out.
