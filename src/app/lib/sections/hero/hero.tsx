import React from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import Submessage from "../../atomic/submessage/submessage";
import Title from "../../atomic/title/title";
import HeroFooter from "../hero-footer/hero-footer";
import SecondaryButton from "../../atomic/secondary-button/secondary-button";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.desktopRightColumn}>
          <Title>Collectible Sneakers</Title>
          <Submessage>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </Submessage>
          <div style={{ display: "flex", gap: "1rem" }}>
            <SecondaryButton>Sign Up</SecondaryButton>
            <SecondaryButton style={{border:"0"}}>Watch Demo</SecondaryButton>
          </div>
        </div>
        <div className={styles.desktopHeroImage}>
          <Image src={"/hero-banner.svg"} alt="hero" width={768} height={340} />
        </div>
        <Image
          className={styles.mobileHeroImage}
          src={"/hero-banner.svg"}
          alt="hero"
          width={768}
          height={340}
        />
      </div>
      <HeroFooter />
    </div>
  );
};

export default Hero;
