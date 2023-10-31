
import React from "react";
import BannerMFDistributor from './BannerMFDistributor';
import MFDistributorBenifits from './MFDistributorBenifits';
import MFDistributorSellMore from './MFDistributorSellMore';
import WhyMFDistributor from './WhyMFDistributor';
import EligibleToMFDistributor from './EligibleToMFDistributor';
import MoreContent from './MoreContent';
import MFDistributorOffers from './MFDistributorOffers';
import MfTestimonials from './MfTestimonials';
import MFDistributorFaqs from './MFDistributorFaqs';
import MFDistributorSteps from './MFDistributorSteps';
import { useState} from "react";
import Template5 from '../Common-features/Template5';
import "./mf-distributor.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";

function MutualFundDistributor() {
  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 900);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }
  const [rendercount, setRenderCount] = useState(() => false);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const location = useLocation();

  // let parser = new DOMParser();
  // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');

  // useEffect(() => {
  //   let parser = new DOMParser();
  //   let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
  //   document.body.appendChild(doc.getElementsByTagName('script')[0]);
  // }, [])

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

  // console.log('HHHHHHH',meta_tags['sub-broker'].faqscript)
  // console.log('TTTT',doc.getElementsByTagName('script')[0]);  
  // document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
  // // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  // document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
  // document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
  // // document.body.appendChild(doc.getElementsByTagName('script')[0]);
  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">
            <BannerMFDistributor />
            <MFDistributorBenifits />
            <MFDistributorSellMore />
            <WhyMFDistributor />
            <EligibleToMFDistributor />
            <MFDistributorOffers />
            <MFDistributorSteps/>
            <MfTestimonials/>
            <MFDistributorFaqs />
            <MoreContent />
          </div>
      }

    </div>
  );
}

export default MutualFundDistributor;
