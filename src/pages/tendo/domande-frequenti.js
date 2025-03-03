import React from "react";
import frequenti from "../../../json/domande-frequenti.json";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import { NewsLetter } from "@/utilities/NewsLetter";
import Accordion from "@/utilities/Accordion";
import styles from "@/styles/frequenti.module.css";
import PageHead from "@/utilities/Head";
import data1 from "../../../json/layout.json";
import AnnouncementBar2 from "@/utilities/announcementBar2";
import Footer from "@/utilities/Footer/";

export default function Frequenti({ version, script }) {
  const { masterHead, section, newsletter, seo } = frequenti[version] || {};
  return (
    <>
    <section>
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
      <PageHead content={seo} />
      <MasterHeadImg data={masterHead} />
      <div className={styles.container}>
        <div className={styles.holder}>
          {section &&
            section.map((e, i) => {
              return (
                <div key={i}>
                  <h2 className={styles.title}>{e.title}</h2>
                  <Accordion items={e.content} />
                </div>
              );
            })}
        </div>
      </div>
      {script && <NewsLetter content={newsletter} />}
    </section>
    <Footer data={data1["EU"].footer2} />
    </>
  );
}
Frequenti.hideLayout = true;
