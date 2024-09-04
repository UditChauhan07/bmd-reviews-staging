import React from 'react'
import styles from './SciencnewVideo.module.css'

const ScienceNewVideo = () => {
  return (
    <div>
      <div className={`container ${styles.brunoDecription}`}>
        <h1>Siamo  <b> Bruno MD</b></h1>
        <p> La scienza e la connessione umana</p>
      </div>
      <div className={styles.PhytoVideoTag}>
        <video width="100%" height="100%" autoPlay={true} muted playsInline controls loop>
          <source src="/images/Science_Masthead_1920x1080_ITALIAN SUBS.mp4" type="video/mp4" />
          <source src="/images/Science_Masthead_1920x1080_ITALIAN SUBS.mp4" type="video/ogg" />
        </video>
      </div>
      <div className={styles.PhytoVideoTag1}>
        <video width="100%" height="100%" autoPlay={true} muted playsInline controls loop>
          <source src='/images/475_500_ITA.mp4' type='' />
          <source src="/images/475_500_ITA.mp4" type="" />
        </video>
      </div>
    </div>
  )
}

export default ScienceNewVideo
