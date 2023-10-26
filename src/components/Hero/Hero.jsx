import React from "react";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`container ${s.heroContainer}`}>
      <div>
        <div className={s.heroWrap}>
          <h1 className={s.myName}>
            Hi, I'm <span style={{ color: "#2A9D8F" }}>Grace</span>
          </h1>
          <p>Love and passion</p>
          <p>That's how we make cakes</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
