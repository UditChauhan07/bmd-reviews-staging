import React from "react";
import styles from './styles.module.css'
const VideoPlayer = ({video, id,theme}) => {

    const videoHandler = (e) => {
        if (e.target.getAttribute("data-vid")) {
          let video = document.getElementById(e.target.getAttribute("data-vid"))
          if (video.paused) {
            video.play();
            document.getElementById(e.target.getAttribute("data-id")).style.display = 'none'
          } else {
            document.getElementById(e.target.getAttribute("data-id")).style.display = 'block'
            video.pause();
          }
        }
      }
    return (
        <div className={styles.holder}><div className={styles.playerHolder} id={`playBtn-${id}`} data-id={`playBtn-${id}`} data-vid={`video-${id}`} onClick={videoHandler} style={{backgroundColor:theme}}>
        </div>
            <video className={styles.videoEmbbed} frameBorder="0" data-id={`playBtn-${id}`} data-vid={`video-${id}`} id={`video-${id}`} onClick={videoHandler} allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" oallowfullscreen="" msallowfullscreen="" src={video.src}></video></div>
    )
}
export default VideoPlayer