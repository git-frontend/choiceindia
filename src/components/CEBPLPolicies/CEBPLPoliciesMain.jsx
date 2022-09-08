import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import cebplService from "../../Services/CebplService";

import "./CEBPL-Policies.scss";

function CEBPLPoliciesMain() {

    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);

    function loadcebplPolicy() {
        cebplService.CebplPolicy().then(
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
            loadcebplPolicy()

        }

    }, [trigger])


    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">CEBPL Policies</h2>

                        </div>
                    </div>
                    <div className="row quicklinkswrap">
                        <div className="col-md-12">


                            <h3 className="head">CEBPL Policies</h3>
                            <div className="subtext">
                                {
                                    data?.map((res, i) => {
                                        return (
                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                <div>{res.title}</div>
                                                <div><a onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.file) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                            </div>

                                        )
                                    })
                                }


                                {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Unauthentic News Circulation</div>
                                    <div><a onClick={() => { window.open(Unauthentic) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>

                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Error Account Policy</div>
                                    <div><a onClick={() => { window.open(ErrorAccount) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Dormant Account Policy</div>
                                    <div><a onClick={() => { window.open(DormantAccount) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Code of Conduct Conflict of Interest</div>
                                    <div><a onClick={() => { window.open(CodeConduct) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>PMLA Policy 1.8</div>
                                    <div><a onClick={() => { window.open(PMLAPolicy) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Pre Funded Instrument Policy</div>
                                    <div><a onClick={() => { window.open(PreFunded) }} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div> */}


                            </div>



                        </div>




                    </div>


                </div>
            </section>
        </div>
    );
}
export default CEBPLPoliciesMain;