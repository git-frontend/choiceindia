import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import noDataimg from '../../assets/images/no-data.webp';

function FaqCommon() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    /** Get FAQ List */
    function getData() {
        var myHeaders = new Headers();
        myHeaders.append("authorization", " Basic WXp4cUZXZGJVdzlYOGVhMVBHejpY");
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

                            {
                                data.length?
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
                                                            <Accordion.Body>{res.description_text}</Accordion.Body>
                                                        </div>
                                                    </div>
                                                </Accordion.Item>
                                            )
                                        })
                                    }
                                </div>
                            </Accordion>:
                                    <div className="text-center">
                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                    </div>


                            }
                            


                    </div>
                    <div className="col-md-12 text-center">
                        <a  href='https://choicebroking.freshdesk.com/support/solutions/folders/22000178107' target='_blank' rel="noreferrer" >
                        <span className=" btn-bg btn-banner">Explore FAQ's</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FaqCommon;


