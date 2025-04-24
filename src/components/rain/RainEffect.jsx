import React, { useEffect, useRef } from "react";
import styles from "./rain.module.css";

function RainEffect() {
  const frontRowRef = useRef(null);
  const backRowRef = useRef(null);

  useEffect(() => {
    const makeItRain = () => {
      if (!frontRowRef.current || !backRowRef.current) return;

      // Clear out previous drops
      frontRowRef.current.innerHTML = "";
      backRowRef.current.innerHTML = "";

      let increment = 0;
      let dropsHTML = "";
      let backDropsHTML = "";

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * 98) + 1;
        const randoFiver = Math.floor(Math.random() * 4) + 2;
        increment += randoFiver;

        const animationDelay = `0.${randoHundo}s`;
        const animationDuration = `0.5${randoHundo}s`;
        const bottomPosition = `${randoFiver + randoFiver - 1 + 100}%`;

        const dropStyle = `left: ${increment}%; bottom: ${bottomPosition}; animation-delay: ${animationDelay}; animation-duration: ${animationDuration};`;
        const stemSplatStyle = `animation-delay: ${animationDelay}; animation-duration: ${animationDuration};`;

        dropsHTML += `<div class="${styles.drop}" style="${dropStyle}">
             <div class="${styles.stem}" style="${stemSplatStyle}"></div>
             <div class="${styles.splat}" style="${stemSplatStyle}"></div>
           </div>`;

        const backDropStyle = `right: ${increment}%; bottom: ${bottomPosition}; animation-delay: ${animationDelay}; animation-duration: ${animationDuration};`;
        backDropsHTML += `<div class="${styles.drop}" style="${backDropStyle}">
             <div class="${styles.stem}" style="${stemSplatStyle}"></div>
             <div class="${styles.splat}" style="${stemSplatStyle}"></div>
           </div>`;
      }

      frontRowRef.current.innerHTML = dropsHTML;
      backRowRef.current.innerHTML = backDropsHTML;
    };

    makeItRain();

    // Note: The toggle functionality from the original rain.js
    // (splat-toggle, back-row-toggle, single-toggle)
    // would need to be reimplemented here using React state (useState)
    // and event handlers if you need those features.
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className={styles.rainContainer}>
      {" "}
      {/* Optional: Add a container class if needed */}
      {/* The CSS module handles the .rain class selectors, but we target specific divs */}
      {/* We might need to adjust CSS if .rain class was essential for positioning */}
      <div
        ref={frontRowRef}
        className={`${styles.rain} ${styles.frontRow}`}
      ></div>
      <div
        ref={backRowRef}
        className={`${styles.rain} ${styles.backRow}`}
      ></div>
      {/* Add toggle buttons here if needed, managing state with useState */}
    </div>
  );
}

export default RainEffect;
