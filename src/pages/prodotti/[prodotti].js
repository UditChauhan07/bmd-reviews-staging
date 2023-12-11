import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import TrustBadge from "@/utilities/TrustBadges";
import { NewsLetter } from "@/utilities/NewsLetter";
import PatnerData from "../../../json/parters.json";
import TrustBadgeData from "../../../json/trustBages.json";
import ProductsData from "../../../json/products.json";
import ProductCard from "@/utilities/ProductCard";
import BenefitCards from "@/utilities/BenefitCards";
import Tabs from "@/utilities/Tabs";
import PageHead from "@/utilities/Head";
import Loader2 from "@/utilities/Loader/index2";
import ProductReviews from "@/utilities/ProductReviews";
import Testimonial from "@/utilities/Testimonial";
import FourStepProcess from "@/utilities/FourStepProcess";
import { HomeGallery } from "@/utilities/HomeGallery";
import { getProduct, getSubscription } from "@/data/lib";

const Product = ({ version,script }) => {
  const [load, setLoad] = useState(true);
  const [product, setProduct] = useState();
  const [shopifyP, setSProduct] = useState();
  const [ rechargeProduct, setRProduct] = useState();
  // const products = getAllProducts();
  const {
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
  useEffect(() => {
    let url = window.location.href;
    let splitUrl = url.split("/prodotti/");
    if (splitUrl.length == 2) {
      let product = ProductsData[splitUrl[1]];
      if (product?.EXTERNALID) {
        const productId = `gid://shopify/Product/${product.EXTERNALID}`;
        if (EXTERNALID && shopifyP?.id != productId) {
        getProduct({productId}).then((response)=>{
          let product = response?.data?.product;
          setSProduct(product);
          setLoad(false);
        }).catch((err)=>{
          console.log({err});
        })
      }
        if (EXTERNALID && rechargeProduct?.product_id != EXTERNALID) {
          getSubscription({id:EXTERNALID}).then((response)=>{
            console.log({response});
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
                          .charge_interval_frequency +
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
                  product_id: EXTERNALID,
                  subscription_preferences: freqs,
                });
              }
              if(response?.selling_plan_groups?.length > 0){
                let freqs = [];
                response.selling_plan_groups[0].selling_plans.map((plans)=>{
                  if (
                    plans.order_interval_frequency
                  ){
                    freqs.push({
                      id:`gid://shopify/SellingPlan/${plans.selling_plan_id}`,
                      value:
                      plans.order_interval_frequency
                       +
                      " giorni",
                    });
                  }
                })
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
        }).catch((err)=>{
            console.error({err});
        })
        }
        setProduct(product);
      } else {
        window.location.href = "/";
      }
    } else {
      window.location.href = "/";
    }
  }, [load, shopifyP, product,rechargeProduct]);

  if (load) return <Loader2 />;
  return (
    <section style={{ margin: "2rem auto" }}>
      <PageHead content={seo} />
      {true && (
        <ProductCard
          data={{
            images: shopifyP.images.edges,
            declaimer: {
              title: shopifyP.title,
              content: shopifyP.descriptionHtml,
            },
            priceDescription: {
              EXTERNALID,
              STOREFRONTID,
              SLUG,
              price: shopifyP?.variants?.edges?.length
                ? parseInt(shopifyP.variants.edges[0].node?.price?.amount)
                : 0,
              theme,
              priceBox,
              freq:rechargeProduct?.subscription_preferences
            },
            review,
          }}
          variantId={shopifyP.variants.edges[0].node?.id }
        />
      )}
      {benefits && <BenefitCards data={benefits} productColorTheme={theme} />}
      <Tabs data={details} productColorTheme={theme} />
      {fourStepProcess?.content && (
        <FourStepProcess
          processCards={fourStepProcess.content}
          theme={theme}
          header={fourStepProcess.title}
          buttonTittle={fourStepProcess.buttonTittle}
          stepAlignment={fourStepProcess.stepAlignment}
        />
      )}
      <TrustBadge
        contents={TrustBadgeData[version]}
        productColorTheme={theme}
      />
      <MarkqueCarousel image={PatnerData} />
      {testimonial && (
        <Testimonial content={{ slides: testimonial, theme: theme }} />
      )}
      {script &&<>{homeGallery && (
        <HomeGallery
          id={homeGallery.id}
          galleryId={homeGallery.galleryId}
          productid={EXTERNALID}
        />
      )}
      {!review && <ProductReviews product={shopifyP} variantId={EXTERNALID}/>}
      {newsletter &&<NewsLetter content={newsletter} />}</>}
    </section>
  );
};
export default Product;
