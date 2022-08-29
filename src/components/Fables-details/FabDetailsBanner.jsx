
import React from "react";
import Bannerimage from '../../assets/images/fabledetails/detailbanner.png';
// import twitterone from '../../assets/images/fabledetails/twitterone.png';
// import twittertwo from '../../assets/images/fabledetails/twittertwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import LazyLoader from "../Common-features/LazyLoader";
import DematAccountForm from '../Common-features/DematAccountForm.jsx';
import SubBrokerForm from '../SubBroker/SubBrokerForm';
import utils from "../../Services/utils";

function Fabdetailsbanner(props) {

    function createMarkup(){
        return {__html: props.html_content};
    }
   // console.log('FablesBanner',props);
    function fetchContainerClassName() {
        if (props.showForm) {
            return 'col-md-7';
        } else {
            return 'col-md-12';
        }
        // return props.showForm ? 'col-md-7 col-lg-8 col-sm-6' : 'col-md-12';
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
                                            <p className="text-center date">Published  {utils.formatDate(new Date(props.single_data[0].published_at),"MMMM dd, yyyy")}</p>
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
                                        <div className= {fetchContainerClassName()}>
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
                                                    <li> <a href="/" target="_blank">
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                    </a>
                                                    </li>
                                                    <li> <a href="/" target="_blank">
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </a>
                                                    </li>
                                                    <li> <a href="/" target="_blank">
                                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                                    </a>
                                                    </li>
                                                    <li> <a href="/" target="_blank">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                    </li>
                                                    <li> <a href="/" target="_blank">
                                                        <FontAwesomeIcon icon={faYoutube} />
                                                    </a>
                                                    </li>
                                                    <li> <a href="/" target="_blank">
                                                        <FontAwesomeIcon icon={faTelegramPlane} />
                                                    </a>
                                                    </li>
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



        </div>
    );
}

export default Fabdetailsbanner;
