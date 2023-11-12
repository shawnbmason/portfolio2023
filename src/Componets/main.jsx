import "../Styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGem,
  faCode,
  faAlternateCSS3Logo
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faReact,
  faPython,
  faCss3Alt,
  faHtml5,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { easeInOut } from "framer-motion";

const firstQuote = [
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          The inner fire is the most important thing mankind prossesses.
        </p>
        <p>Edith Sodergran</p>{" "}
      </div>
    )
  }
];

const quotes = [
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          The inner fire is the most important thing mankind prossesses.
        </p>
        <p>Edith Sodergran</p>{" "}
      </div>
    )
  },
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          I must not fear. Fear is the mind-killer. Fear is the little-death
          that brings total obliteration. I will face my fear.
        </p>
        <p>Frank Herbert, Dune</p>{" "}
      </div>
    )
  },
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          Life is like riding a bike. To keep your balance, you must keep
          moving.
        </p>
        <p>Albert Einstein</p>{" "}
      </div>
    )
  },
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          Success is a lousy teacher. It seduces smart people into thinking they
          can't lose.
        </p>
        <p>Bill Gates</p>
        {""}
      </div>
    )
  },
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          Our greatest weakness lies in giving up. The most certain way to
          succeed is always to try just one more time.
        </p>
        <p>Thomas A Edison</p>{" "}
      </div>
    )
  },
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          Great minds discuss ideas; average minds discuss events; small minds
          discuss people.
        </p>
        <p>Eleanor Roosevelt</p>{" "}
      </div>
    )
  },
  {
    quote: (
      <div className="quote">
        <p
          style={{
            opacity: "50%",
            fontSize: "20px",
            width: "350px",
            transition: "0.5s ease"
          }}
        >
          The only way to do great work is to love what you do. If you haven't
          found it yet, keep looking. Don't settle.
        </p>
        <p>Steve Jobs</p>{" "}
      </div>
    )
  }
];

const firstQut = firstQuote.map(({ quote }) => quote);
const qut = quotes.map(({ quote }) => quote);

export default function Main() {
  const [newQuote, setnewQuote] = useState(firstQut);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * qut.length);
    setnewQuote(qut[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 16000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="mainContainer">
      <div
        className="navbarMain1"
        style={{
          backgroundColor: "#07041a",
          borderRight: "1px dashed gray",
          height: "98vh",
          width: "350px",
          position: "absolute",
          left: "0px",
          zIndex: "1",
          paddingLeft: "55px",
          paddingTop: "10px",
          color: "white"
        }}
      >
        {" "}
        <h1>Pick Your Weapon</h1>
        <div
          style={{
            display: "grid",
            paddingTop: "30px"
          }}
        >
          <Link
            to="/about"
            className="fire"
            style={{
              cursor: "pointer",
              textDecoration: "none"
            }}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="water"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              padding: "25px 0px 25px 0px"
            }}
          >
            Projects
          </Link>
          <Link
            to="social"
            className="earth"
            style={{
              cursor: "pointer",
              textDecoration: "none"
            }}
          >
            Contact Me!
          </Link>
        </div>
        <div
          style={{
            position: "absolute",
            top: "275px",
            bottom: "150px"
          }}
        >
          <p style={{ paddingBottom: "15px", paddingTop: "60px" }}>
            +1(513)602-0443
          </p>
          <p>s.mason1993@yahoo.com</p>
        </div>
        <div
          className="socialMediaIcons"
          style={{
            position: "absolute",
            bottom: "55px"
          }}
        >
          <a href="https://github.com/shawnbmason" className="github">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ba55d3", fontSize: "30px" }}
            />
          </a>

          <a href="https://www.linkedin.com/" className="linkedin">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                padding: "0px 115px 0px 115px",
                color: "#0077b5",
                fontSize: "30px"
              }}
            />
          </a>

          <a href="https://www.google.com/" className="facebook">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#4267B2", fontSize: "30px" }}
            />
          </a>
        </div>
      </div>

      <div className="quote1">
        {newQuote}
        <div
          style={{
            width: "35px",
            height: "5px",
            backgroundColor: "cornflowerblue",
            margin: "0px"
          }}
        ></div>
      </div>

      <div className="mainHeader" style={{ left: "43%", textAlign: "start" }}>
        <h1
          className="shawn"
          style={{
            fontSize: "130px",
            fontWeight: "bolder",
            color: "white",
            margin: "0px",
            height: "98px"
          }}
        >
          SHAWN
        </h1>
        <h1
          className="mason"
          style={{
            fontSize: "130px",
            fontWeight: "bolder",
            color: "white",
            opacity: "50%",
            margin: "0px",
            paddingLeft: "65px"
          }}
        >
          MASON
        </h1>
        {/* <a href="https://tailwindcss.com/"> */}
        <Link to="/oh">
          <p
            className="oh"
            style={{
              cursor: "help",
              position: "absolute",
              right: "135px",
              bottom: "60px",
              color: "white",
              opacity: "50%",
              fontSize: "5px",
              width: "15px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            Oh what's this...
          </p>
        </Link>
        {/* </a> */}
      </div>
      <div
        className="logo"
        style={{
          display: "flex",
          margin: "0px",
          fontSize: "40px",
          color: "#190f5e",
          fontFamily: "Croissant One",
          fontWeight: "bolder",
          position: "absolute",
          top: "15px",
          right: "100px",
          opacity: "20%"
        }}
      >
        <p>S</p>
        <p
          style={{
            position: "absolute",
            top: "20px",
            left: "30px",
            fontSize: "20px"
          }}
        >
          B
        </p>
        <p style={{ position: "absolute", top: "15px", left: "20px" }}>M</p>
      </div>

      <div
        className="circle"
        style={{
          position: "absolute",
          top: "45px",
          right: "50px",
          border: "solid 3px #190f5e",
          height: "72px",
          width: "72px",
          opacity: "20%",
          borderRadius: "50px"
        }}
      ></div>

      <div className="skills">
        <p
          style={{
            padding: "10px",
            color: "#38FCD0",
            textDecoration: "underline"
          }}
        >
          Skills:
        </p>
        <p style={{ padding: "10px", color: "#4189E0" }}>
          Pyt<span style={{ color: "#FFDC19" }}>hon </span>
          <FontAwesomeIcon icon={faPython} style={{ color: "#FFDC19" }} />
        </p>

        <p style={{ padding: "10px", color: "#E34C26" }}>
          HTML <FontAwesomeIcon icon={faHtml5} />
        </p>

        <p style={{ padding: "10px", color: "#264de4" }}>
          C<span style={{ color: "#2965f1" }}>SS </span>
          <FontAwesomeIcon icon={faCss3Alt} />
        </p>

        <p style={{ padding: "10px", color: "#F0DB4F" }}>
          JavaScript <FontAwesomeIcon icon={faSquareJs} />
        </p>

        <p style={{ padding: "10px", color: "#88dded" }}>
          React.js <FontAwesomeIcon icon={faReact} />
        </p>

        <p style={{ padding: "10px", color: "#93ea15" }}>
          /Bash <FontAwesomeIcon icon={faCode} />
        </p>

        <p style={{ padding: "10px", color: "#E31B5F" }}>
          Ruby <FontAwesomeIcon icon={faGem} />
        </p>
      </div>

      <Link className="nextArrowMain" to="/about">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}
