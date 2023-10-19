import React, { useEffect } from "react";
import styles from "./styles.module.css";

const RewardsPOP = ({ className }) => {
  const ShowModal = () => {
if(window?.swellAPI){
  window.swellAPI?.showPopupByType("RewardsPopup")
}
  };
  useEffect(()=>{
  LoadScript()
},[])
  const LoadScript = ()=>{
    return new Promise((resolve, reject) => {
        const loadingThreshold = 60 * 1000;
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "//cdn-loyalty.yotpo.com/loader/" + "kX4ZsZvCM55qdsLW9P9-NQ" + ".js";
        script.dataset.script = "yotpo-loyalty";
        document.head.append(script);
        script.addEventListener("load", () => {
          const started = Date.now();
          const interval = setInterval(() => {
            const { showSwellModal } = window;
            if (typeof showSwellModal === "function") {
              clearInterval(interval);
              resolve({ showSwellModal });
            } else if (Date.now() - started > loadingThreshold) {
              clearInterval(interval);
              reject(new Error("Yotpo Loyalty script initialization timed out"));
            }
          });
        });
      });
  }
  return (
    <>

      <button type="button" onClick={() => ShowModal()} className={className}>
        Il mio programma fedelta
        <div id="swell-customer-identification" data-authenticated="true"></div>
      </button>
    </>
  );
};
export default RewardsPOP;
