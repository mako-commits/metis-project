import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-purple-400"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/wallet" className="p-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  border-0 py-2 px-6 rounded ">
          Connect Wallet
        </Link>
      <Link to="/gallery" className="p-4">
        Gallery
      </Link>
      <Link to="/partners" className="p-4">
        Partners
      </Link>
    </div>
  );
};

export default Dropdown;
