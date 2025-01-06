"use client"

import React from "react";
import styles from "./catalogue.module.scss";
import  catalogueItems from "./catalogueItems";
import Service from "@components/services/service";
import Image from "next/image";
import { Button } from "@components/ui/button/button";

const downloadFile = () => {
  const link = document.createElement('a');
  link.href = '/catalogue.pdf'; 
  link.download = 'catalogue.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CataloguePage = () => {
  return (
    <>
    <div className={styles.catalogueHero}>
        <h2 className={styles.heroText}>Catalogue</h2>
    </div>

    <div className={styles.catalogueContainer}>
        {catalogueItems.map((item) => (
                <div className={styles.catalogueImage} key={item.id}>
                <Image src={item.image} alt="Item" width={400} height={300} className={styles.image}/>
                    <div className={styles.description}>
                        <p className={styles.descText}>{item.description}</p>
                    </div>
                </div>
        ))}
        <div style={{display: "flex", marginTop: "2rem"}}>
          <Button onClick={downloadFile}>
              Download Catalogue
          </Button>
        </div>
    </div>
    <Service /> 
    </>
  );
};
export default CataloguePage;