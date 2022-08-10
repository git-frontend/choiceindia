
import React from "react";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Image1 from '../../assets/images/investor-info/Financial-Results.png';
import LazyLoader from "../Common-features/LazyLoader";

function Yeardetail() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };




    return (
        <div>


            <section className="Yeardetail">
                <div className="container">
                    <div className="row">
                        <div className="investor-info-tabs">

                            <div className="yearlist">
                                <button
                                    className={toggleState === 1 ? "tabs  active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}
                                >
                                    <h4>FY2022</h4>

                                </button>
                                <button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                >
                                    <h4>FY2021</h4>

                                </button>
                                <button
                                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(3)}
                                >

                                    <h4>FY2020</h4>

                                </button>
                                <button
                                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(4)}
                                >
                                    <h4>FY2019</h4>

                                </button>
                                <button
                                    className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(5)}
                                >
                                    <h4>FY2018</h4>

                                </button>
                                <button
                                    className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(6)}
                                >
                                    <h4>Others</h4>

                                </button>
                            </div>


                            <div className="content-tabs">
                                <div
                                    className={toggleState === 1 ? "content  active-content" : "content"}
                                >
                                    <div className="banner-tab-cont">
                                        <div className="tab-cont-left">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0" >
                                                    <Accordion.Header>Annual Report and AGM</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                        est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Financial Results</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul className="listing">
                                                            <li className="list">
                                                                <div className="d-flex justify-content-between"> <span>Q2 FY2022 Financial Results</span><a href="#">
                                                                    <LazyLoader src={Image1} className={''} alt={''} />
                                                                    <img src={Image1} className="" alt="" />
                                                                </a></div>
                                                            </li>
                                                            <li className="list">
                                                                <div className="d-flex justify-content-between"> <span>Q1 FY2022 Financial Results</span><a href="#">
                                                                    <LazyLoader src={Image1} className={''} alt={''} />
                                                                    {/* <img src={Image1} className="" alt="" /> */}
                                                                </a></div>
                                                            </li>
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2" >
                                                    <Accordion.Header>	Investor Presentation</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                        est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3" >
                                                    <Accordion.Header>Announcements</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                        est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4" >
                                                    <Accordion.Header>Related Party Transaction</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                        est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5" >
                                                    <Accordion.Header>Notice of Board Meeting</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                        est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6" >
                                                    <Accordion.Header>Closure of Trading Window</Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                        est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                    </div>
                                </div>

                                <div
                                    className={toggleState === 2 ? "content  active-content" : "content"}
                                >
                                    <div className="banner-tab-cont">
                                        <div className="tab-cont-left">
                                            <div className="heading-sec">
                                                <h3 className="title-secnd">Become a Mutual Fund Advisort</h3>
                                                <p>Help people to achieve financial freedom by selling mutual funds through us.</p>
                                            </div>
                                            <a href="/" className="btn-bg">Register</a>
                                        </div>
                                        <div className="tab-cont-right">

                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={toggleState === 3 ? "content  active-content" : "content"}
                                >
                                    <div className="banner-tab-cont">
                                        <div className="tab-cont-left">
                                            <div className="heading-sec">
                                                <h3 className="title-secnd">Become an Insurance Agent</h3>
                                                <p>Assist customers to buy the best insurance which suits all their needs. </p>
                                            </div>
                                            <a href="/" className="btn-bg">Register</a>
                                        </div>
                                        <div className="tab-cont-right">

                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={toggleState === 4 ? "content  active-content" : "content"}
                                >
                                    <div className="banner-tab-cont">
                                        <div className="tab-cont-left">
                                            <div className="heading-sec">
                                                <h3 className="title-secnd">Become a Loan Agent</h3>
                                                <p>Disburse the loan of different companies at the lowest interest rate & earn a good commission.</p>
                                            </div>
                                            <a href="/" className="btn-bg">Register</a>
                                        </div>
                                        <div className="tab-cont-right">

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={toggleState === 5 ? "content  active-content" : "content"}
                                >
                                    <div className="banner-tab-cont">
                                        <div className="tab-cont-left">
                                            <div className="heading-sec">
                                                <h3 className="title-secnd">Become an Insurance Agent</h3>
                                                <p>Assist customers to buy the best insurance which suits all their needs. </p>
                                            </div>
                                            <a href="/" className="btn-bg">Register</a>
                                        </div>
                                        <div className="tab-cont-right">

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={toggleState === 6 ? "content  active-content" : "content"}
                                >
                                    <div className="banner-tab-cont">
                                        <div className="tab-cont-left">
                                            <div className="heading-sec">
                                                <h3 className="title-secnd">Become an Insurance Agent</h3>
                                                <p>Assist customers to buy the best insurance which suits all their needs. </p>
                                            </div>
                                            <a href="/" className="btn-bg">Register</a>
                                        </div>
                                        <div className="tab-cont-right">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Yeardetail;
