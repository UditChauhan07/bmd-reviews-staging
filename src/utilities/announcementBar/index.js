import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const AnnouncementBar = ({ announcement, theme, ModalHandler, position }) => {
  React.useEffect(()=>{
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if(document.getElementById("fixedAnnouncementBar")) document.getElementById("fixedAnnouncementBar").style.position = "fixed";
        if(document.getElementById("fixedAnnouncementBar")){ 
            document.getElementById("fixedAnnouncementBar").style.top = "0";
        }
      } else {
        if(document.getElementById("fixedAnnouncementBar")) document.getElementById("fixedAnnouncementBar").style.position = "unset";
      }
    }
},[])
  if (ModalHandler) {
    return (
      <section
        className={styles.announcementBar}
        id='fixedAnnouncementBar'
        style={{
          color: theme?.textColor,
          backgroundColor: theme?.backgroundColor
        }}
        onClick={ModalHandler}
      >
        <div>
          <p>{announcement}</p>
        </div>
      </section>
    )
  } else {
    return (
      <section
        className={position ? styles.fixedAnnouncementBar : styles.announcementBar}
        style={{
          color: theme?.textColor,
          backgroundColor: theme?.backgroundColor
        }}
      >
        <div>
          <p>{announcement}</p>
        </div>
      </section>
    )
  }
}

export default AnnouncementBar
