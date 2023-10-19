import React, { useEffect } from "react";
import Slider from "../Slider";
import styles from "./styles.module.css";
import PurchaseBox from "../PurchaseBox";
import StarRatings from "../StarRatings";

const ProductCard = ({ data, variantId }) => {
  const { images, declaimer, priceDescription } = data || {};

  if (!data) return null;
  return (
    <section className={styles.conatiner}><div className={styles.productCard}>
      <h1 dangerouslySetInnerHTML={{ __html: declaimer?.title }} className={styles.mobTitle}></h1>
      <div className={styles.sliderHolder}>
        {images?.length && <Slider data={images} />}
      </div>
      <div className={styles.textHolder}>
        <h1 dangerouslySetInnerHTML={{ __html: declaimer?.title }} className={styles.title}></h1>
        {!data?.review &&<StarRatings variantId={priceDescription.EXTERNALID}/>}
        <div dangerouslySetInnerHTML={{ __html: declaimer?.subTitle }} className={styles.subTitle}></div>
        <div dangerouslySetInnerHTML={{ __html: declaimer?.content }} className={styles.content}></div>
      </div>
      <div className={styles.purchaseBoxHolder}>
        <PurchaseBox data={priceDescription} variantId={variantId}/>
      </div>
    </div>
    </section>
  );
};

export default ProductCard;
