import React, { useState,useEffect } from "react";
import Modal from "react-modal";
import { ethers } from "ethers";

import { rarity } from '../../constants/rarity'
import { isMetaMaskInstalled, tryMetaMaskConnect } from "../../constants/walletLogic";
import { mintLogic } from "../../constants/mintLogic";

Modal.setAppElement("#root");
const ArtCard = ({ image, name, attributes, edition }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const [connected, setConnected] = useState(false);

  const isMetaMaskConnected = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    console.log(accounts.length);
    if (accounts.length > 0) {
        console.log("true");
        setConnected(true);
        return true;
    } else {
        console.log("false");
        setConnected(false);
        return false;
    }
  };

  const connectWallet = () => {
    if (isMetaMaskInstalled()) {
        tryMetaMaskConnect();
    } else {
        alert("Please Install Metamask");
    }
  };

  useEffect(() => {
    isMetaMaskInstalled() && isMetaMaskConnected() && setConnected(true);
    // eslint-disable-next-line
  }, []);

  const mint = () =>{
    // alert("mint")
    // alert(edition)
    mintLogic.prepURI(edition)
  }
  return (
    <>
      <div
        className="mx-8 my-4 rounded-md"
        onClick={() => setModalIsOpen(true)}
      >
        <img
          loading=""
          className="lg:h-72 md:h-60 sm:h-48 w-auto bg-gray-200 object-contain object-center rounded-md shadow-md"
          src={image}
          alt="blog"
        />
        <p className="mt-4">{name}</p>
      </div>

      <Modal
        className="popup"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            height: "auto",
            margin: "auto",
            marginTop: "50px",
            backgroundColor: "#fff",
          },
        }}
      >
        <div className="popup-close-btn">
          <button
            onClick={() => setModalIsOpen(false)}
            className="px-5 py-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="h-6 w-6 text-red-700"
              viewBox="0 0 1792 1792"
            >
              <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
            </svg>
          </button>
        </div>

        <div className="p-4 ">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col lg:flex-row">
            <img
              className="lg:h-96 md:h-36 lg:w-1/2 object-cover object-center"
              src={image}
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {name}
              </h1>

              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 pb-2">
                Rarity
              </h2>
                {
                  attributes?.map((trait) => {
                    const traitValue = rarity[trait.trait_type].filter((item) => item.trait === trait.value )[0].occurrence.slice(-7) 
                    
                    return(
                      <div className="leading-relaxed mb-3 bold flex items-baseline">
                        <p className="italic ">{trait.trait_type}</p>: <p className="pl-2 text-sm">{traitValue}</p>
                      </div>
                    )
                  }) 
                }
            </div>

              {connected ? (
                <button 
                className="cursor-pointer text-white bg-purple-800 border-0 py-2 px-4 m-auto rounded "
                onClick={mint}
              >
                Buy
              </button>
              ) : (
                <p
                  className=" cursor-pointer text-white bg-purple-800 border-0 py-2 px-4 m-auto rounded"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </p>
              )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ArtCard;
