import React from "react";

const Collection = (props) => {
  const search = (s) => {
    props.setFilters({
      ...props.filters,
      s,
    });
  };
  const sort = (sort) => {
    props.setFilters({
      ...props.filters,
      sort,
    });
  };
  return (
    <>
      <div>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              for="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
              Search
            </label>
            <input
              onChange={(e) => search(e.target.value)}
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <select
            onChange={(e) => sort(e.target.value)}
            className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="animals"
          >
            <option value="">Select an option</option>
            <option value="price"> Acsending Price</option>
            <option value="status">Descending Price</option>
            <option value="rarity">Rarity</option>
          </select>

          {/* <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
        </div>
      </div>
      <div className="p-4 flex flex-wrap -m-4 ">
        {props.collections.map((collection) => {
          return (
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden md:w-1/4 my-10 mx-5">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={collection.img}
                alt="blog"
              />

              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {collection.item_name}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Value: ${collection.price}
                </h1>
                <p className="leading-relaxed mb-3">
                  Status: {collection.status}
                </p>
                <p className="leading-relaxed mb-3">
                  Rarity: {collection.rarity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Collection;
