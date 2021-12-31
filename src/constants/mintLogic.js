import { ethers } from "ethers";
import firebase from "firebase";
import { db } from "../config/firebase";

const nft_contract_address = "0x31bb1dbE05aE866024FF9a351fe16f10c8F26bcD"

export const mintLogic = {

    prepURI: async (_metadataURI, _dna) => {
        const metadataURI = `https://bafybeibeqfjn5jme2t4brc5u3ejhy62ohmszmajqfstodashmezgop3p5e.ipfs.dweb.link/${_metadataURI}.json`

        const _data = {
          "dna": firebase.firestore.FieldValue.arrayUnion(_dna),
        }

        await mintLogic.mintNFT(metadataURI)
          .then(() => {
            db.collection('minted')
              .doc(window.ethereum.selectedAddress)
              .set(_data, { merge: true } )
              .then(() => {
                  console.log("Document successfully written!");
                  window.location.replace("/wallet")
              }).catch(()=> console.log("could not save to db"))
          })
          .catch((err) => console.log(err))
    },

      mintNFT: async (_uri) => {
          const ABI = [ "function mintNFT(address to, string memory tokenURI)" ]

          const  iface = new ethers.utils.Interface(ABI);
          
          const encodedFxn = iface.encodeFunctionData("mintNFT", [ window.ethereum.selectedAddress, _uri ])
          
          const transactionParameters = {
            to: nft_contract_address,
            from: window.ethereum.selectedAddress,
            data: encodedFxn
          };

          const txt = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
          });

          return txt
      },

    notify: async (_txt) => {
        alert(`Your NFT was minted in transaction ${_txt}`)
    }
}

