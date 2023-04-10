
import React from "react";
import image1 from '../../assets/images/investment-banking/investment-banking-advisory.webp';
import image2 from '../../assets/images/investment-banking/merchant-banking.webp';
import image3 from '../../assets/images/investment-banking/ipo-review.webp';
import image4 from '../../assets/images/investment-banking/business-valuation.webp';
import LazyLoader from "../Common-features/LazyLoader";

function InvBankingExplore() {



    return (
        <div>


            <section className="banking-explore">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="title-secnd text-center mn-ttl">Explore</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="inv-bank-sub">
                                <div className="row gx-5 align-items-center flex-md-row-reverse">
                                    <div className="col-xl-7 col-md-6 d-flex justify-content-end">
                                        <div className="rightsec ">
                                            <LazyLoader src={image1} alt={"Investment Banking Advisory"} className={"img-fluid"} width={"443"} height={"334"} />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bnr-left">
                                            <h3 className="title-secnd nt-ttle">Investment Banking:</h3>
                                            <p>We have advised numerous companies across industries and concluded dozens of transactions.</p>
                                            <p><strong>1.</strong> Advice on new and innovative equity linked financial products.</p>
                                            <p><strong>2.</strong> Advice on capital restructuring and balance sheet management through
                                                products like share repurchase, recapitalisation, etc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="sec-sm">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10 col-md-12">

                                        <div className="row gx-5 align-items-center mt-5 pt-5">

                                            <div className="col-xl-7 col-md-6 d-flex justify-content-start">
                                                <div className="rightsec ">
                                                    <LazyLoader src={image2} alt={"Merchant Banking"} className={"img-fluid"} width={"419"} height={"411"} />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-md-6">
                                                <div className="bnr-left">
                                                    <h3 className="title-secnd nt-ttle">Merchant banking:</h3>
                                                    <p className="mb-0">It’s a division responsible for growing your business while partnering with your firm for a progressive synergy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="sec-sm">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10 col-md-12">

                                        <div className="row gx-5 mb-5 align-items-start">

                                            <div className="col-xl-6 col-md-6">
                                                <div className="bnr-left bnr-left2">
                                                    <p><strong>1.</strong> Managing, underwriting and syndication of IPOs and FPOs in Indian Capital markets.</p>
                                                    <p><strong>2.</strong> Advisory, documentation and end-to-end management of regulatory assignments including open offers, buy-back of shares, rights issue, takeovers and any preferential allotment.</p>


                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="bnr-left bnr-left2">
                                                    <p><strong>3.</strong> Drafting and issuance of fairness opinion report &amp; scheme of arrangement <br /> in a merger/acquisition.</p>
                                                    <p><strong>4.</strong> Drafting and issuance of valuation report on ESOP scheme</p>
                                                    <p><strong>5.</strong> Due Diligence, Drafting of PPM under AIF and issuance of certificate.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12">
                            <div className="ipo-read-sub">
                                <div className="row gx-5 align-items-center flex-md-row-reverse">
                                    <div className="col-xl-7 col-md-6 d-flex justify-content-end">
                                        <div className="rightsec ">
                                            <LazyLoader src={image3} alt={"IPO Review"} className={"img-fluid"} width={"420"} height={"407"} />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bnr-left">
                                            <h3 className="title-secnd nt-ttle">IPO Readiness:</h3>
                                            <p className="mb-0">Our team understands the dynamics of various industries for assisting our clients looking for going public</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="sec-sm">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10 col-md-12">

                                        <div className="row gx-5 align-items-center mt-5 pt-5">

                                            <div className="col-xl-7 col-md-6 d-flex justify-content-start">
                                                <div className="rightsec ">
                                                    <LazyLoader src={image4} alt={"Business Valuation"} className={"img-fluid"} width={"419"} height={"411"} />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-md-6">
                                                <div className="bnr-left">
                                                    <h3 className="title-secnd nt-ttle">Valuation:</h3>
                                                    <p className="mb-0">We carry more than 20 years of cumulative core valuation experience, spread across more than 10 sectors and have successfully executed more than 150 valuation assignments.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="sec-sm">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10 col-md-12">

                                        <div className="row gx-5 align-items-start">
                                            <div className="col-md-12">
                                                <h3 className="title-secnd nt-ttle">Key Offerings:</h3>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="bnr-left bnr-left2">

                                                    <ul className="reset">
                                                        <li>Business Valuation</li>
                                                        <li>Share Valuation</li>
                                                        <li>Options Valuation</li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="bnr-left bnr-left2">
                                                    <ul className="reset">
                                                        <li>M&amp;A Valuation and SWAP Ratio</li>
                                                        <li>Brand Valuation</li>
                                                        <li>ESOP &map; SWEAT Equity Valuation</li>
                                                    </ul>
                                                </div>
                                            </div>
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

export default InvBankingExplore;
