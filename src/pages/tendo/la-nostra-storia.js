import React from "react";
import storia from "../../../json/storia.json";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import ImgText from "@/utilities/Sections/Img&Text";
import TimeLine from "@/utilities/TimeLine";
import { NewsLetter } from "@/utilities/NewsLetter";
import PageHead from "@/utilities/Head";
import SEO from "../../../json/SEO.json";
import styles from "@/styles/frequenti.module.css";

export default function Storia({ version, script }) {
  const { masterHead, timelineDesc, section, timeline, newsletter } =
    storia[version] || {};
  return (
    <section>
      <PageHead content={SEO[version].storia.SEO} />
      <MasterHeadImg data={masterHead} />
      <div style={{ maxwidth: "1400px", margin: "4rem auto 2rem" }}>
        <div className={styles.titleDesc}>
          <p>{timelineDesc}</p>
        </div>
      </div>
      <TimeLine data={timeline} />
      <ImgText data={section} />
      {script && <NewsLetter content={newsletter} />}
    </section>
  );
}
