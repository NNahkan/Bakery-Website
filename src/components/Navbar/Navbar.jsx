import React from "react";
import s from "./Navbar.module.css";
import { graceLogo } from "../../assets";

const Navbar = () => {
  return (
    <div className={s.navbarMain}>
      <div className={`${s.navbarFlex} container`}>
        <div className={s.imgCover}>
          <img src={graceLogo} alt="" />
        </div>
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
