import React, { useState, useEffect } from "react";
import newsService from "../../Services/NewsAnnounceService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Common-features/Navbar";
import utils from "../../Services/utils";

// import "../CodeConduct/code-conduct.scss";
import "./news-announcement.scss";
function NewsAnnouncement() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);


    function loadnewspdf() {
        newsService.NewsAnnounce().then(
            res => {
                if(res){
                    setData(res.data.data);
                    // console.log("check",res.data.data)
        
                }else{
                    setData([]);
        
                }
               
              }
            ).catch((error)=>{
                setData([]);
            }); 
    }

    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadnewspdf();
            
        }

    }, [trigger])

    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">News &amp; Announcements</h2>
                            <Navbar />
                        </div>
                    </div>

                    <div className=" quicklinkswrap mb-5 cgmainwrap code-mainwrapper">
                        <div className="col-md-12">


                            <div className="table-responsive">
                                <table className="table " id="complaints">
                                    <thead>
                                        <tr>
                                            <th className="pb-3" width="300">Date &amp; Time</th>
                                            <th className="w-50 pb-3">Headlines</th>
                                            <th className="pb-3 text-end">PDF</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            (data||[]).map((res, i) => {

                                                return(
                                                    <tr key={i}>
                                                    <td>{utils.formatDate(new Date(res.news_dates?res.news_dates:''),"dd-MM-yyyy")}</td>
        
                                                    <td className="w-50">{res.headlines?res.headlines:""}</td>
                                                    {
                                                    res.news_file?
                                                    <td className=" text-end"><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.news_file)}} className="cursor-pointer" /></td>:
                                                    <td className=" text-end"></td>
                                                }
                                                    
                                                </tr>

                                                )
                                            })
                                        }
                                      

                                        {/* <tr>
                                            <td> 24-08-2022</td>

                                            <td className="w-50">Notice Of 29Th Annual General Meeting Of The Company</td>
                                            <td className=" text-end"><FontAwesomeIcon icon={faEye} onClick={() => { window.open(pdf2) }} className="cursor-pointer" /></td>
                                        </tr>


                                        <tr>
                                            <td> 24-08-2022</td>
                                            <td className="w-50">Reg. 34 (1) Annual Report.</td>
                                            <td className=" text-end"><FontAwesomeIcon icon={faEye} onClick={() => { window.open(pdf3) }} className="cursor-pointer" /></td>
                                        </tr>


                                        <tr>
                                            <td> 23-08-2022</td>

                                            <td className="w-50">Shareholder Meeting / Postal Ballot-Scrutinizer''s Report</td>
                                            <td className=" text-end"><FontAwesomeIcon icon={faEye} onClick={() => { window.open(pdf4) }} className="cursor-pointer" /></td>
                                        </tr>

                                        <tr>
                                            <td> 23-08-2022</td>

                                            <td className="w-50">Disclosure of Voting results of Postal Ballot (Regulation 44(3) of SEBI (LODR) Regulations, 2015)</td>
                                            <td className=" text-end"><FontAwesomeIcon icon={faEye} className="cursor-pointer" /></td>
                                        </tr>

                                        <tr>
                                            <td> 22-08-2022</td>

                                            <td className="w-50">Shareholder Meeting / Postal Ballot-Scrutinizer''s Report</td>
                                            <td className=" text-end"><FontAwesomeIcon icon={faEye} onClick={() => { window.open(pdf6) }} className="cursor-pointer" /></td>
                                        </tr>

                                        <tr>
                                            <td>05-08-2022</td>

                                            <td className="w-50">Announcement under Regulation 30 (LODR)-Newspaper Publication</td>
                                            <td className=" text-end"><FontAwesomeIcon icon={faEye} onClick={() => { window.open(pdf7) }} className="cursor-pointer" /></td>
                                        </tr> */}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>




                </div>












            </section>
        </div>
    );
}
export default NewsAnnouncement;
