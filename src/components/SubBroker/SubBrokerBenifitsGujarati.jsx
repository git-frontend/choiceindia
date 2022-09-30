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
                            <h2 className="titl3">સબ બ્રોકર બનવાના લાભો </h2>
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
                                            <LazyLoader src={Manager} alt={"સ્થાનિક રિલેશનશિપ મેનેજર સાથે સબ-બ્રોકર ફ્રેન્ચાઇઝ"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>ડેડીકેટેડ લોકલ રિલેશનશિપ મેનેજર </h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Software} alt={"વ્યવસાયનું સંચાલન કરવા માટે અદ્યતન સોફ્ટવેર સાથે સબ બ્રોકર ફ્રેન્ચાઇઝ"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Software} alt="વ્યવસાયનું સંચાલન કરવા માટે અદ્યતન સોફ્ટવેર સાથે સબ બ્રોકર ફ્રેન્ચાઇઝ" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>વ્યવસાયનું સંચાલન કરવા માટે અદ્યતન સોફ્ટવેર</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"માર્કેટિંગ અને વેચાણ સપોર્ટ સાથે સબબ્રોકર બનો"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>માર્કેટિંગ અને સેલ્સ સપોર્ટ</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Channels} alt={"સમર્પિત WhatsApp અને ટેલિગ્રામ ચેનલો સાથે સબ બ્રોકર બનો"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Channels} alt="સમર્પિત WhatsApp અને ટેલિગ્રામ ચેનલો સાથે સબ બ્રોકર બનો" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>સમર્પિત WhatsApp અને ટેલિગ્રામ ચેનલો</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            {/* <LazyLoader src={Training} alt={"વેબિનાર અને પરિષદો દ્વારા તાલીમ સાથે સબબ્રોકર ફ્રેન્ચાઇઝ"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Training} alt="વેબિનાર અને પરિષદો દ્વારા તાલીમ સાથે સબબ્રોકર ફ્રેન્ચાઇઝ" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>વેબિનાર અને કોન્ફરન્સ દ્વારા તાલીમ</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            {/* <LazyLoader src={Trading} alt={"અત્યાધુનિક ટ્રેડિંગ પ્લેટફોર્મ સાથે સબ બ્રોકર ફ્રેન્ચાઇઝી"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Trading} alt="અત્યાધુનિક ટ્રેડિંગ પ્લેટફોર્મ સાથે સબ બ્રોકર ફ્રેન્ચાઇઝી" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>અત્યાધુનિક ટ્રેડિંગ પ્લેટફોર્મ (એપ અને વેબ)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"પારદર્શક અને વૃદ્ધિ લક્ષી બિઝનેસ મોડલ સાથે સબબ્રોકરેજ"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>પારદર્શક અને વિકાસલક્ષી બિઝનેસ મોડલ</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <div className="benifits-list slider-hide">
                                
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"સ્થાનિક રિલેશનશિપ મેનેજર સાથે સબ-બ્રોકર ફ્રેન્ચાઇઝ"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>ડેડીકેટેડ લોકલ રિલેશનશિપ મેનેજર</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Software} alt={"વ્યવસાયનું સંચાલન કરવા માટે અદ્યતન સોફ્ટવેર સાથે સબ બ્રોકર ફ્રેન્ચાઇઝ"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Software} alt="વ્યવસાયનું સંચાલન કરવા માટે અદ્યતન સોફ્ટવેર સાથે સબ બ્રોકર ફ્રેન્ચાઇઝ" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>વ્યવસાયનું સંચાલન કરવા માટે અદ્યતન સોફ્ટવેર</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"માર્કેટિંગ અને વેચાણ સપોર્ટ સાથે સબબ્રોકર બનો"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>માર્કેટિંગ અને સેલ્સ સપોર્ટ</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Channels} alt={"સમર્પિત WhatsApp અને ટેલિગ્રામ ચેનલો સાથે સબ બ્રોકર બનો"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Channels} alt="સમર્પિત WhatsApp અને ટેલિગ્રામ ચેનલો સાથે સબ બ્રોકર બનો" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>સમર્પિત WhatsApp અને ટેલિગ્રામ ચેનલો</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            {/* <LazyLoader src={Training} alt={"વેબિનાર અને પરિષદો દ્વારા તાલીમ સાથે સબબ્રોકર ફ્રેન્ચાઇઝ"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Training} alt="વેબિનાર અને પરિષદો દ્વારા તાલીમ સાથે સબબ્રોકર ફ્રેન્ચાઇઝ" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>વેબિનાર અને કોન્ફરન્સ દ્વારા તાલીમ</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            {/* <LazyLoader src={Trading} alt={"અત્યાધુનિક ટ્રેડિંગ પ્લેટફોર્મ સાથે સબ બ્રોકર ફ્રેન્ચાઇઝી"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Trading} alt="અત્યાધુનિક ટ્રેડિંગ પ્લેટફોર્મ સાથે સબ બ્રોકર ફ્રેન્ચાઇઝી" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>અત્યાધુનિક ટ્રેડિંગ પ્લેટફોર્મ (એપ અને વેબ)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"પારદર્શક અને વૃદ્ધિ લક્ષી બિઝનેસ મોડલ સાથે સબબ્રોકરેજ"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>પારદર્શક અને વિકાસલક્ષી બિઝનેસ મોડલ</h4>
                                    </div>
                                </div>
                            </div>
                           
                            }
                             </div>
                            <div className="item-next1">  
                                <h3>ચોઈસ ના સબ બ્રોકર બનો</h3>
                                <p>                                <p>Start Sub Broker franchise with a trustworthy partner that can help you to grow up.</p></p>
                                <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>હવે જોડાઓ</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default SubBrokerBenifits;