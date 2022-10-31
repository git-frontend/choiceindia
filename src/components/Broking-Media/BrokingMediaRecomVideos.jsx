import React from "react";
import recommended_videos_img_1 from '../../assets/images/broker-media/recommended_videos_img_1.png';
import recommended_videos_img_3 from '../../assets/images/broker-media/recommended_videos_img_3.png';
import latest_vidoes_img_1 from '../../assets/images/broker-media/latest_vidoes_img_1.png';
import latest_vidoes_img_2 from '../../assets/images/broker-media/latest_vidoes_img_2.png';
import latest_vidoes_img_3 from '../../assets/images/broker-media/latest_vidoes_img_3.png';

function BrokingMediaRecomVideos() {
  
  return (
    <div>
      
          
            <section className=" recommended_videos latest_vidoes ">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 ">
                    <h2 className="title-first" >recommended videos</h2>
                  </div>
                </div>
                <div className="row gx-5">
                  <div className="col-md-4">
                    <div className="video_img"> <img src={recommended_videos_img_1} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des">
                      <p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">save water save life</h3></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={latest_vidoes_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">Everyday finance in one place</h3></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={recommended_videos_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">finance in one place</h3></div>
                  </div>
                </div>
                <div className="row pt-5 gx-5">
                  <div className="col-md-4  ">
                    <div className="video_img"> <img src={latest_vidoes_img_1} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des">
                      <p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">Everyday finance in one place</h3></div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="video_img"><img src={latest_vidoes_img_2} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">wealth creation ideas to increase your assets</h3></div>
                  </div>
                  <div className="col-md-4  ">
                    <div className="video_img"><img src={latest_vidoes_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">Everyday finance in one place</h3></div>
                  </div>
                </div>
                <div className="text-center explore_btn "><a href="/" ><span className="explo_btn" >Explore All</span></a></div>
              </div>
            </section>

          </div>
 
  );
}

export default BrokingMediaRecomVideos;