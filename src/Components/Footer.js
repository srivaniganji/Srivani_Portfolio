import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Nithin Ambati</h4>
      <h4>Copyright &copy; 2024 SG</h4>
      <div className="footerLinks">
        <a href="https://github.com/srivaniganji" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/srivani-ganji-339a5a240/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:srivaniganji2805@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/Srivani_Ganji/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
