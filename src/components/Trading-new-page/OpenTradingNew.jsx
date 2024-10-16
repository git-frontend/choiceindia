import React from "react";
import { useState, useEffect } from 'react';
import CommonDematTrading from "../Common-demat-and-trading/CommonDematTrading";
import pagesData from "../Common-demat-and-trading/CommonDematTradingData";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { faTwitter,faLinkedinIn,faFacebookF,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function OpenTradingNew() {
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
            // let doc = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript, 'text/html');
            // let doc1 = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript1, 'text/html');
            // let doc2 = parser.parseFromString(meta_tags[location.pathname.replace(/\//g, "")].faqscript2, 'text/html');
            // document.body.appendChild(doc.getElementsByTagName('script')[0] || [] ? doc.getElementsByTagName('script')[0] || [] : '');
            // document.body.appendChild(doc.getElementsByTagName('script1')[0] || [] ? doc1.getElementsByTagName('script')[0] || [] : '');
            // document.body.appendChild(doc.getElementsByTagName('script2')[0] || [] ? doc2.getElementsByTagName('script')[0] || [] : '');
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
            <CommonDematTrading data={pagesData.tradingdata} />
            


        </div>
    );
}

export default OpenTradingNew;