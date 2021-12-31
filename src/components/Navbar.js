import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  isMetaMaskInstalled,
  tryMetaMaskConnect,
} from "../constants/walletLogic";

const Navbar = ({ toggle }) => {
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

  return (
    <div
      className="flex justify-between items-center h-20 text-black text-sm font-medium relative shadow-sm"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <h1 className="text-3xl font-semibold italic flex items-baseline">
          TitanWing{" "}
          <p className="pl-2 text-blue-500 text-xs not-italic font-medium tracking-wider">
            BETA
          </p>
        </h1>
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
        {/* <Link to="/partners" className="p-4">
          Partners
        </Link> */}
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
