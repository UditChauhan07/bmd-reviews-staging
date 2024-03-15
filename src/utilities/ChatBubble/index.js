import React from "react";
import Script from "next/script";

const RECYCLEChatBubble = () => {
  return (
    <Script
      id="hs-script-loader"
      async
      defer
      src="//js.hs-scripts.com/19647191.js"
      strategy={"lazyOnload"}
    />
  );
};
export default RECYCLEChatBubble;
