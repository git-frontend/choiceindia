import React, { useState, useEffect } from "react";
import newsService from "../../Services/NewsAnnounceService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Investors-info/Navbar';
import utils from "../../Services/utils";
import pdf1 from '../../assets/pdf/News-annoucement/3a8620b9-3cd6-446e-8c46-89a83ac2f955.pdf';
import pdf2 from '../../assets/pdf/News-annoucement/44681b05-b3f4-4137-aa9a-5480400feeaf.pdf';
import pdf3 from '../../assets/pdf/News-annoucement/cabdfbcd-1ea0-4001-96be-adb8a58a9f33.pdf';
import pdf4 from '../../assets/pdf/News-annoucement/ff7e6354-13fe-4db6-9b30-e58cc6998fc7.pdf';

import pdf6 from '../../assets/pdf/News-annoucement/9e9780e1-3ca5-4069-9821-aefa413e27fb.pdf';
import pdf7 from '../../assets/pdf/News-annoucement/a123c8cd-de36-471b-baeb-cb339fce0c48.pdf';
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
                    console.log("check",res.data.data)
        
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

                    <div className="row quicklinkswrap mb-5 cgmainwrap code-mainwrapper">
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
                                                    <tr>
                                                    <td>{utils.formatDate(new Date(res.news_dates),"dd-MM-yyyy")}</td>
        
                                                    <td className="w-50">{res.headlines}</td>
                                                    <td className=" text-end"><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.news_file)}} className="cursor-pointer" /></td>
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