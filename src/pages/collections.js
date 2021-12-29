import React, { useState } from "react";
import { metadata } from '../constants/metadata'
import ArtCard from "../components/ArtCard/ArtCard";

const Collections = () => {
<<<<<<< HEAD
  const [allCollections, setAllCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [filters, setFilters] = useState({ s: "", sort: "" });

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = () => {
    axios
      .get("./items.json")
      .then((res) => setAllCollections(res.data))
      .then((res) => setFilteredCollections(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    let collections = allCollections.filter(
      (p) =>
        p.item_name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 ||
        p.status.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0
    );

    if (filters.sort === "price" || filters.sort === "status") {
      collections.sort((a, b) => {
        const diff = a.price - b.price;
        if (diff === 0) return 0;

        const sign = Math.abs(diff) / diff;
        return filters.sort === "price" ? sign : -sign;
      });
=======
  
  const metaLength = metadata.length
  const [currentIndex, setCurrentindex] = useState(11)

  const add = () => {
    if(currentIndex < metaLength){
      setCurrentindex(currentIndex+11)
    }else if(currentIndex === metaLength){
      setCurrentindex(11)
>>>>>>> 68031dcd9d72cd389cb2970b3bc38ea7cb356580
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
