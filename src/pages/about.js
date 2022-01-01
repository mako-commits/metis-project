import React from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import ProfileCards from "../components/ProfileCards";

const About = (props) => {
  return (
    <>
      <Navbar toggle={props.toggle} />
      <Dropdown isOpen={props.isOpen} toggle={props.toggle} />
      <div className="container mx-auto flex flex-col justify-center md:justify-start  md:items-start lg:w-10/12 w-4/5">
        <h1 className="lg:text-4xl text-xl italic uppercase font-black mt-7">
          The team
        </h1>
        <p className="text-base leading-8 py-4">
          The Core Team is comprised of 3 developers.
        </p>

        <p className="text-base leading-8 py-4">
          Abdul-Hadi Hashim who brought the team together is the CEO of Soft AI.
          He has worked on Climate change projects spreading across west Africa
          and recently gave a talk in Dubai where he spoke about hsi journey to
          cryptoCurrency, He has won multiple international awards and
          recognitions.
        </p>
        <p className="text-base leading-8 py-4">
          Nabil Alamin is co-founder of nft startup; nftinder. He
          has won multiple international competitions and hackathons including the
          recent github actions hackathon.
        </p>
        <p className="text-base leading-8 py-4">
          Mustapha Mubarak is a frontend developer. He loves to code and design
          websites. He's a data analytics and AI programmming enthusiast.
        </p>
      </div>

      <ProfileCards />
    </>
  );
};

export default About;
