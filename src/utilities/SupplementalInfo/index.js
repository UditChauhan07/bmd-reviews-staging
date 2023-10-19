import React, { useState } from "react";
import styles from './styles.module.css'

const SupplementalInfo = ({ moneyBackInfo, termPurchase ,interval}) => {
    const [isAdditionalInfoVisible, setAdditionalInfoVisibility] = useState(false)

    let regex = /\d\d giorni/gi
    let text = termPurchase?.desc ? termPurchase.desc.replaceAll(regex, interval ? interval + ' giorni' : '15 giorni',) : undefined;

    let engV = /\d\d days/gi
    let engVmoneyBackInfo = moneyBackInfo.desc.replaceAll(engV, interval ? interval + ' days' : '30 days',);

    // let deV = /\d\d tage/gi
    // let deVmoneyBackInfo = moneyBackInfo.desc.replaceAll(deV, interval ? interval + ' tage' : '30 days',);
    return (
        <div className={styles.supplementalInfoWrapper}>
            {text && (
                <>
                    <p className={styles.subscribeAndSave}>{termPurchase.title}</p>
                    <div className={styles.frequencyDisclaimer} dangerouslySetInnerHTML={{ __html: text }} />
                </>
            )}

            {moneyBackInfo.title && (
                <>
                    <div className={styles.informationContainer}>
                        <p>{moneyBackInfo.title}</p>
                        <img
                            onClick={() => setAdditionalInfoVisibility(prev => !prev)}
                            className={styles.infoGraphic}
                            src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/information-button.svg?v=6467211743660140745"
                            height="20"
                            width="20"
                            alt="Information button"
                        />
                    </div>
                    {isAdditionalInfoVisible && <div className={`${styles.additionalInfo} ${styles.visible}`} dangerouslySetInnerHTML={{ __html: engVmoneyBackInfo }} />}
                </>
            )}
        </div>
    )

}
export default SupplementalInfo