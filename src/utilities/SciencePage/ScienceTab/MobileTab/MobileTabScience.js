import React, { useState } from 'react'
import styles from "./MobileTabScience.module.css"
import Modal from '../../ModalSciencePage/Modal';
import ProductsData from "../../../../../json/products.json";
import { getProduct, getSubscription } from "@/data/lib";

import PurchaseBox from "@/utilities/PurchaseBox";
import ProductReviews from "@/utilities/ProductReviews";


const MobileTabScience = ({data}) => {


   const {tabData} = data
  const [load, setLoad] = useState(true);
  const [product, setProduct] = useState();
  const [shopifyP, setSProduct] = useState();
  const [rechargeProduct, setRProduct] = useState();
  let ReviewData = {};
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState('/images/modalImgBrunoMd (1).webp');
  const [modalTitle, setModalTitle] = useState('Royal Collagen Peptides');
  const [modalsubTitle, setModalsubTitle] = useState('The Science of Beauty');

  var { theme, EXTERNALID, STOREFRONTID, SLUG, priceBox } = product || {};

  const getProdData = (slug) => {
    let product = ProductsData[slug];
    if (product?.EXTERNALID) {
      ReviewData = ProductReviews[product?.EXTERNALID] || {};
      const productId = `gid://shopify/Product/${product.EXTERNALID}`;
      if ((EXTERNALID || product.EXTERNALID) && shopifyP?.id != productId) {
        getProduct({ productId })
          .then((response) => {
            let product = response?.data?.product;
            setSProduct(product);
            setLoad(false);
          })
          .catch((err) => {
            console.log({ err });
          });
      }
      EXTERNALID = product.EXTERNALID;
      if (EXTERNALID && product.EXTERNALID && !rechargeProduct?.product_id) {
        getSubscription({ EXTERNALID })
          .then((data) => {
            // console.warn({data,EXTERNALID});
            if (data.plans.length) {
              let freq = [];
              if (data?.plans?.length) {
                let freq = [];
                data.plans.map((element) => {
                  if (
                    element.subscription_preferences.charge_interval_frequency
                  )
                    freq.push({
                      id: element.subscription_preferences
                        .charge_interval_frequency,
                      value:
                        element.subscription_preferences
                          .charge_interval_frequency +
                        " " +
                        element.subscription_preferences.interval_unit,
                    });
                });
                freq.sort((a, b) => {
                  if (a.value < b.value) {
                    return -1;
                  }
                  if (a.value > b.value) {
                    return 1;
                  }
                });
                setRProduct({
                  product_id: EXTERNALID,
                  subscription_preferences: freq,
                });
              }
              if (response?.selling_plan_groups?.length > 0) {
                let freqs = [];
                response.selling_plan_groups[0].selling_plans.map((plans) => {
                  if (plans.order_interval_frequency) {
                    freqs.push({
                      id: `gid://shopify/SellingPlan/${plans.selling_plan_id}`,
                      value: plans.order_interval_frequency + " Days",
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
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      product.amazonReview = ReviewData;
      setProduct(product);
    } else {
      //window.location.href = "/";
    }
  };

  const handleOpenModal = () => {
    const selectedTab = tabData[activeTab];
    setModalImage(selectedTab.modalimage);
    setModalTitle(selectedTab.title);
    setModalsubTitle(selectedTab.subTitle);
    getProdData(selectedTab.slug);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };
  // Data for the tabs
 

  return (
    <div className={styles.MobTab}>
      <div className={styles.humanTabMain}>
        <div className={styles.bottelTab}>
          {tabData.slice(0, 2).map((tab, index) => (
            <div
              key={index}
              className={`${styles.TabClick} ${activeTab === index ? styles[`activeTab${index + 1}`] : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`${styles.tabImgDiv} ${activeTab === index ? styles[`activeTab${index + 1}`] : ''}`}>
                <img src={tab.tabImage} alt="" />
              </div>
              <div className={styles.TabImgTitle}>
                <h1>{tab.title}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottelTab2}>
          {tabData.slice(2).map((tab, index) => (
            <div
              key={index + 2}
              className={`${styles.TabClick} ${activeTab === index + 2 ? styles[`activeTab${index + 3}`] : ''}`}
              onClick={() => setActiveTab(index + 2)}
            >
              <div className={`${styles.tabImgDiv} ${activeTab === index + 2 ? styles[`activeTab${index + 3}`] : ''}`}>
                <img src={tab.tabImage} alt="" />
              </div>
              <div className={styles.TabImgTitle}>
                <h1>{tab.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottelDecribtion}>
        <div className={styles.TabingDetailsDiv}>
          <div className={styles.TabimgHuman}>

            <img src={tabData[activeTab].videoSrc} alt="Active Tab GIF" className={styles.gifImage} />
          </div>
          <div className={styles.humanDecribtionDiv}>
            {tabData[activeTab].content.map((item, index) => (
              <div key={index} className={styles.humanDecribtion}>
                <h1>{item.heading}</h1>
                <p>{item.description}</p>
                <div className={`${styles.tabHR} ${styles[`tabHR${activeTab + 1}`]}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.mobBuybtn}>
          <button onClick={handleOpenModal}>{tabData[activeTab].buyButton}</button>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
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
    </div>
  )
}

export default MobileTabScience
