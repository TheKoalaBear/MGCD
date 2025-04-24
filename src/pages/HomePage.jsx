import React from "react";
import styles from "./HomePage.module.css"; // Import CSS Module
import Navbar from "../components/Navbar"; // Import Navbar component
import RainEffect from "../components/rain/RainEffect"; // Import RainEffect component
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <main className={styles.homeMain}>
        <div className={styles.contentBox}>
          <RainEffect />
        </div>

        <div className={styles.marquee}>
          <div className={styles.marquee_blur} aria-hidden="true">
            <p className={styles.marquee_text}>
              Hello! I'm Genesis, a creative designer and web developer based in
              Hamilton.
            </p>
          </div>
          <div className={styles.marquee_clear}>
            <p className={styles.marquee_text}>
              Hello! I'm Genesis, a creative designer and web developer based in
              Hamilton.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
