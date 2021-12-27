import React from "react";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Partners from "./partners";


const Home = () => {
  return (
    <>
    <section className="">
    <div className="container mx-auto flex flex-col justify-center items-center ">
        
        <Hero/>
        <div className="flex flex-col justify-center items-center lg:w-2/4 w-4/5 pt-8">
        <h1 className="lg:text-4xl text-xl italic uppercase font-black ">Welcome to Metis Hack</h1>
        <p className="text-base leading-8 pt-8">Metis Hack is a brand of Digital NFT collectibles. They Live on the Solana blockchain and can be purchased from multiple market places ( see links above).

            The original Series were the Skellies you see above.

            Below you will find plans for future and current collections. Spiders have already been released.

            Please join our Discord if you have questions, we are a very helpful bunch.</p>
            <button className="bg-indigo-800 hover:bg-indigo-400 transition duration-300 ease-in-out py-3 px-5 text-white rounded-md mt-4">Join our Community</button>
        </div>
        
      <div className="flex flex-col justify-center items-center lg:w-2/4 w-4/5 pt-8">
      <h1 className="lg:text-4xl text-xl italic uppercase font-black ">Backed by</h1>
        <p className="text-base leading-8 pt-8">Our Partners</p>
      </div>
      
      </div>
      <Partners className="flex-row"/>
      <Roadmap />
    </section>
  
    </>
  );
};

export default Home;
