import React, { useState } from 'react';
import Slider from "react-slick";
import ImageSub21 from '../../assets/images/slide-img2.png';
import ImageSub22 from '../../assets/images/slide-img3.png';
import ImageSub23 from '../../assets/images/slide-img4.png';
import ImageSub24 from '../../assets/images/slide-img5.png';
import LazyLoader from '../Common-features/LazyLoader';

export default function SliderAs() {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1 = []
  let slider2 = []

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])




  return (
    <div className="stories-sec-right">

      <div className="">
        <Slider
          asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
          className='slider1'>
          <div>
            <div className="stories-sec-right-des">
              <h4>What are NFTs?</h4>
              <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
            </div>
          </div>
          <div>
            <div className="stories-sec-right-des">
              <h4>What are NFTs?</h4>
              <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
            </div>
          </div>
          <div>
            <div className="stories-sec-right-des">
              <h4>What are NFTs?</h4>
              <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
            </div>
          </div>
          <div>
            <div className="stories-sec-right-des">
              <h4>What are NFTs?</h4>
              <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="sec-slider-cont">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className='stories-sec-slider'>
          <div className="itm-img">
            <LazyLoader src={Image21} threshold={[0, 0.5, 1]} alt={"Loading"} />
            {/* <img src={ImageSub21} alt="" /> */}
          </div>
          <div className="itm-img">
            <LazyLoader src={Image22} threshold={[0, 0.5, 1]} alt={"Loading"} />
            {/* <img src={ImageSub22} alt="" /> */}
          </div>
          <div className="itm-img">
            <LazyLoader src={Image23} threshold={[0, 0.5, 1]} alt={"Loading"} />
            {/* <img src={ImageSub23} alt="" /> */}
          </div>
          <div className="itm-img">
            <LazyLoader src={Image24} threshold={[0, 0.5, 1]} alt={"Loading"} />
            {/* <img src={ImageSub24} alt="" /> */}
          </div>

        </Slider>

      </div>




    </div>
  );

}