import React, { useState } from "react";
import DashNav from "../../components/DashNav";
import NewOffer from "../../components/NewOffer";
import OfferItem from "../../components/OfferItem";
const DUMMY_OFFERS = [
  {
    id: "OF1",
    offer: "10% off drinks for 300 CNTM every Wednesday",
    value: 300,
  },
  {
    id: "OF2",
    offer: " 15% off on weekends for 500 CNTM",
    value: 500,
  },
  {
    id: "OF3",
    offer: "75 CNTM for each referral",
    value: 75,
  },
  {
    id: "OF4",
    offer: "Valley parking for 600 CNTM",
    value: 600,
  },
];

const RestOffer = (props) => {
  const [offers, setOffers] = useState(DUMMY_OFFERS);

  const onDeleteOffer = (id) => {
    const newOffer = [...offers];
    const index = offers.findIndex((offer) => offer.id === id);
    newOffer.splice(index, 1);
    setOffers(newOffer);
  };
  const addOfferHandler = (offer) => {
    setOffers((prevOffers) => {
      return [offer, ...prevOffers];
    });
  };
  return (
    <>
      <DashNav />
      <main className="bg-gray-400">
        <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="mb-5">
                <NewOffer onAddOffer={addOfferHandler} />
              </div>

              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Offer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Value
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {offers.map((item) => (
                      <OfferItem
                        deleteOffer={onDeleteOffer}
                        key={item.id}
                        offer={item.offer}
                        value={item.value}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <h1 className="italic text-xl">Wow....Such empty</h1>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default RestOffer;
