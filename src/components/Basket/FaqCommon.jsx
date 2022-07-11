import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion'

function FaqCommon() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    /** Get FAQ List */
    function getData() {
        var myHeaders = new Headers();
        myHeaders.append("authorization", " Basic d09tdkVOeXJSZElaMW9oOXNpVE86eA==");
        myHeaders.append("Cookie", "_x_w=20");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch('https://choicebroking.freshdesk.com/api/v2/solutions/folders/22000178107/articles', requestOptions)
            .then(response => {
                return response.json();
            })
            .then(users => {
                setData(prevUsers => ([...prevUsers, ...users].filter((ele, i) => i < 5)));
            });
    }

    return (
        <>
            <section className="basket-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-sec text-center">
                                <h3 className="title-first">FAQs</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* <div className="accordion-container" id="accordionExample">
                                {
                                    data.map((res, i) => {
                                        return (

                                            <div className="ac accordion-item" key={i} onClick={() => activeAccordion(false)}>
                                                <button className="ac-q acc" data-bs-toggle="collapse" data-bs-target={"#collapseone" + res.id} aria-expanded="true" aria-controls={"collapseOne" + res.id} >
                                                    {res.title}
                                                </button>
                                                <div className={"ac-a accordion-collapse collapse" + ((activeAcc && i == -1) ? "show" : "")} id={"collapseone" + res.id} data-bs-parent="#accordionExample">
                                                    <div><p>{res.description_text}</p></div>
                                                </div>
                                            </div>


                                        )
                                    })
                                }
                            </div> */}

                            <Accordion defaultActiveKey="0" class="accordion" id="accordionExample">
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
                                                            <Accordion.Body>{res.description_text}</Accordion.Body>
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
                        <a className="btn-bg btn-banner" href='https://choicebroking.freshdesk.com/support/solutions/folders/22000178107' target='_blank' >
                            Explore FAQ's
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FaqCommon;


