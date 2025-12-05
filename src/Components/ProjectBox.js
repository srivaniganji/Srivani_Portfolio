import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName, githubLink }) => {
  return (
    <div className="projectBox">
      <img src={projectPhoto} className="projectImage" alt={projectName} />
      <h3 className="projectTitle">{projectName}</h3>

      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
      )}
    </div>
  );
};

export default ProjectBox;
