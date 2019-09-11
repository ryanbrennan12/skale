require('dotenv').config();
let HDWalletProvider = require("truffle-hdwallet-provider");

//https://developers.skalelabs.com for SKALE documentation
//Provide your wallet private key
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
}