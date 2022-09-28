import React, { useState, useEffect } from "react";
// import pdf1 from "../../assets/pdf/annual-report/Annual Report.pdf";
import AnnualReportService from "../../Services/AnnualReportService";
import Navbar from "../Common-features/Navbar";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import noDataimg from '../../assets/images/no-data.webp';
import "../CodeConduct/code-conduct.scss";
import "../Common-features/navbar.scss";
import "../Corporate-Governance/corporate-governance.scss";
import loaderimg2 from '../../assets/vedio/loader2.gif';
import download1 from '../../assets/images/file-download/export.webp';
import viewicon from '../../assets/images/bi_eye-fill.svg';
function AnnualReportMenu() {
    const [data, setData] = useState();
    const [list, setList] = useState();
    const [isloading, setisloading] = useState(true);
    const [trigger, setTrigger] = useState(false);



    function loadAnnualReportpdf() {
        AnnualReportService.AnnualReport().then(
            res => {
                if (res) {
                    setisloading(false)
                    // setData(res.data.data);
                    let yearFormat = {}
                    res.data.data.forEach(ele => {

                        if (!yearFormat[ele.financial_year]) {
                            yearFormat[ele.financial_year] = [];
                            yearFormat[ele.financial_year].push(ele)
                        } else {
                            yearFormat[ele.financial_year].push(ele)

                        }
                    })
                    setData(yearFormat);
                    console.log("yearformat4",yearFormat)

                } else {
                    setisloading(false)
                    setData([]);

                }

            }
        ).catch((error) => {
            setisloading(false)
            setData([]);
        });
    }

    function loadAnnual2Reportpdf() {
        AnnualReportService.Annual2Report().then(
            res => {
                if (res) {
                    setisloading(false)
                    // setList(res.data.data);
                    let yearFormat = {}
console.log ("yearly",res.data.data)
                    res.data.data.forEach(ele => {

                        if (!yearFormat[ele.financial_year]) {
                            yearFormat[ele.financial_year] = [];
                            yearFormat[ele.financial_year].push(ele)
                           
                        } else {
                            yearFormat[ele.financial_year].push(ele)

                        }
                    })
                    setList(yearFormat);
                    console.log("yearformat2", yearFormat)

                } else {
                    setisloading(false)
                    setList([]);

                }

            }
        ).catch((error) => {
            setisloading(false)
            setList([]);
        });
    }




    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadAnnualReportpdf();
            loadAnnual2Reportpdf();

        }

    }, [trigger])

    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Annual Report</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div>
                        {
                            isloading ?
                                <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> :
                                <div>
                                    {
                                        data ? 
                                        
                                        <div className="annual-reports code-mainwrapper cgmainwrap">
                                            <div className="">
                                            {
                                                data ?
                                                    <Accordion defaultActiveKey="0" flush className='faqs-accordion'>
                                                        {

                                                            Object.keys(data)?.map((key, i) => {
                                                                console.log("check",i);
                                                                return (
                                                                    <Accordion.Item eventKey={i} key={i} className='faq-item' >
                                                                        <Accordion.Header> <h4 className='faq-header'> Annual Report {key}</h4></Accordion.Header>
                                                                        <Accordion.Body className='faq-body'>
                                                                            <div className="listing">
                                                                                <ul>
                                                                                    {
                                                                                        data[key]?.map((res, index) => {
                                                                                            return (

                                                                                                <li key={index} className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                                                                                    <div className="text">{res.report_description}</div>
                                                                                                    {
                                                                                                        res.view ?
                                                                                                            <div className="download"> <span onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" +res.view) }} className="downloadtext"><img src={viewicon} className={"img-fluid"} alt={"Loading"} width={""} height={""} /></span></div> :
                                                                                                            <div className="download"></div>
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


                                                    </Accordion> :
                                                    <div className="text-center">
                                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                                    </div>
                                            }

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

                    {
                        isloading ?
                            <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> :
                            <div>

                                <div className="annual-reports code-mainwrapper cgmainwrap">
                                    

                                        {/* 
                            <div className="d-flex justify-content-between">

                                <h3 className="head">Description</h3>

                            </div>
                            
                                <div className="subtext">
                           {
                            (list||[]).map((res,i)=>{
                                return(
                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                    <div>{res.report_description ? res.report_description:''}</div>
                                    {
                                        res.view ?
                                        <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.view) }} className="cursor-pointer" /></div>:
                                        ''

                                    }
                                   
                                </div>


                                )
                            })
                           }

                            </div> */}

                                        {/* <Accordion defaultActiveKey="0" flush className='faqs-accordion'>
                                                    {

                                                        Object.keys(list)?.map((key, i) => {
                                                            return (
                                                                <Accordion.Item eventKey={i} key={i} className='faq-item' >
                                                                    <Accordion.Header> <h4 className='faq-header'>{key}</h4></Accordion.Header>
                                                                    <Accordion.Body className='faq-body'>
                                                                        <div className="subtext">
                                                                            <ul>
                                                                                {
                                                                                    list[key]?.map((res, index) => {
                                                                                        return (

                                                                                            <li key={index}>
                                                                                                <div>{res.report_description ? res.report_description : ''}</div>
                                                                                                {
                                                                                                    res.view ?
                                                                                                        <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="cursor-pointer" /></div> :
                                                                                                        ''

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
                                                </Accordion> */}


                                        <div className="">
                                            {
                                                list ?
                                                    <Accordion defaultActiveKey="0" flush className='faqs-accordion'>
                                                        {

                                                            Object.keys(list)?.map((key, i) => {
                                                                return (
                                                                    <Accordion.Item eventKey={i} key={i} className='faq-item' >
                                                                        <Accordion.Header> <h4 className='faq-header'> Financial Statements Of Subsidiaries {key}</h4></Accordion.Header>
                                                                        <Accordion.Body className='faq-body'>
                                                                            <div className="listing">
                                                                                <ul>
                                                                                    {
                                                                                        list[key]?.map((res, index) => {
                                                                                            return (

                                                                                                <li key={index} className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                                                                                    <div className="text">{res.report_description}</div>
                                                                                                    {
                                                                                                        res.view ?
                                                                                                            <div className="download"> <span onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" +res.view) }} className="downloadtext"><img src={viewicon} className={"img-fluid"} alt={"Loading"} width={""} height={""} /></span></div> :
                                                                                                            <div className="download"></div>
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


                                                    </Accordion> :
                                                    <div className="text-center">
                                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                                    </div>
                                            }

                                        </div>



                                  




                                </div>


                            </div>
                    }








                </div>
            </section>
        </div>
    );
}
export default AnnualReportMenu;




