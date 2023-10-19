import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "../FourStepProcess/accordion";
import styles from './styles.module.css'

const ProductSlideAccordion = ({ content, theme,ModalHandler=null }) => {
    console.log({content});
    const [color, setColor] = React.useState("#000000");
    React.useEffect(() => {
        console.log({theme});
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
                <div className={styles.dGrid}>
                    <img src={content.src} alt={content.alt||'...'} className={styles.image} height={400} width={400}/>
                    {content.buyNow && <span className={styles.buyNow} id="productAslideTrigger" onClick={ModalHandler} style={{background: color}}>Buy Now</span>}
                </div>
                <div className={styles.wrapper}>
                    <h1 className={styles.header}>{content?.heading}</h1>
                    {content.subHeading &&<h2 className={styles.subHeader}>{content.subHeading}</h2>}
                    <h3 className={styles.subHeader} style={{ color: theme }}>{content.subtitle}</h3>
                    <p className={styles.underHeaderNote}>{content.text}</p>
                    <Accordion allowMultiple className={styles.accordion}>
                        {content.items.map((element, idx) => {
                            return (
                                <AccordionItem className={styles.accordionItem} key={idx}>
                                    <AccordionButton className={styles.accordionButton}>
                                        <p className={styles.note} style={content.lowerCase &&{textTransform: 'none'}}>{element.title}</p>
                                        <div style={{ color: theme }}>
                                            <AccordionIcon variant="arrow-default" />
                                        </div>
                                    </AccordionButton>
                                    <AccordionPanel className={styles.AccordionPanel}>
                                        <div className={styles.expanded}>{element.description}</div>
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
            </div>
            )
}
            export default ProductSlideAccordion;