import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExitIcon } from "../SvgIcons";
import Link from "next/link";

function ScienceVideos({ data, theme }) {
  const [modal, setModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState(false);
  const [modalSubTitle, setModalSubTitle] = React.useState(false);
  const [modalDesc, setModalDesc] = React.useState(false);

  const handleBeforeChange = (oldIndex, newIndex) => {
    // Remove active class from the previous active video
    const prevActiveVideo = document.querySelector(
      ".slick-slide .video .active-video"
    );
    if (prevActiveVideo) {
      prevActiveVideo.pause();
      prevActiveVideo.classList.remove("active-video");
    }
  };

  const handleAfterChange = (currentSlide) => {
    // Add active class to the video within the current active slide
    const currentActiveVideo = document.querySelector(
      `.slick-slide[data-index="${currentSlide}"] .video`
    );
    const oldActiveVideo = document.querySelector(
      `.slick-slide[data-index="${currentSlide - 1}"] .video`
    );
    const newActiveVideo = document.querySelector(
      `.slick-slide[data-index="${currentSlide + 1}"] .video`
    );
    if (oldActiveVideo) {
      oldActiveVideo.pause();
      oldActiveVideo.classList.remove("active-video");
    }
    if (newActiveVideo) {
      newActiveVideo.pause();
      newActiveVideo.classList.remove("active-video");
    }
    if (currentActiveVideo) {
      currentActiveVideo.classList.add("active-video");
      currentActiveVideo.play();
      currentActiveVideo.loop = true;
    }
  };

  const handleClick1 = (element) => {
    setModal(true);
    setModalTitle(element.title);
    setModalSubTitle(element.subtitle);
    setModalDesc(element.popupText);
  };

  // Define custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-prev" onClick={onClick} title="previous">
      <img src="\images\ArrowRightSvg.svg" alt="previous" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-next" onClick={onClick} title="next">
      Next
      <img src="\images\arrowSvg.svg" alt="next" />
    </button>
  );

  // Settings object with custom arrows
  const settings = {
    className: "center vSlider",
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    slidesToShow: 1,
    speed: 300,
    arrows: true,
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  // test const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "20%",
  //   slidesToShow: 1,
  //   speed: 300,
  //   arrows: true,
  //   dots: true,
  //   autoplay: true,
  //   infinite: true,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };

  return (
    <section>
      <div className={styles.headingVideo}>
        <h3 className={styles.reasonsHeader}>
          I benefici grazie all’innovazione scientifica:
        </h3>
        <p className={styles.believeBluerex} style={{ color: theme }}>
          i nostri studi clinici
        </p>
      </div>

      <div className={`slider-container ${styles.slidercrot}`}>
        <Slider {...settings}>
          {data.map((videos, key) => (
            <div className={styles.imageControl} key={"science-section-" + key}>
              <video
                className="sVideo video"
                muted={"muted"}
                playsInline
                controls
                src={videos.video}
              >
                <track src="" kind="captions" />
              </video>
              <p class={styles.subtitleh} style={{ color: theme }}>
                {videos.title}
              </p>
              <p class={styles.subtitlep}> {videos.subtitle}</p>
              {/* -<p onClick={() => handleClick1(videos)} style={{ color: theme }}>
                Learn More
              </p> */}
              <p style={{ color: theme, textDecoration: "underline" }}>
                <a href={videos.blog + "?l=2"} target="_blank">Scopri di piu’</a>
              </p>
            </div>
          ))}
        </Slider>

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
                <div>
                  <h1 className={styles.title} style={{ color: theme }}>
                    {modalTitle}
                  </h1>
                  <p className={styles.expanded}> {modalSubTitle}</p>
                  <div
                    className={styles.expanded}
                    dangerouslySetInnerHTML={{ __html: modalDesc }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ScienceVideos;
