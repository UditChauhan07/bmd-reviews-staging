import React, { useEffect } from "react"
import MainNav from "./Helpers/mainNav"
import styles from './styles.module.css'

export default function Home({link, version,iconLink}) {
    useEffect(()=>{
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            if(document.getElementById("header")) document.getElementById("header").style.position = "fixed";
            if(document.getElementById("header")) document.getElementById("header").style.top = "0";
          } else {
            if(document.getElementById("header")) document.getElementById("header").style.position = "unset";
          }
        }
    },[])
    return(
        <header className={styles.header} id="header">
            <MainNav navMenuLinks={link} version={version} iconLink={iconLink}/>
        </header>
    )
}