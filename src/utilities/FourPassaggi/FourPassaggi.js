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
                                <strong >Boswellia Serrata</strong>
                                <p>Nuovo effetto analgesico</p>
                                <text>Effetto analgesico: La Boswellia Serrata ottiene una riduzione statisticamente significativa del dolore (vs. PBO) dalle 2 ore in poi dopo la somministrazione. In aggiunta, raddoppia il miglioramento della capacità funzionale nello stesso periodo rispetto alla sola gestione standard.</text>
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
                                <strong>Curcuma</strong>
                                <p>Effetto antinfiammatorio</p>
                                <text>Effetto antinfiammatorio: La curcumina, principale componente attivo della curcuma, è nota per le sue proprietà antinfiammatorie. Essa agisce riducendo il danno cellulare e lo stress ossidativo nei tendini affetti da tendinopatia, contribuendo al miglioramento della funzionalità e alla riduzione del dolore.</text>
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
                                <strong>Aminoacidi e Rame</strong>
                                <p>Effetto di rinforzo anabolico</p>
                                <text>Effetto di rinforzo anabolico: La L-arginina favorisce la sintesi del collagene, chiave per il recupero dei tendini. La L-LISINA e la L-PROLINA si trovano in proteine significative per il meccanismo di rinnovamento del tendine. Il rame stabilizza le fibre di collagene, accelerando il processo di recupero dei tendini.</text>
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
                                <strong>Collagene, Di Tipo I, Condroitina<br/> Solfato, E Il Manganese</strong>
                                <p>Foniscono struttura ai tessuti</p>
                                <text>Forniscono struttura ai tessuti: Il COLLAGENE DI TIPO I fornisce resistenza e flessibilità per la trasmissione delle forze. La CONDROITINA SOLFATO ordina e struttura le fibre di collagene, determinando la forma tissutale. Il MANGANESE svolge un ruolo nella formazione di tessuti connettivi come tendini e legamenti. La VITAMINA C stimola la sintesi del collagene.</text>
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
