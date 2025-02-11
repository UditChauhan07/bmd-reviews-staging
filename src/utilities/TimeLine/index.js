import React, { useState, useRef } from 'react'
import styles from './styles.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TimeLine = ({ data, layout }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const timelineData = [
    {
      image: 'images/Frame_1.webp',
      date: 'Gennaio 1996',
      textEnglish: 'Nasce Bruno Farmaceutici, un progetto visionario che prende vita grazie alla dedizione del Dott. Antonio Bruno e del figlio Vincenzo. Con passione e impegno, hanno gettato le basi per un’azienda che unisce tradizione e innovazione nel mondo farmaceutico.',
    },
    {
      image: 'images/Frame_1.webp',
      date: 'Luglio 1996',
      textEnglish: "Bruno Farmaceutici: un nuovo inizio per la salute in Italia Nel luglio del 1996, Bruno Farmaceutici compie un importante passo nel panorama farmaceutico, acquisendo un prestigioso portafoglio di farmaci dalla Hoechst Marion Roussel (Germania). Con questa acquisizione, l'azienda dà avvio alle sue operazioni commerciali sul territorio italiano, inaugurando una nuova era dedicata al benessere e all'innovazione nel settore della salute.",
    },
    {
      
      image: 'images/Frame_4.webp',
      date: '1997-2001',
      textEnglish: 'Bruno Farmaceutici amplia il proprio portafoglio prodotti acquisendo nuovi farmaci da prestigiose multinazionali del settore farmaceutico.',
    },
    {
      image: 'images/Frame_3.webp',
      date: '2001',
      textEnglish: " La figlia del Dottor Bruno, Mariolina, entra a far parte dell'azienda, portando con sé una nuova energia e una visione appassionata per il futuro.",
    },
    {
      image: 'images/Frame_5.webp',
      date: '2001 – 2011',
      textEnglish: 'Bruno Farmaceutici si afferma in Italia come punto di riferimento     nel trattamento dell’osteoporosi, nella gestione del dolore e nell’ambito cardiovascolare.',
    },
    {
      image: 'images/Frame_6.webp',
      date: '2012',
      textEnglish: 'Bruno Farmaceutici amplia il proprio impegno nella salute acquisendo un prestigioso portafoglio di prodotti antidiabetici da Merck.',
    },
    {
      image: 'images/Frame_7.webp',
      date: '2012',
      textEnglish: 'Bruno Farmaceutici rivoluziona il mercato italiano con il lancio della prima bevanda liquida a base di Alendronato.',
    },
    {
      image: 'images/Frame_8.webp',
      date: '2015',
      textEnglish: 'Bruno Farmaceutici lancia in Italia il primo Flecainide a rilascio controllato.',
    },
    {
      image: 'images/Frame_9.webp',
      date: '2017',
      textEnglish: "Bruno Farmaceutici avvia le sue operazioni commerciali negli Stati Uniti d'America, fondando Bruno MD.",
    },
    {
      image: 'images/Frame_10.webp',
      date: '2019',
      textEnglish: 'Bruno Farmaceutici sviluppa la prima capsula soft-gel contenente Calcidiolo (Vitamina D)',
    },
    {
      image: 'images/Frame_11.webp',
      date: '2021',
      textEnglish: 'Bruno Farmaceutici conquista una presenza commerciale globale internazionale.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    // vertical: true, 
    // verticalSwiping: true,
    initialSlide: 0,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          pauseOnHover: false,
          speed: 1500,


        },
      },
    ],
  };

  // Custom Next Button
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Custom Prev Button
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // Jump to a specific slide (based on pagination number)
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  return (
    <div className={styles.sliderContainer}>
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {timelineData.map((slide, index) => (
          <div
            key={index}
            className={`${styles.SliderImg} ${activeSlide === index ? styles.active : ''}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className={styles.sliderText}>
              <h2>{slide.date}</h2>
              <p>{slide.textEnglish}</p>
            </div>
          </div>
        ))}

      </Slider>

      <div className={styles.paginationContainer}>
        <div className={styles.paginationDiv}>
          <svg className={styles.prevButton}  onClick={prevSlide} width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1797 28.4039L23.5406 17.043L34.9015 28.4039" stroke="#56008C" stroke-width="2" />
          </svg>

          <div className={styles.pagination}>
            {timelineData.map((slide, index) => (
              <button
                key={index}
                className={activeSlide === index ? styles.activeButton : ''}
                onClick={() => goToSlide(index)}
              >
                <span className={styles.dot}></span> {slide.date}
              </button>
            ))}
          </div>
          <svg className={styles.nextButton} onClick={nextSlide} width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.9004 17.2758L23.5395 28.6367L12.1786 17.2758" stroke="#56008C" stroke-width="2" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default TimeLine