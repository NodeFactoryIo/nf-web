---
title: Using Truffle framework in an advanced way
date: 2018-06-26T15:04:10+01:00
image: /images/blog/truffle.png
draft: false
---

## Linking and initializing contracts on deploy automatically

First, you should get familiar with the [truffle migrate](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations) command that helps you deploy your contracts but also upgrade and redeploy the changed contracts only.

But what about the contracts that depend on other contracts that you are deploying as well? Contracts that are dependencies should be updated with the newly deployed address. You can do this manually during production but what about tests? Let’s dive into a solution.

For example, we have a smart contract called Application that interacts with Storage smart contract. The goal is to deploy them both and update Application contract with the Storage contract’s address.

Here is our <em>Application.sol</em> file:

{{< gist mpetrunic c4f136d6bede5f39f0a538bfa6f09e2f >}}

And our migration file:

{{< gist mpetrunic e1336ab8990128a00508009911a72fae >}}

The code above creates 4 transactions:

1. Deployment of the Application contract
2. Deployment of the Storage contract
3. Updating storage address in Application contract
4. Updating Truffle’s Migrations contract that tracks migrations onchain

To save up some gas, you could add constructor to Application contract which would accept address of storage contract as function parameter. Then our example would look like this:

{{< gist mpetrunic c3701d9b800a218fdd71ec3a68ea1c5d >}}

Migration of `Storage.sol` contract:

{{< gist mpetrunic 0391fe8329dc4ae5c7013b85db0049ed >}}

And migration of `Application.sol` contract:

{{< gist mpetrunic f7b5b260cb998b78cea50873916a3c23 >}}

This way we will make one transaction less than before and thus save some gas.


## Testing time based functions

Often you will find yourself writing time-dependent code i.e. checking if a certain time has passed before withdraw/deposit. If you are using [ganache-cli](https://github.com/trufflesuite/ganache-cli) for local network and testing, then you can use special RPC function <em>evm_increasetime</em> during your tests.

Here is how it can be used:

{{< gist mpetrunic d4497fb00c211d543d12d60aa2c93c67 >}}

To wait during tests for 24 hours you can call:

`await utils.increaseTime(24 * 60 * 60);`

## Mocha multi reporters

If you are like us and you use some sort of CI (Continuous Integration) like [CircleCi](https://circleci.com/), you would probably want your test results in some common format. Most CI tools require test results in JUnit XML format.

Truffle by default uses spec reporter which nicely formats test result onto console window. You could easily change this to mocha-junit-reporter, it’s just matter of running `yarn install mocha-junit-reporter` and adding following mocha config entry in your <em>truffle.js</em> config file:

{{< gist mpetrunic 256bbdf17e7cdd2a0d11fa7efdedd758 >}}

This solution is nice for CI but it’s not very user friendly when it comes to running test locally and then checking xml file for test results. Luckily there is something called [mocha-multi-reporters](https://github.com/stanleyhlng/mocha-multi-reporters).

For configuring multi reporters, first install dependencies:

`yarn install ---dev mocha-multi-reporters mocha-junit-reporter`

Add following mocha configuration to your <em>truffle.js</em> config:

{{< gist mpetrunic efc09b662b2072ac07826426485f5239 >}}

You’ve probably noticed that we are using <em>mocha-reporter-config.json</em>. Using this file, we can configure multi reporter to use both spec and mocha-junit-reporter.

{{< gist mpetrunic 2906453963a55842a3be4ea7e24ef4b7 >}}

As you might have probably noticed, you can even decide where you want your test results to be stored.


Developing dApps using Ethereum requires complex setup with whole bunch of frameworks and tools. Because of these we created [starter repository](https://github.com/NodeFactoryIo/solidity-node-docker-starter) which has all tools and frameworks configured for you to develop smart contracts with Node.Js as backend server. Everything is put in containers using [Docker](https://www.docker.com/) so with only one command you can start your private network, deploy contracts, run (database) migrations, run web server, tests and whatever you like.

If you want to try it, you can check it out here:

[https://github.com/NodeFactoryIo/solidity-node-docker-starter](https://github.com/NodeFactoryIo/solidity-node-docker-starter)

You can let us know if you would like some more features in this repo or feel free to contribute!








