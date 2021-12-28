import React from "react";
import Cards from "../components/Cards";

const About = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center lg:w-10/12 w-4/5">
        <h1 className="lg:text-4xl text-xl italic uppercase font-black mt-7">
          The team
        </h1>
        <p className="text-base leading-8 py-4">
          The Core Team is comprised of Maria and Aleksey. They have been
          working together for many years creating 3d characters and animation
          for tv commercials and various other mediums.
        </p>
        {/* <p className="text-base leading-8 py-4">You can check out our work at https://ace5studios.com</p> */}

        <p className="text-base leading-8 py-4">
          Another User have been at this for like 16 years. Between the 2 of us
          we have a tonne of experience. We’ve also been running a successful
          online shop selling 3d character assets for people to use in their own
          projects.
        </p>
        <p className="text-base leading-8 py-4">
          Igor is a shadowy dev who doesn’t particularly enjoy social
          interaction, he was poached from Citi group, and forced to learn
          solana blockchain. He’s doing pretty damn well. First thing he did was
          wrote his own block chain in python between his home computers. He’s
          the kinda guy who likes to figure out how everything works from the
          ground up.
        </p>
      </div>
      <Cards />
    </>
  );
};

export default About;
