import React, { useState, useEffect } from "react";
import shareHoldingService from "../../Services/ShareHoldingService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import { OverlayTrigger } from "react-bootstrap";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.gif';

function ShareHoldingMenu() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);
    function loadSharepdf() {
        shareHoldingService.ShareHolding().then(
            res => {
                if (res) {
                    setisloading(false);
                    setData(res.data.data);
                    //  console.log("check", res.data.data)

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
            loadSharepdf();


        }

    }, [trigger])


    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Share Holding Pattern</h2>
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
                            data && data.length ?
                                <div className="row code-mainwrapper cgmainwrap">
                                    <div className="col-md-12">
                                        <h3 className="head">Financial Year 2021 - 22</h3>


                                        <div className="subtext">
                                            {
                                                (data || []).map((res, i) => {
                                                    return (

                                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                            <div>{res.titel}</div>
                                                            <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="cursor-pointer" /></div>
                                                        </div>

                                                    )
                                                })
                                            }


                                            {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>December 2021</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>September 2021 </div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>June 2021</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div> */}


                                        </div>
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
            </section>
        </div>
    );
}
export default ShareHoldingMenu;
