import React from "react";
import s from "./Works.module.css";
import { examples } from "../../constants";
import { SectionsWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const WorkCard = ({ index, name, image }) => {
  return (
    <motion.div
      className={s.workCard}
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    >
      <img src={image} alt="" />
      <div>
        <span>{name}</span>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <motion.div className="secondaryContainer" variants={textVariant()}>
      <h4 className="sectionFirstHeader">My Work</h4>
      <h1 className="sectionSecondHeader">Examples</h1>
      <motion.p className={s.parap} variants={fadeIn("", "", 0.1, 1)}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        voluptatem vitae nemo aspernatur facilis incidunt. Illum saepe quaerat
        magni nesciunt inventore, cum tenetur quibusdam repellendus itaque dicta
        quas libero enim.
      </motion.p>
      <div className={s.worksFlex}>
        {examples.map((item, index) => (
          <WorkCard key={item.name} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionsWrapper(Works, "works");
