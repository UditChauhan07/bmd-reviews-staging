import React, { useEffect } from 'react'
import styles from '../WistiaHero/styles.module.css'
import Link from 'next/link'
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";

const MasterHeadVideo = ({ src, content }) => {
    const [isDesktop] = useMatchMedia("(min-width: 768px)", true);
    return (
        <section className={styles.cover}>
            <div className={styles.holder}>
            {isDesktop ?<video  frameBorder="0"  id={`video-master`} width={'100%'} height={'auto'} title='' autoPlay loop controls muted><source src={src.desk} type="video/mp4"/><track src="" kind='captions'/></video>:
            // moblie video
            <video  frameborder="0"  id={`video-master`} width={'auto'} height={'100%'} title='' autoPlay loop controls muted playsInline><source src={src.mob} type="video/mp4"/><track src="" kind='captions'/></video>}
                {content &&
                    <div className={styles.conatiner}>
                        <div className={styles.heroButtonAndTextContainer}>
                            <div className={styles.titleHolder}>
                                {content?.title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: content.title}}/>}
                                {content?.subTitle && <div className={styles.subTitle}>
                                    {content.subTitle}
                                </div>}
                            </div>
                            {content?.btnText && <Link href={content.btnLink || 'collezioni/tutti'}>
                                <span className={styles.btn}>{content.btnText}</span>
                            </Link>}
                        </div>
                        {content.buyNow && <span className={styles.buyNow} onClick={content.ModalHandler}>Buy Now</span>}
                    </div>
                }
            </div>
        </section>
    )
}
export default MasterHeadVideo;
