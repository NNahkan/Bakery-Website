import React from "react";
import s from "./Contact.module.css";
import { Canvas } from "@react-three/fiber";
import CakeCanvas from "../canvas/Cake";
import Form from "../Form/Form";
import { SectionsWrapper } from "../../hoc";

const Contact = () => {
  return (
    <div className="container">
      <div className={s.contactWrapper}>
        <div className={s.formContainer}>
          <h4 className="sectionFirstHeader">Get in Touch</h4>
          <h1 className="sectionSecondHeader">Contact</h1>
          <Form />
        </div>
        <div className={s.canvasContainer}>
          <CakeCanvas />
        </div>
      </div>
    </div>
  );
};

export default SectionsWrapper(Contact, "contact");
