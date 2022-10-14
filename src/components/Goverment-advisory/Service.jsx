import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import serviceimage from '../../assets/images/goverment-advisory/serviceimage.png';
import socialsector from '../../assets/images/goverment-advisory/welfareleftimage.png';
import partnerone from '../../assets/images/goverment-advisory/partnerone.png';
import partnertwo from '../../assets/images/goverment-advisory/partnertwo.png';
import partnerthree from '../../assets/images/goverment-advisory/partnerthree.png';
import partnerfour from '../../assets/images/goverment-advisory/partnerfour.png';
import partnerfive from '../../assets/images/goverment-advisory/partnerfive.png';
import socialsectorone from '../../assets/images/goverment-advisory/tribal-welfare.png';
import socialsectortwo from '../../assets/images/goverment-advisory/health.png';
import socialsectorthree from '../../assets/images/goverment-advisory/agriculture-allied.png';
import socialsectorfour from '../../assets/images/goverment-advisory/education-skilldevelopment.png';
import socialsectorfive from '../../assets/images/goverment-advisory/IT&e-governance.png';
import React, { useRef } from 'react';
import LazyLoader from "../Common-features/LazyLoader";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)





function Service() {


  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    margin: 15,
    dots: false,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings1 = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    margin: 15,
    dots: false,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
  // const settings2 = {
  //   infinite: true,
  //   speed: 1500,
  //   arrows: false,
  //   slidesToShow: 5,
  //   autoplay: true,
  //   margin: 15,
  //   dots: false,
  //   autoplaySpeed: 1000,
  //   slidesToScroll: 1,
  // 	responsive: [
  // 	  {
  // 		breakpoint: 992,
  // 		settings: {
  // 		  slidesToShow: 3,
  // 		  slidesToScroll: 3,
  // 		  adaptiveHeight: true,
  // 		},
  // 	  },
  // 	  {
  // 		breakpoint: 600,
  // 		settings: {
  // 		  slidesToShow: 1,
  // 		  slidesToScroll: 1,
  // 		},
  // 	  },
  // 	],
  // };
  return (
    <div>


      <section className="same-list-bx services-same-list-bx ">
        <div className="container">

          <div className="row">
            <div className="col-md-12 ">
              {/* <div className="same-list-bx-list"> */}
              <Slider {...settings} className="same-list-bx-list">
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('urbandevelopment') }}>


                    <h4 className='title-fourth'>Urban Development</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('wealth') }}>

                    <h4 className='title-fourth'>Road &amp; Highway</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('insurance') }}>

                    <h4 className='title-fourth'>Water &amp; Sanitation</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('loan') }}>


                    <h4 className='title-fourth'>Affordable Housing</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('capital') }}>

                    <h4 className='title-fourth'>Capital Advisory</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('management') }}>

                    <h4 className='title-fourth'>Management Consultancy</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('goverment') }}>

                    <h4 className='title-fourth'>Government Advisory</h4>
                  </div>
                </div>
                <div className="same-list-bx-item">
                  <div className="bx-item-cont" onClick={() => { chapterScroll('tax') }}>

                    <h4 className='title-fourth'>Tax Advisory</h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <div id="urbandevelopment" className="detailsection">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="boxwrap">
                <div className="left-img">
                  <img src={serviceimage} className={"img-fluid"} alt="" width={"383"} height={"868"} />
                </div>
                <div className="right-sec">
                  <p className="text">Served 1000+ ULBs ( 25% of Total Market ) in financial reforms, revenue reforms, process automation, scheme PMU, capacity building, DPR &amp; transaction advisory services. </p>
                  <div className="client-service">
                    <div className="services boxwrapper">
                      <h4>Major Services</h4>
                      <ul>
                        <li>
                          Finance &amp; Accounting Management
                        </li>
                        <li>
                          Revenue Augmentation
                        </li>
                        <li>
                          Training &amp; Capacity Building
                        </li>
                        <li>
                          e-Governance
                        </li>
                        <li>
                          DPR for Urban Infra
                        </li>
                        <li>
                          PMC for Urban Infra
                        </li>
                        <li>
                          GIS Based Property Tax Register, Survey, Assessment
                        </li>




                      </ul>
                    </div>
                    <div className="clients boxwrapper">
                      <h4>Major Clients</h4>
                      <ul>
                        <li>
                          1000+ Urban Local Bodies across India
                        </li>
                        <li>
                          State Urban Development Agency - Jharkhand &amp; Chattisgarh
                        </li>
                        <li>
                          Urban Administration &amp; Development, Madhya Pradesh
                        </li>
                        <li>
                          Directorate of Municipal Administration Madhya Pradesh &amp; Jharkhand
                        </li>
                        <li>
                          Mukhyamantri Shahri Adhosanrachna Vikas Yojna - Madhya Pradesh
                        </li>





                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="sliderwrapper">
                <div className="left-text">
                  <h3 className="title">Our Partners</h3>
                </div>
                <div className="right-img">

                  <Slider {...settings1} id="clientslider">

                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerone} className={'img-fluid'} width={"96"} height={"95"} alt={"Niti Aayog"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerfour} className={'img-fluid'} width={'96'} height={'95'} alt={"Navkar Corporation"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerfive} className={'img-fluid'} width={'172'} height={'95'} alt={"ICICI"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnertwo} className={'img-fluid'} width={'96'} height={'95'} alt={"Liberty Insurance"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerthree} className={'img-fluid'} width={'172'} height={'92'} alt={"Aadhaar"} />
                      </div>
                    </div>


                  </Slider>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <section className="socialsector">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Our Interest in Social Development Sector</h2>
            </div>
          </div>
          <div className="row mt5">
            <div className="col-md-12">
            {/* <ul class="hexagon-grid-container">
              <div className="wrapper" onClick={() => { chapterScroll('tribalwelfare') }}>
                <li className="hexagon">
                  <div class="hexagon-inner">
                  <LazyLoader src={socialsectorone} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
              
                  </div>
          
                </li>
                <div className="imgheading">Tribal Welfare</div>
              </div>
      
              <div className="wrapper">
                <li class="hexagon">
                <div class="hexagon-inner">
                  <LazyLoader src={socialsectortwo} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                
                  </div>
                </li>
                <div className="imgheading">Health</div>
              </div>

              <div className="wrapper">
              <li class="hexagon">
                <div class="hexagon-inner">
                  <LazyLoader src={socialsectorthree} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
              
                </div>
              </li>
                <div className="imgheading">Agriculture &amp; Allied</div>
              </div>
       
              <div className="wrapper">
                <li class="hexagon">
                  <div class="hexagon-inner">
                    <LazyLoader src={socialsectorfour} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  
                  </div>
                </li>
                <div className="imgheading">Education &amp; Skill<br /> Development</div>
              </div>
      
              <div className="wrapper">
                <li class="hexagon">
                <div class="hexagon-inner">
                  <LazyLoader src={socialsectorfive} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
              
                  </div>
                </li>
                <div className="imgheading">IT &amp; E-Governance</div>
              </div>
    
	
            </ul> */}
              <div class="wrapper">
                  <div class="hexagonwrap" onClick={() => { chapterScroll('tribalwelfare') }}>
                    <LazyLoader src={socialsectorone} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                    <p class="text">Tribal Welfare</p>
                  </div>
                  <div class="hexagonwrap">
                  <LazyLoader src={socialsectortwo} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p class="text">Tribal Welfare</p>
                  </div>
                  <div class="hexagonwrap">
                  <LazyLoader src={socialsectorthree} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p class="text">Tribal Welfare</p>
                  </div>
                  <div class="hexagonwrap">
                  <LazyLoader src={socialsectorfour} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p class="text">Tribal Welfare</p>
                  </div>
                  <div class="hexagonwrap">
                  <LazyLoader src={socialsectorfive} className={'img-fluid hexagon-avatar-img'} width={'212'} height={'240'} alt={"Tribal Welfare"} />
                  <p class="text">Tribal Welfare</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="tribalwelfare" className="sectordetail">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="boxwrap">
                <div className="left-img">
                  <img src={socialsector} className={"img-fluid"} alt="" width={"383"} height={"868"} />
                </div>
                <div className="right-sec">
                 
                  <div className="client-service">
                    <div className="services boxwrapper">
                      <h4>Product</h4>
                      <ul>
                        <li>
                          Finance &amp; Accounting Management
                        </li>
                        <li>
                          Revenue Augmentation
                        </li>
                        <li>
                          Training &amp; Capacity Building
                        </li>
                        <li>
                          e-Governance
                        </li>
                        <li>
                          DPR for Urban Infra
                        </li>
                        <li>
                          PMC for Urban Infra
                        </li>
                        <li>
                          GIS Based Property Tax Register, Survey, Assessment
                        </li>




                      </ul>
                    </div>
                    <div className="clients boxwrapper">
                      <h4>Project</h4>
                      <ul>
                        <li>
                          1000+ Urban Local Bodies across India
                        </li>
                        <li>
                          State Urban Development Agency - Jharkhand &amp; Chattisgarh
                        </li>
                        <li>
                          Urban Administration &amp; Development, Madhya Pradesh
                        </li>
                        <li>
                          Directorate of Municipal Administration Madhya Pradesh &amp; Jharkhand
                        </li>
                        <li>
                          Mukhyamantri Shahri Adhosanrachna Vikas Yojna - Madhya Pradesh
                        </li>





                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="sliderwrapper">
                <div className="left-text">
                  <h3 className="title">Our Partners</h3>
                </div>
                <div className="right-img">

                  <Slider {...settings1} id="clientslider">

                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerone} className={'img-fluid'} width={"96"} height={"95"} alt={"Niti Aayog"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerfour} className={'img-fluid'} width={'96'} height={'95'} alt={"Navkar Corporation"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerfive} className={'img-fluid'} width={'172'} height={'95'} alt={"ICICI"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnertwo} className={'img-fluid'} width={'96'} height={'95'} alt={"Liberty Insurance"} />
                      </div>
                    </div>
                    <div className="image_wrapper">
                      <div className="img-item">
                        <LazyLoader src={partnerthree} className={'img-fluid'} width={'172'} height={'92'} alt={"Aadhaar"} />
                      </div>
                    </div>


                  </Slider>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* <div id="wealth">
			<WealthManagement1 />
			</div>
			<div id="insurance">
			<Insurance1/>
			</div>
			<div id="loan">
			<Loans1 />
			</div>
			<div id="capital">
			<CapitalAdvisory1 />
			</div>
			<div id="management">
			<ManagementConsultancy1 />
			</div>
			<div id="goverment">
			<GovernmentAdvisory1 />
			</div>
			<div id="tax">
			<TaxAdvisory1 />
			</div> */}





    </div>

  );
}

export default Service;