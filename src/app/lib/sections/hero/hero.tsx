import React from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import Submessage from "../../atomic/submessage/submessage";
import Title from "../../atomic/title/title";
import HeroFooter from "../hero-footer/hero-footer";

const Hero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.desktopRightColumn}>
          <Title>Collectible Sneakers</Title>
          <Submessage>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </Submessage>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button>Sign Up</button>
            <p>Watch Demo</p>
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
    </>
  );
};

export default Hero;
