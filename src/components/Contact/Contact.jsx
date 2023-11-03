import React from "react";
import s from "./Contact.module.css";
import { Canvas } from "@react-three/fiber";
import CakeCanvas from "../canvas/Cake";

const Contact = () => {
  return (
    <div className="container">
      <div className={s.contactWrapper}>
        <div class={s.box}></div>
        <div style={{ background: "transparent" }} className={s.box}>
          <CakeCanvas />
        </div>
      </div>
    </div>
  );
};

export default Contact;
