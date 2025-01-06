// components/services.tsx

import React from "react";
import { Button } from "@components/ui/button/button";
import styles from "./services.module.scss"


export default function Service() {
    return (
      <section className={styles.servicesContainer}>
        <h2 className={styles.servicesHeading}>Services</h2>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <span>Luxury Railing Installation</span>
            <div className={styles.buttonWrapper}>
              <Button onClick={() => window.location.href = "https://wa.me/+2348065470241"}> 
                Book Now
              </Button>
            </div>
          </li>
          <li className={styles.serviceItem}>
            <span>Luxury Railing Sales</span>
            <div className={styles.buttonWrapper}>
              <Button onClick={() => window.location.href = "https://wa.me/+2348065470241"}> 
                Book Now
              </Button>
            </div>
          </li>
        </ul>
      </section>
    );
  }
  