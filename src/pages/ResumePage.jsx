import React from "react";
import styles from "./ResumePage.module.css";
import Navbar from "../components/Navbar"; // Assuming Navbar is used globally or here

function ResumePage() {
  return (
    <div className={styles.resumeContainer}>
      {/* <Navbar /> // Render Navbar if needed */}

      <div className={styles.mainContentGrid}>
        {" "}
        {/* Main grid for layout */}
        {/* --- Left/Main Column Content --- */}
        <div className={styles.leftColumn}>
          {/* Top Multi-column Section (Contacts, Education, Profile Summary) */}

          <hr className={`${styles.separator} ${styles.fullWidthSeparator}`} />

          {/* Skills Section */}
          <section className={`${styles.section} ${styles.skillsSection}`}>
            <h3 className={styles.blockTitle}>Skills</h3>
            <div className={styles.skillsGrid}>
              <div>
                <h4>Technical Expertise</h4>
                <p>
                  HTML, CSS, JavaScript, Node.js, React, Responsive web design,
                  API integration, debugging
                </p>
              </div>
              <div>
                <h4>Creative Design</h4>
                <p>Graphic Design, UI/UX, Photography, Video Editing</p>
              </div>
              <div>
                <h4>Software Proficiency</h4>
                <p>
                  Adobe Creative Suite (Photoshop, Illustrator, After Effects,
                  XD), Figma, MS Office
                </p>
              </div>
            </div>
          </section>

          <hr className={`${styles.separator} ${styles.fullWidthSeparator}`} />

          {/* Experience Section */}
          <section className={`${styles.section} ${styles.experienceSection}`}>
            <h3 className={styles.blockTitle}>Work Experience</h3>
            <div className={styles.experienceGrid}>
              <div className={styles.jobItem}>
                <h4>Intermediate Graphic Designer | Beetle & Associates</h4>
                <span className={styles.date}>SEP 2023 - DEC 2023</span>
                <ul>
                  <li>
                    Responsible for defining and enhancing the visual identity
                    of the company and its clients.
                  </li>
                  <li>
                    Worked closely with the creative team to develop innovative
                    and captivating design solutions across diverse projects.
                  </li>
                </ul>
              </div>
              <div className={styles.jobItem}>
                <h4>Intermediate Graphic Designer | Māori Television</h4>
                <span className={styles.date}>JAN 2023 - JULY 2023</span>
                <ul>
                  <li>
                    Designed on-screen graphics (OTSs) for live broadcasts and
                    news segments.
                  </li>
                  <li>
                    Provided support for other design tasks, including creating
                    materials for online articles.
                  </li>
                </ul>
              </div>
              <div className={styles.jobItem}>
                <h4>Senior Graphic Designer | Seasons Magazine</h4>
                <span className={styles.date}>APR 2019 - AUG 2022</span>
                <ul>
                  <li>
                    Developed marketing materials across digital and print
                    mediums.
                  </li>
                  <li>
                    Maintained project-wide quality control to ensure high
                    standards and accuracy in design output.
                  </li>
                </ul>
              </div>
              <div className={styles.jobItem}>
                <h4>Marketing Designer | Just1LTD</h4>
                <span className={styles.date}>APR 2019 - AUG 2022</span>
                <ul>
                  <li>
                    Collaborated with clients to enhance marketing communication
                    strategies, focusing on advertisements, promotions,
                    graphics, and collateral materials.
                  </li>
                  <li>
                    Produced and managed projects in both digital and print
                    mediums to maximize brand impact.
                  </li>
                </ul>
              </div>
              <div className={styles.jobItem}>
                <h4>Lead UI/UX Designer | Bookit</h4>
                <span className={styles.date}>2017 - 2018</span>
                <ul>
                  <li>
                    Worked with developers to improve GUI usability by
                    identifying and addressing bugs and vulnerabilities.
                  </li>
                  <li>
                    Produced marketing and B2B media materials, contributing to
                    impactful and user-friendly designs.
                  </li>
                </ul>
              </div>
              <div className={styles.jobItem}>
                <h4>Lead Designer | Travelbug</h4>
                <span className={styles.date}>2017 - 2018</span>
                <ul>
                  <li>
                    Created visual designs, style guides, and concepts for
                    marketing materials.
                  </li>
                  <li>
                    Designed and produced media content for social media
                    outreach, achieving a strong online presence.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className={`${styles.separator} ${styles.fullWidthSeparator}`} />

          {/* Projects Section */}
          <section className={`${styles.section} ${styles.projectsSection}`}>
            <h3 className={styles.blockTitle}>Projects / GitHub Repository</h3>
            <div className={styles.projectsGrid}>
              <div className={styles.projectItem}>
                <h4>Z energy app</h4>
                <p>
                  This project is a React and Vite-based frontend inspired by
                  the Z Energy mobile application... (rest of description)
                </p>
                <a
                  href="https://github.com/TheKoalaBear/Mission-05-Frontend.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
              <div className={styles.projectItem}>
                <h4>Turners Cars Insurance Platform</h4>
                <p>
                  This project is a React and Vite-based frontend for Turners
                  Cars insurance... (rest of description)
                </p>
                <a
                  href="https://github.com/TheKoalaBear/Mission-04-Frontend.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* --- Right Column (Disclaimer/Info) --- */}
        <div className={styles.rightColumn}>
          <div className={styles.logoPlaceholder}>
            {" "}
            {/* Placeholder for a logo like WNS */}
            <span className={styles.logoText}>MGCD</span>
          </div>
          <section className={`${styles.section} ${styles.topSection}`}>
            <div className={styles.contactBlock}>
              <h3>Mc Genesis De Vera</h3>
              <p className={styles.blockSubtitle}>
                Full Stack Web Developer & Graphic Designer
              </p>
              <hr className={styles.separator} />
              <p>
                <span className={styles.label}>Email:</span>{" "}
                devera.mcg@gmail.com
              </p>
              <p>
                <span className={styles.label}>Phone:</span> 022 309 3860
              </p>
              <p>
                <span className={styles.label}>Website:</span>{" "}
                <a href="http://www.mgcd.link" target="_blank" rel="noreferrer">
                  www.mgcd.link
                </a>
              </p>
              <p>
                <span className={styles.label}>LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/mcgenesis-devera"
                  target="_blank"
                  rel="noreferrer"
                >
                  mcgenesis-devera
                </a>
              </p>
            </div>
            <div className={styles.educationBlock}>
              <h3 className={styles.blockTitle}>Education</h3>
              <div className={styles.educationItem}>
                <h4>Waikato University, 2016</h4>
                <p>Bachelor of Computer Graphic Design</p>
              </div>
              <div className={styles.educationItem}>
                <h4>Mission Ready, 2025</h4>
                <p>Diploma in Advanced Full Stack Developer</p>
              </div>
              <hr className={styles.separator} />
              <h3 className={styles.blockTitle}>Residency Status</h3>
              <p>NZ Citizen</p>
            </div>
            <div className={styles.profileBlock}>
              <h3 className={styles.blockTitle}>Profile</h3>
              <p>
                Results-oriented Full Stack Web Developer with a Diploma in
                Advanced Full Stack Development and a Bachelor's Degree in
                Computer Graphic Design. Adept at creating user-focused,
                visually compelling web solutions with strong backend
                functionality. Expertise in both team collaborations and
                independent projects, blending technical precision with creative
                vision to deliver exceptional user experiences.
              </p>
            </div>
          </section>
          {/* Barcode/Serial placeholder */}
          <div className={styles.barcodePlaceholder}>
            <span>01100 011 01 110000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
