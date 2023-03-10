import React from 'react';
import { useState } from 'react';
import imageData from '../../Data/individualoan';
import Slider from 'react-slick';
import LazyLoader from '../Common-features/LazyLoader';
import { Link} from "react-router-dom";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function BusinessSlider() {
  const [isShown2, setIsShown2] = useState(0);
  const settings1 = {
    infinite: true,
    speed: 1000,
    vertical: true,
    focusOnSelect: true,
    touchMove: true,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          autoplaySpeed: 3000,
        }
      }

    ]

  };

  return (
    <>
      <div className='products-list-item list-item-reverse'>

<div className="list-item-left" >
  <LazyLoader src={imageData[isShown2].image} className={"img-fluid"} width={"536"} height={"392"} alt={imageData[isShown2].alttag} />
</div>
<div className='list-item-right'>
  <h3>Individual</h3>
  <div className='cont-list'>
    <Slider {...settings1}
      afterChange={(ev) => {
        setIsShown2(ev)
      }}

    >

      {
        imageData?.map((response, index) => {
          let classNm = "cont-list-itm " + ((index === isShown2) ? "list-itm-active" : "")

          return (

            <div key={response.id} className={classNm} onMouseOver={() => setIsShown2(index)} >
              <h5 className="single-ttl">{response.title}</h5>
              <p className="para">
                {response.description}
              </p>
            </div>
          )


        })
      }
    </Slider>
    <Link to="/individual-loan"><span class="btn-bg">Learn more</span></Link>
  </div>


</div>
</div>
    </>






  );
}

export default BusinessSlider;
