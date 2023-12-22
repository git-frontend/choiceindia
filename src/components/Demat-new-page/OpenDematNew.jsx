import React from "react";
import { useState, useEffect } from 'react';
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
import benefits from '../../assets/images/demat-images/new-demat/demat-account-benefits.webp';
import features from '../../assets/images/demat-images/new-demat/demat-account-features.webp';
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
import meta_tags from "../../Data/MetaTags";
import { InView } from 'react-intersection-observer';

import "./new-demat-page.scss";
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { useRef } from "react";



function OpenDematNew() {


    const [isActive, setIsActive] = useState();
    const [isActive4, setIsActive4] = useState('id0');
    const [initialize, setInitialize] = useState(false);
    const [rendercount, setRenderCount] = useState(() => false);
    const scrollConfig = useRef({
        state: false,
        isTriggered: false
    });

    const [isActive2, setIsActive2] = useState(false);
    
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
            if(!scrollConfig.current.state) scrollConfig.current = {
                ...scrollConfig.current,
                state: true
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scrollend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if(scrollConfig.current.state) scrollConfig.current = {
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

    // useEffect(() => {
    //     if(!scrollConfig.current.isTriggered) {
    //         const activeElement =
    //           document.getElementsByClassName('active')[0].parentNode;
    //         const elementToScroll = activeElement.parentNode;
    //         if (elementToScroll && elementToScroll.id === "style-sroll") {
    //             elementToScroll.scrollTo({ top: activeElement.offsetTop - 100, behavior: "smooth" });
    //         }
    //     }
    // }, [isActive4]);

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
            document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
            document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
          // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
          document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
          document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
          document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
          if(!(document.getElementById('link1')==null)){
          
            document.getElementById('link1').remove();
          document.getElementById('link2').remove();
          document.getElementById('link3').remove();
          document.getElementById('link4').remove();
          document.getElementById('link5').remove();
          document.getElementById('link6').remove();
        
          
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
                                {/* <h4>A Comprehensive Guide for Beginners</h4> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="demat-cms-description">
                <div className="container">
                    <div className="wrap-main">
                        {/* <div className="lft-navigation">
                            <div className="">
                                <h3>Table of Contents</h3>
                                <div className="arrow-sh" onClick={handleClick2}>
                                    <span className={isActive2 ? 'ar-up' : 'ar-down'}>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7L7 1L1 7" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className={isActive2 ? 'list-hide' : 'list-show'} >
                                    <ul className="list-links" id="style-sroll">
                                        <li><a className={isActive4=='id0' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id0') }}>What is a Demat Account?</a></li>
                                        <li><a className={isActive4=='id1' ? " active": " " } onClick={()=>{ scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id1'); }}>How Does a Demat Account Work?</a></li>
                                        <li><a className={isActive4=='id2' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id2')}}>Types of Demat Accounts in India</a></li>
                                        <li><a className={isActive4=='id3' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id3')}}>How to Choose the Right DP and Brokerage Firm?</a></li>
                                        <li><a className={isActive4=='id4' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id4')}}>Benefits of a Demat Account</a></li>
                                        <li><a className={isActive4=='id5' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id5')}}>Key Features of a Demat Account</a></li>
                                        <li><a className={isActive4=='id6' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id6')}}>How to Open a Demat Account?</a></li>
                                        <li><a className={isActive4=='id7' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id7')}}>Documents Required for Demat Account Opening</a></li>
                                        <li><a className={isActive4=='id8' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id8')}}>Demat Account Charges</a></li>
                                        <li><a className={isActive4=='id9' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id9')}}>Trading Account vs. Demat Account</a></li>
                                        <li><a className={isActive4=='id10' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id10')}}>Utilizing Your Demat Account</a></li>
                                        <li><a className={isActive4=='id11' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id11')}}>How to Buy and Sell Shares Using a Demat Account?</a></li>
                                        <li><a className={isActive4=='id12' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id12')}}>How to Monitor Your Demat Account?</a></li>
                                        <li><a className={isActive4=='id13' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id13')}}>How to Transfer Shares from One Demat Account to Another?</a></li>
                                        <li><a className={isActive4=='id14' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id14')}}>How to Pledge Shares in a Demat Account?</a></li>
                                        <li><a className={isActive4=='id15' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id15')}}>How to Add Nominee to Demat Account?</a></li>
                                        <li><a className={isActive4=='id16' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id16')}}>How to Close Demat Account?</a></li>
                                        <li><a className={isActive4=='id17' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id17')}}>Demat Account FAQs</a></li>
                                        <li><a className={isActive4=='id18' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id18')}}>Legal and Regulatory Information</a></li>
                                        <li><a className={isActive4=='id19' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id19')}}>Glossary</a></li>
                                    </ul>
                                </div>
                               

                                <h3 className="mrgn-top">Share this article</h3>
                                <ul className="socials">
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="sub-description">
                            <div className="pr-sec">
                                <p>Welcome to the ultimate guide for beginners who aspire to invest or trade in securities including stocks, mutual funds, bonds, and more. This comprehensive guide will provide you with a detailed understanding of Demat accounts.<br/><br/>
                                Explore topics related to Demat accounts, how they work, the different types available, and more. Gain insight into their significance and how they play a pivotal role in your investment journey.</p>
                            </div>
                            {/* <div className="hide-fr-desk">
                                <h3>Table of Contents</h3>
                                <div className="arrow-sh" onClick={handleClick2}>
                                    <span className={isActive2 ? 'ar-up' : 'ar-down'}>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7L7 1L1 7" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className={isActive2 ? 'list-hide' : 'list-show'}>
                                    <ul className="list-links" id="style-sroll">
                                        <li><a className={window.width < 993 && isActive4=='id0' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id0') }}>What is a Demat Account?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id1' ? " active": " " } onClick={()=>{ scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id1'); }}>How Does a Demat Account Work?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id2' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id2')}}>Types of Demat Accounts in India</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id3' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id3')}}>How to Choose the Right DP and Brokerage Firm?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id4' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id4')}}>Benefits of a Demat Account</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id5' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id5')}}>Key Features of a Demat Account</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id6' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id6')}}>How to Open a Demat Account?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id7' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id7')}}>Documents Required for Demat Account Opening</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id8' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id8')}}>Demat Account Charges</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id9' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id9')}}>Trading Account vs. Demat Account</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id10' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id10')}}>Utilizing Your Demat Account</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id11' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id11')}}>How to Buy and Sell Shares Using a Demat Account?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id12' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id12')}}>How to Monitor Your Demat Account?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id13' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id13')}}>How to Transfer Shares from One Demat Account to Another?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id14' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id14')}}>How to Pledge Shares in a Demat Account?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id15' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id15')}}>How to Add Nominee to Demat Account?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id16' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id16')}}>How to Close Demat Account?</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id17' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id17')}}>Demat Account FAQs</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id18' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id18')}}>Legal and Regulatory Information</a></li>
                                        <li><a className={window.width < 993 && isActive4=='id19' ? " active": " " } onClick={()=>{scrollConfig.current = {...scrollConfig.current, isTriggered: true}; chapterScroll2('id19')}}>Glossary</a></li>
                                    </ul>
                                </div>                                
                            </div> */}
                            <InView as="div" className="pr-sec"  onChange={(e) => {initialize && !scrollConfig.current.isTriggered && e===true && setIsActive4('id0')}} id="id0">
                                <h2>What is Demat Account?</h2>
                                <p>A Demat account securely holds an investor's stocks, bonds, mutual funds, and other securities electronically. It’s also called a Dematerialised account as it eliminates the need for paper share certificates and ensures easy buying and selling of stocks and securities.<br/><br/>

                                This transformation to digital holdings has streamlined the investment process and enhanced governance under the Securities and Exchange Board of India (SEBI). Gone are the days of cumbersome, manual account openings.<br/><br/>

                                In today's digital age, you can <a href="/open-free-demat-account">open a Demat account</a> within minutes. The COVID-19 pandemic accelerated the shift towards online share trading, making it more accessible than ever before.</p>
                                <img src={evolution} alt={"Evolution of Share Ownership in India"} className={"img-fluid"} width={"670"} height={"734"} /><br/><br/>
                                <h3>What is Dematerialization?</h3>
                                <p><a href="/blog/dematerialisation/">Dematerialization</a> refers to the process of <a href="/blog/physical-shares-to-demat/">converting physical share certificates</a> into electronic form. This transformation enables easy access to your shares from anywhere in the world.<br/><br/>

To begin your journey into online trading, you must open a Demat account with a Depository Participant (DP). This step aligns to eliminate physical certificates and ensure seamless tracking and monitoring of your holdings. <br/><br/>
Upon activation of your Demat account, submit your physical securities through a Dematerialization Request Form (DRF). Ensure each physical certificate is defaced by marking "Surrendered for Dematerialization." You will receive an acknowledgment slip for your surrendered share certificates.</p>
<iframe className="cust-video" src="https://www.youtube.com/embed/3u0VZAHMwO0?si=sqbJJfBthND0ReKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id5')} id="id5">
                                <h2>Key Features of Demat Account</h2>
                                <img src={features} className="img-fluid" alt={"Features of Demat Account"} width={"670"} height={"847"}/><br/><br/>
                                <p>Demat accounts come packed with features to simplify your investment journey. Here are some of the key highlights:</p>
                                <ol className="drk-bld">
                                    <li>
                                        <h3>Online Access</h3>
                                        <p>With internet connectivity, you can access your Demat account 24/7 to monitor holdings and execute transactions from anywhere.</p>
                                    </li>
                                    <li>
                                        <h3>Centralized Recordkeeping</h3>
                                        <p>All your investments are electronically recorded in one place, making tracking and management convenient.</p>
                                    </li>
                                    <li>
                                        <h3>Automatic Updates</h3>
                                        <p>Corporate actions like dividends, bonuses, or splits are credited directly to your account, ensuring you don't miss out on any benefits.</p>
                                    </li>
                                    <li>
                                        <h3>Safe and Secure Transactions</h3>
                                        <p>Manage multiple investments, including stocks, mutual funds, and bonds, all from one Demat account.</p>
                                    </li>
                                    <li>
                                        <h3>Single Point of Access</h3>
                                        <p>Demat accounts can be seamlessly linked to your trading account for a smooth trading experience.</p>
                                    </li>
                                    <li>
                                        <h3>Integration with Trading Account</h3>
                                        <p>Demat accounts can be seamlessly linked to your trading account for a smooth trading experience.</p>
                                    </li>
                                    <li>
                                        <h3>Consolidated Asset Storage</h3>
                                        <p>A Demat account serves as a single repository for all your financial assets, including bonds, debentures, ETFs, and more. This consolidation simplifies asset management and facilitates tax filing with all your records in one place.</p>
                                    </li>
                                    <li>
                                        <h3>Loan Against Securities</h3>
                                        <p>You can use your Demat account holdings as collateral for loans, enabling you to continue trading even with limited capital.</p>
                                    </li>
                                    <li>
                                        <h3>Receive Bonus Shares</h3>
                                        <p>When you invest in a company's shares, you become eligible for bonus shares that the company may offer. Demat accounts make it easy to receive and manage these additional shares.</p>
                                    </li>
                                </ol>
                                <p>Demat account features are designed to empower you to manage your investments efficiently.</p>
                            </InView>
                            
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id4')} id="id4">
                                <h2><a href="/blog/benefits-of-a-demat-account/">Benefits of a Demat Account</a></h2>
                                <img src={benefits} className="img-fluid" alt={"Benefits of Demat Account"} width={"670"} height={"1008"}/><br/><br/>
                                <p>The introduction of Dematerialization has revolutionized the stock market and unlocked numerous benefits for investors:</p>
                                <ol className="drk-bld">
                                    <li>
                                        <h3>Safety and Security</h3>
                                        <p>Demat accounts offer unparalleled safety for your financial assets, significantly reducing the risk of loss or theft.</p>
                                    </li>
                                    <li>
                                        <h3>Faster and Smoother Settlements</h3>
                                        <p>The days of waiting for weeks for settlement are over. Demat accounts have reduced the settlement cycle to T+2 days (trade date plus two days), saving time and effort.</p>
                                    </li>
                                    <li>
                                        <h3>Reduction in Errors</h3>
                                        <p>Digitalization has drastically reduced error trades, eliminating the prevalence of erroneous or 'Vanda' (Bad) trades caused by manual processes. Contributing to a more reliable and accurate trading environment.</p>
                                    </li>
                                    <li>
                                        <h3>Easy Transmission</h3>
                                        <p>In the unfortunate event of a Demat account holder's demise, assets can be seamlessly transferred to the next of kin. This ensures a hassle-free process compared to physical certificates.</p>
                                    </li>
                                    <li>
                                        <h3>Better Liquidity</h3>
                                        <p>Demat accounts facilitate easy liquidation of assets, allowing you to sell or take a loan against shares and mutual funds effortlessly.</p>
                                    </li>
                                    <li>
                                        <h3>Elimination of Stamp Duty</h3>
                                        <p>Unlike physical share certificates, Demat holdings do not attract stamp duty, saving you additional costs.</p>
                                    </li>
                                </ol>
                                <p>With these advantages, a Demat account emerges as a must-have tool for modern investors.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id2')} id="id2">
                                <h2>Types of Demat Accounts in India</h2>
                                <img src={HowChoose} alt={"How to Choose Best Demat Account"} className={"img-fluid"} width={"670"} height={"413"} /><br/><br/>
                                <p>In India, there are several <a href="/blog/demat-account-types/">types of Demat accounts</a> to cater to various investor profiles. Here is a quick look:</p>
                                <ol className="drk-bld">
                                    <li>
                                        <h3>Regular Demat Account</h3>
                                        <img src={Regular} className="img-fluid" alt={"Regular Demat Account"} width={"670"} height={"413"} /><br/><br/>
                                        <p>Ideal for Indian residents, this account is managed by depository participants, and regulated by two depositories. It offers swift transactions, allowing you to buy or sell shares within minutes. Regular Demat accounts may include: <br/><br/>
                                       <a href="/minor-demat-account"><strong>Minor Demat Account:</strong></a> Specifically designed for minors, this account allows parents or guardians to manage investments on behalf of their children until they reach the legal age of 18. It offers a secure way to build a financial foundation for the younger generation.<br/><br/>
                                        <a href="/corporate-demat-account"><strong>Corporate Demat Account:</strong></a> This type of Demat account is tailored for corporate entities and organizations. It enables businesses to hold and manage their securities electronically, facilitating smoother transactions and enhanced financial control. Corporate Demat accounts are instrumental in corporate actions and shareholder meetings.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Repatriable Demat Account (<a href="/nri-demat-account">NRI Demat Account</a>)</h3>
                                        <img src={Repatriable} className="img-fluid" alt={"Repatriable Demat Account"} width={"670"} height={"413"} /><br/><br/>
                                        <p>NRIs can leverage this account to transfer funds abroad. It requires an NRE bank account for operation.</p>
                                    </li>
                                    <li>
                                        <h3>Non-Repatriable Demat Account</h3>
                                        <img src={Nro} className="img-fluid" alt={"NRO Demat Account"} width={"670"} height={"413"} /><br/><br/>
                                        <p>Unlike the Repatriable account, funds cannot be transferred abroad with this type. It necessitates an NRO bank account association.</p>
                                    </li>
                                    <li>
                                        <h3>Basic Services Demat Account</h3>
                                        <img src={bsda} className="img-fluid" alt={"BSDA Demat Account"} width={"670"} height={"413"} /><br/><br/>
                                        <p>Designed to promote financial inclusion, the Basic Services Demat Account caters to individuals from economically disadvantaged backgrounds. Offering a simplified and cost-effective way to participate in the Indian securities market. This type of account is subject to certain restrictions and limitations, making it an accessible entry point for new investors with limited resources.</p>
                                    </li>
                                </ol>
                                <img src={different} className="img-fluid" alt={"Different Types of Demat Account"} width={"670"} height={"706"}/><br/><br/>
                                <p>Choosing the right Demat account type depends on your residency status and investment goals.</p>
                                
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => {initialize && !scrollConfig.current.isTriggered && e===true && setIsActive4('id1')}} id="id1">
                                <h2><a href="/blog/how-demat-account-works/">How Does a Demat Account Work?</a></h2>
                                <p>A Demat account functions as the digital vault for your securities. It allows you to buy, hold, and sell shares with ease, regardless of your location. However, it doesn't operate in isolation. Here's how it collaborates with other elements to offer seamless transactions:</p>
                                <img src={HowDoes} alt={"How a Demat Account Works"} className={"img-fluid"} width={"670"} height={"826"} /><br/><br/>
                                <p>Every stockbroker charges an opening fee for a Demat account, as they are responsible for maintaining your account. For your Demat account to operate seamlessly, you need to link it with a <a href="/open-trading-account">trading account</a>. Your Depository Participant (DP) forwards your buy orders to the stock exchange when you make purchases via a trading platform. <br/><br/>
                                Once your buy order matches with a corresponding sell order, the stock exchange sends it to a clearinghouse for settlement. At the end of the trading day, the shares you've bought are credited to your Demat account. Similarly, the seller's Demat account is debited for the sold shares.<br/><br/>
                                <iframe src="https://www.youtube.com/embed/at5pItTsJJE?si=VgNo0MHto7TNA245" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="cust-video"></iframe><br/><br/>
                                Remember, without a trading account, you cannot utilize your Demat account for investments. A trading account handles the monetary transactions associated with buying and selling shares.
                                </p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id7')} id="id7">
                                <h2><a href="/blog/documents-required-for-demat-account-opening/">Documents Required for Demat Account Opening</a></h2>
                                <p>Proper documentation is crucial when opening a Demat account. Here's a list of the essential documents:</p>
                                <ol className="none-para drk-bld">
                                    <li><strong>Proof of Identity:</strong> You can submit any one of the following:
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
                                    <li><strong>PAN Card:</strong> It is mandatory for all Demat account holders.</li>
                                    <li><strong>Passport-Size Photographs:</strong> Typically, you need 2-3 recent passport-sized photographs if you opt for the offline process. For the online process, it will be e-KYC authentication.</li>
                                </ol>
                                <img src={checklist} className="img-fluid" alt={"Documents Required to Open Demat Account"} width={"670"} height={"740"}/><br/><br/>
                                <p>Ensure that all documents are self-attested copies, and keep the original documents handy for verification purposes during the <a href="/blog/demat-account-opening-process/">demat account opening process</a>.</p>
                                <span className="bl-box">For certain segments, such as derivatives, income proofs may be necessary.</span>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id8')} id="id8">
                                <h2><a href="/blog/demat-account-charges/">Demat Account Charges</a></h2>
                                <p>While opening a Demat account is often free or comes at a nominal charge, there are various fees and charges associated with maintaining and using it. Some common Demat account charges include</p>
                                <img src={charges} className="img-fluid" alt={"Demat Account Charges"} width={"670"} height={"1608"} /><br/><br/>
                                <ol className="drk-bld">
                                    <li>
                                        <h3>Account Opening Fee</h3>
                                        <p>This is a one-time charge for opening a Demat account. It varies from one Depository Participant (DP)/brokerage company to another.</p>
                                    </li>
                                    <li>
                                        <h3>Annual Maintenance Charges (AMC)</h3>
                                        <p>These are yearly fees for maintaining a Demat account. They can range from a few hundred to a couple of thousand rupees, depending on your DP.</p>
                                    </li>
                                    <li>
                                        <h3>Transaction Charges</h3>
                                        <p>Each time you buy or sell securities, you may be charged a transaction fee. This fee can be a fixed amount or a percentage of the transaction value.</p>
                                    </li>
                                    <li>
                                        <h3>Debit Transaction Charges</h3>
                                        <p>These charges apply when you sell or transfer securities from your Demat account. They can be a fixed fee or a percentage of the transaction value.</p>
                                    </li>
                                    <li>
                                        <h3>Dematerialization Charges</h3>
                                        <p>Applicable when converting physical shares to electronic form.</p>
                                    </li>
                                    <li>
                                        <h3>Rematerialization Charges</h3>
                                        <p>Incurred when converting electronic shares back to physical form.</p>
                                    </li>
                                    <li>
                                        <h3>Pledge Charges</h3>
                                        <p>A fee is imposed when you pledge your securities for margin trading or loans.</p>
                                    </li>
                                    <li>
                                        <h3>POA (Power of Attorney) Charges</h3>
                                        <p>If you grant a Power of Attorney to your broker or DP, there may be charges associated with this service.</p>
                                    </li>
                                    <li>
                                        <h3>Custodian Fee</h3>
                                        <p>For certain types of securities, like foreign securities, you might incur custodian fees.</p>
                                    </li>
                                    <li>
                                        <h3>Failed Transaction Charges</h3>
                                        <p>If a transaction fails due to insufficient funds or other reasons, you may be charged a penalty.</p>
                                    </li>
                                    <li>
                                        <h3>Account Closure Charges</h3>
                                        <p>This applies if you decide to <a href="/blog/how-to-close-a-demat-account/">close your Demat account.</a></p>
                                    </li>
                                    <li>
                                        <h3>Stamp Duty</h3>
                                        <p>Stamp duty charges vary by state and are levied when you sell securities.</p>
                                    </li>
                                </ol>
                                <p>It's crucial to understand the fee structure of your chosen DP and Demat account to avoid any surprises. Some brokers offer <a href="/campaign/free-amc-demat-account">zero AMC Demat accounts</a>, making it cost-effective for investors.</p>
                                <div className="flex-image">
                                    <img src={openingcharges} className="img-fluid" alt={"Choice Demat Account Opening Charges"} width={"356"} height={"485"} />
                                    <img src={amccharges} className="img-fluid" alt={"Choice AMC Charges"}  width={"356"} height={"485"}/>
                                </div>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id6')} id="id6">
                                <h2><a href="/blog/how-to-open-demat-account/">How to Open a Demat Account?</a></h2>
                                <p>Opening a Demat account has never been easier, thanks to digitalization. You have two primary options: online and offline account opening.</p>
                                <h3><a href="/blog/demat-account-opening-online/">Online Demat Account Opening</a></h3>
                                <p>Most brokerage firms offer online account opening, allowing you to complete the process from the comfort of your home. It's quick, convenient, and paperless.</p>
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
                                <img src={openingprocess} className="img-fluid" alt={"Demat Account Opening Process"} width={"670"} height={"1029"} /><br/><br/>
                                <span className="bl-box">Choice completes the verification process in under 4 hours. Our team will assist you if you encounter any issues during the Demat account opening process.</span>
                                <h3>Offline Demat Account Opening</h3>
                                <p>If you prefer a more traditional approach, visit the nearest branch office of your chosen Depository Participant (DP) or brokerage firm to open an account. The process includes:</p>
                                <ol>
                                    <li>Collecting the account opening form from the DP's office</li>
                                    <li>Filling in the required details</li>
                                    <li>Submitting the completed form along with the necessary documents</li>
                                    <li>Completing the in-person verification process</li>
                                    <li>Waiting for account activation</li>
                                </ol>
                                <span className="bl-box">
                                Ensure you have the following documents ready for the Demat account opening:
                                <ol>
                                    <li>PAN Card</li>
                                    <li>Proof of identity (Aadhar card, passport, voter ID, etc.)</li>
                                    <li>Proof of address (utility bill, bank statement, passport, etc.)</li>
                                    <li>Passport-size photographs</li>
                                    <li>Bank statement or canceled cheque to link your bank account</li>
                                </ol>
                                </span>
                            </InView>
                            
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id3')} id="id3">
                                <h2>How to Choose the Right DP and Brokerage Firm?</h2>
                                <p>Selecting the right Depository Participant (DP) and brokerage firm is a crucial decision for your investment journey. Always choose one that is trustworthy and reliable, and aligns with your trading and investment needs.</p>
                                <img src={choosing} className="img-fluid" alt={"Choosing a DP or Broker"} width={"670"} height={"413"} /><br/><br/>
                                <p>Here are some factors to consider when choosing:</p>
                                <ol className="list-pr">
                                    <li>
                                        <p><strong>Reputation and Reliability:</strong> Opt for a DP and brokerage firm with a strong reputation for reliability, security, and customer service. Check online reviews and ask for recommendations from experienced investors.</p>
                                        <span className="txt-it">Prioritize two-factor authentication, secure socket layer (SSL) certificates, and 
                                            regular security audits.</span>
                                    </li>
                                    <li>
                                        <p><strong>Account Opening Charges and AMC:</strong> Compare the account opening and <a href="/blog/demat-account-amc-charges/">annual maintenance charges</a> (AMC) offered by different DPs. Some brokers offer zero <a href="/blog/amc-charges-for-demat-account/">AMC charges for Demat accounts</a>, which can be cost-effective.</p>
                                        <span className="txt-it">Demat accounts can incur charges, even if they remain idle.</span>
                                    </li>
                                    <li>
                                        <p><strong>Transaction Charges:</strong> Understand the <a href="/blog/demat-transaction-charges/">transaction charges</a> for buying and selling securities. These charges can vary significantly between brokers.</p>
                                        <span className="txt-it">Analyze the fee structure carefully, specific services may have hidden charges.</span>
                                    </li>
                                    <li>
                                        <p><strong>Technology and Trading Platforms:</strong> Evaluate the quality and features of the broker's trading platform. A user-friendly and technologically advanced platform can enhance your trading experience.</p>
                                        <span className="txt-it">Choice FinX is a user-friendly platform that allows traders to access orders and execute trades seamlessly in just a few clicks</span>
                                    </li>
                                    <li>
                                        <p><strong>Customer Support:</strong> Prompt and helpful customer support is essential. Ensure that the DP provides easy access to customer service and resolves issues efficiently.</p>
                                        <span className="txt-it">A lifesaver in moments of technical glitches or account-related concerns.</span>
                                    </li>
                                    <li>
                                        <p><strong>Research and Analysis Tools:</strong> If you rely on research and analysis for your investment decisions, check if the broker offers comprehensive tools and resources.</p>
                                        <span className="txt-it">Fundamental and technical analysis, stock screeners, and other research aids.</span>
                                    </li>
                                    <li>
                                        <p><strong>Additional Services:</strong> Some brokers offer value-added services like <a href="/research-listing">research reports</a>, portfolio tracking, and investment advisory. Consider if these services align with your needs.</p>
                                    </li>
                                    <li>
                                        <p><strong>Brokerage Charges:</strong> Compare <a href="/brokerage-charges">brokerage charges</a> for different types of transactions (equity delivery, intraday, futures and options, etc.). Look for brokers that offer competitive rates.</p>
                                        <span className="txt-it">Brokerage can be negotiated for trading, but it's unlikely to decrease for investors.</span>
                                    </li>
                                    <li>
                                        <p><strong>Margin and Exposure:</strong>  If you intend to trade on margin, understand the broker's margin policies and the exposure they offer.</p>
                                    </li>
                                    <li>
                                        <p><strong>User Reviews:</strong> Read reviews and testimonials from existing customers to gauge their experiences with the broker.</p>
                                    </li>
                                </ol>
                                <p>Take your time to research and compare different DPs and brokerage firms before making a decision. Your choice can significantly impact your overall investment experience.</p>
                            </InView>
                            
                            
                            
                            
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id9')} id="id9">
                                <h2><a href="/blog/difference-between-demat-and-trading-account/">Trading Account vs Demat Account</a></h2>
                                <p>While the Demat account holds your securities, the trading account facilitates buying and selling. A combination of both is essential for participating in the stock market. Here’s a breakdown of their differences:</p>
                                <img src={tradingaccount} className="img-fluid" alt={"Difference Between Demat and Trading Account"} width={"670"} height={"874"} /><br/><br/>
                                <h3>Trading Account</h3>
                                <ul className="drk-bld">
                                    <li>
                                        <h3>Role</h3>
                                        <p>The Trading account is your gateway to the stock market. It assists you to buy and sell securities.</p>
                                    </li>
                                    <li>
                                        <h3>Execution of Orders</h3>
                                        <p>When you place an order to buy or sell stocks, it is executed through your Trading account.</p>
                                    </li>
                                    <li>
                                        <h3>Broker Interaction</h3>
                                        <p>Your broker manages your Trading account. They facilitate your trades, provide market research, and offer trading platforms.</p>
                                    </li>
                                    <li>
                                        <h3>Use</h3>
                                        <p>The primary purpose of a Trading account is to execute trades efficiently.</p>
                                    </li>
                                </ul>
                                <h3>Demat Account</h3>
                                <ul className="drk-bld">
                                    <li>
                                        <h3>Role</h3>
                                        <p>A Demat account acts as a digital repository for your securities. It holds shares, bonds, mutual funds, and other financial instruments in electronic form.</p>
                                    </li>
                                    <li>
                                        <h3>Ownership</h3>
                                        <p>Your ownership of securities is reflected in your Demat account. On buying shares, they are credited to your Demat account.</p>
                                    </li>
                                    <li>
                                        <h3>Transfer of Securities</h3>
                                        <p>You can transfer securities between Demat accounts electronically, making it convenient for buying, selling, and transferring assets.</p>
                                    </li>
                                    <li>
                                        <h3>Use</h3>
                                        <p>The primary purpose of a Demat account is safekeeping and easy access to your investments.</p>
                                    </li>
                                </ul>
                                <h3>The Symbiotic Relationship</h3>
                                <ul className="drk-bld">
                                    <li>
                                        <h3>Dependence</h3>
                                        <p>To trade in the stock market, you need both accounts. A Demat account holds your securities, while a Trading account facilitates buying and selling.</p>
                                    </li>
                                    <li>
                                        <h3>Order Flow</h3>
                                        <p>When you place a buy order, the shares are debited from your Demat account and sold from your Trading account. When you sell, the shares are credited to your Demat account after the transaction is complete.</p>
                                    </li>
                                </ul>
                                <p>Understanding this distinction enables you to make informed decisions while managing your investments and executing trades efficiently.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id11')} id="id11">
                                <h2>How to Buy and Sell Shares Using a Demat Account?</h2>
                                <p>Once your Demat account is linked to your trading account, you can start buying and selling shares. Here's a step-by-step guide for both processes:</p>
                                <img src={buysell} className="img-fluid" alt={"How to Buy and Sell Shares Using Demat Account"} width={"670"} height={"1212"} /><br/><br/>
                                <h3>Buying Shares</h3>
                                <ol className="none-para">
                                    <li><strong>Login:</strong> Access your trading account using the provided login credentials.</li>
                                    <li><strong>Fund Your Account:</strong> Ensure you have sufficient funds in your trading account to make the purchase.</li>
                                    <li><strong>Place an Order:</strong> Choose the stock you want to buy, enter the quantity, and specify the price (either market or limit order). Confirm the order.</li>
                                    <li><strong>Order Execution:</strong> Your broker will execute the order when the stock's market price matches your specified price. This can happen immediately (for market orders) or when the stock reaches your specified price (for limit orders).</li>
                                    <li><strong>Confirmation:</strong> You will receive a confirmation of the purchase once the order is executed. The purchased shares will be credited to your Demat account.</li>
                                </ol>
                                <h3>Selling Shares</h3>
                                <ol className="none-para">
                                    <li><strong>Login:</strong> Access your trading account.</li>
                                    <li><strong>Select the Stock:</strong> Choose the stock you want to sell from your portfolio.</li>
                                    <li><strong>Place an Order:</strong> Enter the quantity you want to sell and specify the price (market or limit order). Confirm the order.</li>
                                    <li><strong>Order Execution:</strong> Your broker will execute the order when the stock's market price matches your specified price. This can happen immediately (for market orders) or when the stock reaches your specified price (for limit orders).</li>
                                    <li><strong>Confirmation:</strong> You will receive a confirmation of the sale once the order is executed. The sold shares will be debited from your Demat account.</li>
                                </ol>
                                <p>Remember that market orders are executed at the prevailing market price, while limit orders are executed at a specific price or better. Monitor your trades and portfolio regularly.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id10')} id="id10">
                                <h2>Utilizing Your Demat Account</h2>
                                <p>To make the most of your Demat account, stay informed about market trends, conduct thorough research, and diversify your portfolio. Whether you are a long-term investor or a day trader, your Demat account is a valuable tool for wealth creation.</p>
                                <img src={diversification} className="img-fluid" alt={"portfolio-diversification"} width={"670"} height={"874"} /><br/><br/>
                                <p>Let’s delve deeper into how to make the most of your Demat account for effective investing and trading:</p>
                                <h3>Managing Your Portfolio</h3>
                                <p>Your Demat account is your digital portfolio manager. Here is how to manage it effectively:</p>
                                <ul>
                                    <li>
                                        <h4>Diversify Your Portfolio</h4>
                                        <p>Diversifying your investments across different asset classes and sectors can help manage risk. Your Demat account allows you to hold a wide variety of securities, including stocks, bonds, and mutual fund units, making diversification easy.</p>
                                    </li>
                                    <li>
                                        <h4>Keep Real-Time Track</h4>
                                        <p>Stay updated on your portfolio's performance in real-time. Your Demat account provides a snapshot of your holdings, including the number of shares, current market value, and overall portfolio performance.</p>
                                    </li>
                                    <li>
                                        <h4>Review and Analysis</h4>
                                        <p>Regularly review your portfolio to assess the performance of individual securities and your overall investment strategy. Leverage the analytical tools provided by your broker to make informed decisions.</p>
                                    </li>
                                    <li>
                                        <h4>Rebalancing</h4>
                                        <p>Over time, the composition of your portfolio may drift from your desired asset allocation. Use your Demat account to rebalance your portfolio by buying or selling securities as needed to maintain your target allocation.</p>
                                    </li>
                                </ul>
                                <h3>Buying and Selling Shares</h3>
                                <p>Your Demat account simplifies the process of trading shares:</p>
                                <ul>
                                    <li>
                                        <h4>Market Orders</h4>
                                        <p>Execute market orders to buy or sell shares at the current market price. This is the quickest way to enter or exit a position.</p>
                                    </li>
                                    <li>
                                        <h4>Limit Orders</h4>
                                        <p>Use limit orders to specify the price at which you want to buy or sell shares. It will give you better control over the execution price but may take longer to fill.</p>
                                    </li>
                                    <li>
                                        <h4>Stop-Loss Order</h4>
                                        <p>Protect your investments by setting stop-loss orders. These orders automatically sell your shares on reaching a predetermined price, which is helpful in limiting potential losses.</p>
                                    </li>
                                </ul>
                                <h3>Understanding Dematerialization and Rematerialization</h3>
                                <p>Dematerialization and rematerialization are fundamental processes related to your Demat account:</p>
                                <ul>
                                    <li>
                                        <h4>Dematerialization (Demat)</h4>
                                        <p>This process involves converting physical share certificates into electronic forms. To dematerialize physical shares, submit a demat request form along with the share certificates to your broker. Once dematerialized, these shares will be held in your Demat account.</p>
                                    </li>
                                    <li>
                                        <h4>Rematerialization (Remat)</h4>
                                        <p>Rematerialization is the reverse process, where you can convert electronic shares into physical certificates. This is less common today, but if needed, you can request rematerialization through your broker.</p>
                                    </li>
                                </ul>
                                <h3>Corporate Actions</h3>
                                <p>Your Demat account simplifies participation in <a href="/blog/upcoming-corporate-actions/">corporate actions</a>:</p>
                                <ul>
                                    <li>
                                        <h4>Dividends</h4>
                                        <p><a href="/upcoming-dividend-paying-stocks">Dividends declared by companies</a> are credited directly to your bank account linked to your Demat account.</p>
                                    </li>
                                    <li>
                                        <h4>Bonus Shares</h4>
                                        <p>If you are eligible for <a href="/upcoming-bonus-shares">bonus shares</a>, they will be automatically credited to your Demat account.</p>
                                    </li>
                                    <li>
                                        <h4><a href="/upcoming-rights-issue">Rights Issues</a></h4>
                                        <p>For rights issues, you will receive a letter of offer, and you can apply for additional shares using your Demat account.</p>
                                    </li>
                                </ul>
                                <h3>Tax Implications</h3>
                                <p>Understand the tax implications of your Demat account:</p>
                                <ul>
                                    <li>
                                        <h4>Capital Gains Tax</h4>
                                        <p>Profits made from selling shares held for more than one year are considered <a href="/blog/long-term-capital-gain-tax-on-shares/">long-term capital gains</a> and are taxed differently than <a href="/blog/short-term-capital-gain-tax-on-shares/">short-term capital gains</a>.</p>
                                    </li>
                                    <li>
                                        <h4>Tax-Efficient Trading</h4>
                                        <p>Plan your trades strategically to minimize tax liabilities. Techniques like tax loss harvesting can help offset gains with losses.</p>
                                    </li>
                                </ul>
                            </InView>
                            
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id12')} id="id12">
                                <h2>How to Monitor Your Demat Account?</h2>
                                <p>Monitoring your Demat account is essential to keep track of your investments and make informed decisions. Here is how you can do it:</p>
                                <ol className="none-para">
                                    <li><strong>Login:</strong> Access your Demat account through your broker's trading platform or website using your login credentials.</li>
                                    <li><strong>Portfolio Overview:</strong> Check your portfolio to view the list of securities you hold, including stocks, mutual funds, bonds, and more.</li>
                                    <li><strong>Transaction History:</strong> Review your transaction history to see your recent buys, sells, and any other account activities.</li>
                                    <li><strong><a href="/blog/demat-account-holding-statement/">Demat Account Holding Statement:</a></strong> This statement provides details about the quantity and value of each security you hold in your Demat account.</li>
                                    <li><strong>Stock Quotes:</strong> Monitor the stock prices of the securities in your portfolio. Most trading platforms provide real-time stock quotes.</li>
                                    <li><strong>Account Statements:</strong> Periodically, you will receive account statements from your Depository Participant (DP). These statements summarize your holdings and transactions.</li>
                                    <li><strong>Corporate Actions:</strong> Stay informed about corporate actions like dividends, bonuses, and splits related to your securities.</li>
                                    <li><strong>Set Alerts:</strong> Some trading platforms allow you to set price alerts. You will receive notifications when a stock reaches your specified price.</li>
                                    <li><strong>Research Tools:</strong> Utilize any research tools or resources provided by your broker to make informed investment decisions.</li>
                                    <li><strong>Taxation:</strong> Keep track of the tax implications of your investments, including capital gains and dividends.</li>
                                </ol>
                                <p>Regularly monitoring your Demat account helps you stay updated on your investments' performance and make timely decisions based on market conditions.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id13')} id="id13">
                                <h2>How to Transfer Shares from One Demat Account to Another?</h2>
                                <p>If you need to <a href="/blog/can-we-transfer-shares-from-one-demat-account-to-another/">transfer shares from one Demat account to another</a>, you can do so through a process called "off-market transfer." Here's how to transfer shares:</p>
                                <img src={transfershares} className="img-fluid" alt={"How to Transfer Shares from One Demat Account to Another"} width={"670"} height={"1347"} /><br/><br/>
                                <ol className="none-para">
                                    <li><strong>Initiate the Transfer:</strong> The account from which you want to transfer shares (the sender) initiates the process. You will need to fill out a Delivery Instruction Slip (DIS) or a similar form provided by your Depository Participant (DP).</li>
                                    <li><strong>Provide Details:</strong> In the DIS, provide the recipient's Demat account details, including their DP ID and client ID. Ensure the details are accurate to prevent any issues.</li>
                                    <li><strong>Specify Shares:</strong> List the securities you want to transfer, along with their quantities and ISIN (International Securities Identification Number) if required.</li>
                                    <li><strong>Sign the Form:</strong> Sign the DIS or transfer request form. Some forms may require additional signatures, such as those of the recipient.</li>
                                    <li><strong>Submit to DP:</strong> Submit the completed DIS or form to your DP. Some DPs allow online submission, while others may require physical submission at their office.</li>
                                    <li><strong>Verification:</strong> The DP will verify the details and signatures. They may also contact the recipient's DP for confirmation.</li>
                                    <li><strong>Transfer:</strong> Once verified, the shares will be debited from the sender's Demat account and credited to the recipient's Demat account.</li>
                                    <li><strong>Confirmation:</strong> Both the sender and recipient will receive confirmation of the transfer.</li>
                                </ol>
                                <p>It's essential to ensure that the details provided in the transfer request are accurate to avoid any delays or issues. The transfer process may take a few days to complete, depending on the DPs involved.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id14')} id="id14">
                                <h2>How to Pledge Shares in a Demat Account?</h2>
                                <p>Pledging shares in your Demat account can be done to secure loans or margin trading facilities. Here's how to pledge shares:</p>
                                <ol className="none-para">
                                    <li><strong>Contact Your Broker:</strong> Reach out to your brokerage firm or Depository Participant (DP) to inquire about the pledging process and the list of securities eligible for pledging.</li>
                                    <li><strong>Choose Securities:</strong> Select the shares you want to pledge. Ensure they are eligible for pledging as per the guidelines of your broker and the stock exchanges.</li>
                                    <li><strong>Fill out the Pledge Form:</strong> Your broker will provide a pledge request form. Fill in the details of the securities to be pledged, including their quantity.</li>
                                    <li><strong>Value of Pledge:</strong> Determine the total value of the shares to be pledged. This will depend on the loan or margin requirement.</li>
                                    <li><strong>Collateral Margin:</strong> The broker may require you to maintain a certain percentage of the pledged shares' value as collateral margin.</li>
                                    <li><strong>Submit the Form:</strong> Submit the completed pledge form to your broker or DP.</li>
                                    <li><strong>Verification:</strong> The broker or DP will verify the details and the availability of the shares in your Demat account.</li>
                                    <li><strong>Pledging:</strong> Once verified, the pledged shares will be blocked in your Demat account. You won't be able to sell or transfer them until the pledge is released.</li>
                                    <li><strong>Loan Disbursement:</strong> If you are pledging shares for a loan, the loan amount will be disbursed to your trading account.</li>
                                    <li><strong>Interest and Charges:</strong> Be aware of the interest rates and charges associated with pledging. These can vary between brokers.</li>
                                    <li><strong>Maintain Margin:</strong> Ensure that you maintain the required collateral margin to avoid margin calls.</li>
                                    <li><strong>Release of Pledge:</strong> When you repay the loan or meet the margin requirements, you can request the release of the pledge. The shares will be unblocked and available for trading or other transactions.</li>
                                </ol>
                                <img src={pledgeshares} className="img-fluid" alt={"How to Pledge Shares in a Demat Account"} width={"670"} height={"1347"}  /><br/><br/>
                                <p>Always check with your broker or DP for the specific procedures and requirements for pledging shares in your Demat account.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id15')} id="id15">
                                <h2>How to Add Nominee to Demat Account?</h2>
                                <img src={addnominee} className="img-fluid" alt={"How to Add Nominee to Demat Account"} width={"670"} height={"1903"}  /><br/><br/>
                                <h3>Nomination Process</h3>
                                <ol className="none-para">
                                    <li><strong>Obtain Nomination Form:</strong> Contact your Depository Participant (DP) or broker and request a nomination form.</li>
                                    <li><strong>Fill in Details:</strong> Complete the nomination form with the required details. You will need to provide the name, address, and other particulars of the nominee. Be sure to double-check the accuracy of the information.</li>
                                    <li><strong>Witness and Sign:</strong> Sign the nomination form in the presence of two witnesses. The witnesses should also provide their signatures and details.</li>
                                    <li><strong>Submit the Form:</strong> Submit the completed nomination form to your DP or broker. Some DPs offer the option to submit this form online.</li>
                                    <li><strong>Verification:</strong> The DP will verify the details provided in the nomination form for accuracy and compliance with regulatory requirements.</li>
                                    <li><strong>Confirmation:</strong> After verifying the nomination form and details, the DP will update your Demat account records with the nominee's information. You will receive a confirmation of the nomination.</li>
                                    <li><strong>Acknowledgment:</strong> The nominee will be informed about their nomination and asked to provide their consent. They may need to complete a consent form.</li>
                                    <li><strong>Changing Nominee (if required):</strong> If you wish to change the nominee in the future, you can do so by submitting a nomination change form to your DP. Follow the same process as outlined above, but this time, provide the updated nominee information.</li>
                                    <li><strong>Multiple Nominees:</strong> In some cases, you can nominate multiple individuals and specify the percentage of the assets each nominee should receive in the event of your demise.</li>
                                    <li><strong>Revoking Nomination:</strong> If you want to revoke a nominee, you can do so by submitting a nomination revocation form to your DP.</li>
                                </ol>
                                <p>It's essential to keep your nomination details updated, especially if there are changes in your family or personal circumstances. Nomination ensures a smoother transfer of your assets to the intended beneficiary in case of unfortunate events.</p>
                                <p>Please check with your specific Depository Participant or broker for any additional steps or requirements, as processes may vary slightly depending on the institution.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id16')} id="id16">
                                <h2><a href="/blog/how-to-close-a-demat-account/">How to Close a Demat Account?</a></h2>
                                <p>Closing a dormant Demat account is a necessary step to avoid maintenance charges and keep your financial house in order. Here is how to go about closing it: </p>
                                <img src={closedemat} className="img-fluid" alt={"How to Close Demat Account"} width={"670"} height={"930"}/><br/><br/>
                                <ol>
                                    <li>
                                        <h3>Determine Account Activity</h3>
                                        <p>Before initiating the closure process, assess the activity in your Demat account. Ensure all holdings are either transferred or sold.</p>
                                    </li>
                                    <li>
                                        <h3>Contact Your Depository Participant (DP)</h3>
                                        <p>Reach out to your DP, the entity with whom you have the Demat account. Request the necessary account closure forms and guidelines.</p>
                                    </li>
                                    <li>
                                        <h3>Fill Out the Closure Forms</h3>
                                        <p>Complete the required forms as per your DP's instructions. These forms will typically include an account closure request and a list of securities to be transferred or sold.</p>
                                    </li>
                                    <li>
                                        <h3>Transfer or Sell Holdings</h3>
                                        <p>If you have securities in your Demat account, decide whether you want to transfer them to another Demat account or sell them. Follow the relevant procedures.</p>
                                    </li>
                                    <li>
                                        <h3>Settle Outstanding Charges</h3>
                                        <p>Ensure all charges and fees, if any, are cleared before initiating closure. Outstanding fees can delay the closure process.</p>
                                    </li>
                                    <li>
                                        <h3>Submit Forms and Documents</h3>
                                        <p>Submit the completed <a href="/blog/demat-account-closure-form/">demat account closure forms</a> along with any required documents to your DP for guidance through the process.</p>
                                    </li>
                                    <li>
                                        <h3>Verification and Closure</h3>
                                        <p>Your DP will verify your request and initiate the closure process. This can take a while, depending on their internal procedures.</p>
                                    </li>
                                    <li>
                                        <h3>Confirmation</h3>
                                        <p>Once the account closure is complete, your DP will provide confirmation. Ensure you receive all necessary documents and statements.</p>
                                    </li>
                                </ol>
                                <img src={closureDemat} className="img-fluid" alt={"Demat Aaccount Closing Process"} width={"670"} height={"1298"} /><br/><br/>
                                <p>Remember, closing a Demat account should be done thoughtfully. Ensure you have explored all options and considered the implications before making this decision.</p>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id17')} id="id17">
                                <h2>Demat Account - Frequently Asked Questions</h2>
                                <p>Got questions? Explore our FAQs for answers to common questions and concerns related to Demat account. If you need further assistance or personalized guidance, feel free to contact us.</p>
                                <ul>
                                    <li>
                                        <h3>Who can open a Demat account?</h3>
                                        <p>A Demat account can be opened by Indian residents, non-resident Indians (NRIs), and foreign investors through registered depository participants (DPs).</p>
                                    </li>
                                    <li>
                                        <h3>How secure is my Demat account?</h3>
                                        <p>Demat accounts are highly secure, using encryption and authentication measures. Your DP and depository maintain stringent security standards.</p>
                                    </li>
                                    <li>
                                        <h3>Can I have multiple Demat accounts?</h3>
                                        <p>Yes, you can have multiple Demat accounts, but there are regulatory restrictions. Each account must have a different purpose or ownership structure.</p>
                                    </li>
                                    <li>
                                        <h3>How to check my Demat account?</h3>
                                        <p>You can check your Demat account balance and transaction history through the online portal provided by your DP.</p>
                                    </li>
                                    <li>
                                        <h3>What happens if I forget my Demat account password?</h3>
                                        <p>Contact your DP for password reset assistance. They will guide you through the process.</p>
                                    </li>
                                    <li>
                                        <h3>How do I update my personal information in my Demat account?</h3>
                                        <p>Submit the necessary documents and updates to your DP for any changes in personal information.</p>
                                    </li>
                                    <li>
                                        <h3>Can I trade in commodities using my Demat account?</h3>
                                        <p>No, commodities trading requires a separate <a href="/commodity-trading">commodity trading account</a>.</p>
                                    </li>
                                    <li>
                                        <h3>What is the procedure for transferring shares from one Demat account to another?</h3>
                                        <p>You can initiate the transfer through a delivery instruction slip (DIS) or by submitting an off-market transfer request.</p>
                                    </li>
                                    <li>
                                        <h3>Are there any restrictions on the number of shares I can hold in my Demat account?</h3>
                                        <p>There are no specific restrictions on the number of shares you can hold, but DPs may have their limits for operational efficiency.</p>
                                    </li>
                                    <li>
                                        <h3>When does the IEX bonus share get credited to the Demat account?</h3>
                                        <p>Bonus shares are credited after the company's board approves the bonus issue, and the record date is announced.</p>
                                    </li>
                                    <li>
                                        <h3>How to change the nominee in the Demat account?</h3>
                                        <p>Fill out the nomination change form provided by your DP and submit the necessary documents.</p>
                                    </li>
                                    <li>
                                        <h3>Can I open a Demat account without an Aadhar Card?</h3>
                                        <p>Yes, you <a href="/blog/can-i-open-demat-account-without-aadhar-card/">can open a Demat account without an Aadhar card</a> by providing other government-issued identity documents.</p>
                                    </li>
                                </ul>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id18')} id="id18">
                                <h2>Legal and Regulatory Information</h2>
                                <p>As an investor, it's crucial to be aware of the legal and regulatory aspects governing your Demat account. Here are some key points to keep in mind:</p>
                                <ul className="reset-list">
                                    <li>
                                    <h3>SEBI Regulations</h3>
                                    <p>The Securities and Exchange Board of India (SEBI) is the regulatory authority that oversees the functioning of Demat accounts and the securities market in India. Familiarize yourself with SEBI's guidelines and regulations.</p>
                                    </li>
                                    <li>
                                        <h3>Income Tax Implications</h3>
                                        <p>Understand the tax implications of your investments held in a Demat account. Income generated from securities, such as dividends and capital gains, may be subject to taxation.</p>
                                    </li>
                                    <li>
                                        <h3>Nomination</h3>
                                        <p>You have the option to nominate a beneficiary for your Demat account holdings. This simplifies the transfer of assets in the event of your demise.</p>
                                    </li>
                                    <li>
                                        <h3>Legal Rights</h3>
                                        <p>As a Demat account holder, you have legal rights and responsibilities. It's important to be aware of these rights, including the right to information, privacy, and grievance redressal.</p>
                                    </li>
                                    <li>
                                        <h3>Dispute Resolution</h3>
                                        <p>In case of disputes or grievances related to your Demat account, you can approach the Depository Participant (DP) or utilize the services of SEBI's Investor Education and Protection Fund (IEPF) and Investor Grievance Redressal Mechanism.</p>
                                    </li>
                                    <li>
                                        <h3>Documentation</h3>
                                        <p>Keep all documents related to your Demat account, including <a href="/blog/demat-account-opening-form/">demat account opening forms</a>, transaction statements, and KYC documents, in a safe and accessible place.</p>
                                    </li>
                                    <li>
                                        <h3>Stay Informed</h3>
                                        <p>
                                        Regulations and tax laws can change over time. Stay informed about any updates or amendments that may impact your Demat account and investments.<br/><br/>
                                        By being aware of the legal and regulatory aspects, you can ensure that your investments are in compliance with the law and that your rights as an investor are protected.<br/><br/>
                                        Your Demat account is a valuable tool in your financial journey, and understanding how to use it effectively is essential. If you have any questions or need further assistance, feel free to contact us.</p>
                                    </li>
                                
                                </ul>
                            </InView>
                            <InView as="div" className="pr-sec"  onChange={(e) => !scrollConfig.current.isTriggered && e===true && setIsActive4('id19')} id="id19">
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
                                    <path d="M10.3164 1.82026e-06C4.63799 -0.00329398 0.0319564 4.46942 0.0285663 9.99011C0.0251763 15.5108 4.62569 19.9889 10.3041 19.9922C13.0322 19.9965 15.6496 18.944 17.5774 17.0674C19.506 15.194 20.5903 12.6526 20.592 10.0021C20.5953 4.48139 15.9948 0.00329772 10.3164 1.82026e-06ZM10.3167 18.9922C5.20633 18.9955 1.06078 14.9706 1.05726 10.0022C1.05381 5.03382 5.19377 1.00336 10.3041 1C12.7594 0.995729 15.1152 1.94287 16.8502 3.63184C18.5859 5.31769 19.5619 7.60468 19.5635 9.98999C19.567 14.9584 15.4271 18.9888 10.3167 18.9922ZM11.0313 9.9961L14.3038 6.81446C14.4998 6.62006 14.4998 6.30896 14.3038 6.11456C14.1051 5.91736 13.7795 5.91419 13.5767 6.10742L10.3041 9.28906L7.03157 6.10748C6.83161 5.91699 6.51163 5.91699 6.31168 6.10748C6.10884 6.30072 6.10558 6.61725 6.30433 6.81446L9.57688 9.9961L6.30433 13.1777C6.2079 13.2715 6.15379 13.3986 6.15373 13.5312C6.15373 13.8073 6.38394 14.0312 6.66795 14.0313C6.80437 14.0314 6.93526 13.9787 7.03157 13.8848L10.3041 10.7031L13.5767 13.8848C13.673 13.9787 13.8039 14.0314 13.9403 14.0313C14.0766 14.0312 14.2073 13.9786 14.3038 13.8849C14.5047 13.6896 14.5047 13.373 14.3038 13.1777L11.0313 9.9961Z" fill="#676767"/>
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