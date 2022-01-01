import React, { useEffect, useState } from "react";
import DashNav from "../components/DashNav";
import firebase from 'firebase'
import Accordion from "../components/Accordion";

const Dashboard = () => {
  const [transactions, setTransactions]  = useState([]);
  const [currentIndex, setCurrentindex] = useState(5);
  const add = () => {
    if (currentIndex < transactions?.length) {
      setCurrentindex(currentIndex + 5);
    } else if (currentIndex === transactions?.length) {
      setCurrentindex(5);
    }
  };

  useEffect(() => {
    const magic = firebase.functions().httpsCallable('getAllTransactions')
    magic({ wallet: window.ethereum.selectedAddress }).then(res => {
      setTransactions(res.data)
    })
  },[])

  return (
    <>
      <DashNav />
    
      <main className="bg-gray-400">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg: px-8 ">
        
          <div className="border-2  bg-gray-200 shadow-lg rounded-lg py-5 px-5">
            <h1 className="mb-2 text-4xl font-semibold text-gray-800 dark:text-black">
             Hey {(window.ethereum.selectedAddress)?.slice(0, 6)}...
            </h1>
            <h2 className="text-md text-black">
              Here are your recent transactions:
            </h2>
          </div>
          {
            transactions?.slice(0,currentIndex).map((transaction, index) => (
              <Accordion
                key ={transaction.blockHash}
                title={transaction.hash}
                from={transaction.from}
                to={transaction.to}
                value={transaction.value}
                time={transaction.timeStamp}
                open={index===0}
              />
            ))
          }
          <button
            className="lg:mt-2 xl:mt-6 flex-shrink-0 inline-flex text-white bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800 border-0 py-2 px-6  rounded "
            onClick={add}
          >
            {" "}
            Load More{" "}
          </button>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
