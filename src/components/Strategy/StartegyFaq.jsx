import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';


/**
 * FAQ section
 * @returns FAQ Component
 */
const FaqAccordion = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();


    }, []);



    /**
     * Get FAQ List
     */
    function getData() {
        setTimeout(() => {
            var myHeaders = new Headers();
            myHeaders.append("authorization", " Basic Z0h2bnRuWjhCajhZeXQ3TjFYVA==");
            myHeaders.append("Cookie", "_x_w=20");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch('https://choicebroking.freshdesk.com/api/v2/solutions/folders/22000178039/articles', requestOptions)
                .then(response => {
                    return response.json();
                })
                .then(users => {
                    setData(prevUsers => ([...prevUsers, ...users].filter((ele, i) => i < 5)));

                });

        }, 1000);



    }
    return (
        <section className="basket-faqs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-sec text-left">
                            <h3 className="title-first">FAQs</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Accordion defaultActiveKey="0" className="accordion" id="accordionExample">
                            <div className="accordion-container">
                                {
                                    data.map((res, i) => {


                                        return (

                                            <Accordion.Item key={res.id} eventKey={i} className="ac accordion-item" >

                                                <Accordion.Header className="ac-q">
                                                    <button className="acc">

                                                        {res.title}

                                                    </button>
                                                </Accordion.Header>

                                                <div className='ac-a'>
                                                    <div >
                                                        <Accordion.Body dangerouslySetInnerHTML={{ __html: res.description }}></Accordion.Body>
                                                    </div>

                                                </div>
                                            </Accordion.Item>


                                        )
                                    })
                                }
                            </div>
                        </Accordion>
                    </div>
                    <div className="col-md-12 text-center">
                        <a className="btn-bg btn-banner" href='https://choicebroking.freshdesk.com/support/solutions/folders/22000178039' target='_blank' rel="noreferrer" >
                            Explore FAQ's
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqAccordion;
