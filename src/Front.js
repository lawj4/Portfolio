import React, { useState, useEffect } from "react";

function showAbout() {
    let word = document.querySelector(".leftHeader").innerHTML;
    if (word === 'About') {
        document.querySelector(".leftHeader").innerHTML = 'Close';
        document.querySelector(".aboutpage").style.visibility = "visible";
        document.querySelector(".header").style.visibility = "hidden";
        document.querySelector(".nextSlide").style.visibility = "hidden";
        document.querySelector(".rightHeader").style.visibility = "hidden";
    } else {
        document.querySelector(".leftHeader").innerHTML = 'About';
        document.querySelector(".aboutpage").style.visibility = "hidden";
        document.querySelector(".header").style.visibility = "visible";
        document.querySelector(".nextSlide").style.visibility = "visible";
        document.querySelector(".rightHeader").style.visibility = "visible";
    }
     
}
export default function Front() {
    const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
   

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);
  if (document.querySelector('.front') !== null) {
    let xCoord = (mousePos.x);
      let xHalf = window.innerWidth/2;
      let xOffset = ((xCoord - xHalf) / (xHalf))*10;
      document.querySelector(".front").style.transform = `translate(${-xOffset}px, 0)`
  }

  
      

  return (
    <div className="all-front">
      <div className="fronttext">
        <div className="header">
          Jefferson Law 
          <div className="bottomheader">CS STUDENT @ UCI</div>
        </div>
        <div
          className="leftHeader"
          onClick={() => showAbout()}
        >
          About
        </div>
        <div
          className="rightHeader"
          onClick={() => alert('right')}
        >
          Resume
        </div>
      </div>
      <div className="front">
        <div className="video-container">
        <div className="aboutpage">

        </div>

          <video autoPlay="autoPlay" muted loop>
            <source src={require("./images/firewatch.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
