import React, { useState, useEffect } from "react";
import corporateService from "../../Services/CorporateService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import noDataimg from '../../assets/images/no-data.webp';

function CodeConductMenu() {
    const [data, setData] = useState();
    const [list, setList] = useState();
    const [trigger, setTrigger] = useState(false);

    function loadCorporatepdf() {
        corporateService.Corporate().then(
            res => {
                if (res) {
                    setData(res.data.data);
                    // console.log("check", res.data.data)

                } else {
                    setData([]);

                }

            }
        ).catch((error) => {
            setData([]);
        });
    }


    function loadCorporatecommitteepdf() {
        corporateService.CorporateCommitee().then(
            res => {
                if (res) {
                    setList(res.data.data);
                    // console.log("check", res.data.data)

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
            loadCorporatepdf();
            loadCorporatecommitteepdf();

        }

    }, [trigger])


    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Corporate Governance</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className=" code-mainwrapper cgmainwrap">
                        <div className="col-md-12">


                            <h3 className="head">Policies</h3>
                            {
                                (data && data.length)? 
                                <div className="subtext">
                                {
                                    (data || [])?.map((res,i) => {

                                        return (
                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                <div>{res.headline} </div>
                                                {
                                                    res.view?
                                                    <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="cursor-pointer" /></div>:
                                                    <p>No Data Available</p> 
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


                            </div>:
                                    <div className="text-center">
                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                    </div>

                            }
                           



                        </div>




                    </div>
                    <div className=" code-mainwrapper cgmainwrap">
                        <div className="col-md-12">


                            <h3 className="head">Committee</h3>
                            {
                                (list && list.length)?
                                <div className="subtext">
                                {
                                    (list || []).map((res,i) => {
                                        return (
                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                <div>{res.headline} </div>
                                                {
                                                    res.view?
                                                    <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.view) }} className="cursor-pointer" /></div>:
                                                    <p>No Data Available</p>
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
export default CodeConductMenu;
