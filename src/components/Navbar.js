import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { METIS_TESTNET_STARDUST } from '../constants/network'

const Navbar = ({ toggle }) => {

  return (
    <div
      className="flex justify-between items-center h-20 text-black text-sm font-medium relative shadow-sm"
      role="navigation"
    >      
      <Link to="/" className="pl-8">
        <h1 className="text-3xl font-semibold italic">TitanWing</h1>
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
      </div>
    </div>
  );
};

export default Navbar;
