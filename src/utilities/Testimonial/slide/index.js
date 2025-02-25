import React, { useState, forwardRef, useRef } from 'react'
import styles from './styles.module.css'

const TestimonialSlide = ({ colorCode, colorCodeOnPlayButton,colorCodeOnText, slide, isOpen = false, isVisible = false,videoHeight,videoWidth }, ref) => {
    if (!videoHeight) videoHeight = '100'
    if (!videoWidth) videoWidth = '375'
    const [showingVideo, setShowingVideo] = useState(false)
    const videoRef = useRef(null)
    React.useEffect(() => {
        let play = document.getElementsByClassName('slideVideoPlaceholderPlay')
        if (play) {
            play.style = `background-color:${colorCode?.hexColor}`;
        }
    }, [])

    // style={{'width':`${videoWidth}px`,'height':`${videoHeight}%`}}
    const onClickOfTarget = () => {
        if (videoRef.current.paused) {
            playing.push(videoRef.current)
            for (let i = 0; i < playing.length; i++) {
                playing[i].pause()
            }
            setShowingVideo(true)
            videoRef.current.play()
        } else {
            setShowingVideo(false)
            videoRef.current.pause()
        }
    }


    if (false) {
        // console.log('ISOPEN:====', isOpen)
        return (

            <div className={styles.testimonialSlide} ref={ref}>

                <div className={styles.slideInfo + ' ' + (isOpen ? styles.slideIsOpen : '')}>
                    <div className={styles.slideInfoFixedWrapper}>
                        <div className={styles.slideInfoQuote2} style={{ color: '#000' || colorCode?.hexColor }}>
                            <p>{slide?.quote}</p>
                        </div>
                        <div className={styles.slideInfoAuthor2} style={{ color: colorCode?.hexColor }}>{slide?.author}</div>
                    </div>

                </div>



                <div
                    className={styles.slideVideo + ' ' + (isOpen ? styles.slideIsOpen : '')}
                    onClick={onClickOfTarget}
                >

                    {!showingVideo && (
                        <>
                            {colorCodeOnPlayButton && <div className={styles.slideVideoPlaceholderPlay} style={{ 'background-color': colorCode?.hexColor }} />}
                            {!colorCodeOnPlayButton && <div className={styles.slideVideoPlaceholderPlay} />}
                        </>
                    )}

                    <video
                        className={styles.slideVideoEmbed}
                        frameBorder="0"
                        allowFullScreen={true}
                        mozallowfullscreen=""
                        webkitallowfullscreen=""
                        oallowfullscreen=""
                        msallowfullscreen=""
                        src={slide?.video}
                        loading="lazy"
                        ref={videoRef}
                    />

                    <div className={styles.slideVideoPlaceholderImage}>
                        <img src={slide?.video} alt={`${slide?.author}'s testimonial image'`} />
                    </div>
                </div>
            </div>
        )
    }
    if (true) {
        return (
            <div className={styles.testimonialSlide2} ref={ref}>
                <div className={styles.slideInfo + ' ' + (isOpen ? styles.slideIsOpen : '')}>
                    <div className={styles.slideInfoFixedWrapper2}>
                        <div className={styles.slideInfoQuote2}>
                            <p>{slide?.quote}</p>
                        </div>
                        <div className={styles.slideInfoAuthor2}>{slide?.author}</div>
                    </div>
                </div>
                <div className={styles.slideVideoPlaceholderImage2}>
                    <img src={slide?.video} alt={`${slide?.author}'s testimonial image'`} />
                </div>
            </div>
        )
    }
    else {
        return null
    }
}
export default TestimonialSlide