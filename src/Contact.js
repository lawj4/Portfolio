import { FaRegEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Contact() {
  return (
    <div className="Contact">
      <accent>100. Contact</accent>
      <br />
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOut="animate__zoomOut"
      >
        <div className="contactBar">
          <a href="mailto:jlaw0430@gmail.com?subject = Feedback&body = Message">
            <FaRegEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/law-jefferson/">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/lawjefferson/">
            <FaInstagram />
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
}
