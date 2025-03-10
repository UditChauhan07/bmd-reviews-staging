import React, { useEffect, useState } from "react";
import styles from "@/styles/spedizione.module.css";
import PageHead from "@/utilities/Head";
import PageData from "../../../json/pages.json";
import data1 from "../../../json/layout.json";
import AnnouncementBar2 from "@/utilities/announcementBar2";
import Footer from "@/utilities/Footer/";
import SubscriptionTendo from "@/utilities/SubscriptionBarTendo"
export default function Spedizione() {
  let Data = PageData["politica-di-restituzione-e-cancellazione"];
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
    <section className={styles.container}>
      
      <PageHead
        content={{
          title: "Politica su Reso e Cancellazione  | Bruno MD",
          description:
            "Siamo fiduciosi che sarai soddisfatto dei tuoi prodotti Bruno MD, tuttavia, se non sei soddisfatto del tuo acquisto, ti rimborseremo l&apos;intero primo ordine.",
        }}
      />
      <h1>POLITICA DI RITORNO</h1>
      <div
        className={styles.textHolder}
        dangerouslySetInnerHTML={{
          __html: Data,
        }}
      />
    </section>
    <SubscriptionTendo/>
    <Footer data={data1["EU"].footer2} />

    </>
  );
}

Spedizione.hideLayout = true;
