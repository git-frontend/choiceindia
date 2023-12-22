import React, { useEffect, useState } from 'react'
import "../AMC-Details/amc-details.scss";
import "./elss-details.scss";
import Banner from './Banner';
import SerachELSSDetails from './SerachELSSDetails';
import MoreContent from './MoreContent';
import Faq from './Faqs';
import FixedSection from './FixedForm';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTagsMFPages";
function ELSSDetails() {
  const location = useLocation();
  const [rendercount, setRenderCount] = useState(() => false);
  console.log("meta_tags",meta_tags)
  //   const [name, setName] = useState('hideform2');
  //   const getPosition = () => {
  //       const element = document.getElementById("showForm");
  //       if (element) {
  //           const rect = element.getBoundingClientRect();

  //           if (rect.top.toFixed() < 259) {
  //               setName('visibleform2');
  //           } else {
  //               setName('hideform2');
  //           }
  //       }
  //   };

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
    document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
    document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
    document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    if (!(document.getElementById('link1') == null)) {
      document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
    }
  }
}, [rendercount])


  //   function chapterScroll2(id) {
  //       var element = document.getElementById(id);
  //       var headerOffset = 140;
  //       var elementPosition = element.getBoundingClientRect().top;
  //       var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  //       window.scrollTo({
  //           top: offsetPosition,
  //           behavior: "smooth"
  //       });
  //   }
  return (
    <div>
      <Banner />
      {/* <SerachELSSDetails/> */}
      {/* <MoreContent/> */}
      {/* <Faq/> */}
      {/* <div className={name}>
        <FixedSection/>
        </div> */}

    </div>
  )
}

export default ELSSDetails