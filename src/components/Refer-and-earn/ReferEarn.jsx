import React from "react";
import "./refer-earn.scss"
import Banner from './Banner';
import HowChoice from './HowChoice';
import TermCondition from './TermCondition';
import EarnUp from './EarnUp';
import Template3 from '../Common-features/Template3';
import {useState, useEffect} from 'react';
import ReferTestimonial from "./ReferTestimonial";
import "../OnlineTradingApp/online-trading-app.scss";
import ReferFaqs from "./ReferFaqs";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function ReferEarn() {
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);
  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
      }
    }
  }, [rendercount])
 
  return (
    <>
      {
        skeleton ? <Template3 /> :
          <div className="refer-and-earn-parent">
            <Banner />
            <HowChoice />
            <TermCondition />
            <EarnUp />
            {/* <ReferTestimonial/> */}
            <ReferFaqs/>
          </div>
      }
    </>
  );
}

export default ReferEarn;
