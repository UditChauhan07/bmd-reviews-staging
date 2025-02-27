import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "../FourStepProcess/accordion";
import styles from "./styles.module.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";

function LandingFaq({ data, theme }) {
  const [colorIndex, setColorIndex] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [isDesktop] = useMatchMedia("(min-width: 769px)", true);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex === index) {
      setColorIndex("red");
    }
  };

  return (
    <section id="faqsection" className={styles.faqHolder}>
       <p className={styles.ExtraCod} >
        <h2>FAQs</h2>
      </p>
      <div className={styles.container} >
        <div className={styles.twoCol}>
          <div className={styles.dGrid}>
            <div className={styles.FaqImage}>
              {isDesktop && <img src={data.image} width="100%" alt="FAQ" />}
              {!isDesktop && <img src={data.mImage} width="100%" alt="FAQ" />}
            </div>
          </div>
          <div className={styles.wrapper}>
            <h2 className={styles.subHeader}>Domande Frequenti (FAQs)</h2>
            <p className={styles.underHeaderNote}></p>
            <Accordion>
              {data.details &&
                data.details.map((faqItem, index) => (
                  <AccordionItem key={index} className={styles.accordionItem}>
                    <div onClick={(e) => handleAccordionClick(index)}>
                      <AccordionButton className={styles.accordionButton}>
                        <h3
                          className={styles.mainaccorhead}
                          style={{
                            color: openIndex === index ? theme : "black",
                          }}
                        >
                          {faqItem.title}
                        </h3>
                        <div style={{ color: theme }}>
                          <AccordionIcon
                            variant="arrow-default"
                            style={{ color: theme }}
                          />
                        </div>
                      </AccordionButton>
                    </div>
                    <AccordionPanel
                      className={styles.AccordionPanel}
                      isOpen={index === 0} 
                    >
                      <p
                        className={styles.parainner}
                        dangerouslySetInnerHTML={{ __html: faqItem.content }}
                      ></p>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingFaq;
