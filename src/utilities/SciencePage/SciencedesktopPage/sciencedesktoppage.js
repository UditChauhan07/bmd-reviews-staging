
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './sciencedesktop.module.css'
// import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabScience from '../ScienceTab/DesktopTab/TabScience';
import ScienceSlider2 from '@/utilities/SciencePage/SliderPage/ScienceSlider2';
import SciencesSlider from '@/utilities/SciencePage/SliderPage/SciencesSlider';
import ScienceNewVideo from '@/utilities/SciencePage/ScienceVideo/ScienceNewVideo';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Modal from '../ModalSciencePage/Modal';

const Sciencedesktoppage = ({data}) => {

  const { slides2 } = data.slidesData; 
  const carouselRef = useRef(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShow = (index) => {
    setActiveSlideIndex(index);
    setIsModalOpen(true);
  };


  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
// console.log("dyus",slides2);


  // ....Modal function Start..//
  // const handleClose = () => setShow(false);
  // const handleShow = (index) => {
  //   setShow(true);
  //   setActiveSlideIndex(index);
  // };
  // modal function End.../

  

  return (

    <div className={styles.leptop}>

      {/* Custom Modal */}
      {isModalOpen && (
        <Modal show={isModalOpen} onClose={handleCloseModal}>
          <div className={styles.modalHeader}>
            <h1>{slides2[activeSlideIndex]?.title}</h1>
            <h2>{slides2[activeSlideIndex]?.subtitle}</h2>
          </div>
          <div className={styles.modalBody}>
            <p>{slides2[activeSlideIndex]?.readmore}</p>
            <p>{slides2[activeSlideIndex]?.readmore2}</p>
            <p>{slides2[activeSlideIndex]?.readmore3}</p>
            <p>{slides2[activeSlideIndex]?.readmore4}</p>
            <p>{slides2[activeSlideIndex]?.readmore5}</p>
            <p>{slides2[activeSlideIndex]?.readmore6}</p>
          </div>
        </Modal>
      )}
      {/* End of Custom Modal */}
      <div className={styles.carouselContainer}>
  
        <Carousel fade={true} interval={4000} controls={false} pause={false} className={styles.carousel} ref={carouselRef}>
          {slides2 && slides2.length > 0 && slides2.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className={styles.carouselMain}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <Carousel.Caption className={styles.imgcotent}>
                <div className={`container ${styles.heroImgContent}`}>
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.content}</p>

                  {slide.readmore && (
                    <div className={styles.ancorLink}>
                      <button onClick={() => handleShow(index)}>Read More</button>
                    </div>
                  )}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}

        </Carousel>
        <div className={styles.carouselBtnDiv}>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlLeft}`}
          onClick={handlePrev}
        >
         <i className={styles.LeftArrow}><FaAngleLeft /></i> 
        </button>
        <button
          className={`${styles.carouselControl} ${styles.carouselControlRight}`}
          onClick={handleNext}>

         <i className={styles.RightArrow}><FaAngleRight /></i> 
        </button>
        </div>
      </div>
      <div className={styles.RectangleDiv}>
        <div className={styles.Rectangle1}><img src='/images/Rectangle1.webp' /></div>
        <div className={styles.Rectangle2}><img src='/images/Rectangle2.webp' /></div>
      </div>
      {/*  */}


      {/* Science Video Page Start */}
      <ScienceNewVideo />
      {/* Science Video Page Start */}


      {/* Human Tab Section Start */}
      <TabScience  data={data}/>
      {/* Human Tab Section End */}

      {/* Science Slider 1  Start*/}
      <SciencesSlider data={data} />
      {/* Science Slider 1  End*/}


      {/* Science Slider 2 Start */}
      <ScienceSlider2 />
      {/* Science Slider 2 Start */}
    </div>

  );
}

export default Sciencedesktoppage;
