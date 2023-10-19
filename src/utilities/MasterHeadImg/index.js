import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
const MasterHeadImg = ({ data }) => {
    const [isDesktop] = useMatchMedia('(min-width: 768px)', true)
    if(!data) return null
    return(
        <section id='MasterHeadImg'>
        <div className={styles.container}>
        <h1 className={styles.title} id='masterHeadImgTitle'>{data.title}</h1>
        {data?.mobileImage ? <>
        {isDesktop ? <img src={data?.desktopImage.src} alt={data?.desktopImage.alt} className={styles.imgFull}/> :<img src={data?.mobileImage.src} alt={data?.mobileImage.alt} className={styles.imgFull}/> }
        </>:
        <img src={data?.desktopImage.src} alt={data?.desktopImage.alt} className={styles.imgFull}/>}       
        </div>
        </section>
    )
}

export default MasterHeadImg