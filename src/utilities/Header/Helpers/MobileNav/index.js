import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import { ExitIcon } from '@/utilities/SvgIcons'

const MobileNav = ({ setIsMobileNavOpenProp, navMenuLinks }) => {
  const [activeLinksIndex, setActiveLinksIndex] = useState(null)

  const show = index => {
    if (navMenuLinks[index]?.subMenuLinks) {
      setActiveLinksIndex(index)
    }
  }

  useEffect(() => {
    const firstSubMenu = navMenuLinks.findIndex(link => link?.subMenuLinks?.length > 0)

    show(firstSubMenu)
  }, [navMenuLinks])
  console.log({ navMenuLinks });

  return (
    <div className={styles.mobileNavDropdownContainer}>
      <div className={styles.exitButton} onClick={() => setIsMobileNavOpenProp(false)}>
        <ExitIcon />
      </div>

      <div className={styles.mobileNavDropdownLeftContainer}>
        <div className={styles.mobileNavDropdownLeftWrapper}>
          {navMenuLinks?.map((link, index) => {
            if (true) {
              return (
                <a href={link.url} onMouseOver={() => show(index)} className={styles.mobileDropDownItem} key={index} >
                  {link.displayText}
                </a>
              )
            } else {
              return (
                <Link href={link.url} onMouseOver={() => show(index)} className={styles.mobileDropDownItem} key={index}>
                  {link.displayText}
                </Link>)
            }
          })}
        </div>
      </div>
      <div className={styles.mobileNavDropdownRightContainer}>
        <div className={styles.mobileNavDropdownRightWrapper}>
          {navMenuLinks[activeLinksIndex]?.subMenuLinks?.map((link, i) => {
            return (
              <a href={link.url} className={styles.mobileDropDownItemRight} key={i}>
                {link.displayText}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileNav
