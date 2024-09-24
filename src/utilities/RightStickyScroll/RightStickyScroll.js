import React, { useState } from 'react';
import styles from '../RightStickyScroll/RightStickyScroll.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const RightStickyScroll = () => {
    const [showIcons, setShowIcons] = useState(false);

    const handleClick = () => {
        setShowIcons(!showIcons);
    };
  // This function will scroll to the section when an icon is clicked
  const faqClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


    return (
        <div className={styles.stickyNav}>
            <div className={styles.menuIconDiv} onClick={handleClick}>
                <div className={styles.menuIcon}>{showIcons ? <FaTimes /> : <FaBars />}</div>
                <div className={`${styles.iconContainer} ${showIcons ? styles.show : ''}`}>
                    <div className={styles.iconDiv} onClick={() => faqClick('faqsection')}>
                        <FaFacebook className={styles.icon} />
                    </div>
                    <div className={styles.iconDiv}>
                        <FaTwitter className={styles.icon} />
                    </div>
                    <div className={styles.iconDiv}>
                        <FaInstagram className={styles.icon} />
                    </div>
                    <div className={styles.iconDiv}>
                        <FaLinkedin className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightStickyScroll;
