"use client"
import React from "react";
import styles from "./contact-us.module.scss";

const ContactUsPage = () => {
    return (
        <div className={styles.contactUsContainer}>
            <div className={styles.bgImage}></div>
            <div className={styles.contactCard}>
                <div className={styles.cardImage}></div>
                <div className={styles.detailsWrapper}>
                    <h2 className={styles.contactTitle}>Contact Us</h2>
                    <div className={styles.contactDetails}>
                        <a href="tel:+1234567890" className={styles.contactText} itemProp="telephone">+2348065470241</a>
                        <a href="mailto:info@bamsteelworld.com" className={styles.contactText} itemProp="email">info@bamsteelworld.com</a>
                        <p className={styles.contactText} itemProp="address">Abuja, Federal Capital Territory, Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;