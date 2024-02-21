import React from "react";
import styles from "./styles.module.css";

const FeatureInfo = ({ infoBanners, theme = null }) => {
  return (
    <div className={styles.productInfoBannerContainer}>
      <div>
        <div
          className={styles.textContainer}
          style={{ color: theme ? theme : "#56008c" }}
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
