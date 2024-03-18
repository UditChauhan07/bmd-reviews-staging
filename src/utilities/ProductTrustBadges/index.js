import React from "react";
import styles from "./styles.module.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductTrustBadges = ({ images, backgroundColor = null }) => {
  const [isDesktop] = useMatchMedia("(min-width: 1025px)", true);
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={styles.customBtnContainer}>
        <div
          className={`${currentSlide === 0 ? "disable" : ""} ${
            styles.customBtn
          }`}
          style={{ transform: "rotate(180deg)" }}
          onClick={() => previous()}
        >
          <svg class="flickity-button-icon" viewBox="0 0 100 100">
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              class="arrow"
              transform="translate(100, 100) rotate(180) "
            ></path>
          </svg>
        </div>
        <div className={styles.customBtn} onClick={() => next()}>
          <svg class="flickity-button-icon" viewBox="0 0 100 100">
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              class="arrow"
              transform="translate(100, 100) rotate(180) "
            ></path>
          </svg>
        </div>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    smallMobile: {
      breakpoint: { max: 500, min: 0 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 600, min: 500 },
      items: 4,
    },
  };

  const options = {
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
  };
  if (images) {
    return (
      <section style={{ backgroundColor: backgroundColor || "#f7f7f7" }}>
        {isDesktop ? (
          <div className={styles.productBadgesContainer}>
            <div className={styles.productBadgesCenter}>
              <div className={styles.badgeGroup}>
                {images.map((element, index) => {
                  return (
                    <div
                      className={styles.productBadgeslist}
                      key={`image-${index}`}
                    >
                      <img
                        src={element.src}
                        alt={element.alt ? element.alt : "..."}
                        className={styles.imgMax}
                        width={"110px"}
                        height={"110px"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: "3rem 0" }} id="productTrustBadgeCarousel">
            <Carousel
              arrows={false}
              customButtonGroup={<ButtonGroup />}
              itemClass="m-0"
              autoPlay={true}
              infinite={true}
              containerClass="container"
              autoPlaySpeed={1500}
              keyBoardControl={true}
              responsive={responsive}
            >
              {images.map((element, i1) => {
                return (
                  <img
                    src={element.src}
                    alt={element.alt ? element.alt : "..."}
                    className={styles.imgMax}
                    key={i1}
                    width={"110px"}
                    height={"110px"}
                  />
                );
              })}
            </Carousel>
          </div>
        )}
      </section>
    );
  } else {
    return null;
  }
};

export default ProductTrustBadges;
