import React, { useState, useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from './styles1.module.css'

function Try() {
    const [transformValue, setTransformValue] = useState(0);
    const [toggleClass, setClass] = useState(false);
    const [selectedDiv, setSelectedDiv] = useState(0);

    const handleButtonClick = (e) => {
        setSelectedDiv(selectedDiv + 1);
        if (selectedDiv === 3) {
            document.getElementById("nextButton").classList.add("d-none");
        }

        const newClasses = classes.map((className, index) => {
            return index === classes.length - 1 ? "slideIsOpen" : classes[index + 1];
        });
        if (selectedDiv == 0) {
            document.getElementById("previousButton").classList?.remove("d-none");
        } else if (selectedDiv <= 0) {
            document.getElementById("previousButton").classList?.add("d-none");
        }
        setClasses(newClasses);
        if (window.innerWidth <= 426) {
            setTransformValue(transformValue - 308);

        } else if (window.innerWidth <= 767) {
            setTransformValue(transformValue - 498);
        } else if (window.innerWidth <= 991) {
            setTransformValue(transformValue - 500);
            const scrollAmount = 500;
            const newTransformValue = transformValue + (e.deltaY > 0 ? scrollAmount : -scrollAmount);

        } else {
            setTransformValue(transformValue - 864);


        }
    };

    const handleButtonClick2 = () => {
        setSelectedDiv(selectedDiv - 1);
        if (selectedDiv <= 1) {
            document.getElementById("previousButton").classList?.add("d-none");
            document.getElementById("nextButton").classList.remove("d-none");
        }

        const newClasses = classes.map((className, index) => {
            return index === classes.length - 4 ? "" : classes[index - 1];
        });

        setClasses(newClasses);

        if (window.innerWidth <= 426) {
            setTransformValue(transformValue + 308);
        } else if (window.innerWidth <= 767) {
            setTransformValue(transformValue + 498);
        } else if (window.innerWidth <= 991) {
            setTransformValue(transformValue + 500);
        } else {
            setTransformValue(transformValue + 864);
        }

    };

    const [classes, setClasses] = useState(["", "", "", "", ""]);
    return(<></>)
    // return (
    //     <div>
    //         <div className={styles.testimonialCrousel}>
    //             <Carousel
    //                 showArrows={false}
    //                 showThumbs={true}
    //                 showStatus={false}
    //                 showIndicators={false}
    //                 infiniteLoop={false}
    //                 autoPlay={false}
    //                 stopOnHover={false}
    //             >
    //                 <div className={styles.SOne}>
    //                     <div className={styles.row}>
    //                         <div className={styles.col12}>
    //                             <div className="">
    //                                 <video width="" height="" controls>
    //                                     <source
    //                                         src="https://f.shgcdn.com/3f0145ca-76b7-4c90-86c3-57ccc666b473/"
    //                                         type="video/mp4"
    //                                     />
    //                                 </video>
    //                             </div>
    //                         </div>
    //                         <div className={styles.col12}>
    //                             <div className={styles.slideInfoQuote2}>
    //                                 <p className="mb-5">
    //                                     "One of my best kept beauty secrets is adding Royal Collagen
    //                                     Peptides to my beverages every single day."
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className={styles.SOne}>
    //                     <div className={styles.row}>
    //                         <div className={styles.col12}>
    //                             <div className="">
    //                                 <video width="" height="" controls>
    //                                     <source
    //                                         src="https://f.shgcdn.com/3f0145ca-76b7-4c90-86c3-57ccc666b473/"
    //                                         type="video/mp4"
    //                                     />
    //                                 </video>
    //                             </div>
    //                         </div>
    //                         <div className={styles.col12}>
    //                             <div className={styles.slideInfoQuote2}>
    //                                 <p className="mb-5">
    //                                     "One of my best kept beauty secrets is adding Royal Collagen
    //                                     Peptides to my beverages every single day."
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </Carousel>
    //         </div>
    //         <div className={`${styles.testimonialSliderWrapper} ${styles.slider}`}>
    //             <div
    //                 className={styles.testimonialSliderTrack}
    //                 style={{ transform: `translateX(${transformValue}px)` }}
    //             >
    //                 <div className={`${styles.testimonialSlide} ${styles.slider_item}`} >
    //                     <div className={`${styles.slideInfo} ${styles.slideIsOpen}`}>
    //                         <div className={styles.slideInfoFixedWrapper}>
    //                             <div className={styles.slideInfoQuote2}>
    //                                 <p>
    //                                     "One of my best kept beauty secrets is adding Royal Collagen
    //                                     Peptides to my beverages every single day."
    //                                 </p>
    //                             </div>
    //                             <div className={styles.slideInfoAuthor2}>Ashely C.</div>
    //                         </div>
    //                     </div>
    //                     <div className={`${styles.slideVideo} ${styles.slideIsOpen}`}>
    //                         <div className={styles.slideVideoPlaceholderPlay}></div>

    //                         <video className={styles.slideVideoEmbed}>
    //                             <source
    //                                 src="https://f.shgcdn.com/3f0145ca-76b7-4c90-86c3-57ccc666b473/"
    //                                 type="video/mp4"
    //                             />
    //                         </video>

    //                         <div className={styles.slideVideoPlaceholderImage}></div>
    //                     </div>
    //                 </div>
    //                 <div className={`${styles.testimonialSlide} ${styles.slider_item}`}>
    //                     <div className={`slideInfo ${classes[4]}`}>
    //                         <div className={styles.slideInfoFixedWrapper}>
    //                             <div className={styles.slideInfoQuote2}>
    //                                 <p>
    //                                     "One of my best kept beauty secrets is adding Royal Collagen
    //                                     Peptides to my beverages every single day."
    //                                 </p>
    //                             </div>
    //                             <div className={styles.slideInfoAuthor2}>Ashely C.</div>
    //                         </div>
    //                     </div>

    //                     <div className={`slideVideo ${classes[4]}`}>
    //                         <div className={styles.slideVideoPlaceholderPlay}></div>
    //                         <video
    //                             className={styles.slideVideoEmbed}
    //                             frameborder="0"
    //                             allowfullscreen=""
    //                             mozallowfullscreen=""
    //                             webkitallowfullscreen=""
    //                             oallowfullscreen=""
    //                             msallowfullscreen=""
    //                             src="https://f.shgcdn.com/f6925757-189b-41e7-ac09-cdc836edb5b1/"
    //                         ></video>
    //                         <div className={styles.slideVideoPlaceholderImage}></div>
    //                     </div>
    //                 </div>
    //                 <div className={`${styles.testimonialSlide} ${styles.slider_item}`}>
    //                     <div className={`slideInfo ${classes[3]}`}>
    //                         <div className={styles.slideInfoFixedWrapper}>
    //                             <div className={styles.slideInfoQuote2}>
    //                                 <p>
    //                                     "Bruno MDs Royal Collagen Peptides ‘go packets’ are a
    //                                     gamechanger."
    //                                 </p>
    //                             </div>
    //                             <div className={styles.slideInfoAuthor2}>Stephanie M.</div>
    //                         </div>
    //                     </div>
    //                     <div className={`slideVideo ${classes[3]}`}>
    //                         <div className={styles.slideVideoPlaceholderPlay}></div>
    //                         <video
    //                             className={styles.slideVideoEmbed}
    //                             frameborder="0"
    //                             allowfullscreen=""
    //                             mozallowfullscreen=""
    //                             webkitallowfullscreen=""
    //                             oallowfullscreen=""
    //                             msallowfullscreen=""
    //                             src="https://f.shgcdn.com/ddf0473d-d15e-4426-b209-e6b605c4de02/"
    //                         ></video>
    //                         <div className={styles.slideVideoPlaceholderImage}></div>
    //                     </div>
    //                 </div>
    //                 <div className={`${styles.testimonialSlide} ${styles.slider_item}`}>
    //                     <div className={`slideInfo ${classes[2]}`}>
    //                         <div className={styles.slideInfoFixedWrapper}>
    //                             <div className={styles.slideInfoQuote2}>
    //                                 <p>
    //                                     "Working out is great, but having sore muscles afterwards
    //                                     isn’t that fun. And this little guy here helps you reduce
    //                                     inflammation which means a faster recovery from your
    //                                     workouts."
    //                                 </p>
    //                             </div>
    //                             <div className={styles.slideInfoAuthor2}>Camila F.</div>
    //                         </div>
    //                     </div>
    //                     <div className={`slideVideo ${classes[2]}`}>
    //                         <div className={styles.slideVideoPlaceholderPlay}></div>
    //                         <video
    //                             className={styles.slideVideoEmbed}
    //                             frameborder="0"
    //                             allowfullscreen=""
    //                             mozallowfullscreen=""
    //                             webkitallowfullscreen=""
    //                             oallowfullscreen=""
    //                             msallowfullscreen=""
    //                             src="https://f.shgcdn.com/3083976c-dc87-4ab6-b69f-678bace2a809/"
    //                         ></video>
    //                         <div className={styles.slideVideoPlaceholderImage}></div>
    //                     </div>
    //                 </div>
    //                 <div className={`${styles.testimonialSlide} ${styles.slider_item}`}>
    //                     <div className={`slideInfo ${classes[1]}`}>
    //                         <div className={styles.slideInfoFixedWrapper}>
    //                             <div className={styles.slideInfoQuote2}>
    //                                 <p>
    //                                     "You really need to do the research of what you are putting
    //                                     into your body. Look for things coming from cuttable
    //                                     sources. And that is why I am obsessed with Bruno MD."
    //                                 </p>
    //                             </div>
    //                             <div className={styles.slideInfoAuthor2}>Megan Q.</div>
    //                         </div>
    //                     </div>
    //                     <div className={`slideVideo ${classes[1]}`}>
    //                         <div className={styles.slideVideoPlaceholderPlay}></div>
    //                         <video
    //                             className={styles.slideVideoEmbed}
    //                             frameborder="0"
    //                             allowfullscreen=""
    //                             mozallowfullscreen=""
    //                             webkitallowfullscreen=""
    //                             oallowfullscreen=""
    //                             msallowfullscreen=""
    //                             src="https://f.shgcdn.com/74882def-bd81-4dae-9ed1-b24bee076f43/"
    //                         ></video>
    //                         <div className={styles.slideVideoPlaceholderImage}></div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className={styles.testimonialSliderArrows}>
    //                 <button
    //                     id="previousButton"
    //                     className="d-none"
    //                     onClick={handleButtonClick2}
    //                     aria-label="Button for Previous Testimonial"
    //                 >
    //                     Previous
    //                 </button>
    //                 <button
    //                     id="nextButton"
    //                     disabled=""
    //                     aria-label="Button for Next Testimonial"
    //                     onClick={handleButtonClick}
    //                 >
    //                     Next
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default Try;