import React, { useState, useRef, useEffect } from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import evolution from '../../assets/images/demat-images/new-demat/evolution-of-share-ownership.webp';
import HowDoes from '../../assets/images/demat-images/new-demat/how-demat-account-works.webp';
import HowChoose from '../../assets/images/demat-images/new-demat/how-to-choose-best-demat-account.webp';
import Regular from '../../assets/images/demat-images/new-demat/regular-demat-account.webp';
import Repatriable from '../../assets/images/demat-images/new-demat/repatriable-demat-account.webp';
import Nro from '../../assets/images/demat-images/new-demat/nro-demat-account.webp';
import bsda from '../../assets/images/demat-images/new-demat/bsda-demat-account.webp';
import different from '../../assets/images/demat-images/new-demat/different-types-of-demat-account.webp';
import choosing from '../../assets/images/demat-images/new-demat/choosing-a-dp-broker.webp';
import benefits from '../../assets/images/demat-images/new-demat/feature2.webp';
import features from '../../assets/images/demat-images/new-demat/feature1.webp';
import openingprocess from '../../assets/images/demat-images/new-demat/demat-account-opening-process.webp';
import checklist from '../../assets/images/demat-images/new-demat/documents-required-to-open-demat-account.webp';
import charges from '../../assets/images/demat-images/new-demat/demat-account-charges.webp';
import amccharges from '../../assets/images/demat-images/new-demat/choice-amc-charges.webp';
import openingcharges from '../../assets/images/demat-images/new-demat/choice-demat-account-opening-charges.webp';
import tradingaccount from '../../assets/images/demat-images/new-demat/difference-between-demat-and-trading-account.webp';
import diversification from '../../assets/images/demat-images/new-demat/portfolio-diversification.webp';
import buysell from '../../assets/images/demat-images/new-demat/how-to-buy-and-sell-shares.webp';
import transfershares from '../../assets/images/demat-images/new-demat/how-to-transfer-shares-from-one-demat-account-to-another.webp';
import pledgeshares from '../../assets/images/demat-images/new-demat/how-to-pledge-shares-in-a-demat-account.webp';
import addnominee from '../../assets/images/demat-images/new-demat/how-to-add-nominee-to-demat-account.webp';
import closedemat from '../../assets/images/demat-images/new-demat/how-to-close-demat-account.webp';
import closureDemat from '../../assets/images/demat-images/new-demat/demat-account-closing-process.webp';
import feature1 from '../../assets/images/demat-images/new-demat/feature1.webp';
import meta_tags from "../../Data/MetaTags";
import { InView } from 'react-intersection-observer';
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { faTwitter, faLinkedinIn, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
function CommonDematTrading({ data }) {
    // console.log("data", data)
    const [VideoVisibility, setVideoVisibility] = useState(false);
    const handletClick = () => {
        setVideoVisibility(true);
    };
    const [isActive, setIsActive] = useState();
    const [isActive4, setIsActive4] = useState('id0');
    const [initialize, setInitialize] = useState(false);
    const [rendercount, setRenderCount] = useState(() => false);
    const scrollConfig = useRef({
        state: false,
        isTriggered: false
    });

    const [isActive2, setIsActive2] = useState(false); ``

    const handleClick = (event) => {
        setIsActive(current => !current);
    };

    const handleClick2 = (event) => {
        setIsActive2(current => !current);
    };

    const [name, setName] = useState('hideform');
    const [isCheck, setIsCheck] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!scrollConfig.current.state) scrollConfig.current = {
                ...scrollConfig.current,
                state: true
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scrollend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (scrollConfig.current.state) scrollConfig.current = {
                isTriggered: false,
                state: false
            };
        })
    }, []);

    useEffect(() => {
        // !important because of scroll to top that gets triggered after 1s when app is initialized @refer App.js
        setTimeout(() => {
            setInitialize(true);
        }, 1000); // 1s delay is intentional
    }, []);

    function chapterScroll2(id) {
        setIsActive4(id)
        var element = document.getElementById(id);
        window.scrollTo({
            top: element.offsetTop + 120,
            behavior: "smooth"
        });
    }


    useEffect(() => {

        setRenderCount(true)
        if (rendercount === true) {
            let parser = new DOMParser();
            // let doc = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript, 'text/html');
            // let doc1 = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript1, 'text/html');
            // let doc2 = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript2, 'text/html');
            // document.body.appendChild(doc.getElementsByTagName('script')[0] || [] ? doc.getElementsByTagName('script')[0] || [] : '');
            // document.body.appendChild(doc.getElementsByTagName('script1')[0] || [] ? doc1.getElementsByTagName('script')[0] || [] : '');
            // document.body.appendChild(doc.getElementsByTagName('script2')[0] || [] ? doc2.getElementsByTagName('script')[0] || [] : '');
            document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
            document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
            document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
            document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
            if (!(document.getElementById('link1') == null)) {

                document.getElementById('link1').remove();
                document.getElementById('link2').remove();
                document.getElementById('link3').remove();

            }

        }
    }, [rendercount])
    return (
        <>
            <section className="demat-cms-banner" onMouseOver={() => setIsCheck(true)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ban-caption text-center">
                                <h1 className="title-secnd">{data.content[0].maintitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="demat-cms-description">
                <div className="container">
                    <div className="wrap-main">
                        <div className="lft-navigation">
                            <div className="">
                                <h3>Table of Contents</h3>
                                <div className="arrow-sh" onClick={handleClick2}>
                                    <span className={isActive2 ? 'ar-up' : 'ar-down'}>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 7L7 1L1 7" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <div className={isActive2 ? 'list-hide' : 'list-show'}>
                                    <ul className="list-links" id="style-sroll">
                                        {data.tableOfContents.map((item, index) => (
                                            <li key={index}>
                                                <a className={isActive4 === item.id ? "active" : ""}
                                                    onClick={() => { scrollConfig.current = { ...scrollConfig.current, isTriggered: true }; chapterScroll2(item.id) }}>
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 
                                <h3 className="mrgn-top">Share this article</h3>
                                <ul className="socials">
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="sub-description">
                            {data.startpara && (
                                <div dangerouslySetInnerHTML={{ __html: data.startpara }}></div>
                            )}
                            {data.content.map((section, index) => (
                                <InView as="div" className="pr-sec" key={index}
                                    onChange={(e) => { initialize && !scrollConfig.current.isTriggered && e === true && setIsActive4(section.id) }}
                                    id={section.id}>


                                    <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
                                    <div dangerouslySetInnerHTML={{ __html: section.content }}></div>

                                    {/* {section.id === "id1" ?
                                        <a onClick={handletClick} className={"open-vid " + (VideoVisibility ? "active" : "")}>
                                            {VideoVisibility ? (
                                                <iframe className="cust-video"
                                                    src="https://www.youtube.com/embed/3u0VZAHMwO0?si=sqbJJfBthND0ReKo"
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen></iframe>
                                            ) : (
                                                <LazyLoader
                                                    src="https://img.youtube.com/vi/3u0VZAHMwO0/maxresdefault.jpg"
                                                    alt="Thumbnail"
                                                    className="img-fluid"
                                                />
                                            )}
                                        </a>
                                        :
                                        section.id === "id2" ?
                                            <a onClick={handletClick} className={"open-vid " + (VideoVisibility ? "active" : "")}>
                                                {VideoVisibility ? (
                                                    <iframe className="cust-video"
                                                        src="https://www.youtube.com/embed/Qmm7rrwyDzc?si=kXmV-bHdsV_leXv"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                ) : (
                                                    <LazyLoader
                                                        src="https://img.youtube.com/vi/Qmm7rrwyDzc/maxresdefault.jpg"
                                                        alt="Thumbnail"
                                                        className="img-fluid"
                                                    />
                                                )}
                                            </a> :
                                            ""} */}
                                    {/* {section.id === 'id2' && section.images && (
                                        <div className="d-flex justify-content-between col-11">
                                            {section.images.map((image, idx) => (
                                                <span key={idx}>
                                                    <LazyLoader src={image.src} className="img-fluid" alt={image.alt} width="356" height="485" />
                                                </span>
                                            ))}
                                        </div>
                                    )} */}
                                </InView>
                            ))}
                        </div>

                        
                        <div className={"right-form-main " + (isActive ? 'shadow' : 'none-shadow')}>
                            <div className={"form-mobile " + (isActive ? 'p-hide' : 'p-show')}>
                                <button className="close-arrow-mb" onClick={handleClick}>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3164 1.82026e-06C4.63799 -0.00329398 0.0319564 4.46942 0.0285663 9.99011C0.0251763 15.5108 4.62569 19.9889 10.3041 19.9922C13.0322 19.9965 15.6496 18.944 17.5774 17.0674C19.506 15.194 20.5903 12.6526 20.592 10.0021C20.5953 4.48139 15.9948 0.00329772 10.3164 1.82026e-06ZM10.3167 18.9922C5.20633 18.9955 1.06078 14.9706 1.05726 10.0022C1.05381 5.03382 5.19377 1.00336 10.3041 1C12.7594 0.995729 15.1152 1.94287 16.8502 3.63184C18.5859 5.31769 19.5619 7.60468 19.5635 9.98999C19.567 14.9584 15.4271 18.9888 10.3167 18.9922ZM11.0313 9.9961L14.3038 6.81446C14.4998 6.62006 14.4998 6.30896 14.3038 6.11456C14.1051 5.91736 13.7795 5.91419 13.5767 6.10742L10.3041 9.28906L7.03157 6.10748C6.83161 5.91699 6.51163 5.91699 6.31168 6.10748C6.10884 6.30072 6.10558 6.61725 6.30433 6.81446L9.57688 9.9961L6.30433 13.1777C6.2079 13.2715 6.15379 13.3986 6.15373 13.5312C6.15373 13.8073 6.38394 14.0312 6.66795 14.0313C6.80437 14.0314 6.93526 13.9787 7.03157 13.8848L10.3041 10.7031L13.5767 13.8848C13.673 13.9787 13.8039 14.0314 13.9403 14.0313C14.0766 14.0312 14.2073 13.9786 14.3038 13.8849C14.5047 13.6896 14.5047 13.373 14.3038 13.1777L11.0313 9.9961Z" fill="#676767" />
                                    </svg>
                                </button>
                               
                                        <div className="">
                                            <div className="" id="campaignForm">
                                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                    <NewDematAccountForm />
                                                </GoogleReCaptchaProvider>
                                            </div>
                                        </div> 
                            </div>
                            <div className={name}>
                                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                    <button className=" primary-orange-btn scroll-top-account openbtn" onClick={handleClick}>Open Account Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )

}
export default CommonDematTrading;
