import React from "react";
import hero from "../images/hero.jpeg";

const Hero = () => {
  return (
    <>
      <section class=" body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl  mb-4 lg:text-4xl text-xl italic uppercase font-black">
              Welcome to
              <br class="hidden lg:inline-block" />
              Titan Wing
            </h1>
            <p class="mb-8 text-base leading-8 ">
              Continium is a platform for the hospitality and entertainment
              industry in Africa, with our crisp NFT collection, holders would
              be rewarded daily with our CNTM token for the next 10 years and
              get access to exclusive features offered only by our partners.
              With our token, holders of the token would be able to redeem it
              for discounts, referrals at any of our partner locaations. This is
              not something you want to miss out on
            </p>
            <div class="flex justify-center">
              <button className="bg-purple-800 hover:bg-purple-400 transition duration-300 ease-in-out py-3 px-5 text-white rounded-md mt-4">
                Join our Community
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
