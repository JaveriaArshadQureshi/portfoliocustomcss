'use client';
import React, { useTransition, useState,  } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import "@/app/style/about.css"

 
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Tail-wind CSS</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Matric Science</li>
        <li>Inter Pre-Medical</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Graphic Designing from IBA</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ isPending , startTransition] = useTransition();

  const handleTabChange = (id:string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="aboutcss" id="about">
      <div className="full">
        <Image src="/about-pick.jpeg" alt="about pic" width={500} height={500}  />
        <div className="main">
          <h2 >About Me</h2>
          <p>
          I am a front-end web developer with a deep interest in building interactive and responsive
           web applications. I have expertise in JavaScript, TypeScript, Next.js, HTML, CSS, Tailwind 
           CSS, Git, and GitHub, and I am always looking to expand my skills and knowledge. I am actively 
           looking for new opportunities to apply my skills and grow professionally.
          </p>
          <div className="tab-button">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="active">
         
             {isPending ? (
              <p>Loading...</p>
            ) : (
              TAB_DATA.find((t) => t.id === tab)?.content
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
