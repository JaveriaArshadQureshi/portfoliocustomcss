"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-10 md:mt-[150px]  md:mb-[150px] "  id="/">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 font-extrabold text-4xl sm:text-5xl lg:text-6xl ">
            <span className="text-transparent bg-clip-text bg-gradient-to-br  from-pink-400  to-pink-500">
              {" "}
              Hello, I&apos;m{""}
            </span>
            <br/>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Javeria Arshad ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'App Developer',
        1000,
        'UX/UI Designer',
        1000
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base  sm:text-lg mb-6 text-justify lg:text-xl">
          I&apos;m a front-end developer and a Computer Science student. I love building user-friendly interfaces and always look to learn the latest in web technologies to improve my skills. I&apos;m also interested in how AI can be used in web development to make websites and apps more personal and helpful for users.
          </p>
          <div>
            <button className="py-3 px-6 w-full sm:w-fit rounded-full mr-4  text-white font-bold bg-gradient-to-br    from-pink-400 to-pink-500 hover:bg-slate-800 hover:brightness-90">
              Hire Me
            </button>
            <button className="py-1 px-1 w-full sm:w-fit rounded-full text-white font-bold bg-gradient-to-br  from-pink-400 to-pink-500 hover:bg-slate-800   mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[300px] lg:h-[300px] border-4 border-s-pink-400 border-b-pink-400 border-e-pink-500 border-t-pink-500 relative shadow-white shadow-lg">
            <Image
              src="/hero-pick.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
