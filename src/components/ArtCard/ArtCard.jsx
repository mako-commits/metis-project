import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
const ArtCard = ({ image, name }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div
        className="mx-8 my-4 rounded-md"
        onClick={() => setModalIsOpen(true)}
      >
        <img
          loading=""
          className="lg:h-72 md:h-60 sm:h-48 w-auto bg-gray-200 object-contain object-center rounded-md shadow-md"
          src={image}
          alt="blog"
        />
        <p className="mt-4">{name}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {},
        }}
      >
        <button
          onClick={() => setModalIsOpen(false)}
          className="bg-red-400 px-5 py-3 rounded-md"
        >
          Close
        </button>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={image}
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Rare Piece
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {name}
              </h1>
              <p className="leading-relaxed mb-3">background: 30%</p>
              <p className="leading-relaxed mb-3">rare eye: 33%</p>
              <p className="leading-relaxed mb-3">cloth: 21%</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ArtCard;
