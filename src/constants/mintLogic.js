import { ethers } from "ethers";

const nft_contract_address = "0x31bb1dbE05aE866024FF9a351fe16f10c8F26bcD"

export const mintLogic = {

    prepURI: async (_metadataURI) => {
        const metadataURI = `https://bafybeibeqfjn5jme2t4brc5u3ejhy62ohmszmajqfstodashmezgop3p5e.ipfs.dweb.link/${_metadataURI}.json`

        // alert(metadataURI)

        await mintLogic.mintNFT(metadataURI)
          .then(mintLogic.notify)
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

