import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

function SciencePage2() {
    return (
        <div>
            <p className={styles.ExtraCod} >
                <span>Scienza</span>
            </p>
            <div className={styles.imgconatiner} id='scienzasection'>
                <img src="/images/14-BMD-Formoline-Scientists-Landscape.webp" alt="La ricerca in Bruno MD" />
            </div>

            <div className={styles.textDiv}>
                <strong>La Scienza per Bruno MD</strong>
                <Link href="/science" target="_blank">
                    Scopri di piu’
                </Link>
            </div>

        </div>
    );
}

// SciencePage2.hideLayout = false;

export default SciencePage2;

