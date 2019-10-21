---
title: How to document Solidity smart contracts with no sweat
date: 2018-09-06T15:04:10-00:00
image: /images/blog/solidity.png
draft: false
---

Programming smart contracts on blockchain can sometimes be harder then we are used to when compared with other programming languages, especially because there are not many tools which we can help us in the process. Below you will find how we solved the documentation generation in Solidity.

Why is commenting Solidity smart contracts important? There are two main reasons:

* help out developer who will inherit that smart contract,

* help out developer or a user that will consume your smart contract.

So, how should you do it? Well, there is [Ethereum natural specification format](https://github.com/ethereum/wiki/wiki/Ethereum-Natural-Specification-Format) that is developed and promoted by Ethereum itself. It’s very similar to documentation format of other popular programming languages but with one distinctions — it uses `///` instead of `//` (although `/** ... */` blocks are supported).

Here are the Ethereum natural specification tags and rules:

![Ethereum Natural Specification Format tags](https://cdn-images-1.medium.com/max/2000/1*68pXA0aJzYHbqwfWWbZ4jA.png)*Ethereum Natural Specification Format tags*

Whatever the reason that made you document your code, you will soon find it’s quite tedious and time consuming to write documentation since there is quite a lot of boilerplate text for each function. That’s why we’ve made simple [**Atom**](https://atom.io/) plugin — [solidity-comments](https://atom.io/packages/solidity-comments). It contains basic functionally for generating all the boilerplate documentation for your Solidity smart contract by pressing the following combination of keys: Ctrl + Alt + G.

For example, if you have the following code:
```
    pragma solidity 0.4.24;

    contract SomeContract {

    function test(uint _param1, uint _param2) external {
            require(_param1 == 1 && _param2 == 2);
        }
    }
```

and you press Ctrl + Alt + G , you will get:

```
    pragma solidity 0.4.24;

    /// [@title](http://twitter.com/title) SomeContract
    /// [@notice](http://twitter.com/notice)
    /// [@dev](http://twitter.com/dev)
    contract SomeContract {

        /// [@notice](http://twitter.com/notice)
        /// [@dev](http://twitter.com/dev)
        /// [@param](http://twitter.com/param) _param1
        /// [@param](http://twitter.com/param) _param2
        /// [@return](http://twitter.com/return)
        function test(uint _param1, uint _param2) external {
            require(_param1 == 1 && _param2 == 2);
        }
    }
```

and then you just have to fill in the blanks. Cool, right?

We know, not everyone uses Atom, that’s why we extracted logic into separate [**solidity-comments-core** library](https://github.com/NodeFactoryIo/solidity-comments-core) and we will soon implement a CLI interface for this. As for other IDEs, we would very much like to port this plugin to other editors especially [Webstorm](https://www.jetbrains.com/webstorm/), so we are currently investigating what is the easiest way to port that JavaScript library into other languages (Java for Webstorm and Python for [Sublime Text](https://www.sublimetext.com/)). If you have any suggestion for porting, feel free to contact us!

Plugin still misses couple of necessary features, where most important one is to update function documentation if params have changed. If you want to contribute or make plugin for some other IDE, checkout our repository:
[Solidity comments core](https://github.com/NodeFactoryIo/solidity-comments-core).

When you need to export your documentation into HTML, you can use documentation generator like [Doxity](https://github.com/DigixGlobal/doxity) from Ethereum or [docgen](https://github.com/OpenZeppelin/solidity-docgen) from OpenZeppelin.

Happy documented coding!

***Follow us on [Medium](https://medium.com/@nodefactory) or [Twitter](https://twitter.com/nodefactoryio) if you want more blockchain development insights like this.***

<em>Node Factory is a blockchain development company committed to developing new technologies and leveraging them to make better applications worldwide. Let us know what we can do for you.</em>
