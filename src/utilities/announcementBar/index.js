import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import RightStickyScroll from "@/utilities/RightStickyScroll/RightStickyScroll";


const AnnouncementBar = ({ announcement, theme, ModalHandler, position }) => {
  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        if (document.getElementById("fixedAnnouncementBar"))
          document.getElementById("fixedAnnouncementBar").style.position =
            "fixed";
        if (document.getElementById("fixedAnnouncementBar")) {
          document.getElementById("fixedAnnouncementBar").style.top = "0";
        }
      } else {
        if (document.getElementById("fixedAnnouncementBar"))
          document.getElementById("fixedAnnouncementBar").style.position =
            "fixed";
      }
    }
  }, []);
  if (ModalHandler) {
    return (
      <section
        className={styles.announcementBar}
        id="fixedAnnouncementBar"
        style={{
          color: theme?.textColor,
          backgroundColor: theme?.backgroundColor,
        }}
        
      >
        {/* <div dangerouslySetInnerHTML={{__html:announcement}}/> */}
        <div style={{width:"100%",}} onClick={ModalHandler}
          // behavior="scroll"
          // scrollamount="6"
          dangerouslySetInnerHTML={{ __html: announcement }}
        ></div>
         <div style={{width:"40px",}}>
                <RightStickyScroll />
              </div>

      </section>
    );
  } else {
    return (
      <section
        className={
          position ? styles.fixedAnnouncementBar : styles.announcementBar
        }
        style={{
          color: theme?.textColor,
          backgroundColor: theme?.backgroundColor,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: announcement }} />

       
      </section>
    );
  }
};

export default AnnouncementBar;
