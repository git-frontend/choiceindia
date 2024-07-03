import React from 'react'

import { Accordion } from "react-bootstrap";
function CommonFaq({data}) {
  return (
    <>
    <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">FAQ's</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className="open-demat-faqs-accordion">
                                {data.map((response, index) => (
                                    <Accordion.Item eventKey={response.eventKey} key={index} className="faq-item">
                                        <Accordion.Header as="h3" className="faq-header">{response.header}</Accordion.Header>
                                        <Accordion.Body className="open-demat-faq-body" dangerouslySetInnerHTML={{ __html: response.body }} />
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default CommonFaq