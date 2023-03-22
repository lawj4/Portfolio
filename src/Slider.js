import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Holo from "./Holo";
import Front from "./Front";
import ProjectRow from "./ProjectRow";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import React, { useState, useEffect } from "react";

function nextSlide(val, setVal) {
  if (val + 100 !== 0) {
    document.querySelector(".header").style.visibility = "hidden";
    document.querySelector(".leftHeader").style.visibility = "hidden";
    document.querySelector(".rightHeader").style.visibility = "hidden";
  } else {
    document.querySelector(".header").style.visibility = "visible";
    document.querySelector(".leftHeader").style.visibility = "visible";
    document.querySelector(".rightHeader").style.visibility = "visible";
  }
  document.querySelector(".all-front").style.transform = `translate(0, -${
    val + 100
  }%)`;
  document.querySelector(".proj").style.transform = `translate(0, -${
    val + 100
  }%)`;
  document.querySelector(".proj").style.visibility = "visible";
  setVal(val + 100);
  console.log(val);
}
function prevSlide(val, setVal) {
    if (val - 100 !== 0) {
        document.querySelector(".header").style.visibility = "hidden";
        document.querySelector(".leftHeader").style.visibility = "hidden";
        document.querySelector(".rightHeader").style.visibility = "hidden";
      } else {
        document.querySelector(".header").style.visibility = "visible";
        document.querySelector(".leftHeader").style.visibility = "visible";
        document.querySelector(".rightHeader").style.visibility = "visible";
      }
  document.querySelector(".all-front").style.transform = `translate(0, -${
    val - 100
  }%)`;
  document.querySelector(".proj").style.transform = `translate(0, -${
    val - 100
  }%)`;
  document.querySelector(".proj").style.visibility = "visible";
  setVal(val - 100);
  console.log(val);
}

export default function Slider() {
  // <Holo image=<img src={require("./images/clock.png")} alt="project" />/>
  const [offset, setOffset] = useState(0);

  return (
    <div>
      <div className="slide">
        <Front />
        <div className="proj">
          <Holo
            image=<img src={require("./images/clock.png")} alt="project" />
          />
        </div>
      </div>
      {offset <= 100 && (
        <div className="nextSlide" onClick={() => nextSlide(offset, setOffset)}>
          <HiArrowLongDown />
        </div>
      )}
      {offset > 0 && (
        <div className="prevSlide" onClick={() => prevSlide(offset, setOffset)}>
          <HiArrowLongUp />
        </div>
      )}
    </div>
  );
}
