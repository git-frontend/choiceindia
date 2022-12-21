
import Modal from 'react-bootstrap/Modal';
import React, { useState,useEffect } from "react";
import Navbar from "../Common-features/Navbar";
import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, faClose, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";


import LazyLoader from '../Common-features/LazyLoader';
import BoardOfDirector from '../../Data/Strategies';

function InvestorInfoMenu() {

    const [value, setValue] = useState(0);
    const[IsShown2,setIsShown2]= useState(false)
    const [show, setshow] = useState()

    const [view,setView]=useState({
		matches: window.innerWidth < 770 ? false : true ,
	  });

	

		const settings  = {
			infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    margin: 15,
    dots: true,
    autoplaySpeed: 800,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

        useEffect(() => {
			let mediaQuery = window.matchMedia("(min-width: 770px)");
			mediaQuery.addListener(setView);
			// this is the cleanup function to remove the listener
			return () => mediaQuery.removeListener(setView);
		  }, []);

          function closesection(){
            setIsShown2(false)
          }

    return (
        <div>


    

        <section className="Investormenu mt7 page-height">
        <div className="container">
          <div className="row">
            <div className="col-md-12 menuwrap">
              <h2 className="title">Board of Directors</h2>
              <Navbar />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="team-list">
                <Slider {...settings} className="team-list-slider">
                {
                      BoardOfDirector?.map((res,i)=>{
                        return(
                  <div className="" onClick={() => {setValue(i),setIsShown2(true)}}>
                   <div className="team-item">
                      <span className="img-itm">
                        <LazyLoader src={res.image} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                      </span>
                      <div className="namedesg">
                        <h5>{res.title}</h5>
                        <p className="designation">{res.designation}</p>
                      </div>


                    </div> 
                  </div>
                   )
                      })

                    }
                 
                </Slider>

                  <Modal show={IsShown2} onHide={() => {closesection()}}  size="lg" aria-labelledby="contained-modal-title-vcenter" className="about-team-modal" centered>
                  <div className="content-extra" >
                  <button  className="icon-table cursor-pointer" onClick={() => {closesection() }} ><FontAwesomeIcon icon={faClose} /></button>
                
                    <div>
                      <div className="team-img-pos" key={(BoardOfDirector||[])[value].id}>
                        <div className="team-img">
                        <LazyLoader src={(BoardOfDirector||[])[value].image} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                        </div>
                        <div className="team-position">
                            <h4>{(BoardOfDirector||[])[value].title}<br/> ({(BoardOfDirector||[])[value].designation})</h4>
                        </div>
                      </div>
                      <p>{(BoardOfDirector||[])[value].description}
                      </p>

                    </div>
                    
                  </div>
                  </Modal>

               
              </div>
            </div>
          </div>
        </div>
      </section>

      
        </div>
    );
}

export default InvestorInfoMenu;
