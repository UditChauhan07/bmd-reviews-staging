import React, { useState, useEffect, useReducer } from "react";
import styles from "./styles.module.css";
import SupplementalInfo from "@/utilities/SupplementalInfo";
import Spinner from "@/utilities/Loader/index1";
import { AddtoCart, addCartItems } from "@/data/lib";
import { useRouter } from "next/navigation";

const PriceBox = ({ isActive, data, variantId }) => {
  const router = useRouter();
  const [learnMore, setLearnMore] = useState(false);
  const [detailsMore, setDetailsMore] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [subscriptionInit, setInit] = useState(false);
  const [currentShippingInterval, setCurrentShippingInterval] = useState();
  const [freqText, setFreq] = useState();
  const [color, setColor] = useState(
    data?.priceBox?.isCheckoutTheme ? data.theme : "#ffffff"
  );
  const [background, setBackgroundColor] = useState(
    data?.priceBox?.isCheckoutTheme ? "#ffffff" : data.theme
  );
  useEffect(() => {
    if (isActive == 2 && data?.freq?.length > 0) {
      setCurrentShippingInterval(data?.freq[0]?.id);
      if (!subscriptionInit) {
        setIsAddingToCart(false);
        setInit(true);
      }
    }
    if (isActive == 1) {
      if (!subscriptionInit) {
        setIsAddingToCart(false);
        setInit(true);
      }
    }
    if (data?.priceBox?.isCheckoutTheme) {
      const onMouseEnter = () => {
        setColor("#ffffff" || "#56008C");
        setBackgroundColor(data?.theme || "#56008C");
      };

      const onMouseLeave = () => {
        setColor(data.theme);
        setBackgroundColor("#ffffff");
      };
      document
        .getElementById("checkoutBtnContainer")
        ?.addEventListener("mouseenter", onMouseEnter);
      document
        .getElementById("checkoutBtnContainer")
        ?.addEventListener("mouseleave", onMouseLeave);
    }
  }, [data]);
  if (!data) return null;
  const QUANTITY_OPTIONS = [...Array(data?.priceBox.maxQty).keys()].map(
    (n) => n + 1
  );
  const buttonText =
    isActive == 2
      ? data.priceBox?.subscribe?.btnText
      : data.priceBox?.oneTime?.btnText;
  const handleQuantityChange = (e) => {
    const { value } = e.target;
    setQuantity(+value);
  };

  const handleFreqChange = (e) => {
    const { value } = e.target;
    setCurrentShippingInterval(value);
    data.freq.map((element) => {
      if (element.id == value) {
        setFreq(element.value);
      }
    });
  };

  const cartHandler = () => {
    setIsAddingToCart(true);
    let cId = localStorage.getItem("e6S4JJM9G");
    let lineItemsToAdd = [];
    if (isActive == 1) {
      lineItemsToAdd = [
        {
          merchandiseId: variantId,
          quantity,
        },
      ];
    } else {
      if (currentShippingInterval) {
        lineItemsToAdd = [
          {
            merchandiseId: variantId,
            quantity,
            sellingPlanId: currentShippingInterval,
          },
        ];
      } else {
        return;
      }
    }
    if (data.priceBox.isCheckoutRedirected) {
      AddtoCart({ lineItems: lineItemsToAdd })
        .then((response) => {
          let URL = response.data.cartCreate.cart.checkoutUrl;
          window.location.href = URL;
        })
        .catch((err) => {
          console.log({ err });
        });
    } else {
      if (cId) {
        addCartItems({ items: lineItemsToAdd })
          .then((response) => {
            if (response?.data?.cartLinesAdd?.userErrors?.length) {
              if (response?.data?.cartLinesAdd?.userErrors[0].message) {
                if (
                  response?.data?.cartLinesAdd?.userErrors[0].message ==
                  "Il carrello specificato non esiste."
                ) {
                  AddtoCart({ lineItems: lineItemsToAdd })
                    .then((response) => {
                      let id = response?.data?.cartCreate?.cart?.id;
                      localStorage.setItem("e6S4JJM9G", id);
                      // router.push('/carrello')
                      window.location.href = "/carrello";
                    })
                    .catch((err) => {
                      console.log({ err });
                    });
                }
              }
            } else {
              // router.push('/carrello')
              window.location.href = "/carrello";
            }
          })
          .catch((err) => {
            console.log({ err });
          });
      } else {
        AddtoCart({ lineItems: lineItemsToAdd })
          .then((response) => {
            let id = response?.data?.cartCreate?.cart?.id;
            localStorage.setItem("e6S4JJM9G", id);
            // router.push('/carrello')
            window.location.href = "/carrello";
          })
          .catch((err) => {
            console.log({ err });
          });
      }
    }
  };
  let regex = /\d\d giorni/gi;
  let subscriptionDetails = data.priceBox.subscriptionDetails.replaceAll(
    regex,
    freqText
      ? freqText + " giorni"
      : data?.freq?.length
      ? data?.freq[0]?.value
      : "25 giorni"
  );
  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionContent}>
        <div style={styles.row}>
          {isActive == 2 && (
            <>
              <div className={styles.section2} id="section2">
                {data.priceBox.subscriptionDetails ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: subscriptionDetails,
                    }}
                  />
                ) : (
                  <>
                    <p>
                      Non perdere l&apos;opportunita&apos; di risparmiare il{" "}
                      <b>{data.priceBox.discount}%</b> su quest&apos;ordine e
                      sulle successive consegne automatiche
                    </p>
                    <ul>
                      <li className={styles.liDecore}>Nessun costo</li>
                      <li className={styles.liDecore}>Cancella quando vuoi</li>
                    </ul>
                  </>
                )}
              </div>
              <div
                className={styles.section3}
                style={{ color: data.theme }}
                onClick={() => setLearnMore(!learnMore)}
              >
                {data?.priceBox.moreInfoBtnText && (
                  <>
                    {" "}
                    {data?.priceBox.moreInfoBtnText}
                    <div
                      className={learnMore ? styles.upArrow : styles.downArrow}
                    >
                      <svg
                        className="flickity-button-icon"
                        viewBox="0 0 100 100"
                      >
                        <path
                          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                          className="arrow"
                          transform="translate(100, 100) rotate(180) "
                        ></path>
                      </svg>
                    </div>
                  </>
                )}
              </div>
              {learnMore && (
                <div className={styles.m5}>
                  <SupplementalInfo
                    moneyBackInfo={data?.priceBox.moneyBackInfo}
                    termPurchase={data?.priceBox?.termPurchase}
                    interval={freqText || data?.freq[0].value}
                  />
                </div>
              )}
            </>
          )}
          <div
            className={styles.section4}
            id={data.priceBox.modalPriceBoxContainerID + "_stockHolder"}
            style={
              data?.priceBox?.isStockBack
                ? { color: "#000" }
                : data?.priceBox?.isStockTheme
                ? { color: data.theme }
                : {}
            }
          >
            {data?.priceBox?.stock}
          </div>
          <div className={styles.flex}>
            <div className={styles.selectDiv}>
              <div className={styles.quntity}>
                {data.priceBox?.qtyLabelText
                  ? data.priceBox?.qtyLabelText
                  : "Quantita'"}
                :
              </div>
              <select
                className={styles.selectNon}
                style={
                  data.priceBox.isPriceBoxTheme ? { color: data.theme } : {}
                }
                onChange={handleQuantityChange}
              >
                {QUANTITY_OPTIONS.map((val) => (
                  <option key={val} value={val}>
                    {`${val}`}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.section5_2}>
              {data.priceBox.qtyUnitMultiplierLabel &&
                quantity * data.priceBox.defaultQtyMultiplayer}{" "}
              {data.priceBox.qtyUnitMultiplierLabel}
              {data.priceBox.qtyExtraDesc && (
                <>
                  {" "}
                  (
                  {data.priceBox.qtyMultiplierShowOnExtraDesc &&
                    quantity * data.priceBox.defaultQtyMultiplayer}{" "}
                  {data.priceBox.qtyExtraDesc})
                </>
              )}
            </div>
          </div>
          {isActive == 2 && (
            <div className={styles.section6_2}>
              <b className={styles.freqLabel}>
                {data.priceBox?.freqLabelText
                  ? data.priceBox?.freqLabelText
                  : "Consegna ogni"}
                :
              </b>
              <select
                className={styles.freq}
                onChange={handleFreqChange}
                style={
                  data.priceBox.isPriceBoxTheme ? { color: data.theme } : {}
                }
              >
                {data.freq?.length &&
                  data.freq?.map((val) => (
                    <option key={val.id} value={val.id}>
                      {val.value}
                    </option>
                  ))}
              </select>
            </div>
          )}
          {/*  onClick={CreateCart} */}
          <div className={styles.flex}>
            <div
              className={styles.buyNowBtn}
              id=""
              style={
                !subscriptionInit
                  ? { background: data.theme }
                  : data?.priceBox?.isCheckoutTheme
                  ? {
                      background,
                      border: `2px solid ${data.theme}`,
                      color,
                      fontWeight: "bolder",
                    }
                  : {}
              }
              onClick={() => cartHandler()}
            >
              <p>
                {isAddingToCart ? (
                  <Spinner className={styles.spinner} size={20} theme={color} />
                ) : (
                  buttonText
                )}
              </p>
            </div>
          </div>
          {isActive == 1 && data?.priceBox?.oneTime?.accordanTitle && (
            <div
              style={{ paddingBottom: "2rem" }}
              id={data.priceBox.modalPriceBoxContainerID + "_detailsHolder"}
            >
              <div
                className={styles.section7}
                onClick={() => setDetailsMore(!detailsMore)}
              >
                <b>{data.priceBox.oneTime.accordanTitle}</b>
                <div
                  className={detailsMore ? styles.upArrow : styles.downArrow}
                >
                  <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(180) "
                    ></path>
                  </svg>
                </div>
              </div>
              {detailsMore && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.priceBox.oneTime.accordanBody,
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PriceBox;
