import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Accordion, Button } from "react-bootstrap";
import cmsService from "../../Services/cmsService";

import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, faClose, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import LazyLoader from '../Common-features/LazyLoader';
import BoardOfDirector from '../../Data/Strategies';
import { useEffect } from "react";
import { useRef } from "react";

function Team() {
  const [value, setValue] = useState();
  const[IsShown2,setIsShown2]= useState(false)
  const [data, setData] = useState();
  const [trigger, setTrigger] = useState(false);
  const [isloading,setisloading ] = useState(true);
  /**use Ref hook to get actual instance and sliderRef constant of type Slider */
  const sliderRef = useRef(<Slider></Slider>);

  const settings = {
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

function closesection(){
  setIsShown2(false)
}

function openPopup() {
  sliderRef.current.slickPause();
  setIsShown2(true);
}

function closesection(){
sliderRef.current.slickPlay();
setIsShown2(false)
}

function loadBoardOfDirector() {
  cmsService.BoardOfdirector().then(
      res => {
          if (res) {
              setisloading(false)
              setData(res.data.data);


          } else {
              setisloading(false)
              setData([]);

          }

      }
  ).catch((error) => {
      setisloading(false)
      setData([]);
  });
}




useEffect(() => {
  setTrigger(true)

  if (trigger === true) {
      loadBoardOfDirector()

  }

}, [trigger])


  return (
    <div>

      <section className="managementteam">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Board of Directors</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="team-list">
                <Slider ref={sliderRef} {...settings} className="team-list-slider">
                {
                      data?.map((res,i)=>{
                        return(
                  <div className="" onClick={() => {setValue(i),openPopup()}} key={i}>
                   <div className="team-item">
                      <span className="img-itm">
                      <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.image}`} className={"img-fluid"} width={"224"} height={"349"} alt={res.title} />
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

                {
                  value || value == 0 ?
                  <Modal show={IsShown2} onHide={() => {closesection()}}  size="lg" aria-labelledby="contained-modal-title-vcenter" className="about-team-modal" centered>
                  <div className="content-extra" >
                  <button  className="icon-table cursor-pointer" onClick={() => {closesection() }} ><FontAwesomeIcon icon={faClose} /></button>
                
                    <div>
                      <div className="team-img-pos" key={(data||[])[value].id}>
                        <div className="team-img">
                        <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${(data || [])[value].image}`} className={"img-fluid"} width={"224"} height={"349"} alt={(data||[])[value].title} />
                        </div>
                        <div className="team-position">
                            <h4>{(data||[])[value].title}<br/> ({(data||[])[value].designation})</h4>
                        </div>
                      </div>
                      <p>{(data||[])[value].description}
                      </p>

                    </div>
                    
                  </div>
                  </Modal>:""
                }

                 

               
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Team;
