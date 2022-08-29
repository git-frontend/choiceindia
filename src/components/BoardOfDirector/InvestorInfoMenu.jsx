
import React, { useState } from "react";
import Navbar from "../Common-features/Navbar";
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


import LazyLoader from '../Common-features/LazyLoader';
function InvestorInfoMenu() {
    const [show, setshow] = useState()

    return (
        <div>


            <section className="Investormenu mt7">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title">Board Of Directors</h2>
                            <Navbar />
                        </div>
                    
                    </div>
                    <div className="row mt5">

                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image1} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mrs. Vinita Patodia</h5>
                                                        <p className="designation">Non-Executive Chairperson</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image2} className={"img-fluid"} width={"224"} height={"349"} alt={"Kamal Poddar"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mr. Kamal Poddar</h5>
                                                        <p className="designation">Managing Director</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image3} className={"img-fluid"} width={"224"} height={"349"} alt={"Suyash Patodia"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mr. Suyash Patodia</h5>
                                                        <p className="designation">Joint Managing Director</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image4} className={"img-fluid"} width={"224"} height={"349"} alt={"Arun Poddar"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5 className="name">Mr. Arun Poddar</h5>
                                                        <p className="designation">Executive Director &amp; CEO</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    {
                        show ?
                            <div>
                                
                                <div className="row mt5">

                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image5} className={"img-fluid"} width={"224"} height={"349"} alt={"Ajay Kejriwal"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mr. Ajay Kejriwal</h5>
                                                        <p className="designation">Executive Director</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image6} className={"img-fluid"} width={"224"} height={"349"} alt={"Subodh Kumar Agarwal"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mr. Subodh Kumar Agarwal</h5>
                                                        <p className="designation">Independent Director</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image7} className={"img-fluid"} width={"224"} height={"349"} alt={"A K Thakur"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mr. A. K. Thakur</h5>
                                                        <p className="designation">Independent Director</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image8} className={"img-fluid"} width={"224"} height={"349"} alt={"Sudha Bhushan"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mrs. Sudha Bhushan</h5>
                                                        <p className="designation">Independent Director</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="row mt5 d-flex justify-content-center">
                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image9} className={"img-fluid"} width={"224"} height={"349"} alt={"Sandeep Singh"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5 className="name">Mr. Sandeep Singh</h5>
                                                        <p className="designation">Independent Director</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team-list">
                                            <div className="team-list-slider">
                                                <div className="team-item">
                                                    <span className="img-itm">
                                                        <LazyLoader src={image10} className={"img-fluid"} width={"224"} height={"349"} alt={"Kanhaiyalal Beriwal"} />
                                                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                                                    </span>
                                                    <div className="namedesg">
                                                        <h5>Mr. Kanhaiya Lal Berwal</h5>
                                                        <p className="designation">Independent Director</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            ""
                    }

                    <div className="mt7 d-flex justify-content-center cursor-pointer">{show ? <a onClick={() => { setshow(false) }}><span className="btn-bg">View Less</span></a> : <a onClick={() => { setshow(true) }}><span className="btn-bg">View More</span></a>}</div>
                </div>


            </section>


        </div>
    );
}

export default InvestorInfoMenu;
