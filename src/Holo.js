import React, { useState, useEffect } from "react";
export default function Holo(prop) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const [seconds, setSeconds] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

    


    let iteration = 0;


    const interval = setInterval(() => {
    let name = document.querySelector(".name");
      name.innerHTML = name.innerHTML
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return name.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 36)];
        })
        .join("");

      if (iteration >= name.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4;
    }, 30);

  return (
    <div className="holo" >
      <div className="holo-image">{prop.image}</div>
      <div className="holo-overlay" />
      <div class="holo-content">
        <i className="holo-icon fa-brands fa-codepen"></i>
        <div className="holo-user">
          <span className="name" data-value="MINIMALIST CLOCK">
            MINIMALIST CLOCK
          </span>
        </div>
      </div>
    </div>
  );
}
