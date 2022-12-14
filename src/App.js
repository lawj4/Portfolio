import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

export default function App() {
  return (
    <div className="App">
      <Intro />

      <About />

      <Experience />

      <Project />

      <Contact />
    </div>
  );
}
