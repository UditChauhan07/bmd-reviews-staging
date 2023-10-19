import React from 'react'
import styles from './styles.module.css'

const BottomBar = ({contents}) => {
    const {backgroundColor,textColor,content} = contents || []
  if(!content) return null;
  if(!content.length) return null;
  return(
    <div className={styles.bar} id="bottomBar" style={{'background':backgroundColor, 'color':textColor}}>
    {content.map((element, index)=>{
      return(
        <>
        <span className={styles.disc} key={`b-${index}`}>
        <div dangerouslySetInnerHTML={{ __html: element }}></div>
        </span>
        {(content.length-1) != index && <span className={styles.hyphen} key={`b-hypen-${index}`}>&nbsp; - &nbsp;</span>}
        </>
      )
    })}
    </div>
  )
}
export default BottomBar