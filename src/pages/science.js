import React from 'react';
import data from "../../json/science-page.json"; 
import Sciencedesktoppage from "@/utilities/SciencePage/SciencedesktopPage/sciencedesktoppage";
import Footer from '@/utilities/Footer/';
import BottomBar from '@/utilities/BottomBar';
import data1 from '../../json/layout.json'
import AnnouncementBar from '@/utilities/announcementBar';
import FeatureInfo from '@/utilities/FeatureInfo'
function SciencePage({}) {
  console.log("tttt",data1)
  return (
    <div> 
  <AnnouncementBar announcement={data1["EU"].announcementBar.title} theme={{ textColor: data1["EU"].announcementBar.textColor, backgroundColor: data1["EU"].announcementBar.backgroundColor }} />
      <Sciencedesktoppage data={data} />
      <FeatureInfo infoBanners={data1["EU"].featureInfo} />
      <Footer data={data1["EU"].footer2} />
      <BottomBar contents={data1["EU"].bottomBar} />

    </div>
  );
}

SciencePage.hideLayout = true;
//SciencePage.hideHeader=true;

export default SciencePage;
