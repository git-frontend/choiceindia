
import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import cmsService from "../../Services/cmsService";
import download from '../../assets/images/file-download/export.webp';
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function OfferDocumentMenu() {
    const [datalist, setDatalist] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);
    let values;
    let AllFilesValue = {};

   

    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            //loadFileDownload()
            cmsService.loadCmsData(cmsService.documentList,setisloading,setDatalist,"title");
        }

    }, [trigger])

    return (
        <div>

            <section className="filedownloadfaq">
                <div className="container">

                    <div className="row">
                        {
                            isloading ?
                                <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                         </div>
                                </div>
                                :

                                <div className="col-md-12">
                                    {
                                        datalist ?
                                            <Accordion defaultActiveKey="0" flush className='faqs-accordion'>
                                                {

                                                    Object.keys(datalist)?.map((key, i) => {
                                                        return (
                                                            <Accordion.Item eventKey={i+""} key={i} className='faq-item' >
                                                                <Accordion.Header> <h4 className='faq-header'>{key}</h4></Accordion.Header>
                                                                <Accordion.Body className='faq-body'>
                                                                    <div className="listing">
                                                                        <ul>
                                                                            {
                                                                                datalist[key]?.map((res, index) => {
                                                                                    return (

                                                                                        <li key={index}>
                                                                                            <div className="text">{res.sub_title}</div>
                                                                                            {
                                                                                                (res.pdf|| res.link) ?
                                                                                                    <div className="cursor-pointer" onClick={() => { res.pdf ? window.open(`https://cmsapi.choiceindia.com/assets/${res.pdf}`) : window.open(res.link)}} ><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span className="downloadtext">Download</span></div> :
                                                                                                    <div></div>
                                                                                            }

                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>

                                                        )
                                                    })


                                                }

                                     
                                            </Accordion> :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                    }

                                </div>
                        }

                    </div>
                </div>
            </section>
        </div>

    )
}

export default OfferDocumentMenu;



