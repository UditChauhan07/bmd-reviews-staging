import React, { memo,useEffect, useState } from 'react'
import styles from './styles.module.css'
import Loader2 from '../Loader/index2';

const ProductReviews = ({ product,variantId }) => {
  const [productId, setProductId] = useState(    product
    ? product?.variants?.edges?.length
      ? product?.variants?.edges[0].node.id.split("ProductVariant/").length ==
        2
        ? product?.variants?.edges[0].node.id.split("ProductVariant/")[1]
        : undefined
      : undefined
    : variantId);
  useEffect(() => {
        (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true,e.defer = true, e.src = `//staticw2.yotpo.com/jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
        console.log({product,variantId,productId});
}, [productId])

  return (
    <div className={styles.wrapper}>
      {productId && <div
        class="yotpo yotpo-main-widget"
        data-product-id={productId}
      ><Loader2 /></div>}
    </div>

  )
}

export default memo(ProductReviews)
