import React from "react";
import styles from "./styles.module.css";
import { ExitIcon } from "../SvgIcons";

const Cure = ({ content, theme, theme3, isLayout = false }) => {
  const [modal, setModal] = React.useState(false);

  const handleClick = () => {
    setModal(true);
  };

  return (
    <section>
      <div
        className={styles.CollagenGrid}
        style={{ backgroundColor: theme3 ? theme3 : content.color }}
      >
        <div className={styles.container}>
          <div className={styles.headingContainer}>{content.title}</div>

          <div className={styles.CollagenText}>
            <p>{content.subTitle}</p>
          </div>
          <div className={styles.CollagenButtonText}>
            <div
              className={styles.CollagenButton}
              style={{ backgroundColor: theme }}
              onClick={() => handleClick()}
            >
              <p className={styles.CollagenButtonText}>{content.buttonText}</p>
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
export default Cure;
