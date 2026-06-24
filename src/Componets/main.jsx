import "../Styles/main.css";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AnimatedCursor from "react-animated-cursor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGem, faCode } from "@fortawesome/free-solid-svg-icons";
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

const quotes = [
  {
    text: "The inner fire is the most important thing mankind possesses.",
    author: "Edith Sodergran",
  },
  {
    text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear.",
    author: "Frank Herbert, Dune",
  },
  {
    text: "Life is like riding a bike. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
  {
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs",
  },
];

const skills = [
  { label: "Python", icon: faPython, className: "python" },
  { label: "HTML", icon: faHtml5, className: "html" },
  { label: "CSS", icon: faCss3Alt, className: "css" },
  { label: "JavaScript", icon: faSquareJs, className: "javascript" },
  { label: "React.js", icon: faReact, className: "react" },
  { label: "Bash", icon: faCode, className: "bash" },
  { label: "Ruby", icon: faGem, className: "ruby" },
];

export default function Main() {
  const [quote, setQuote] = useState(quotes[0]);

  const shuffleQuote = useCallback(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffleQuote, 16000);
    return () => clearInterval(intervalID);
  }, [shuffleQuote]);

  return (
    <main className="mainContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Shawn B. Mason, Developer</title>
      </Helmet>

      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255, 255, 255"
        outerAlpha={0.18}
        innerScale={0.7}
        outerScale={2.8}
      />

      <div className="backgroundGlow glowOne"></div>
      <div className="backgroundGlow glowTwo"></div>
      <div className="backgroundGrid"></div>

      <aside className="sidebar">
        <div>
          <p className="eyebrow">Developer Portfolio</p>
          <h1 className="navTitle">Pick Your Weapon</h1>

          <nav className="mainNav">
            <Link to="/about" className="navLink fire">
              About
            </Link>
            <Link to="/projects" className="navLink water">
              Projects
            </Link>
            <Link to="/social" className="navLink earth">
              Contact Me
            </Link>
          </nav>
        </div>

        <div className="sidebarBottom">
          <div className="contactCard">
            <p>+1 (513) 602-0443</p>
            <p>shawnsdeveloperemail@gmail.com</p>
          </div>

          <div className="socialMediaIcons">
            <a href="https://github.com/shawnbmason" className="github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/" className="linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.google.com/" className="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </aside>

      <section className="hero">
        <div className="quoteCard">
          <p className="quoteText">“{quote.text}”</p>
          <p className="quoteAuthor">{quote.author}</p>
          <div className="quoteBar"></div>
        </div>

        <div className="nameBlock">
          <p className="introText">Front-End Developer</p>
          <h1>
            <span>SHAWN</span>
            <span>MASON</span>
          </h1>

          <Link to="/oh" className="secretLink">
            Oh what's this...
          </Link>
        </div>
      </section>

      <div className="monogram" aria-hidden="true">
        <span>S</span>
        <span>B</span>
        <span>M</span>
      </div>

      <section className="skills">
        <p className="skillsTitle">Skills</p>

        {skills.map((skill) => (
          <p key={skill.label} className={`skill ${skill.className}`}>
            <FontAwesomeIcon icon={skill.icon} />
            {skill.label}
          </p>
        ))}
      </section>

      <Link className="nextArrowMain" to="/about" aria-label="Go to about page">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </main>
  );
}