
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import rest from "../../Services/rest";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function Slidersec() {

    const [research, setResearch] = useState([]);
    const [render,setRender]=useState(false);
    const [isloading,setisloading ] = useState(true);

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: false,
        fade: false,
        autoplay: false,
        centerMode: true,
        Padding: '0 55px 0 30px',
        autoplaySpeed: 7000,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    Padding: '0',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    Padding: '0',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    Padding: '0',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    };


    useEffect(() => {
       setRender(true);
       if(render==true){
       rest.fetchExpertResearchReport(setisloading,setResearch);
       }
    }, [render]);

    return (
        <div>
            <section className="sumit-bg-class">
                <div className="container">
                    <div className="row flex-sec-r align-items-center">
                        <div className={(research.length===0)? "col-xl-12 ":"col-xl-5 "}>
                            <div className="bg-class-left">
                                <h2 className="title-sm-new">Sumeet Bagadia Calls</h2>
                                <p className="sml-para">Adept at analysing various standalone events to predict the market outcome; <br /> Mr Sumeet Bagadia's Research Calls have an excellent success ratio. Have a look at the results of the past research calls by him.</p>
                            </div>
                        </div>

                        {
                            isloading ?
                            <div className="text-center">
                            <div>
                                <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                </div>
                        </div>
                        :
                        <div className="col-xl-7">
                       
                            {
                                research.length?
                                <div className="">
                                <div className="bg-class-right">
                                <Slider {...settings} className="sm-slider-bg services-list-slider">

                                    {
                                        research.map((item, index) => {
                                            return (
                                                <div className="service-item" key={item.id}>
                                                    <div className="item-slider">
                                                        <h4 style={{"font-weight": "bold"}}>{item.scrip_name}</h4>
                                                        <ul>
                                                            <li>
                                                                <h4>Entry Price</h4>
                                                                <h3>{Number((item?.priceData?.entry_price?.value) || 0).toFixed(2)}</h3>
                                                            </li>
                                                            <li>
                                                                <h4>Target Price</h4>
                                                                <h3>{Number((item?.priceData?.target?.value) || 0).toFixed(2)}</h3>
                                                            </li>
                                                        </ul>
                                                        <h4 className="md-profit">
                                                            <span>
                                                                {
                                                                    item?.matched_price && item?.priceData?.entry_price?.value ? 
                                                                        ((item?.call_type.toLowerCase()) == 'buy' || (item?.call_type.toLowerCase()) == 'subscribe') ? ((((item?.matched_price - item?.priceData?.entry_price?.value) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'Profit: ' : 'Loss: ') : ((((item?.priceData?.entry_price?.value - item?.matched_price) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'Profit: ' : 'Loss: ')

                                                                     : ''
                                                                }{
                                                                    item?.matched_price && item?.priceData?.entry_price?.value ? <span className={((item?.call_type.toLowerCase()) == 'buy' || (item?.call_type.toLowerCase()) == 'subscribe') ? ((((item?.matched_price - item?.priceData?.entry_price?.value) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'text-success' : 'text-danger') : ((((item?.priceData?.entry_price?.value - item?.matched_price) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'text-success' : 'text-danger')} style={{display:'inline'}}>
                                                                        {((item?.call_type.toLowerCase()) == 'buy' || (item?.call_type.toLowerCase()) == 'subscribe') ? (Number((((item?.matched_price - item?.priceData?.entry_price?.value) / item?.priceData?.entry_price?.value) * 100) || 0).toFixed(2)) : (Number((((item?.priceData?.entry_price?.value - item?.matched_price) / item?.priceData?.entry_price?.value) * 100 || 0)).toFixed(2))}%
                                                                    </span> : ''
                                                                }</span>
                                                            {/* Profit: 21.36 % */}
                                                        </h4>
                                                        <h4 className="trg-achv">Target Achieved</h4>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </Slider>

                            </div>
                            <div className="sm-slider-thumb">
                        </div>
                    </div>
                            : 
                                    <div className="text-center">
                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                    </div>
                            }
                            </div>
               
                            
                        }
                        
                    </div>
                </div>
            </section >

        </div >

    );
}

export default Slidersec;
