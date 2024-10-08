import React, { useState, useRef, useEffect } from "react";
import data from "../../json/science-page.json";
import Sciencedesktoppage from "@/utilities/SciencePage/SciencedesktopPage/sciencedesktoppage";
import Footer from "@/utilities/Footer/";
import BottomBar from "@/utilities/BottomBar";
import data1 from "../../json/layout.json";
import AnnouncementBar from "@/utilities/announcementBar";
import FeatureInfo from "@/utilities/FeatureInfo";
import SubscriptionBar from "@/utilities/SubscriptionBar";
import ModalBoxInner from "@/utilities/ModalBoxInner";
import landingData from "../../json/landing.json";
import { useMatchMedia } from "@/utilities/Sections/Hooks/useMatchMedia";
import PriceBoxModal from "@/utilities/ModalBoxInner/priceBox";
import { getProduct, getSubscription } from "@/data/lib";

function SciencePage({}) {
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
  return (
    <div>
      <AnnouncementBar
        announcement={data1["EU"].announcementBar.title}
        theme={{
          textColor: data1["EU"].announcementBar.textColor,
          backgroundColor: data1["EU"].announcementBar.backgroundColor,
        }}
      />
      <Sciencedesktoppage data={data} />
      <FeatureInfo infoBanners={data1["EU"].featureInfo} />
      <Footer data={data1["EU"].footer2} />
      <BottomBar contents={data1["EU"].bottomBar} />
      {pageData?.bottomBar && (
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
              // version={version}
              themed={pageData.theme}
            />
          )}
        </>
      )}
      {!isOpen && (
        <SubscriptionBar
          content={pageData.bottomBar}
          ModalHandler={ModalHandler}
          active={clickedType}
          themed={pageData.theme}
          themedb={pageData.theme2}
        />
      )}
    </div>
  );
}

SciencePage.hideLayout = true;
//SciencePage.hideHeader=true;

export default SciencePage;
