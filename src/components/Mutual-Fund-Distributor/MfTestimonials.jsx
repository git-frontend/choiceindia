import React, { useState, useRef } from "react";
import ImageTesti1 from '../../assets/images/mutual-fund-distributor/Sneha.webp';
import ImageTesti2 from '../../assets/images/mutual-fund-distributor/Ankit.webp';
import ImageTesti3 from '../../assets/images/mutual-fund-distributor/Meena.webp';
import ImageTesti4 from '../../assets/images/mutual-fund-distributor/Rajesh.webp';
import ImagePlay from '../../assets/images/mutual-fund-distributor/twitter.svg';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from '../Common-features/LazyLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
function MfTestimonials() {
    const [valRight, setValRight] = useState(() => 0);
    const [dataObj, setdataObj] = useState(() => [
        {
            "img": ImageTesti1, "name": "Sneha, Hyderabad",  "date": "26 OCt 2023", "alt": "Sneha, Hyderabad", "letter": "U",
            "des": "I was looking for a career change when I came across Choice's Mutual Fund Distributor program. The transition was smooth, thanks to their excellent training and resources. It's rewarding to see my clients succeed in their investment journey."
        },
        {
            "img": ImageTesti2, "name": "Ankit, Pune",  "date": "21 OCt 2023", "alt": "Ankit, Pune", "letter": "M",
            "des": "Becoming a Mutual Fund Distributor with Choice has proven to be beneficial for me. Their comprehensive training and support system gave me the confidence to start my own business. I'm now helping others achieve their financial goals while achieving mine."
        },
        {
            "img": ImageTesti3, "name": "Meena, Jaipur","date": "2 OCt 2023", "alt": "Meena, Jaipur", "letter": "A",
            "des": "With Choice, I found a rewarding and flexible career as a Mutual Fund Distributor. Their ongoing training keeps me updated on market trends, helping me provide the best advice to my clients. I highly recommend Choice to anyone looking to become a Mutual Fund Distributor."
        },
        {
            "img": ImageTesti4, "name": "Rajesh, Kolkata",  "date": "19 OCt 2023", "alt": "Rajesh, Kolkata", "letter": "S",
            "des": "Choice's Mutual Fund Distributor program provided me with an opportunity to grow professionally and financially. Their platform is easy to use and their team is always there to support. I'm proud to be a part of the Choice family."
        }, 
    ])
    const [counterRight, setcounterRight] = useState(() => 1);
    const [disableRight, setdisableRight] = useState(() => false);
    const [disableLeft, setdisableLeft] = useState(() => true);
    const counter = useRef(0);
    function toggleForward() {
        if (counterRight === 0) {
            setdisableLeft(true);
            setdisableRight(false);
        } else if (counterRight === 6) {
            setdisableLeft(false);
            setdisableRight(true);
        } else {
            setdisableLeft(false);
            setdisableRight(false);
        }
        setcounterRight(counterRight + 1);
        counter.current = counter.current + 1;
        if (valRight === 6) {
            setValRight(prevCount => prevCount * 0);
        } else {
            setValRight(prevCount => prevCount + 1);
            let temp;
            temp = dataObj.shift();
            dataObj.push(temp);
        }
    }
    function toggleBackward() {
        if (counterRight === 3) {
            setdisableLeft(false);
            setdisableRight(true);
        } else if (counterRight > 2) {
            setdisableLeft(false);
            setdisableRight(false);
        } else {
            setdisableLeft(true);
            setdisableRight(false);
        }
        setcounterRight(counterRight - 1);
        if (valRight === 0) {
            setValRight(prevCount => 3)
        } else {
            setValRight(prevCount => prevCount - 1);
            let temp = dataObj.pop();
            dataObj.unshift(temp);
        }
    }
    return (
        <>
            <section className="mf-testimonial home-testimonial">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="heading-sec mb-5">
                                <h2 className="title-first text-center">Testimonials</h2>
                                <p className="text-center">Hear from our satisfied mutual fund distributors who have found success and
                                    growth with Choice.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10">
                            <div>
                            </div>
                            <div className="testimonial-slider">
                                <div className='imgsub22'>
                                    <LazyLoader src={dataObj[1].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"60"} height={"59"} alt={""} />
                                </div>

                                <div className='imgsub21'>
                                    <LazyLoader src={dataObj[2].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"100"} height={"99"} alt={""} />
                                </div>

                                <div className='imgsub23'>
                                    <LazyLoader src={dataObj[3].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"80"} height={"79"} alt={""} />
                                </div>
                                <div className="slider-item">
                                    <div className="slider-item-img">
                                        <LazyLoader src={dataObj[0].img} threshold={[0, 0.5, 1]} className={"img-fluid main-img-slide"} width={"397"} height={"393"} alt={""} />
                                    </div>
                                    <div className="slider-item-des">
                                        <div className="item-des-name-value d-flex justify-content-between">
                                            <div className='d-flex flex-wrap w-75 align-items-center'>
                                                <span className='tag-letter'><LazyLoader src={ImagePlay} className={'img-fluid'} width={"36"} height={"41"} alt={""} /></span>
                                                <h4>{dataObj[0].name}</h4>
                                            </div>
                                            <h6 className='rght-txt'>{dataObj[0].date}</h6>
                                        </div>
                                        <div className="item-des-cont">
                                            <p>{dataObj[0].des}</p>
                                        </div>
                                        <div className="likes-view">
                                            <div className='likes-view-left'>
                                                <FontAwesomeIcon icon={faHeart} />
                                            </div>
                                            <div className='right-btn-extr'>
                                                <button className='btn btn-outline-primary leftt-btn' aria-label="left arrow" disabled={disableLeft} onClick={toggleBackward} >
                                                    <FontAwesomeIcon icon={faArrowLeftLong} />
                                                </button>
                                                <button className='btn btn-outline-primary rightt-btn btn-xl' aria-label="right arrow" disabled={disableRight} onClick={toggleForward} >
                                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MfTestimonials;
