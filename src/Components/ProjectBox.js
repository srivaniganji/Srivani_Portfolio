import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <h3>{projectName}</h3>
        <button className="projectbtn" href="">
          <FaGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default ProjectBox;
