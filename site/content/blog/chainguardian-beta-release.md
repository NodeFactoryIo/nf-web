---
title: ChainGuardian app for Ethereum 2.0 validators is finally here! *beta release* 
date: 2021-03-11T10:08:59-00:00
image: /images/blog/ChainGuardian.png
draft: false
keywords:
- Ethereum 2.0
- validators
- beacon chain
- eth2
description: Introducing an app that enables easy eth2 home staking and effortless validators management.
---

ChainGuardian is our product and a desktop application that has been funded initially by [Moloch DAO](https://www.molochdao.com).
It enables Ethereum 2.0 setup through a graphical interface plus support for managing multiple validators and beacon nodes with statistics and monitoring.

## Which problems ChainGuardian solves

Currently, the validators setup can be complex even for a technical person.
Even once you have a validator running in the console you have a hard time seeing what’s going on and what’s the actual validator status.
Additionally, to gain some insights user has to setup Prometheus and host Grafana as well as navigate through a blockchain explorer.
This is where ChainGuardian comes in! It offers ***both statistics and management in one place***. 
With simple user experience, it gives an abstraction over running CLI commands or executing bash scripts.


ChainGuardian offers:

* Running your beacon chain node or connecting to an existing remote node
* Running multiple validators from the same app
* Importing existing validators or starting new ones
* Validator statistics (ROI, balance, attestation effectiveness over time) and logs
* Beacon node statistics (hardware metrics, response time and errors) and logs

\+ new metrics added each month!

Visit [official ChainGuardian website](https://chainguardian.nodefactory.io) for more information and download links.


## Where to start with Ethereum staking and ChainGuardian

**Note, this is a beta version and we offer only staking on testnet - Pyrmont!**

There are a few simple steps that one needs to take to start staking with ChainGuardian.
Steps are the following:

1. *(required if not already a validator)* Create validator keys and make a deposit on **[Ethereum Launchpad](https://pyrmont.launchpad.ethereum.org)**
2. Install **[Docker](https://docs.docker.com/get-docker/)**
3. Download **[ChainGuardian](https://chainguardian.nodefactory.io)**
4. Start ChainGuardian and go through a wizard of beacon node creation and validator import
5. Enjoy staking!

If you encounter any bugs or have feedback to send please use [Github issues](https://github.com/NodeFactoryIo/ChainGuardian/issues) or join our [Discord](https://discord.gg/u6NeY9ambf).
We appreciate the time and effort for trying out this release and growing a better Ethereum 2.0 ecosystem.



