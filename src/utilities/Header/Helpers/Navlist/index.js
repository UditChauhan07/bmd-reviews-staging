import React, { useState } from 'react'
import styles from "./index.module.css"

export default function NavList({ navMenuLinks }) {
  const [visibleSubItemsIndex, setVisibleSubItemsIndexes] = useState()
  return (
    <div className={styles.navListContainer}>
      {navMenuLinks?.map((item, index) => (
        <div className={styles.container} key={index}>
          {index == 0 ?
            <a href={item.url} onMouseOver={() => setVisibleSubItemsIndexes(index)} className={styles.navItem} >
              {item.displayText}
            </a>
            :
            <a href={item.url} onMouseOver={() => setVisibleSubItemsIndexes(index)} className={styles.navItem} >
              {item.displayText}
            </a>
          }
          {item?.subMenuLinks?.length > 0 && visibleSubItemsIndex === index && (
            <div className={styles.navItemDropdownContainer}>
              {item.subMenuLinks.map((sub, i) => {
                return (
                  <a href={sub.url} className={styles.navItem} key={i}>
                    {sub.displayText}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}