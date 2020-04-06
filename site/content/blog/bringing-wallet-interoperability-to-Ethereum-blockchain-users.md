---
title: Bringing wallet interoperability to Ethereum blockchain users
date: 2020-04-05T18:04:10-00:00
image: /images/blog/polkadot_metamask.png
draft: false
keywords:
- polkadot
- substrate
- metamask
- snap
description:  Building support for Polkadot in MetaMask wallet using MetaMask’s new plugin system - snaps.
---

# Bringing wallet interoperability to Ethereum blockchain users

NodeFactory is building support for [Polkadot](https://polkadot.network) in [MetaMask](http://metamask.io) wallet using MetaMask’s new plugin system. This plugin should support all Substrate-based chains such as Kusama and later Polkadot.

As more and more different types and niche - blockchain networks emerge, we are required to first learn how to use them and install new applications that are specific to that blockchain. Even if you are already experienced with one type of network i.e. [Ethereum](https://ethereum.org), it’s still a process to start using something else. An experienced Ethereum user has already installed multiple types of wallets or similar applications. While redundancy here is great, sometimes we should take it easy on our end users and not request an app for everything.

## What's new?

MetaMask web wallet is the oldest decentralized application (dApp) login system and therefore the first choice for many of today’s most active Ethereum users. That is obvious by the numbers with [1M+ Chrome downloads](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en). The good news is that the MetaMask team recently introduced [snaps](https://github.com/MetaMask/metamask-snaps-beta/wiki), a plugin system that allows dApp developers to request access to the extension’s APIs. This enables dApps to do much more for their specific needs. However, the NodeFactory team saw an opportunity here to connect MetaMask to other blockchain networks too, specifically Polkadot. Polkadot is a sharded protocol that enables blockchain networks to operate seamlessly at scale.

As part of the [Web3 Foundation grant program](https://web3.foundation/grants), NodeFactory is on the road to deliver a [MetaMask snap](https://github.com/NodeFactoryIo/metamask-snap-polkadot) that will allow Ethereum users to interact with Polkadot dApps using MetaMask.



## How will this work

The integration of the Polkadot wallet snap unlocks all MetaMask users’ interactions with Polkadot dApps. This will enable simple and easy onboarding of existing Ethereum users into Polkadot.


Snap would be able to generate Polkadot account keys from dApp’s unique MetaMask key. This also means that users will automatically get a Polkadot wallet generated per dApp. Snap will enable the wallet to:

* Receive and send units such as KSM on [Kusama network](https://kusama.network) and later DOTs on Polkadot,
* Read and keep track of unit balance
* Sign messages and interact with dApps
* Receive notification of successful or failed transactions
* Receive notifications of incoming transactions.


NodeFactory team will develop this MetaMask snap and prepare integration for existing dApp [Polkadot accounts](https://github.com/polkadot-js/apps/tree/master/packages/page-accounts). Other dApp developers will simply be able to support the snap using NodeFactory’s snap documentation.


## Technical challenges

MetaMask extensions are fairly new; The main challenge in the snap development is [Secure EcmaScript (SES)](https://github.com/Agoric/ses-shim). SES is a secure runtime for executing third-party code safely. It has [strict rules](https://github.com/tc39/proposal-ses) for code that’s going to be executed. 

The most problematic rules for NodeFactory team were WebAssembly (Wasm) and code in comments prohibition, which prevented the snap development from using Polkadot libraries like [@polkadot/util-crypto](https://polkadot.js.org/common/util-crypto/) and [@polkadot/api](https://polkadot.js.org/api/). In case you are interested how the problem was resolved, you can checkout the NodeFactory’s solution in this [pull request](https://github.com/MetaMask/snaps-cli/pull/50).

`ed25519` keys are currently used since they have JavaScript fallback in Polkadot libraries. [Library compatibility with SES Github issue](https://github.com/polkadot-js/api/issues/2062) is used to track found problems with Polkadot libraries in SES.

## Stay tuned

By the current development timeline, NodeFactory expects to have MetaMask available for Polkadot in two months.
Note that MetaMask version with snaps is still in beta version, but NodeFactory team is positive about the development, having in mind the traction it gained and the potential it unlocks.


Going forward, it’s important to remark that using snaps and APIs as a base-layer solution might be an inspiration for alternative wallets and other blockchain tools to take their product to the next level.


Also, feel free to check out our [Github repository](https://github.com/NodeFactoryIo/metamask-snap-polkadot) for development updates! Generating Polkadot compatible keys and making read-only actions to the Kusama network is already supported.

*NodeFactory is a blockchain R&D company that turns ideas into reliable solutions. We are always looking for new adventures so let us know about your project by contacting us in the form below! In case you need help with any of the mentioned, join our [Discord](https://discord.gg/adsEWkS) or follow us on [Twitter](https://twitter.com/nodefactoryio).*
