import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Holo from "./Holo"
export default function App() {
  return (
    <div className="App">
    <Holo 
      image=<img src={require('./images/clock.png')} alt="project"/>
    />

      <Intro />

      <About />

      <Experience />

      <Project />

      <Contact />
    </div>
  );
}
