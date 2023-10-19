import "../Styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";

export default function About() {
  return (
    <div className="projectsContainer">
      <Navbar />
      <Link to="/about" className="backArrowProjects">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <div className="projects">
        <h1 className="header">Dig in to my universe.</h1>

        <div className="projectOne"></div>
        <div className="pOne">
          <p>
            Innovative react project that utilizies useEffect, useState, and
            advanced CSS.
          </p>
          <p>Website that is used for shopping for high quality merchandise.</p>
          <p>Used best practice for color cordination.</p>
          <p>Tools used: HTML, CSS, REACT, Python</p>
        </div>

        <div className="projectTwo"></div>
        <div className="pTwo">
          <p>
            Inspired by the innovative color choses and animations on creation.
          </p>
          <p>Uses inivated color choses to make this website pop.</p>
          <p>
            This website is use to buy your favorite foods and look for shops
            easly.
          </p>
          <p>Tools used: HTML, CSS, REACT</p>
        </div>

        <div className="projectThree"></div>
        <div className="pThree">
          <p>React</p>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>

        <div className="projectFour"></div>
        <div className="pFour">
          <p>React</p>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>

      <Link to="/social" className="nextArrowProjects">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}
