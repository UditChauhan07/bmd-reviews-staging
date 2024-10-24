import React from "react";
import styles from "./styles.module.css";

const FeatureInfo = ({ infoBanners, theme = null, isTendoReferrer }) => {
  console.log("isTendoReferrer:", isTendoReferrer);

  const textColor = isTendoReferrer ? "#0033a1" : (theme ? theme : "#56008c");

  return (
    <div className={styles.productInfoBannerContainer}>
      <div>
        <div
          className={styles.textContainer}
          style={{ color: textColor }} 
        >
          {infoBanners?.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureInfo;
