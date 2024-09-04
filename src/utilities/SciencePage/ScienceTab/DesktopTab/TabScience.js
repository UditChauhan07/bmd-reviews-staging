import React, { useState, useRef } from "react";
import styles from './TabScience.module.css'
import Modal from '../../ModalSciencePage/Modal';
import MobileTabScience from '../MobileTab/MobileTabScience';
import ProductsData from "../../../../../json/products.json";
// import ProductsReviews from "@/utilities/ProductReviews";
import PurchaseBox from "@/utilities/PurchaseBox";
import { getProduct, getSubscription } from "@/data/lib";


function TabScience({data}) {


  const{slides3}=data
//-----purchase box----
const [load, setLoad] = useState(true);
  const [product, setProduct] = useState();
  const [shopifyP, setSProduct] = useState();
  const [rechargeProduct, setRProduct] = useState();
  const targetRef = useRef(null);
  //------purchase box-----

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState('/images/modalImgBrunoMd (1).webp');
  const [modalTitle, setModalTitle] = useState('Royal Collagen Peptides');
  const [modalsubTitle, setModalsubTitle] = useState('The Science of Beauty');


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };



  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };


  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  var {
    title,
    details,
    newsletter,
    fourStepProcess,
    theme,
    EXTERNALID,
    STOREFRONTID,
    SLUG,
    benefits,
    priceBox,
    seo,
    testimonial,
    homeGallery,
    review,
  } = product || {};

  const getProductData = (slug) => {
    console.log("sss",slug);
        let product = ProductsData[slug];
        console.log("sss1",product);
        if (product?.EXTERNALID) {
          const productId = `gid://shopify/Product/${product.EXTERNALID}`;
          if (product?.EXTERNALID && shopifyP?.id != productId) {
            getProduct({ productId })
              .then((response) => {
                let product = response?.data?.product;
                setSProduct(product);
                console.log("kkkkk");
                setLoad(false);
              })
              .catch((err) => {
                console.log({ err });
              });
          }
          var EXTERNALID = product?.EXTERNALID;
          if (EXTERNALID && rechargeProduct?.product_id != EXTERNALID) {
            getSubscription({ id: EXTERNALID })
              .then((response) => {
                if (response?.plans?.length) {
                  let freqs = [];
                  response.plans.map((element) => {
                    if (
                      element.subscription_preferences.charge_interval_frequency
                    )
                      freqs.push({
                        id: `gid://shopify/SellingPlan/${element.external_plan_id}`,
                        value:
                          element.subscription_preferences
                            .charge_interval_frequency + " giorni",
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
                    product_id: EXTERNALID,
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
          setProduct(product);
        } else {
          //window.location.href = "/";
        }
  };
  console.log("jjj",product);
  console.log("jjj5",shopifyP?.variants.edges[0].node?.id);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleShow = (imageSrc, title, subTitle , product) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalsubTitle(subTitle)
    getProductData(product);
    setIsModalOpen(true);
  };



 

  return (
    <div>
      {/* Custom Modal Start */}

      {isModalOpen && (
        <Modal show={isModalOpen}
          onClose={handleCloseModal}>
          <div className={styles.mainModalDiv}>

            <div className={styles.modalImg}>
              <div className={styles.modalContentData}>
                <div className={styles.brunoImgModal}>
                  <img src={modalImage} alt='' />
                </div>
                <div className={styles.modaltitle}>
                  <h6>{modalTitle}</h6>
                  <p>{modalsubTitle}</p>
                </div>
              </div>
            </div>

            <div className={styles.modalContent}>
                {" "}
                {shopifyP ? (
                  <PurchaseBox
                    data={{
                      EXTERNALID,
                      STOREFRONTID,
                      SLUG,
                      price: shopifyP?.variants?.edges?.length
                        ? parseFloat(
                            shopifyP?.variants.edges[0].node?.price?.amount
                          )
                        : 0,
                      theme,
                      priceBox,
                      freq: rechargeProduct?.subscription_preferences,
                    }}
                    variantId={shopifyP?.variants.edges[0].node?.id}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

        </Modal>
      )}

      {/* Custom Modal  End */}

      {/*..... Human  Desktop Tab Section Start .....*/}

      <div className={`container ${styles.brunoDecription2}`}>
        <div className={styles.bruno3000}>
          <h1> La ricetta per migliorare te stesso
          </h1>
        </div>
      </div>
      <div className={styles.imgRotation}>
        <img src='/images/rotaionImg1.webp' />
      </div>
      <div className={styles.tabMain} >
        <div className={`container ${styles.customContainer}`}>
          <div className={styles.humanTab}>
            <div className={currentIndex === 0 ? styles.tabdiv : styles.tabdiv33} onClick={() => handleClick(0)}>
              <div className={styles.yellodiv}
              >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/02-BMD-Tendoactive_Plus-9O3A3003-v2.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Tendoactive Plus</h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.purpolTooltip}`}>  Recupero integrale dei tendini e riduzione del dolore

                        <span> Recupero integrale dei tendini e riduzione del dolore
                        </span>
                      </p>
                    </div>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcoloryellow}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd (1).webp', 'Royal Collagen Peptides', 'The Science of Beauty',"tendoactive-plus-20-stick")}>Buy Now</button></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className={currentIndex === 1 ? styles.tabdiv2 : styles.tabdiv33} onClick={() => handleClick(1)}>
              <div className={styles.greendiv} >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel1.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>CholestQ10 60 v-caps</h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.blueTooltip}`}> Complete heart, liver, & cholesterol care (HDL, LDL, TG)
                        <span>Complete heart, liver, & cholesterol care (HDL, LDL, TG)</span>
                      </p>
                    </div>

                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorGreen}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd2.webp', 'CholestQ10 60 v-caps', 'The Science of Heart Health',"cholestq10-60-v-caps-30-servings")}>Buy Now</button></div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className={currentIndex === 2 ? styles.tabdiv3 : styles.tabdiv33} onClick={() => handleClick(2)}>
              <div>
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel2.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Riboflam 90 v-caps</h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.orangeTooltip}`}> Immunity + inflammation, cardio, liver, digestive health
                        <span>Immunity + inflammation, cardio, liver, digestive health</span>
                      </p>
                    </div>
                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorOrange}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd3.webp', 'Riboflam 90 v-caps', 'The Science of Longevity, "riboflam-90-v-caps-30-servings"')}>Buy Now</button></div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className={currentIndex === 3 ? styles.tabdiv4 : styles.tabdiv33} onClick={() => handleClick(3)}>
              <div className={styles.skyBluediv} >
                <div className={styles.yellodivContent}>
                  <div className={styles.medImg}>
                    <img src='/images/medBottel3.webp' alt='' />
                  </div>
                  <div className={styles.medContent}>
                    <h6>Bluerex Vision 60 softgels </h6>
                    <b>Bruno MD</b>
                    <div className={styles.box}>
                      <p className={`${styles.tooltip2} ${styles.skyTooltip}`}> Dry eye, Computer Vision Syndrome, macular health, blue light shield
                        <span>Dry eye, Computer Vision Syndrome, macular health, blue light shield</span>
                      </p>
                    </div>

                    <div className={styles.BuyBtn}>
                      <div className={styles.medcolorSky}></div>
                      <div><button onClick={() => handleShow('/images/modalImgBrunoMd4.webp', 'Bluerex Vision 60 softgels', 'The Science of Sight',"bluerex-vision-60-caps-30-servings")}>Buy Now</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.humanImg}>
            <div className={styles.dotsDiv}>
              <span className={styles[slides3[currentIndex].className2]}></span>
              <span className={styles[slides3[currentIndex].className3]}></span>
              <span className={styles[slides3[currentIndex].className4]}></span>
              <span className={styles[slides3[currentIndex].className5]}></span>
              <span className={styles[slides3[currentIndex].className6]}></span>
            </div>
            <div className={styles.humanpng}>
              <img src={slides3[currentIndex].image} alt="Main Slide" />
            </div>
          </div>
          <div className={styles.humanContent}>
            <div className={styles.HumanDetails}>

              <div className={styles[slides3[currentIndex].className]}></div>
              <div className={styles.humanText}>
                <h6>{slides3[currentIndex].text1}</h6>
                <p>{slides3[currentIndex].dec}</p>
              </div>
            </div>
            <div className={styles.HumanDetails}>
              <div className={styles[slides3[currentIndex].className]}></div>
              <div className={styles.humanText}>
                <h6>{slides3[currentIndex].text2}</h6>
                <p>{slides3[currentIndex].dec2}</p>
              </div>
            </div>

            <div className={styles.HumanDetails}>
              <div className={styles[slides3[currentIndex].className]}></div>
              <div className={styles.humanText}>
                <h6>{slides3[currentIndex].text3}</h6>
                <p>{slides3[currentIndex].dec3}</p>
              </div>
            </div>
            <div className={styles.HumanDetails}>
              <div className={styles[slides3[currentIndex].className]}></div>
              <div className={styles.humanText}>
                <h6>{slides3[currentIndex].text4}</h6>
                <p>{slides3[currentIndex].dec4}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.imgRotation2}>
        <img src='/images/rotaionImg1.webp' />
      </div>
      {/*..... MoblieTab Section Component Start .....*/}
      <MobileTabScience  data= {data} />
      {/*..... MoblieTab Section Component Start .....*/}

    </div>
  )
}

export default TabScience
