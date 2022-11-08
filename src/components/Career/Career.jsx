import { useState, useEffect } from "react";
import React from "react";
import BannerCareer from './BannerCareer';
import BenefitsPerks from './BenefitsPerks';
//import CareerTeam from './CareerTeam';
//import CareerJobs from './CareerJobs';
import "./career.scss";
// import CareerHeader from './CareerHeader.jsx';
import Template1 from '../Common-features/Template1';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Career() {

  const [rendercount, setRenderCount] = useState(() => false);
  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags['career'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])

  // document.title= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : '' ;
  // // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  // document.getElementById('meta-tags').content= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].content : ''  ;
  // document.getElementById('canonical-link').href= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].link : ''  ;
  return (
    <div>
      {
        skeleton ? <Template1 /> :
          <div className="career-parent">
            <BannerCareer />
            <BenefitsPerks />
            {/*<CareerTeam />
      <CareerJobs />*/}
          </div>
      }
    </div>
  );
}

export default Career;
