import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbarMain}>
      <div className={`${s.navbarFlex} container`}>
        <div style={{ width: "80px", height: "80px", background: "white" }} />
        <ul className={s.ulList}>
          <li>
            <button>Ali</button>
          </li>
          <li>
            <button>Ahmet</button>
          </li>
          <li>
            <button>Mehmet</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
