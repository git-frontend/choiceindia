import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import FinanceInfoService from "../../Services/FinancialInfoService";
import noDataimg from '../../assets/images/no-data.webp';
function FinancialInfoMenu() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);

    function loadFinancialInfopdf() {
        FinanceInfoService.FinanceInfo().then(
            res => {
                if (res) {
                    setData(res.data.data);

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
            loadFinancialInfopdf()

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
                    <div className=" code-mainwrapper cgmainwrap">
                        <div className="col-md-12">


                            <h3 className="head">Financial Year 2021 - 22</h3>
                            {
                                data?
                                <div className="subtext">

                                {
                                    (data || []).map((res,i) => {
                                        return (
                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                <div>{res.month}</div>
                                                {
                                                  res.view?
                                                  <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.view)}} className="cursor-pointer" /></div>:
                                                  ""
                                                }
                                                
                                                
                                            </div>

                                        )
                                    })
                                }


                                {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>December 2021</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>September 2021 </div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>June 2021</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div> */}


                            </div>: 
                                    <div className="text-center">
                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                    </div> 
                            }



                        </div>




                    </div>


                </div>
            </section>
        </div>
    );
}
export default FinancialInfoMenu;