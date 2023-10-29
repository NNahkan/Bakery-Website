import React from "react";

const WorkCard = ({ name }) => {
  return (
    <div style={{ width: "100px", height: "100px", background: "black" }}>
      {name}
    </div>
  );
};

const Works = () => {
  return (
    <div className="secondaryContainer">
      <h4 className="sectionFirstHeader">My Work</h4>
      <h1 className="sectionSecondHeader">Examples</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        voluptatem vitae nemo aspernatur facilis incidunt. Illum saepe quaerat
        magni nesciunt inventore, cum tenetur quibusdam repellendus itaque dicta
        quas libero enim.
      </p>
      <div>
        <WorkCard name={"anan"} />
        <WorkCard name={"anan"} />
        <WorkCard name={"anan"} />
      </div>
    </div>
  );
};

export default Works;
