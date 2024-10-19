"use client";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./carousel.module.scss";
import Slider from "react-slick";

export interface CarouselProps {
  items: Array<{
    imageUrl: string;
    altText: string;
    message: string;
    userImage: string;
    who: string;
    title: string;
  }>;
}

export default function Carousel(props: CarouselProps) {
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

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {props.items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div>
              <Image
                src={item.imageUrl}
                alt={item.altText}
                width={50}
                height={50}
              />
              <span className={styles.message}>
                {item.message}
              </span>
              <div style={{display:"flex",gap:"1rem",marginTop:"1rem"}}>
                <Image
                  src={item.userImage}
                  alt={item.who}
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />
                <div style={{display:"flex", flexDirection:"column",gap:"0.5rem"}}>
                  <span className={styles.who}>{item.who}</span>
                  <span style={{color:"#475569"}}>{item.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
