import React, { Component } from "react";
import Slider from "react-slick";
import  ImageSub21  from '../../assets/images/slide-img2.png';
import  ImageSub22  from '../../assets/images/slide-img3.png';
import  ImageSub23  from '../../assets/images/slide-img4.png';
import  ImageSub24  from '../../assets/images/slide-img5.png';
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const settings1 = {
      infinite: true,
      speed: 1500,
      arrows: false,
      slidesToShow: 3,
      autoplay: true,
      dots:true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="stories-sec-right">
              <div class="">
              <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        className='slider1'>
          <div>
                <div class="stories-sec-right-des">
                  <h4>What are NFTs?</h4>
                  <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
                </div>
          </div>
          <div>
                <div class="stories-sec-right-des">
                  <h4>What are NFTs?</h4>
                  <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
                </div>
          </div>
          <div>
                <div class="stories-sec-right-des">
                  <h4>What are NFTs?</h4>
                  <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
                </div>
          </div>
          <div>
                <div class="stories-sec-right-des">
                  <h4>What are NFTs?</h4>
                  <p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
                </div>
          </div>
        </Slider>
                </div>
                <div class="sec-slider-cont">
                <Slider {...settings1}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        className='stories-sec-slider'>
              <div class="itm-img">
                <img src={ImageSub21} alt="" />
              </div>
              <div class="itm-img">
                <img src={ImageSub22} alt="" />
              </div>
              <div class="itm-img">
                <img src={ImageSub23} alt="" />
              </div>
              <div class="itm-img">
                <img src={ImageSub24} alt="" />
              </div>
        </Slider>
                </div>
      </div>
    );
  }
}