import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TodoList:
      "A todo list app helps users organize tasks, set priorities, and track progress efficiently. With features like task categorization, due date reminders, and cross-platform syncing, users can manage their workload effectively and stay focused on their goals. Whether for personal or professional use, a todo list app streamlines productivity and enhances time management skills.",
    TodoListGit: "https://github.com/obaid2249/TO-DO-LIST",

    WheatherForecastApp:
      "A weather forecast app provides users with real-time weather updates, hourly and daily forecasts, interactive maps, and severe weather alerts. With location-based forecasting and customizable features, users can plan activities, stay informed about weather changes, and receive notifications for potential hazards, ensuring they stay safe and prepared for any conditions.",
    WheatherForecastAppGit:
      "https://github.com/obaid2249/Wheather-Forecast-APP",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Git"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
