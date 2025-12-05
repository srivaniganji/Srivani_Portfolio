import React from "react";
import ProjectBox from "./ProjectBox";
import placementRecord from "../images/placement-record.png";
import kskill from "../images/board.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      <div className="project">
        <ProjectBox
          projectPhoto={kskill}
          projectName="K-Skill"
          githubLink="https://github.com/srivaniganji/k-skill"   
        />

        <ProjectBox
          projectPhoto={placementRecord}
          projectName="Placement Particulars Portal"
          githubLink="https://github.com/srivaniganji/Placement-Particulars-Portal"   
        />
      </div>
    </div>
  );
};

export default Projects;
