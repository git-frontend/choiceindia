
import React from "react";
import Bannerimage from '../../assets/images/fabledetails/detailbanner.png';
import twitterone from '../../assets/images/fabledetails/twitterone.png';
import twittertwo from '../../assets/images/fabledetails/twittertwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';


function Fabdetailsbanner(props) {

    function createMarkup(){
        return {__html: props.html_content};
    }

    return (
        <div className='banner-main'>

            {
                props.isdetail ?
                    <section className="detailbanner">
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-12">
                                    <p className="text-center date">Published August 21, 2021</p>
                                    <h2 className="heading title-secnd text-center">{props.single_data[0].title || 'Texxt'}</h2>
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
                                    <div className="imgblock">
                                        {/* <img src={Bannerimage} className="img-fluid" alt="Loading" /> */}
                                        <img src={props.single_data[0].feature_image || Bannerimage} className="img-fluid" alt="Loading" />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-11">

                                    <div className="textwrap" dangerouslySetInnerHTML={createMarkup()}/>
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
                    </section> : ''
            }



        </div>
    );
}

export default Fabdetailsbanner;
