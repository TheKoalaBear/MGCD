import React, { useState, useRef } from "react";
import styles from "./ContactsPage.module.css"; // Import CSS module
import Navbar from "../components/Navbar"; // Assuming Navbar is used globally or here

// Import icons (optional, could be used within contact details)
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Import emailjs

function ContactsPage() {
  const form = useRef(); // Ref for the form element
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    setStatus("sending");

    // --- Replace with your actual EmailJS details ---
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
    // --------------------------------------------------

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("EmailJS Success:", result.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      },
      (error) => {
        console.log("EmailJS Error:", error.text);
        setStatus("error");
      }
    );
  };

  return (
    <div className={styles.contactsContainer}>
      {/* --- Main Grid Layout --- */}
      <div className={styles.mainGrid}>
        {/* --- Left Decorative Column --- */}
        <div className={styles.leftDecorCol}>
          <div className={styles.decorElement1}></div>
          <div className={styles.decorDotsGrid}></div>
          <div className={styles.decorElement2}></div>
        </div>

        {/* --- Center Content Column --- */}
        <div className={styles.centerContentCol}>
          <div className={styles.loadingBar}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.topHeader}>
            <div className={styles.headerFrame}></div>
            <span>CONTACT PROTOCOL</span>
          </div>

          <div className={styles.mainTitle}>
            <h1>CONNECT</h1>
          </div>

          <div className={styles.contentFrame}>
            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className={styles.contactForm}
            >
              <h2 className={styles.sectionTitle}>Direct Message Interface</h2>
              <div className={styles.formGroup}>
                <label htmlFor="user_name" className={styles.formLabel}>
                  Name:
                </label>
                <input
                  type="text"
                  name="user_name" // Matches EmailJS template variable (default)
                  id="user_name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="user_email" className={styles.formLabel}>
                  Email:
                </label>
                <input
                  type="email"
                  name="user_email" // Matches EmailJS template variable (default)
                  id="user_email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message:
                </label>
                <textarea
                  name="message" // Matches EmailJS template variable (default)
                  id="message"
                  className={styles.formTextarea}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className={styles.formSubmitButton}
                disabled={status === "sending"}
              >
                {status === "sending" ? "TRANSMITTING..." : "SEND"}
              </button>
              {/* Status Messages */}
              {status === "success" && (
                <p className={styles.statusMsgSuccess}>
                  Message Sent Successfully!
                </p>
              )}
              {status === "error" && (
                <p className={styles.statusMsgError}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info Section */}
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Alternate Channels</h2>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>devera.mcg@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <FaLinkedin className={styles.contactIcon} />
              <a
                href="https://www.linkedin.com/in/mcgenesis-devera"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mcgenesis-devera
              </a>
            </div>
            <div className={styles.infoItem}>
              <FaGithub className={styles.contactIcon} />
              <a
                href="https://github.com/TheKoalaBear"
                target="_blank"
                rel="noreferrer"
              >
                github.com/TheKoalaBear
              </a>
            </div>
          </div>

          <div className={styles.bottomFooter}>
            <div className={styles.footerFrame}></div>
            <span>SYSTEM ONLINE</span>
          </div>
          <div className={styles.loadingBar}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* --- Right Decorative Column --- */}
        <div className={styles.rightDecorCol}>
          <div className={styles.logoPlaceholder}></div>
          <div className={styles.dateElement}>
            <span className={styles.dateLabel}>DATE</span>
            <div className={styles.dateBoxes}>
              {/* Placeholder date boxes */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.numericDisplay}>
            {/* Placeholder numeric display */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
