import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mohammad Obaid</h4>
      <h4>Copyright &copy; 2024 MO</h4>
      <div className="footerLinks">
        <a href="https://github.com/obaid2249" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-obaid-66429924b/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:obaidulla2249@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/obaidulla2249/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
