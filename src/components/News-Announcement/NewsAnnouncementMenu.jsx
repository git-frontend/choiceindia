import React, { useState, useEffect } from "react";
import cmsService from "../../Services/cmsService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Common-features/Navbar";
import utils from "../../Services/utils";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import noDataimg from '../../assets/images/no-data.webp';
import "./news-announcement.scss";
function NewsAnnouncement() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading,setisloading ] = useState(true);


    function loadnewspdf() {
        cmsService.NewsAnnounce().then(
            res => {
                if(res){
                    setisloading(false)
                    setData(res.data.data);
        
                }else{
                    setisloading(false)
                    setData([]);
        
                }
               
              }
            ).catch((error)=>{
                setisloading(false)
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
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 menuwrap">
                            <h2 className="title">News &amp; Announcements</h2>
                            <Navbar />
                        </div>
                    </div>

                    {
                        isloading ?
                        <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                         </div>
                                </div>
                                :
                                <div>
                    {
                        data && data.length === 0 ?
                        <div className="text-center">
                                    <div><img src={noDataimg} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> </div>
                                </div>:
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
                                              
        
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    }
                    </div>
                    }

                    

                    




                </div>












            </section>
        </div>
    );
}
export default NewsAnnouncement;
