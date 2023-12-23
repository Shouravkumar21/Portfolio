import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shouravs280@gmail.com.com</span>
        <div className="f-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/shourav-kumar-299398233/" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Shouravkumar21" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
