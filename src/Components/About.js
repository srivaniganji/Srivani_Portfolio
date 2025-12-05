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
            Hi, I’m <b>Srivani Ganji</b>, a Software Engineer from Telangana, India.
I specialize in full-stack development with a strong focus on building scalable and impactful digital learning solutions.
<br />
I completed my B.Tech in Computer Science and currently work as a Software Engineer at Konam Foundation, where I contribute to developing an innovative English learning platform for rural government school students. My work involves designing efficient systems, building user-friendly interfaces, and solving real-world problems through technology.
<br />
I enjoy creating meaningful products, writing clean code, and continuously learning new technologies. I'm always open to collaborating on impactful projects where I can contribute and grow.
<br />
Feel free to connect—links are available in the footer.
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
        <Skills skill="Flutter" />
        <Skills skill="Javascript" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="SQL" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
        <Skills skill="Vercel" />
        <Skills skill="Render" />
      </div>
    </>
  );
};

export default About;
