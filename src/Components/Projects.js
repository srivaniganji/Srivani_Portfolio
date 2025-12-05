import React from "react";
import ProjectBox from "./ProjectBox";
import placementRecord from "../images/placement-record.png";
import gst from "../images/gst.jpeg";
import expressVissa from "../images/expressvissa.jpeg";
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
        />
        <ProjectBox
          projectPhoto={placementRecord}
          projectName="Placement Particulars Portal"
        />
      </div>
    </div>
  );
};

export default Projects;
