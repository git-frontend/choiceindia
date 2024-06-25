import React from "react";
import { useState, useEffect } from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import evolution from '../../assets/images/demat-images/new-demat/evolution-of-share-ownership.webp';
import HowDoes from '../../assets/images/demat-images/new-demat/how-demat-account-works.webp';
import HowChoose from '../../assets/images/demat-images/new-demat/how-to-choose-best-demat-account.webp';
import Regular from '../../assets/images/demat-images/new-demat/regular-demat-account.webp';
import Repatriable from '../../assets/images/demat-images/new-demat/repatriable-demat-account.webp';
import Nro from '../../assets/images/demat-images/new-demat/nro-demat-account.webp';
import bsda from '../../assets/images/demat-images/new-demat/bsda-demat-account.webp';
import different from '../../assets/images/demat-images/new-demat/different-types-of-demat-account.webp';
import choosing from '../../assets/images/demat-images/new-demat/choosing-a-dp-broker.webp';
import benefits from '../../assets/images/demat-images/new-demat/feature2.webp';
import features from '../../assets/images/demat-images/new-demat/feature1.webp';
import openingprocess from '../../assets/images/demat-images/new-demat/demat-account-opening-process.webp';
import checklist from '../../assets/images/demat-images/new-demat/documents-required-to-open-demat-account.webp';
import charges from '../../assets/images/demat-images/new-demat/demat-account-charges.webp';
import amccharges from '../../assets/images/demat-images/new-demat/choice-amc-charges.webp';
import openingcharges from '../../assets/images/demat-images/new-demat/choice-demat-account-opening-charges.webp';
import tradingaccount from '../../assets/images/demat-images/new-demat/difference-between-demat-and-trading-account.webp';
import diversification from '../../assets/images/demat-images/new-demat/portfolio-diversification.webp';
import buysell from '../../assets/images/demat-images/new-demat/how-to-buy-and-sell-shares.webp';
import transfershares from '../../assets/images/demat-images/new-demat/how-to-transfer-shares-from-one-demat-account-to-another.webp';
import pledgeshares from '../../assets/images/demat-images/new-demat/how-to-pledge-shares-in-a-demat-account.webp';
import addnominee from '../../assets/images/demat-images/new-demat/how-to-add-nominee-to-demat-account.webp';
import closedemat from '../../assets/images/demat-images/new-demat/how-to-close-demat-account.webp';
import closureDemat from '../../assets/images/demat-images/new-demat/demat-account-closing-process.webp';
import feature1 from '../../assets/images/demat-images/new-demat/feature1.webp';
import meta_tags from "../../Data/MetaTags";
import { InView } from 'react-intersection-observer';

import "./new-demat-page.scss";
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { useRef } from "react";



