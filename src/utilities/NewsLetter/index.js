import React, { useEffect, useState } from "react";
import { useMatchMedia } from "../Sections/Hooks/useMatchMedia";
import styles from "./styles.module.css";
export const NewsLetter = ({ content }) => {
  const [isDesktop] = useMatchMedia("(min-width: 769px)", true);
  const [image, setImage] = useState();
  useEffect(() => {
    if (content) {
      let { title, portalId, formId, desktopImage, mobileImage } =
        content || undefined;
      if (isDesktop) {
        setImage(desktopImage);
      } else {
        setImage(mobileImage);
      }
      if (portalId || formId) {
        if (!window?.hbspt?.forms?.create) {
          const script = document.createElement("script");
          script.src = "https://js.hsforms.net/forms/v2.js";
          document.body.appendChild(script);
          script.addEventListener("load", () => {
            if (window.hbspt) {
              window.hbspt.forms.create({
                portalId: portalId,
                formId: formId,
                target: "#hubspotForm",
              });
            }
          });
        } else {
          console.log({ aa: window.hbspt.forms });
        }
      }
    }
  }, [isDesktop]);
  if (!content) return null;
  const { title, portalId, formId, titleFont, formWidth } =
    content || undefined;
  if (!portalId || !formId) return null;
  if (content.landing) {
    return (
      <section className={styles.newsletterSection} id="NewLetterFrom">
        <div className={styles.container}>
          <img
            className={styles.imgHolder}
            src={image}
            alt="..."
            width={"100%"}
            height={"auto"}
          />

          <div className={styles.formContainer}>
            <div className={styles.form}>
              <div className={styles.headingContainer}>{title}</div>
              <div id="hubspotForm">
                <div className="center-body" style={{ height: "200px" }}>
                  <div className="loader-circle-2"></div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    if (content.layout == 2) {
      return (
        <section id="NewLetterSection">
          <div className={!content?.alignWidth && styles.container}>
            <div
              className={styles.flex}
              style={formWidth && { gridTemplateColumns: formWidth }}
            >
              {image && (
                <div className={styles.imageContainerFlex}>
                  <img
                    className={styles.image}
                    src={image}
                    alt="..."
                    width={"100%"}
                    height={"auto"}
                  />
                </div>
              )}
              {image ? (
                <div
                  className={styles.flexContainer}
                  style={{ position: "relative" }}
                >
                  <div className={styles.details}>
                    <div
                      className={styles.headingContainer}
                      style={titleFont && { fontSize: titleFont }}
                    >
                      {title}
                    </div>
                    <div className={styles.formContainer}>
                      <div id="hubspotForm">
                        <div
                          className="center-body"
                          style={{ height: "200px" }}
                        >
                          <div className="loader-circle-2"></div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={styles.details} style={{ position: "unset" }}>
                    <div
                      className={styles.headingContainer}
                      style={titleFont && { fontSize: titleFont }}
                    >
                      {title}
                    </div>
                    <div className={styles.formContainer}>
                      <div id="hubspotForm">
                        <div
                          className="center-body"
                          style={{ height: "200px" }}
                        >
                          <div className="loader-circle-2"></div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section id="NewLetterSection">
          <div className={!content?.alignWidth && styles.container}>
            <div
              className={styles.grid}
              style={formWidth && { gridTemplateColumns: formWidth }}
            >
              {image && (
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={image}
                    alt="..."
                    width={"100%"}
                    height={"auto"}
                  />
                </div>
              )}
              {image ? (
                <div style={{ position: "relative" }}>
                  <div className={styles.details}>
                    <div
                      className={styles.headingContainer}
                      style={titleFont && { fontSize: titleFont }}
                    >
                      {title}
                    </div>
                    <div className={styles.formContainer}>
                      <div id="hubspotForm">
                        <div
                          className="center-body"
                          style={{ height: "200px" }}
                        >
                          <div className="loader-circle-2"></div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={styles.details} style={{ position: "unset" }}>
                    <div
                      className={styles.headingContainer}
                      style={titleFont && { fontSize: titleFont }}
                    >
                      {title}
                    </div>
                    <div className={styles.formContainer}>
                      <div id="hubspotForm">
                        <div
                          className="center-body"
                          style={{ height: "200px" }}
                        >
                          <div className="loader-circle-2"></div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }
  }
};
export default NewsLetter;
