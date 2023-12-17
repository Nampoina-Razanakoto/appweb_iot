import React, { useState, useEffect } from "react";
import Img from "../Assets/rectangle.png";
import boky from "../Assets/smartHouse.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="_About" className="about">
      <figure data-aos="fade-right">
        <img src={Img} alt="" />
      </figure>
      <figcaption data-aos="fade-up">
        <h1 data-aos="fade-up">About the project</h1>
        <p data-aos="fade-up">
          
        </p>
        <a href={boky} download>
          More
        </a>
      </figcaption>
    </div>
  );
}
