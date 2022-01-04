import React, { useEffect, useState } from "react";
import AdminDashNav from "../../components/AdminDashNav";
import NewOffer from "../../components/NewOffer";
import OfferItem from "../../components/OfferItem";
import { db } from "../../config/firebase";

const RestOffer = (props) => {
  const [offers, setOffers] = useState([]);
  const [ids, setIds] =useState([]);

  //get offers from firebase
  useEffect(() => {
    db.collection("Businesses")
      .doc(window.ethereum.selectedAddress)
      .collection("deals")
      .onSnapshot((snapshot) => {
        let dna = snapshot.docs.map((offer) => offer.data());
        setOffers(dna)
      });
      //eslint-disable-next-line
  },[window.ethereum.selectedAddress])

  //get offer ids
  useEffect(() => {
    db.collection("Businesses")
    .doc(window.ethereum.selectedAddress)
    .collection("deals")
    .onSnapshot((images) => {
      setIds(images.docs.map((image) => image.id));
    });
      //eslint-disable-next-line
  },[window.ethereum.selectedAddress])

  const onDeleteOffer = (index) => {    
    db.collection("Businesses")
      .doc(window.ethereum.selectedAddress)
      .collection("deals")
      .doc(ids[index])
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <>
      <AdminDashNav />
      <main className="bg-gray-400">
        <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="mb-5">
                <NewOffer />
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
                    {offers?.map((item, index) => (
                      <OfferItem
                        deleteOffer={() => onDeleteOffer(index)}
                        key={index}
                        offer={item.info}
                        value={item.value}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RestOffer;
