import { useEffect, useState } from "react";
import styles from "@/styles/return.module.css";
import data1 from "../../../json/layout.json";
import AnnouncementBar2 from "@/utilities/announcementBar2";
import Footer from "@/utilities/Footer/";


export default function ReturnsPage() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

const [isTendo, setIsTendo] = useState(false);
  
      useEffect(() => {
          if (typeof window !== "undefined") {
              setIsTendo(window.location.href.includes("tendo"));
          }
      }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://portal.returnzap.com/v2.js";
    script.async = true;

    script.onload = () => {
      console.log("ReturnZap script loaded");
      setIsScriptLoaded(true); 
    };

    document.body.appendChild(script);
  }, []);

  return (
    <>
    <div>
    {data1["EU"].announcementBar && (
        <AnnouncementBar2
          announcement={data1["EU"].announcementBar.title2}
          theme={{
            textColor: data1["EU"].announcementBar.textColor,
            backgroundColor: document.referrer.includes("tendo")
              ? "rgb(0, 51, 161)"
              : data1["EU"].announcementBar.backgroundColor,
          }}
        />
      )}
      </div>
    <div className={styles.returndivtendo} >
     

      {!isScriptLoaded && (
        <div className="center-body" style={{ height: "200px" }}>
          <div className="loader-circle-2"></div>
        </div>
      )}

      {isScriptLoaded && (
        <div className={styles.tendoreturn}>
           <h1>Portale di ritorno</h1>
        <return-zap id="returnZapWidget" shop-id="LMs2jjaYbLmnDeavktpXKj"></return-zap>
        </div>
      )}
    </div>
    <Footer data={data1["EU"].footer2} />
    </>
  );
}
ReturnsPage.hideLayout = true;
