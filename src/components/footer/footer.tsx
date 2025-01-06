"use client";
import React from "react";
import styles from "./footer.module.scss";


export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Left Section */}
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}></div>
          <div>
          <p className={styles.footerText}>+2348065470241</p>
          <p className={styles.footerText}>info@bamsteelworld.com</p>
          <p className={styles.footerText}>Abuja, Federal Capital Territory, Nigeria</p>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.footerRight}>
          <p className={styles.heading}>
            Stay Connected
          </p>
          <form className={styles.footerForm}>
            <input
              type="email"
              placeholder="Enter email address"
              className={styles.footerInput}
            />
            <button
              type="submit"
              className={styles.footerButton}
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Bamijoko & Sons. All rights reserved.
          </p>
          <p className={styles.footerText + " " + styles.powered}>
            Powered by <a href="https://www.gritinformedia.tech" target="_blank" rel="noopener noreferrer">Grit Informed Media</a>
          </p>
        </div>
    </footer>
  );
}
