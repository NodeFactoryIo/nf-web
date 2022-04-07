---
title: Setting up private Ethereum 2.0 development chain
date: 2020-03-26T09:00:00-00:00
image: /images/blog/ethereum20-validator.png
draft: false
keywords:
- ethereum 2.0
- proof of staking
- dev
- lighthouse
- chainguardian
description: Learn how to setup eth2 development chain using lighthouse client. 
---

> Disclaimer: This article is highly technical intended for developers and eth2 enthusiasts.

### Why would I setup private eth2 chain?

If you had any experience with development on eth1, you probably already know answer to this question so 
feel free to skip ahead.

At the moment, eth2 has a bunch short lived single client testnets and [one long lived](https://prylabs.net/) with
real stable client testnet still TBD. So, yeah, you can use [Prysmatic's Sapphire Testnet](https://prylabs.net/) but
beware it will take some time to sync and if you wanna test some validator related operations, you will have to wait
couple of hours to become active validator. Imagine, waiting couple of hours just to find out your app has bug 
with validator related operation and now you have to do everything all over.

Our motivation for this setup was [ChainGuardian](https://github.com/nodefactoryio/chainguardian), a desktop validator
client. Since we need to test whole onboarding process together with validation itself, dev chain is a must have.

### Choosing client

As you might already know, there is [quite a few teams](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth2.0-teams/teams-building-eth2.0/)
developing eth2 clients each focusing on specific features (security, enterprise, resource constrained devices, browser).

We went with [Lighthouse client](https://github.com/sigp/lighthouse) as their API is closely matched to 
[api standardization efforts](https://github.com/ethereum/eth2.0-apis) and other clients. Also, they seemed most
stable at the moment.

### Step 1: Setup private Eth1 chain

We will use docker and docker-compose throughout this article to orchestrate various pieces of architecture.

First, we need eth1 account that will serve purpose of signer in POA chain and it will be used to deploy deposit contract
and validator deposits. Store private key of that account in `signer.key` file.

We will also need:

- genesis.json - genesis file containing params of our POA chain
- passwd.txt - some file containing some dummy password for geth to encrypt our account

You can read more about setting up POA chain and generating genesis file [here](https://hackernoon.com/setup-your-own-private-proof-of-authority-ethereum-network-with-geth-9a0a3750cda8)
just make sure you:

- prefund your "signer"
- change `config.clique.period` to like 3 which means eth1 chain will produce block every 3 seconds

You can checkout our [configuration](https://github.com/NodeFactoryIo/ChainGuardian/tree/mpetrunic/lighthouse/eth1) 
and [docker-compose](https://github.com/NodeFactoryIo/ChainGuardian/blob/a789bcf16e34f193b4fb4a72c975dd553a1f8ca9/docker-compose.yml#L3).

### Step 2: Deploy deposit contract

Eth2 chain will monitor deposit contract for new deposits and use deposit data to activate validator.
You can download deposit contract artifact for spec version 0.10.1 [here](https://raw.githubusercontent.com/ethereum/eth2.0-specs/v0.10.1/deposit_contract/contracts/validator_registration.json).
We just need `bytecode` from that artifact so extract it from artifact and save as `deposit-contract.bin`.

We are using [gochain/web3](https://github.com/gochain/web3) image which allows you to deploy any bytecode to eth1 chain and much more.
We use this snippet in docker-compose to deploy contract:
```yaml
  deployer:
    image: gochain/web3:0.2.19
    depends_on:
      - eth1-node
    restart: on-failure
    container_name: "cg_eth1_deployer"
    entrypoint: []
    command: sh -c '/opt/wait-for.sh eth1-node:8545 -- /app/web3 contract deploy /opt/deposit-contract.bin'
    volumes:
      - "./eth1/deposit-contract.bin:/opt/deposit-contract.bin"
      # this allows us to wait until eth1 node is ready
      - "./wait-for.sh:/opt/wait-for.sh"
    environment:
      # signer key from `signer.key` file
      - "WEB3_PRIVATE_KEY=0xcd8ed955f2eab4faa99c5165a76aa89953c6da9438649fc9f3235fbd72da29e1"
      - "WEB3_RPC_URL=http://eth1-node:8545"
```

If you start your docker-compose, you should see eth1 node initialization followed by deposit contract deployment
after which your contract address will be displayed to use in following steps.

### Step 3: Eth2 chain configuration

Ligthhouse is providing awesome cli tool called [lcli](https://github.com/sigp/lighthouse/tree/master/lcli) to generate 
testnet configuration.

We used following command:
```shell script
lcli --spec minimal new-testnet \
  --deposit-contract-address <eth1 contract address> \
  --eth1-follow-distance 1 \
  --testnet-dir ./my-testnet-config \
  --min-genesis-delay 1
```

Let's break it down:

- `--spec minimal` instructs command to use "light" chain specification instead of mainnet values which will stress your PC a bit more
   - Even though we are using [minimal configuration](https://github.com/ethereum/eth2.0-specs/blob/v0.10.1/configs/minimal.yaml), this command will override default balance and deposits amounts (32eth -> 3.2eth etc)

- `--deposit-contract-address` where we put our contract address from Step 2
- `--eth1-follow-distance` since you private eth1 chain won't have reorgs, you should put `config.clique.period` from Step 1 here so you don't have to wait 16 confirmations (default value)
- `--testnet-dir` where we our generated testnet configuration files will end up

You can checkout rest of options with `lcli new-testnet --help`.

If everything went fine, you will end up with following files:

- boot_enr.yaml - contains enr-s of bootnodes (it will be empty array as we will only have our node and private chain)
- config.yaml - contains most of chain configurations
- deploy_block.txt - contains block at which eth1 deposit contract was deployed
- deposit_contract.txt - contains address of eth1 deposit contract

If you would like your eth2 chain to be faster, you can play around with:
- SECONDS_PER_SLOT - pretty self explaining, you should be fine with 3s per slot at minimal configuration
- SLOTS_PER_EPOCH - reducing this will make chain finalize faster
- SLOTS_PER_ETH1_VOTING_PERIOD - reducing this will activate validators faster

### Step 4: Start eth2 node and validators

There is couple of ways to start eth2 chain:

- start from genesis state (we prefer this one as it requires less configuration modification)
   - we generate genesis state and provide it to beacon node
- wait for genesis to start
   - we wait until there is enough deposits to kickoff genesis
   
We use this script to prepare and start beacon node:
```shell script
#!/bin/bash
# remove old genesis if exists
rm -rf /opt/cg_testnet/genesis.ssz
# remove datadir if exists
rm -rf ~/.lighthouse/beacon
# remove validators data if exists
rm -rf ~/.lighthouse/validators
# wait until eth1 node is available
/opt/wait-for.sh eth1-node:8545
# wait till deposit contract is deployed
sleep 5
# create genesis.ssz with current time and 16 validators
lcli -s minimal interop-genesis -t $(date +%s) -d /opt/cg_testnet 16
# To be able to add new validators we need to fill deposit contract with deposits for our 16 preloaded validators
lighthouse account validator new \
  --testnet-dir /opt/cg_testnet \
  --spec minimal \
  --send-deposits \
  --account-index 0 \
  --eth1-endpoint http://eth1-node:8545 \
  --password /opt/passwd.txt \
  --deposit-value 32000000000 \
  insecure \
  0 16
# start beacon node
lighthouse -s minimal bn --eth1 --eth1-endpoint http://eth1-node:8545 --http --http-address 0.0.0.0 --maxpeers 0 --testnet-dir /opt/cg_testnet
```
We just need to put that script inside Lighthouse docker-container and start it along with container running validator clients:
```yaml
  eth2-bn:
    image: sigp/lighthouse:latest
    container_name: "lighthouse_beacon_node"
    command: /opt/start.sh
    restart: on-failure
    links:
      - deployer:deployer
    volumes:
      - "./cg_testnet:/opt/cg_testnet"
      - "./eth1/passwd.txt:/opt/passwd.txt:ro"
      - "./cg_testnet/start.sh:/opt/start.sh:ro"
      - "./wait-for.sh:/opt/wait-for.sh"
    depends_on:
      - eth1-node
      - deployer
    ports:
      - "5052:5052"

  eth2-validators:
    image: sigp/lighthouse:latest
    restart: on-failure
    container_name: "lighthouse_validators"
    command: 'lighthouse vc --server http://eth2-bn:5052 --spec minimal testnet insecure 0 16'
    depends_on:
      - eth2-bn
```

Note: Those 16 preloaded validators use their index and private keys so they are pretty deterministic.

You can see full example in our [ChainGuardian app repo](https://github.com/NodeFactoryIo/ChainGuardian/tree/mpetrunic/lighthouse).
If you encounter any issues or have more questions, feel free to hop on our [discord](https://discord.gg/7Kd4FZq).

*NodeFactory is a blockchain R&D company that turns ideas into reliable solutions. We are always looking for new adventures so let us know about your project by contacting us in the form below! In case you need help with any of the mentioned, join our [Discord](https://discord.gg/adsEWkS) or follow us on [Twitter](https://twitter.com/nodefactoryio).*

