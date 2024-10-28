import React, { useState } from 'react';
import styles from "./SciencesSlider.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SciencesSlider = ({data}) => {
 
 const {slides}= data
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    const goToPrev = () => {
        slider.slickPrev();
    };

    const goToNext = () => {
        slider.slickNext();
    };

    let slider;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:700,

        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next), // Update current slide
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div>
            <div className={`container ${styles.brunoDecription3}`}>
                <h1> Il potere della natura che cura
                </h1>
            </div>
            <div className={`container ${styles.SliderDiv2}`}>
                <Slider ref={c => (slider = c)} {...settings}>
                    {slides.map((slide, index) => (
                        <div className={styles.slideData} key={index}>
                            <div className={styles.contentbackdiv}>
                                <div className={styles.slideContent}>
                                    <h1><b>{slide.title}</b></h1>
                                    <h2>{slide.subtitle}</h2>
                                    <div className={styles.pcontent}>
                                        {slide.content.map((text, i) => (
                                            <p key={i}>{text}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.slide2Img}>
                                <video width="" height="100%" autoPlay={true} muted playsInline loop>
                                    <source src={slide.videoSrc} type="video/mp4" />
                                    <source src={slide.videoSrc} type="video/ogg" />
                                </video>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className={styles.bothButton}>
    <div
        className={styles.LeftBtn}
        style={{
            // opacity: currentSlide === 0 ? 0.1 : 1,
            // cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            // backgroundColor: currentSlide === 0 ? 'black' : 'transparent', 
        }}
        onClick={ goToPrev}
    >
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                className={styles.svgIcon}
            >
                <path
                    d="M15.166 26L45.4994 26"
                    stroke={totalSlides === 2 || totalSlides === 3 || currentSlide === totalSlides - 1 ? "#FFFFFF" : "#7F7F7F"} 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4.69127 26.2144L13.9557 31.773C14.4889 32.093 15.1673 31.7089 15.1673 31.087L15.1673 20.913C15.1673 20.2911 14.4889 19.907 13.9557 20.227L4.69127 25.7856C4.52944 25.8827 4.52944 26.1173 4.69127 26.2144Z"
                    fill={totalSlides === 2 || totalSlides === 3 || currentSlide === totalSlides - 1 ? "#FFFFFF" : "#7F7F7F"} 
                />
            </svg>
        </div>
    </div>
    <div
        className={styles.RightBtn}
        style={{
            // opacity: currentSlide === totalSlides - 1 ? 0.1 : 1,
            // cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            // backgroundColor: currentSlide === totalSlides - 1 ? 'black' : 'transparent', 
        }}
        onClick={goToNext}
    >
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
            >
                <path
                    d="M36.834 26H6.50065"
                    stroke={totalSlides === 2 || totalSlides === 3 || currentSlide === 0 ? "#FFFFFF" : "#7F7F7F"} 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M47.3087 25.7856L38.0443 20.227C37.5111 19.907 36.8327 20.2911 36.8327 20.913V31.087C36.8327 31.7089 37.5111 32.093 38.0443 31.773L47.3087 26.2144C47.4706 26.1173 47.4706 25.8827 47.3087 25.7856Z"
                    fill={totalSlides === 2 || totalSlides === 3 || currentSlide === 0 ? "#FFFFFF" : "#7F7F7F"} 
                />
            </svg>
        </div>
    </div>
</div>





            </div>
        </div>
    );
}

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customPrevArrow}`} onClick={onClick}>
            Custom Left Button
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customNextArrow}`} onClick={onClick}>
            Custom Right Button
        </div>
    );
};

export default SciencesSlider;
