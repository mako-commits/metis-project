import React from "react";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Roadmap from "../components/Roadmap";

const Home = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto flex flex-col justify-center items-center ">
          <Hero />
          <div className="flex flex-col justify-center items-center lg:w-2/4 w-4/5 pt-8">
            <h1 className="lg:text-4xl text-xl italic uppercase font-black ">
              Welcome to Titan Wing
            </h1>
            <p className="text-base leading-8 pt-8">
              Titan Wing is a wingist network limited collection. They Live on
              the Solana blockchain and can be purchased from multiple market
              places ( see links above). The original Series were the Skellies
              you see above. Below you will find plans for future and current
              collections. Spiders have already been released. Please join our
              Discord if you have questions, we are a very helpful bunch.
            </p>
            <button className="bg-purple-800 hover:bg-purple-400 transition duration-300 ease-in-out py-3 px-5 text-white rounded-md mt-4">
              Join our Community
            </button>
          </div>

          <div className="flex flex-col justify-center items-center lg:w-2/4 w-4/5 pt-8 mt-20">
            <h1 className="lg:text-4xl text-xl italic uppercase font-black ">
              Backed by
            </h1>
          </div>
        </div>
        <Logo />
        <Roadmap />
      </section>
    </>
  );
};

export default Home;
