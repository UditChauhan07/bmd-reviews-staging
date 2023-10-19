import React, { useEffect, useState } from "react"
import styles from "@/styles/spedizione.module.css"
import PageHead from "@/utilities/Head"
import PageData from "../../json/pages.json";

export default function Spedizione() {
    let Data = PageData['politica-di-restituzione-e-cancellazione'];
    return (
        <section className={styles.container}>
            <PageHead content={{title:'Politica su Reso e Cancellazione  | Bruno MD',description:"Siamo fiduciosi che sarai soddisfatto dei tuoi prodotti Bruno MD, tuttavia, se non sei soddisfatto del tuo acquisto, ti rimborseremo l&apos;intero primo ordine."}}/>
            <h1>POLITICA DI RITORNO</h1>
            <div className={styles.textHolder} dangerouslySetInnerHTML={{
                      __html: Data
                    }} />
        </section>
    )
}
