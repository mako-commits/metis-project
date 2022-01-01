import React from "react";
import { Link } from "react-router-dom";

const Roadmap = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-800 mt-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white italic">
            Our Awesome <br />
            <span className="underline decoration-purple-800">NFT Roadmap</span>
          </h1>

          {/* <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p> */}

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-purple-800 dark:border-purple-800 rounded-xl">
              <span className="inline-block text-purple-800 dark:text-purple-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white italic">
                Daily Reward
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Holders of our NFT receive 100 CNTM daily for the next 10 years
                and which would enables them partake in voting, redeem rewards,
                and more being planned.
              </p>
              <Link
                to="#"
                className="inline-flex p-2 text-purple-800 capitalize transition-colors duration-200 transform bg-purple-100 rounded-full dark:bg-purple-800 dark:text-white hover:underline hover:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>

            <div className="p-8 space-y-3 border-2 border-purple-800 dark:border-purple-800 rounded-xl">
              <span className="inline-block text-purple-800 dark:text-purple-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white italic">
                Exclusive Access
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                In partnership with top luxury brands in Africa, our NFT holders
                would be rewarded with top of the line features such as one
                night presidential stay at The Palms Hotel, Abuja.
              </p>
              <Link
                to="#"
                className="inline-flex p-2 text-purple-800 capitalize transition-colors duration-200 transform bg-purple-800 rounded-full dark:bg-purple-800 dark:text-white hover:underline dark:hover:bg-purple-400 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>

            <div className="p-8 space-y-3 border-2 border-purple-800 dark:border-purple-800 rounded-xl">
              <span className="inline-block text-purple-800 dark:text-purple-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white italic">
                Expansion
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                With more brands getting on board our platform, this would only
                drive the demand for the NFT and bring in more users to our
                network and to our partners
              </p>
              <Link
                to="#"
                className="inline-flex p-2 text-purple-800 capitalize transition-colors duration-200 transform bg-purple-800 rounded-full dark:purple-800 dark:text-white hover:underline dark:hover:bg-purple-400 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