function OpenDematNew() {
    const [VideoVisibility, setVideoVisibility] = useState(false);
    const handletClick = () => {
        setVideoVisibility(true);
    };
    const [isActive, setIsActive] = useState();
    const [isActive4, setIsActive4] = useState('id0');
    const [initialize, setInitialize] = useState(false);
    const [rendercount, setRenderCount] = useState(() => false);
    const scrollConfig = useRef({
        state: false,
        isTriggered: false
    });

    const [isActive2, setIsActive2] = useState(false);``

    const handleClick = (event) => {
        setIsActive(current => !current);
    };

    const handleClick2 = (event) => {
        setIsActive2(current => !current);
    };

    const [name, setName] = useState('hideform');
    const [isCheck, setIsCheck] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!scrollConfig.current.state) scrollConfig.current = {
                ...scrollConfig.current,
                state: true
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scrollend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (scrollConfig.current.state) scrollConfig.current = {
                isTriggered: false,
                state: false
            };
        })
    }, []);

    useEffect(() => {
        // !important because of scroll to top that gets triggered after 1s when app is initialized @refer App.js
        setTimeout(() => {
            setInitialize(true);
        }, 1000); // 1s delay is intentional
    }, []);

    function chapterScroll2(id) {
        setIsActive4(id)
        var element = document.getElementById(id);
        window.scrollTo({
            top: element.offsetTop + 120,
            behavior: "smooth"
        });
    }


    useEffect(() => {

        setRenderCount(true)
        if (rendercount === true) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript, 'text/html');
            let doc1 = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript1, 'text/html');
            let doc2 = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript2, 'text/html');
            document.body.appendChild(doc.getElementsByTagName('script')[0] || [] ? doc.getElementsByTagName('script')[0] || [] : '');
            document.body.appendChild(doc.getElementsByTagName('script1')[0] || [] ? doc1.getElementsByTagName('script')[0] || [] : '');
            document.body.appendChild(doc.getElementsByTagName('script2')[0] || [] ? doc2.getElementsByTagName('script')[0] || [] : '');
            document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
          document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
          document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
          document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
          if(!(document.getElementById('link1')==null)){
          
          document.getElementById('link1').remove();
          document.getElementById('link2').remove();
          document.getElementById('link3').remove();
          
        }
          
        }
    }, [rendercount])

    return (
        <div>

            <section className="demat-cms-banner" onMouseOver={() => setIsCheck(true)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ban-caption text-center">
                                <h1 className="title-secnd">Demat Account</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="demat-cms-description">
                <div className="container">
                    <div className="wrap-main">
                        <div className="sub-description">
                            <div className="pr-sec">
                                <p>Welcome to the ultimate guide for beginners who aspire to invest or trade in securities including stocks, mutual funds, bonds, and more. This comprehensive guide will provide you with a detailed understanding of Demat accounts.<br /><br />
                                    Explore topics related to Demat accounts, how they work, the different types available, and more. Gain insight into their significance and how they play a pivotal role in your investment journey.</p>
                            </div>
                            <InView as="div" className="pr-sec" onChange={(e) => { initialize && !scrollConfig.current.isTriggered && e === true && setIsActive4('id0') }} id="id0">
                                <h2>What is Demat Account?</h2>
                                <p>A Demat account or in-short a dematerialized account is an account that securely holds an investor's securities like stocks, bonds, mutual funds and more. It acts as an intermediary between the investors and the stock market to ensure smooth and paperless transactions between them.
                                <br /><br />
                                You can assume it as a bank account but here instead of cash, your demat account holds your shares and other securities safely and you can effortlessly add or withdraw your assets as per your need.
                               </p>
                                <h3>What is Dematerialization?</h3>
                                <p>In today's digital age, you can <a href="/open-free-demat-account">open a Demat account</a> within minutes. This was not the case earlier where shares were traded in the form of physical paper certificates. This process had many limitations and hence the process of dematerialization was introduced.
                                <br/><br/>
                                <a href="/blog/dematerialisation/">Dematerialization</a> refers to the process of <a href="/blog/physical-shares-to-demat/">converting physical share certificates</a> into electronic form.This transformation enabled easy access to your shares from anywhere in the world. 
                                The introduction of a Demat account ensured seamless tracking and monitoring of investors holdings.
                                <br /><br /> </p>
                                <a
                                    onClick={handletClick}
                                    className={"open-vid " + (VideoVisibility ? "active" : "")}
                                >
                                    {VideoVisibility ? (
                                        <iframe
                                            className="cust-video"
                                            src="https://www.youtube.com/embed/3u0VZAHMwO0?si=sqbJJfBthND0ReKo"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <LazyLoader
                                            src="https://img.youtube.com/vi/3u0VZAHMwO0/maxresdefault.jpg"
                                            alt="Thumbnail"
                                            className="img-fluid"
                                        />
                                    )}

                                </a>
                            </InView>
                           
                            <InView as="div" className="pr-sec" onChange={(e) => !scrollConfig.current.isTriggered && e === true && setIsActive4('id5')} id="id5">
                                <h2>Features and Benefits of Demat Account</h2>
                                <p>Demat accounts come packed with features and benefits to simplify your investment journey. Here are some of the key highlights:</p>
                                <ol className="drk-bld">
                                    <li>
                                        <h3>Easily Accessible</h3>
                                        <p>With internet connectivity, you can access your Demat account 24/7 to monitor holdings and execute transactions from anywhere.</p>
                                    </li>
                                    <li>
                                        <h3>Safety and Security</h3>
                                        <p>Demat accounts offer unparalleled safety for your financial assets, significantly reducing the risk of loss or theft.</p>
                                    </li>
                                    <li>
                                        <h3>Elimination of Paper Certificates</h3>
                                        <p>With Demat accounts the shares are stored in digital form making them easily accessible eliminating the need to manage the physical share certificates. Additionally, unlike physical share certificates, demat holdings do not require stamp duty, saving you additional costs.</p>
                                    </li>
                                    <li>
                                        <h3>All in one account</h3>
                                        <p>A Demat account acts as a secure storage for your financial assets like shares and securities, bonds, ETFs, debentures and more. This consolidation simplifies asset management and facilitates tax filing with all your records in one place.</p>
                                    </li>
                                    <li>
                                        <h3>Easy Transmission</h3>
                                        <p>In the unfortunate event of a Demat account holder's demise, assets can be seamlessly transferred to the next of kin. This ensures a hassle-free process compared to physical certificates.</p>
                                    </li>
                                </ol>
                                <a
                                    onClick={handletClick}
                                    className={"open-vid " + (VideoVisibility ? "active" : "")}
                                >
                                    {VideoVisibility ? (
                                        <iframe
                                            className="cust-video"
                                            src="https://www.youtube.com/embed/Qmm7rrwyDzc?si=kXmV-bHdsV_leXv_"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <LazyLoader
                                            src="https://img.youtube.com/vi/Qmm7rrwyDzc/maxresdefault.jpg"
                                            alt="Thumbnail"
                                            className="img-fluid"
                                        />
                                    )}
                                </a>
                                <br/><br/>
                                <p>Other than the above mentioned benefits, there are many other <a href="/blog/benefits-of-a-demat-account/">benefits of a demat account</a> like regular and automatic updates about Corporate actions like dividends, bonuses, or split, integration with trading account, loan against securities, faster and smoother settlements, reduction in errors
                                </p>
                                <div className="d-flex justify-content-between col-11">
                                    <span><LazyLoader src={features} className="img-fluid" alt={"Benefits of Demat Account"} width={"356"} height={"485"} /></span>
                                    <span><LazyLoader src={benefits} className="img-fluid" alt={"Benefits of Demat Account"} width={"356"} height={"485"} /></span>
                                </div>
                                
                                
                            </InView>

                            <InView as="div" className="pr-sec" onChange={(e) => !scrollConfig.current.isTriggered && e === true && setIsActive4('id2')} id="id2">
                                <h2>Types of Demat Accounts in India</h2>
                                <p>In India, there are several <a href="/blog/demat-account-types/">types of Demat accounts</a> to cater to various investor profiles. Here is a quick look:</p>
                                <ol className="drk-bld">
                                    <li>
                                        <h3>Regular Demat Account</h3>
                                        <p>Ideal for Indian residents, this account is managed by depository participants, and regulated by two depositories. It offers swift transactions, allowing you to buy or sell shares within minutes. Regular Demat accounts could be categorized into: <br /><br />
                                            <a href="/minor-demat-account"><strong>Minor Demat Account:</strong></a> Specifically designed for minors, this account allows parents or guardians to manage investments on behalf of their children until they reach the legal age of 18. It offers a secure way to build a financial foundation for the younger generation.<br /><br />
                                            <a href="/corporate-demat-account"><strong>Corporate Demat Account:</strong></a> This type of Demat account is tailored for corporate entities and organizations. It enables businesses to hold and manage their securities electronically, facilitating smoother transactions and enhanced financial control. Corporate Demat accounts are instrumental in corporate actions and shareholder meetings.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Repatriable Demat Account (<a href="/nri-demat-account">NRI Demat Account</a>)</h3>
                                        <p>It’s a type of demat account designed for NRIs so that they can leverage this account to transfer funds abroad . It requires an NRE bank account for operation.</p>
                                    </li>
                                    <li>
                                        <h3>Non-Repatriable Demat Account</h3>
                                        <p>This is also intended towards NRIs but unlike the repatriable demat account, in a non-repatriable demat account, funds cannot be transferred abroad. It necessitates an NRO bank account association.</p>
                                    </li>
                                    <li>
                                        <h3>Basic Services Demat Account</h3>
                                        <p>Designed to promote financial inclusion, the Basic Services Demat Account caters to individuals from economically disadvantaged backgrounds. Offering a simplified and cost-effective way to participate in the Indian securities market. This type of account is subject to certain restrictions and limitations, making it an accessible entry point for new investors with limited resources.</p>
                                    </li>
                                </ol>

                            </InView>
                            <InView as="div" className="pr-sec" onChange={(e) => { initialize && !scrollConfig.current.isTriggered && e === true && setIsActive4('id1') }} id="id1">
                                <h2><a href="/blog/how-demat-account-works/">How Does a Demat Account Work?</a></h2>
                                <p>A Demat account functions as the digital vault for your securities. It allows you to buy, hold, and sell shares with ease, regardless of your location. However, it doesn't operate in isolation. Here's how it collaborates with other elements to offer seamless transactions:</p>
                                <p><strong>Account opening -</strong>  Stock brokers help you open a Demat account and in return they charge some fees in order to maintain the same. <br /><br />
                                <strong>Link it with a trading account -</strong> In order to carry out your trading activities, you need to link your demat account with a trading account. Now-a-days opening a trading account doesn’t require any individual process as brokers open it alongside while one opens a demat account and hence they are already linked to each other.
                                <br /><br />
                                <strong>Order placement -</strong>  Your Depository Participant (DP) forwards your buy orders to the stock exchange when you make purchases via a trading platform.
                                <br/><br/>
                                <strong>Settlement -</strong> Once your buy order matches with a corresponding sell order, the stock exchange sends it to a clearinghouse for settlement. At the end of the trading day, the shares you've bought are credited to your Demat account. Similarly, the seller's Demat account is debited for the sold shares.
                                <br/><br/>
                                    <a
                                    onClick={handletClick}
                                    className={"open-vid " + (VideoVisibility ? "active" : "")}
                                >
                                    {VideoVisibility ? (
                                        <iframe
                                            className="cust-video"
                                            src="https://www.youtube.com/embed/at5pItTsJJE?si=VgNo0MHto7TNA245"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <LazyLoader
                                            src="https://img.youtube.com/vi/at5pItTsJJE/maxresdefault.jpg"
                                            alt="Thumbnail"
                                            className="img-fluid"
                                        />
                                    )}

                                </a>
                                    <br /><br />
                                    Remember, without a trading account, you cannot utilize your Demat account for investments. A trading account handles the monetary transactions associated with buying and selling shares.
                                </p>
                            </InView>
                            <InView as="div" className="pr-sec" onChange={(e) => !scrollConfig.current.isTriggered && e === true && setIsActive4('id7')} id="id7">
                                <h2><a href="/blog/documents-required-for-demat-account-opening/">Documents Required for Demat Account Opening</a></h2>
                                <p>Proper documentation is crucial when opening a Demat account. Here's a list of the essential documents:</p>
                                <ol className="none-para drk-bld">
                                    <li><strong>Proof of Identity:</strong>
                                        <ol>
                                            <li>Aadhar Card</li>
                                            <li>Passport</li>
                                            <li>Voter ID</li>
                                            <li>Driver's License</li>
                                            <li>PAN Card</li>
                                        </ol>
                                    </li>
                                    <li><strong>Proof of Address:</strong> Acceptable documents include:
                                        <ol>
                                            <li>Passport</li>
                                            <li>Voter ID</li>
                                            <li>Driver's License</li>
                                            <li>Aadhar Card</li>
                                            <li>Recent utility bill (electricity, water, gas, etc.)</li>
                                            <li>Bank statement</li>
                                        </ol>
                                    </li>
                                    <li><strong>PAN Card(mandatory)</strong></li>
                                    <li><strong>Passport-Size Photographs:</strong> Typically, you need 2-3 recent passport-sized photographs if you opt for the offline process. For the online process, it will be e-KYC authentication.</li>
                                </ol>
                                <p>Ensure that all documents are self-attested copies, and keep the original documents handy for verification purposes during the <a href="/blog/demat-account-opening-process/">demat account opening process</a>.</p>
                                <span className="bl-box">For certain segments, such as derivatives, income proofs may be necessary.</span>
                            </InView>
                            <InView as="div" className="pr-sec" onChange={(e) => !scrollConfig.current.isTriggered && e === true && setIsActive4('id8')} id="id8">
                                <h2><a href="/blog/demat-account-charges/">Demat Account Charges</a></h2>
                                <p>Opening a Demat account is often free or even if it's charged, it usually requires a nominal fee. Other than the opening fees, there are various fees and charges associated with maintaining and using it. Some common Demat account charges include</p>
                                <ol className="">
                                    <li>
                                        <p>Annual Maintenance Charges (AMC)</p>
                                    </li>
                                    <li>
                                        <p>Transaction Charges</p>
                                    </li>
                                    <li>
                                        <p>Debit Transaction Charges</p>
                                    </li>
                                    <li>
                                        <p>Dematerialization Charges</p>
                                    </li>
                                    <li>
                                        <p>Rematerialization Charges</p>
                                    </li>
                                    <li>
                                        <p>Pledge Charges</p>
                                    </li>
                                    <li>
                                        <p>POA (Power of Attorney) Charges</p>
                                    </li>
                                    <li>
                                        <p>Custodian Fees</p>
                                    </li>
                                    <li>
                                        <p>Failed Transaction Charges</p>
                                    </li>
                                    <li>
                                        <p>Account Closure Charges</p>
                                    </li>
                                    <li>
                                        <p>Stamp Duty</p>
                                    </li>
                                </ol>
                                <p>It's crucial to understand the fee structure of your chosen DP and Demat account to avoid any surprises. Some brokers offer <a href="/campaign/free-amc-demat-account">zero AMC Demat account</a>, making it cost-effective for investors.</p>
                            </InView>
                            <InView as="div" className="pr-sec" onChange={(e) => !scrollConfig.current.isTriggered && e === true && setIsActive4('id6')} id="id6">
                                <h2><a href="/blog/how-to-open-demat-account/">How to Open a Demat Account?</a></h2>
                                <p>Opening a Demat Account has been a lot easier today, thanks to digitalization. You have two primary options: online and offline account opening.</p>
                                <h3><a href="/blog/demat-account-opening-online/">Online Demat Account Opening</a></h3>
                                <p>Most brokerage firms offer online account opening, allowing you to complete the process from the comfort of your home. It's quick, convenient, and paperless.</p>
                                <a
                                    onClick={handletClick}
                                    className={"open-vid " + (VideoVisibility ? "active" : "")}
                                >
                                    {VideoVisibility ? (
                                        <iframe
                                            className="cust-video"
                                            src="https://www.youtube.com/embed/dbtHtNsWZkI?si=5os5LGH4EX5NSeWd"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <LazyLoader
                                            src="https://img.youtube.com/vi/dbtHtNsWZkI/maxresdefault.jpg"
                                            alt="Thumbnail"
                                            className="img-fluid"
                                        />
                                    )}

                                </a>
                                <br />
                                <br/>
                                <br/>
                                <p>An online demat account opening process involves:</p>
                                <ol className="none-para">
                                    <li>Visiting the preferred broking company’s official website</li>
                                    <li>Click on the 'Open Demat Account' button</li>
                                    <li>Enter your details, including name, phone number, and city</li>
                                    <li>Provide your date of birth and PAN card details</li>
                                    <li>Input your mobile number and email ID to receive OTP for verification</li>
                                    <li>Verify your account with the OTP, and you'll be redirected to a new window</li>
                                    <li>Fill in your basic details and select an AMC (Annual Maintenance Charges) plan</li>
                                    <li>Upload all necessary documents and proceed to the NSDL website for e-signature</li>
                                    <li>Enter your Aadhar details (ensure your phone number is linked to your Aadhar card) and receive an OTP</li>
                                    <li>After successful verification, your Demat account will be opened and activated</li>
                                </ol>
                                <LazyLoader src={openingprocess} className="img-fluid" alt={"Demat Account Opening Process"} width={"670"} height={"1029"} /><br /><br />
                                <span className="bl-box">Choice completes the verification process in under 4 hours. Our team will assist you if you encounter any issues during the Demat account opening process.</span>
                            </InView>

                            <InView as="div" className="pr-sec" onChange={(e) => !scrollConfig.current.isTriggered && e === true && setIsActive4('id17')} id="id17">
                                <h2>Demat Account - Frequently Asked Questions</h2>
                                <p>Got questions? Explore our FAQs for answers to common questions and concerns related to Demat account. If you need further assistance or personalized guidance, feel free to contact us.</p>
                                <ul>
                                    <li>
                                        <h3>What is the eligibility to have a demat account?</h3>
                                        <p>A Demat account can be opened by Indian residents, non-resident Indians (NRIs), and foreign investors through registered depository participants (DPs).</p>
                                    </li>
                                    <li>
                                        <h3>Is Demat account safe?</h3>
                                        <p>Demat being a digitalised account is regulated by SEBI, and registered under NSDL and CDSL. However being associated with a reputed broker like choice ensures safety.</p>
                                    </li>
                                    <li>
                                        <h3>Can I have multiple Demat accounts?</h3>
                                        <p>Yes, you can have multiple Demat accounts, but there are regulatory restrictions. Each account must have a different purpose or ownership structure.</p>
                                    </li>
                                    <li>
                                        <h3>What is the eligibility to open a demat account?</h3>
                                        <p><strong>Age -</strong> There is no minimum age criteria. Individuals above 18 yers are eligible for a regular demat account while the ones below 18 can open a minor demat account. Their parents or guardians will be in-charge of the account until the minor comes to age.
                                        <br/><br/>
                                        <strong>Citizenship -</strong> Must be Indian Citizen residing in India
                                        <br/><br/>
                                        <strong>Other requirements -</strong> Have valid pan card & a valid address proof (Aadhar, Voter ID, Passport, Driving License)
                                        </p>
                                    </li>
                                </ul>
                            </InView>
                       
                            <InView as="div" className="pr-sec" onChange={(e) => !scrollConfig.current.isTriggered && e === true && setIsActive4('id19')} id="id19">
                                <h2>Demat Glossary</h2>
                                <p>A glossary of key terms and phrases related to Demat accounts to help you better understand the world of electronic securities and investments:</p>
                                <ol className="none-para">
                                    <li><strong>Account Closure:</strong> The process of permanently closing a Demat account when it is no longer needed.</li>
                                    <li><strong>Account Opening Fee:</strong> A one-time charge for opening a Demat account, which varies between Depository Participants (DPs).</li>
                                    <li><strong>Aadhar Card:</strong> A government-issued identity document in India. While not mandatory, it can be used for identity verification when opening a Demat account.</li>
                                    <li><strong>Annual Maintenance Charges (AMC):</strong> Yearly fees for maintaining a Demat account, typically varying based on the DP and account type.</li>
                                    <li><strong>Asset Allocation:</strong> The distribution of investments across different asset classes to manage risk and optimize returns.</li>
                                    <li><strong>Bonus Shares:</strong> Additional shares issued to existing shareholders by a company as a reward.</li>
                                    <li><strong>Capital Gains Tax:</strong> Tax applied to the profit earned from selling securities, depending on the holding period.</li>
                                    <li><strong>Centralized Recordkeeping:</strong> All investments electronically recorded in one place for convenient management.</li>
                                    <li><strong>Client ID:</strong> A unique identification number assigned to each Demat account holder by their DP.</li>
                                    <li><strong>Consolidated Asset Storage:</strong> A Demat account serving as a single repository for all financial assets, simplifying asset management and tax filing.</li>
                                    <li><strong>Corporate Actions:</strong> Actions taken by a company that may affect shareholders, such as dividends, bonuses, or splits.</li>
                                    <li><strong>Custodian Fee:</strong> Fees related to the custody of certain securities, often foreign ones.</li>
                                    <li><strong>Debit Transaction Charges:</strong> Fees applied when selling or transferring securities from a Demat account.</li>
                                    <li><strong>Dematerialization (Demat):</strong> The process of converting physical share certificates into electronic form.</li>
                                    <li><strong>Depository:</strong> An organization or institution responsible for holding and safeguarding financial securities in electronic form.</li>
                                    <li><strong>Depository Participant (DP):</strong> An intermediary or agent authorized by the depository to offer Demat account services to investors.</li>
                                    <li><strong>Diversification:</strong> Spreading investments across different asset classes and sectors to manage risk.</li>
                                    <li><strong>Dividends:</strong> Payments made by companies to their shareholders from profits.</li>
                                    <li><strong>Documentation:</strong> All paperwork and records related to a Demat account, including account opening forms, transaction statements, and KYC documents.</li>
                                    <li><strong>Electronic Agreement:</strong> A digital agreement required during the Demat account opening process.</li>
                                    <li><strong>ETFs (Exchange-Traded Funds):</strong> Investment funds traded on stock exchanges, holding various assets like stocks, bonds, or commodities.</li>
                                    <li><strong>Income Tax Implications:</strong> The tax implications of income generated from investments held in a Demat account.</li>
                                    <li><strong>Integration with Trading Account:</strong> The seamless link between a Demat account and a trading account for smoother trading.</li>
                                    <li><strong>KYC (Know Your Customer):</strong> The process of verifying the identity of customers during account opening.</li>
                                    <li><strong>Legal Rights:</strong> The rights and responsibilities of Demat account holders, including the right to information, privacy, and grievance redressal.</li>
                                    <li><strong>Limit Orders:</strong> Orders specifying a specific price at which to buy or sell securities.</li>
                                    <li><strong>Loan Against Securities:</strong> Using Demat account holdings as collateral for loans.</li>
                                    <li><strong>Market Orders:</strong> Orders to buy or sell securities at the current market price.</li>
                                    <li><strong>Multi-Layer Security Measures:</strong> Several security protocols to safeguard digital assets in a Demat account.</li>
                                    <li><strong>Nominee:</strong> An individual nominated to inherit assets held in a Demat account in case of the account holder's demise.</li>
                                    <li><strong>Off-Market Transfer:</strong> The process of transferring shares from one Demat account to another.</li>
                                    <li><strong>Online Access:</strong> 24/7 access to a Demat account via the internet for monitoring and transactions.</li>
                                    <li><strong>PAN Card:</strong> A mandatory document for all Demat account holders in India, serving as a tax identification number.</li>
                                    <li><strong>Pledge Charges:</strong> Fees incurred when pledging securities as collateral for margin trading or loans.</li>
                                    <li><strong>Portfolio:</strong> A collection of investments held in a Demat account, including stocks, bonds, and mutual funds.</li>
                                    <li><strong>Proof of Address:</strong> Documents used to verify an individual's residential address during account opening.</li>
                                    <li><strong>Proof of Identity:</strong> Documents used to verify an individual's identity during account opening.</li>
                                    <li><strong>Rebalancing:</strong> Adjusting the composition of a portfolio to maintain the desired asset allocation.</li>
                                    <li><strong>Rematerialization (Remat):</strong> The process of converting electronic shares back into physical certificates.</li>
                                    <li><strong>SEBI (Securities and Exchange Board of India):</strong> The regulatory authority overseeing Demat accounts and the securities market in India.</li>
                                    <li><strong>Securities:</strong> Financial instruments such as stocks, bonds, mutual funds, and exchange-traded funds (ETFs) that are held in a Demat account.</li>
                                    <li><strong>Single Point of Access:</strong> Managing multiple investments from one Demat account.</li>
                                    <li><strong>Stamp Duty:</strong> State-specific charges applied when selling securities.</li>
                                    <li><strong>Stock Quotes:</strong> Real-time or delayed price information of securities.</li>
                                    <li><strong>Stop-Loss Order:</strong> Orders automatically selling shares when reaching a predetermined price to limit losses.</li>
                                    <li><strong>Tax-Efficient Trading:</strong> Strategies to minimize tax liabilities on trading activities.</li>
                                    <li><strong>Transaction Charges:</strong> Fees applied each time securities are bought or sold.</li>
                                    <li><strong>Verification Process:</strong> Checks to validate the information provided during Demat account opening.</li>
                                    <li><strong>Wealth Creation:</strong> The process of increasing wealth through investments in a Demat account.</li>
                                </ol>
                                <p>If you have any further questions or need clarification on any of these terms, please refer to our comprehensive guide or reach out to us for assistance.</p>
                                <p>Thank you for choosing our comprehensive guide to learn about Demat accounts.</p>
                            </InView>
                        </div>
                        <div className={"right-form-main " + (isActive ? 'shadow' : 'none-shadow')}>
                            <div className={"form-mobile " + (isActive ? 'p-hide' : 'p-show')}>
                                <button className="close-arrow-mb" onClick={handleClick}>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3164 1.82026e-06C4.63799 -0.00329398 0.0319564 4.46942 0.0285663 9.99011C0.0251763 15.5108 4.62569 19.9889 10.3041 19.9922C13.0322 19.9965 15.6496 18.944 17.5774 17.0674C19.506 15.194 20.5903 12.6526 20.592 10.0021C20.5953 4.48139 15.9948 0.00329772 10.3164 1.82026e-06ZM10.3167 18.9922C5.20633 18.9955 1.06078 14.9706 1.05726 10.0022C1.05381 5.03382 5.19377 1.00336 10.3041 1C12.7594 0.995729 15.1152 1.94287 16.8502 3.63184C18.5859 5.31769 19.5619 7.60468 19.5635 9.98999C19.567 14.9584 15.4271 18.9888 10.3167 18.9922ZM11.0313 9.9961L14.3038 6.81446C14.4998 6.62006 14.4998 6.30896 14.3038 6.11456C14.1051 5.91736 13.7795 5.91419 13.5767 6.10742L10.3041 9.28906L7.03157 6.10748C6.83161 5.91699 6.51163 5.91699 6.31168 6.10748C6.10884 6.30072 6.10558 6.61725 6.30433 6.81446L9.57688 9.9961L6.30433 13.1777C6.2079 13.2715 6.15379 13.3986 6.15373 13.5312C6.15373 13.8073 6.38394 14.0312 6.66795 14.0313C6.80437 14.0314 6.93526 13.9787 7.03157 13.8848L10.3041 10.7031L13.5767 13.8848C13.673 13.9787 13.8039 14.0314 13.9403 14.0313C14.0766 14.0312 14.2073 13.9786 14.3038 13.8849C14.5047 13.6896 14.5047 13.373 14.3038 13.1777L11.0313 9.9961Z" fill="#676767" />
                                    </svg>
                                </button>
                                {
                                    isCheck ?
                                        <div className="">
                                            <div className="d-flex justify-content-end" id="campaignForm">
                                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                                    {/* <DematAccountForm /> */}
                                                    <NewDematAccountForm />
                                                </GoogleReCaptchaProvider>
                                            </div>
                                        </div> :
                                        <div className="">
                                            <div className="d-flex justify-content-end" id="campaignForm">
                                                {/* <DematAccountForm /> */}
                                                <NewDematAccountForm />
                                            </div>
                                        </div>
                                }
                            </div>
                            <div className={name}>
                                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                    <button className=" primary-orange-btn scroll-top-account openbtn" onClick={handleClick}>Open Account Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}

export default OpenDematNew;