import React, { memo,useEffect, useState } from 'react'

import styles from './styles.module.css'
import Loader2 from '../Loader/index2';

const ProductReviews = ({ product,variantId }) => {
  const [productId, setProductId] = useState(product ? product.variants.length ? product.variants[0].id.split('ProductVariant/').length == 2 ? product.variants[0].id.split('ProductVariant/')[1] : undefined : undefined:variantId);
  useEffect(() => {
        (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true,e.defer = true, e.src = `//staticw2.yotpo.com/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
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
