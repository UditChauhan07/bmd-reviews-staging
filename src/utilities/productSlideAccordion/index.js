import React from "react";
import {
    Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,
} from "../FourStepProcess/accordion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './styles.module.css'

const ProductSlideAccordion = ({ content, theme, ModalHandler = null }) => {
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
        <div className={styles.container} id="benefits">
            <div className={styles.twoCol}>
                {/* <Carousel>
                <div className={styles.dGrid}>
                    <img src={content.src} alt={content.alt || '...'} className={styles.image} max-height={400} max-width={400} />
                    {content.buyNow && <span className={styles.buyNow} id="productAslideTrigger" onClick={ModalHandler} style={{ background: color }}>Buy Now</span>}
                </div>
                </Carousel> */}


                <Carousel infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    showArrows
                    showIndicators={false}
                    showStatus={false}>
                    {content.src.map((imageSrc, index) => (
                        <div className={styles.dGrid} key={index}>
                            <img
                                src={imageSrc}
                                alt={content.alt || `Slide ${index + 1}`}
                                className={styles.image}
                                // style={{ maxHeight: 400, maxWidth: 400 }}
                            />
                            {content.buyNow && (
                                <span
                                    className={styles.buyNow}
                                    id="productAslideTrigger"
                                    onClick={ModalHandler}
                                    style={{ background: color }}
                                >
                                    Buy Now
                                </span>
                            )}
                        </div>
                    ))}
                </Carousel>

                <div className={styles.wrapper}>
                    <p className={styles.header}>{content?.heading}</p>
                    {content.subHeading && <p className={styles.subHeader}>{content.subHeading}</p>}
                    <p className={styles.subHeader} style={{ color: theme }}>{content.subtitle}</p>
                    <p className={styles.underHeaderNote}>{content.text}</p>
                     {/* Replace Accordion with a simple list */}
                    <ul className={styles.list}>
                        {content.items.map((element, idx) => (
                            <li key={idx} className={styles.listItem}>
                                <p className={styles.title} style={content.lowerCase}>
                                    {element.title}
                                </p>
                                <p className={styles.description}>
                                    {element.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductSlideAccordion;