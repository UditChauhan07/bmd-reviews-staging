import React, { memo, useEffect } from 'react';

const StarRatings = ({ variantId }) => {
  useEffect(() => {
    // Inject Yotpo Script
    const scriptId = "yotpo-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = `//staticw2.yotpo.com/jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ/widget.js`;
      const t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(script, t);
    }

    const refreshYotpo = () => {
      if (window.yotpo) {
        window.yotpo.refreshWidgets();
      }
    };

    const timer = setTimeout(refreshYotpo, 500);

    return () => {
      clearTimeout(timer); 
    };
  }, [variantId]);

  return (
    <div style={{ height: '40px', display: 'flex' }}>
      {variantId && (
        <div
          className="yotpo bottomLine yotpo-medium"
          style={{ height: 'auto' }}
          id={`star-${variantId}`}
          data-yotpo-product-id={variantId}
        ></div>
      )}
    </div>
  );
};

export default memo(StarRatings);
