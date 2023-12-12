import "../Styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import AnimatedCursor from "react-animated-cursor";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="aboutAll">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Shawn B. Mason, Developer</title>
      </Helmet>

      <Navbar />
      <Link className="backArrowAbout" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="aboutContainer">
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />

        <div className="aboutPicture"></div>

        <div className="page">
          <p className="date">Mar - 2023</p>
          <h1 className="about">About Me</h1>
          <div className="pageInner">
            {/* <h1 className="pageName">Shawn Mason</h1> */}
            <h1 className="pageHeader">Description</h1>
            <p
              style={{
                fontSize: "2vh",
                lineHeight: "20px",
                letterSpacing: "2px",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              My passon for building things, tearing things apart to see how it
              all works, and putting it back together can go all the way back to
              when I was a child. Weather it would be something that broke in my
              room or in my profession job I wanted to know how it worked. So
              you can say I have been on the "building my own world" from the
              start. Why coding? This is where I feel in love with coding.
              Creating my own universe on my computer. Creating new ideas that I
              couldn't get out of my head fast enough.
            </p>

            <p
              style={{
                fontSize: "2vh",
                lineHeight: "20px",
                letterSpacing: "2px",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              Outside of the office and away from the computer, I'm commited to
              my two little guys (cats) Ash and Hiro. We spend a lot of times
              outside on the balcony looking at what nature has to bring. If I'm
              not with my two little guys you can most likly find me training
              for my next triatholon, rock climbing, or exploring the city to
              find good food. Contact me over Linked for networking,
              collaboration, a quick talk, and more!
            </p>
          </div>
        </div>
      </div>
      <Link className="nextArrowAbout" to="/projects">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}
