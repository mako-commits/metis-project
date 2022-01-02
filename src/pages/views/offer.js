import React, { useEffect, useState } from "react";
import DashNav from "../../components/DashNav";
import { db } from "../../config/firebase";

const Offer = () => {
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])

  const [displayData, setDisplayData] = useState([])

  useEffect(() => {
    //hotel
    db.collection("Businesses")
      .doc("0x8c12d017b5441c735050d13d034e19d459ebd33a")
      .collection("deals")
      .onSnapshot((snapshot) => {
        let dna = snapshot.docs.map((offer) => offer.data());
        setData(dna)
      });

      //rest.
      db.collection("Businesses")
      .doc("0xfccd950fa8cbd332634bcc57809a8a9a0496d4b6")
      .collection("deals")
      .onSnapshot((snapshot) => {
        let dna = snapshot.docs.map((offer) => offer.data());
        setData1(dna)
      });
  },[])

  useEffect(() => {
    const _data = data.concat(data1)
    setDisplayData(_data)
  },[data, data1])


  const onAddFunds = () => {
    setBalance(balance + 50);
  };

  const onRedeem = (event) => {
    event.preventDefault();
    alert("Congrats you just redeemed offf");
  };

  return (
    <>
      <DashNav />
      {console.log(displayData)}
      <main className="bg-gray-400">
        <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="mb-5">
                <h1>Current balance: {balance}</h1>
                <button
                  onClick={onAddFunds}
                  className="lg:mt-2 xl:mt-0 mr-2 flex-shrink-0 inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded"
                >
                  Add funds
                </button>
              </div>

              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {displayData?.map((person) => (
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={`${data.filter((item) => item.info === person.info)}` ? "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" : "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {`${data.filter((item) => item.info === person.info)}` ? "Hotel" : "Restaurant"}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.value}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {person.info}
                          </div>
                        </td>

                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          {balance > person.value ? (
                            <button
                              onClick={onRedeem}
                              className="lg:mt-2 xl:mt-0 mr-2 flex-shrink-0 inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded"
                            >
                              Redeem
                            </button>
                          ) : (
                            <button className="cursor-not-allowed lg:mt-2 xl:mt-0 ml-2 flex-shrink-0 inline-flex text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded">
                              Insufficient funds
                            </button>
                          )}
                        </td>
                      </tr>
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

export default Offer;
