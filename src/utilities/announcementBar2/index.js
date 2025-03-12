import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import RightStickyScroll from "@/utilities/RightStickyScroll/RightStickyScroll";
import { CartIcon, SearchIcon } from "../SvgIcons";
import { CartItemNumber } from "@/data/lib";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";


const AnnouncementBar2 = ({ announcement, theme, ModalHandler, position }) => {
  const [itemNumber, setItemNumber] = useState(0);
  useEffect(() => {
    CartItemNumber()
      .then((response) => {
        setItemNumber(
          response?.data?.cart?.lines?.edges?.length > 0
            ? response?.data?.cart?.lines?.edges?.length
            : 0
        );
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 0 ||""
        // document.documentElement.scrollTop > 50
      ) {
        if (document.getElementById("fixedAnnouncementBar"))
          document.getElementById("fixedAnnouncementBar").style.position =
            "fixed";
        if (document.getElementById("fixedAnnouncementBar")) {
          document.getElementById("fixedAnnouncementBar").style.top = "0";
        }
      } else {
        if (document.getElementById("fixedAnnouncementBar"))
          document.getElementById("fixedAnnouncementBar").style.position =
            "fixed";
      }
    }
  }, []);
  if (!ModalHandler) {
    return (
      <section
        className={styles.announcementBar}
        id="fixedAnnouncementBar"
        style={{
          color: theme?.textColor,
          backgroundColor: theme?.backgroundColor,
        }}
      >

<div style={{ width: "80px", cursor: "pointer" }}>
  <Link href="/tendo" style={{ textDecoration: "none", color: "inherit" }}>
  <img src="/images/Backicon.svg" alt="" />
  </Link>
</div>
        {/* <div dangerouslySetInnerHTML={{__html:announcement}}/> */}
        <div
          style={{ width: "100%" ,textAlign:"center"}}
          // behavior="scroll"
          // scrollamount="6"
          
        >
          <span><b>TENDOACTIVE PLUS-</b>OFFERTA ESCLUSIVA SCONTO DEL 20% SU OGNI ACQUISTO PERIODICO</span>
        </div>
        <div className={styles.carticon} onClick={() => (window.location.href = "/carrello")}>
          <CartIcon
            number={itemNumber === 0 ? "" : itemNumber}
            styles={{ paddingTop: "2px", }}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section
        className={
          position ? styles.fixedAnnouncementBar : styles.announcementBar
        }
        style={{
          color: theme?.textColor,
          backgroundColor: theme?.backgroundColor,
        }}
      >
        <div
          style={{ margin: "auto" }}
          dangerouslySetInnerHTML={{ __html: announcement }}
        />
      </section>
    );
  }
};

export default AnnouncementBar2;
