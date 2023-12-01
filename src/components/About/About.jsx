import React from "react";
import s from "./About.module.css";
import { services } from "../../constants";
import { SectionsWrapper } from "../../hoc";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className={s.box}>
      <img src={icon} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

const About = () => {
  return (
    <div className={`${s.aboutContainer} `}>
      <div className="secondaryContainer">
        <h4 className="sectionFirstHeader">INTRODUCTION</h4>
        <h1 className="sectionSecondHeader">Overview.</h1>
        <p className={s.parap}>
          Hey there! I'm Grace, the baker behind [Business Name]. Passionate
          about turning simple ingredients into delightful memories. Join me in
          celebrating life's sweetness, one cake at a time! 🍰✨ <br /><br />Celebrations
          are personal, and so is our approach. My commitment is to be a part of
          your joy, turning ordinary moments into sweet memories. Ready to add a
          dash of sweetness to your special moments? I can't wait to bake for
          you.
        </p>
        <div className={s.cardsWrap}>
          {services.map((item, index) => (
            <ServiceCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionsWrapper(About, "about");
