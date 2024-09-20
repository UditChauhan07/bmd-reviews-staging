import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import PurchaseBox from "@/utilities/PurchaseBox";

const PriceBoxModal = ({
  isOpen,
  content,
  ModalHandler,
  priceBox,
  variantId,
  clickedType,
  theme,
}) => {
  // temp.priceBox.isStockBack = false
  // temp.priceBox.isStockTheme = true
  // temp.priceBox.isPriceBoxTheme = true
  // temp.priceBox.oneTime.accordanTitle = false
  return (
    <section id={priceBox.priceBox.modalPriceBoxContainerID}>
      {isOpen === true && (
        <div className={styles.holder} style={{ background: theme }}>
          {isOpen && (
            <div className={styles.exitButton} onClick={ModalHandler}>
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <g fill="white" fill-rule="evenodd">
                  <path fill="none" d="M0 0h40v40H0z" />
                  <path
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                    d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z"
                  />
                </g>
              </svg>
            </div>
          )}
          <div className={styles.container}>
            <div className={styles.dFlex}>
              <div className={styles.flexBox1}>
                <div className={styles.title1Holder}>{content.title1}</div>
                <div className={styles.title2Holder}>{content.title2}</div>
                <img
                  width="300"
                  height="300"
                  src={content?.productImg?.src}
                  alt={content?.productImg?.alt || "..."}
                  className={styles.imgHolder}
                />
              </div>
              <div style={{ color: theme }} className={styles.flexBox2}>
                <PurchaseBox
                  data={priceBox}
                  variantId={variantId}
                  ActiveBox={clickedType == "Onetime" ? 1 : 0}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default PriceBoxModal;
