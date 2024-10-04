import React, { useState } from 'react';
import styles from '../RightStickyScroll/RightStickyScroll.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';


const RightStickyScroll = () => {
    const [showIcons, setShowIcons] = useState(false);

    const handleClick = () => {
        setShowIcons(!showIcons);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

 const handleAccediClick = () => {
    window.location.href = '/account/login';  
};
    return (
        <div className={styles.stickyNav}>
            <div className={styles.menuIconDiv} onClick={handleClick}>
                <div className={styles.menuIcon}>{showIcons ? <FaTimes /> : <FaBars />}</div>
                <div className={`${styles.iconContainer} ${showIcons ? styles.show : ''}`}>
                <div className={styles.iconDiv} onClick={() => scrollToSection('ingredientisection')}>
                        <p className={styles.icon}>Ingredienti</p> 
                    </div>
                    <div className={styles.iconDiv} onClick={() => scrollToSection('beneficisection')}>
                        <p className={styles.icon}>Benefici</p> 
                    </div>
                    <div className={styles.iconDiv} onClick={() => scrollToSection('studisection')}>
                        <p className={styles.icon}>Studi</p> 
                    </div>
                    <div className={styles.iconDiv} onClick={() => scrollToSection('faqsection')}>
                        <p className={styles.icon}>FAQs</p> 
                    </div>
                   
                    <div className={styles.iconDiv} onClick={handleAccediClick}>
                        <p className={styles.icon}>Accedi</p> 
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
}

export default RightStickyScroll;
