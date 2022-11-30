import React,{useState,useEffect} from "react";
import img1 from '../../assets/images/ipo/tag-list.svg'

import LazyLoader from '../Common-features/LazyLoader';
import Slider from 'react-slick';

function IPOProcess() {

  const [view,setView]=useState({
		matches: window.innerWidth < 770 ? false : true ,
	  });

    const settings  = {
			infinite: true,
			speed: 1500,
			arrows: false,
			slidesToShow: 2,
			autoplay: true,
			dots: true,
			autoplaySpeed: 3000,
			slidesToScroll: 2,

		};

    useEffect(() => {
			let mediaQuery = window.matchMedia("(min-width: 770px)");
			mediaQuery.addListener(setView);
			// this is the cleanup function to remove the listener
			return () => mediaQuery.removeListener(setView);
		  }, []);

  return (
    <div>
      
      <section className="process-ipo">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-4">
              <h2 className="title-first">Hassle Free IPO Investment Process</h2>
              <p>Subscribe upcoming IPOs with us <br/> through a minimal process. <br/> <strong>Invest money not time.</strong></p>
            </div>
              <div className="col-md-8">
                
              {
									view && !view.matches ? 
                  <div className="ipo-list-img">               
										<Slider {...settings} className="process-ipo-list">

      
                        <div className="ipo-list-itm">
                            <h3>01</h3>
                            <h4>Open Demat <br/>Account</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>02</h3>
                            <h4>Bid For IPO</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>03</h3>
                            <h4>IPO Allotment</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>04</h3>
                            <h4>Shares Credited in Demat Account</h4>
                        </div>
                
                     {/* <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid mn-img-big"} width={"900"} height={"248"} /> */}
                
                  </Slider>
                  </div>
                  :
                  <div className="ipo-list-img">
                    <div className="process-ipo-list">
                        <div className="ipo-list-itm">
                            <h3>01</h3>
                            <h4>Open Demat <br/>Account</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>02</h3>
                            <h4>Bid For IPO</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>03</h3>
                            <h4>IPO Allotment</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>04</h3>
                            <h4>Shares Credited in Demat Account</h4>
                        </div>
                    </div>
                     <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid mn-img-big"} width={"900"} height={"248"} />
                  </div>
              }
              </div>
          </div>
        </div>  
      </section>

    </div>
  );
}

export default IPOProcess;
