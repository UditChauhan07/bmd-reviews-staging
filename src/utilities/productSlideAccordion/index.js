import React, { useEffect, useRef } from "react";
import {
    Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,
} from "../FourStepProcess/accordion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './styles.module.css'


const ProductSlideAccordion = ({ content, theme, ModalHandler = null }) => {

    const scrollTop = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTop.current) {
                scrollTop.current.style.display =
                    window.scrollY > 1200 ? "inline-block" : "none";
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    console.log({ content });
    const [color, setColor] = React.useState("#000000");
    React.useEffect(() => {
        console.log({ theme });
        const onMouseEnter = () => {
            setColor(theme || '#56008C');
        };

        const onMouseLeave = () => {
            setColor("#000000");
        };

        document.getElementById("productAslideTrigger")?.addEventListener("mouseenter", onMouseEnter);
        document.getElementById("productAslideTrigger")?.addEventListener("mouseleave", onMouseLeave);
    }, [])
    return (

        <>
            <div>
                <p className={styles.ExtraCod} >
                    <h2>Benefici</h2>
                </p>
            </div>
            <div className={styles.container} id="beneficisection">

                <div className={styles.twoCol}>

                    <div className={styles.CaroselMain}>
                        <Carousel
                            infiniteLoop
                            useKeyboardArrows
                            autoPlay
                            showArrows
                            showIndicators={true}
                            showStatus={false}
                        >
                            {content.src.map((imageSrc, index) => (
                                <div className={` ${styles.dGrid} ${styles.dGridhover}`} key={index}>
                                    <img
                                        src={imageSrc}
                                        alt={content.altName[index]}
                                        className={styles.image}
                                    />
                                </div>
                            ))}
                        </Carousel>

                    </div>

                    <div className={styles.wrapper}>
                    <h2 className={styles.header}>{content?.heading}</h2>
                        {content.subHeading && <h2 className={styles.subHeader}>{content.subHeading}</h2>}
                        <h2 className={styles.subHeader} style={{ color: theme }}>{content.subtitle}</h2>
                        <p className={styles.underHeaderNote}>{content.text}</p>
                        {/* Replace Accordion with a simple list */}
                        <ul className={styles.list}>
                            {content.items.map((element, idx) => (
                                <li key={idx} className={styles.listItem}>
                                    <strong className={styles.title} style={content.lowerCase}>
                                        {element.title}&nbsp; 
                                    </strong>
                                    <text className={styles.description}>
                                        {element.description}
                                    </text>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>


            <span onClick={handleScrollTop} className="circle" ref={scrollTop}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                >
                    <path
                        d="M30 0C13.4487 0 0 13.4503 0 30C0 46.5497 13.4503 60 30 60C46.5497 60 60 46.5497 60 30C60 13.4503 46.5497 0 30 0ZM30 1.16329C45.8922 1.16329 58.8367 14.1078 58.8367 30C58.8367 45.8922 45.8922 58.8367 30 58.8367C14.1078 58.8367 1.16329 45.8922 1.16329 30C1.16329 14.1078 14.1078 1.16329 30 1.16329ZM30.0297 15.9763C29.8847 15.9763 29.7397 16.029 29.6194 16.1493L20.9178 24.8509C20.6756 25.0931 20.6756 25.4276 20.9178 25.6681L20.9326 25.683C21.1139 25.8725 21.478 25.8922 21.7136 25.6566L21.997 25.3732H22.0003L29.4233 17.9469V43.4388C29.4233 43.7749 29.677 44.027 30.0148 44.027C30.3526 44.027 30.6031 43.7782 30.6031 43.4388V17.9618L38.3094 25.6681C38.4314 25.7901 38.5681 25.8412 38.728 25.8412C38.8878 25.8412 39.018 25.7917 39.1432 25.6681C39.3854 25.4259 39.3854 25.0914 39.1432 24.8509L30.4416 16.1493C30.3213 16.029 30.1747 15.9763 30.0297 15.9763Z"
                        fill="black"
                    />
                </svg>
            </span>

        </>

    )
}
export default ProductSlideAccordion;