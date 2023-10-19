import React,{useRef} from 'react'
// import styles from '@/styles/Home.module.css'
import MarkqueCarousel from '@/utilities/MarkqueCarousel'
import Cards from '@/utilities/CategoriesCards'
import TrustBadge from '@/utilities/TrustBadges'
import Purpose from '@/utilities/Purpose'
// import { HomeGallery } from '@/utilities/HomeGallery'
// import { NewsLetter } from '@/utilities/NewsLetter'
import PatnerData from "../../json/parters.json"
import TrustBadgeData from '../../json/trustBages.json'
import HomePageData from '../../json/home.json'
import SEO from '../../json/SEO.json'
import PageHead from '@/utilities/Head'
import Testimonial from '@/utilities/Testimonial'
// import MasterHeadVideo from '@/utilities/Video/master'
import dynamic from "next/dynamic";

const DynamicVideoComponent = dynamic(
  () => import("@/utilities/Video/master"),
  {
    loading: () => (
      <div class="center-body" style={{ height: "200px" }}>
                  <div class="loader-circle-2"></div>
                </div>
    ),
  }
);

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

const DynamicNewLetterComponent = dynamic(
  () => import("@/utilities/NewsLetter"),
  {
    loading: () => (
      <div class="center-body" style={{ height: "200px" }}>
                  <div class="loader-circle-2"></div>
                </div>
    ),
  }
);
export default function Home({version}) {
  console.log({version});
  const VideoRef = useRef(null);
  return (
    <>
      <section>
        {SEO[version] && <PageHead content={SEO[version]?.home?.SEO}/>}
        {HomePageData[version] &&<div ref={VideoRef} id="videoSection"><DynamicVideoComponent src={HomePageData[version].wistia.video} content={HomePageData[version].wistia.content} /></div>}
        {HomePageData[version]?.PatnerData &&<MarkqueCarousel image={PatnerData} />}
        {HomePageData[version] &&<Cards contents={HomePageData[version].categories} />}
        {TrustBadgeData[version] &&<TrustBadge contents={TrustBadgeData[version]} />}
        {HomePageData[version] && <Purpose contents={HomePageData[version].purpose} />}
        {HomePageData[version].testimonial && <Testimonial content={{slides:HomePageData[version].testimonial, title:"Our Believers",subTitle:"See what BrunoMD customers have to say."}}/>}
        {HomePageData[version]?.homeGallery &&<div ref={VideoRef} id="homeGallerySection"><DynamicGalleryComponent id={HomePageData[version].homeGallery.id} galleryId={HomePageData[version].homeGallery.galleryId} content={{title:HomePageData[version].homeGallery.title, desc:HomePageData[version].homeGallery.subTitle, invert:HomePageData[version].homeGallery.invert}}/></div>}
        {HomePageData[version] &&<div ref={VideoRef} id="homeGallerySection"><DynamicNewLetterComponent content={HomePageData[version].newsletter}/></div>}
      </section>
    </>
  )
}
