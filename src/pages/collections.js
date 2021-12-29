import React, { useEffect, useState } from "react";
import Collection from "../components/Collection";
import axios from "axios";
// import items from '../components/items.json'

const Collections = () => {
  const [allCollections, setAllCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [filters, setFilters] = useState({ s: "" });

  useEffect(() => {
    axios
      .get("./items.json")
      .then((res) => setAllCollections(res.data))
      .then((res) => setFilteredCollections(res.data))
      .catch((err) => console.log(err));
  }, []);

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
    }

    setFilteredCollections(collections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  return (
    <>
      <div className=" container mx-auto ">
        <Collection
          collections={filteredCollections}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </>
  );
};

export default Collections;
