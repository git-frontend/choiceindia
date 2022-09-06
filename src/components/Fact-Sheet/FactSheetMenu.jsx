import React,{useState,useEffect} from "react";
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import FactSheetService from "../../Services/FactSheetService";
function FactSheetMenu() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);

    function loadFactSheetpdf() {
        FactSheetService.Factsheet().then(
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
            loadFactSheetpdf()

        }

    }, [trigger])
    return (
        <div>
            <section className="Investormenu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Fact Sheet</h2>
                            <Navbar />
                        </div>
                    </div>



                    {/* <div className="col-md-5 ">
                                <h3 className="head">Name </h3>
                                <h3 className="head">Choice International Limitied</h3>
                                
                                </div> */}
                    <div className=" pl-3 pr-3 cgmainwrap code-mainwrapper subtext">
                        <div className="row border-bottom">
                            <div className=" col-md-5 col-5 "><h3 className="head">Name </h3></div>
                            <div className="col-md-7 col-7 word-wrap"> <h3 className="head">Choice International Limitied</h3></div>
                        </div>
                        {
                            (data||[]).map((res,i)=>{
                                return(
                                    <div className="row border-bottom " key={i}>
                            <div className=" col-md-5 col-5 pb-3 pt-3">{res.name}</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">{res.choice_international_limited}</div>
                        </div>

                                )
                            })
                        }
                        {/* <div className="row border-bottom ">
                            <div className=" col-md-5 col-5 pb-3 pt-3">CIN </div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">L67190MH1993PLC071117</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5 col-5 pb-3 pt-3">Business Description</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">Financial Services</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5 col-5 pb-3 pt-3">Established</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">March 12, 1993</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5 col-5 pb-3 pt-3">Registered Office</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">Choice International Limited, Sunil Patodia Tower,J B Nagar, Andheri (East),<br />
                                Mumbai 400099, Maharashtra<br />
                                Tel.No. +91-022-67079999<br />
                                Fax:+91-022-67079959<br />
                                Email Id: <a href="mailto:info@choiceindia.com">info@choiceindia.com</a></div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">Managing Director</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">Mr. Kamal Poddar</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">Compliance Officer</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">Ms Karishma Shah</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">Listings</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">BSE &amp; NSE</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">BSE Code</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">531358</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">Script ID</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">CHOICEIN</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">Demat</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">NSDL, CSDL</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">ISIN</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">INE102B01014</div>
                        </div>
                        <div className="row border-bottom ">
                            <div className=" col-md-5  col-5 pb-3 pt-3">Registrar &amp; Share Transfer Agent ( RTA )</div>
                            <div className="col-md-7 col-7 pb-3 pt-3 word-wrap">Name : Link Intime India Pvt Ltd<br />
                                Add : C-101, 247 Park, L.B.S. Marg, Vikhroli (West), Mumbai -400 083<br />
                                TEL NO : 022 49186270<br />
                                EMAIL ID : <a href="mailto:rnt.helpdesk@linkintime.co.in">rnt.helpdesk@linkintime.co.in</a><br />
                                WEBSITE : <a href="https://www.linkintime.co.in/">www.linkintime.co.in</a></div>
                        </div> */}
                    </div>

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Business Description </div>
                                   <div>Financial Services</div>
                                   
                                   </div> */}
                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Established</div>
                                   <div>March 12, 1993</div>
                                   
                                   </div> */}
                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Registered Office</div>
                                   <div>Choice International Limited, Sunil Patodia Tower,J B Nagar, Andheri (East),<br/>
Mumbai 400099, Maharashtra<br/>
Tel.No. +91-022-67079999<br/>
Fax:+91-022-67079959<br/>
Email Id: <a href="mailto:info@choiceindia.com">info@choiceindia.com</a></div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Managing Director</div>
                                   <div>Mr. Kamal Poddar</div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Compliance Officer</div>
                                   <div>Ms Karishma Shah</div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Listings</div>
                                   <div>BSE & NSE</div>
                                   
                                   </div> */}
                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>BSE Code</div>
                                   <div>531358</div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Script ID</div>
                                   <div>CHOICEIN</div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Demat</div>
                                   <div>NSDL, CSDL</div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Demat</div>
                                   <div>NSDL, CSDL</div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>ISIN</div>
                                   <div>INE102B01014</div>
                                   
                                   </div> */}

                    {/* <div className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                   <div>Registrar & Share Transfer Agent ( RTA )</div>
                                   <div>Name : Link Intime India Pvt Ltd<br/>
Add : C-101, 247 Park, L.B.S. Marg, Vikhroli (West), Mumbai -400 083<br/>
TEL NO : 022 49186270<br/>
EMAIL ID : <a href="mailto:rnt.helpdesk@linkintime.co.in">rnt.helpdesk@linkintime.co.in</a><br/>
WEBSITE : <a href="https://www.linkintime.co.in/">www.linkintime.co.in</a></div>
                                   
                                   </div> */}


                </div>












            </section>
        </div>
    );
}
export default FactSheetMenu;