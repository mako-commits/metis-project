import React, { useState } from "react";
import { metadata } from '../constants/metadata'
import ArtCard from "../components/ArtCard/ArtCard";

const Collections = () => {
  
  const metaLength = metadata.length
  const [currentIndex, setCurrentindex] = useState(11)

  const add = () => {
    if(currentIndex < metaLength){
      setCurrentindex(currentIndex+11)
    }else if(currentIndex === metaLength){
      setCurrentindex(11)
    }
  } 

  return (
    <div className="grid place-items-center my-10">
      <div className = "container m-auto flex flex-wrap justify-center">
        {
          metadata.slice(0,currentIndex).map((data) => (
            <ArtCard
              image= {data.image}
              name = {data.name}
            />
          ))
        }   
      </div>
      <button 
        className="lg:mt-2 xl:mt-6 flex-shrink-0 inline-flex text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 py-2 px-6  rounded "
        onClick={add}
      > Load More </button>       
    </div>
  );
};

export default Collections;
