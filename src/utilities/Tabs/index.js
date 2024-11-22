import React, { useState } from "react";
import styles from "./styles.module.css";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
import Blogs from "../Blog";
import Accordion from "../Accordion";
import Link from "next/link";
import ProductsBlogData from "../../../json/productBlog.json";

const Tabs = ({ data, productColorTheme, productString = null }) => {
  const [isTab] = useMatchMedia("(max-width: 250px)", false);
  const [activeTab, setActiveTab] = useState(0);
  let BlogData = ProductsBlogData[productString];
  if (BlogData) {
    BlogData = BlogData.Blog;
  }
  if (!data) return null;
  let width = 0;
  data.map((e) => {
    width += e.title.length * 12;
  });
  const handler = (value) => {
    setActiveTab(value);
  };
  return (
    <>
      {!isTab && (
        <div className={styles.active} id="According">
          <div className={styles.app}>
            <div className={styles.box1}>
              <div
                className={styles.tabs}
                id={"productTab"}
                
              >
                {data &&
                  data.map((e, i) => {
                    if (activeTab == i) {
                      return (
                        <div
                          key={i}
                          onClick={() => handler(i)}
                          className={styles.tab}
                          style={{ color: productColorTheme }}
                        >
                          {e.title}
                          <div
                            className={styles.hr}
                            style={{ backgroundColor: productColorTheme }}
                          ></div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          onClick={() => handler(i)}
                          className={styles.tab}
                          key={i}
                        >
                          {e.title}
                          <div className={styles.hr}></div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
            <div className={styles.contents}>
              <>
                {data &&
                  data.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          activeTab == i ? styles.activeContent : styles.content
                        }
                      >
                        {e?.blog ? (
                          <Blogs categories={e.details} />
                        ) : e?.faq ? (
                          <div style={{ padding: "0 3rem" }}>
                            <div className={styles.titleContainer}>
                              <h2>Questions</h2>
                              <Link href="/faqs">View all FAQs</Link>
                            </div>
                            <Accordion items={e.details} />
                          </div>
                        ) : (
                          <div
                            className={styles.accordDesc}
                            style={{ height: "50vh", overflow: "unset" }}
                          >
                            {e.details && (
                              <>
                                {e.details.length > 0 &&
                                  e.details.map((e1, i1) => {
                                    return (
                                      <div
                                        key={`tab-${i1}`}
                                        dangerouslySetInnerHTML={{ __html: e1 }}
                                        className={styles.detailHolder}
                                      />
                                    );
                                  })}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </>
            </div>
          </div>
        </div>
      )}
      {isTab && (
        <>
          <div className={styles.app}>
            <div className={styles.box2}>
              {data &&
                data.map((e, i) => {
                  if (activeTab == i) {
                    return (
                      <>
                        <div
                          key={i}
                          onClick={() => handler(i)}
                          className={styles.accordTitle}
                          style={{
                            color: productColorTheme,
                            "background-color": "#F7F7F7",
                          }}
                        >
                          <div className={styles.accordFlex}>
                            <div>{e.title}</div>
                            <div
                              className={styles.upArrow}
                              style={{ color: productColorTheme }}
                            >
                              <svg
                                class="flickity-button-icon"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                  class="arrow"
                                  transform="translate(100, 100) rotate(180) "
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {e?.blog && BlogData ? (
                          <Blogs categories={BlogData.details} />
                        ) : e?.faq ? (
                          <div style={{ padding: "0 3rem" }}>
                            <div className={styles.titleContainer}>
                              <h2>Questions</h2>
                              <Link href="/faqs">View all FAQs</Link>
                            </div>
                            <Accordion items={e.details} />
                          </div>
                        ) : (
                          <div
                            className={styles.accordDesc}
                            style={{ height: "50vh", width: "85%" }}
                          >
                            {e.details && (
                              <div
                                dangerouslySetInnerHTML={{ __html: e.details }}
                              />
                            )}
                          </div>
                        )}
                      </>
                    );
                  } else {
                    return (
                      <div
                        key={i}
                        onClick={() => handler(i)}
                        className={styles.accordTitle}
                      >
                        <div className={styles.accordFlex}>
                          <div>{e.title}</div>
                          <div className={styles.downArrow}>
                            <svg
                              class="flickity-button-icon"
                              viewBox="0 0 100 100"
                            >
                              <path
                                d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                class="arrow"
                                transform="translate(100, 100) rotate(180) "
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Tabs;
