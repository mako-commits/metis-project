import React from "react";
import { Link } from "react-router-dom";
import DashNav from "../components/DashNav";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <main className="bg-gray-400">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          <div className="border-2  bg-gray-200 shadow-lg rounded-lg py-5 px-5">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-black">
              Good day
            </h1>
            <h2 className="text-md text-black">
              So here&#x27;s what&#x27;s happening with your account today.
            </h2>
          </div>
          <div className="flex flex-wrap  border-2 border-dashed bg-gray-200 shadow-lg  rounded-lg my-10">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                  {/* <img
                    src="https://img.clankapp.com/symbol/btc.svg"
                    alt="btc logo"
                    className="h-24 w-24 rounded-full absolute opacity-50 -top-6 -right-6 md:-right-4"
                  /> */}
                  <span className="rounded-xl relative p-4 bg-purple-200">
                    <svg
                      width="40"
                      fill="currentColor"
                      height="40"
                      className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                    </svg>
                  </span>
                  <p className="text-md text-black dark:text-white ml-2">
                    Total Transactions
                  </p>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                    151,200
                    <span className="text-sm">$</span>
                  </p>
                  <div className="flex items-center text-green-500 text-sm">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                    </svg>
                    <span>5.5%</span>
                    <span className="text-gray-400">vs last month</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                  <span className="rounded-xl relative p-4 bg-purple-200">
                    <svg
                      width="40"
                      fill="currentColor"
                      height="40"
                      className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                    </svg>
                  </span>
                  <p className="text-md text-black dark:text-white ml-2">
                    CNTM Curent Value
                  </p>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                    3,500
                    <span className="text-sm">$</span>
                  </p>
                  <div className="flex items-center text-green-500 text-sm">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                    </svg>
                    <span>5.5%</span>
                    <span className="text-gray-400">vs last month</span>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
                  
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="shadow-lg rounded-xl w-full md:w-80 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="w-full flex items-center justify-between mb-8">
                  <p className="text-gray-800 dark:text-white text-xl font-normal">
                    Offers
                  </p>
                  <Link
                    to="/offer"
                    className="flex items-center text-sm hover:text-gray-600 dark:text-gray-50 dark:hover:text-white text-gray-300 border-0 focus:outline-none"
                  >
                    VIEW ALL
                  </Link>
                </div>
                <div className="flex items-start mb-6 rounded justify-between">
                  <span className="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"></path>
                    </svg>
                  </span>
                  <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                      <p className="text-gray-700 dark:text-white">
                        <span className="font-bold mr-1">Andrea</span>
                        I'll like this item
                      </p>
                      <p className="text-gray-300">Aug 10</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start mb-6 rounded justify-between">
                  <span className="rounded-full text-white dark:text-gray-800 p-2 bg-green-400">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path>
                    </svg>
                  </span>
                  <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                      <p className="text-gray-700 dark:text-white">
                        <span className="font-bold mr-1">Karen</span>
                        Care for a peer-to-peer swap?
                      </p>
                      <p className="text-gray-300">Aug 10</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start mb-6 rounded justify-between">
                  <span className="rounded-full text-white dark:text-gray-800 p-2 bg-indigo-400">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path>
                    </svg>
                  </span>
                  <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                      <p className="text-gray-700 dark:text-white">
                        <span className="font-bold mr-1">Karen</span>
                        Care for a peer-to-peer swap?
                      </p>
                      <p className="text-gray-300">Aug 09</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start rounded justify-between">
                  <span className="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"></path>
                    </svg>
                  </span>
                  <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                      <p className="text-gray-700 dark:text-white">
                        <span className="font-bold mr-1">John</span>I want this
                        item
                      </p>
                      <p className="text-gray-300">Aug 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
              <h1 className="italic text-xl">Your dashboard</h1>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
