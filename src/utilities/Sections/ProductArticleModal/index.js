import styles from "./styles.module.css";
import React, { memo, useEffect, useState, useRef } from "react";
import { useMatchMedia } from "../Hooks/useMatchMedia";
import Image from "next/image";
import PurchaseBox from "@/utilities/PurchaseBox";
const ProductArticleModal = ({
  content,
  ModalHandler,
  priceBox = null,
  variantId = null,
  onReviewClick,
}) => {
  const [isDesktopImage] = useMatchMedia("(min-width: 1024px)", true);
  const [reviewCount, setReviewCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      var varId = priceBox.EXTERNALID;
      varId = varId.split("/").pop();
      const url = `https://api-cdn.yotpo.com/v1/widget/jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ/products/${varId}/reviews.json`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result) {
          setReviewCount(result.response.bottomline.total_review);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });
  if (priceBox) {
    return (
      <section className={styles.container}>
        <div className={styles.dFlexv2}>
          {isDesktopImage ? (
            <img
              src={content.bannerDesk?.src}
              alt={content.bannerDesk?.alt}
              className={styles.col1}
              maxWidth={"1000px"}
              maxHeight={"600px"}
              fetchpriority="high"
            />
          ) : (
            <img
              src={content.bannerMob?.src}
              alt={content.bannerMob?.alt}
              className={styles.col1}
              width={430}
              height={"auto"}
              fetchpriority="high"
            />
          )}

          <div className={styles.col2v2}>
            <div className={styles.Review} onClick={onReviewClick}>
              <div className={styles.ratings}>
                <span>5</span>★★★★★
              </div>
              <div>
                <div className={styles.ratingsP}>
                  Basato su {reviewCount} recensioni
                </div>
              </div>
            </div>
            <PurchaseBox data={priceBox} variantId={variantId} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.container}>
        {isDesktopImage && (
          <div className={styles.dFlex}>
            <Image
              src={content.bannerDesk?.src}
              alt={content.bannerDesk?.alt}
              className={styles.col1}
              width={1000}
              height={600}
            />
            <div className={styles.col2}>
              <div
                className={styles.textContainer}
                style={{ "background-color": content.colorTheme }}
              >
                <div className={styles.wBorder}>
                  <p>
                    {false && <span className={styles.upperCase}></span>}
                    {content.title}
                  </p>
                </div>
                <div
                  className={styles.button}
                  style={{ color: content.colorTheme }}
                  onClick={ModalHandler}
                >
                  <h1 className={styles.buttonText}>{content.buttonTitle}</h1>
                  {content.buttonDescription && (
                    <p className={styles.ft10}>{content.buttonDescription}</p>
                  )}
                </div>
                <div
                  className={styles.offer}
                  style={{ color: content.offerTextColor }}
                >
                  <p className={styles.ft20}>{content.offerTagLine}</p>
                  {content.offerTagDescription && (
                    <p className={styles.ft10}>{content.offerTagDescription}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {!isDesktopImage && (
          <Image
            src={content.bannerMob?.src || content.bannerDesk?.src}
            alt={content.bannerMob?.alt || content.bannerDesk?.alt}
            className={styles.mobIMG}
            onClick={ModalHandler}
            width={800}
            height={534}
          />
        )}
      </section>
    );
  }
};
export default ProductArticleModal;
