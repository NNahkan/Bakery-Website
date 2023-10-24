import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbarMain}>
      <div className={`${s.navbarFlex} container`}>
        <div style={{ width: "100px", height: "100px", background: "white" }} />
        <ul className={s.ulList}>
          <li>Ali</li>
          <li>Ahmet</li>
          <li>Mehmet</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
