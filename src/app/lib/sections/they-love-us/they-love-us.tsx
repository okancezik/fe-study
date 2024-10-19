import React from "react";
import styles from "./they-love-us.module.scss";
import Title from "../../atomic/title/title";
import Carousel from "../../ui/carousel/carousel";
import Image from "next/image";

const TheyLoveUs = () => {
  const items = [
    {
      imageUrl: "/logo-1.svg",
      altText: "image1",
      message:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      userImage: "/user-1.svg",
      who: "Hellen Jummy",
      title: "Team Lead",
    },
    {
      imageUrl: "/logo-2.svg",
      altText: "image2",
      message:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla",
      userImage: "/user-2.svg",
      who: "Hellena John",
      title: "Co-founder",
    },
    {
      imageUrl: "/logo-3.svg",
      altText: "image3",
      message:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      userImage: "/user-3.svg",
      who: "David Oshodi",
      title: "Manager",
    },
    {
        imageUrl: "/logo-1.svg",
        altText: "image1",
        message:
          "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        userImage: "/user-1.svg",
        who: "Hellen Jummy",
        title: "Team Lead",
      },
      {
        imageUrl: "/logo-2.svg",
        altText: "image2",
        message:
          "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla",
        userImage: "/user-2.svg",
        who: "Hellena John",
        title: "Co-founder",
      },
      {
        imageUrl: "/logo-3.svg",
        altText: "image3",
        message:
          "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        userImage: "/user-3.svg",
        who: "David Oshodi",
        title: "Manager",
      },
      {
        imageUrl: "/logo-1.svg",
        altText: "image1",
        message:
          "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        userImage: "/user-1.svg",
        who: "Hellen Jummy",
        title: "Team Lead",
      },
      {
        imageUrl: "/logo-2.svg",
        altText: "image2",
        message:
          "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla",
        userImage: "/user-2.svg",
        who: "Hellena John",
        title: "Co-founder",
      },
      {
        imageUrl: "/logo-3.svg",
        altText: "image3",
        message:
          "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        userImage: "/user-3.svg",
        who: "David Oshodi",
        title: "Manager",
      },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title>Because they love us</Title>
        <div className={styles.buttons}>
          <Image
            className={styles.arrowButton}
            src={"/prev.svg"}
            alt="slider button"
            width={40}
            height={40}
          />
          <Image
            className={styles.arrowButton}
            src={"/next.svg"}
            alt="slider button"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default TheyLoveUs;
