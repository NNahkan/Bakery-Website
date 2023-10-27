import React from "react";
import s from "./About.module.css";
import { services } from "../../constants";

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
    <div className={s.aboutContainer}>
      <div className="container">
        <h4>INTRODUCTION</h4>
        <h1>Overview.</h1>
        <p className={s.parap}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          libero odit voluptates iste pariatur perspiciatis, qui harum corrupti
          suscipit ut mollitia aut cupiditate architecto quae nisi. Expedita
          maiores eveniet autem!
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

export default About;
