import { useEffect, useState } from "react";
import styles from "@/styles/return.module.css";



export default function ReturnsPage() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

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
   
    <div className={styles.returndiv}  >
      <h1 >Portale di ritorno</h1>

      {!isScriptLoaded && (
        <div className="center-body" style={{ height: "200px" }}>
          <div className="loader-circle-2"></div>
        </div>
      )}

      {isScriptLoaded && (
        <return-zap id="returnZapWidget" shop-id="LMs2jjaYbLmnDeavktpXKj"></return-zap>
      )}
    </div>
  
    </>
  );
}

