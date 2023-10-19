
import React, { useState, useRef } from 'react'
import styles from './styles.module.css'
import { InfoIcon } from '../SvgIcons'
import Link from 'next/link'

const CartSummary = ({ data }) => {
    const guaranteeOverlay = useRef()
    const [state1, setState1] = useState(true)
    const [state2, setState2] = useState(true)

    const [isGuaranteeInfoOpen, setIsGuaranteeInfoOpen] = useState(false)
    const onClickInfoBlock = e => {
        e.stopPropagation()
        setIsGuaranteeInfoOpen(old => !old)
    }
    return (
        <div className={styles.cartSummaryContainer}>
            <h3 className={styles.blockTitle}>{data.title}</h3>

            <div className={styles.priceContainer}>
                <p>{data.subtotalLabel}:</p>
                <strong>€ {parseFloat(data?.price||0).toFixed(2) || '0.00'}</strong>
            </div>

            <div className={styles.checkoutButtonContainer}>
                <Link href={data?.url || '/collezioni/tutti'} >
                    <div className={styles.button}>
                        {data.checkoutLabel}
                    </div>
                </Link>
            </div>
            <div className={styles.dis}>
            {data.version == 'EU' && <>
                <p>
                <input type="checkbox" className={styles.checkBox} id="Condizioni" name="d-1" checked={state1} onChange={()=>setState1(!state1)} required />&nbsp;
                <label for="Condizioni">Dichiaro di accettare | Termini e Condizioni di acquisto e di accettare espressamente gli articoli 3, 10, 11, 12, 13, 14, 15 e 18 dei &nbsp;
                    <a href="/termini-e-condizioni" target="_blank" className={styles.hyperLink}>termini e condizioni</a>
                </label>.</p>
                <p><input type="checkbox" name="d-red" checked={state2} onChange={()=>setState2(!state2)} required /><label for="d-red">&nbsp;consento al trattamento dei miei dati come specificatamente indicato nella&nbsp;</label>
                    <a href="/politica-sullariservatezza" target="_blank" className={styles.hyperLink}>Privacy Policy</a>.</p></>}</div>
            <div className={styles.satisfactionGuarantee}>
                <div className={styles.guaranteeTextWrapper}>
                    {data.moneyBack?.title}
                </div>
                <div className={styles.guaranteeInfoIcon} onClick={onClickInfoBlock}>
                    <InfoIcon />
                </div>
                <div
                    className={styles.guaranteeOverlay + ' ' + (isGuaranteeInfoOpen ? styles['--open'] : '')}
                    ref={guaranteeOverlay}
                >
                    {data.moneyBack?.description}
                </div>
            </div>
        </div>
    )
}
export default CartSummary