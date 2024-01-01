import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import { WistiaHero } from "@/utilities/WistiaHero";
import AnnouncementBar from "@/utilities/announcementBar";
import PatnerData from "../../../json/parters.json";
import landingData from "../../../json/landing.json";
import Chat from "@/utilities/ChatBubble";
import PageHead from "@/utilities/Head";
import Footer from "@/utilities/Footer/";
import { NewsLetter } from "@/utilities/NewsLetter";
import ProductReviews from "@/utilities/ProductReviews";
import ImageAside from "@/utilities/Sections/ImageAside";
import ModalBoxInner from "@/utilities/ModalBoxInner";
import { useEffect, useRef, useState } from "react";
import ProductArticleModal from "@/utilities/Sections/ProductArticleModal";
import ProductTrustBadges from "@/utilities/ProductTrustBadges";
import Testimonial from "@/utilities/Testimonial";
import FourStepProcess from "@/utilities/FourStepProcess";
import ReasonsToBelieve from "@/utilities/ReasonsToBelieve";
import SubscriptionBar from "@/utilities/SubscriptionBar";
import ProductSlideAccordion from "@/utilities/productSlideAccordion";
import StickyNav from "@/utilities/Nav";
import dynamic from "next/dynamic";
import { getProduct, getSubscription } from "@/data/lib";
import Loader2 from "@/utilities/Loader/index2";
import PriceBoxModal from "@/utilities/ModalBoxInner/priceBox";
import { useMatchMedia } from "@/utilities/Sections/Hooks/useMatchMedia";

const LandingPage = ({ version, script, page }) => {
  const [shopifyP, setSProduct] = useState();
  const [ rechargeProduct, setRProduct] = useState();
  const DynamicGalleryComponent = dynamic(
    () => import("@/utilities/HomeGallery"),
    {
      loading: () => (
        <div class="center-body" style={{ height: "200px" }}>
          <div class="loader-circle-2"></div>
        </div>
      ),
    }
  );
  const VideoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedType, setClickedType] = useState("Subscribe");

  const ModalHandler = (e) => {
    const { value } = e.target.dataset;
    if (value) {
      setClickedType(value);
    } else {
      setClickedType("Subscribe");
    }
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    if (pageData.externalId) {
      const productId = `gid://shopify/Product/${pageData.externalId}`;
      getProduct({productId}).then((response)=>{
        let product = response?.data?.product;
        setSProduct(product)
      }).catch((err)=>{
        console.log({err});
      })

    getSubscription({ id: pageData.externalId })
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
  
  },[])

  const pageData = landingData[page] || {};
  const [isDesktopModal] = useMatchMedia("(min-width: 767px)", true);
  if(!shopifyP) return <Loader2 />
  return (
    <>
      {pageData && (
        <>
          <PageHead content={pageData.seo} />
          {pageData?.announcement && (
            <AnnouncementBar
              announcement={pageData.announcement.title}
              theme={pageData.announcement.theme}
              ModalHandler={ModalHandler}
            />
          )}
          {pageData?.nav && <StickyNav theme={pageData.announcement.theme} />}
          {pageData?.wistiaVideoId && (
            <WistiaHero
              id={pageData.wistiaVideoId}
              content={{ buyNow: true, ModalHandler, btnLandingText: "Shop" }}
              theme={pageData.announcement.theme}
              video={pageData.video}
            />
          )}
          {pageData?.bottomBar && (
            <>
            {pageData?.isPriceBoxModal &&isDesktopModal ?
              <PriceBoxModal
              content={pageData.bottomBar}
              priceBox={{EXTERNALID:pageData.externalId,priceBox:pageData.ProductArticleModal.priceBox,freq:rechargeProduct?.subscription_preferences,theme:pageData.theme,price: shopifyP?.variants?.edges?.length
                ? parseInt(shopifyP.variants.edges[0].node?.price?.amount)
                : 0}}
                variantId={pageData.variantId}
              isOpen={isOpen}
              theme={pageData.theme}
              ModalHandler={ModalHandler}
              /> :<ModalBoxInner
              content={pageData.bottomBar}
              isOpen={isOpen}
              ModalHandler={ModalHandler}
              externalId={pageData.externalId}
              productVariantId={pageData.variantId}
              clickedType={clickedType}
              version={version}
              themed={pageData.theme}
            />}
            </>
          )}
          {PatnerData && <MarkqueCarousel image={PatnerData} />}
          {pageData?.ImageAside && (
            <ImageAside
              content={pageData.ImageAside}
              theme={pageData.announcement.theme}
            />
          )}
          {pageData?.ProductArticleModal && (
            <ProductArticleModal
            priceBox={{EXTERNALID:pageData.externalId,priceBox:pageData.ProductArticleModal.priceBox,freq:rechargeProduct?.subscription_preferences,theme:pageData.theme,price: shopifyP?.variants?.edges?.length
              ? parseInt(shopifyP.variants.edges[0].node?.price?.amount)
              : 0}}
              variantId={pageData.variantId}
              content={pageData.ProductArticleModal}
              ModalHandler={ModalHandler}
            />
          )}
          {pageData?.ProductSlideAccordion && (
            <ProductSlideAccordion
              content={pageData.ProductSlideAccordion}
              theme={pageData.theme}
              ModalHandler={ModalHandler}
            />
          )}
          {pageData?.ProductTrustBadges && (
            <ProductTrustBadges
              images={pageData.ProductTrustBadges}
              backgroundColor={"rgb(0, 51, 161)"}
            />
          )}
          {pageData?.testimonial && (
            <Testimonial
              content={{
                slides: pageData.testimonial,
                theme: pageData.theme,
                invertDesign: false,
              }}
            />
          )}
          {pageData?.FourStepProcess && (
            <FourStepProcess
              processCards={pageData.FourStepProcess.items}
              theme={pageData.theme}
              header={pageData.FourStepProcess.title}
              stepAlignment={true}
              buttonTittle={"Leggi di più"}
              centerAlign
            />
          )}
          {pageData?.ReasonsToBelieve && (
            <ReasonsToBelieve
              ingredients={pageData.ReasonsToBelieve.ingredients}
              content={pageData.ReasonsToBelieve.items}
              versionV2={pageData.ReasonsToBelieve.versionV2}
              theme={pageData.theme}
              product={pageData.product}
              readMoreLabel={pageData.ReasonsToBelieve.readMoreLabel}
              accordanTitle={""}
            />
          )}
          {script && (
            <>
            <>
            {pageData?.homeGallery && (
              <div ref={VideoRef} id="homeGallerySection">
                <DynamicGalleryComponent
                  id={pageData.homeGallery.id}
                  galleryId={pageData.homeGallery.galleryId}
                  theme={pageData.theme}
                  content={{
                    title: pageData.homeGallery.title,
                    desc: pageData.homeGallery.subTitle,
                    invert: pageData.homeGallery.invert,
                  }}
                />
              </div>
            )}
            </>
              {!pageData?.reviewHide && pageData?.externalId && (
                <ProductReviews variantId={pageData.externalId} />
              )}
              <div style={{ marginBottom: "4rem" }}>
                {pageData?.NewsLetter && (
                  <NewsLetter content={pageData.NewsLetter} />
                )}
              </div>
              {!pageData?.chat && <Chat />}
            </>
          )}
          {pageData?.footer && <Footer data={pageData.footer} />}
          {!isOpen && (
            <SubscriptionBar
              content={pageData.bottomBar}
              ModalHandler={ModalHandler}
              active={clickedType}
              themed={pageData.theme}
            />
          )}
        </>
      )}
    </>
  );
};

export default LandingPage;
