import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/srivani-coffee.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>GANJI SRIVANI</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I am passionate about transforming ideas into functional, user-centric digital products that create meaningful impact. I strive to work on projects that challenge me technically and allow me to grow as a developer.

I am proficient in <b>Full Stack Development</b>, have working knowledge of <b>React, JavaScript, Node,js, Flutter, MongoDB and SQL</b>, and have built several projects using the <b>MERN</b> stack. I am currently working on <b>K-Skill</b> project and plan to deepen my expertise by learning <b>Technologies</b> in the near future.

Outside of work, I enjoy things like taking <b>Coding contests</b> and a good cup of <b>Tea</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />.
            <br />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
