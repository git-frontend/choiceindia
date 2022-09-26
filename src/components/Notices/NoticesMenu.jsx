import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import noticesService from "../../Services/NoticesService";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.gif';

function NoticesMenu() {

    const [data, setData] = useState();
    const [list, setList] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);


    function loadnewspdf() {
        noticesService.Notices().then(
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


    function loadnewsRpdf() {
        noticesService.NoticesRight().then(
            res => {
                if (res) {
                    setList(res.data.data);


                } else {
                    setList([]);

                }

            }
        ).catch((error) => {
            setList([]);
        });
    }

    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadnewspdf();
            loadnewsRpdf();

        }

    }, [trigger])

    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Notices</h2>
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
                            list && list.length > 0 ?
                                <div className="row code-mainwrapper cgmainwrap">
                                    <div className="col-md-12">


                                        <h3 className="head">RIGHT ISSUE</h3>
                                        <h4 className="head">Description</h4>


                                        <div className="subtext">
                                            {
                                                (list || []).map((res, i) => {
                                                    return (
                                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                            <div>{res.Title} </div>
                                                            {
                                                                res.file ?
                                                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.file) }} /></div> :
                                                                    ''
                                                            }

                                                        </div>


                                                    )
                                                })
                                            }



                                            {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Right Issue - Letter of Offer </div>
                                
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Common Application Form</div>
                                 
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Abridge Letter of Offer</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Right Entitlement Letter</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Newspaper Publication of Pre - Issue Opening Advertisement of Right Issue</div>
                                   
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
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
                        isloading?
                        <div className="text-center">
                                    <div><img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> </div>
                                </div>
                                :
                                <div>
                        {
                            data && data.length > 0 ?
                                <div className="row code-mainwrapper cgmainwrap">
                                    <div className="col-md-12">



                                        <h3 className="head">Description</h3>


                                        <div className="subtext">
                                            {
                                                (data || []).map((res, i) => {
                                                    return (
                                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                            <div>{res.Title} </div>

                                                            <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.file) }} /></div>
                                                        </div>

                                                    )

                                                })
                                            }

                                            {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Postal Ballot Final</div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>AGM Notice 2021 - 22</div>

                                    <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open(pdf2) }} className="cursor-pointer" /></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>AGM Notice 2020 - 21</div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>AGM Notice 2019 - 20</div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>EGM Notice 2019</div>

                                    <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>AGM Notice 2019</div>

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
export default NoticesMenu;
