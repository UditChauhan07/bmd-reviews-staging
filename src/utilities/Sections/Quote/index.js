import React from "react";
import styles from '../styles.module.css'
const Quote = ({ data }) => {
    console.log({data});
    return(
        <section>
        <div className={styles.quoteOuterContainer}>
          <h3 className={styles.quoteHeader}>{data.title}</h3>
          <div className={styles.quoteContainer}>
            <p> <svg class="quote-icon" viewBox="0 0 512 512" width="35" title="quote-left">
      <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
    </svg>
              <strong className={styles.strong}>&nbsp;&nbsp;{data.content}</strong>
            </p>
            <p className={styles.quoted}>{data.author &&<img width={50} src={data.author.img.src} alt={data.author.img.alt}/>}{' '}{data.author.name}</p>
          </div>
        </div>
      </section>
    )
}
export default Quote;