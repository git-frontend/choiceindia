import React from "react";
import { Button, Form } from "react-bootstrap";
import image1 from "../../assets/images/Faq/faq1.png";
import LazyLoader from '../Common-features/LazyLoader';

function FaqBanner() {

    return (

        <>

            <div className="faq-main">

                <section className="banner-app">
                    <LazyLoader src={image1} className={"ban-img"} alt={"Loading"} />
                    {/* <img src={image1} className="ban-img" alt='Loading'/> */}
                    <div className='app-banner-caption'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='caption-cont'>
                                        <h1 className='faq-title'>How can I help you ?</h1>
                                        <div className="faq-search">
                                            <Form.Control type="text" placeholder="Search for your issue" />
                                            <Button variant="warning">Search</Button>
                                        </div>
                                        <div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </>
    )

}
export default FaqBanner

