import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-purple-100"
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
      <Link to="/gallery" className="p-4">
        Gallery
      </Link>
      <Link to="/partners" className="p-4">
        Partners
      </Link>
      <Link
        to="/wallet"
        className="p-4 lg:mt-2 xl:mt-0 flex-shrink-0  text-white bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800  border-0 py-2 px-6 rounded "
      >
        Connect Wallet
      </Link>
    </div>
  );
};

export default Dropdown;
