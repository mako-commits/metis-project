import React, { useEffect, useState } from "react";
import { metadata } from "../constants/metadata";
import ArtCard from "../components/ArtCard/ArtCard";
import { db } from "../config/firebase";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";

const Collections = (props) => {
  const metaLength = metadata.length;
  const [currentIndex, setCurrentindex] = useState(11);
  const [minted, setMinted] = useState([]);

  const add = () => {
    if (currentIndex < metaLength) {
      setCurrentindex(currentIndex + 11);
    } else if (currentIndex === metaLength) {
      setCurrentindex(11);
    }
  };

  useEffect(() => {
    db.collection("minted").onSnapshot((images) => {
      let dna = images.docs.map((image) => image.data());
      dna = dna.map((item) => item.dna).flat();
      setMinted(dna);
    });
  }, []);

  const mintedIncludes = (_dna) => {
    return minted.includes(_dna);
  };

  return (
    <>
      <Navbar toggle={props.toggle} />
      <Dropdown isOpen={props.isOpen} toggle={props.toggle} />
      <div className="grid place-items-center my-10">
        <div className="container m-auto flex flex-wrap justify-center">
          {metadata.slice(0, currentIndex).map((data) => (
            <div
              key={data.dna}
              className={`${
                mintedIncludes(data.dna) &&
                "pointer-events-none opacity-30 cursor-default"
              }`}
            >
              <ArtCard
                dna={data.dna}
                image={data.image}
                name={data.name}
                attributes={data.attributes}
                edition={data.edition}
                minted={minted}
              />
            </div>
          ))}
        </div>
        <button
          className="lg:mt-2 xl:mt-6 flex-shrink-0 inline-flex text-white bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 border-0 py-2 px-6  rounded "
          onClick={add}
        >
          {" "}
          Load More{" "}
        </button>
      </div>
    </>
  );
};

export default Collections;
