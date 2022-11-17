
import React from "react";
import Business from '../../assets/images/nbfc-loans/business.webp';
import Individual from '../../assets/images/nbfc-loans/individual.webp';
import PaymentSolutions from '../../assets/images/nbfc-loans/payment-solutions.webp';
import ProductMenu from './ProductMenu';
import LazyLoader from '../Common-features/LazyLoader';


function OurProducts() {

  return (
    <div>
      
     
    <section className="loans-our-products">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="products-menu-flx">
                    <h2 className="title-secnd">Our Products</h2>
                    <ProductMenu />
                </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-11 col-md-12">
                    <div className="loans-products-list">
                        <div className="products-list-item">
                            <div className="list-item-left">
                                <LazyLoader src={Business} alt={"Banner Images"} className={"img-fluid"} width={"586"} height={"366"} />
                            </div>
                            <div className="list-item-right">
                                <h3>Business</h3>
                                <div className="cont-list">
                                    <div className="cont-list-itm">
                                        <h5>MSME Loans</h5>
                                        <p>Financing all the needs of MSMEs with wide range of solutions.</p>
                                    </div>
                                    <div className="cont-list-itm">
                                        <h5>Supply Chain Finance</h5>
                                        <p>This is a set of business financing processes that link various parties in a transaction.</p>
                                    </div>
                                    <div className="cont-list-itm">
                                        <h5>Vehicle Loan</h5>
                                        <p>We offer affordable vehicle loans making sure that you own your dream wheels.</p>
                                    </div>
                                </div>
                                <a href="/"><span className="btn-bg">Learn more</span></a>
                            </div>
                        </div>
                        <div className="products-list-item list-item-reverse">
                            <div className="list-item-left">
                                <LazyLoader src={Individual} alt={"Banner Images"} className={"img-fluid"} width={"586"} height={"366"} />
                            </div>
                            <div className="list-item-right">
                                <h3>Individual</h3>
                                <div className="cont-list">
                                    <div className="cont-list-itm">
                                        <h5>Vehicle Loan</h5>
                                        <p>We offer affordable vehicle loans making sure that you own your dream wheels.</p>
                                    </div>
                                    <div className="cont-list-itm">
                                        <h5>Flexi Credit</h5>
                                        <p>Our Flexi-Credit gives the freedom to withdraw or deposit multiple times from loan accounts.</p>
                                    </div>
                                    <div className="cont-list-itm">
                                        <h5>Study Loan</h5>
                                        <p>Our loans aim to help parents to get financial assistance for their children’s higher studies</p>
                                    </div>
                                </div>
                                <a href="/"><span className="btn-bg">Learn more</span></a>
                            </div>
                        </div>
                        <div className="products-list-item">
                            <div className="list-item-left">
                                <LazyLoader src={PaymentSolutions} alt={"Banner Images"} className={"img-fluid"} width={"586"} height={"366"} />
                            </div>
                            <div className="list-item-right">
                                <h3>Payment Solutions</h3>
                                <div className="cont-list">
                                    <div className="cont-list-itm">
                                        <h5>Prepaid Cards</h5>
                                        <p>Pay securely and earn cash back when you use your card on ecommerce, retail stores and more.</p>
                                    </div>
                                    <div className="cont-list-itm">
                                        <h5>QR Codes</h5>
                                        <p>Scanning the QR code through your mobile is the easiest method of payment for users. </p>
                                    </div>
                                </div>
                                <a href="/"><span className="btn-bg">Learn more</span></a>
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

export default OurProducts;
