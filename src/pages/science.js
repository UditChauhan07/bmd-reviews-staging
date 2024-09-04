import React from 'react';
import data from "../../json/science-page.json"; 
import Sciencedesktoppage from "@/utilities/SciencePage/SciencedesktopPage/sciencedesktoppage";
import Footer from '@/utilities/Footer/';
import BottomBar from '@/utilities/BottomBar';
import data1 from '../../json/layout.json'
import AnnouncementBar from '@/utilities/announcementBar';
function SciencePage({}) {
  return (
    <div> 
  <AnnouncementBar announcement={data1["EU"].announcementBar.title} theme={{ textColor: data1["EU"].announcementBar.textColor, backgroundColor: data1["EU"].announcementBar.backgroundColor }} />
      <Sciencedesktoppage data={data} />
      <Footer data={data1["EU"].footer} />
      <BottomBar contents={data1["EU"].bottomBar} />

    </div>
  );
}

SciencePage.hideLayout = true;
//SciencePage.hideHeader=true;

export default SciencePage;
