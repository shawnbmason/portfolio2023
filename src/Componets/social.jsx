import "../Styles/social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaperPlane,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import React, { useEffect, useState, useRef } from "react";
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
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="resultMessage">
      Your email was sent successfully! Thank you for reaching out.
    </p>
  );
};

export default function Social() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState();

  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState();
  const [result, showResult] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  useEffect(() => {
    if (!ipData) {
      IpAddress({ setIpData, setLoading });
    }

    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });
  }, [fullName, email, phone, message, ipData]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (fullNameError || emailError || phoneError || messageError) {
      showResult(false);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
          showResult(true);
        },
        (error) => {
          alert("FAILED... " + error.text);
          showResult(false);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <main className="socialContainer">
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
            outerSize={30}
            color="255, 255, 255"
            outerAlpha={0.18}
            innerScale={0.7}
            outerScale={2.8}
          />

          <div className="socialGlow socialGlowOne"></div>
          <div className="socialGlow socialGlowTwo"></div>
          <div className="socialGrid"></div>

          <Navbar />

          <Link className="nextArrowSocial" to="/projects">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>

          <section className="socialPage">
            <div className="contactIntro">
              <p className="socialEyebrow">Let’s Build Something</p>
              <h1 className="contactMe">Contact Me</h1>

              <p className="socialDescription">
                Have an idea, opportunity, or project in mind? Send me a message
                and I’ll get back to you.
              </p>

              <div className="detectedLocation">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                  Detected location: <strong>{ipData && ipData}</strong>
                </span>
              </div>

              <div className="contactInfo">
                <div className="contactInfoCard">
                  <FontAwesomeIcon icon={faPhone} />
                  <div>
                    <span>Phone</span>
                    <p>+1 (513) 602-0443</p>
                  </div>
                </div>

                <div className="contactInfoCard">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div>
                    <span>Email</span>
                    <p className="emailAddress">
                      shawnsdeveloperemail@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contactForm">
              <div className="formGroup">
                <label>Name</label>
                <input
                  value={fullName}
                  name="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  className="name"
                  placeholder="Your name"
                />
                {fullNameError && <InlineError error={fullNameError} />}
              </div>

              <div className="formGroup">
                <label>Email</label>
                <input
                  required
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="email"
                  placeholder="your@email.com"
                />
                {emailError && <InlineError error={emailError} />}
              </div>

              <div className="formGroup">
                <label>Phone</label>
                <input
                  required
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="phone"
                  placeholder="Phone number"
                />
                {phoneError && <InlineError error={phoneError} />}
              </div>

              <div className="formGroup">
                <label>Message</label>
                <textarea
                  id="message"
                  required
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="message"
                  placeholder="Tell me about your project..."
                />
                {messageError && <InlineError error={messageError} />}
              </div>

              <button className="sendMessageButton" type="submit">
                <span>{isSending ? "Sending..." : "Send Message"}</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>

              <div className="row">{result ? <Result /> : null}</div>
            </form>
          </section>

          <Link to="/oh" className="ohSocialPage">
            Oh what's this?
          </Link>
        </>
      )}
    </main>
  );
}