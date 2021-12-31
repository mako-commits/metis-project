import React from "react";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Roadmap from "../components/Roadmap";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
const Home = (props) => {
  return (
    <>
      <Navbar toggle={props.toggle} />
      <Dropdown isOpen={props.isOpen} toggle={props.toggle} />
      <section className="">
        <div className="container mx-auto flex flex-col justify-center items-center ">
          <Hero />
          <div className="flex flex-col justify-center items-center lg:w-2/4 w-4/5 pt-8 mt-20">
            <h1 className="lg:text-4xl text-xl italic uppercase font-black ">
              Our Partners
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
