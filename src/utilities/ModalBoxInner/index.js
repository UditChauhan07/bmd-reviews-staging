import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Spinner from "../Loader/index1";
import { AddtoCart, getSubscription } from "@/data/lib";
import Modal from "../SciencePage/ModalSciencePage/Modal";

const ModalBoxInner = ({
  isOpen,
  content,
  ModalHandler,
  clickedType,
  externalId,
  productVariantId,
  themed = false,
}) => {
  const [type, setType] = useState(clickedType);
  const [quantity, setQuantity] = useState(1);
  const [freq, setFreq] = useState();
  const [sellingPlan, setPlan] = useState([]);
  const [variantId, setVariantId] = useState();
  let client = undefined;
  const [shopifyP, setSProduct] = useState();
  const [cartLoad, setCartLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [frequpdate, setFrequpdate] = useState("");
  console.log(content, "12345678--->>>");


  const typeHandler = (e) => {
    const { name, value } = e.target;
    setType(value);
    setQuantity(1);
  };
  const QUANTITY_OPTIONS = [...Array(content?.maxQty).keys()].map((n) => n + 1);


  useEffect(() => {
    if (externalId) {
      getSubscription({ id: externalId }) && false
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
            setFreq(freqs[0].id);
            setPlan(freqs);
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
            setFreq(freqs[0].id);
            setPlan(freqs);
          }
        })
        .catch((err) => {
          console.error({ err });
        });
    } else {
      window.location.href = "/";
    }
    setType(clickedType);
  }, [clickedType]);
  const QtyHandler = (e) => {
    const { name, value } = e.target;
    setType(value);
    setQuantity(1);
  };
  const autoQtyHandler = () => {
    setQuantity(2);
  };
  const QtyIncrement = (e) => {
    const { value } = e.target;
    setQuantity(parseInt(value));
  };

  const AddToCartHandler = () => {
    setCartLoad(true);
    let cId = localStorage.getItem("e6S4JJM9G");
    if (cId == "undefined") cId = null;
    let lineItemsToAdd = [];
    // console.log({ type, productVariantId, quantity, freq });
    if (type == "Onetime") {
      lineItemsToAdd = [
        {
          merchandiseId: productVariantId,
          quantity,
        },
      ];
    } else {
      lineItemsToAdd = [
        {
          merchandiseId: productVariantId,
          quantity,
          sellingPlanId: freq,
        },
      ];
    }
    AddtoCart({ lineItems: lineItemsToAdd })
      .then((response) => {
        if (response?.data?.cartCreate?.cart?.checkoutUrl) {
          setCartLoad(false);
          if (content?.onetimeBox?.discount && type == "Onetime") {
            window.location.href = `${response?.data?.cartCreate?.cart?.checkoutUrl}?discount=${content?.onetimeBox?.discount}`;
          } else {
            // let id = response?.data?.cartCreate?.cart?.id;
            // localStorage.setItem("e6S4JJM9G", id);
            // window.location.href = "/carrello";
            window.location.href = `${response?.data?.cartCreate?.cart?.checkoutUrl}`;
          }
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  // State to control the modal visibility

  // Function to show the modal
  const openModal = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  if (isModalOpen) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  const updateSubscriptionDetails = (selectedFreq) => {
    let regex = /\d+\s*giorni/gi;
    const newDetails = String(content.subscriptionBox.desc || "").replace(
      regex,
      selectedFreq
        ? selectedFreq + " "
        : content?.freq?.length
        ? content?.freq[0]?.value
        : "25 giorni"
    );
    setFrequpdate(newDetails);
  };

  useEffect(() => {
    const initialFreq = content?.freq?.length ? content?.freq[0]?.value : "15 giorni";
    setFreq(initialFreq);
    updateSubscriptionDetails(initialFreq);
  }, [content]);



  return (
    <section>
      {isModalOpen === true && (
        <Modal show={isModalOpen} onClose={handleCloseModal}>
          <div className={styles.modalHeader}>
            <h1>14 giorni soddisfatti o rimborsati.</h1>
            <div className={styles.p_scroll}>
              <p>
                Siamo sicuri che il nostro Cliente sarà soddisfatto dei prodotti
                Bruno MD, tuttavia, se per qualsiasi motivo non lo sarà,
                rimborseremo il primo ordine per intero meno i costi della
                spedizione. Onoriamo un rimborso completo se il nostro servizio
                clienti viene contattato entro 14 giorni lavorativi dalla data
                del ricevimento dell&#39;ordine. Non è necessario restituire il
                prodotto (se è il primo ordine ricevuto); tuttavia, accogliamo
                con favore il tuo feedback per aiutarci a migliorare la qualità
                del nostro servizio.
              </p>
            </div>
          </div>
        </Modal>
      )}

      {isOpen === true && (
        <div
          className={styles.holder}
          style={themed ? { background: themed } : {}}
        >
          {isOpen && (
            <div
              className={styles.exitButton}
              onClick={ModalHandler}
              style={themed ? { border: "1px solid #fff" } : {}}
            >
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <g fill="white" fillRule="evenodd">
                  <path fill={themed ? "none" : "#FFBF3C"} d="M0 0h40v40H0z" />
                  <path
                    fill={themed ? "#fff" : "#00A0DD"}
                    fillRule="nonzero"
                    d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z"
                  />
                </g>
              </svg>
            </div>
          )}
          <div className={styles.conHolder}>
            <div className={styles.container}>
              <div className={styles.boxOne}>
                <div
                  style={
                    themed
                      ? {
                        fontFamily: "var(--bmd-font-Secondary)",
                        fontWeight: "bolder",
                      }
                      : { color: "#ffbf3c" }
                  }
                >
                  {content.title1}
                </div>
                <div
                  style={
                    themed ? { fontFamily: "var(--bmd-font-Secondary)" } : {}
                  }
                >
                  {content.title2}
                </div>
              </div>
              <div className={styles.boxHide}>
                <img
                  width="150"
                  height="150"
                  src={content?.productImg?.src}
                  alt={content?.productImg?.alt || "..."}
                  className="styles_imageSource__xZJZ_"
                />
              </div>
              <div className={styles.boxTwo}>
                <input
                  id="Subscribe"
                  type="radio"
                  className={styles.hide}
                  onClick={typeHandler}
                  name="QTY"
                  value={"Subscribe"}
                  checked={type == "Subscribe" ? true : false}
                />
                <label
                  className={themed ? styles.themeLabel : styles.label}
                  for={"Subscribe"}
                  style={themed && type == "Subscribe" ? { color: themed } : {}}
                >
                  <p>
                    €{content.subscriptionBox.price.toFixed(2)}{" "}
                    {content?.price && (
                      <span className={styles.strike}>
                        €{content?.price.toFixed(2)}
                      </span>
                    )}
                  </p>
                  <p className={styles.ft12}>
                    {content.subscriptionBox.modalBtnText}
                  </p>
                </label>
              </div>
              <div className={styles.boxThree}>
                <input
                  id="Onetime"
                  type="radio"
                  className={styles.hide}
                  checked={type == "Onetime" ? true : false}
                  name="QTY"
                  value={"Onetime"}
                  onClick={typeHandler}
                />
                <label
                  className={themed ? styles.themeLabel : styles.label}
                  for={"Onetime"}
                  style={type == "Onetime" && themed ? { color: themed } : {}}
                >
                  <p>
                    €{content.onetimeBox.price.toFixed(2)}{" "}
                    {content.onetimeBox.price != content?.price &&
                      content?.price && (
                        <span className={styles.strike}>
                          €{content?.price.toFixed(2)}
                        </span>
                      )}
                  </p>
                  <p className={styles.ft12}>
                    {content.onetimeBox.modalBtnText}
                  </p>
                </label>
              </div>
              <div className={styles.boxFour}>
                <img
                  width="150"
                  height="150"
                  src={content?.productImg.src}
                  alt={content?.productImg?.alt || "..."}
                  className="styles_imageSource__xZJZ_"
                />
              </div>
              <div
                onClick={openModal}
                className={styles.boxFive}
                dangerouslySetInnerHTML={{
                  __html: type == "Onetime" ? "" : frequpdate,
                }}
              />
              <div
                className={styles.boxSix}
                dangerouslySetInnerHTML={{ __html: content.onetimeBox.desc }}
              />

                  <div className={styles.boxSeven}>
      {type == "Subscribe" ? (
        <div className={styles.freqHolder}>
          <p>Disponibilita&apos; immediata.</p>
          <label className={styles.selectLabel}>Consegna ogni:</label>
          <select
            className={styles.selectHolder}
            onChange={(e) => {
              const selectedFreq = e.target.value;
              setFreq(selectedFreq);
              updateSubscriptionDetails(selectedFreq); 
            }}
          >
            {sellingPlan.length > 0 &&
              sellingPlan.map((element) => (
                <option value={element.value} key={element.id}>
                  {element.value}
                </option>
              ))}
          </select>
        </div>
                ) : (
                  <>
                    {content?.onetimeBox?.freeShip && (
                      <div className={styles.boxTen}>
                        <div>
                          <p>Buy 2 Get</p>
                          <p>
                            <span>FREE SHIPPING</span>
                          </p>
                        </div>
                        <img
                          src="\images\landing\free-shipping-32.png"
                          alt="..."
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className={styles.boxEight}>
                <div className={styles.qtyHolder}>
                <p className={styles.VisibleHidden} >Disponibilita immediata.</p>

                  <label className={styles.selectLabel}>Quantita&apos;:</label>
                  <select
                    className={styles.selectHolder}
                    onChange={QtyIncrement}
                  >
                    {QUANTITY_OPTIONS.map((val) => (
                      <option
                        key={val}
                        value={val}
                        selected={quantity == val ? true : false}
                      >
                        {`${val}`}
                      </option>
                    ))}
                  </select>
                  <p
                    style={{
                      marginLeft: "3.5rem",
                      marginTop: "2px",
                      fontSize: "12px",
                    }}
                  >
                    {quantity} {quantity == 1 ? "confezione" : "confezioni"} da
                    20 bustine/sticks
                  </p>
                </div>
              </div>
              <div className={styles.boxNight}>
                <div className={styles.mobHide}></div>
                <div className={styles.btnContainer}>
                  <p
                    className={themed ? styles.btnThemed : styles.btn}
                    style={themed ? { color: themed } : {}}
                    onClick={() => {
                      AddToCartHandler();
                    }}
                  >
                    {cartLoad ? (
                      <Spinner
                        className={styles.spinner}
                        size={20}
                        theme={"#0033a1"}
                      />
                    ) : (
                      <>
                        {type == "Subscribe"
                          ? "Acquisto periodico"
                          : "Aggiungi al carrello"}
                      </>
                    )}
                  </p>
                  {type == "Onetime" && content?.onetimeBox?.freeShip && (
                    <div
                      className={styles.boxTen}
                      onClick={autoQtyHandler}
                      value="2"
                    >
                      <div>
                        <p>Buy 2 Get</p>
                        <p>
                          <span>FREE SHIPPING</span>
                        </p>
                      </div>
                      <img src="\images\landing\free-shipping-32.png" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ModalBoxInner;
