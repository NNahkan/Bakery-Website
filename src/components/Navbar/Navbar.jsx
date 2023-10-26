import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbarMain}>
      <div className={`${s.navbarFlex} container`}>
        <div style={{ width: "80px", height: "80px", background: "white" }} />
        <ul className={s.ulList}>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
          <li>
            <button>Samples</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
