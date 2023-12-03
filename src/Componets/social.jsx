import "../Styles/social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Social() {
  const [bgColor, setBgColor] = useState(
    "linear-gradient(45deg, #27d882 50%, #d8277d 50%, #b42068 100%)"
  );

  const socialBackground = {
    background: `${bgColor}`,
    transition: "0.8s ease",
  };

  return (
    <div className="socialContainer" style={socialBackground}>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <Navbar />

      <div className="socialHeader">
        <h1 style={{ opacity: "0.8" }}>Contact Me</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "8px",
            margin: "10px",
          }}
        >
          <div style={{ display: "grid" }}>
            <h1 style={{ opacity: "50%", margin: "0px" }}>Phone:</h1>
            <h1 style={{ margin: "0px" }}>+1(513)-602-0443</h1>
          </div>

          <div style={{ display: "grid" }}>
            <h1 style={{ opacity: "50%", margin: "0px" }}>Email:</h1>
            <h1 style={{ margin: "0px" }}>s.mason1993@yahoo.com</h1>
          </div>
        </div>
        <input
          type="text"
          className="name"
          placeholder="Name"
          style={{
            borderRadius: "5px",
            color: "white",
            outline: "none",
            height: "50px",
            width: "400px",
            padding: "1px 15px 1px 15px",
            backgroundColor: "#392f9a",
            border: "0px",
            opacity: "0.8",
            fontSize: "18px",
          }}
        />
        <input
          type="email"
          className="email"
          placeholder="Email"
          style={{
            borderRadius: "5px",
            textAlign: "left",
            outline: "none",
            color: "white",
            height: "50px",
            width: "400px",
            backgroundColor: "#392f9a",
            border: "0px",
            opacity: "0.8",
            padding: "1px 15px 1px 15px",
            fontSize: "18px",
          }}
        />
        <textarea
          className="message"
          placeholder="Message"
          type="text"
          style={{
            resize: "none",
            overflow: "auto",
            borderRadius: "5px",
            color: "white",
            padding: "15px",
            outline: "none",
            height: "100px",
            textDecoration: "none",
            width: "400px",
            backgroundColor: "#392f9a",
            border: "0px",
            opacity: "0.8",
            fontSize: "18px",
            marginBottom: "65px",
          }}
        />

        <button
          className="sendMessageButton"
          onMouseEnter={() =>
            setBgColor(
              "linear-gradient(45deg, #d8277d 50%, #27d882 50%, #12673e 100%)"
            )
          }
          onMouseLeave={() =>
            setBgColor(
              "linear-gradient(45deg, #27d882 50%, #d8277d 50%, #b42068 100%)"
            )
          }
        >
          Send Message
        </button>
      </div>

      <Link className="nextArrowSocial" to="/projects">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <Link to="/oh" className="ohSocialPage">
        <p>Oh whats this?</p>
      </Link>
    </div>
  );
}
