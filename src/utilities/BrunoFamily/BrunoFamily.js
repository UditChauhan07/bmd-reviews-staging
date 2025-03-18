import React, { useState, useRef } from 'react'
import styles from "../../utilities/BrunoFamily/BrunoFamily.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrunoFamily = () => {
  const sliderRef = useRef(null); // Reference for the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 2500,
  };

  // Array of slide data objects
  const slideData = [
    {
      id: 1,
      imgSrc: "/images/bruno_family01.webp",
      title: "La Famiglia Bruno",
      description: "Innovazione e Passione da Oltre 50 AnniPiù di mezzo secolo fa, il Dott. Antonio Bruno ha trasformato la sua passione per la chimica in un’arte al servizio dell’innovazione, con un unico obiettivo: migliorare la vita delle persone in ogni angolo del mondo. Oggi, Bruno MD rappresenta l’incontro perfetto tra arte e scienza. “Sin da giovane ho coltivato un sogno: contribuire al miglioramento della salute umana,” racconta il Dott. Bruno. “Oggi quel sogno è diventato una carriera e, ancora di più, una missione: offrire soluzioni innovative per il benessere, raggiungendo il maggior numero di persone possibile.”Un’eredità di dedizione e innovazione che continua a ispirare e a fare la differenza.",
    },
    {
      id: 2,
      imgSrc: "/images/bruno_family02.webp",
      title: "I primi anni di vita del Dr. Bruno",
      description: "Il Dr. Bruno venne al mondo nel 1938, in un affascinante borgo dell'Italia meridionale, situato nel cuore della provincia di Avellino. Questa terra, ricca di storia e tradizioni, si distingue per il suo suolo fertile e generoso, oltre che per il profondo legame della sua gente con la natura circostante: le maestose montagne, le vaste pianure e i limpidi corsi d'acqua che la attraversano.",
    },
    {
      id: 3,
      imgSrc: "/images/bruno_family03.webp",
      title: "Il Suolo Italiano: Un Legame Autentico con la Terra",
      description: "La nostra provincia è un cuore pulsante di tradizioni agricole, dove il legame tra l’uomo e Madre Terra è profondo e sincero. Qui, il Dott. Bruno ha coltivato fin da giovane un amore autentico per la terra, imparando a valorizzare i suoi frutti. Questa connessione unica ha ispirato la sua missione: creare prodotti di altissima qualità utilizzando solo i migliori ingredienti, rispettando la natura e le sue preziose risorse",
    },
    {
      id: 4,
      imgSrc: "/images/bruno_family04.webp",
      title: "Carriera Precedente",
      description: "Il Dr. Bruno ha conseguito la laurea con lode in Chimica presso l'Università degli Studi di Napoli. Animato dalla passione per il miglioramento della qualità della vita, ha iniziato il suo percorso professionale come rappresentante di vendita presso Lepetit S.p.A, un’azienda farmaceutica milanese di fama internazionale, rinomata per la sua eccellenza e i numerosi riconoscimenti nel settore.",
    },
    {
      id: 5,
      imgSrc: "/images/bruno_family05.webp",
      title: "Bruno Farmaceutici: Una Storia di Famiglia dal 1996",
      description: "Fondato nel luglio del 1996, Bruno Farmaceutici si è subito distinto per la sua dedizione alla salute e al benessere. In breve tempo, l'azienda è diventata una realtà familiare a tutti gli effetti, grazie all'ingresso del figlio del dottor Bruno, Vincenzo, e della figlia Mariolina. Da allora, la passione di famiglia guida ogni passo verso l'eccellenza farmaceutica.",
    },
    {
      id: 6,
      imgSrc: "/images/bruno_family06.webp",
      title: "Bruno Farmaceutici: Innovazione e Salute al Servizio della Vita",
      description: "Dalle terapie oculistiche più avanzate ai trattamenti cardiaci salvavita, fino agli integratori su prescrizione firmati Bruno MD, siamo impegnati a offrire un portfolio di prodotti che non smette mai di stupire. E questo è solo l'inizio: centinaia di nuove soluzioni stanno per arrivare, pronte a migliorare la qualità della vita di milioni di persone.La nostra missione è dare alle persone gli strumenti per prendere in mano la propria storia di salute. Queste storie sono, per noi, tra le più straordinarie che la natura e la scienza possano scrivere insieme. E siamo certi che la pensiate allo stesso modo, ha dichiarato il Dr. Bruno.Scopri come Bruno Farmaceutici può accompagnarti nel tuo viaggio verso il benessere.",
    },

  ];

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="slider-container" id='BrunoFaimlly' style={{ position: 'relative' }} >
      <Slider ref={sliderRef} {...settings} >
        {slideData.map((slide) => (
          <div key={slide.id} className={styles.family_main}>
            <div className={styles.bruno_family}>
              <div className={styles.bruno_img1}>
                <img src={slide.imgSrc} alt="" />
              </div>
              <div className={styles.Bruno_content}>
                <div className={styles.Bruno_heading}>
                  <h2>{slide.title}</h2>
                </div>
                <div className={styles.p_decription}>
                  <p>{slide.description}</p>
                </div>
              </div>

            </div>

          </div>
        ))}
      </Slider>

      {/* Custom Button Wrapper Div */}
      <div className={styles.btnWrap}>
        <div className={styles.custom_btnDiv}>
          {/* Custom Previous Button */}
          <button
            onClick={prevSlide}
            className={`${styles.sliderButton} ${styles.prev_button}`}
          >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1641 26L45.4974 26" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.68932 26.2144L13.9538 31.773C14.487 32.093 15.1654 31.7089 15.1654 31.087L15.1654 20.913C15.1654 20.2911 14.487 19.907 13.9538 20.227L4.68932 25.7856C4.52749 25.8827 4.52749 26.1173 4.68932 26.2144Z" fill="#7F7F7F" />
            </svg>

          </button>

          {/* Custom Next Button */}
          <button
            onClick={nextSlide}
            className={`${styles.sliderButton} ${styles.next_button}`}
          >
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.832 26.832L7.50234 27.3025" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48.3027 26.4545L38.9532 21.0402C38.4151 20.7285 37.7427 21.1231 37.7524 21.7449L37.9102 31.9177C37.9198 32.5395 38.6041 32.913 39.1323 32.5849L48.3094 26.8832C48.4697 26.7836 48.4661 26.5491 48.3027 26.4545Z" fill="#7F7F7F" />
            </svg>

          </button>
        </div>
      </div>


    </div>
  )
}

export default BrunoFamily
