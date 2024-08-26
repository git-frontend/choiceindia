import React from 'react'
import { Accordion } from "react-bootstrap";

const Faqs = ({title,data}) => {
  return (
    <div className="mt-5">

    <section className="Dematfaq">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title-first text-center pb-4">{title}</h2>
                            </div>
    
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Accordion defaultActiveKey={0} flush className='open-demat-faqs-accordion'>
                                    {data.map((obj,idx)=>(
                                          <Accordion.Item eventKey={idx} className='faq-item' key={idx}>
                                          <Accordion.Header as="h3" className='faq-header'>{obj.question}</Accordion.Header>
                                          <Accordion.Body className='open-demat-faq-body' dangerouslySetInnerHTML={{__html:obj.answer}}>
                                          </Accordion.Body>
                                      </Accordion.Item>
                                    ))}
                                        </Accordion>
                                    </div>
                        </div>
                    </div>
                </section>
            </div>
  )
}

export default Faqs;