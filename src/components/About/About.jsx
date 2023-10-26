import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.aboutContainer}>
      <div className="container">
        <h2>INTRODUCTION</h2>
        <h1>Overview</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          libero odit voluptates iste pariatur perspiciatis, qui harum corrupti
          suscipit ut mollitia aut cupiditate architecto quae nisi. Expedita
          maiores eveniet autem!
        </p>
        <div>
          <div className={s.box}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
