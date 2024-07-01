import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import cmsService from "../../Services/cmsService";
import download from '../../assets/images/file-download/export.webp';
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import "../FilesDownload/Filedownload.scss";
function CommonCMS({data, methodName} ) {
    console.log(data,"jdgf",methodName)
    const [datalist, setDatalist] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);
    let values;
    let AllFilesValue = {};
    function loadFileDownload() {
        cmsService[methodName]()
            .then(res => {
                if (res && res.data && res.data.data) {
                    if (methodName === "documentList") {
                        const values = res.data.data;
                        const AllFilesValue = {};

                        values.forEach(ele => {
                            if (!AllFilesValue[ele.title]) {
                                AllFilesValue[ele.title] = [];
                            }
                            AllFilesValue[ele.title].push(ele);
                        });
                        setDatalist(AllFilesValue);
                    } else if (methodName === "CebplPolicy") {
                        setDatalist({ "CEBPL Policies": res.data.data });
                    }
                } else {
                    setDatalist({});
                }
                setisloading(false);
            })
            .catch((error) => {
                setDatalist({});
                setisloading(false);
            });
    }

    useEffect(() => {
            loadFileDownload()
    }, [])

    return (
        <>
            <section className="filedownloadfaq filedownloadfaq-CMS">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center mt-5 mb-5 title-first'>{data[0].title}</h1>
                            {
                                data[0].banneText ? <p className="text">{data[0].banneText}</p>:""
                            }
                            
                        </div>
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
                                                            <Accordion.Item eventKey={i + ""} key={i} className='faq-item' >
                                                                <Accordion.Header> <h4 className='faq-header'>{key}</h4></Accordion.Header>
                                                                <Accordion.Body className='faq-body'>
                                                                    <div className="listing">
                                                                        <ul>
                                                                            {
                                                                                datalist[key]?.map((res, index) => {
                                                                                    return (

                                                                                        <li key={index} className="border-bottom pb-3 pt-3">
                                                                                            <div className="text">{res.sub_title || res.title }</div>
                                                                                            {
                                                                                                (res.pdf || res.link || res.file) ?
                                                                                                    <div className="cursor-pointer" onClick={() => { res.pdf || res.file ? window.open(`https://cmsapi.choiceindia.com/assets/${res.pdf || res.file}`) : window.open(res.link ||res.file ) }} ><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span className="downloadtext">Download</span></div> :
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
        </>

    )
}
export default CommonCMS;
