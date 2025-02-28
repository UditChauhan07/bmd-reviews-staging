import React, { useState } from "react";
import styles from "./styles.module.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
import Carousel from 'react-bootstrap/Carousel';
const MasterHeadImg2 = ({ data }) => {

    const [isDesktop] = useMatchMedia('(min-width: 768px)', true)
    const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(false);
    if(!data) return null
   
    
    

    
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


