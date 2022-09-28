import React, { useState, useEffect } from "react";
import InvestorPresentationService from "../../Services/InvestorPresentationService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.gif';
import { Accordion } from "react-bootstrap";
import download1 from '../../assets/images/file-download/export.webp';

function InvestorPresentationMenu() {
    const [data, setData] = useState();
    const [isloading,setisloading ] = useState(true);
    const [trigger, setTrigger] = useState(false);

    function loadInvestorPresentationpdf() {
        InvestorPresentationService.InvestorPresentation().then(
            res => {
                if (res) {
                    setisloading(false);
                    // setData(res.data.data);

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
                                        setData(yearFormat);
                                        console.log("yearformat2", yearFormat)


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
            loadInvestorPresentationpdf()

        }

    }, [trigger])
    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Investor Presentation</h2>
                            <Navbar />
                        </div>
                    </div>
                    {
                        isloading ?
                        <div className="text-center">
                                    <div><img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> </div>
                                </div>
                                :
                        <div>

                                {
                                    data ?
                                        <div className="row code-mainwrapper cgmainwrap voting-result">
                                            <div className="col-md-12">
                                    <Accordion defaultActiveKey="0" flush className='faqs-accordion'>
                                                                {

                                                                    Object.keys(data)?.map((key, i) => {
                                                                        console.log("check", i);
                                                                        return (
                                                                            <Accordion.Item eventKey={i} key={i} className='faq-item' >
                                                                                <Accordion.Header> <h4 className='faq-header'> Financial year {key}</h4></Accordion.Header>
                                                                                <Accordion.Body className='faq-body'>
                                                                                    <div className="listing">
                                                                                        <ul>
                                                                                            {
                                                                                                data[key]?.map((res, index) => {
                                                                                                    return (

                                                                                                        <li key={index} className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                                                                                            <div className="text">{res.title}</div>
                                                                                                            {
                                                                                                                res.view ?
                                                                                                                    <div className="download"> <span onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="downloadtext cursor-pointer"><img src={download1} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> Download</span></div> :
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
export default InvestorPresentationMenu;
