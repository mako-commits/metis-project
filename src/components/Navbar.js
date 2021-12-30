import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { METIS_TESTNET_STARDUST } from "../constants/network";

const Navbar = ({ toggle }) => {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(false);

  const isMetaMaskInstalled = () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      return true;
    } else {
      console.log("please install metamask");
      return false;
    }
  };

  const toHex = (num) => {
    return "0x" + num.toString(16);
  };

  const addNetworkToWallet = async (chain) => {
    const params = {
      chainId: toHex(chain.chainId),
      chainName: chain.name,
      nativeCurrency: {
        name: chain.nativeCurrency.name,
        symbol: chain.nativeCurrency.symbol,
        decimals: chain.nativeCurrency.decimals,
      },
      rpcUrls: chain.rpc,
      blockExplorerUrls: [
        chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url
          ? chain.explorers[0].url
          : chain.infoURL,
      ],
    };

    await window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [params],
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
        navigate("/wallet");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const changeWalletNetwork = async (chainID) => {
    await window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(chainID) }], // chainId must be in hexadecimal numbers
      })
      .then((res) => {
        window.location.reload();
      })
      .catch(async (error) => {
        //@ts-ignore
        console.log(error.code);
        //@ts-ignore
        if (error.code === 4902) {
          addNetworkToWallet(METIS_TESTNET_STARDUST);
        }
      });
  };

  //if not connected show sign in pop-up(in-built)
  const tryMetaMaskConnect = async () => {
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(() => {
        changeWalletNetwork(588);
      })
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log("Please connect to MetaMask.");
        } else {
          console.error(error);
        }
      });
  };

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

  useEffect(() => {
    isMetaMaskInstalled() && isMetaMaskConnected() && setConnected(true);
    // eslint-disable-next-line
  }, []);

  const connectWallet = () => {
    if (isMetaMaskInstalled()) {
      tryMetaMaskConnect();
    } else {
      alert("Please Install Metamask");
    }
  };

  return (
    <div
      className="flex justify-between items-center h-20 text-black text-sm font-medium relative shadow-sm"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <h1 className="text-3xl font-semibold italic flex items-baseline">TitanWing <p className="pl-2 text-blue-500 text-xs not-italic font-medium tracking-wider">BETA</p></h1>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/gallery" className="p-4">
          Gallery
        </Link>
        <Link to="/partners" className="p-4">
          Partners
        </Link>
        {connected ? (
          <p className=" cursor-pointer p-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 border-0 py-2 px-6 rounded">
            Connected ✔
          </p>
        ) : (
          <p
            className=" cursor-pointer p-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 border-0 py-2 px-6 rounded"
            onClick={connectWallet}
          >
            Connect Wallet
          </p>
        )}

        {connected && (
          <Link to="/wallet" className="p-4 text-indigo-500 font-semibold">
            Me
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
