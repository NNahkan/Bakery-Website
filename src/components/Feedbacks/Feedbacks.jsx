import React from "react";
import s from "./Feedbacks.module.css";
import { testimonials } from "../../constants";
import { SectionsWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const FeedbackCard = ({ index, comment, person, image, cakeType }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.95)}
      className={s.feedbackCard}
    >
      <span>&apos;&apos;</span>
      <p>{comment}</p>
      <div className={s.personInfo}>
        <div>
          <p>
            <span>@</span> {person}
          </p>
          <p>{cakeType}</p>
        </div>
        <img src={image} alt="personImage" />
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="secondaryContainer">
      <div className={s.feedbacksContainer}>
        <div className={s.feedbacksHeaders}>
          <motion.h4 variants={textVariant()} className="sectionFirstHeader">
            What other says
          </motion.h4>
          <motion.h1 variants={textVariant()} className="sectionSecondHeader">
            testimonials
          </motion.h1>
        </div>
        <div className={s.testimonials}>
          {testimonials.map((item, index) => (
            <FeedbackCard index={index} key={item.person} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionsWrapper(Feedbacks, "");
