import React from "react";
import s from "./Feedbacks.module.css";

const Feedbacks = () => {
  return (
    <div className="secondaryContainer">
      <div className={s.feedbacksContainer}>
		<h4 className="sectionFirstHeader">What other says</h4>
      <h1 className="sectionSecondHeader">testimonials</h1>
		</div>
		<div className={s.testimonials}>
			<div></div>
		<h4 className="sectionFirstHeader">What other says</h4>
      <h1 className="sectionSecondHeader">testimonials</h1>
		</div>
    </div>
  );
};

export default Feedbacks;
