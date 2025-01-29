import React, { useState, useEffect, useRef } from 'react'
import Slider from "react-slick";
import styles from '../../utilities/OurStory/OurStory.module.css'
// import Modal from '@/utilities/SciencePage/ModalSciencePage/Modal';
const OurStory = () => {
    const sliderRef = useRef(null);

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        
    };

    const slidesData = [
        {
            title: "Il Mercato",
            text: "Bruno MD crea soluzioni innovative per migliorare la qualità della vita, andando oltre i tradizionali prodotti farmaceutici. Con una passione per lo sviluppo di integratori naturali, l'azienda è impegnata a promuovere la salute e il benessere in modo olistico. Unendo metodi tradizionali e approcci alternativi, Bruno MD offre soluzioni efficaci che supportano il benessere generale. Il suo approccio innovativo, che unisce scienza e natura, riflette l'impegno costante nel miglioramento della vita quotidiana, distinguendo Bruno MD nel panorama della salute.",
            image1: "images/Slide-01 574x626.webp",
            videoSrc: "/images/01_RED_A005.mp4",
            quote: "Offriamo un'opportunità unica per sviluppare integratori alimentari di alta qualità, realizzati con ingredienti provenienti direttamente dall'Italia.",
            quoteAuthor: "Dott. Vincenzo Bruno"
        },
        {
            title: "Le fonti",
            text: "Bruno MD si impegna a selezionare le migliori materie prime, provenienti esclusivamente dal suolo italiano. Per quegli ingredienti che non possono essere coltivati localmente, il marchio si affida a piccole aziende agricole familiari provenienti da tutto il mondo, garantendo qualità e autenticità in ogni prodotto. Ogni ingrediente è scelto con cura per assicurare risultati superiori. Bruno MD promuove pratiche agricole sostenibili e supporta le comunità locali, creando una linea di prodotti che riflette l'eccellenza e un approvvigionamento etico.",
            image1: "images/Slide-02_574x626.webp",

            videoSrc: "/images/04_RED_A005.mp4",
            quote: "Scegliere le migliori fonti di ingredienti in Italia? Non è un’impresa semplice. In un paese ricco di eccellenze come il nostro, le opzioni per procurarsi arance rosse sono molteplici. Ma individuare quelle davvero migliori? Questo è un autentico atto di arte medica.",
            quoteAuthor: "Dott. Vincenzo Bruno"
        },
        {
            title: "L’ accessibilità",
            text: "L'accessibilità economica è al cuore della missione di Bruno MD. L'azienda si dedica a trasformare ingredienti naturali di alta qualità in trattamenti efficaci e convenienti per i pazienti. Grazie all'uso di materie prime selezionate con cura, Bruno MD garantisce il massimo beneficio a costi contenuti, assicurando che ogni paziente possa ricevere cure ottimali senza gravare sul proprio bilancio. L’impegno di Bruno MD verso l'accessibilità è una priorità fondamentale, rendendo le sue soluzioni sanitarie una scelta affidabile per chi cerca integratori medici di qualità a prezzi giusti.",
            image1: "images/Slide-03_574x626.webp",
            videoSrc: "/images/03_RED_A005.mp4",
            quote: "Sviluppare ingredienti naturali in integratori medici significa per noi creare prodotti accessibili e alla portata di tutti.",
            quoteAuthor: "Dott. Vincenzo Bruno"
        },
        {
            title: "L’obiettivo",
            text: "L'Italia è sinonimo di eleganza, stile e innovazione, ma anche di ingredienti freschi e nutrienti che promuovono la longevità e il benessere. Al cuore dello stile di vita mediterraneo, celebrato per i suoi straordinari benefici per la salute, troviamo una ricca tradizione culinaria che si fonde con la scienza moderna. La nostra missione è quella di trasformare questi tesori naturali in un integratore medico innovativo, progettato per sostenere la salute generale e favorire la longevità. Con il nostro prodotto, vogliamo offrire un'autentica esperienza di benessere, ispirata a uno stile di vita sano e comprovato, che porta i benefici della tradizione italiana nelle tue mani.",
            image1: "images/Slide04_0757+574x626_.webp",
            videoSrc: "/images/02_RED_A005.mp4",
            quote: "Il nostro obiettivo è chiaro: far sapere al mondo che il Made in Italy non è solo sinonimo di moda e lifestyle, ma anche di eccellenza negli integratori alimentari",
            quoteAuthor: "Dott. Vincenzo Bruno",
        },

    ];


    return (
        <section id="aboutPage" className={styles.sliderContainer}>
            <Slider {...settings} ref={sliderRef}>
                {slidesData.map((slide, index) => (
                    <div className={styles.aboutMain} key={index}>
                        <div className={styles.part1}>
                            <img src={slide.image1} alt={`Slide ${index + 1}`} />
                        </div>
                        <div className={styles.part2}>
                            <div className={styles.Part2_Scroll}>
                                <h2>{slide.title}</h2>
                                <p>{slide.text}</p>
                            </div>
                            <div className={styles.dottedDiv}>
                                <p>
                                    &#34;{slide.quote}&#34; <br/> <b>{slide.quoteAuthor}</b>
                                </p>
                            </div>
                        </div>
                        <div className={styles.part3}>
                            <div className={styles.vidful}>
                                <video width="" height="100%" muted autoPlay={true} playsInline loop>
                                    <source src={slide.videoSrc} type="video/mp4" />
                                    <source src={slide.videoSrc} type="video/ogg" />
                                </video>
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
        </section>
    )
}

export default OurStory
