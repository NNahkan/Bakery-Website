import React, { useRef, useState } from "react";
import { formElements } from "../../constants";
import s from "./Form.module.css";
import { motion } from "framer-motion";

const variants = {
  open: { x: -10, y: -25 },
  closed: { y: 0 },
};

const SingleInput = ({ name }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={s.formInput}>
      <motion.label
        className={s.formLabel}
        animate={isActive ? "open" : "closed"}
        variants={variants}

        // style={isActive ? { bottom: "30px" } : {}}
      >
        {name}
      </motion.label>
      <input
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        type="text"
      />
    </div>
  );
};

const Form = () => {
  const formRef = useRef();
  return (
    <form className={s.contactForm}>
      {formElements.map((item) => (
        <SingleInput key={item.name} {...item} />
      ))}
      <button className="btn">Send</button>
    </form>
  );
};

export default Form;
