import React from "react";
import styles from "./style.module.css"
const CommonModal = ({ show, handleClose, title, body, footer }) => {
    console.log(handleClose,"body---->");
    
  if (!show) return null; 

  return (
    <div className={styles.modaloverlay} onClick={handleClose}>
      <div className={styles.modalcontainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalheader}>
          <h2>{title}</h2>
          <button className={styles.closebtn} onClick={handleClose}>
            ✖
          </button>
        </div>
        <div className={styles.modalbody}><p>{body}</p></div>
        {footer && <div className={styles.modalfooter}>{footer}</div>}
      </div>
    </div>
  );
};

export default CommonModal;