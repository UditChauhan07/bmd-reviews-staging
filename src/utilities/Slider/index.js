import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";

const Slider = ({ data }) => {
  const [isDesktop] = useMatchMedia("(min-width: 520px)", true);
  const [windowWidth, setWindowWidth] = useState(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth - 50);
  }, [windowWidth]);
  const [style, setStyle] = useState({
    backgroundPosition: "0% 0%",
    position: "absolute",
    height: "500px",
    width: "500px",
    zIndex: 11,
    left: "40%",
    top: "15%",
  });

  const handleMouseMove = (image, event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    console.log({ backgroundPosition: `${x}% ${y}%` });
    setStyle({
      ...style,
      backgroundPosition: `${x}% ${y}%`,
      display: "block",
      backgroundImage: `url(${image})`,
    });
  };

  const handleMouveOut = (e) => {
    setStyle({ ...style, display: "none" });
  };
  return (
    <section
      onMouseOut={handleMouveOut}
      style={
        isDesktop ? { maxwidth: "500px" } : { maxwidth: `${windowWidth}px` }
      }
    >
      {/* <div style={style}></div> */}
      <div className={`${styles.MainCarowe} "carousel-wrapper" `}>
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showArrows
          showIndicators={false}
          showStatus={false}
        >
          {data?.length &&
            data.map((e, i) => {
              return (
                <div
                  className={styles.SliderImage12}
                  // onMouseMove={(event) => handleMouseMove(e.src, event)}
                  key={i}
                >
                  <img
                    src={e.node.src}
                    alt={e.node.altText ? e.node.altText : "..."}
                  />
                </div>
              );
            })}
        </Carousel>
      </div>
    </section>
  );
};
export default Slider;
