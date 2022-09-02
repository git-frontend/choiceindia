
import React, { useState,useEffect } from "react";
import Bannerimage from '../../assets/images/fabledetails/detailbanner.png';
// import twitterone from '../../assets/images/fabledetails/twitterone.png';
// import twittertwo from '../../assets/images/fabledetails/twittertwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import LazyLoader from "../Common-features/LazyLoader";
import DematAccountForm from '../Common-features/DematAccountForm.jsx';
import SubBrokerForm from '../SubBroker/SubBrokerForm';
import utils from "../../Services/utils";

function Fabdetailsbanner(props) {
    const [rendercount, setRenderCount] = useState(() => false);
    const pageUrl = location.href
    const [linkage, setLinkage] = useState(['facebook', 'whatsapp', 'linkedin', 'twitter']);
    const descr = "Stay updated with up-to-date thoughts."

    function shareiconLink(key) {

        let mapper = {
            facebook: { url: `https://www.facebook.com/sharer/sharer.php?text=${props.single_data[0].title || 'Texxt'},${descr} ${pageUrl}. `, isTextEncode: false, isURLEncode: false },

            whatsapp: { url: `https://api.whatsapp.com/send?text=${props.single_data[0].title || 'Texxt'},${descr},${pageUrl}. `, isTextEncode: false, isURLEncode: false },

            linkedin: { url: `https://www.linkedin.com/shareArticle?url=${props.single_data[0].title || 'Texxt'},${descr},${pageUrl}. `, isTextEncode: true, isURLEncode: true },

            twitter: { url: `https://twitter.com/intent/tweet?url=${props.single_data[0].title || 'Texxt'},${descr},${pageUrl}. `, isTextEncode: false, isURLEncode: true }
        }
        let linkObject = mapper[key];
        window.open(linkObject.url)
        
    }

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            document.getElementById('meta-type').content = "article" ;
            document.getElementById('meta-url').content = "https://dev.choiceindia.com/" ;
          document.getElementById('meta-title').content = props.single_data[0].title || 'Text' ;
          document.getElementById('meta-descr').content = descr ;
          document.getElementById('meta-image').content = props.single_data[0].feature_image || Bannerimage ;
         
        }
      }, [rendercount])




    function createMarkup() {
        return { __html: props.html_content };
    }

    function fetchContainerClassName() {
        if (props.showForm) {
            return 'col-md-7';
        } else {
            return 'col-md-12';
        }

    }


    return (




        <div className='banner-main'>
           

            {
                props.isdetail ?
                    <section className="detailbanner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row ">
                            <div className="col-md-12">
                                <p className="text-center date">Published  {utils.formatDate(new Date(props.single_data[0].published_at), "MMMM dd, yyyy")}</p>
                                <h1 className="heading title-secnd text-center" id="fablesdetail-title">{props.single_data[0].title || 'Texxt'}</h1>
                                {/* <h2 className="heading title-secnd text-center">TEST</h2> */}
                                <ul className="tabs">
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
                                </ul>

                            </div>

                        </div>
                        <div className="row">
                            <div className={fetchContainerClassName()}>
                                <div className="imgblock">
                                    {/* <img src={Bannerimage} className="img-fluid" alt="Loading" /> */}
                                    <img src={props.single_data[0].feature_image || Bannerimage} className="img-fluid" alt={props.single_data[0].title} />
                                </div>
                            </div>
                            {
                                ((props.showForm) ?
                                    (props.formName === 'form-demat' ? <div className="col-md-5" id="open-account-wrap">
                                        <div className="stickyform formwrap d-flex justify-content-end ">
                                            <DematAccountForm isFooterVisible={true} isFromFableDetails={true} isPopupVisible={true} />
                                        </div>
                                    </div> : <div className="col-md-5" id="sub-broker-wrap">
                                        <div className="franchise-form justify-content-end d-flex">
                                            <SubBrokerForm />
                                        </div>
                                    </div>)
                                    : '')
                            }
                            {/* <div className="col-md-5">

                                        </div> */}
                        </div>
                        <div className="row">
                            <div className="col-md-11">

                                <div className="textwrap" dangerouslySetInnerHTML={createMarkup()} />
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

                                        {/* <li > <a href="/" className="instagram" target="_blank">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                    </li>
                                                   
                                                    <li > <a href="/" className="telegram" target="_blank">
                                                        <FontAwesomeIcon icon={faTelegramPlane} />
                                                    </a>
                                                    </li> */}
                                    </ul>

                                </div>


                            </div>

                        </div>
                    </div>
                    {/* {
                                    props.showForm ?
                                        props.formName === 'form-demat' ? <div className="col-md-5 col-sm-6 col-lg-4" id="open-account-wrap">
                                            <div className="stickyform formwrap d-flex justify-content-end ">
                                                <DematAccountForm isFooterVisible={true} isFromFableDetails={true} isPopupVisible={true}/>
                                            </div>
                                        </div> : <div className="col-md-5 col-lg-4 col-sm-6" id="sub-broker-wrap">
                                            <div className="franchise-form justify-content-end d-flex">
                                                <SubBrokerForm />
                                            </div>
                                        </div>
                                        : ''
                                } */}
                    {/* <div className="col-md-5 col-sm-6 col-lg-4" id="open-account-wrap">
                                    <div className="formwrap d-flex justify-content-end ">
                                        <DematAccountForm />
                                    </div>
                                </div> */}
                    {/* <div className="col-md-5 col-lg-4 col-sm-6" id="sub-broker-wrap">
                                    <div className="franchise-form justify-content-end d-flex">
                                        <SubBrokerForm />
                                    </div>
                                </div> */}


                </div>
            </div>
        </section> : ''
}



        </div >
    );
}

export default Fabdetailsbanner;
