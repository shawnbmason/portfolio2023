import "../Styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPager,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import AnimatedCursor from "react-animated-cursor";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="projectsContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects - Shawn B. Mason, Developer</title>
      </Helmet>

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <Navbar />
      <Link to="/about" className="backArrowProjects">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <div className="projects">
        <h1 className="header">Dig in to my universe.</h1>

        <div className="backstage-talks">
          <div className="projectOne"></div>

          <div className="projectOneLinks">
            <a
              href="https://backstage-project.netlify.app/"
              className="link one"
            >
              <FontAwesomeIcon
                icon={faPager}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Link /
            </a>

            <a
              href="https://github.com/shawnbmason/backstageTalksProject.git"
              className="code one"
            >
              <FontAwesomeIcon
                icon={faGithubAlt}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Code.
            </a>
          </div>

          <div className="pOne">
            <p>
              Innovative react project that utilizies useEffect, useState, and
              advanced CSS.
            </p>
            <p>
              Website that is used for shopping for high quality merchandise.
            </p>
            <p>Used best practice for color cordination.</p>
            <p>Tools used: HTML, CSS, REACT, Python</p>
          </div>
        </div>

        <div className="monogram">
          <div className="projectTwo"></div>
          <div className="projectTwoLinks">
            <a
              href="https://shawns-monogram-project.netlify.app/"
              className="link two"
            >
              <FontAwesomeIcon
                icon={faPager}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Link /
            </a>

            <a
              href="https://github.com/shawnbmason/Monogram.git"
              className="code two"
            >
              <FontAwesomeIcon
                icon={faGithubAlt}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Code.
            </a>
          </div>
          <div className="pTwo">
            <p>
              Inspired by the innovative color choses and animations on
              creation.
            </p>
            <p>Uses inivated color choses to make this website pop.</p>
            <p>
              This website is use to buy your favorite foods and look for shops
              easly.
            </p>
            <p>Tools used: HTML, CSS, REACT</p>
          </div>
        </div>

        <div className="chill">
          <div className="projectThree"></div>
          <div className="projectThreeLinks">
            <a href="https://chill-project.netlify.app/" className="link three">
              <FontAwesomeIcon
                icon={faPager}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Link /
            </a>

            <a
              href="https://github.com/shawnbmason/chill-project.git"
              className="code three"
            >
              <FontAwesomeIcon
                icon={faGithubAlt}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Code.
            </a>
          </div>
          <div className="pThree">
            <p>
              Inspired by the innovative color choses and animations on
              creation.
            </p>
            <p>Uses inivated color choses to make this website pop.</p>
            <p>
              This website is use to buy your favorite foods and look for shops
              easly.
            </p>
            <p>Tools used: HTML, CSS, REACT</p>
          </div>
        </div>

        <div className="food">
          <div className="projectFour"></div>
          <div className="projectFourLinks">
            <a href="" className="link four">
              <FontAwesomeIcon
                icon={faPager}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Link /
            </a>

            <a href="" className="code four">
              <FontAwesomeIcon
                icon={faGithubAlt}
                style={{ fontSize: "25px", paddingRight: "8px" }}
              />
              Code.
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            className="pFour"
          >
            <h1 style={{ fontSize: "2.5vw" }}>Coming soon!</h1>
          </div>
        </div>
      </div>

      <Link to="/social" className="nextArrowProjects">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}
