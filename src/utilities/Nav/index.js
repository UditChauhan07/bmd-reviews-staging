import React from 'react'
import styles from './styles.module.css'
import { CartIcon } from '../SvgIcons'
import Link from 'next/link'

const StickyNav = ({theme}) => {
  return (
    <section>
      <div className={styles.landingContainer}>
        <div className={styles.nav}>
          <a href="#benefits" className={styles.navItem} style={theme.backgroundColor&& {color:theme.backgroundColor}}>
            Benefits
          </a>
          <Link href="#ingredients" className={styles.navItem} style={theme.backgroundColor&& {color:theme.backgroundColor}}>
            Ingredients
          </Link>
          <Link href="/account/login" className={styles.navItem}>
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-login"
              viewBox="0 0 28.33 37.68"
              width="15px"
            >
              <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z" fill={theme.backgroundColor}></path>
            </svg>
          </Link>

          <Link href="/cart" className={styles.navItem}>
            <CartIcon  color={theme.backgroundColor} styles={{display:'grid'}} width={'18px'}/>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default StickyNav
