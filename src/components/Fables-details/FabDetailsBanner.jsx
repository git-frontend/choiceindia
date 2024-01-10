
import React, { useState, useEffect } from "react";
import Bannerimage from '../../assets/images/fabledetails/choice-blog-default.png';
import ctaBanner from '../../assets/images/fable/cta-banner.png';
import Free from '../../assets/images/fable/free.png';

// import twitterone from '../../assets/images/fabledetails/twitterone.png';
// import twittertwo from '../../assets/images/fabledetails/twittertwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import LazyLoader from "../Common-features/LazyLoader";
import DematAccountForm from '../Common-features/DematAccountForm.jsx';
import SubBrokerForm from '../SubBroker/SubBrokerForm';
import MutualSubBrokerForm from "../Mutual-Fund-Distributor/SubBrokerForm";
import utils from "../../Services/utils";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import DematFormCta from "../Common-features/DematFormCta";
import { useLocation } from 'react-router-dom';
function Fabdetailsbanner(props) {
    const location = useLocation();
    const [rendercount, setRenderCount] = useState(() => false);
    const pageUrl = location.href
    const blogpageUrl = window.location.pathname.indexOf('/blog/unlisted-shares-price-list/') > -1 ? 'yes' : '';
    const [linkage, setLinkage] = useState(['facebook', 'whatsapp', 'linkedin', 'twitter']);
    const descr = "Stay updated with up-to-date thoughts, stories, and ideas about finance only at Choice";



    function shareiconLink(key) {
        let mapper = {
            facebook: { url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, isTextEncode: false, isURLEncode: false },

            whatsapp: { url: `https://api.whatsapp.com/send?text=${props.single_data[0].title ? props.single_data[0].title : ''},${descr},${pageUrl}. `, isTextEncode: false, isURLEncode: false },

            linkedin: { url: `https://www.linkedin.com/shareArticle?mini=fals&url=${pageUrl}&summary=${props.single_data[0].title ? props.single_data[0].title : ''}`, isTextEncode: true, isURLEncode: true },

            twitter: { url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${props.single_data[0].title ? props.single_data[0].title : ''}} `, isTextEncode: false, isURLEncode: true }
        }
        let linkObject = mapper[key];
        window.open(linkObject.url)

    }

    useEffect(() => {
        setRenderCount(true)

        if (rendercount === true) {
            document.getElementById('meta-type').content = "article";
            document.getElementById('meta-url').content = location.href;

            document.getElementById('meta-descr').content = descr;
            document.getElementById('meta-title').content = (props && props.single_data && props.single_data[0]) ? props?.single_data[0].title : "";
            document.getElementById('meta-image').content = (props && props.single_data && props.single_data[0]) ? props?.single_data[0].feature_image : "";


        }
    }, [rendercount])


    function createMarkup() {
        return { __html: props.html_content };
    }

    function fetchContainerClassName() {
        if (props.showForm) {
            return 'col-xl-8 col-md-12';
        } else {
            return 'col-md-12';
        }

    }

    // const Remo = () => {
    //     const location = useLocation();

    //     return (
    //         <>
    //             {location.pathname.match(/.*\/$/) ? (
    //                 //     <Navigate
    //                 //   to={{
    //                 //     pathname: location.pathname.replace(/\/+$/, ""),
    //                 //     search: location.search,
    //                 //   }}
    //                 // />
    //                 location.pathname.replace(/\/+$/, "")
    //             ) : null}
    //         </>
    //     );
    // }

    return (

        <div className='banner-main'>


            {
                props.isdetail ?
                    <section className="detailbanner" id="showCard">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-9 col-md-12">
                                            <p className="text-center date">Published  {utils.formatDate(new Date(props.single_data[0].published_at), "MMMM dd, yyyy")}</p>
                                            <h1 className="heading title-secnd text-center" id="fablesdetail-title">{props.single_data[0].title || 'Texxt'}</h1>
                                            {/* <h2 className="heading title-secnd text-center">TEST</h2> */}
                                            {/* <ul className="tabs">
                                    <li>
                                        International
                                    </li>
                                    <li>
                                        Economy
                                    </li>
                                    <li>
                                        Currency
                                    </li>
                                    <li>
                                        Trending
                                    </li>
                                </ul> */}

                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className={fetchContainerClassName()}>
                                            <div className="imgblock">
                                                {/* {
                                        
                                            props.single_data[0].feature_image ?
                                            <img src={props.single_data[0].feature_image} className="img-fluid" alt={props.single_data[0].title} />:
                                            ""
    
                                        
                                    } */}
                                                {/* <img src={Bannerimage} className="img-fluid" alt="Loading" /> */}
                                                {/* <img src={props.single_data[0].feature_image || Bannerimage} className="img-fluid" alt={props.single_data[0].title} /> */}
                                                <img src={props.single_data[0].feature_image || Bannerimage} className="img-fluid" alt={props.single_data[0].title || 'Choice Blog'} width={860} height={484} />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-11">

                                                    <div className="textwrap" dangerouslySetInnerHTML={createMarkup()} />

                                                    {/* <div className="cta-content">
                                    <div className="ban-cap">
                                        <ul>
                                            <li className="w40">
                                                <h2>Open a <span>
                                                <img src={Free} alt="" height={45} width={116} className="img-fluid"/>
                                                </span><br/>Demat Account in</h2>
                                            </li>
                                            <li className="w40">
                                                <div className="ban-item2">
                                                    <img src={ctaBanner} alt="" height={212} width={315} className="img-fluid"/>
                                                </div>
                                            </li>
                                            <li className="w20">
                                                <div className="btn">
                                                    <a className="btn-open">Open Now</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ban-footer">
                                        <ul>
                                            <li>
                                                <span>Free AMC</span> for First Year
                                            </li>
                                            <li>
                                                <span>No Auto Square</span> <strong>Off</strong> Charges
                                            </li>
                                            <li>
                                                <span>Low DP Charges</span> (₹10)
                                            </li>
                                            <li>
                                                <span>Free Research</span> Advisory
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}

                                                </div>

                                                <div className="col-md-1">
                                                    <div className="right-social-links">
                                                        <ul>
                                                            <li > <a onClick={() => { shareiconLink(linkage[0]) }} className="cursor-pointer" target="_blank">
                                                                <FontAwesomeIcon icon={faFacebookF} />
                                                            </a>
                                                            </li>
                                                            <li > <a onClick={() => { shareiconLink(linkage[1]) }} className="youtube cursor-pointer" target="_blank">
                                                                <FontAwesomeIcon icon={faWhatsapp} />
                                                            </a>
                                                            </li>
                                                            <li > <a onClick={() => { shareiconLink(linkage[2]) }} className="linkdin cursor-pointer" target="_blank">
                                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                                            </a>
                                                            </li>
                                                            <li > <a onClick={() => { shareiconLink(linkage[3]) }} className="twitter cursor-pointer" target="_blank">
                                                                <FontAwesomeIcon icon={faTwitter} />
                                                            </a>
                                                            </li>


                                                        </ul>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                        {
                                            blogpageUrl ?
                                                <div className="col-md-4" id="open-account-wrap"><GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                    <DematAccountForm isFooterVisible={true} isFromFableDetails={true} isPopupVisible={false} />
                                                </GoogleReCaptchaProvider>
                                                    <div className="stickyform formwrap d-flex justify-content-end ">

                                                    </div>
                                                </div>
                                                :
                                                ((props.showForm) ?
                                                    (props.formName === 'form-demat' ?
                                                        <div className="col-md-4" id="open-account-wrap">
                                                            {/* <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                            <DematAccountForm isFooterVisible={true} isFromFableDetails={true} isPopupVisible={true} />
                                        </GoogleReCaptchaProvider> */}
                                                            <DematFormCta />
                                                            <div className="stickyform formwrap d-flex justify-content-end ">

                                                            </div>
                                                        </div> :
                                                        props.formName === 'form-mutual-fund-distributor' ?
                                                            <div className="col-md-4" id="open-account-wrap">
                                                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                                    <MutualSubBrokerForm isFooterVisible={true} isFromFableDetails={true} isPopupVisible={true} />
                                                                </GoogleReCaptchaProvider>
                                                                <div className="stickyform formwrap d-flex justify-content-end ">

                                                                </div>
                                                            </div>

                                                            :
                                                            <div className="col-md-4" id="sub-broker-wrap">
                                                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                                    <SubBrokerForm isFooterVisible={true} isFromFableDetails={true} isPopupVisible={true} />
                                                                </GoogleReCaptchaProvider>
                                                                <div className="franchise-form justify-content-end d-flex">

                                                                </div>
                                                            </div>)
                                                    :

                                                    '')
                                        }

                                    </div>

                                </div>



                            </div>
                        </div>
                    </section> : ''
            }



        </div >
    );
}

export default Fabdetailsbanner;
