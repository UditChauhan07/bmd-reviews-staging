import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
const SubscriptionBar = ({ content, ModalHandler, active, themed = false }) => {
  if (themed) {
    const [isVisible, setIsVisible] = useState(true);

    // Function to toggle visibility
    const toggleVisibility = () => {
      setIsVisible((prevState) => !prevState);
    };

    // Effect to handle visibility based on screen width
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 767) {
          setIsVisible(false); // Show the component if screen width is less than or equal to 767px
        } else {
          setIsVisible(true); // Hide the component if screen width is greater than 767px
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return (
      <section
        className={styles.SubscriptionBar}
        id="themed"
        style={{ background: themed }}
      >
        <div className={styles.SubscriptoionInner}>
          <div className={styles.arrowcontrol}>
            <div className={styles.arrowBox} onClick={toggleVisibility}></div>
          </div>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colxl7}>
                <p
                  className={`${styles.firstLineHeader} ${styles.themedTextWhite}`}
                  style={{ fontWeight: "bolder" }}
                >
                  {content.title1}
                </p>
                <p
                  className={`${styles.secondLineHeader}  ${styles.themedTextWhite}`}
                >
                  {content.title2}
                </p>
              </div>
              <div
                className={`${styles.colxl5Themed} ${styles.colxl5}  ${
                  isVisible ? "" : styles.hidden
                }`}
              >
                <div className={styles.SubOneTime}>
                  <div
                    className={
                      active == "Subscribe" ? styles.button04 : styles.button03
                    }
                    style={active == "Subscribe" ? { color: themed } : {}}
                    onClick={ModalHandler}
                    data-value="Subscribe"
                  >
                    <div data-value="Subscribe">
                      <p
                        className={styles.priceCross}
                        data-value="Subscribe"
                        style={active == "Subscribe" ? { color: themed } : {}}
                      >
                        €{content.subscriptionBox.price.toFixed(2)}
                      </p>
                    </div>
                    <div className={styles.btnText} data-value="Subscribe">
                      <div data-value="Subscribe">
                        {content?.subscriptionBox?.buttonText?.map((e, i) => {
                          return (
                            <p key={i} data-value="Subscribe">
                              {e}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      active != "Subscribe" ? styles.button04 : styles.button03
                    }
                    onClick={ModalHandler}
                  >
                    <div>
                      <p className={styles.priceCross}>
                        €{content.onetimeBox.price.toFixed(2)}
                      </p>
                    </div>
                    <div className={styles.btnText}>
                      <div>
                        {content?.onetimeBox?.buttonText?.map((e, i) => {
                          return <p key={i}>{e}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.SubscriptionBar}>
        <div className={styles.SubscriptoionInner}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colxl7}>
                <p className={styles.firstLineHeader}>{content.title1}</p>
                <p className={styles.secondLineHeader}>{content.title2}</p>
              </div>
              <div className={styles.colxl5}>
                <div className={styles.SubOneTime}>
                  <div
                    className={
                      active == "Subscribe" ? styles.button02 : styles.button01
                    }
                    onClick={ModalHandler}
                    data-value="Subscribe"
                  >
                    <div data-value="Subscribe">
                      <p className={styles.priceCross} data-value="Subscribe">
                        €{content.subscriptionBox.price.toFixed(2)}
                      </p>
                    </div>
                    <div className={styles.btnText} data-value="Subscribe">
                      <div data-value="Subscribe">
                        {content?.subscriptionBox?.buttonText?.map((e, i) => {
                          return (
                            <p key={i} data-value="Subscribe">
                              {e}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      active != "Subscribe" ? styles.button02 : styles.button01
                    }
                    onClick={ModalHandler}
                  >
                    <div>
                      <p className={styles.priceCross}>
                        €{content.onetimeBox.price.toFixed(2)}
                      </p>
                    </div>
                    <div className={styles.btnText}>
                      <div>
                        {content?.onetimeBox?.buttonText?.map((e, i) => {
                          return <p key={i}>{e}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default SubscriptionBar;
