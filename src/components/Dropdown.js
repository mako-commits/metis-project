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
      <Link to="/wallet" className="p-4">
        Connect Wallet
      </Link>
      <Link to="/collection" className="p-4">
        View Collection
      </Link>
      <Link to="/partners" className="p-4">
        Partners
      </Link>
    </div>
  );
};

export default Dropdown;
