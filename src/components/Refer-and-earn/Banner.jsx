
import React from "react";
import Bannerimage from '../../assets/images/refer-earn/banner.webp';
import LazyLoader from '../Common-features/LazyLoader';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Banner() {

    return (
        <div>


            <section className="ref-sec-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-md-7">
                            <div className="sec-banner-left">
                                <h1>Join the Best Demat Account Refer and Earn Program</h1>
                                <div className="banner-box">
                                    <p>Invite your friends and get up to Rs.1000 incentive per referral and your friend will get up to Rs. 500.</p>

                                    <div class="get-link-form generate-refer-link">
                                        <Form className="refer-form"> 
                                            <Form.Group className="formgrp sub-formgrp" controlId="formBasicEmail">
                                                <Form.Control type="text" name="firstName" placeholder="Enter Client ID" className="btn-bg formcontrol" />
                                                <Button variant="primary"
                                                    type="submit" className="btn-bg sendbtn">
                                                    Get Link
                                                </Button>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                                <h4>Don’t have an Account? <a href="https://choiceindia.com/open-free-demat-account">Open Now</a></h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-5 d-flex justify-content-end">
                            <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid refer-banner"} width={"400"} height={"432"} />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Banner;
