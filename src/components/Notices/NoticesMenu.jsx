import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import noticesService from "../../Services/NoticesService";
function NoticesMenu() {

    const [data, setData] = useState();
    const [list, setList] = useState();
    const [trigger, setTrigger] = useState(false);


    function loadnewspdf() {
        noticesService.Notices().then(
            res => {
                if (res) {
                    setData(res.data.data);
                    console.log("check", res.data.data)

                } else {
                    setData([]);

                }

            }
        ).catch((error) => {
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
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Notices</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">


                            <h3 className="head">RIGHT ISSUE</h3>
                            <h4 className="head">Description</h4>


                            <div className="subtext">
                                {
                                    (list||[]).map((res,i) => {
                                        return (
                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                                <div>{res.Title} </div>

                                                <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.file)}} /></div>
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




                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">



                            <h3 className="head">Description</h3>


                            <div className="subtext">
                             {
                                (data||[]).map((res)=>{
                                    return(
                                        <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                        <div>{res.Title} </div>

                                        <div><FontAwesomeIcon icon={faEye} className="cursor-pointer" onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.file)}} /></div>
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




                    </div>

                </div>
            </section>
        </div>
    );
}
export default NoticesMenu;
