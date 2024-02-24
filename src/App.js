import "./styles.css";
import Main from "./Componets/main.jsx";
import About from "./Componets/about.jsx";
import Projects from "./Componets/projects.jsx";
import Social from "./Componets/social.jsx";
import Oh from "./Componets/oh.jsx";
import Send from "./Componets/send.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social" element={<Social />} />
          <Route path="/oh" element={<Oh />} />
          <Route path="/send" element={<Send />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
