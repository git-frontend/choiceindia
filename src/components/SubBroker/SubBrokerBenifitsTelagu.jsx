import React from 'react';
import Manager from '../../assets/images/sub-broker/local-relationship-manager-assistance.svg';
import Software from '../../assets/images/sub-broker/advanced-software-to-manage-business.svg';
import Sales from '../../assets/images/sub-broker/marketing-and-sales-support.svg';
import Channels from '../../assets/images/sub-broker/dedicated-whatsapp-and-telegram-channels.svg';
import Training from '../../assets/images/sub-broker/sub-broker-training-through-webinars-and-conferences.svg';
import Trading from '../../assets/images/sub-broker/cutting-edge-trading-platforms-app-web.svg';
import Transport from '../../assets/images/sub-broker/transparent-and-growth-oriented-business-model.svg';
import { useState ,useEffect} from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import Lazy from 'yup/lib/Lazy';

function SubBrokerBenifits() {

    const [defaultOption, setdefaultOption] = useState(() => 'sl-slider-active');

    const [view, setView] = useState({
        matches: window.innerWidth < 768 ? false : true,
    });

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,

    };

    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    useEffect(() => {
       
           
            let mediaQuery = window.matchMedia("(min-width: 768px)");
            mediaQuery.addListener(setView);
            // this is the cleanup function to remove the listener
            return () => mediaQuery.removeListener(setView);
        

    }, [])

    return (
        <div>


            <section className="broker-benifits">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">సబ్‌ బ్రోకర్‌ ప్రయోజనాలు</h2>
                        </div>
                    </div>
                    <div className="row relative">
                        <div className="col-md-12">
                            <div>
                            {
                                view && !view.matches ?
                                    <Slider {...settings} className="benifits-list slider-hide">
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"లోకల్ రిలేషన్షిప్ మేనేజర్‌తో సబ్-బ్రోకర్ ఫ్రాంచైజ్"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>స్థానిక రిలేషన్‌షిప్‌ మేనేజర్‌ సహాయం </h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Software} alt={"వ్యాపారాన్ని నిర్వహించడానికి అధునాతన సాఫ్ట్‌వేర్‌తో సబ్ బ్రోకర్ ఫ్రాంచైజ్"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Software} alt="వ్యాపారాన్ని నిర్వహించడానికి అధునాతన సాఫ్ట్‌వేర్‌తో సబ్ బ్రోకర్ ఫ్రాంచైజ్" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>వ్యాపార నిర్వాహణకు అధునాతన సాఫ్ట్‌వేర్</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Sales} alt={"మార్కెటింగ్ మరియు అమ్మకాల మద్దతుతో సబ్‌బ్రోకర్ అవ్వండి"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Sales} alt="మార్కెటింగ్ మరియు అమ్మకాల మద్దతుతో సబ్‌బ్రోకర్ అవ్వండి" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>మార్కెటింగ్‌ &amp; విక్రయాలకు మద్దతు</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Channels} alt={"అంకితమైన WhatsApp మరియు టెలిగ్రామ్ ఛానెల్‌లతో సబ్ బ్రోకర్ అవ్వండి"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Channels} alt="అంకితమైన WhatsApp మరియు టెలిగ్రామ్ ఛానెల్‌లతో సబ్ బ్రోకర్ అవ్వండి" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>ప్రత్యేకంగా ఏర్పాటు చేసిన వాట్సప్‌ &amp; టెలిగ్రామ్ ఛానెల్స్‌</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            {/* <LazyLoader src={Training} alt={"వెబ్‌నార్లు మరియు సమావేశాల ద్వారా శిక్షణతో సబ్‌బ్రోకర్ ఫ్రాంచైజ్"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Training} alt="వెబ్‌నార్లు మరియు సమావేశాల ద్వారా శిక్షణతో సబ్‌బ్రోకర్ ఫ్రాంచైజ్" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>వెబినార్లు &amp; సమావేశాల ద్వారా శిక్షణ</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"అధునాతన ట్రేడింగ్ ప్లాట్‌ఫారమ్‌తో సబ్ బ్రోకర్ ఫ్రాంచైజ్"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>అత్యాధునిక వ్యాపార వేదికలు(యాప్ &amp; వెబ్)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            {/* <LazyLoader src={Transport} alt={"పారదర్శక మరియు వృద్ధి-ఆధారిత వ్యాపార నమూనాతో సబ్‌బ్రోకరేజ్"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Transport} alt="పారదర్శక మరియు వృద్ధి-ఆధారిత వ్యాపార నమూనాతో సబ్‌బ్రోకరేజ్" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>పారదర్శకత &amp; వృద్ధి ఆధారిత వ్యాపార నమూనా</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <div className="benifits-list slider-hide">
                                
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"Local Relationship Manager Assistance"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>స్థానిక రిలేషన్‌షిప్‌ మేనేజర్‌ సహాయం </h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Advanced Software to Manage Business"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Software} alt="Advanced Software to Manage Business" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>వ్యాపార నిర్వాహణకు అధునాతన సాఫ్ట్‌వేర్</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Marketing &amp; Sales Support"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>మార్కెటింగ్‌ &amp; విక్రయాలకు మద్దతు</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Dedicated WhatsApp &amp; Telegram Channels"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Channels} alt="Dedicated WhatsApp &amp; Telegram Channels" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>ప్రత్యేకంగా ఏర్పాటు చేసిన వాట్సప్‌ &amp; టెలిగ్రామ్ ఛానెల్స్‌</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Training} alt={"Sub Broker Training through Webinars &amp; Conferences"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Training through Webinars &amp; Conferences" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>వెబినార్లు &amp; సమావేశాల ద్వారా శిక్షణ</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"Cutting Edge Trading Platforms (App &amp Web)"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>అత్యాధునిక వ్యాపార వేదికలు(యాప్ &amp; వెబ్)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"Transparent &amp; Growth Oriented Business Model"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>పారదర్శకత &amp; వృద్ధి ఆధారిత వ్యాపార నమూనా</h4>
                                    </div>
                                </div>
                            </div>
                           
                            }
                             </div>
                            <div className="item-next1">  
                                <h3>ఛాయిస్ సబ్ బ్రోకర్ అవ్వండి</h3>
                                <p>మీరు ఎదగడానికి సహాయపడే విశ్వసనీయ భాగస్వామితో సబ్ బ్రోకర్ ఫ్రాంచైజీని ప్రారంభించండి.</p>
                                <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>ఇప్పుడే చేరండి</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default SubBrokerBenifits;