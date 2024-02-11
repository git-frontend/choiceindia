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

    // function loadCorporatepdf() {
    //     cmsService.Corporate().then(
    //         res => {
    //             if (res) {
    //                 setisloading(false);
    //                 setData(res.data.data);
    //                 // console.log("check", res.data.data)

    //             } else {
    //                 setisloading(false);
    //                 setData([]);

    //             }

    //         }
    //     ).catch((error) => {
    //         setisloading(false);
    //         setData([]);
    //     });
    // }


    // function loadCorporatecommitteepdf() {
    //     cmsService.CorporateCommitee().then(
    //         res => {
    //             if (res) {
    //                 setisloading(false);
    //                 setList(res.data.data);
    //                 // console.log("check", res.data.data)

    //             } else {
    //                 setisloading(false);
    //                 setList([]);

    //             }

    //         }
    //     ).catch((error) => {
    //         setisloading(false)
    //         setList([]);
    //     });
    // }

    function loadCorporateGovernancepdf() {
        cmsService.CorporateGovernance().then(
            res => {
                if (res) {
                    setisloading(false);
                    setCGList(res.data.data);
                    // console.log("check", res.data.data)

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
            // loadCorporatepdf();
            // loadCorporatecommitteepdf();
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
                                {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
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
                                                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                        <div>Policy For Familiarisation Programme For Independent Directors </div>
                                        <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                    </div>
    
                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                        <div>Code of Practices and Procedures for fair Disclosure of unpublished Price Sensitive Information </div>
                                        <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                    </div>
    
                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                        <div>Policy for Preservation of Documents and Archival of Documents </div>
                                        <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                    </div>
                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                        <div>Nomination And Remuneration Policy </div>
                                        <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                    </div> */}


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
                                            {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Audit Committee </div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Nomination and Remuneration Committee</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Stakeholder Relationship Committee</div>
                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div> */}



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
