import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

const navLink = ({ menuGroup }) => {




  
  var hostname = window.location.hostname;
  var pathname = window.location.pathname;
  var pageURL = hostname + pathname;

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {menuGroup?.map((menuGroupItem, index) =>
            (pageURL.includes("tendo") && menuGroupItem?.title == "Prodotti") ||
              (pageURL.includes("science") && menuGroupItem?.title == "Prodotti") ||
              (pageURL.includes("carrello") &&
                menuGroupItem?.title == "Prodotti") ? (
              ""
            ) : (
              <div className={styles.menuGroup} key={`menu-group-item-${index}`}>
                {pageURL.includes("tendo") &&
                  menuGroupItem?.title == "Prodotti" ? (
                  <p className={styles.groupTitle}>{""}</p>
                ) : (
                  <p className={styles.groupTitle}>{menuGroupItem?.title}</p>
                )}
                {/* <p className={styles.groupTitle}>{menuGroupItem?.title}</p> */}
                <ul className={styles.listNone}>
                  {menuGroupItem?.navMenuLinks?.map((link, index) => {

                    if (link.url === "/rewards-page") {
                      return (
                        <li
                          className={styles.menuItem}
                          key={`menu-item-${index}`}
                        >
                          <a id="loyalty" href={link?.url} target="_blank">
                            {link?.name}
                          </a>
                        </li>
                      );
                    } else if (
                      (pageURL.includes("tendo") &&
                        menuGroupItem?.title == "Prodotti") ||
                      (pageURL.includes("science") &&
                        menuGroupItem?.title == "Prodotti") ||
                      (pageURL.includes("carrello") &&
                        menuGroupItem?.title == "Prodotti")
                    ) {
                      return "";
                    } else if (
                      pageURL.includes("tendo") &&
                      menuGroupItem?.title == "Chi siamo"
                    ) {
                      return (
                        <>
                          <li className={styles.menuItem} key={`menu-item-${index}`}>
                            {link?.url !== "#" ? (
                              <Link
                                href={
                                  // link?.name ==="Portale per il reso"
                                  link?.name ===""
                                    ? link?.url
                                    : "/tendo" + link?.url
                                }
                                aria-label={link?.name}
                                target="_blank"
                              // onClick={(event) => {
                              //   event.preventDefault();
                              //   handleOpenModal(link?.name);
                              // }}
                              >
                                {link?.name}
                              </Link>
                            ) : (
                              <p>{link?.name}</p>
                            )}
                          </li>
                        </>


                      );
                    } else {
                      return (
                        <li
                          className={styles.menuItem}
                          key={`menu-item-${index}`}
                        >
                          {link?.url != "#" ? (
                            <Link
                              href={link?.url}
                              aria-label={link?.name}
                              target="_blank"
                            >
                              {link?.name}
                            </Link>
                          ) : (
                            <p>{link?.name}</p>
                          )}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            )
          )}
        </nav>
        <div className={styles.legalCol}></div>
      </div>
    </>

  );
};

export default navLink;
