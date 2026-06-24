import "../Styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCode,
  faIndustry,
  faPersonRunning,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import AnimatedCursor from "react-animated-cursor";
import { Helmet } from "react-helmet";

const highlights = [
  {
    icon: faCode,
    title: "Software",
    text: "Building practical apps, interfaces, and coding projects.",
  },
  {
    icon: faIndustry,
    title: "Manufacturing",
    text: "Precision, process improvement, and hands-on problem solving.",
  },
  {
    icon: faPersonRunning,
    title: "Endurance",
    text: "Triathlons, climbing, CrossFit, and constant self-improvement.",
  },
  {
    icon: faPaw,
    title: "Life",
    text: "Two cats, Ash and Hiro, plus new food and city experiences.",
  },
];

export default function About() {
  return (
    <main className="aboutAll">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Shawn B. Mason, Developer</title>
      </Helmet>

      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255, 255, 255"
        outerAlpha={0.18}
        innerScale={0.7}
        outerScale={2.8}
      />

      <div className="aboutGlow aboutGlowOne"></div>
      <div className="aboutGlow aboutGlowTwo"></div>
      <div className="aboutGrid"></div>

      <Navbar />

      <Link className="backArrowAbout" to="/" aria-label="Back to home">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <Link
        className="nextArrowAbout"
        to="/projects"
        aria-label="Go to projects"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>

      <section className="aboutContainer">
        <div className="aboutVisual">
          <div className="aboutPicture">
            <div className="pictureRing"></div>
          </div>

          <div className="profileBadge">
            <span>AS</span>
            <p>Computer Science</p>
          </div>
        </div>

        <article className="page">
          <div className="pageTop">
            <p className="date">Mar · 2023</p>
            <p className="eyebrowAbout">Builder · Developer · Problem Solver</p>
            <h1 className="aboutMe">About Me</h1>
          </div>

          <div className="pageInner">
            <h2 className="pageHeader">Description</h2>

            <p>
              I'm a builder at heart with a passion for turning ideas into
              practical, high-impact solutions. Whether I'm developing software,
              designing systems, or machining precision components, I enjoy
              creating things that work the way they should and solving complex
              problems along the way.
            </p>

            <p>
              I hold an AS of Science in Computer Science and have experience
              spanning both software development and manufacturing. My
              background combines hands-on engineering with technical
              problem-solving, allowing me to approach challenges from both a
              digital and physical perspective.
            </p>

            <p>
              Collaboration is at the core of how I work. I enjoy working with
              people, sharing knowledge, and contributing wherever I can to help
              teams succeed.
            </p>

            <p>
              Outside of work, I'm an active endurance athlete and enjoy
              training for triathlons, rock climbing, and CrossFit. When I'm not
              building projects or training, you'll usually find me spending
              time with my two cats, Ash and Hiro, or exploring new restaurants
              and experiences around the city.
            </p>

            <div className="highlightGrid">
              {highlights.map((item) => (
                <div className="highlightCard" key={item.title}>
                  <FontAwesomeIcon icon={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
