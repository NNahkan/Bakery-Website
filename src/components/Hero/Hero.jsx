import React from "react";
import s from "./Hero.module.css";
import cake from "../../assets/birthdayCake.png";
import grace from "../../assets/grace.png";

const Hero = () => {
  return (
    <div className="container" >
      <div className="secondaryContainer">
        <img className={s.cake} src={cake} alt="" />
        <div className={s.heroWrap}>
          <h1 className={s.myName}>
            Hi, I'm <span style={{ color: "#2A9D8F" }}>Grace</span>
          </h1>
          <p>Love and passion</p>
          <p>That's how we make cakes</p>
        </div>
        <div className={s.signatureHolder}>
          <img src={grace} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
