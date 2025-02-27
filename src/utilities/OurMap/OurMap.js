import React from 'react'
import styles from "../../utilities/OurMap/Map.module.css"
const OurMap = () => {
    return (
        <div className={styles.mapMain}>
            <div className={styles.Our_Img}>
                <img src='/images/Our_story_map2.webp' alt='map-image' />
                <div className={styles.mapContent}>
                    <div className={styles.mapHistory}>
                        <h2>Orgogliosamente italiana, con 26 anni di eccellenza nel panorama delle multinazionali farmaceutiche.</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OurMap
