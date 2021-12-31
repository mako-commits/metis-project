import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
const Partners = (props) => {
  return (
    <>
      <Navbar toggle={props.toggle} />
      <Dropdown isOpen={props.isOpen} toggle={props.toggle} />
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-xl mx-auto">
          <h1 class="lg:text-4xl text-xl italic uppercase font-black ">
            Join the trend, abuse it then move on to the next
          </h1>

          <p class="mt-6 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>

          <div class="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-500 dark:focus-within:border-purple-500 focus-within:ring-opacity-40">
            <form class="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-purple-800 rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>
      <Logo />
    </>
  );
};

export default Partners;
