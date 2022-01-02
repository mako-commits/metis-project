import React, { useState } from "react";
import { db } from "../config/firebase";

const OfferForm = (props) => {
  const [enteredOffer, setEnteredOffer] = useState("");
  const [enteredValue, setEnteredValue] = useState("");

  const offerChangeHandler = (event) => {
    setEnteredOffer(event.target.value);
  };
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const offerData = {
      offer: enteredOffer,
      value: enteredValue,
    };

    //add offer to firebase
    db.collection("Businesses")
    .doc("0xfcCd950FA8cBd332634BcC57809A8a9A0496D4B6")
    .collection("deals")
    .add({
      info: enteredOffer,
      value: enteredValue
    })  
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    console.log(offerData);
    props.onReceivedOfferData(offerData);

    setEnteredOffer("");
    setEnteredValue("");
  };

  return (
    <form onSubmit={submitHandler} className="bg-white p-10 rounded">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Offer</label>
          <input
            type="text"
            onChange={offerChangeHandler}
            value={enteredOffer}
          />
        </div>
        <div className="new-expense__control">
          <label>Value</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={valueChangeHandler}
            value={enteredValue}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="button"
          onClick={props.onCancelEditing}
          className="lg:mt-2 xl:mt-6 flex-shrink-0 inline-flex text-white bg-red-800 border-0 py-2 px-6 mr-3 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="lg:mt-2 xl:mt-6 flex-shrink-0 inline-flex text-white bg-green-800 border-0 py-2 px-6  rounded"
        >
          Add Offer
        </button>
      </div>
    </form>
  );
};

export default OfferForm;
