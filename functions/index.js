Object.defineProperty(exports, "__esModule", { value: true });
 exports.saveNewMintedNFT =exports.autosend= void 0;
const web3_1 = require("web3");
const Web3Utils = require('web3-utils'); 
const axios =require("axios");
 const ax=axios.default;
const admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(require("./titan-wingist-firebase-adminsdk-lbzl6-ab623b88b9.json")),
  });
const functions = require("firebase-functions");

exports.autosend= functions.pubsub.schedule('0 14 * * *').onRun((context)=>{
    console.log('This will be run by 12:00 hrs! daily');
    
        const URL= `https://stardust-explorer.metis.io/api?module=token&action=getTokenHolders&contractaddress=0x31bb1dbE05aE866024FF9a351fe16f10c8F26bcD`;
        ax.get(URL).then(response=>{
            console.log(response.data["result"]);
            const ids= response.data["result"]
           ids.forEach((id)=>{
            console.log(id["address"]);
               sendWINGSAuto(id["address"])
           })
        })

        })
 async function sendWINGSAuto(requestData){
    const web3 = new web3_1(new web3_1 .providers.HttpProvider("https://stardust.metis.io/?owner=588"));
    
        const contractAddress = '0x1ed87e4b0d15b70434e82a06c5fcd7015b5f8d6a'; //Yor token contract address
        const privateKey = functions.config().someservice.key; //The private key of your contract Owner  
        const receiver=requestData;
        // const receiver = '0xDc60770f0d8e9EB203bD04659eBBC1542CFE1177'; //The address to transfer the tokens    
        const ownerAddress = '0xAdf1618568e49fB32F78BE41B181C9358777A098';
        let contractABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name_",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "symbol_",
                        "type": "string"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        var contract = new web3.eth.Contract(contractABI, contractAddress, { from: ownerAddress });
        
        
        var data = contract.methods.transfer(receiver, '100000000000000000000').encodeABI(); //Create the data for token transaction.
        const rawTransaction = { "to": contractAddress, "gas": 830395, "data": data };
        web3.eth.accounts.signTransaction(rawTransaction, privateKey)
            .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
            //.then(function(receipt){ console.log("Transaction receipt: ", receipt); getETHBalanceOf();  })
            .then(req => {
            console.log("Success");
            console.log(req);
            /* The trx was done. Write your acctions here. For example getBalance */
            // getTOKENBalanceOf(toAddress).then ( balance => { console.log(toAddress + " Token Balance: " + balance); });
            return true;
            });
        }


        exports.getWalletBalance = functions.https.onCall(async (walletAddressData) => {
            const walletAddress=walletAddressData["wallet"];
            const url=`https://stardust-explorer.metis.io/api?module=account&action=tokenlist&address=${walletAddress}`;
            const web3 = new web3_1(new web3_1.providers.HttpProvider("https://stardust.metis.io/?owner=588"));
        
            const data=ax.get(url).then(res=>{
                var d=res.data;
        
                console.log(d.result);
                return d.result;
            }).catch((err=>{console.log(err);return null;}))
            return data;
        });

        exports.getAllTransactions=functions.https.onCall(async (requestData)=>{
            const walletaddress=requestData["wallet"];
            const url=`https://stardust-explorer.metis.io/api?module=account&action=txlist&address=${walletaddress}&sort=asc`;
            
            const data=ax.get(url).then(res=>{
                var d=res.data;
        
                console.log(d.result);
                return d.result;
            }).catch((err=>{console.log(err);return null;}))
            return data;
        })



        exports.addDeal = functions.https.onCall(async (requestData) => {
            const id = requestData["ID"];
            const deal = requestData["deal"];
            const status = await admin.firestore().collection(`Businesses/${id}/deals`).add(deal).then(req => { return true; }).catch((error => { return false; }));
            return status;
        });
        exports.getAllDeals = functions.https.onCall(async (request) => {
            const id = request["ID"];
            const deals = admin.firestore().collection(`Businesses/${id}/deals`).get().then(snaps => { return snaps.docs; }).catch((error => { return []; }));
            return deals;
        });
        exports.deleteDeal = functions.https.onCall(async (requestData) => {
            const id = requestData["ID"];
            const dealID = requestData["dealID"];
            const status = await admin.firestore().doc(`Businesses/${id}/deals/${dealID}`).delete().then(req => { return true; }).catch((error => { return false; }));
            return status;
        });


   