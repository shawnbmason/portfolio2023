import "../Styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPager,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import AnimatedCursor from "react-animated-cursor";
import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <main className="projectsContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects - Shawn B. Mason, Developer</title>
      </Helmet>

      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255, 255, 255"
        outerAlpha={0.18}
        innerScale={0.7}
        outerScale={2.8}
      />

      <div className="projectsGlow projectsGlowOne"></div>
      <div className="projectsGlow projectsGlowTwo"></div>
      <div className="projectsGrid"></div>

      <Navbar />

      <Link to="/about" className="backArrowProjects">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <Link to="/social" className="nextArrowProjects">
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>

      <section className="projects">
        <div className="projectsHeader">
          <p className="projectsEyebrow">Selected Work</p>
          <h1>Dig into my universe.</h1>
          <p>
            A collection of front-end builds focused on design, motion,
            interaction, and clean user experiences.
          </p>
        </div>

        <div className="projectGrid">
          <article className="projectCard">
            <a
              href="https://backstage-project.netlify.app/"
              className="projectOne"
            >
              <div className="projectOverlay">
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>View Project</span>
              </div>
            </a>

            <div className="projectContent">
              <h2>Backstage Talks</h2>
              <p>
                A React project using useState, useEffect, dynamic styling, and
                bold visual layouts.
              </p>

              <div className="toolList">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>Python</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://backstage-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPager} />
                  Live
                </a>

                <a
                  href="https://github.com/shawnbmason/backstageTalksProject.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithubAlt} />
                  Code
                </a>
              </div>
            </div>
          </article>

          <article className="projectCard">
            <div className="projectTwo">
              <a
                href="https://shawns-monogram-project.netlify.app/"
                className="projectOverlay"
              >
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>View Project</span>
              </a>
            </div>

            <div className="projectContent">
              <h2>Monogram</h2>
              <p>
                A colorful animated shopping-style interface inspired by clean
                product design.
              </p>

              <div className="toolList">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://shawns-monogram-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPager} />
                  Live
                </a>

                <a
                  href="https://github.com/shawnbmason/Monogram.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithubAlt} />
                  Code
                </a>
              </div>
            </div>
          </article>

          <article className="projectCard">
            <div className="projectThree">
              <a
                href="https://chill-project.netlify.app/"
                className="projectOverlay"
              >
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>View Project</span>
              </a>
            </div>

            <div className="projectContent">
              <h2>Chill</h2>
              <p>
                A polished front-end concept focused on layout, color,
                animation, and user flow.
              </p>

              <div className="toolList">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://chill-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPager} />
                  Live
                </a>

                <a
                  href="https://github.com/shawnbmason/chill-project.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithubAlt} />
                  Code
                </a>
              </div>
            </div>
          </article>

          <article className="projectCard">
            <div className="projectFour">
              <div className="projectOverlay">
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="projectContent">
              <h2>Streaming Project</h2>
              <p>
                A new project currently in progress. More features and links are
                coming soon.
              </p>

              <div className="toolList">
                <span>Coming Soon</span>
              </div>

              <div className="projectLinks">
                <span className="disabledLink">
                  <FontAwesomeIcon icon={faPager} />
                  Soon
                </span>

                <span className="disabledLink">
                  <FontAwesomeIcon icon={faGithubAlt} />
                  Soon
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
