import React, { useState, useRef } from "react";
import ImageTesti1 from '../../assets/images/mutual-fund-distributor/Sneha.webp';
import ImageTesti2 from '../../assets/images/mutual-fund-distributor/Ankit.webp';
import ImageTesti3 from '../../assets/images/mf-app/mithun-kumar.webp';
import ImageTesti4 from '../../assets/images/mutual-fund-distributor/Rajesh.webp';
import ImagePlay from '../../assets/images/mutual-fund-distributor/twitter.svg';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from '../Common-features/LazyLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
function MfTestimonials() {
    const [valRight, setValRight] = useState(() => 0);
    const [dataObj, setdataObj] = useState(() => [
        {
            "img": ImageTesti1, "name": "Sunita Reddyboina", "id":"@SunitaReddyboina",  "date": "26 OCt 2023", "alt": "Sunita Reddyboina, Rajasthan", "letter": "U",
            "des": "App for Mutual funds launched by choice India we can easily invest on that can anybody have the interest to invest in sip mutual funds, this is the best platform to invest, you can easily find the stocks details & this is a paperless investment. Choice FinX I loved it"
        },
        {
            "img": ImageTesti2, "name": "Jayaprakash Reddy", "id":"@JayaprakashReddy",  "date": "21 OCt 2023", "alt": "Jayaprakash Reddy, Hyderabad", "letter": "M",
            "des": "This is the best mutual fund App I found, The app is very simple so that even a beginner can invest and learn by investing a small amount like 500rs, sip calculator and portfolio manger features are impressive. Highly recommended for all types of investors"
        },
        {
            "img": ImageTesti3, "name": "Mithun Kumar", "id":"@MithunKumar", "date": "2 OCt 2023", "alt": "Meena, Jaipur", "letter": "A",
            "des": "A well designed app. Helped me identifying and understanding the go to market and past analysis of the mutual funds. Optimo is at its best providing the financial report and recommendations on the investment. Thank you team."
        },
        {
            "img": ImageTesti4, "name": "Dr. Amitesh Tiwari", "id":"@AmiteshTiwari", "date": "19 OCt 2023", "alt": "Dr. Amitesh Tiwari, Kolkata", "letter": "S",
            "des": "Best app i had seen for investment. I Recommend this app for investment. Option Optimo is like, you hired a CA"
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
            <section className="mf-testimonial">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="heading-sec mb-5">
                                <h2 className="title-secnd">What Investors Says About Our <span>Mutual Fund App</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-11">
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
                                            <div className='d-flex flex-wrap w-80 align-items-center'>
                                                <span className='tag-letter'><LazyLoader src={ImagePlay} className={'img-fluid'} width={"36"} height={"41"} alt={""} /></span>
                                                <h4>{dataObj[0].name}</h4>
                                            </div>
                                            <h6 className="user-id">{dataObj[0].id}</h6>
                                            <h6 className='rght-txt'>{dataObj[0].date}</h6>
                                        </div>
                                        <div className="item-des-cont">
                                            <p>{dataObj[0].des}</p>
                                        </div>
                                        <div className="likes-view">
                                            <div className='likes-view-left'>
                                                <FontAwesomeIcon icon={faHeart} />
                                                <span className="like-count">27</span>
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
