import "./fable.scss"
import React from "react";
import BannerSection from "./BannerSection";
import FableBlog from "./FableBlog";
import FableBlogList from "./FableBlogList";
// import FablesHeader from './FablesHeader.jsx';
import { useState, useEffect } from 'react';
import Template5 from "../Common-features/Template5";

function Fables() {

  const [skeleton, setSkeleton] = useState(() => true);

  

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  return (
    <div>

  {
    skeleton? <Template5/>:
    <div className="fables-single-parent">
     <BannerSection/>
     <FableBlog/>
     <FableBlogList/>
    </div>
  }         
    
    </div>
  );
}

export default Fables;
