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
import { useState } from "react";
import ProductArticleModal from "@/utilities/Sections/ProductArticleModal";
import ProductTrustBadges from "@/utilities/ProductTrustBadges";
import Testimonial from "@/utilities/Testimonial";
import FourStepProcess from "@/utilities/FourStepProcess";
import ReasonsToBelieve from "@/utilities/ReasonsToBelieve";
import SubscriptionBar from "@/utilities/SubscriptionBar";
import ProductSlideAccordion from "@/utilities/productSlideAccordion";
import StickyNav from "@/utilities/Nav";

const LandingPage = ({ version, script, page }) => {
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

  const pageData = landingData[page] || {};

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
            <ModalBoxInner
              content={pageData.bottomBar}
              isOpen={isOpen}
              ModalHandler={ModalHandler}
              externalId={pageData.externalId}
              productVariantId={pageData.variantId}
              clickedType={clickedType}
              version={version}
            />
          )}
          {PatnerData && <MarkqueCarousel image={PatnerData} />}
          {pageData?.ImageAside && <ImageAside content={pageData.ImageAside} theme={pageData.announcement.theme} />}
          {pageData?.ProductArticleModal && (
            <ProductArticleModal
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
            <ProductTrustBadges images={pageData.ProductTrustBadges} backgroundColor={'rgb(0, 51, 161)'}/>
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
              buttonTittle={'Leggi di più'}
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
          {(!pageData?.reviewHide && pageData?.externalId) && (
            <ProductReviews variantId={pageData.externalId} />
          )}
              <div style={{marginBottom:'4rem'}}>{pageData?.NewsLetter && (
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
            />
          )}
        </>
      )}
    </>
  );
};

export default LandingPage;
