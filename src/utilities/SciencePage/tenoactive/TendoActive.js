import React, { useState } from 'react'
import styles from '../tenoactive/TendoActive.module.css'



const TendoActive = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleClick = (index) => {
        setCurrentIndex(index);
    }
    const contentData = [
        {
            image: '/images/06-BMD-Tendoactive_Plus-9O3A2989-v2 (2).webp',
            alt: 'tendo-Plus',
            title: 'Tendoactive Plus',
            subtitle: 'Bruno MD',
            description: 'Recupero integrale dei tendini e riduzione del dolore',
        },
        {
            title: 'Riduzione del dolore',
            description: 'Significativa riduzione del dolore sia a riposo che durante attività fisica. Per una gestione sicura ed efficace delle tendinopatie e della fascite plantare.',
            className1: "blueDotsBlink",



        },
        {
            title: 'Migliora la condizione del tendine',
            description: 'Aumenta la proliferazione dei tenociti (cellule tendinee) e la vitalità stimolando la sintesi endogena del collagene di tipo I.',
            className1: "blueDotsBlink",
            className2: "blueDotsBlink2",

        },
        {
            title: 'Efficace per molte condizioni',
            description: 'Migliora la salute dei tendini: della cuffia dei rotatori, dell’epicondilite laterale e mediale, dell’estensore del pollice, della fascite plantare, della rotula, del tendine d’Achille.',
            className1: "blueDotsBlink",
            className2: "blueDotsBlink2",
            className3: "blueDotsBlink3",
        },
        {
            title: 'Migliora la capacità funzionale',
            description: 'In combinazione con l’allenamento o lo stretching passivo, fornisce un significativo sollievo dal dolore e una migliore capacità funzionale, in particolare per la fase iniziale della tendinopatia del tendine d’Achille.',
            className1: "blueDotsBlink",
            className2: "blueDotsBlink2",
            className3: "blueDotsBlink3",
            className4: "blueDotsBlink4",
        }
    ];

    return (
        <div className={styles.tendoMain}>
            <div className={`container ${styles.brunoDecription2}`}>
                <div className={styles.bruno3000}>
                    <h1> La ricetta per migliorare te stesso</h1>
                </div>
            </div>
            <div className={styles.tendoProductDiv}>
                <div className={styles.tendoProduct}>
                    <div className={styles.tendoImg}>
                        <img src='/images/06-BMD-Tendoactive_Plus-9O3A2989-v2 (2).webp' alt='tendo-Plus' />
                    </div>
                    <div className={styles.tendoContent}>
                        <h1>{contentData[0].title}</h1>
                        <h2>{contentData[0].subtitle}</h2>
                        <p>{contentData[0].description}</p>
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
            <div className={styles.tendoDecriptionmain}>
                <div className={styles.tendoBox}>
                    <div className={styles.tendoDetailmain}>
                        <div className={`${styles.tendoDetail} ${currentIndex === 1 ? styles.active : styles.inactive}`}
                            onClick={() => handleClick(1)}>
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>{contentData[3].title}</h1>
                                <p>{contentData[3].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tendoDetailmain}>
                        <div className={`${styles.tendoDetail} ${currentIndex === 2 ? styles.active : styles.inactive}`}
                            onClick={() => handleClick(2)}>
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>{contentData[4].title}</h1>
                                <p>{contentData[4].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.MobtendoDetailmain2}>
                        <div className={styles.tendoBox}>
                            <div className={styles.tendoDetailmain}>
                                <div className={`${styles.tendoDetail} ${currentIndex === 3 ? styles.active : styles.inactive}`}
                                    onClick={() => handleClick(3)}>
                                    <div className={styles.rightLine}>
                                    </div>
                                    <div className={styles.tendotext}>
                                        <h1>{contentData[3].title}</h1>
                                        <p>{contentData[3].description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.tendoDetailmain}>
                                <div className={`${styles.tendoDetail} ${currentIndex === 4 ? styles.active : styles.inactive}`}
                                    onClick={() => handleClick(4)}>
                                    <div className={styles.rightLine}>
                                    </div>
                                    <div className={styles.tendotext}>
                                        <h1>{contentData[4].title}</h1>
                                        <p>{contentData[4].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.humanMain}>
                    <div className={styles.dotsDiv}>
                        <span className={styles[contentData[currentIndex].className1]}></span>
                        <span className={styles[contentData[currentIndex].className2]}></span>
                        <span className={styles[contentData[currentIndex].className3]}></span>
                        <span className={styles[contentData[currentIndex].className4]}></span>

                    </div>
                    <div className={styles.body}>
                        <img src='\images\Body-Outline.png' alt='humai-Gif' />
                    </div>

                </div>
                <div className={styles.tendoBox2}>
                    <div className={styles.tendoDetailmain}>
                        <div className={`${styles.tendoDetail} ${currentIndex === 3 ? styles.active : styles.inactive}`}
                            onClick={() => handleClick(3)}>
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>{contentData[3].title}</h1>
                                <p>{contentData[3].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tendoDetailmain}>
                        <div className={`${styles.tendoDetail} ${currentIndex === 4 ? styles.active : styles.inactive}`}
                            onClick={() => handleClick(4)}>
                            <div className={styles.rightLine}>
                            </div>
                            <div className={styles.tendotext}>
                                <h1>{contentData[4].title}</h1>
                                <p>{contentData[4].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TendoActive
