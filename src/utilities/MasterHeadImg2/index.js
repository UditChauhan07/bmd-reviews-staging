import React, { useState,useEffect } from "react";
import styles from "./styles.module.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
import Carousel from 'react-bootstrap/Carousel';
const MasterHeadImg2 = ({ data }) => {

    const [isDesktop] = useMatchMedia('(min-width: 768px)', true)
    const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(false);
    if(!data) return null
    useEffect(() => {
        const checkAnnouncementBar = () => {
            const announcementBar = document.getElementById("fixedAnnouncementBar");
            if (announcementBar && window.getComputedStyle(announcementBar).display !== "none") {
                setIsAnnouncementVisible(true);
                console.log("✅ Announcement Bar is Visible");
            } else {
                setIsAnnouncementVisible(false);
                console.log("❌ Announcement Bar is Hidden");
            }
        };
    
        // Run once on mount
        checkAnnouncementBar();
    
        // Observe changes in the body to detect dynamic changes
        const observer = new MutationObserver(() => checkAnnouncementBar());
        observer.observe(document.body, { childList: true, subtree: true });
    
        // Listen to window resize
        window.addEventListener("resize", checkAnnouncementBar);
    
        return () => {
            window.removeEventListener("resize", checkAnnouncementBar);
            observer.disconnect(); // Cleanup the observer
        };
    }, []);
    
    
    

    
    return(
        <section id='MasterHeadImg'>
            
        <div className={styles.container}>
            <div className={styles.firstCarousel}>
                <Carousel  interval={4000} controls={true} pause={false} className={styles.carousel} >
                    {/* <Carousel.Item>
                        <div className={styles.our_Carousel}>
                            <img src="/images/BMD-GG-P1107585+_Masthead.webp" alt="First slide" />
                        </div>
                    </Carousel.Item> */}

                    <Carousel.Item>
                 <div className={styles.our_Carousel}>
                            <img src="/images/BMD-History-Il-Noceto-v3.webp" alt="Second slide"    style={{ marginTop: isAnnouncementVisible ? "36px" : "0px" }} />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                 <div className={styles.our_Carousel}>
                            <img src="/images/BMD-History-b_9-v3.webp" alt="Third slide"   style={{ marginTop: isAnnouncementVisible ? "36px" : "0px" }}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                 <div className={styles.our_Carousel}>
                            <img src="/images/BMD-History-c15-v3.webp" alt="Third slide"   style={{ marginTop: isAnnouncementVisible ? "36px" : "0px" }}/>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    </section>
  );
};

export default MasterHeadImg2;


