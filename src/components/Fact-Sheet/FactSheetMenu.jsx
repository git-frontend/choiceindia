import React,{useState,useEffect} from "react";
import Navbar from '../Common-features/Navbar';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import cmsService from "../../Services/cmsService";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function FactSheetMenu() {
    const [data, setData] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isloading,setisloading ] = useState(true);

    function loadFactSheetpdf() {
        cmsService.Factsheet().then(
            res => {
                if (res) {
                    setisloading(false)
                    setData(res.data.data);


                } else {
                    setisloading(false)
                    setData([]);

                }

            }
        ).catch((error) => {
            setisloading(false)
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
            <section className="Investormenu page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 menuwrap">
                            <h2 className="title">Fact Sheet</h2>
                            <Navbar />
                        </div>
                    </div>



                                {
                                    isloading?
                                    <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                         </div>
                                </div>:
                                <div>
                                {
                                    data && data.length >0?
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
                    </div>: 
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
export default FactSheetMenu;