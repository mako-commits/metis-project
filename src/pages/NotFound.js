import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main class="bg-white overflow-hidden h-screen relative">
        <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
          <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
            <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
              <h1 class="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700 mb-16">
                Sorry, this page isn&#x27;t available
              </h1>
              <Link to="/">
                <button class="lg:mt-2 xl:mt-0  flex-shrink-0 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded">
                  Back to home
                </button>
              </Link>
            </div>
            <div class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
              <img
                src="https://www.tailwind-kit.com/images/illustrations/1.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
