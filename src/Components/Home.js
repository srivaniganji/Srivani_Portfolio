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
            I love the process of changing the raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>C++</b> and know a bit of <b>Java</b> and
            done a few projects in the <b>MERN</b> stack.
            <br />
            Presently I am working on a <b>Next.js </b>Project. I'm planning to
            learn
            <b> Typescript</b> in near future. <br />
            <br />
            Also, I love <b>Gulab Jamun, Chai</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
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
