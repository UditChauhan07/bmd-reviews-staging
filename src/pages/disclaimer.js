import React, { useEffect, useState } from 'react'
import styles from '@/styles/spedizione.module.css'
import PageHead from '@/utilities/Head'


export default function Spedizione() {

    return (
        <section className={styles.container}>
            <PageHead content={{title:"Disclaimer | Bruno MD"}}/>
            <h1>DISCLAIMER</h1>
            <div className={styles.textHolder}>
                <p>Per quanto gli autori si sforzino di fornire informazioni corrette e attendibili, le stesse non hanno lo scopo di fornire consigli medici individuali e in nessun caso possono costituire la prescrizione di un trattamento, la visita specialistica o il rapporto diretto con il proprio medico curante.</p>
                <p>Si invitano e consigliano gli utenti a chiedere il parere di un medico o di altro specialista prima di prendere qualsiasi iniziativa.</p>
                <p><strong>Tutte le informazioni fornite:</strong></p>
                <p>- non devono essere interpretate come alternative alla consultazione, valutazione o trattamento di un medico ovvero di altro specialista.</p>
                <p>- non sono pensate per fornire specifica consulenza in materia di salute fisica, o qualsiasi altra sorta di consulenza. Pertanto tutto il materiale, le informazioni e i piani alimentari sono elaborati soltanto a scopo informativo.</p>
                <p>Gli autori non possono essere ritenuti responsabili dei risultati o mancati risultati, delle conseguenze di un qualsiasi utilizzo o tentativo di utilizzo delle informazioni pubblicate e non si assumono alcuna responsabilità in caso di omissioni di informazioni, refusi o errori di trascrizione in qualsiasi dei contenuti pubblicati.</p>
                <p>È vietata la riproduzione anche parziale senza autorizzazione scritta.</p>
            </div>
        </section>
    )
}
