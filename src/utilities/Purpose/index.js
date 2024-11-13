import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image';
const Cards = ({ contents }) => {
    const { image, title, paragraphs, buttonText, buttonUrl } = contents
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.ourPurposeContainer}>
                    <Image
                        className={styles.ourPurposeImage}
                        width={800}
                        height={800}
                        src={image?.src}
                        alt={image?.alt || '....'}
                    />
                    <div className={styles.textBodyOuterContainer}>
                        <h1 className={styles.textBodyHeader}>{title}</h1>
                        <div className={styles.textBodyContainer}>
                            {paragraphs.map((e, i) => {
                                return (
                                    <p className={styles.textBodyParagraph} key={i}>{e}</p>
                                )
                            })}
                        </div>
                        <Link href={buttonUrl} className={styles.ourPurposeButton}>{buttonText}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cards