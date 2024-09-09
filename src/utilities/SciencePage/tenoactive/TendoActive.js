import React from 'react'
import styles from '../tenoactive/TendoActive.module.css'

const TendoActive = () => {
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
                        <img src='/images/06-BMD-Tendoactive_Plus-9O3A2989-v2 (2).webp' alt='tendo-Plus'/>
                    </div>
                    <div className={styles.tendoContent}>
                        <h1>Tendoactive Plus</h1>
                        <h2>Bruno MD</h2>
                        <p>Recupero integrale dei tendini e riduzione del dolore</p>
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
                <div className={styles.tendoDetail}>
                    <div className={styles.rightLine}>
                    </div>
                    <div className={styles.tendotext}>
                        <h1>Riduzione del dolore</h1>
                        <p>Significativa riduzione del dolore sia a riposo che durante attività fisica. Per una gestione sicura ed efficace delle tendinopatie e della fascite plantare.</p>
                    </div>
                </div>
                </div>
                <div className={styles.tendoDetailmain}>
                <div className={styles.tendoDetail}>
                    <div className={styles.rightLine}>
                    </div>
                    <div className={styles.tendotext}>
                        <h1>Migliora la condizione del tendine</h1>
                        <p>Aumenta la proliferazione dei tenociti (cellule tendinee) e la vitalità stimolando la sintesi endogena del collagene di tipo I.</p>
                    </div>
                </div>
                </div>
                <div className={styles.tendoDetailmain2}>
                <div className={styles.tendoDetail}>
                    <div className={styles.rightLine}>
                    </div>
                    <div className={styles.tendotext}>
                        <h1>Efficace per molte condizioni</h1>
                        <p>Migliora la salute dei tendini: dellacuffia dei rotatori, dell’epicondilite laterale e mediale, dell’ estensore del pollice,della fascite plantare, della rotula, del tendine d’Achille.</p>
                    </div>
                </div>
                </div>
                <div className={styles.tendoDetailmain2}>
                <div className={styles.tendoDetail}>
                    <div className={styles.rightLine}>
                    </div>
                    <div className={styles.tendotext}>
                        <h1>Migliora la capacità funzionale</h1>
                        <p>In combinazione con l’allenamento o lo stretching passivo, fornisce un significativo sollievo dal dolore e una migliore capacità funzionale, in particolare per la fase iniziale della tendinopatia del tendine d’Achille.</p>
                    </div>
                </div>
                </div>
                </div>
                <div className={styles.humanMain}>
                    <img src='\images\Science-BluRV1.gif' alt='humai-Gif'/>

                </div>
                <div className={styles.tendoBox2}>
                <div className={styles.tendoDetailmain}>
                <div className={styles.tendoDetail}>
                    <div className={styles.rightLine}>
                    </div>
                    <div className={styles.tendotext}>
                    <h1>Efficace per molte condizioni</h1>
                    <p>Migliora la salute dei tendini: dellacuffia dei rotatori, dell’epicondilite laterale e mediale, dell’ estensore del pollice,della fascite plantare, della rotula, del tendine d’Achille.</p>
                    </div>
                </div>
                </div>
                <div className={styles.tendoDetailmain}>
                <div className={styles.tendoDetail}>
                    <div className={styles.rightLine}>
                    </div>
                    <div className={styles.tendotext}>
                    <h1>Migliora la capacità funzionale</h1>
                    <p>In combinazione con l’allenamento o lo stretching passivo, fornisce un significativo sollievo dal dolore e una migliore capacità funzionale, in particolare per la fase iniziale della tendinopatia del tendine d’Achille.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default TendoActive
