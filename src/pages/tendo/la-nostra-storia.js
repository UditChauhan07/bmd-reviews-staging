import React from 'react'
import storia from '../../../json/storia.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import ImgText from '@/utilities/Sections/Img&Text';
import TimeLine from '@/utilities/TimeLine';
// import { NewsLetter } from '@/utilities/NewsLetter';
import PageHead from '@/utilities/Head';
import SEO from '../../../json/SEO.json'
import styles from '@/styles/frequenti.module.css'
import BrunoFamily from '@/utilities/BrunoFamily/BrunoFamily';
import OurMap from '@/utilities/OurMap/OurMap';
import OurStory from '@/utilities/OurStory/OurStory';
import MasterHeadImg2 from '@/utilities/MasterHeadImg2';
import Footer from "@/utilities/Footer/";
import data1 from "../../../json/layout.json";
import AnnouncementBar2 from "@/utilities/announcementBar2";
export default function Storia({version,script}) {
    const {masterHead,timelineDesc, section,timeline,newsletter} = storia[version] || {};
    return(
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
        <PageHead content={SEO[version].storia.SEO} />
        {/* <MasterHeadImg  data={masterHead}/> */}
        <MasterHeadImg2 data={masterHead}/>

     
        <div className={styles.container}>
                <div className={styles.desc}>
                    <h2>{timelineDesc}</h2>
                </div>
            </div>
     
        <TimeLine data={timeline}/>
        <BrunoFamily/>
        <OurMap/>
        <ImgText data={section}/>
        <OurStory/>
         <Footer data={data1["EU"].footer2} />
        </section>
    )

}
Storia.hideLayout = true;