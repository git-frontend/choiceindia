import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import transactionService from "../../Services/TransactionService";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.gif';

function TransactionMenu() {

    const [data, setData] = useState();
    const [isloading,setisloading ] = useState(true);
    const [trigger, setTrigger] = useState(false);

    function loadTransactionpdf() {
        transactionService.Transaction().then(
            res => {
                if (res) {
                    setisloading(false);
                    setData(res.data.data);
                    // console.log("check", res.data.data)

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
            loadTransactionpdf()

        }

    }, [trigger])
    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Related Party Transaction</h2>
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
                                    (data && data.length)?
            <div className="row code-mainwrapper cgmainwrap voting-result">
                                    <div className="col-md-12">
            
                                        <div className="d-flex justify-content-between result-ttl">
                                            <h3 className="head">Date of the General Meeting</h3>
                                            <h3 className="head">Voting Result of the General Meeting</h3>
                                            <h3 className="head"></h3>
                                        </div>
                                        <div className="subtext">
                                            {
                                                (data || []).map((res,i) => {
                                                    return (
            
                                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3 result-item" key={i}>
                                                            <div className="itm-nm">{res.month} </div>
                                                            <div className="itm-nm">{res.titel}</div>
                                                            <div className="itm-nm"><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="cursor-pointer" /></div>
                                                        </div>
                                                    )
                                                })
                                            }
            
                                            {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                               <div>September 30, 2020 </div>
                                               <div>Voting Result</div>
                                               <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                               </div>
            
                                               <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                               <div>September 27, 2019 </div>
                                               <div>Voting Result</div>
                                               <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                               </div>
                                               <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                               <div>September 27, 2018</div>
                                               <div>Voting Result</div>
                                               <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
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
            </section>
        </div>
    );
}
export default TransactionMenu;