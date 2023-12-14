import "../Styles/social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateMessage,
} from "./validation.js";
import InlineError from "./inlineError.js";
import { IpAddress } from "../API/API.js";
import Loading from "./loading.js";
import { Helmet } from "react-helmet";

export default function Social() {
  const [bgColor, setBgColor] = useState(
    "linear-gradient(45deg, #27d882 50%, #d8277d 50%, #b42068 100%)"
  );

  const socialBackground = {
    background: `${bgColor}`,
    transition: "0.8s ease",
  };

  // 👇 constructors for email, name, phone number, and message for validation. (check validation.js)

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState();
  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState();
  const [countries, setCountries] = useState();
  // const [ipDataCity, setIpDataCity] = useState();

  // 👇 This useEffect is for ********* Validation *********

  useEffect(() => {
    // 👇 This checks the API of the person on the sit and will display it (check API.js)

    if (!ipData & !countries) {
      // IpAddress({ setIpData, setIpDataCity, setLoading });
      IpAddress({ setIpData, setLoading });
    }

    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });
  }, [fullName, email, phone, message]);

  console.log(ipData);
  return (
    <div className="socialContainer" style={socialBackground}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Contact - Shawn B. Mason, Developer</title>
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
          <div className="socialHeader">
            <h1 className="contactMe">Contact Me</h1>
            <h2>
              We detected that you are currently in{" "}
              {/* 👇 This checks the API of the person on the sit and will display it (check API.js) */}
              <span style={{ color: "cornflowerblue", fontWeight: "bolder" }}>
                {/* ({ipData}, {ipDataCity}) */}({ipData})
              </span>
            </h2>
            <div className="contactInfo">
              <div style={{ display: "grid" }}>
                <h1 style={{ opacity: "50%", margin: "0px" }}>Phone:</h1>
                <h1 style={{ margin: "0px", paddingRight: "10px" }}>
                  +1(513)-602-0443
                </h1>
              </div>

              <div style={{ display: "grid" }}>
                <h1 style={{ opacity: "50%", margin: "0px" }}>Email:</h1>
                <h1 style={{ margin: "0px" }}>s.mason1993@yahoo.com</h1>
              </div>
            </div>
            <div>
              <input
                // 👇 reference to the constructor up above.
                value={fullName}
                // 👇 checking if name is valid if not through an error (check validation.js)
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="name"
                placeholder="Name"
              />

              {/* 👇 This will display the error message you created for full name in (validation.js) and will use the styling in (inlineError.js)*/}
              {fullNameError && <InlineError error={fullNameError} />}
            </div>

            <div>
              <input
                required
                // 👇 reference to the constructor up above.
                value={email}
                // 👇 checking if email is valid if not through an error (check validation.js)
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="email"
                placeholder="Email"
              />

              {/* 👇 This will display the error message you created for email in (validation.js) and will use the styling in (inlineError.js)*/}
              {emailError && <InlineError error={emailError} />}
            </div>

            <div>
              <input
                required
                // 👇 reference to the constructor up above.
                value={phone}
                // 👇 checking if the phone number is valid if not through an error (check validation.js)
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="phone"
                placeholder="Phone number"
              />

              {/* 👇 This will display the error message you created for phone number in (validation.js) and will use the styling in (inlineError.js)*/}
              {phoneError && <InlineError error={phoneError} />}
            </div>

            <div>
              <textarea
                required
                // 👇 reference to the constructor up above.
                value={message}
                // 👇 checking if message is valid if not through an error (check validation.js)
                onChange={(e) => setMessage(e.target.value)}
                className="message"
                placeholder="Message"
                type="text"
              />

              {/* 👇 This will display the error message you created for message in (validation.js) and will use the styling in (inlineError.js)*/}
              {messageError && <InlineError error={messageError} />}
            </div>

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
              Send!
            </button>
          </div>
          <Link className="nextArrowSocial" to="/projects">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <Link to="/oh" className="ohSocialPage">
            <p>Oh whats this?</p>
          </Link>
        </>
      )}
    </div>
  );
}
