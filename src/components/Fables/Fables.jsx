import "../../assets/css/fable.scss"
import React from "react";
import BannerSection from "./BannerSection";
import FableBlog from "./FableBlog";
import FableBlogList from "./FableBlogList";
import FablesHeader from './FablesHeader.jsx';


function Fables() {

  return (
    <div>
      <FablesHeader/>
     <BannerSection/>
     <FableBlog/>
     <FableBlogList/>
     
    
    
    </div>
  );
}

export default Fables;
