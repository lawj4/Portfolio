import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="Contact">
      <accent>100. <span className="title">Contact</span></accent>
      <br />

        <div className="contactBar">
          <a href="https://github.com/lawj4" target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/law-jefferson/" target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="mailto:jlaw0430@gmail.com?subject = Feedback&body = Message">
            <FaRegEnvelope />
          </a>

          <a href="https://www.instagram.com/lawjefferson/" target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

    </div>
  );
}
