import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import "../Annual-Report/annual-report.scss";
import FinanceInfoService from "../../Services/FinancialInfoService";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import { Accordion } from "react-bootstrap";
// import download1 from '../../assets/images/file-download/export.webp';
import viewicon from '../../assets/images/bi_eye-fill.svg';
function FinancialInfoMenu() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);

    function loadFinancialInfopdf() {
        FinanceInfoService.FinanceInfo().then(
            res => {
                if (res) {
                    setisloading(false);
                    // setData(res.data.data);
                    let yearFormat = {};
                    res.data.data.forEach(ele => {

                        if (!yearFormat[ele.financial_year]) {
                            yearFormat[ele.financial_year] = [];
                            yearFormat[ele.financial_year].push(ele)

                        } else {
                            yearFormat[ele.financial_year].push(ele)

                        }
                    })
                    setData(yearFormat);
                   


                } else {
                    setisloading(false);
                    setData([]);

                }

            }
        ).catch((error) => {
            setisloading(false);
            setData([]);
            
        });
    }




    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadFinancialInfopdf();

        }

    }, [trigger])
    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Financial-Info</h2>
                            <Navbar />
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
                            <div>
                                {
                                    data ?


                                        <div className="annual-reports code-mainwrapper cgmainwrap">
                                             <div className="">
                                       
                                                <Accordion defaultActiveKey="0" flush className='faqs-accordion'>
                                                    {

                                                        Object.keys(data)?.map((key, i) => {
                                                            return (
                                                                <Accordion.Item eventKey={i+""} key={i} className='faq-item' >
                                                                    <Accordion.Header> <h4 className='faq-header'>Financial Year {key}</h4></Accordion.Header>
                                                                    <Accordion.Body className='faq-body'>
                                                                        <div className="listing">
                                                                            <ul>
                                                                                {
                                                                                    data[key]?.map((res, index) => {
                                                                                        return (

                                                                                            <li key={index} className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                                                                                <div className="text">{res.month}</div>
                                                                                                {
                                                                                                    res.view ?
                                                                                                        <div> <span onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="downloadtext"><img src={viewicon} className={"img-fluid"} alt={"Loading"} width={""} height={""} /></span></div> :
                                                                                                        <div></div>
                                                                                                }

                                                                                            </li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>

                                                            )
                                                        })


                                                    }


                                                </Accordion> 
                                        

                                    </div>




                                        </div> :
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div>
                                }

                            </div>
                    }



                </div>
            </section>
        </div>
    );
}
export default FinancialInfoMenu;
