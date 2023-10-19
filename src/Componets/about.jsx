import "../Styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";

export default function About() {
  return (
    <div className="aboutContainer">
      <Navbar />

      <Link className="backArrowAbout" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <div className="aboutPicture">
        <img
          alt="profile"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PlUghRkXvx9eqZvManVhsgHaIS%26pid%3DApi&f=1&ipt=eda996daadd44ad250fea02727a03f670d679703e90745968e3b583fa0955024&ipo=images"
          style={{
            width: "70%",
            height: "60%",
            textDecoration: "none",
            borderRadius: "15px"
          }}
        />
      </div>

      <div className="aboutHeader">
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
                fontFamily: "Rubik, sans-serif"
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
                fontFamily: "Rubik, sans-serif"
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
        <div className="box"></div>
      </div>

      <Link className="nextArrowAbout" to="/projects">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}
