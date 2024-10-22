import React, { useEffect, useState } from "react";
import styles from "@/styles/spedizione.module.css";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import ImgText from "@/utilities/Sections/Img&Text";
import scienza from "../../../json/responsabilita-sociale.json";
import PageHead from "@/utilities/Head";

export default function Sociale({ version }) {
  const { masterHead, sectionOne, sectionTwo } = scienza[version] || {};
  console.log({ masterHead });
  return (
    <>
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
        <ImgText data={sectionTwo} />
      </section>
    </>
  );
}
