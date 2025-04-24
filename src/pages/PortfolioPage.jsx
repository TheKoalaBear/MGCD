import React from "react";
import styles from "./PortfolioPage.module.css"; // Import CSS module
import { FaExclamationTriangle } from "react-icons/fa"; // Import warning icon
import Navbar from "../components/Navbar"; // Assuming Navbar is used globally or here

function PortfolioPage() {
  return (
    <div className={styles.portfolioContainer}>
      {/* <Navbar /> // Render Navbar if needed */}

      <div className={styles.constructionBanner}>
        <FaExclamationTriangle className={styles.warningIcon} />
        <span className={styles.bannerText}>UNDER CONSTRUCTION</span>
        <FaExclamationTriangle className={styles.warningIcon} />
      </div>
      {/* You can add other placeholder content below if needed */}
      {/* <p>Portfolio content coming soon...</p> */}
    </div>
  );
}

export default PortfolioPage;
