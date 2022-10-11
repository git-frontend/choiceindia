import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import InvestorCharterService from "../../Services/InvestorCharterService";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import "../CEBPLPolicies/CEBPL-Policies.scss";
import noDataimg from '../../assets/images/no-data.webp';

function InvestorCharterMain() {
    const [data2, setData2] = useState({});
    const [lists, setlists] = useState(['stock_broker', 'research_analyst', 'portfolio_managers', 'investment_advisors', 'depository_participant','capital_advisor'])
    const [trigger, setTrigger] = useState(false);
    const [isloading,setisloading ] = useState(true);


    function loadcebplStock2() {
        for (let i = 0; i < lists.length; i++) {

            InvestorCharterService.InvestorCharter(lists[i]).then(
                res => {
                    if (res && res.data && res.data.data) {
                        setisloading(false)
                        // listsfile = data2
                        setData2((data2)=>({...data2,[lists[i]]:res.data.data}))
                        // listsfile[lists[i]] = (res.data.data);
                        // setData2(listsfile)
                    } else {  
                        setData2([]);
                        setisloading(false)

                    }
                   
                }
            ).catch((error) => {
                setData2([]);
                setisloading(false)
            });
        }

    }
    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {        
            loadcebplStock2()
        }

    }, [trigger])


    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Investor Charter</h2>

                        </div>
                    </div>
                    {
                        isloading ?
                        <div className="text-center">
                                    <div>
                                        {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> */}
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
                             (data2 ? Object.keys(data2) : '').map((title) => {
                                return (
                                    <div className="row quicklinkswrap">
                                        <div className="col-md-12">
                                            <h3 className="head">{title}</h3>

                                            <div className="subtext">

                                                {
                                                    // (data2? (data2 && data2[title]) : '').map
                                                     data2[title].map((res) => {
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

                    
                    



                    {/* <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Research Analyst</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><a onClick={()=>{window.open(Research_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Research_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Portfolio Managers</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><a onClick={()=>{window.open(Portfolio_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Portfolio_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Investment Advisors</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><a onClick={()=>{window.open(Investment_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Investment_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row quicklinkswrap">
                        <div className="col-md-12">
                            <h3 className="head">Depository Participant</h3>
                            <div className="subtext">
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure A </div>
                                    <div><a onClick={()=>{window.open(Depository_A)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                                <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                    <div>Annexure B</div>
                                    <div><a onClick={()=>{window.open(Depository_B)}} target="_blank"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>
            </section>
        </div>
    );
}
export default InvestorCharterMain;