import React from 'react'
import styles from './styles.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '../FourStepProcess/accordion'

const ReasonsToBelieve = ({ content, ingredients, theme,product,accordanTitle=null }) => {
  const [modal, setModal] = React.useState(false)
  const [imageSource, setImageSource] = React.useState('/')
  if (!content) return null
  const handleClick = e => {
    if(ingredients?.src){
      setImageSource(ingredients.src)
      setModal(true)
    }
  }
  return (
    <section id="ingredients">
      <div>
        <div className={styles.reasonsContainer}>
          <h3 className={styles.reasonsHeader}>
         Ragioni per
            <p className={styles.believeBluerex} style={{ color: theme }}>Credere</p>
          </h3>
          <div className={styles.clinicalStudy}>
            <h3 className={styles.clinicalHeadlineBluerex} style={{ color: theme }}>{accordanTitle||"Ingredients and Clinical Studies"}</h3>
            <Accordion allowMultiple className={styles.accordion}>
              {content.map((element, idx) => {
                return (
                  <AccordionItem className={styles.accordionItem} key={idx}>
                    <AccordionButton className={styles.accordionButton}>
                      <p className={styles.note}>{element.note}</p>
                      <div style={{ color: theme }}>
                        <AccordionIcon variant="arrow-default" />
                      </div>
                    </AccordionButton>
                    <AccordionPanel className={styles.AccordionPanel}>
                      <div className={styles.expanded}>{element.expanded}</div>
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
          <div>
            {ingredients&&<>
            <h3 className={styles.supplementalHeadlineBluerex} style={{ color: theme }}>SUPPLEMENT FACTS</h3>
            <div className={styles.logoTextContainer} onClick={e => handleClick(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={theme} class="bi bi-zoom-in" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/> </svg>&nbsp;
              <p>{product}</p>
            </div>
            </>}


          </div>

          {modal === true && (
            <div className={styles.modal}>
              <div className={styles.modalOverlay}></div>
              <div className={styles.modalContainer}>
                <button onClick={() => setModal(false)} className={styles.exitButton}>
                  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="white" fill-rule="evenodd"><path fill={theme} d="M0 0h40v40H0z" /><path fill="#fff" fill-rule="nonzero" d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z" /></g></svg>
                </button>
                <img src={imageSource} alt={ingredients?.alt} className={styles.ing} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default ReasonsToBelieve