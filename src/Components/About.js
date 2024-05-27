import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import logo from "../images/logo.avif";
import "./index.css";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Srivani Ganji</b> and I am from Devarakonda,
            Telangana, India. I'm a <b>MERN stack web developer</b> and
            currently pursuing final year <b>BTech in CSE</b>. <br />
            <br />I have done an internship as a <b>web developer</b> at Express
            Vissa. And currently working as a <b>NextJS</b> developer intern at
            KrelBuz Technologies. I love to create original projects with
            beautiful designs, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div className="about-page-container">
          <img src={logo} className="about-page" />
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="C++" />
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
        <Skills skill="Vercel" />
      </div>
    </>
  );
};

export default About;
