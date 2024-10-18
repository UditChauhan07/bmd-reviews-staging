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
                <img src="/images/14-BMD-Formoline-Scientists-Landscape.webp" alt="Description of image" />
            </div>

            <div className={styles.textDiv}>
                <h2>La Scienza per Bruno MD</h2>
                <Link href="/science" target="_blank">
                    Scopri di piu’
                </Link>
            </div>

        </div>
    );
}

// SciencePage2.hideLayout = false;

export default SciencePage2;

