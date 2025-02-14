import React, { useState, useEffect } from "react";
import collection from "../../../json/collection.json";
import { CollectionList } from "@/utilities/CollectionCard";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import { WistiaHero } from "@/utilities/WistiaHero";
import styles from "./styles.module.css";
import PageHead from "@/utilities/Head";
const Collection = ({}) => {
  const collezioni = null;
  const [category, setCategory] = useState({
    name: undefined,
    DataisLoaded: false,
  });
  const [param, setParam] = useState(null); 

  function getBaseUrl(url) {
    // Create a new URL object from the given URL
    const urlObj = new URL(url);
    
    // Return the base URL (protocol + hostname + pathname)
    return `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}`;
  }
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get("param"); 
    setParam(paramValue);
    if (!collezioni) {

      
      let url = window.location.href;
      url = getBaseUrl(url);
      let splitUrl = url.split("/collezioni/");
      // console.log(splitUrl);
      
      if (splitUrl.length == 2) {
        if (splitUrl[1]) {
          setCategory({
            name: splitUrl[1],
            DataisLoaded: true,
          });
        } else {
          setCategory({
            name: false,
            DataisLoaded: true,
          });
        }
      } else {
      }
    } else {
      setCategory({
        name: false,
        DataisLoaded: true,
      });
    }
  }, []);
  const { DataisLoaded, name } = category;
  const { masterHead, item, title, details, seo, align } =
    collection[name] || {};
  const { img, wistia } = masterHead || {};
  if (!DataisLoaded)

    return (
      <div className="center-body">
          <div className="loader-circle-3"></div>
      </div>
    );
  return (
    <section>
      {true ? (
        <>
          <PageHead content={seo} />
          {wistia?.id && (
            <WistiaHero id={wistia.id} content={wistia?.content} />
          )}
          {img?.desktopImage && <MasterHeadImg data={img} />}
          {!wistia?.id && !img?.desktopImage && (
            <h1 className={styles.collectionHeader}>{title}</h1>
          )}
          <section className={styles.container}>
            {details ? (
              <>
                {align == "left" ? (
                  <div className={styles.flex}>
                    {details && (
                      <div
                        className={styles.DetailsHolder}
                        dangerouslySetInnerHTML={{ __html: details }}
                      />
                    )}
                    <CollectionList
                      content={item}
                      className={styles.productHolder}
                      param={param}
                    />
                  </div>
                ) : (
                  <>
                    <CollectionList content={item} param={param} />
                    {details && (
                      <div
                        className={styles.l1DetailsHolder}
                        dangerouslySetInnerHTML={{ __html: details }}
                      />
                    )}
                  </>
                )}
              </>
            ) : (
              <CollectionList content={item}  param={param}/>
            )}
          </section>
        </>
      ) : (
        <div
          style={{
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: "25vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1
              className="next-error-h1"
              style={{
                display: "inline-block",
                margin: "0 20px 0 0",
                paddingRight: "23px",
                fontSize: "24px",
                fontWeight: 500,
                verticalalign: "top",
                lineHeight: "49px",
                borderRight: "1px solid",
              }}
            >
              404
            </h1>
            <div style={{ display: "inline-block", textAlign: "left" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "49px",
                  margin: 0,
                }}
              >
                This page could not be found.
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Collection;
