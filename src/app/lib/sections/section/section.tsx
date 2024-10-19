import React from "react";
import styles from "./section.module.scss";
import Image from "next/image";
import sectionImage from '../../../../../public/section.png'
import moıbileSectionImage from '../../../../../public/section-mobile.png'

const GrowFooter = () => {
  return <div className={styles.container}>
    <Image src={sectionImage} alt="section" className={styles.image}/>
    <Image src={moıbileSectionImage} alt="section" className={styles.mobileImage}/>
  </div>;
};

export default GrowFooter;
