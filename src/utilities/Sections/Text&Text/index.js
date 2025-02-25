import React from 'react'

import styles from '../styles.module.css'

const TextText = ({ data }) => {
    // console.log({ data });
    if (!data) return null
    return (
        <section id='TextText'>
            <div className={styles.container}>
            <div className={styles.textContainer}>
            {data.map((element, key) => {
                return (
                    <>
                            <p className={styles.textHolder}>{element}</p>
                    </>
                )
            })}
            </div>
            </div>
        </section>
    )
}

export default TextText