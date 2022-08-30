import React, { useState, useEffect } from "react";
import shareHoldingService from "../../Services/ShareHoldingService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import { OverlayTrigger } from "react-bootstrap";
function ShareHoldingMenu() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);

    function loadSharepdf() {
        shareHoldingService.ShareHolding().then(
            res => {
                if (res) {
                    setData(res.data.data);
                  //  console.log("check", res.data.data)

                } else {
                    setData([]);

                }

            }
        ).catch((error) => {
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
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Share Holding Pattern</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">


                            <h3 className="head">Financial Year 2021 - 22</h3>
                            <div className="subtext">
                                {
                                    (data || []).map((res) => {
                                        return (

                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                                <div>{res.titel}</div>
                                                <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }}  className="cursor-pointer" /></div>
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


                </div>
            </section>
        </div>
    );
}
export default ShareHoldingMenu;
