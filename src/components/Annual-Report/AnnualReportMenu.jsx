import React, { useState, useEffect } from "react";
import AnnualReportService from "../../Services/AnnualReportService";
import Navbar from "../Common-features/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import noDataimg from '../../assets/images/no-data.webp';
import "../CodeConduct/code-conduct.scss";
import "../Common-features/navbar.scss";
import "../Corporate-Governance/corporate-governance.scss";
import loaderimg2 from '../../assets/vedio/loader2.gif';
function AnnualReportMenu() {
    const [data, setData] = useState();
    const [list, setList] = useState();
    const [isloading,setisloading ] = useState(true);
    const [trigger, setTrigger] = useState(false);

    function loadAnnualReportpdf() {
        AnnualReportService.AnnualReport().then(
            res => {
                if (res) {
                    setisloading(false)
                    setData(res.data.data);

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
                    setList(res.data.data);

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
                            isloading?
                            <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />:
                            <div>
                            {
                                (data && data.length)? <div className="row code-mainwrapper cgmainwrap">
                                <div className="col-md-12">
        
                                    <div className="d-flex justify-content-between">
        
                                        <h3 className="head">Description</h3>
        
                                    </div>
                                    <div className="subtext">
                                        {
                                            (data || []).map((res,i) => {
                                                return (
                                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                        <div>{res.report_description ? res.report_description:''} </div>
                                                    {
                                                        res.view?
                                                        <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.view) }} className="cursor-pointer" /></div>:
                                                        ''
                                                    }
                                                        
                                                    </div>
        
                                                )
                                            })
                                        }
        
        
                                        {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                            <div>Annual Return 2021 - 2022 </div>
        
                                            <div><FontAwesomeIcon icon={faEye} onClick={()=>{window.open(pdf1)}} className="cursor-pointer" /></div>
                                        </div>
                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                            <div>Annual Return 2020 - 2021 </div>
        
                                            <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                        </div>
        
                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                            <div>The Notice 28th AGM </div>
        
                                            <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                        </div>
                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                            <div>Annual Report 2020 - 2021</div>
        
                                            <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                        </div> */}
        
        
                                    </div>
        
        
        
                                </div>
        
        
        
        
                            </div>: 
                                    <div className="text-center">
                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                    </div>
                            }
                            </div>

                        }
                    </div>

{
    isloading?
    <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />:
    <div>
                            {
                        (list && list.length)? 
                        <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

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

                            </div>

                            
                            
                        </div>




                    </div>:
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
export default AnnualReportMenu;