import React from "react";
import styles from "./styles.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "../FourStepProcess/accordion";
import { ExitIcon } from "../SvgIcons";

const ReasonsToBelieve = ({
  content,
  ingredients,
  theme,
  versionV2,
  readMoreLabel,
  product,
  accordanTitle = null,
}) => {
  const [modal, setModal] = React.useState(false);
  const [modal1, setModal1] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState(false);
  const [modalDesc, setModalDesc] = React.useState(false);
  const [modalImg, setModalImg] = React.useState(false);
  const [imageSource, setImageSource] = React.useState("/");
  if (!content) return null;
  const handleClick = (e) => {
    if (ingredients?.src) {
      setImageSource(ingredients.src);
      setModal(true);
    }
  };
  const handleClick1 = (element) => {
    setModal1(true);
    setModalTitle(element.note);
    setModalDesc(element.expanded);
    setModalImg(element?.image?.src);
  };

  const V1 = () => {
    return (
      <>
        <div className={styles.reasonsContainer}>
          <h3 className={styles.reasonsHeader}>
            Ingredienti e
            <p className={styles.believeBluerex} style={{ color: theme }}>
              Studi clinici
            </p>
          </h3>
          <div className={styles.clinicalStudy}>
            <h3
              className={styles.clinicalHeadlineBluerex}
              style={{ color: theme }}
            >
              {accordanTitle}
            </h3>
            <Accordion allowMultiple className={styles.accordion}>
              {content.map((element, idx) => {
                return (
                  <AccordionItem className={styles.accordionItem} key={idx}>
                    <AccordionButton className={styles.accordionButton}>
                      <p className={styles.note}>{element.note}</p>
                      <div style={{ color: theme }}>
                        <AccordionIcon variant="arrow-default" />
                      </div>
                    </AccordionButton>
                    <AccordionPanel className={styles.AccordionPanel}>
                      <div
                        className={styles.expanded}
                        dangerouslySetInnerHTML={{
                          __html: element.expanded,
                        }}
                      ></div>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div>
            {ingredients && (
              <>
                <h3
                  className={styles.supplementalHeadlineBluerex}
                  style={{ color: theme }}
                >
                  SUPPLEMENT FACTS
                </h3>
                <div
                  className={styles.logoTextContainer}
                  onClick={(e) => handleClick(e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={theme}
                    class="bi bi-zoom-in"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />{" "}
                    <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />{" "}
                    <path
                      fill-rule="evenodd"
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                    />{" "}
                  </svg>
                  &nbsp;
                  <p>{product}</p>
                </div>
              </>
            )}
          </div>
          {modal === true && (
            <div className={styles.modal}>
              <div className={styles.modalOverlay}></div>
              <div className={styles.modalContainer}>
                <button
                  onClick={() => setModal(false)}
                  className={styles.exitButton}
                >
                  <svg
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="white" fill-rule="evenodd">
                      <path fill={theme} d="M0 0h40v40H0z" />
                      <path
                        fill="#fff"
                        fill-rule="nonzero"
                        d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z"
                      />
                    </g>
                  </svg>
                </button>
                <img
                  src={imageSource}
                  alt={ingredients?.alt}
                  className={styles.ing}
                />
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  const V2 = () => {
    return (
      <>
        <div className={`${styles.reasonsContainerV2} ${styles.v2}`}>
          <h3 className={styles.reasonsHeader}>
            Per un’ azione sintomatica e strutturale:
            <p className={styles.believeBluerex} style={{ color: theme }}>
              gli ingredienti della nostra formula supportati da 5 studi clinici
            </p>
          </h3>
          {accordanTitle && (
            <p className={styles.v2ContainerSubtitle}>{accordanTitle}</p>
          )}
        </div>
        <div className={styles.v2Container}>
          {content.map((element, key) => (
            <div className={styles.cardContainer} key={key}>
              <img
                src={element?.image?.src}
                className={styles.imgHolder}
                alt={element?.image?.alt}
                width={200}
                height={"auto"}
                onClick={() => handleClick1(element)}
              />
              <div className={styles.marginText}>
                <h3 className={styles.title} style={{ color: theme }}>
                  {element.note}
                </h3>
                <p
                  className={styles.expanded}
                  dangerouslySetInnerHTML={{
                    __html:
                      element.expanded &&
                      element.expanded.slice(0, 150) + "...",
                  }}
                />
                <span
                  className={styles.readMore}
                  style={{ color: theme }}
                  onClick={() => handleClick1(element)}
                >
                  {readMoreLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
        {modal1 === true && (
          <div className={styles.modal}>
            <div className={styles.modalOverlayV2}></div>
            <div className={styles.modalContainer1}>
              <button
                onClick={() => setModal1(false)}
                className={styles.exitButton1}
                style={{ border: `1px solid ${theme}` }}
              >
                <ExitIcon />
              </button>
              <div className={styles.modalCardContainerV2}>
                <div className={styles.modalCardImage}>
                  <img
                    alt={modalTitle}
                    className={styles.modalImgHolder}
                    src={modalImg}
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <h1 className={styles.title} style={{ color: theme }}>
                    {modalTitle}
                  </h1>
                  <div
                    className={styles.expanded}
                    dangerouslySetInnerHTML={{ __html: modalDesc }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <section id="ingredients" className={styles.ingredientsHolder}>
      <div>
        {!versionV2 && <V1 />}
        {versionV2 && <V2 />}
      </div>
    </section>
  );
};
export default ReasonsToBelieve;
