import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import cmsService from "../../Services/cmsService";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import noDataimg from '../../assets/images/no-data.webp';

import "./CEBPL-Policies.scss";

function CEBPLPoliciesMain() {

    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);




    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            cmsService.cmsAPIcall(cmsService.CebplPolicy,setisloading,setData)
        }

    }, [trigger])


    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1 className="title">CEBPL Policies</h1>

                        </div>
                    </div>
                    {
                        isloading ?
                            <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />:
                        <div>
                            {
                         (data && data.length)? 
                         <div className="row quicklinkswrap">
                         <div className="col-md-12">
 
                          
                             <h3 className="head">CEBPL Policies</h3>
                             <div className="subtext">
                                 {
                                     data?.map((res, i) => {
                                         return (
                                             <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                 <div>{res.title? res.title:''}</div>
                                                 <div><a onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.file) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
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
export default CEBPLPoliciesMain;