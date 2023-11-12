import "../Styles/oh.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
    transform: "translateX(0px)"
  },
  hidden: { opacity: 0, scale: 0, transform: "translateX(50px)" }
};

const Box = ({ picture, classname2, classname1, bio }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className={classname1}>
        <div className={classname2}>{picture}</div>
      </div>

      <div className="description">
        <h2 style={{ textDecoration: "underline", color: "cornflowerblue" }}>
          Description:
        </h2>
        <p className="Bio">{bio}</p>
      </div>
    </motion.div>
  );
};

export default function Oh() {
  const navigate = useNavigate();

  return (
    <div className="ohPage">

     <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      
      <motion.div animate={{ x: 0 }} initial={{ x: -900 }}>
        <h1 className="ohHeader" style={{ color: "white", fontSize: "50px" }}>
          The Crew
        </h1>
      </motion.div>

      <div className="hiro">
        <motion.div animate={{ y: 0 }} initial={{ y: -30 }}>
          <h1>
            Little Guy One <span style={{ color: "orange" }}> "Hiro"</span>
          </h1>
        </motion.div>

        <Box
          classname1={"hiroPicture"}
          classname2={"pictureHiro"}
          // picture={"Picture of Hiro"}
          bio={
            '"This is Hiro and he is a very good cats that loves his toys. He likes to loung in the sun and likes the outside. He also gets very hipped up on life in the morning and gets the zoomies."'
          }
        />
      </div>

      <div className="ash">
        <motion.div animate={{ y: 0 }} initial={{ y: -30 }}>
          <h1>
            Little Guy Two "<span style={{ color: "slategray" }}>Ash</span>"
          </h1>
        </motion.div>

        <Box
          classname1={"ashPicture"}
          classname2={"pictureAsh"}
          // picture={"Picture of Ash"}
          bio={
            '"He is a food baby. He loves his food that he can never get enough of. He will fight you over and type of food that is out. He also trys to "help" you in the kitchen as your own personal sous-chef. You can find his napping on any blanket that you are using or planning with some sort of food."'
          }
        />
      </div>

      <div className="ohButtons">
        <button
          onClick={() => navigate(-1)}
          style={{ color: "cornflowerblue" }}
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/")}
          style={{ color: "cornflowerblue" }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
