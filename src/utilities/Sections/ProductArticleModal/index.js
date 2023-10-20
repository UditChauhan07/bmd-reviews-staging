import styles from './styles.module.css'
import { useMatchMedia } from '../Hooks/useMatchMedia'
import Image from 'next/image'
const ProductArticleModal = ({content,ModalHandler})=>{
    const [isDesktopImage] = useMatchMedia('(min-width: 1024px)', true)
return(
    <section className={styles.container} >
        {isDesktopImage &&
          <div className={styles.dFlex}>
            <Image src={content.bannerDesk?.src} alt={content.bannerDesk?.alt} className={styles.col1} width={1000} height={600} />
            <div className={styles.col2}>
              <div className={styles.textContainer} style={{'background-color':content.colorTheme}}>
                <div className={styles.wBorder}>
                
                  <p>{false && <span className={styles.upperCase}></span>}{content.title}</p>
                </div>
                <div className={styles.button} style={{'color':content.colorTheme}} onClick={ModalHandler}>
                <h1 className={styles.buttonText}>{content.buttonTitle}</h1>
                {content.buttonDescription && <p className={styles.ft10}>{content.buttonDescription}</p>}
                </div>
                <div className={styles.offer} style={{'color':content.offerTextColor}}>
                <p className={styles.ft20}>{content.offerTagLine}</p>
                {content.offerTagDescription && <p className={styles.ft10}>{content.offerTagDescription}</p>}
                </div>
              </div>
            </div>
          </div>
        }
        {!isDesktopImage && <Image src={content.bannerMob?.src || content.bannerDesk?.src} alt={content.bannerMob?.alt ||content.bannerDesk?.alt} className={styles.mobIMG} onClick={ModalHandler} width={1000} height={600}/>}
      </section>
)
}
export default ProductArticleModal