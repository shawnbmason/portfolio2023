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
                letterSpacing: "2px",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              My passion for building things, tearing things apart to see how it
              all works, and putting things back together can go back to when I
              was a child. Whether it would be something in my room or my
              professional job, I wanted to know how it worked. So you can say I
              have been "building my world" from the start. Why coding? Because
              I finally get the chance to build cool shit. I fell in love with
              coding. I was creating my universe on my computer and creating new
              ideas that I couldn't get out of my head fast enough.
            </p>

            <p
              style={{
                fontSize: "2vh",
                letterSpacing: "2px",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              Outside the office and away from the computer, I'm committed to my
              two little guys (cats), Ash and Hiro. We spend much time outside
              on the balcony, looking at what nature has to bring. If I'm not
              with my two little guys, you can find me training for my next
              triathlon, rock climbing, or exploring the city to find good food.
              Contact me over Linked for networking, collaboration, a quick
              talk, and more!
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
