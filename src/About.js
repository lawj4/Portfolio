import Logo from "./Logo";
import { AnimationOnScroll } from "react-animation-on-scroll";

const reactIcon = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
    alt="react icon"
  />
);
const JSIcon = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
    alt="JS icon"
  />
);
const CSSIcon = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"
    alt="CSS3 icon"
  />
);
const HTMLIcon = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049"
    alt="HTML5 icon"
  />
);
const SQLIcon = (
  <img
    src="https://upload.wikimedia.org/wikiversity/en/e/ee/MySQL_Logo.png?20210331222648"
    alt="SQL icon"
  />
);
const pythonIcon = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029"
    alt="Python icon"
  />
);
const cIcon = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png?20170928190710"
    alt="C icon"
  />
);

export default function About() {
  return (
    <div className="About arrow">
      <accent>001. About</accent>
      <br />
      <div className="detail w500">
        <detail>
          <br />
          Hello! My name is Jeff, and I enjoy all things programming. I knew I
          enjoyed it ever since I took a LEGO® MINDSTORMS® class in middle
          school. The robot was lame, but I was intrigued by the logic that went
          into making it function. However, it was not until recently that I
          found that I could use my art and cs background together in web
          development.
          <br />
          <br />
          Today, I am making projects whenever I have free time.
          <br />
          <br />
          Here are a few technologies I’ve been working with recently:
          <br />
        </detail>
      </div>
      <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceOut">
        <div className="skills">
          <Logo logo={reactIcon} description="React" />
          <Logo logo={JSIcon} description="JavaScript" />
          <Logo logo={CSSIcon} description="CSS" />
          <Logo logo={HTMLIcon} description="HTML5" />
          <Logo logo={SQLIcon} description="MySQL" />
          <Logo logo={pythonIcon} description="Python" />
          <Logo logo={cIcon} description="C/C++" />
        </div>
      </AnimationOnScroll>
    </div>
  );
}
