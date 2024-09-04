import React from 'react';
import data from "../../json/science-page.json"; 
import Sciencedesktoppage from "@/utilities/SciencePage/SciencedesktopPage/sciencedesktoppage";

function SciencePage() {
  return (
    <div> 
  

      <Sciencedesktoppage data={data} />
    </div>
  );
}

SciencePage.hideLayout = false;

export default SciencePage;
