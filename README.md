

# Figment Solana Courses

A monorepo used to hold all my solana code for courses at [Figment Solana](https://www.figment.io/protocols/solana).
It is worth noting that `Figment` provides `80%` of the code leaving the remaining `20%` for the developer to complete, allowing them to concentrate on what matters, the `web3` portion. I don't have anything against this, but I want to play around with and have control of the whole process, so I decided to do it from scratch. 

The first choice I made was to use a `monorepo` which allows me to share code between courses and since I am using `nx` I can also keep the `rust` code packaged with everything else, all located in a single repo I can refer to later. 


## Solana Wallet

![](./public/wallet-tutorial-screenshot.png)

The [solana wallet course](https://learn.figment.io/pathways/solana-wallet) will be the first course I tackle on my journey to understanding the solana ecosystem and goal. I will not be using [the original source](https://github.com/figment-networks/wallet-tutorial.git), but building the same version with a different tech stack.

I will be using `React, CharaUI, with the nx monorepo` instead of `Nextjs and sytled components` 


### 🤔 What is the `wallet-dapp`?

Crypto wallets are one of the foundations of Web 3. They are the gateway application into crypto ecosystems by enabling users to interact with blockchain protocols and manage digital assets.

Under the hood, wallets leverage cryptographic technologies to generate and recover private keys - a concept that we'll define in the course of this tutorial. Those private keys give users access to public accounts that record ownership on a blockchain and expand the internet's functionality from a global network for information exchange to a global network for disintermediated economic exchange.

