import React, { useState } from 'react'
import styles from '../tenoactive/TendoActive.module.css'



const TendoActive = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [selectedDetail, setSelectedDetail] = useState(1);
    const slides = [
        {
            className1: "yelloDotsBlink1",
            className2: "yelloDotsBlink2",
            className3: "yelloDotsBlink3",
            className4: "yelloDotsBlink4",
            className5: "yelloDotsBlink5",
            className6: "yelloDotsBlink6",
            className7: "yelloDotsBlink7",
        },
        {
            className1: "greenDotsBlink1",
            className2: "greenDotsBlink2",
            className3: "greenDotsBlink3",
            className4: "greenDotsBlink4",
            className5: "greenDotsBlink5",


        },
        {
            className1: "orangeDotsBlink1",
            className2: "orangeDotsBlink2",
            className3: "orangeDotsBlink3",
            className4: "orangeDotsBlink4",
            className5: "orangeDotsBlink5",
        },
        {
            className1: "skyDotsBlink1",
            className2: "skyDotsBlink2",
            className3: "skyDotsBlink3",
            className4: "skyDotsBlink4",
            className5: "skyDotsBlink5",
            className6: "skyDotsBlink6",

        }
    ]



    // Function to handle the click and set the active slide
    const handleClick = (index) => {
        setActiveSlide(index - 1);
        setSelectedDetail(index);
    };

    return (
        <div className={styles.tendoMain}>
            <div className={`container ${styles.brunoDecription2}`}>
                <div className={styles.bruno3000}>
                    <h1>La ricetta per migliorare te stesso.</h1>
                </div>
            </div>
            <div className={styles.formqw}>


                <div className={styles.tendoProductDiv}>
                    <div className={styles.tendoProduct}>
                        <div className={styles.tendoImg}>
                            <img src='/images/02-BMD-Tendoactive_Plus-9O3A3003-v2.webp' alt='tendo-Plus' />
                        </div>
                        <div className={styles.tendoContent}>
                            <h1>Tendoactive Plus </h1>
                            <h2>Bruno MD</h2>
                            <p>Recupero integrale dei tendini e riduzione del dolore
                                .</p>
                            <div className={styles.tendoButton}>
                                <div className={styles.tendoMedcolor}>
                                </div>
                                <div>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.tendoDecriptionmain}>
                <div className={styles.tendoBox}>
                    <div className={styles.tendoDetailmain}>
                        <div
                            className={`${styles.tendoDetail} ${selectedDetail === 1 ? styles.active : styles.inactive
                                }`}
                            onClick={() => handleClick(1)}
                        >
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>Riduzione del dolore</h1>
                                <p> Significativa riduzione del dolore sia a riposo che durante attività fisica. Per una gestione sicura ed efficace delle tendinopatie e della fascite plantare. </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tendoDetailmain}>
                        <div
                            className={`${styles.tendoDetail} ${selectedDetail === 2 ? styles.active : styles.inactive
                                }`}
                            onClick={() => handleClick(2)}
                        >
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>Migliora la condizione del tendine</h1>
                                <p> Aumenta la proliferazione dei tenociti (cellule tendinee) e la vitalità stimolando la sintesi endogena del collagene di tipo I.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tendoDetailmain2}>
                        <div
                            className={`${styles.tendoDetail} ${selectedDetail === 3 ? styles.active : styles.inactive
                                }`}
                            onClick={() => handleClick(3)}
                        >
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>  Efficace per molte condizioni</h1>
                                <p>Migliora la salute dei tendini: dellacuffia dei rotatori, dell’epicondilite laterale e mediale, dell’ estensore del pollice,della  fascite plantare, della rotula, del tendine d&apos;Achille.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tendoDetailmain2}>
                        <div
                            className={`${styles.tendoDetail} ${selectedDetail === 4 ? styles.active : styles.inactive
                                }`}
                            onClick={() => handleClick(4)}
                        >
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>Migliora la capacità funzionale</h1>
                                <p> In combinazione con l&apos;allenamento o lo stretching passivo, fornisce un significativo sollievo dal dolore e una migliore capacità funzionale, in particolare per la fase iniziale della tendinopatia del tendine d&apos;Achille..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.humanMain}>
                    <div className={styles.blinkDiv}>
                        {/* Render the blinking dots dynamically */}
                        {Object.keys(slides[activeSlide]).map((key, index) => (
                            <span key={index} className={styles[slides[activeSlide][key]]}></span>
                        ))}
                    </div>
                    <div className={styles.humanBody}>
                        <img src='\images\humantab.webp' alt='humai-Gif' />

                    </div>
                </div>
                <div className={styles.tendoBox2}>
                    <div className={styles.tendoDetailmain}>
                        <div
                            className={`${styles.tendoDetail} ${selectedDetail === 3 ? styles.active : styles.inactive
                                }`}
                            onClick={() => handleClick(3)}
                        >
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>Efficace per molte condizioni</h1>
                                <p>L&apos;uso regolare di formoline L112 provoca una perdita di peso in tutto il corpo, che si nota spesso in aree problematiche come l&apos;addome, la vita e le cosce se combinata con una dieta moderata.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tendoDetailmain}>
                        <div
                            className={`${styles.tendoDetail} ${selectedDetail === 4 ? styles.active : styles.inactive
                                }`}
                            onClick={() => handleClick(4)}
                        >
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>Migliora la capacità funzionale</h1>
                                <p>formoline è un sicuro dispositivo medico di Classe 3 certificato in tutta l&apos;UE ai sensi della direttiva 93/42/CEE ed è disponibile da banco per un&apos;efficace gestione del peso del tuo corpo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TendoActive
