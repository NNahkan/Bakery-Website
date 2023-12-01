import React, { useRef, useState } from "react";
import { formElements } from "../../constants";
import s from "./Form.module.css";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: -20,
    y: -30,
    color: "pink",
  },
  closed: {
    y: 0,
    x: 0,
  },
};

const FORM_INPUTS = {
  name: "",
  email: "",
  message: "",
  phonenumber: "",
};

const SingleInput = ({ name }) => {
  const [isActive, setIsActive] = useState(false);
  const [formInputs, setFormInputs] = useState(FORM_INPUTS);

  const handleChange = ({ target: { value, name } }) => {
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const trimmedName = name.trim(" ");

  return (
    <div className={s.formInput}>
      <motion.label
        className={s.formLabel}
        animate={isActive || formInputs[trimmedName] ? "open" : "closed"}
        variants={variants}

        // style={isActive ? { bottom: "30px" } : {}}
      >
        {name}
      </motion.label>
      <input
        name={name}
        value={formInputs[trimmedName]}
        onChange={(e) => handleChange(e)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        type="text"
      />
    </div>
  );
};

const Form = () => {
  const formRef = useRef();
  return (
    <form ref={formRef} className={s.contactForm}>
      {formElements.map((item) => (
        <SingleInput key={item.name} {...item} />
      ))}
      <button className={`btn ${s.formButton}`}>Send</button>
    </form>
  );
};

export default Form;
