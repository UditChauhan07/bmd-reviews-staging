import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

const navLink = ({ menuGroup }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {menuGroup?.map((menuGroupItem, index) => (
          <div className={styles.menuGroup} key={`menu-group-item-${index}`}>
            <p className={styles.groupTitle}>{menuGroupItem?.title}</p>
            <ul className={styles.listNone}>
              {menuGroupItem?.navMenuLinks?.map((link, index) => {
                if (link.url === '/rewards-page'){
            return( <li className={styles.menuItem} key={`menu-item-${index}`}>
                  <a id='loyalty' href={link?.url}>{link?.name}</a>
                </li>)
                }else {
               return( <li className={styles.menuItem} key={`menu-item-${index}`}>
                  {link?.url != '#' ?<Link href={link?.url} aria-label={link?.name}>{link?.name}</Link>:<p>{link?.name}</p>}
                </li>)}
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className={styles.legalCol}></div>
    </div>
  )
}

export default navLink