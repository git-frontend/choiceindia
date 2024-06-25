import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import cmsService from "../../Services/cmsService";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import "../CEBPLPolicies/CEBPL-Policies.scss";
import noDataimg from '../../assets/images/no-data.webp';

function InvestorCharterMain() {
    const [data2, setData2] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [isloading,setisloading ] = useState(true);
    const [datalist,setDatalist ] =useState();
    let values;
    let AllFilesValue = {};

    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {        
            cmsService.loadCmsData(cmsService.InvestorCharter,setisloading,setDatalist,"heading");
        }

    }, [trigger])


    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1 className="title">Investor Charter</h1>

                        </div>
                    </div>
                    {
                        isloading ?
                        <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                         </div>
                                </div>
                                :

                                <div>
                    {
                        data2 && data2.length ===0 ?
                        <div className="text-center">
                                    <div><img src={noDataimg} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> </div>
                                </div>
                                :
                                <div>
                        {
                        // data2 && Object.keys(data2)?.map
                        Object.keys(datalist)?.map((key, i) => {
                                return (
                                    <div className="row quicklinkswrap">
                                        <div className="col-md-12">
                                            <h3 className="head">{key}</h3>

                                            <div className="subtext">

                                                {
                                                    // (data2? (data2 && data2[title]) : '').map
                                                    datalist[key]?.map((res, index) => {
                                                        return (
                                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                                                <div>{res.title}</div>
                                                                {
                                                                    res.files?
                                                                    <div><a onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.files) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>:
                                                                    ''
                                                                }
                                                                
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>
                                            

                                        </div>
                                    </div>


                                )
                            })
                        }
                    </div>
                        
                    }
                    </div>

                    }

                </div>
            </section>
        </div>
    );
}
export default InvestorCharterMain;