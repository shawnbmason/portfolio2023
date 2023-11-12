import "../Styles/navbar.css";
import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Link } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedCursor from "react-animated-cursor"

export default function Navbar() {
  /////////////////////////////////////////////👇 This section shows and hides div//////////////////////////////////////////////////////////////

  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  /////////////////////////////////////////////👇 This section flips arrow around//////////////////////////////////////////////////////////////

  const [flipArrow, setFlipArrow] = useState(false);

  const handleClick = () => {
    // 👇 toggles
    setFlipArrow((arrow) => !arrow);

    // 👇 or set to true
    // setFlipArrow(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        cursor: "pointer",
        marginRight: "15px",
        position: "fixed",
        right: "0px",
        top: "0px",
        zIndex: "2"
      }}
      ref={parent}
    >

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      {/* 👇 onClick handler for arrow rotation */}
      <div onClick={handleClick}>
        {/* 👇 onClick that reveals navbar */}
        <strong className="menu" onClick={reveal}>
          Menu{" "}
          <FontAwesomeIcon
            icon={faAngleDown}
            // 👇 style rotation for arrow using hooks
            style={{
              transform: flipArrow ? "rotate(180deg)" : "",
              transition: flipArrow ? "ease-in .2s" : "ease-in .2s"
            }}
          />
        </strong>
      </div>
      {show && (
        <div
          style={{
            position: "absolute",
            right: "0px",
            backgroundColor: "rgba(204, 255, 255, .1)",
            borderRadius: "5px",
            border: "solid 1px rgba(255, 255, 255, .2)",
            display: "grid",
            margin: "5px"
          }}
          className="dropdown-content"
        >
          <Link
            style={{
              color: "#ffff",
              margin: "15px",
              textDecoration: "none"
            }}
            to="/"
          >
            <p className="main"> Main </p>
          </Link>
          <Link style={{ color: "#ffff", textDecoration: "none" }} to="/about">
            <p className="about"> About </p>
          </Link>
          <Link
            style={{ color: "#ffff", margin: "15px", textDecoration: "none" }}
            to="/projects"
          >
            <p className="projects1"> Projects </p>
          </Link>
          <Link
            style={{
              color: "#ffff",
              marginBottom: "15px",
              textDecoration: "none"
            }}
            to="/social"
          >
            <p className="social"> Social </p>
          </Link>
        </div>
      )}
    </div>
  );
}
