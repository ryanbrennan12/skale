
## Dependencies

- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/


## Step 1. Clone the project
`git clone https://github.com/ryanbrennan12/skale.git`

## Step 2. Install dependencies
```
$ cd skale
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.

## Step 4. Compile & Deploy Election Smart Contract (Locally)
`$ truffle migrate --reset`
You must migrate the election smart contract each time your restart ganache.

## Step 5. Configure Metamask (For Local Chain)

- Unlock Metamask
- Connect metamask to your local Ganache blockchain.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ npm run dev`
Visit this URL in your browser: http://localhost:3000

## Step 6. Deploying to SKALE sidechain
Go to truffle-config.js and replace existing code with the following code:

```s
require('dotenv').config();
let HDWalletProvider = require("truffle-hdwallet-provider");

let privateKey = process.env.PRIVATE_KEY;

let rinkeby = process.env.RINKEBY;

let skale = process.env.SKALE_CHAIN;

module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        rinkeby: {
            provider: () => new HDWalletProvider(privateKey, rinkeby),
            gasPrice: 0,
            network_id: "*"
        },
        skale: {
            provider: () => new HDWalletProvider(privateKey, skale),
            gasPrice: 0,
            network_id: "*"
        }
    }
}`
```
```
$ touch .env
$ cd .env
```
enter in your .env file
```
MNEMONIC=[your phrase]
ACCOUNT=[your account]
PRIVATE_KEY=[your private key]
SKALE_CHAIN=[your chain endpoint]
``

```
truffle deploy --reset --network skale --compile-all
```
