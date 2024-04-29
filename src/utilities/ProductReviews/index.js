import React, { memo, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Loader2 from "../Loader/index2";
import { ExitIcon } from "../SvgIcons";

const ProductReviews = ({ product, variantId }) => {
  const [modal, setModal] = React.useState(false);

  const handleClick = () => {
    setModal(true);
  };

  if (modal) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  const [productId, setProductId] = useState(
    product
      ? product?.variants?.edges?.length
        ? product?.variants?.edges[0].node.id.split("ProductVariant/").length ==
          2
          ? product?.variants?.edges[0].node.id.split("ProductVariant/")[1]
          : undefined
        : undefined
      : variantId
  );
  useEffect(() => {
    (function e() {
      var e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.async = true),
        (e.defer = true),
        (e.src = `//staticw2.yotpo.com/jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ/widget.js`);
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t);
    })();
    console.log({ product, variantId, productId });
  }, [productId]);

  return (
    <section id="review_ingredients" className={styles.ingredientsHolder}>
      <div className={`${styles.reviewContainerV2} ${styles.v2}`}>
        <h3 className={styles.reviewHeader}>
          <p>Recensioni dei clienti</p>
        </h3>
      </div>
      <button onClick={() => handleClick()} className={styles.reviewbtn}>
        Scrivi una recensione
      </button>

      <div className={styles.wrapper}>
        {productId && (
          <div class="yotpo yotpo-main-widget" data-product-id={productId}>
            <Loader2 />
          </div>
        )}
      </div>

      {modal === true && (
        <div className={styles.modal}>
          <div className={styles.modalOverlayV2}></div>
          <div className={styles.modalContainer1}>
            <button
              onClick={() => setModal(false)}
              className={styles.exitButton1}
              style={{ border: `1px solid black` }}
            >
              <ExitIcon />
            </button>
            <div className={styles.modalCardContainerV2}>
              <div className={styles.OverflowDiv}>
                <h1 className={styles.title} style={{ color: "black" }}>
                  Condividi la tua opinione
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(ProductReviews);
