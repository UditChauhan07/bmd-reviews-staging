import React, { useState } from 'react';
import styles from './styles.module.css'

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState([]);
    const handleClick = (index) => {
        if(activeIndex.includes(index)){
            setActiveIndex(activeIndex.filter((item) => item !== index))
        }else{
            setActiveIndex([...activeIndex, index])
        }
    };
    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div key={item.title} className={activeIndex.includes(index) && (styles.active)} style={index == (items.length-1) ? {borderBottom:'1px solid'} : {}}>
                    <button onClick={() => handleClick(index)} className={styles.label}>{item.title}</button>
                    <div className={styles.text} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
            ))}
        </div>
    );
}
export default Accordion;