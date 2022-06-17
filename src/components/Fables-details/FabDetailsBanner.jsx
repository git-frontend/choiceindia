
import React, { useEffect, useState } from "react";
import Bannerimage from '../../assets/images/fabledetails/detailbanner.png';
import twitterone from '../../assets/images/fabledetails/twitterone.png';
import twittertwo from '../../assets/images/fabledetails/twittertwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import homeServices from '../../Services/homeServices';

function Fabdetailsbanner() {

    /**variable to store the single fable detail */
    const [single_detail, setSingle_Detail] = useState(() => null);
    const [IsDetail, setIsDetail] = useState(() => false);
    const { id } = useParams();
    const [htmlContent , sethtmlContent] = useState(() => '');

    function createMarkup(){
        return {__html: htmlContent};
    }
    // const htmlCss = "<p>Hello from the other side</p>";

    useEffect(() => {
        getSingleFablesDetail();
    }, [])

    function getSingleFablesDetail() {
        homeServices.fablesBlog(id).then(
            res => {
                if (res.data.posts) {
                    setSingle_Detail(() => res.data.posts);
                    sethtmlContent(() => res.data.posts[0].html);
                    // htmlContent = res.data.posts[0].html;
                    // console.log(htmlContent);
                    // console.log(res.data.posts[0].html);
                    // single_detail = res.data.posts;
                    setIsDetail(() => true);
                }
            }
        )
    }
    return (
        <div className='banner-main'>

            {
                IsDetail ?
                    <section className="detailbanner">
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-12">
                                    <p className="text-center date">Published August 21, 2021</p>
                                    <h2 className="heading title-secnd text-center">{single_detail[0].title || 'Texxt'}</h2>
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
                                        <img src={single_detail[0].feature_image || Bannerimage} className="img-fluid" alt="Loading" />
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
                            <div className="row imgwrap">
                                <div className="col-md-6">
                                    <div className="">
                                        <img src={twittertwo} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={twitterone} className="img-fluid" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="textwrap">
                                        <p>Okay!</p>
                                        <p>Now, it’s time for the bigger question. How Shein is planning to participate in the sale?<br />
                                            no longer operate as a stand-alone company and will instead advertise itself as an Amazon vendor.</p>
                                        <p>Coming to the flip side,</p>
                                        <p>There are some issues with Shein's launching on Amazon Prime Day in India. Selling clothes for dirt-cheap prices has environmental and ethical consequences, which a number of Indians are aware of.<br />
                                            Also, several comments on Instagram and Twitter, in general, were critical of the Modi government's Make-in-India push, which favoured Chinese firms.<br />
                                            Nevertheless, Shein had grown in popularity among Gen-Z and millennial buyers, who used the site to ship orders due to its inexpensive costs plus trendy clothes and they are eagerly waiting for its launch.</p>




                                    </div>
                                </div>




                            </div>
                        </div>
                    </section> : <h1> NO DATA FOUND</h1>
            }



        </div>
    );
}

export default Fabdetailsbanner;
