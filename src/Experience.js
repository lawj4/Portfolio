import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Experience() {
  return (
    <div className="Experience">
      <accent>010. Experience</accent>
      <br />
      <br />
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <detail>
          I currently have no professional experience.
          <br />
          <br />I am on the marketing committee for{" "}
          <a
            href="https://hack.ics.uci.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hack at UCI
          </a>
          .
        </detail>
      </AnimationOnScroll>
    </div>
  );
}
