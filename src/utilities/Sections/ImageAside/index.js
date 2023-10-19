import React from 'react'
import styles from './styles.module.css'

const ImageAside = ({ content }) => {
    const { image, title, subTitle, titleDescription, legalText } = content

    if (!title || !subTitle) return null
    return (
        <section>
            <div className={styles.Container}>
                <div className={styles.imageAsideContainer}>
                    <div className={styles.headingContainer}>
                        <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
                        <div className={styles.subTitle} dangerouslySetInnerHTML={{ __html: subTitle }} />
                        <div className={styles.mt15}>
                            {titleDescription.length && titleDescription.map((e,i)=>{
                                return(
                                    <div className={styles.titleDescription} dangerouslySetInnerHTML={{ __html: e }} key={i}/>
                                )
                            })}
                            {legalText && <div className={styles.legal} dangerouslySetInnerHTML={{ __html: legalText }} />}
                        </div>
                    </div>
                    {image && <div className={styles.imageContainer} style={image?.shift ?{bottom:'200px'}:{}}>
                        <img src={image?.src} className={styles.image} alt={image?.alt} />
                    </div>}
                </div>
            </div>
        </section>
    )
}
export default ImageAside
