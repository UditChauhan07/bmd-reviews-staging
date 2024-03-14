import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "../FourStepProcess/accordion";
import styles from "./styles.module.css";

function LandingFaq({ data, theme }) {
  const [colorIndex, setColorIndex] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex === index) {
      setColorIndex("red");
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.twoCol}>
          <div className={styles.dGrid}>
            <div className={styles.FaqImage}>
              <img src="/images/landing/FAQimage.webp" alt="FAQ" />
            </div>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.subHeader}>Domande Frequenti</h3>
            <p className={styles.underHeaderNote}></p>
            <Accordion>
              {data.details &&
                data.details.map((faqItem, index) => (
                  <AccordionItem key={index} className={styles.accordionItem}>
                    <div onClick={(e) => handleAccordionClick(index)}>
                      <AccordionButton className={styles.accordionButton}>
                        <h2
                          className={styles.mainaccorhead}
                          style={{
                            color: openIndex === index ? theme : "inherit",
                          }}
                        >
                          {faqItem.title}
                        </h2>
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
                      isOpen={index === 0} // Automatically open the first accordion item
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
