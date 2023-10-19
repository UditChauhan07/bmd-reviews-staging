import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import VideoPlayer from "../Video";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAmp } from "next/amp";

const Testimonial = ({ content }) => {
  const isAmp = useAmp();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    smallMobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 500 },
      items: 1,
    },
  };
  const [isDesktop] = useMatchMedia("(min-width: 1400px)", true);
  const [isMobile] = useMatchMedia("(min-width: 768px)", true);
  const {
    slides,
    theme,
    colorCodeOnPlayButton,
    title,
    subTitle,
    videoHeight,
    videoWidth,
    invertDesign,
  } = content || null;
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {}, [currentSlide]);

  const previous = () => {
    let i = currentSlide;
    document.getElementById(
      "transformContainer"
    ).style.transform = `translateX(-${(i - 1) * 400}px)`;
    setCurrentSlide(i - 1);
    if (i - 1 < 0) {
      setCurrentSlide(0);
      if (isDesktop) {
        document.getElementById(
          "transformContainer"
        ).style.transform = `translateX(200px)`;
      } else {
        document.getElementById(
          "transformContainer"
        ).style.transform = `translateX(0px)`;
      }
    }
  };

  const Next = () => {
    let i = currentSlide;
    console.warn({
      gggg: (i + 1) * 400,
      status: i + 1 <= slides.length,
      length: slides.length,
      i,
    });
    document.getElementById(
      "transformContainer"
    ).style.transform = `translateX(-${(i + 1) * 400}px)`;
    setCurrentSlide(i + 1);
    if (i + 1 >= slides.length) {
      document.getElementById(
        "transformContainer"
      ).style.transform = `translateX(-${slides.length * 400}px)`;
      setCurrentSlide(slides.length);
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={styles.ButtonGroup}>
        <p onClick={() => previous()}>previous</p>
        <p onClick={() => next()}>Next</p>
      </div>
    );
  };

  return (
    <section className={styles.container}>
      {title && (
        <div className={styles.headingContainer}>
          {title && <h1>{title}</h1>}
          {subTitle && <p>{subTitle}</p>}
        </div>
      )}
      {isMobile && (
        <div
          className={styles.testimonialSliderTrack}
          style={
            isDesktop
              ? { transform: "translateX(200px)" }
              : { transform: "translateX(0px)" }
          }
          id="transformContainer"
        >
          {slides.map((e, i) => {
            return (
              <div className={styles.testimonialSlide} key={i}>
                {i == currentSlide && (
                  <div className={styles.slideInfo}>
                    <div className={styles.slideInfoWidth}>
                      <div
                        className={styles.slideInfoQuote}
                        style={invertDesign ? { color: theme } : {}}
                      >
                        <p>{e.title}</p>
                      </div>
                      <div
                        className={styles.slideInfoAuthor}
                        style={!invertDesign ? { color: theme } : {}}
                      >
                        {e.author}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className={styles.slideVideo}
                  style={i == currentSlide ? { transform: "scale(1)" } : {}}
                >
                  {e.video && (
                    <>
                      {isAmp ? (
                        <amp-video
                          src={e.video.src}
                          width="640"
                          height="360"
                        ></amp-video>
                      ) : (
                        <VideoPlayer
                          video={e.video}
                          id={i}
                          theme={colorCodeOnPlayButton && theme}
                          height={"100%"}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!isMobile && (
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          itemClass="m-0"
          autoPlay={false}
          infinite={true}
          containerClass="container"
          autoPlaySpeed={5000}
          keyBoardControl={true}
          responsive={responsive}
        >
          {slides.map((e, i) => {
            return (
              <div className={styles.testimonialSlide} key={i}>
                <div className={styles.slideInfo}>
                  <div className={styles.slideInfoWidth}>
                    <div
                      className={styles.slideInfoQuote}
                      style={
                        invertDesign
                          ? { color: theme, width: "90%", margin: "auto" }
                          : {}
                      }
                    >
                      <p>{e.title}</p>
                    </div>
                    <div
                      className={styles.slideInfoAuthor}
                      style={
                        !invertDesign
                          ? { color: theme, width: "90%", margin: "10px auto" }
                          : {}
                      }
                    >
                      {e.author}
                    </div>
                  </div>
                </div>
                <div
                  className={styles.slideVideo}
                  style={i == currentSlide ? { transform: "scale(1)" } : {}}
                >
                  {e.video && (
                    <VideoPlayer
                      video={e.video}
                      id={`mob-${i}`}
                      theme={colorCodeOnPlayButton && theme}
                      height={"100%"}
                      position={true}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
      {isMobile && (
        <div className={styles.dFlex}>
          <p onClick={previous}>previous</p>
          <p onClick={Next}>Next</p>
        </div>
      )}
    </section>
  );
};
export default Testimonial;
