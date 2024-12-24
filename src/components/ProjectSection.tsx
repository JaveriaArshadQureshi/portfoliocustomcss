import React from 'react'
import ProjectCard from './ProjectCard'
import "@/app/style/projectsection.css"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}


const projectsData : Project[] = [
  {
    id: 1,
    title: "Resume Builder",
    description: "Project 1 description",
    image: "/project-1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Simple Website",
    description: "Project 2 description",
    image: "/project-2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/project3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
];


const ProjectSection = () => {
  return (
    <div id="projects" className="project-section">
    <h2 className="section-title">My Projects</h2>
    <div className="project-grid">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
        />
      ))}
    </div>
  </div>
  )
}

export default ProjectSection

