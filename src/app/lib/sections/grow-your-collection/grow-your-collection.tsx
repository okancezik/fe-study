"use client";

import React, { useRef } from "react";
import styles from "./grow-your-collection.module.scss";
import Title from "../../atomic/title/title";
import Submessage from "../../atomic/submessage/submessage";
import Image from "next/image";
import grow from "../../../../../public/grow.svg";
import Slider from "react-slick";

const GrowYourCollection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    nextArrow: (
      <Image
        className={styles.arrowButton}
        src={"/prev-2.svg"}
        alt="slider button"
        width={40}
        height={40}
      />
    ),
    prevArrow: (
      <Image
        className={styles.arrowButton}
        src={"/prev-1.svg"}
        alt="slider button"
        width={40}
        height={40}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const items = [
    {
      title: "Bibendum",
      icon: "/search.svg",
    },
    {
      title: "Crass eget",
      icon: "/shield-check.svg",
    },
    {
      title: "Dolor pharetra",
      icon: "/rocket.svg",
    },

    {
      title: "Amet fringilla",
      icon: "/shield-check.svg",
    },

    {
      title: "Amet nibh",
      icon: "/shield-check.svg",
    },

    {
      title: "Sed velit",
      icon: "/settings-alt.svg",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title>Grow your collection</Title>
        <Submessage>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </Submessage>
      </div>
      <div className={styles.body}>
        <div className={styles.desktop}>
          {items.map((item, index) => (
            <div key={index} className={styles.buttonItem}>
              <Image src={item.icon} alt="item" width={24} height={24} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className={styles.mobile}>
          <Slider ref={sliderRef} {...settings}>
            {items.map((item, index) => (
              <div key={index} className={styles.item}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={35}
                    height={35}
                  />
                  <span className={styles.message}>{item.title}</span>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <Image src={grow} alt="grow" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default GrowYourCollection;
