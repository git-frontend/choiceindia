import React,{useState,useEffect} from "react";
import InvestorPresentationService from "../../Services/InvestorPresentationService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from  '@fortawesome/free-solid-svg-icons';
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
function InvestorPresentationMenu() {
    const [data, setData] = useState();

    const [trigger, setTrigger] = useState(false);

    function loadInvestorPresentationpdf() {
        InvestorPresentationService.InvestorPresentation().then(
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
            loadInvestorPresentationpdf()

        }

    }, [trigger])
    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Voting Results</h2>
                            <Navbar />
                        </div>
                    </div>
                    <div className="row code-mainwrapper cgmainwrap">
                        <div className="col-md-12">

                        <div className="d-flex justify-content-between">
                                <h3 className="head">Date of the General Meeting</h3>
                                <h3 className="head">Voting Result of the General Meeting</h3>
                                <h3 className="head"></h3>
                                </div>
                                <div className="subtext">
                                   {
                                    (data||[]).map((res)=>{
                                        return(
                                            <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                            <div>{res.month}</div>
                                            <div>{res.title}</div>
                                            <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open("https://cmsapi.choiceindia.com/assets/"+res.view)}} className="cursor-pointer"/></div>
                                            </div>

                                        )
                                    })
                                   }

                                {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>September 30, 2020 </div>
                                   <div>Voting Result</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>

                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>September 27, 2019 </div>
                                   <div>Voting Result</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div>
                                   <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>September 27, 2018</div>
                                   <div>Voting Result</div>
                                   <div><FontAwesomeIcon icon={faEye} className="cursor-pointer"/></div>
                                   </div> */}
                                 
                                  
                                </div>
                           
                           

                        </div>
                       
                       
                       
                      
                    </div>
                  

                </div>
            </section>
        </div>
    );
}
export default InvestorPresentationMenu;