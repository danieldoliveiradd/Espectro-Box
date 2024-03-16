import React from "react";
import "./style.scss";
import IconLinkedin from "../../img/linkedin.svg";
import IconInstagram from "../../img/instagram.svg";
import IconGithub from "../../img/github.svg";
import IconTwitch from "../../img/twitch.svg";

function Rodape() {
  return (
    <div className="rodape-container">
      <div className="icons-container">
        <div className="icons-wrapper">
          <a href="https://www.linkedin.com/in/devoliveira61/" target="_blank" rel="noopener noreferrer">
            <img src={IconLinkedin} className="icon" alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/devoliveiradd/" target="_blank" rel="noopener noreferrer">
            <img src={IconInstagram} className="icon" alt="Instagram" />
          </a>
          <a href="https://github.com/danieldoliveiradd" target="_blank" rel="noopener noreferrer">
            <img src={IconGithub} className="icon" alt="Github" />
          </a>
          <a href="https://www.twitch.tv/danieldoliveiradd" target="_blank" rel="noopener noreferrer">
            <img src={IconTwitch} className="icon" alt="Twitch" />
          </a>
        </div>
        <span>Espectro Box Software</span>
      </div>
      <div className="text-container">
        <span className="copyright-text">
          <span>Daniel, Software Engineer | </span>
          ありがとうございます。全著作権所有 | コピー2024年
        </span>
      </div>
    </div>
  );
}

export default Rodape;
