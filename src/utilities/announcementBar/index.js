import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import RightStickyScroll from "@/utilities/RightStickyScroll/RightStickyScroll";
import { CartIcon, SearchIcon } from "../../../src/utilities/SvgIcons";
import { CartItemNumber } from "@/data/lib";
import { FaCartShopping } from "react-icons/fa6";

const AnnouncementBar = ({ announcement, theme, ModalHandler, position }) => {
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
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
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
  if (ModalHandler) {
    return (
      <section
        className={styles.announcementBar}
        id="fixedAnnouncementBar"
        style={{
          color: theme?.textColor,
          backgroundColor: theme?.backgroundColor,
        }}
      >
        <div style={{ width: "40px" }}>
          <RightStickyScroll />
        </div>
        {/* <div dangerouslySetInnerHTML={{__html:announcement}}/> */}
        <div
          style={{ width: "100%" }}
          onClick={ModalHandler}
          // behavior="scroll"
          // scrollamount="6"
          dangerouslySetInnerHTML={{ __html: announcement }}
        ></div>
        <div className={styles.carticon} onClick={() => (window.location.href = "/carrello")}>
          <CartIcon
            number={itemNumber === 0 ? "" : itemNumber}
            styles={{ paddingTop: "2px" }}
          />
        </div>

        <div className={styles.cartIcon}>{/* <FaCartShopping /> */}</div>
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

export default AnnouncementBar;
