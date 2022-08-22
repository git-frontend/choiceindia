import "./fable.scss"
import React from "react";
import BannerSection from "./BannerSection";
import FableBlog from "./FableBlog";
import FableBlogList from "./FableBlogList";
// import FablesHeader from './FablesHeader.jsx';
import { useState, useEffect } from 'react';
import Template5 from "../Common-features/Template5";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Fables() {
  console.log('Fables.jsx')
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])

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
