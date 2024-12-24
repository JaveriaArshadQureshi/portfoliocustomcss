"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "@/app/style/hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container" id="/">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Hello, I&apos;m</span>
            <br/>
            <TypeAnimation
              sequence={[
                'Javeria Arshad ',
                1000,
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
          <p className="hero-description">
            I&apos;m a front-end developer and a Computer Science student. I love building user-friendly interfaces and always look to learn the latest in web technologies to improve my skills. I&apos;m also interested in how AI can be used in web development to make websites and apps more personal and helpful for users.
          </p>
          <div>
            <button className="hire-button">Hire Me</button>
            <button className="cv-button">
              <span className="cv-button-inner">Download CV</span>
            </button>
          </div>
        </div>
        <div className="image-container">
          <div className="profile-circle">
            <Image
              src="/hero-pick.png"
              alt="hero-image"
              className="profile-image"
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