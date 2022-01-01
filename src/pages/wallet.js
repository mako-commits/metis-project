import React, { useEffect, useState } from "react";
import { metadata } from "../constants/metadata";
import ArtCard from "../components/ArtCard/ArtCard";
import { db } from "../config/firebase";
import DashNav from "../components/DashNav";
const Wallet = () => {
  const [minted, setMinted] = useState([]);
  
  useEffect(() => {
    window.ethereum.selectedAddress !== undefined
    &&
    db.collection("minted")
      .doc(window.ethereum.selectedAddress)
      .onSnapshot( snapshot => {
          let dna = snapshot.data();
          dna = dna.dna;
          setMinted(dna)
      });
  }, []);

  const mintedIncludes = (_dna) => {
    return minted.includes(_dna);
  };

  return (
    <>
      <DashNav />
      <div className="bg-gray-200">
        <div className=" mx-10 ">
          <div className=" flex flex-col items-center pt-10 mb-8">
            <div className="rounded-full bg-red-400 w-32">
              <img
                className="rounded p-4"
                alt="profile"
                src={`https://avatars.dicebear.com/api/bottts/${window.ethereum.selectedAddress}.svg`}
              />
            </div>
            <p className="text-lg font-bold pt-2">
              {window.ethereum.selectedAddress?.slice(0, 6)}
            </p>
          </div>

          <div>
            <h1 className="text-xl ml-24 font-bold pt-2 -mb-5">
              Minted collection
            </h1>

            <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <div className="grid place-items-center p-6">
                      <div className="container m-auto  flex flex-wrap justify-center">
                        {metadata.map(
                          (data) =>
                            mintedIncludes(data.dna) && (
                              <ArtCard
                                key={data.dna}
                                dna={data.dna}
                                image={data.image}
                                name={data.name}
                                attributes={data.attributes}
                                edition={data.edition}
                                minted={minted}
                              />
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
