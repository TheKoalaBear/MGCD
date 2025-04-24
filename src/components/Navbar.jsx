import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { id: "nav-about", label: "ABOUT ME", path: "/about", number: "01" },
    { id: "nav-resume", label: "RESUME", path: "/resume", number: "02" },
    {
      id: "nav-portfolio",
      label: "PORTFOLIO",
      path: "/portfolio",
      number: "03",
    },
    { id: "nav-contacts", label: "CONTACTS", path: "/contacts", number: "04" },
  ];

  return (
    <div className={styles.navOuterContainer}>
      <div
        className={styles.glitchContainer}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        MGCD
        <span>MGCD</span>
        <span>MGCD</span>
      </div>
      <div className={styles.container}>
        {navItems.map((item, index) => (
          <div key={item.id} className={styles.radioWrapper}>
            <input
              type="radio"
              id={item.id}
              name="nav-radio"
              className={styles.input}
            />
            <Link to={item.path} className={styles.btn}>
              <label htmlFor={item.id} className={styles.btnLabel}>
                {item.label}
                <span className={styles.btn__glitch}>{item.label}</span>
              </label>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
