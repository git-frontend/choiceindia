
import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import fileDownloadService from "../../Services/FileDownloadService";
import download from '../../assets/images/file-download/export.webp';
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function FileDownloadFaq() {
    const [datalist, setDatalist] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [isloading, setisloading] = useState(true);
    let values;
    let AllFilesValue = {};

    function loadFileDownload() {
        fileDownloadService.MarginDay().
            then(
                res => {
                    if (res && res.data && res.data.response) {
                        setisloading(false)
                        values = res.data.response;
                        values.forEach(ele => {

                            if (!AllFilesValue[ele.download_title]) {
                                AllFilesValue[ele.download_title] = [];
                                AllFilesValue[ele.download_title].push(ele)
                            } else {
                                AllFilesValue[ele.download_title].push(ele)

                            }
                        })
                        setDatalist(AllFilesValue);
                    } else {
                        setisloading(false)
                        setDatalist([]);

                    }

                }
            ).catch((error) => {
                setisloading(false)
                setDatalist([]);
            });
    }

    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadFileDownload()
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
                                        {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> */}
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
                                                                                            <div className="text">{res.download_subtitle}</div>
                                                                                            {
                                                                                                res.download_pdf ?
                                                                                                    <div className="cursor-pointer"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span onClick={() => { window.open(res.download_pdf) }} className="downloadtext">Download</span></div> :
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

                                                {/* {

                                    Object.entries(AllFilesValue)?.map((key, value) => {

                                        console.log("keys",key);


                                        return (
                                            <Accordion.Item eventKey="0" className='faq-item' >
                                                <Accordion.Header> <h4 className='faq-header'>{key}</h4></Accordion.Header>
                                                <Accordion.Body className='faq-body'>
                                                    <div className="listing">
                                                        <ul>
                                                            {
                                                                (value || [])?.map((res) => {
                                                                    return (

                                                                        <li>
                                                                            <div className="text">{res.download_subtitle}</div>
                                                                            <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span onClick={() => { window.open(res.download_pdf) }} className="downloadtext">Download</span></div>
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


                                } */}



                                                {/* 
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header onClick={()=>{loadFileDownload();setData('Choice Broking')}}> <h4 className='faq-header'>Choice Broking</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                        <div className="listing">
                                            <ul>
                                                {
                                                    datalist1?.map((res, i) => {
                                                        return (
                                                            <li>
                                                                <div className="text">{res.download_subtitle}</div>
                                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span onClick={() => { window.open(res.download_pdf) }} className="downloadtext">Download</span></div>
                                                            </li>
                                                        )

                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" className='faq-item' >
                                    <Accordion.Header> <h4 className='faq-header'>Choice Group</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                        <div className="listing">
                                            <ul>
                                                {
                                                    datalist2?.map((res, i) => {
                                                        return (
                                                            <li>
                                                                <div className="text">{res.download_subtitle}</div>
                                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span onClick={() => { window.open(res.download_pdf) }} className="downloadtext">Download</span></div>
                                                            </li>
                                                        )

                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header' >Choice Peers</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                        <div className="listing">
                                            <ul>
                                                {
                                                    datalist3?.map((res, i) => {
                                                        return (
                                                            <li>
                                                                <div className="text">{res.download_subtitle}</div>
                                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span onClick={() => { window.open(res.download_pdf) }} className="downloadtext">Download</span></div>
                                                            </li>
                                                        )

                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Margin Day Opening</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                        <div className="listing">
                                            <ul>
                                                {
                                                    datalist4?.map((res, i) => {
                                                        return (
                                                            <li>
                                                                <div className="text">{res.download_subtitle}</div>
                                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span onClick={() => { window.open(res.download_pdf) }} className="downloadtext">Download</span></div>
                                                            </li>
                                                        )

                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="5" className='faq-item' >
                                    <Accordion.Header> <h4 className='faq-header' >Software</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                        <div className="listing">
                                            <ul>
                                                {
                                                    datalist5?.map((res, i) => {
                                                        return (
                                                            <li>
                                                                <div className="text">{res.download_subtitle}</div>
                                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""} /> <span onClick={() => { window.open(res.download_pdf) }} className="downloadtext">Download</span></div>
                                                            </li>
                                                        )

                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item> */}




                                                {/* <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>choice Peers</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text"> Choice Peers International-Brochure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf11)}} className="downloadtext">Download</span></div>
                                            </li>
                                           
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Choice Group</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text">  Choice Group - Brochure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf12)}} className="downloadtext">Download</span></div>
                                            </li>
                                            
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Choice Broking</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text">Choice Broking - Brochure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf13)}} className="downloadtext">Download</span></div>
                                            </li>
                                           
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Margin Day Opening</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                           
                                                    <li>
                                                    <div className="text"></div>
                                                    <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf14)}} className="downloadtext">Download</span></div>
                                                </li>

                                           
                                            <li>
                                                <div className="text">Approved Intra day Scrips List in Cash Market</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf15)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">FNO</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf16)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Approved 2x Delivery Scrips</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf17)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">MCX</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf18)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> NCDEX</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf19)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  CDS</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf20)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Span File</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf21)}} className="downloadtext">Download</span></div>
                                            </li>
                     
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Account Opening Form</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text"> Modification Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf22)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Account Closure</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf23)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Pledge Request Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf24)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  CRF Form in Vernacular Languages Commodity</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf25)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Common Segment Activation</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf26)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Dematerialisation Request Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf27)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> CRF Form in Vernacular Languages Equity</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf28)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Account opening form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf29)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Closure form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf30)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Exchange Circular_20210701-30</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf31)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">   Nomination Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf32)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">Nominee Addition Form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf33)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> POA</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf34)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  Segment Activation form</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf35)}} className="downloadtext">Download</span></div>
                                            </li>
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>Software</h4></Accordion.Header>
                                    <Accordion.Body className='faq-body'>
                                       <div className="listing">
                                        <ul>
                                            <li>
                                                <div className="text"> Odin Utility</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf36)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> AtuoPatchupdate</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf37)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> JIFFY User Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf38)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> JIFFY Dealer Patch</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf39)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> Jiffy Diet Patch</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf40)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">JIFFY Dealer Terminal</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf41)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text"> MGR-1 REG</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/> <span onClick={()=>{window.open(pdf42)}} className="downloadtext">Download</span></div>
                                            </li>
                                            <li>
                                                <div className="text">  MGR-2 REG</div>
                                                <div className="download"><img src={download} className={"img-fluid"} alt={"Loading"} width={""} height={""}/><span onClick={()=>{window.open(pdf43)}} className="downloadtext">Download</span></div>
                                            </li>
                                      
                                        </ul>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item> */}
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

export default FileDownloadFaq;



