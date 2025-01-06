"use client";
import Service from '@components/services/service';
import styles from './homepage.module.scss';
import { Button } from '@components/ui/button/button';
import useCaseItems from './useCaseItems';
import Image from 'next/image';

import homeCat1 from '@assets/home-cat-1.png';
import homeCat2 from '@assets/home-cat-2.png';
import homeCat3 from '@assets/home-cat-3.png';
import homeCat4 from '@assets/home-cat-4.png';

const downloadFile = () => {
  const link = document.createElement('a');
  link.href = '/catalogue.pdf'; 
  link.download = 'catalogue.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  return (
    <main className="main-container">
      <section className={styles.hero}>
        <div className={styles.mainHeroContent}>
            <div className={styles.textWrapper}>
            <h1 className={styles.heroTitle}>Timeless elegance in <br/> metal artistry</h1>
            <p className={styles.heroText}>
            Our railing systems are durable, detailed and distinct. Our in-house team of engineers and fabricators can guide you from concept to installation. 
            </p>
          </div>
            <Button onClick={downloadFile}>
            Download Catalogue
          </Button>
        </div>
      </section>
      <section className={styles.statistics}>
          <div className={styles.statItem}>
            <p className={styles.firstDiv}>100%</p>
            <p className={styles.secondDiv}>Satisfied <br /> Clients</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.firstDiv}>150+</p>
            <p className={styles.secondDiv}>Professional <br /> Installers</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.firstDiv}>1000+</p>
            <p className={styles.secondDiv}>Projects <br /> Completed</p>
          </div>
        </section>
        <section className={styles.useCases}>
          <div className={styles.sectionDesc}>
            <h2 className={styles.heading}>Use Cases</h2>
            <p className={styles.text}>With our high quality materials, we’ll assist you in creating a space where you may share the things that are most important.</p>
          </div>
          <div className={styles.useCaseGrid}>
            {useCaseItems.map((item) => (
                    <div className={styles.useCaseImage} key={item.id}>
                    <Image src={item.image} alt="Item" width={400} height={300} className={styles.image}/>
                        <div className={styles.description}>
                            <h2 className={styles.descTitle}>{item.title}</h2>
                            <p className={styles.descText}>{item.description}</p>
                        </div>
                    </div>
            ))}
          </div>
        </section>
        <section className={styles.catalogue}>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>Catalogue</h2>
            <p className={styles.text}>This section highlights a curated collection of bespoke railings, staircases, and architectural metalworks designed to blend sophistication with structural integrity.</p>
          </div>
          <div className={styles.catalogueImages}>
            <div className={styles.sectionOne}>
              <Image src={homeCat1} alt="Item" width={400} height={300} className={styles.catImage1}/>
              <Image src={homeCat2} alt="Item" width={400} height={300} className={styles.catImage2}/>
            </div>
            <div className={styles.sectionTwo}>
              <Image src={homeCat3} alt="Item" width={400} height={300} className={styles.catImage2}/>
              <Image src={homeCat4} alt="Item" width={400} height={300} className={styles.catImage1}/>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => window.location.href = "/catalogue"}>
              Explore Catalogue
            </Button>
          </div>
        </section>
      <Service />
    </main>
  );
}
