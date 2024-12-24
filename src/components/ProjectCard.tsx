import React from "react";
import "@/app/style/projectcard.css"

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
  return (
    <div className="project-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="content">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
