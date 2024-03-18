import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import PurchaseBox from "../PurchaseBox";

const StickyPriceBox = ({ variantId, priceDescription }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stickyModaltoggle, setStickyModal] = useState(false);
  const [getActive, setActive] = useState(2);
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [oneTimePrice, setOneTimePrice] = useState((priceDescription?.price - (priceDescription?.price * ((priceDescription?.priceBox?.oneTime?.discountPer||0) / 100))).toFixed(2))
  const [subscribePrice, setSubscribePrice] = useState(
    (
      priceDescription?.price -
      priceDescription?.price * (priceDescription?.priceBox.discount / 100)
    ).toFixed(2)
  );
  useEffect(() => {
    stickyButtonHandler();
    let documentHeight = document.getElementsByTagName("main");
    if (documentHeight.length) {
      documentHeight = documentHeight[0].offsetHeight * 0.1;
    } else {
      documentHeight = 300;
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [getActive]);
  const stickyButtonHandler = () => {
    if (getActive == 2) {
      setTitle(
        "Subscribe & Save" || priceDescription?.priceBox?.subscribe?.title
      );
      setPrice(subscribePrice.split("."));
    } else {
      setTitle(
        "One-time Purchase" || priceDescription?.priceBox?.oneTime?.title
      );
      setPrice(oneTimePrice.split("."));
    }
  };
  const StickyModal = () => {
    return (
      <div className={styles.stickyModalConatiner}>
        <div className={styles.priceBoxContainer}>
          <PurchaseBox
            data={priceDescription}
            variantId={variantId}
            ActiveBox={getActive}
            IsActiveStatusHandler={setActive}
          />
        </div>
        <span className={styles.stickyModalConatinerArrow}>
          <svg
            className={styles.svgWrapper}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="27"
            viewBox="0 0 15 27"
            fill="white"
          >
            <path
              d="M14.2399 12.776C14.6536 13.17 14.6536 13.83 14.2399 14.224L1.68975 26.1797C1.05312 26.7862 -1.28227e-06 26.3349 -1.24384e-06 25.4557L-1.98639e-07 1.54433C-1.60205e-07 0.665073 1.05312 0.213816 1.68975 0.820283L14.2399 12.776Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    );
  };

  return (
    <>
      {isVisible && (
        <>
          <div
            className={styles.btnStickyContainer}
            onClick={() => setStickyModal(!stickyModaltoggle)}
          >
            <p className={styles.btnStickyTitle}>{title}</p>
            <span className={styles.border}></span>
            <p className={styles.titlePrice}>
              $<span className={styles.priceFirstIndex}>{price[0]}</span>
              .{price[1]}
            </p>
          </div>
          {stickyModaltoggle && <StickyModal />}
        </>
      )}
    </>
  );
};
export default StickyPriceBox;
