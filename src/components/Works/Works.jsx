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
        Explore our gallery, where you'll find not just cakes but edible
        emotions crafted for you.Before I unveil our scrumptious creations, let
        me share a bit about the magic that happens when passion meets flour and
        sugar. Ready to dive into a world where each cake tells a unique story?
        Let the sweetness begin!
      </motion.p>
      <div className={s.worksFlex}>
        {examples.map((item, index) => (
          <WorkCard key={`${item.name} ${index}`} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionsWrapper(Works, "works");
