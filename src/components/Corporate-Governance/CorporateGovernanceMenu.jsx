import React, { useState, useEffect } from "react";
import cmsService from "../../Services/cmsService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4'

function CodeConductMenu() {
    const [data, setData] = useState();
    const [list, setList] = useState();
    const [CGList, setCGList] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);
    const policies = CGList?.filter(e => e.title === "policies")
    const committee = CGList?.filter(e => e.title === "committee")

    function loadCorporateGovernancepdf() {
        cmsService.CorporateGovernance().then(
            res => {
                if (res) {
                    setisloading(false);
                    setCGList(res.data.data);

                } else {
                    setisloading(false);
                    setCGList([]);

                }

            }
        ).catch((error) => {
            setisloading(false)
            setCGList([]);
        });
    }


    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadCorporateGovernancepdf()
        }

    }, [trigger])


    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 menuwrap">
                            <h2 className="title">Corporate Governance</h2>
                            <Navbar />
                        </div>
                    </div>
                    {
                        isloading ?
                            <div>
                                <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                </div> :

                            <div>

                                {
                                    (policies && policies.length) ?
                                        <div className="row code-mainwrapper cgmainwrap">
                                            <div className="col-md-12">


                                                <h3 className="head">Policies</h3>

                                                <div className="subtext">
                                                    {
                                                        (policies || [])?.map((res, i) => {

                                                            return (
                                                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                                    <div>{res.headline ? res.headline : ""} </div>
                                                                    {
                                                                        res.view ?
                                                                            <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="cursor-pointer" /></div> :
                                                                            <td className=" text-end"></td>
                                                                    }

                                                                </div>
                                                            )

                                                        })
                                                    }


                                                </div>
                                            </div>




                                        </div> :
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div>

                                }

                            </div>
                    }





{
                        isloading ?
                            <div>
                                <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                </div> :

                    <div>
                        {
                            (committee && committee.length) ?
                                <div className="row code-mainwrapper cgmainwrap">
                                    <div className="col-md-12">


                                        <h3 className="head">Committee</h3>

                                        <div className="subtext">
                                            {
                                                (committee || []).map((res, i) => {
                                                    return (
                                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                            <div>{res.headline ? res.headline : ''} </div>
                                                            {
                                                                res.view ?
                                                                    <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="cursor-pointer" /></div> :
                                                                    <td className=" text-end"></td>
                                                            }

                                                        </div>


                                                    )
                                                })
                                            }


                                        </div>
                                    </div>




                                </div> :
                                <div className="text-center no-data-space">
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
export default CodeConductMenu;
