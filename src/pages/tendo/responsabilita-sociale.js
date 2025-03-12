import React, { useEffect, useState } from "react";
import styles from "@/styles/spedizione.module.css";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import ImgText from "@/utilities/Sections/Img&Text";
import scienza from "../../../json/responsabilita-sociale.json";
import PageHead from "@/utilities/Head";
import ImgText2 from "@/utilities/Sections/Img&Text 2";
import data1 from "../../../json/layout.json";
import AnnouncementBar2 from "@/utilities/announcementBar2";
import Footer from "@/utilities/Footer/";
import SubscriptionTendo from "@/utilities/SubscriptionBarTendo"


export default function Sociale({ version }) {
  const { masterHead, sectionOne, sectionTwo } = scienza[version] || {};
  // console.log({ masterHead });
  return (
    <>
    {data1["EU"].announcementBar && (
        <AnnouncementBar2
          announcement={data1["EU"].announcementBar.title2}
          theme={{
            textColor: data1["EU"].announcementBar.textColor,
            backgroundColor: document.referrer.includes("tendo")
              ? "rgb(0, 51, 161)"
              : data1["EU"].announcementBar.backgroundColor,
          }}
        />
      )}
      <PageHead
        content={{
          title: "Responsabilità Sociale | Bruno MD",
          description:
            "Bruno MD ha promosso la sostenibilità per oltre un quarto di secolo attraverso i suoi sforzi di conservazione dell&apos;acqua e dell&apos;energia e la protezione della biodiversità.",
        }}
      />
      <MasterHeadImg data={masterHead} />
      <section className={styles.container}>
        <div
          className={styles.textLaHolder}
          dangerouslySetInnerHTML={{ __html: sectionOne?.content }}
        />
        <ImgText2 data={sectionTwo} />
      </section>
      <SubscriptionTendo/>
      <Footer data={data1["EU"].footer2} />
    </>
  );
}

Sociale.hideLayout = true;

