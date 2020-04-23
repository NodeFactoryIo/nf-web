---
title: How to make a private blockchain network (the smart way)
date: 2019-02-12T15:04:10-00:00
image: /images/blog/privatenetwork.jpg
draft: false
keywords:
- ethereum blockchain
- private networks
- permissioned networks
description: So, you don’t want your blockchain network to be public? Pros and cons of a public and a private blockchain network.
---

We’ve been often approached by clients that don’t feel comfortable with having some of their data shared with the world using public networks. However, a person can be easily deluded with some myths on the Internet about how a private blockchain is created and works. This article will break some of the myths and try to answer the most common questions.

**Public vs Private vs Permissioned blockchain network**

Let’s explain this swiftly.

*Public networks* are often the first choice because they are completely decentralized and therefore most secure in terms of keeping the consensus. One of their finest use case is cutting off the middleman completely, having faster settlements with users interacting globally.

*Private networks* work almost the same way as the public ones do but they are usually managed only by a few entities which make consensus and therefore transactions can be much much faster. Network is usually configured and managed by those entities in the way they want. In terms of privacy, they are usually closed for outside participants that are not part of the network. 

Private networks can also be <em>permissioned</em> by having access control mechanism included in the protocol as well as the private transactions which are only visible to the authorized network participants. If not implemented correctly, private transactions can create blind transparency and therefore break some of the blockchain key features.

A really good protocol-level integration of smart contract based permissioning is done in enterprise-grade client called [Pegasys / Hyperledger Besu](https://pegasys.tech/).  

**Ok, I need my network to be a private one.**

First question that usually arises here is: <em>“How many miners do I need?”</em>. You don’t need any mining power since proof of work is not the only way to reach network consensus! Meet the new kid on the block — ***Proof of Authority (PoA)***. Instead of electricity or money, entities that confirm transactions “stake” their identity so such entities are usually companies and some kind of organisations that don’t want to be discarded from the network or publicly ashamed for the attempt of a network fraud. Those authorities (validators) can be defined on network initialisation or voted in later. Majority of validators’ signatures is needed to run a secure network. In case of a dishonest signer, there can’t be much damage done before being kicked out as each signer can only sign once every N/2 + 1 blocks. PoA, because of the it’s convenience, became pretty popular with the new Ethereum testnets and other private networks in enterprise companies.

And what about **transaction fees**? Since you are building your own network, you can set the gas price to be 0. This way the participants won’t need to spend ETH to make transactions.  

How many transactions will the network be able to process - **tx/s**? Transactions capacity depends on the block gas limit and block time. That means you either put more transactions in a block or make block issuing faster. Depending on the architecture, if overdoing those setting, these things could affect stability and make nodes out of sync. To acknowledge this is done by trial and error. Another consequence are hardware limits, especially storage size since empty block is around 1MB. Default settings with 5s block time can provide transaction speed of 40–50 tx/s.

So, who has the permissions to read or write? For both, only participants of the network is the answer. For writing, permissions are handled through smart contracts with programmed access control but reading is done on another layer. Private transactions that are only visible to a set of participants (and not to the rest of the network) can be ensured through the concept of channels. 

Privacy on blockchain is a new concept on which community is working and we will be able to see soon practical usage of zero knowledge for this using i.e. [zk-SNARKs](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) and [AZTEC Protocol](https://www.aztecprotocol.com/) even in public networks.

**Privacy of data**

First of all, large portions of data were not meant to be stored on any blockchain network by the design. In spite of that, there are other opportunities how you can connect your data with the blockchain network. Since blockchain is immutable ledger, you can guarantee data integrity by storing cryptographic *hash* (digest) of data that only changes value if that data is changed. This makes data verifiable meaning that the downloaded file is the same one as it has been uploaded.

Data must be encrypted to ensure that it can be read only between the right participants. Encryption functions are complex calculations to be done onchain so you can’t really do that through smart contracts. However, with the previously combined method of verification, you can store files encrypted offchain and hash onchain. Asynchronous encryption can be used to encrypt data with receiver’s public key and then to be able to decrypt it with receiver’s private key only known to receiver. This kind of flow is represented in the following schema.

{{<figure src="https://cdn-images-1.medium.com/max/2000/1*U7M4UfYH3IKzTsm2kUX_3w.png" title="Flow for storing verifiable, encrypted and trusted data" >}}

**Building bridges**

What if you can combine both in-house flexibility and global participants in economies of scale? A bridge between your private network and *mainnet* can be created so that users can convert their real ETH to a private network’s token or ETH and vice versa. Not only that offers lower transaction fees and faster transactions unaffected by *mainnet* congestion, but it also provides possibilities of economic incentives and the security of a *mainnet* network.

{{<figure src="https://cdn-images-1.medium.com/max/2000/1*47-F1qGnN_3mgh9hbtRp2w.png" title="Example of a network design with a simple bridge connection" >}}

*Last edit: 23 April 2020.*

<em>[NodeFactory](https://www.nodefactory.io/) is a blockchain development company that provides adoption, integration and realization of decentralized applications. We are always looking for new adventures so let us know about your project by contacting us using the form below.

Also, we are part of the team that is working on a new PoA network that will serve as a public testnet, so stay tuned for more information about [Lisinski](https://lisinski.online/)!</em>
