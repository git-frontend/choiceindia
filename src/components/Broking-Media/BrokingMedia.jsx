import React from "react";
import { useState } from "react";
import "./broking-media.scss";
import Template5 from '../Common-features/Template5';
import videoimg from '../../assets/images/broker-media/videoimg.png';
import latest_vidoes_img_1 from '../../assets/images/broker-media/latest_vidoes_img_1.png';
import latest_vidoes_img_2 from '../../assets/images/broker-media/latest_vidoes_img_2.png';
import latest_vidoes_img_3 from '../../assets/images/broker-media/latest_vidoes_img_3.png';
import recommended_videos_img_1 from '../../assets/images/broker-media/recommended_videos_img_1.png';
// import recommended_videos_img_2 from '../../assets/images/broker-media/recommended_videos_img_2.png';
import recommended_videos_img_3 from '../../assets/images/broker-media/recommended_videos_img_3.png';
import videoBg from '../../assets/images/insurance/insuringShield.mp4';
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
            {/*freatured_videos  */}
            <section className="freatured_videos">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="title-first">Choice Broking Media</h1>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="leftsec">
                    <video src={videoBg} autoPlay loop muted className='banner-ved img-fluid ' width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="rightsec">
                      <h2 className="title-secnd">Everyday finance in one place</h2>
                      <p className="datetitle">August 24, 2022</p>
                      <p className="subhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, </p>
                      <a href="/"><span class="btn-bg">Read More</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*latest_vidoes  */}
            <section className="latest_vidoes">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="title-first" >latest videos</h2>
                  </div>
                </div>
                <div className="row gx-5">
                  <div className="col-md-4 ">
                    <div className="video_img"> <img src={latest_vidoes_img_1} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des">
                      <p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">Everyday finance in one place</p></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={latest_vidoes_img_2} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">wealth creation ideas to increase your assets</p></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={latest_vidoes_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">Everyday finance in one place</p></div>
                  </div>
                </div>
              </div>
            </section>
            {/*  recommended videos*/}
            <section className=" recommended_videos latest_vidoes ">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 ">
                    <h2 className="title-first" >recommended videos</h2>
                  </div>
                </div>
                <div className="row gx-5 pb-5">
                  <div className="col-md-4 ">
                    <div className="video_img"> <img src={recommended_videos_img_1} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des">
                      <p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">save water save life</p></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={latest_vidoes_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">Everyday finance in one place</p></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={recommended_videos_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">finance in one place</p></div>
                  </div>
                </div>
                <div className="row gx-5">
                  <div className="col-md-4 ">
                    <div className="video_img"> <img src={latest_vidoes_img_1} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des">
                      <p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">Everyday finance in one place</p></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={latest_vidoes_img_2} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">wealth creation ideas to increase your assets</p></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={latest_vidoes_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <p className="latest_vidoes_head">Everyday finance in one place</p></div>
                  </div>
                </div>
                <div className="text-center explore_btn "><a href="/" ><span className="btn-bg ">Explore All</span></a></div>
              </div>
            </section>

          </div>
      }
    </div>
  );
}

export default BrokingMedia;