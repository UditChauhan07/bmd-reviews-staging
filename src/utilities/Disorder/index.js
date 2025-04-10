import React from "react";
import styles from "./styles.module.css";
import { ExitIcon } from "../SvgIcons";

const Disorder = ({ content, theme, theme3, isLayout = false }) => {
  const [modal, setModal] = React.useState(false);

  const handleClick = () => {
    setModal(true);
  };

  if (modal) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  return (
    <section id="causesection" className={styles.cause_section}>
       <p className={styles.ExtraCod} >
          <span>Cause</span>
        </p>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div
            className={styles.CollogenContent}
            style={{ backgroundColor: theme3 ? theme3 : content.color }}
          >
            <div className={styles.CollogenContInner}>
              <h2>{content.title}</h2>
              <p>{content.description}</p>
              <div
                onClick={() => handleClick()}
                style={{ backgroundColor: theme }}
                className={styles.CollaButton}
              >
                <button>{content.buttonText}</button>
              </div>
            </div>
          </div>

          <div className={styles.CollagenImage}>
            <div className={styles.ImagCollo}>
              <img
                src={content.image}
                alt="Uomo che fa stretching"
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>

      {modal === true && (
        <div className={styles.modal}>
          <div className={styles.modalOverlayV2}></div>
          <div className={styles.modalContainer1}>
            <button
              onClick={() => setModal(false)}
              className={styles.exitButton1}
              style={{ border: `1px solid ${theme}` }}
            >
              <ExitIcon />
            </button>
            <div className={styles.modalCardContainerV2}>
              <div className={styles.OverflowDiv}>
                {/* <div className={styles.modalImage}>
                  <img
                    alt={content.popupTitle}
                    className={styles.modalImgHolder}
                    src={content.image}
                    width={200}
                    height={200}
                  />
                </div> */}
                <h1 className={styles.title} style={{ color: theme }}>
                  {content.popupTitle}
                </h1>
                <div
                  className={styles.expanded}
                  dangerouslySetInnerHTML={{ __html: content.popupText }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Disorder;
