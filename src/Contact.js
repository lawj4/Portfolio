import { FaRegEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="Contact">
      <accent>100. Contact</accent>
      <br />
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
    </div>
  );
}
