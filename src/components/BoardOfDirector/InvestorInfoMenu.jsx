
import React, { useState, useEffect } from "react";
import Navbar from "../Common-features/Navbar";

import {faClose} from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/images/about-us/vinita-patodia.webp';
import image2 from '../../assets/images/about-us/kamal-poddar.webp';
import image3 from '../../assets/images/about-us/suyash-patodia.webp';
import image4 from '../../assets/images/about-us/arun-poddar.webp';
import image5 from '../../assets/images/about-us/ajay-kejriwal.webp';
import image6 from '../../assets/images/about-us/subodh-kumar-agarwal.webp';
import image7 from '../../assets/images/about-us/akthakur.webp';
import image8 from '../../assets/images/about-us/sudha-bhushan.webp';
import image9 from '../../assets/images/about-us/sandeep-singh.webp';
import image10 from '../../assets/images/about-us/kanhaiyalal-beriwal.webp';
import Slider from "react-slick";
import BoardOfDirector from '../../Data/Strategies';
import cmsService from "../../Services/cmsService";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoader from '../Common-features/LazyLoader';
function InvestorInfoMenu() {
    const [show, setshow] = useState()
    const [value, setValue] = useState();
    const[IsShown2,setIsShown2]= useState(false);
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading,setisloading ] = useState(true);

    const [view, setView] = useState({
        matches: window.innerWidth < 992 ? false : true,
    });

// console.log(BoardOfDirector)

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

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 767px)");
        mediaQuery.addListener(setView);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(setView);
    }, []);

   

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


            <section className="Investormenu mt7 page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 menuwrap">
                            <h2 className="title">Board Of Directors</h2>
                            <Navbar />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            {
                                view && !view.matches  ?

                                    <Slider {...settings} className="mt5" >
                                        {
                                            data?.map((res,i)=>{
                                                return(
                                                    <div className="col-xl-3 col-md-6">
                                                    <div className="team-list">
                                                        <div className="team-list-slider" onClick={() => {setValue(i),setIsShown2(true)}}>
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
                                                    </div>
                                                </div>

                                                )
                                        })
                                    }

                                       
                                        

                                    </Slider>
                                    :
                                   <div >
                                    {
                                      show ?
                                    
                                        <div className="row mt5 justify-content-center">
                                        {
                                            data?.map((res,i)=>{
                                                return(
                                                    <div className="col-xl-3 col-md-6">
                                                    <div className="team-list">
                                                        <div className="team-list-slider" onClick={() => {setValue(i),setIsShown2(true)}}>
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
                                                    </div>
                                                </div>

                                                )
                                        })
                                    }
                                       </div>      
                                     :
                                    <div className="row mt5">
                                        {
                                            data?.slice(0,4).map((res,i)=>{
                                                return(
                                                    <div className="col-xl-3 col-md-6">
                                                    <div className="team-list">
                                                        <div className="team-list-slider" onClick={() => {setValue(i),setIsShown2(true)}}>
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
                                                    </div>
                                                </div>

                                                )
                                        })
                                    }
                                    </div>
}
                                    </div>
                            }

{
    (value || value == 0) ?
    <Modal show={IsShown2} onHide={() => { closesection() }} size="lg" aria-labelledby="contained-modal-title-vcenter" className="about-team-modal" centered>
                                <div className="content-extra" >
                                    <button className="icon-table cursor-pointer" onClick={() => { closesection() }} ><FontAwesomeIcon icon={faClose} /></button>

                                    <div>
                                        <div className="team-img-pos" key={(data || [])[value].id}>
                                            <div className="team-img">
                                                <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${(data || [])[value].image}`} className={"img-fluid"} width={"224"} height={"349"} alt={(data || [])[value].title} />
                                            </div>
                                            <div className="team-position">
                                                <h4>{(data   || [])[value].title}<br /> ({(data    || [])[value].designation})</h4>
                                            </div>
                                        </div>
                                        <p>{(data    || [])[value].description}
                                        </p>

                                    </div>

                                </div>
                            </Modal>:""
}
                            

                        </div>

                    </div>

                   
                </div>


            </section>


        </div>
    );
}

export default InvestorInfoMenu;
