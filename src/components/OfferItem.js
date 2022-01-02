import React from "react";

function OfferItem(props) {
  return (
    <tr key={props.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{props.offer}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.value}</div>
      </td>

      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
        <button
          onClick={props.deleteOffer}
          className="lg:mt-2 xl:mt-0 mr-2 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default OfferItem;
