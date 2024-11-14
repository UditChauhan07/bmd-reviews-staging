import React, { memo, useEffect, useState } from 'react'

const StarRatings = ({ variantId }) => {

  useEffect(() => {
    (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true, e.src = `//staticw2.yotpo.com/jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
  }, [variantId])

  return (
    <div style={{ height: '40px', display: 'flex' }}>
      {variantId && <div
        className="yotpo bottomLine yotpo-medium"
        style={{ height: 'auto' }}
        id={`star-${variantId}`}
        data-yotpo-product-id={variantId}
      ></div>}
    </div>

  )
}

export default memo(StarRatings)
