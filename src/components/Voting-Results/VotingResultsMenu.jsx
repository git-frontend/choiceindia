import React,{useState,useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import cmsService from "../../Services/cmsService";
import utils from "../../Services/utils";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function VotingResultsMenu() {

    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading,setisloading ] = useState(true);

    function loadVotingResultpdf() {
        cmsService.VotingResult().then(
            res => {
                if (res) {
                    setisloading(false);
                    setData(res.data.data);
            

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


    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadVotingResultpdf();


        }

    }, [trigger])

    return (
        <div>
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 menuwrap">
                            <h2 className="title">Voting Results</h2>
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
                                (data && data.length)? 
                                <div className="row code-mainwrapper cgmainwrap">
                                <div className="col-md-12">
        
                                <div className="d-flex justify-content-between">
                                        <h3 className="head">Date of the General Meeting</h3>
                                        <h3 className="head">Voting Result of the General Meeting</h3>
                                        <h3 className="head"></h3>
                                        </div>
                                    <div className="subtext">
                                        {
                                            (data || []).map((res, i) => {
                                                return (
                                                    <div className="border-bottom d-flex justify-content-between pb-3 pt-3" key={i}>
                                                        <div>{utils.formatDate(new Date(res.Data_of_General_meet), "dd-MM-yyyy")}</div>
                                                        <div>{res.Voting_Results_of_general_meet}</div>
                                                        {
                                                            res.Views?
                                                            <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/" + res.Views) }} className="cursor-pointer" /></div>:
                                                            ''
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
                            
                                    
                                
                                
                           
                           

                       
                  

                </div>
            </section>
        </div>
    );
}
export default VotingResultsMenu;
