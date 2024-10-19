import React from "react";
import styles from "./best-of-best.module.scss";
import Title from "../../atomic/title/title";
import Card from "../../ui/card/card";
import PrimaryButton from "../../atomic/primary-button/primary-button";
import image1 from '../../../../../public/best-of-best-1.png';
import image2 from '../../../../../public/best-of-best-2.png';
import image3 from '../../../../../public/best-of-best-3.png';
import { StaticImageData } from "next/image";

interface CardItem {
    imageSrc: string | StaticImageData;
    title: string;
    description: string;
    buttonText: string;
}

const BestOfBest = () => {
    const cards = [
        {
            imageSrc: image1,
            title: "Title",
            description:
                "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            buttonText: "Buy now",
        } as CardItem,
        {
            imageSrc: image2,
            title: "Title",
            description:
                "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            buttonText: "Buy now",
        } as CardItem,
        {
            imageSrc: image3,
            title: "Title",
            description:
                "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
            buttonText: "Buy now",
        } as CardItem,
    ];
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Title>The best of the best</Title>
                <div>
                <PrimaryButton>Sign Up now</PrimaryButton>
                </div>
            </div>
            <div className={styles.body}>
                {cards.map((card) => (
                    <Card
                        key={card.title}
                        title={card.title}
                        submessage={card.description}
                        image={card.imageSrc}
                        buttonMessage={card.buttonText}
                    />
                ))}
            </div>
        </div>
    );


};

export default BestOfBest;
