
import React, { useState, useEffect } from "react";

import Slider from 'react-slick';
import LazyLoader from "../Common-features/LazyLoader";
import personalellipse from '../../assets/images/NBFCPersonalLoan/personalellipse.svg';


function EligiblePersonal() {
    const [name, setName] = useState('hideform');
    const [idscroll, setIdScroll] = useState('');
    /** scroll purpose */
    function chapterScroll(id) {
        // console.log("check", id);
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }


    /** hide and show section */




    // const settings1 = {
    //     infinite: true,
    //     speed: 1500,
    //     slidesToShow: 4,
    //     arrows: false,
    //     autoplay: true,
    //     dots: false,
    //     autoplaySpeed: 1500,
    //     slidesToScroll: 1,
    //     swipeToSlide: true,
    //     responsive: [

    //         {
    //           breakpoint: 992,
    //           settings: {
    //             slidesToShow: 3,
    //             dots: true,
    //             slidesToScroll: 1,
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //           }
    //         }

    //       ]

    // };
    return (
        <div>



            <section className="card-wrap-nbfc elligiblae-personal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd text-center mb-5 mt-5">Who is Eligible ?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* <Slider {...settings1}> */}
                            <div className="card-nbfc-personal">
                                <div className="carditem-nbfc-personal">
                                    <div className="carditem-nbfc">
                                        <h3 className="card-ttl">Age</h3>
                                        <p className="subtext">Minimum : 21 years</p>
                                        <p className="subtext">Maximum: 60 years</p>
                                    </div>
                                </div>
                                <div className="carditem-nbfc-personal">
                                    <img src={personalellipse} alt="" className="img-fluid img"  width={"66"} height={"64"}></img> 
                                </div>
                                <div className="carditem-nbfc-personal">
                                    <div className="carditem-nbfc">
                                        <h3 className="card-ttl">Income</h3>
                                        <p className="subtext">Non-metro: Minimum Rs15,000</p>
                                        <p className="subtext">Metro cities: Minimum Rs20,000</p>
                                    </div>
                                </div>
                                <div className="carditem-nbfc-personal">
                                <img src={personalellipse} alt="" className="img-fluid img"  width={"66"} height={"64"}></img> 
                                </div>
                                <div className="carditem-nbfc-personal">
                                    <div className="carditem-nbfc">
                                        <h3 className="card-ttl">Work Experience</h3>
                                        <p className="subtext">Salaried : minimum 6 months</p>
                                        <p className="subtext">Self employed : minimum 3 years</p>
                                    </div>
                                </div>
                            </div>

                            {/* </Slider> */}
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default EligiblePersonal;
