import React from 'react'
import styles from "./FourPassaggi.module.css"

const FourPassaggi = () => {
    return (
        <section id="ingredientisection" className={styles.ingredientiHolder}>
            <p className={styles.ExtraCod} >
                <h2>Ingredienti</h2>
            </p>

            <div className={styles.FourPassaggiMain}>
                <strong>4 Passaggi</strong>
                <h1>Per un&#39;Azione Sintomatica ed un
                    Rinforzo Anabolico</h1>
                <div className={styles.ImgSectionMain}>
                    <div className={styles.ImgSection}>
                        <div className={styles.contentDiv}>
                            <div className={styles.content}>
                                <div className={styles.roundSection}>
                                    <h3>1</h3>
                                </div>
                                <strong >BOSWELLIA SERRATA</strong>
                                <p>Nuovo effetto analgesico</p>
                                <b>Sollievo Rapido e Potenziato</b>
                                <div className={styles.scrollableText}>
                                <text>  La BOSWELLIA
                                    SERRATA offre un effetto
                                    analgesico innovativo, con una riduzione
                                    significativa del dolore già dopo
                                    2 ore dalla somministrazione (vs. placebo). Inoltre, raddoppia
                                    il miglioramento della capacità funzionale rispetto alla sola gestione
                                    standard, aiutandoti a ritrovare il benessere in meno tempo.
                                </text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <img src='\images\landing\BMD-6039-landingNew.webp' alt='Boswellia Serrata' />
                        </div>

                    </div>
                    <div>

                    </div>

                </div>
                <div className={styles.Line}>
                </div>
                <div className={styles.ImgSectionMain2}>

                    <div className={styles.ImgSection2}>
                        <div className={styles.contentDiv}>
                            <div className={styles.content2}>
                                <div className={styles.roundSection}>
                                    <h3>2</h3>
                                </div>
                                <strong>CURCUMINA</strong>
                                <p>Effetto antinfiammatorio</p>
                                <div className={styles.scrollableText}>
                                <text>La Curcumina aiuta a contrastare l&apos;infiammazione e a ridurre
                                    il danno cellulare nei tendini soggetti a tendinopatia, favorendo il benessere
                                    articolare e il recupero naturale.
                                </text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv2}>
                            <img src='\images\landing\BMD-P1107585-landingNew.webp' alt='Boswellia Serrata' />
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className={styles.Line}>
                </div>
                <div className={styles.ImgSectionMain}>
                    <div className={styles.ImgSection}>
                        <div className={styles.contentDiv}>
                            <div className={styles.content}>
                                <div className={styles.roundSection}>
                                    <h3>3</h3>
                                </div>
                                <strong>AMINOACIDI E RAME</strong>
                                <p> Potenziamento Anabolico per il Recupero dei Tendini </p>
                                <div className={styles.scrollableText}>
                                <text>
                                    <b>L-ARGININA –</b> Stimola la sintesi del collagene,
                                    elemento essenziale per la rigenerazione tendinea.<br></br>

                                    <b>L-LISINA e L-PROLINA –</b> Amminoacidi
                                    fondamentali presenti nelle proteine chiave per il rinnovamento dei tendini.<br></br>

                                    <b>RAME –</b> Stabilizza le fibre di collagene, contribuendo a un
                                    recupero più rapido ed efficace.

                                    Un supporto avanzato per la salute e la resistenza dei tuoi tendini!

                                </text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <img src='\images\landing\BMD-2319-landingNew.webp' alt='Boswellia Serrata' />
                        </div>

                    </div>
                    <div>

                    </div>

                </div>
                <div className={styles.Line}>
                </div>
                <div className={styles.ImgSectionMain2}>
                    <div className={styles.ImgSection2}>
                        <div className={styles.contentDiv}>
                            <div className={styles.content2}>
                                <div className={styles.roundSection}>
                                    <h3>4</h3>
                                </div>
                                <h4 className={styles.pcontent}>COLLAGENE, DI TIPO I, <br />CONDROITINA SOLFATO, E IL MANGANESE
                                </h4>
                                <p>Sostegno e Struttura per i Tessuti</p>
                                <div className={styles.scrollableText}>
                                <text>
                                    <b>COLLAGENE DI TIPO I –</b> Garantisce resistenza e flessibilità, supportando la trasmissione delle forze. <br />

                                    <b>CONDROITINA SOLFATO –</b> Organizza e struttura le fibre di collagene, contribuendo alla forma e integrità dei tessuti. <br />

                                    <b>MANGANESE –</b> Essenziale per la formazione di tessuti connettivi come tendini e legamenti. <br />

                                    <b>VITAMINA C –</b> Favorisce la naturale sintesi del collagene, rafforzando la struttura dei tessuti. <br />

                                    Un mix essenziale per il benessere e la funzionalità delle strutture connettive!
                                </text>
                                </div>

                            </div>
                        </div>
                        <div className={styles.imgDiv2}>
                            <img src='\images\landing\Group 38614New.webp' alt='Boswellia Serrata' />
                        </div>

                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default FourPassaggi
