import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import apple from "../../../../../public/apple.svg";
import android from "../../../../../public/android.svg";
import youtube from "../../../../../public/youtube.svg";
import facebook from "../../../../../public/facebook.svg";
import x from "../../../../../public/twitter.svg";
import instagram from "../../../../../public/instagram.svg";
import linkedin from "../../../../../public/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <span>Product</span>
          <span>Pricing</span>
          <span>Overview</span>
          <span>Browse</span>
          <span>Accesibility</span>
          <span>Five</span>
        </div>
        <div className={styles.column}>
          <span>Solutions</span>
          <span>Brainstorming</span>
          <span>Ideation</span>
          <span>Wireframing</span>
          <span>Research</span>
          <span>Design</span>
        </div>
        <div className={styles.column}>
          <span>Support</span>
          <span>Contact Us</span>
          <span>Developers</span>
          <span>Documentation</span>
          <span>Integrations</span>
          <span>Reports</span>
        </div>
        <div className={styles.column}>
          <span>Get The App</span>
          <Image src={apple} alt="apple"/>
          <Image src={android} alt="android" />
          <span>Follow Us</span>
          <div
            className={styles.icons}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image src={youtube} alt="youtube" />
            <Image src={facebook} alt="facebook" />
            <Image src={x} alt="x" />
            <Image src={instagram} alt="instagram" />
            <Image src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
