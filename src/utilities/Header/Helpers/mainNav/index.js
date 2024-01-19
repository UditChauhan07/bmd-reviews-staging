import { CartIcon, SearchIcon } from '../../../SvgIcons/index'
import Link from 'next/link'
import NavList from '../Navlist'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import MobileNav from '../MobileNav'
import Image from 'next/image';
import { useMatchMedia } from '@/utilities/Sections/Hooks/useMatchMedia'
import { CartItemNumber } from '@/data/lib'
import { useAmp } from 'next/amp'
import { AuthCheck } from '@/data/Auth'
// import SearchBox from '../../SearchBox'

const MainNav = ({ navMenuLinks,iconLink}) => {
  const loadAmp = useAmp()
  const [isMobile] = useMatchMedia('(max-width: 380px)', true)
  const [isSearchOpened, setIsSearchOpened] = useState(false)
  let [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  let cartUrl = iconLink?.cart || null
  const [itemNumber, setItemNumber] = useState(0)
  const router = useRouter()
  useEffect(()=>{
    CartItemNumber().then((response)=>{
      setItemNumber(response?.data?.cart?.lines?.edges?.length>0 ? response?.data?.cart?.lines?.edges?.length:0)
    }).catch((err)=>{
      console.log({err});
    })
  },[])
  const Hamtoggle = (value)=>{
    if(value){
      if(document.getElementById("hubspot-messages-iframe-container")) document.getElementById("hubspot-messages-iframe-container").style.top = "3000px";
    }else{
      if(document.getElementById("hubspot-messages-iframe-container")) document.getElementById("hubspot-messages-iframe-container").style.top = "unset";
    }
    setIsMobileNavOpen(value)
  }

  const [logInText, setLogIntext] = useState(iconLink.login?.title)
  const [logInLink, setLogInLink] = useState(AuthCheck()? iconLink.login?.Authurl: iconLink.login?.url)

  const handleSearchSubmit = React.useCallback(query => router.push(`/search?q=${query}`), [router])
  if(isMobileNavOpen){
    return(
      <MobileNav navMenuLinks={navMenuLinks} setIsMobileNavOpenProp={Hamtoggle} />
    )
  }
  if(!isMobileNavOpen)
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoWrapper}>
        {!isMobileNavOpen && <a href={'/'} className={styles.logo} aria-label="">
        {loadAmp ? (
        <amp-img
          width="300"
          height="300"
          src="/amp-image.jpg"
          alt="a amp image"
          layout="responsive"
        />
      ) : (
        <>          {!isMobile ? <Image
            alt="Bruno logo"
            src={"/Bruno-White.webp"}
            width={180}
            height={30}
          /> : <Image
            alt="Bruno logo"
            src={"/Bruno-White.webp"}
            width={120}
            height={20}
          />}
        </>
        )}
        </a>}
        {false ? (
          <></>
        ) : (
          <div className={styles.navItemsContainer}>
            <NavList navMenuLinks={navMenuLinks} />
            <div className={styles.MobileNavContainer}>
              {isMobileNavOpen ? (
                <></>
              ) : (
                <div onClick={() => Hamtoggle(true)}>
                  <div className={styles.burgerButtonContainer} onClick={() => Hamtoggle(true)}>
                    <button className={styles.burgerLineContainer} id="hamburger" title="hamburger">
                      <span className={styles.burgerLineTop}></span>
                      <span className={styles.burgerLine}></span>
                      <span className={styles.burgerLineBottom}></span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.iconContainer}>
              <div onClick={() => setIsSearchOpened(true)}>
              <SearchIcon />
              </div>
              <div>
                <div className={styles.loginButton}>
                  <a href={logInLink} className={styles.btnLink1} alt="customer login">
                    <span className={styles.loginText}>{logInText}</span>
                  </a>
                  <div onClick={()=>window.location.href = cartUrl} className={styles.btnLink}>
                        <CartIcon number={(itemNumber === 0) ? "" : itemNumber} styles={{paddingTop:'2px'}}/>
                      </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainNav
