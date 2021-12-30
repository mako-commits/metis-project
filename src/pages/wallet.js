import React from "react";

const Wallet = () => {
  return (
    <div className="h-screen m-10">

      <div className=" flex flex-col items-center my-10">
        <div className="rounded-full bg-red-400 w-32" >
          <img className="rounded p-4" src={`https://avatars.dicebear.com/api/bottts/${window.ethereum.selectedAddress}.svg`} />
        </div>
        <p className="text-lg font-bold pt-2">{ (window.ethereum.selectedAddress).slice(0, 6) }</p>
      </div>

      <div>
        <h1 className="text-xl ml-24 font-bold pt-2">My collection</h1>

        <div>
            <img/>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
