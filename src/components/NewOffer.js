import React, { useState } from "react";
import OfferForm from "./OfferForm";

const NewOffer = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const receivedOfferDataHandler = (enteredOfferData) => {
    const offerData = {
      ...enteredOfferData,
      id: Math.random().toString(),
    };
    props.onAddOffer(offerData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense mx-auto mt-4 w-auto">
      {!isEditing ? (
        <button
          onClick={startEditingHandler}
          className="lg:mt-2 xl:mt-6 flex-shrink-0 inline-flex text-white bg-yellow-300 border-0 rounded hover:bg-yellow-500 py-2 px-6"
        >
          Add New Offer
        </button>
      ) : (
        <OfferForm
          onReceivedOfferData={receivedOfferDataHandler}
          onCancelEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewOffer;
