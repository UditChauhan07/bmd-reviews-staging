import React, { useState, useRef, useEffect } from "react";
import styles from "../tenoactive/TendoActive.module.css";
import ModalBoxInner from "@/utilities/ModalBoxInner";
import landingData from "../../../../json/landing.json";
import { useMatchMedia } from "@/utilities/Sections/Hooks/useMatchMedia";
import PriceBoxModal from "@/utilities/ModalBoxInner/priceBox";
import { getProduct, getSubscription } from "@/data/lib";

const TendoActive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedType, setClickedType] = useState("Subscribe");
  const [shopifyP, setSProduct] = useState();
  const [rechargeProduct, setRProduct] = useState();
  const VideoRef = useRef(null);
  const reviewContainerRef = useRef(null);
  const [isDesktopModal] = useMatchMedia("(min-width: 767px)", true);

  const ModalHandler = (e) => {
    const { value } = e.target.dataset;
    if (value) {
      setClickedType(value);
    } else {
      setClickedType("Subscribe");
    }
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (pageData.externalId) {
      const productId = `gid://shopify/Product/${pageData.externalId}`;
      getProduct({ productId })
        .then((response) => {
          let product = response?.data?.product;
          setSProduct(product);
        })
        .catch((err) => {
          console.log({ err });
        });

      getSubscription({ id: pageData.externalId })
        .then((response) => {
          if (response?.plans?.length) {
            let freqs = [];
            response.plans.map((element) => {
              if (element.subscription_preferences.charge_interval_frequency)
                freqs.push({
                  id: `gid://shopify/SellingPlan/${element.external_plan_id}`,
                  value:
                    element.subscription_preferences.charge_interval_frequency +
                    " giorni",
                });
            });
            freqs.sort((a, b) => {
              if (a.value < b.value) {
                return -1;
              }
              if (a.value > b.value) {
                return 1;
              }
            });
            setRProduct({
              product_id: pageData.externalId,
              subscription_preferences: freqs,
            });
          }
          if (response?.selling_plan_groups?.length > 0) {
            let freqs = [];
            response.selling_plan_groups[0].selling_plans.map((plans) => {
              if (plans.order_interval_frequency) {
                freqs.push({
                  id: `gid://shopify/SellingPlan/${plans.selling_plan_id}`,
                  value: plans.order_interval_frequency + " giorni",
                });
              }
            });
            freqs.sort((a, b) => {
              if (a.value < b.value) {
                return -1;
              }
              if (a.value > b.value) {
                return 1;
              }
            });
            setRProduct({
              product_id: EXTERNALID,
              subscription_preferences: freqs,
            });
          }
        })
        .catch((err) => {
          console.error({ err });
        });
    }
  }, []);

  const pageData = landingData["tendo-LP-V2-WO"] || {};
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedDetail, setSelectedDetail] = useState(1);
  const slides = [
    {
      imgSrc: "\\images\\Riduzione del dolore.gif",
    },
    {
      imgSrc: "\\images\\Efficace per molte condizioni_1.gif",
    },
    {
      imgSrc: "\\images\\Miglioria la condizione del tendine.gif",
    },
    {
      imgSrc: "\\images\\Migliora la capacità funzionale.gif",
    },
  ];

  // Function to handle the click and set the active slide
  const handleClick = (index) => {
    setActiveSlide(index - 1);
    setSelectedDetail(index);
  };

  return (
    <div className={styles.tendoMain}>
      <>
        {pageData?.isPriceBoxModal && isDesktopModal ? (
          <PriceBoxModal
            content={pageData.bottomBar}
            priceBox={{
              EXTERNALID: pageData.externalId,
              priceBox: pageData.ProductArticleModal.priceBox,
              freq: rechargeProduct?.subscription_preferences,
              theme: pageData.theme,
              price: shopifyP?.variants?.edges?.length
                ? parseInt(shopifyP.variants.edges[0].node?.price?.amount)
                : 0,
            }}
            variantId={pageData.variantId}
            isOpen={isOpen}
            theme={pageData.theme}
            ModalHandler={ModalHandler}
            clickedType={clickedType}
          />
        ) : (
          <ModalBoxInner
            content={pageData.bottomBar}
            isOpen={isOpen}
            ModalHandler={ModalHandler}
            externalId={pageData.externalId}
            productVariantId={pageData.variantId}
            clickedType={clickedType}
            //version={version}
            themed={pageData.theme}
          />
        )}
      </>
      <div className={`container ${styles.brunoDecription2}`}>
        <div className={styles.bruno3000}>
          <h1>La ricetta per migliorare te stesso.</h1>
        </div>
      </div>
      <div className={styles.formqw}>
        <div className={styles.tendoProductDiv}>
          <div className={styles.tendoProduct}>
            <div className={styles.tendoImg}>
              <img
                src="/images/02-BMD-Tendoactive_Plus-9O3A3003-v2.webp"
                alt="tendo-Plus"
              />
            </div>
            <div className={styles.tendoContent}>
              <h1>Tendoactive Plus </h1>
              <h2>Bruno MD</h2>
              <p>Recupero integrale dei tendini e riduzione del dolore .</p>
              <div className={styles.tendoButton}>
                <div className={styles.tendoMedcolor}></div>
                <div>
                  <button onClick={ModalHandler}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tendoDecriptionmain}>
        <div className={styles.tendoBox}>
          <div className={styles.tendoDetailmain}>
            <div
              className={`${styles.tendoDetail} ${
                selectedDetail === 1 ? styles.active : styles.inactive
              }`}
              onClick={() => handleClick(1)}
            >
              <div className={styles.rightLine}></div>
              <div className={styles.tendotext}>
                <h1>Riduzione del dolore</h1>
                <p>
                  {" "}
                  Significativa riduzione del dolore sia a riposo che durante
                  attività fisica. Per una gestione sicura ed efficace delle
                  tendinopatie e della fascite plantare.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.tendoDetailmain}>
            <div
              className={`${styles.tendoDetail} ${
                selectedDetail === 2 ? styles.active : styles.inactive
              }`}
              onClick={() => handleClick(2)}
            >
              <div className={styles.rightLine}></div>
              <div className={styles.tendotext}>
                <h1>Migliora la condizione del tendine</h1>
                <p>
                  {" "}
                  Aumenta la proliferazione dei tenociti (cellule tendinee) e la
                  vitalità stimolando la sintesi endogena del collagene di tipo
                  I.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.tendoDetailmain2}>
            <div
              className={`${styles.tendoDetail} ${
                selectedDetail === 3 ? styles.active : styles.inactive
              }`}
              onClick={() => handleClick(3)}
            >
              <div className={styles.rightLine}></div>
              <div className={styles.tendotext}>
                <h1> Efficace per molte condizioni</h1>
                <p>
                  Migliora la salute dei tendini: dellacuffia dei rotatori,
                  dell’epicondilite laterale e mediale, dell’ estensore del
                  pollice,della fascite plantare, della rotula, del tendine
                  d&apos;Achille.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.tendoDetailmain2}>
            <div
              className={`${styles.tendoDetail} ${
                selectedDetail === 4 ? styles.active : styles.inactive
              }`}
              onClick={() => handleClick(4)}
            >
              <div className={styles.rightLine}></div>
              <div className={styles.tendotext}>
                <h1>Migliora la capacità funzionale</h1>
                <p>
                  {" "}
                  In combinazione con l&apos;allenamento o lo stretching
                  passivo, fornisce un significativo sollievo dal dolore e una
                  migliore capacità funzionale, in particolare per la fase
                  iniziale della tendinopatia del tendine d&apos;Achille..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.humanMain}>
          <div className={styles.blinkDiv}>
            {/* Render the blinking dots dynamically */}
            {Object.keys(slides[activeSlide]).map((key, index) => (
              <span
                key={index}
                className={styles[slides[activeSlide][key]]}
              ></span>
            ))}
          </div>
          <div className={styles.humanBody}>
          <img src={slides[activeSlide].imgSrc} alt="human-Gif" />
          </div>
        </div>
        <div className={styles.tendoBox2}>
          <div className={styles.tendoDetailmain}>
            <div
              className={`${styles.tendoDetail} ${
                selectedDetail === 3 ? styles.active : styles.inactive
              }`}
              onClick={() => handleClick(3)}
            >
              <div className={styles.rightLine}></div>
              <div className={styles.tendotext}>
                <h1>Efficace per molte condizioni</h1>
                <p>
                  L&apos;uso regolare di formoline L112 provoca una perdita di
                  peso in tutto il corpo, che si nota spesso in aree
                  problematiche come l&apos;addome, la vita e le cosce se
                  combinata con una dieta moderata.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.tendoDetailmain}>
            <div
              className={`${styles.tendoDetail} ${
                selectedDetail === 4 ? styles.active : styles.inactive
              }`}
              onClick={() => handleClick(4)}
            >
              <div className={styles.rightLine}></div>
              <div className={styles.tendotext}>
                <h1>Migliora la capacità funzionale</h1>
                <p>
                  formoline è un sicuro dispositivo medico di Classe 3
                  certificato in tutta l&apos;UE ai sensi della direttiva
                  93/42/CEE ed è disponibile da banco per un&apos;efficace
                  gestione del peso del tuo corpo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TendoActive;
