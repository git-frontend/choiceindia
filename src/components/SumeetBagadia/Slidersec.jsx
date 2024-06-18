
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

    // function getExpertResearch(request) {
    //     let url = new API_URLS().getExpertResearchreportURL();
    //     return axios.post(url, request, {});
    // }

    function fetchExpertResearchReport() {
        let startDate;
        let dateDiff = new Date().getDate() - 7;
        if (new Date().getMonth() === 0 && dateDiff < 0) {
            let lastMonthDate = new Date(new Date().getFullYear() - 1, 12, 0);
            startDate = new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth(), lastMonthDate.getDate() - (dateDiff - 1));
        } else if (new Date().getMonth() === 0 && dateDiff === 0) {
            startDate = new Date(new Date().getFullYear() - 1, 12, 0);
        } else if (dateDiff < 0) {
            let lastMonthDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
            startDate = new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth(), lastMonthDate.getDate() - (dateDiff - 1));
        } else if (dateDiff === 0) {
            startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        } else {
            startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 6);
        }

        let request = {
            "end_date": "",
            "is_expert": 1,
            "research_type": "",
            "limit": 10,
            "offset": 0,
            "segment": "EQ",
            "start_date": "",
            "status": "target_achieved",
            "subcategory_id": "",
            "search": "",
            "id": "",
            "user_id": "",
            "timeline_enabled": 1,
            "category_id": 2
        };
        rest.getExpertResearch(request).then((res) => {
           // console.log(res, "RES");
            if (res && res.status === 200 && res.data.status_code === 200 && res.data.response) {
                setisloading(false);
                let list = res.data.response.research.map((item, i) => {
                    if (item.datapoints && item.datapoints.length) {
                        item.priceData = {}
                        item.datapoints.forEach(sub => {
                            sub.key = (sub.key == 'cmp') ? 'entry_price' : sub.key;
                            item.priceData[sub.key] = sub
                        });
                    }
                    return item;
                });
                setResearch(list);
            } else {
                setisloading(false);
                setResearch([]);
            }
        }).catch((error) => {
           // console.log(error, "error");
           setisloading(false);
            setResearch([]);
        });
    }

    useEffect(() => {
       setRender(true);
       if(render==true){
       fetchExpertResearchReport();
       }
       // console.log('RRR',research.length);
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
                                {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
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

                                    {/* <div className="service-item">
                                        <div className="item-slider">
                                            <h4>SBIN</h4>
                                            <ul>
                                                <li>
                                                    <h4>Entry Price</h4>
                                                    <h3>441</h3>
                                                </li>
                                                <li>
                                                    <h4>Target Price</h4>
                                                    <h3>535</h3>
                                                </li>
                                            </ul>
                                            <h4 className="md-profit">
                                                Profit: 21.36 %
                                            </h4>
                                            <h4 className="trg-achv">Target Achieved: 150 Days</h4>
                                        </div>
                                    </div> */}


                                </Slider>

                            </div>
                            <div className="sm-slider-thumb">
                            {/* <ul className="reset">
                                <li className="active" data-slide="1">
                                </li>
                                <li className="" data-slide="2">
                                </li>
                                <li className="" data-slide="3">
                                </li>
                                <li className="" data-slide="4">
                                </li>
                            </ul> */}
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
