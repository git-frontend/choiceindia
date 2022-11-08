import React from "react";
import { useState } from "react";
import "./broking-media.scss";
import Template5 from '../Common-features/Template5';

// import recommended_videos_img_2 from '../../assets/images/broker-media/recommended_videos_img_2.png';



import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import BrokingMediaBanner from './BrokingMediaBanner';
import BrokingMediaLatestVideos from './BrokingMediaLatestVideos';
import BrokingMediaRecomVideos from './BrokingMediaRecomVideos';

import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";
function BrokingMedia() {
  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 900);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    margin: 15,
    dots: true,
    autoplaySpeed: 800,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
          dots:false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

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
            {/*freatured_videos  */}
            <BrokingMediaBanner />
            {/*latest_vidoes  */}
            <BrokingMediaLatestVideos />
            {/*  recommended videos*/}
            <BrokingMediaRecomVideos />

          </div>
      }
    </div>
  );
}

export default BrokingMedia;