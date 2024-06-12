import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import cmsService from "../../Services/cmsService";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import "../CEBPLPolicies/CEBPL-Policies.scss";
import noDataimg from '../../assets/images/no-data.webp';

function InvestorAwarenessMain() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);

    function loadinvestorAware() {
        cmsService.InvestorAware().then(
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




    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadinvestorAware()

        }

    }, [trigger])





    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1 className="title">Investor Awareness</h1>

                        </div>
                    </div>
                    <div className=" quicklinkswrap">
                        <div className="row border-bottom">
                            <div className=" col-md-4 col-3 "><h3 className="head">Exchange </h3></div>
                            <div className="col-md-4 col-4 word-wrap"> <h3 className="head">Web Address</h3></div>
                            <div className="col-md-4 col-4 word-wrap"> <h3 className="head">Contact No.</h3></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-3 pb-3 pt-3">BSE </div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.bseindia.com/" target={"_blank"} className="text-decoration-none">www.bseindia.com</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:02222728097" className="text-decoration-none">022-22728097</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-3 pb-3 pt-3">NSE</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.nseindia.com/" target={"_blank"} className="text-decoration-none">www.nseindia.com</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:1800220058" className="text-decoration-none">1800220058</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-3 pb-3 pt-3">MCX</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.mcxindia.com/" target={"_blank"} className="text-decoration-none">www.mcxindia.com</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:02266494000" className="text-decoration-none">022-66494000</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-3 pb-3 pt-3">NCDEX</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.ncdex.com/" target={"_blank"} className="text-decoration-none">www.ncdex.com</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:02266406789" className="text-decoration-none">022-66406789</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-3 pb-3 pt-3">MSEI</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.msei.in/" target={"_blank"} className="text-decoration-none">www.msei.in</a></div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="tel:02261129000" className="text-decoration-none">022-61129000</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-4 col-3 pb-3 pt-3">SEBI</div>
                            <div className="col-md-4 col-4 pb-3 pt-3 word-wrap"><a href="https://www.sebi.gov.in/" target={"_blank"} className="text-decoration-none">www.sebi.gov.in</a>
                            </div>
                            <div className=" col-md-4 col-4 pb-3 pt-3"><a href="tel:18002667575" className="text-decoration-none">18002667575</a></div>
                        </div>

                    </div>
                    <p className="pt-5">SEBI now vide its letter dated July 03, 2019 has directed all intermediaries to display the following information on their website to make the complaint redressal mechanism through SCORES more efficient.
                    </p>
                    <p className="pt-5">Filing compliant on SCORES – Easy &amp; quick
                    </p>
                    <p className="pt-5">a. Register on SCORES portal<br />
                        b. Mandatory details for filing complaints on SCORES<br />
                        I. Name, PAN, Address, Mobile Number, E-mail ID


                    </p>
                    <p className="pt-5">c. Benefits:<br />
                        i. Effective Communication
                        <br />
                        ii. Speedy redressal of the grievances

                    </p>
                    <p className="pt-5">*Updation of mandatory KYC fields by March 31, 2022 for more details visit Annexure I KYC Updation</p>

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
                                    data && data.length === 0 ?
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div> :
                                        <div className="row quicklinkswrap mt-5">
                                            <div className="col-md-12">

                                                <div className="subtext">
                                                    {
                                                        data?.map((res, i) => {
                                                            return (

                                                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                                    <div ><strong>{res.KYC_Updation}</strong></div>
                                                                    <div className="download cursor-pointer">
                                                                        {
                                                                            res.files ?
                                                                                <a onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.files) }} target="_blank" className="text-decoration-none cursor-pointer"> <FontAwesomeIcon icon={faDownload} className="downloadimg" /> Download</a> :
                                                                                ''

                                                                        }

                                                                    </div>
                                                                </div>
                                                            )


                                                        })

                                                    }

                                                </div>



                                            </div>
                                        </div>
                                }
                            </div>
                    }
    
    <h4>Monitoring of Collateral:</h4>

    <p className="pt-3">In order to provide visibility of client-wise collateral at all levels, viz., TM, CM and Clearing Corporation (CC) as 
    prescribed by SEBI vide circular no.SEBI/HO/MRD2_DCAP/CIR/2021/0598 dated July 20, 2021, ICCL has provided a web 
    portal facility to allow clients to view their disaggregated collateral placed with Member and as reported by their
    registered Trading Member /Clearing Member. You may click on the link given below to check Client Collateral
    Details: <a href="https://bseplus.bseindia.com" target="_blank">https://bseplus.bseindia.com</a> Investors are requested to register on the portal to avail this facility.</p>
    </div>
            </section>
        </div>
    );
}
export default InvestorAwarenessMain;