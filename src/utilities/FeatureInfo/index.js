import React from 'react'
import styles from './styles.module.css'

const FeatureInfo = ({ infoBanners }) => {

  return (
    <div
      className={styles.productInfoBannerContainer}
    >
      <div>
        <div className={styles.textContainer}>
          {infoBanners?.map((text,i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureInfo
