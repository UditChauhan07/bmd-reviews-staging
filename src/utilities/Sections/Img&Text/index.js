
import React, { useState, useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import styles from '../../../utilities/Sections/Img&Text/about.module.css';
// import Modal from '@/utilities/SciencePage/ModalSciencePage/Modal';
const ImgText = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
         pauseOnHover: true,
    };

    const slidesData = [
        {
            title: "Chi siamo",
            text: "Siamo un’azienda italiana a conduzione familiare, guidata da una profonda passione per la qualità e l’autenticità degli ingredienti. Ispirati dallo stile di vita mediterraneo, crediamo nel suo straordinario potere di nutrire mente e corpo, regalando benessere e vitalità.Il Mediterraneo, culla di due delle più celebri zone blu al mondo, è sinonimo di vita lunga e vibrante, dove la longevità e la gioia di vivere sono parte integrante della quotidianità. La nostra missione è portare questa filosofia direttamente sulla tua tavola, combinando tradizione, salute e un gusto inconfondibile per un’esperienza unica.",
            image1: "/images/BMD-GG-i1-Donna-Fugata-P1106965+_v2.webp",
            image2: "/images/BMD-01-Sicily-Donna-Fugata-P1107190+_v2.webp",
            quote: "La bellezza è nel mondo che ci circonda e nell'arte che lo rappresenta. E l'arte più grande è quella di essere se stessi, nel nutrire il corpo con i frutti più autentici della terra.",
            quote2:"Vivere in armonia con la natura, condividere una tavola con gli amici e nutrire sia il corpo che l'anima: questa è l'essenza della buona vita",
            quoteAuthor: "Italo Calvino",
            quoteAuthor2: "Italo Calvino",

        },
        {
            title: "La Nostra Missione",
            text: "Alla Bruno MD, la nostra missione è permettere a ogni persona di vivere una vita sana, vibrante e piena di energia. Per farlo, uniamo ingredienti naturali di alta qualità con l'innovazione scientifica, senza mai scendere a compromessi. Con un impegno costante verso l'eccellenza, sviluppiamo prodotti che pongono al centro la purezza, l'efficacia e la sostenibilità. Il nostro approccio integrato fonde la saggezza della natura con i progressi della scienza per favorire il benessere olistico. In Bruno MD, siamo convinti che la salute sia la base di una vita appagante e siamo qui per accompagnarti verso il massimo del tuo potenziale in ogni fase del tuo percorso",
            image1: "/images/BMD_i1-GG-CDG-69-v2.webp",
            image2: "/images/BMD_i1-GG-CDG-73-v2.webp",
            quote: "Che il cibo sia la tua medicina e la medicina sia il tuo cibo",
            quote2:"La Natura e’ l’arte di Dio",
            quoteAuthor: "Ippocrate",
            quoteAuthor2: "Leonardo da Vinci",

        },
        {
            title: "La Nostra Natura Vitale",
            text: "In Bruno MD, crediamo che il vero benessere derivi dall'abbracciare l'autenticità della nostra terra. Le coltivazioni che prosperano nel ricco suolo e nel clima unico dell'Italia sono il cuore pulsante dei nostri prodotti. Selezioniamo con cura ingredienti che da generazioni sono apprezzati per le loro straordinarie proprietà curative, in grado di nutrire corpo e mente. Ogni nostra soluzione nasce dal rispetto per la natura e dall’impegno verso la qualità, la sostenibilità e l'innovazione, per offrire un benessere che onora la tradizione e supporta le esigenze della salute moderna.",
            image1: "/images/Bruno-MD-Hands-V3.webp",
            image2: "/images/Bruno-MD-Hands-V3(02).webp",
            quote: "La natura non fa nulla di inutile",
            quoteAuthor: "Aristotele",
            quote2: "Bisogna fare come la natura, che non fa salti ma procede piano piano, costruendo solidamente.",
            quoteAuthor2: "Luigi Pirandello"
        },
        {
            title: "La nostra filosofia",
            text: "La nostra filosofia nasce dall’idea semplice e potente di condividere momenti intorno a una tavola familiare, dove ingredienti freschi non solo nutrono il corpo, ma arricchiscono anche lo spirito. Il Dr. Bruno è convinto che la scienza abbia il potere di liberare il potenziale della natura, offrendo ingredienti naturali in forme innovative per migliorare il tuo benessere. Questo impegno a coniugare tradizione e scienza moderna guida ogni nostra creazione, assicurandoti di apparire e sentirti al meglio. Al centro del nostro lavoro ci sono l'autenticità, la qualità e il potere trasformativo della natura.",
            image1: "/images/BMD-GG_BMDROM4-54+_v2.webp",
            image2: "/images/Our Philosophy1.png",

            quote: "La tavola non è solo il luogo dove si consuma il cibo, ma dove si celebra la vita, si condividono storie e si alimenta l’anima.",
            quoteAuthor: "Pellegrino Artusi",
           
        },
        {
            title: "Perché scegliere Bruno MD",
            text: "Scegli Bruno MD per i tuoi prodotti di salute e abbraccia lo stile di vita mediterraneo. Vivi come un italiano, adottando la filosofia più sana al mondo! Nutri corpo e spirito ad ogni pasto. Unisciti a noi, siediti alla nostra tavola e scopri il piacere di una vita sana. Riscopri il benessere, l'energia e la gioia di vivere.",
            image1: "/images/BMD-i3-FilippoFior-FIO_0165+_v3.webp",
            image2: "/images/BMD-i3-FilippoFior-FIO_0165+_v3(02).webp",
            quote: "La natura è il miglior maestro di tutte le cose.",
            quoteAuthor: " Leonardo da Vinci",
            quote2:"La scienza ci permette di sfruttare gli ingredienti della natura in modi nuovi e innovativi, combinando la tecnologia moderna con composti naturali per offrire benefici che aiutano le persone ad apparire e sentirsi al meglio",
            quoteAuthor2:"Philippe Charlier, Direttore del Dipartimento Medico del Musée du quai Branly."

        }
    ];




    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section id='aboutPage' className={styles.sliderContainer}>
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
                                    &#34;{slide.quote}&#34; <br />
                                    <b>{slide.quoteAuthor}</b>
                                    {/* Conditional rendering for quote2 and quoteAuthor2 */}
                                    {slide.quote2 && slide.quoteAuthor2 && (
                                        <>
                                            <br />
                                            &#34;{slide.quote2}&#34; <br />
                                            <b>{slide.quoteAuthor2}</b>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className={styles.part3}>
                            <img src={slide.image2} alt={`Slide ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={styles.btnWrap}>
                <div className={styles.custom_btnDiv}>
                    <button
                        onClick={prevSlide}
                        className={`${styles.sliderButton} ${styles.prev_button}`}
                    >
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1641 26L45.4974 26" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.68932 26.2144L13.9538 31.773C14.487 32.093 15.1654 31.7089 15.1654 31.087L15.1654 20.913C15.1654 20.2911 14.487 19.907 13.9538 20.227L4.68932 25.7856C4.52749 25.8827 4.52749 26.1173 4.68932 26.2144Z" fill="#7F7F7F" />
                        </svg>
                    </button>
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
  );
};

export default ImgText;
