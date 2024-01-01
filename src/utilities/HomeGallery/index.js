import React, { useEffect } from "react";
import styles from "./styles.module.css";

export const HomeGallery = ({
  galleryId,
  id,
  isreviews,
  title,
  content,
  productid = null,
  theme=null
}) => {
  useEffect(() => {
    if (id) {
      if (window?.yotpo?.appKey != id || window?.yotpo?.appKey) {
        (function e() {
          var e = document.createElement("script");
          (e.type = "text/javascript"),
            (e.async = true),
            (e.src = `//staticw2.yotpo.com/${id}/widget.js`);
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t);
        })();
      }
    }
  }, []);
  if (!id) return null;
  return (
    <div className={styles.homeGalleryContainer}>
      <div className={styles.container}>
        {content?.title ? (
          <p className={styles.text}>
            {content?.invert ? (
              <>
                <span dangerouslySetInnerHTML={{ __html: content.desc }} />
                <br />
                <strong className={styles.strong} style={theme?{color:theme}:{}}>{content.title} </strong>
              </>
            ) : (
              <>
                <strong className={styles.strong} style={theme?{color:theme}:{}}>{content.title} </strong>
                <span dangerouslySetInnerHTML={{ __html: content.desc }} />
              </>
            )}
          </p>
        ) : (
          <>
            {title ? (
              <p className={styles.textCenter}>{title}</p>
            ) : (
              <p className={styles.text}>
                <strong className={styles.strong}>Believers </strong>Living
                <br />
                Their Best Life
              </p>
            )}
          </>
        )}
      </div>
      <div
        class="yotpo yotpo-pictures-widget"
        data-gallery-id={galleryId || "6411911c72b20e001784b649"}
        data-product-id={productid}
      >
        <div class="center-body" style={{ height: "200px" }}>
          <div class="loader-circle-2"></div>
        </div>
      </div>
      {isreviews && (
        <div
          class="yotpo yotpo-reviews-carousel"
          data-background-color="transparent"
          data-mode="top_rated"
          data-type="product"
          data-count="9"
          data-show-bottomline="1"
          data-autoplay-enabled="1"
          data-autoplay-speed="5000"
          data-show-navigation="1"
        ></div>
      )}
    </div>
  );
};
export default HomeGallery;
