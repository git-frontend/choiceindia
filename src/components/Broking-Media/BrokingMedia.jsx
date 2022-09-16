import React from "react";
import { useState } from "react";
import "./broking-media.scss";
import Template5 from '../Common-features/Template5';
import videoimg from '../../assets/images/broker-media/videoimg.png';
import latest_vidoes_img_1 from '../../assets/images/broker-media/latest_vidoes_img_1.png';
import latest_vidoes_img_2 from '../../assets/images/broker-media/latest_vidoes_img_2.png';
import latest_vidoes_img_3 from '../../assets/images/broker-media/latest_vidoes_img_3.png';
import recommended_videos_img_1 from '../../assets/images/broker-media/recommended_videos_img_1.png';
import recommended_videos_img_2 from '../../assets/images/broker-media/recommended_videos_img_2.png';
import recommended_videos_img_3 from '../../assets/images/broker-media/recommended_videos_img_3.png';
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
            <section className="head">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="heading">Choice Broking Media</h1>
                  </div></div>
              </div>
            </section>
            {/*freatured_videos  */}
            <section className="freatured_videos">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 responsive_flex">
                    <h2 className="title" >Featured Videos</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7 responsive_flex">
                    <div className="leftsec">
                      <img src={videoimg} alt="Banner Images" className="img-fluid "></img>
                    </div>
                  </div>
                  <div className="col-md-5 responsive_flex">
                    <div className="rightsec">
                      <h4 className="righttitle">Everyday finance in one place</h4>
                      <p className="datetitle">August 24, 2022</p>
                      <p className="subhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, </p>
                      <button type="button" className="readmorebutton">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*latest_vidoes  */}
            <section className="latest_vidoes">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 responsive_flex">
                    <h2 className="title_latest_videos" >latest videos</h2>
                  </div>
                </div>
                <div className="row gx-5">
                  <div className="col-md-4 responsive_flex">
                    <img src={latest_vidoes_img_1} alt="Banner Images" className="img-fluid "></img>
                    <p className="body_date">August 24, 2022</p>
                    <p className="latest_vidoes_head">Everyday finance in one place</p>
                  </div>
                  <div className="col-md-4 responsive_flex">
                    <img src={latest_vidoes_img_2} alt="Banner Images" className="img-fluid "></img>
                    <p className="body_date">August 24, 2022</p>
                    <p className="latest_vidoes_head">wealth creation ideas to increase your assets</p>
                  </div>
                  <div className="col-md-4 responsive_flex">
                    <img src={latest_vidoes_img_3} alt="Banner Images" className="img-fluid "></img>
                    <p className="body_date">August 24, 2022</p>
                    <p className="latest_vidoes_head">Everyday finance in one place</p>
                  </div>
                </div>
              </div>
            </section>
            {/*  recommended videos*/}
            <section className="latest_vidoes">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 responsive_flex">
                    <h2 className="title_latest_videos" >recommended videos</h2>
                  </div>
                </div>
                <div className="row gx-5">
                  <div className="col-md-4 responsive_flex">
                    <img src={recommended_videos_img_1} alt="Banner Images" className="img-fluid "></img>
                    <p className="body_date">August 24, 2022</p>
                    <p className="latest_vidoes_head">save water save life</p>
                  </div>
                  <div className="col-md-4 responsive_flex">
                    <img src={recommended_videos_img_2} alt="Banner Images" className="img-fluid "></img>
                    <p className="body_date">August 24, 2022</p>
                    <p className="latest_vidoes_head">Everyday finance in one place</p>
                  </div>
                  <div className="col-md-4 responsive_flex">
                    <img src={recommended_videos_img_3} alt="Banner Images" className="img-fluid "></img>
                    <p className="body_date">August 24, 2022</p>
                    <p className="latest_vidoes_head">finance in one place</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="sectionexplore">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center responsive_flex ">
                    <a href="#" >Explore All</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
      }
    </div>
  );
}

export default BrokingMedia;