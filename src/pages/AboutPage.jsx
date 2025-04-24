import React from "react";
import styles from "./AboutPage.module.css"; // Import CSS module
import Navbar from "../components/Navbar";
import { FaUser } from "react-icons/fa";
// Import necessary icons
import {
  FaCode,
  FaCameraRetro,
  FaVideo,
  FaPaintBrush,
  FaSearch,
  FaLightbulb,
  FaLayerGroup,
  FaFlask,
  FaFlag,
} from "react-icons/fa";

// Expertise Data
const expertiseData = [
  {
    icon: FaPaintBrush,
    title: "Design",
    description:
      "Creating smart ideas and branding experiences. Good design is less design.",
  },
  {
    icon: FaCode,
    title: "Web",
    description:
      "Designing super cool websites. An effective website is critical.",
  },
  {
    icon: FaCameraRetro,
    title: "Photography",
    description: "You don't take photographs, you make it. - Ansel Adams",
  },
  {
    icon: FaVideo,
    title: "Video Editing",
    description: "Crafting fun and eye-catching videos with camera and drones.",
  },
];

// Work Process Data
const processData = [
  { icon: FaSearch, title: "RESEARCH" },
  { icon: FaLightbulb, title: "IDEA" },
  { icon: FaPaintBrush, title: "DESIGN" },
  { icon: FaLayerGroup, title: "DEVELOP" },
  { icon: FaFlask, title: "TEST" },
  { icon: FaFlag, title: "LAUNCH" },
];

function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      {/* <Navbar /> // Navbar is likely rendered in App.jsx or a layout component */}
      {/* Top Title */}
      <div className={styles.titleContainer}>
        <span className={styles.titleDots}>•</span>
        <span className={styles.titleText}>IDENTIFICATION CARD</span>
        <span className={styles.titleDots}>•</span>
      </div>

      {/* Main Frame */}
      <div className={styles.frameContainer}>
        {/* Left Decorative Elements */}
        <div className={styles.frameSideLeft}>
          <div className={styles.frameCornerTopLeft}></div>
          <div className={styles.targetMarker}></div>
          <div className={styles.frameBracketLeft}></div>
          <div className={styles.frameCornerBottomLeft}></div>
          <div className={styles.numberGroupLeft}>
            <span>56 34</span>
            <span>65 45</span>
          </div>
        </div>

        {/* Middle Content Area */}
        <div className={styles.frameMiddle}>
          <div className={styles.stripedBox}></div>

          <div className={styles.descriptionBox}>
            <div className={styles.contentContainer}>
              <div className={styles.leftContent}>
                <FaUser className={styles.iconStyle} />
                <p>
                  Mc Genesis De Vera <br /> Full Stack Web Developer <br /> &
                  Graphic Designer
                </p>
              </div>
              <div className={styles.rightContent}>
                <span className={styles.label}>PROFILE</span>

                <p>
                  Results-oriented Full Stack Web Developer with a Diploma in
                  Advanced Full Stack Development and a Bachelor's Degree in
                  Computer Graphic Design. Adept at creating user-focused,
                  visually compelling web solutions with strong backend
                  functionality. Expertise in both team collaborations and
                  independent projects, blending technical precision with
                  creative vision to deliver exceptional user experiences.
                </p>
                <p>
                  <span className={styles.label}>LOCATION</span> - HAMILTON,
                  WAIKATO
                </p>
              </div>
            </div>
            <p>ANALYZE COMPLETE. PROFILE LOADED.</p>
          </div>
          <div className={styles.stripedBox}></div>
        </div>

        {/* Right Decorative Elements */}
        <div className={styles.frameSideRight}>
          <div className={styles.frameCornerTopRight}></div>
          <div className={styles.targetMarker}></div>
          <div className={styles.frameBracketRight}></div>
          <div className={styles.frameCornerBottomRight}></div>
          <div className={styles.numberGroupRight}>
            <span>56 34</span>
            <span>65 45</span>
          </div>
        </div>
      </div>

      {/* --- Expertise Section --- */}
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.titleLine}></div>
          <h2 className={styles.sectionTitle}>EXPERTISE</h2>
          <div className={styles.titleLine}></div>
        </div>
        <div className={styles.expertiseGrid}>
          {expertiseData.map((item, index) => (
            <div key={index} className={styles.expertiseCard}>
              <item.icon className={styles.expertiseIcon} />
              <h3 className={styles.expertiseTitle}>{item.title}</h3>
              <p className={styles.expertiseDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Work Process Section --- */}
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitleContainer}>
          <div className={styles.titleLine}></div>
          <h2 className={styles.sectionTitle}>WORK PROCESS</h2>
          <div className={styles.titleLine}></div>
        </div>
        <div className={styles.processSteps}>
          {processData.map((item, index) => (
            <React.Fragment key={index}>
              <div className={styles.processStep}>
                <div className={styles.processIconContainer}>
                  <item.icon className={styles.processIcon} />
                </div>
                <h4 className={styles.processTitle}>{item.title}</h4>
              </div>
              {/* Add connector if not the last item */}
              {index < processData.length - 1 && (
                <div className={styles.processConnector}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* End of Main Frame */}
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLine}></div>
        <span className={styles.analyzeText}>'///END OF CONTENT///.</span>
        <div className={styles.bottomLine}></div>
      </div>
    </div>
  );
}

export default AboutPage;
