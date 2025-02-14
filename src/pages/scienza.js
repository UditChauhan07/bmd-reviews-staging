import React from 'react'
import scienza from '../../json/scienza.json'
import { NewsLetter } from '@/utilities/NewsLetter';
import TextText from '@/utilities/Sections/Text&Text';
// import ImgText from '@/utilities/Sections/Img&Text';
import ImgText2 from '@/utilities/Sections/Img&Text 2';
import Quote from '@/utilities/Sections/Quote';
import PageHead from '@/utilities/Head';
import SEO from '../../json/SEO.json';
import dynamic from "next/dynamic";

const DynamicVideoComponent = dynamic(
  () => import("@/utilities/Video/master"),
  {
    loading: () => (
      <div className="center-body" style={{ height: "200px" }}>
        <div className="loader-circle-2"></div>
      </div>
    ),
  }
);

export default function Scienza({version,script}) {
    const {masterHead, sectionOne,sectionTwo,quote,newsletter} = scienza[version] || {};
    return(
        <section>
            <PageHead content={SEO[version].scienza.SEO} />
            <DynamicVideoComponent  content={masterHead.content} src={masterHead.video}/>
            <div style={{margin:'3rem auto'}}><TextText data={sectionOne.sectionContent} /></div>
            <img src={sectionOne.sectionImage.src} alt="..." style={{width:'100%'}}/>
            <ImgText2 data={sectionTwo} />
            <Quote data={quote}/>
            {script&&<NewsLetter content={newsletter}/>}
        </section>
    )

}