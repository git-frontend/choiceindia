import { Form } from "react-bootstrap";
import './contact-template.scss';

function ContactTemplate() {

    return (
        <>
            <div className='contact-template-parent'>
                <section className="contact-template-banner-section">
                    <div className="contact-template-text">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="contact-template-image">
                        <p className="contact-template-img"></p>
                    </div>
                </section>
                <section className="contactdetail contactdetail-skeleton">
                    <div className="container">
                        <div className="row gap-5">
                            <div className="col-md-5">
                                <div className="">
                                    <div className="skeleton-child-img" ></div>
                                    {/* <img src={pin} alt="Loading" /> */}
                                    <p className="mt-3 maintitle skeleton-child">The Office </p>
                                    <p className="subtext skeleton-child">Choice Wealth Management Pvt. Ltd. <br />Choice House, Shree Shakambhari Corporate Park, <br />Plt No: -156-158, J.B. Nagar, Andheri (East), <br />Mumbai - 400 099</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="">
                                    <div className="skeleton-child-img" ></div>
                                    {/* <img src={clock} alt="Loading" /> */}
                                    <p className="mt-3 maintitle skeleton-child">Business Hours</p>
                                    <p className="subtext skeleton-child">Monday-Friday: 8:30 am - 7:00 pm <br />
                                        Saturday: 10:00 am - 4:00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-10 "  >
                        <div className="d-flex justify-content-between detailwrap">

                            <div className='d-flex flex-column flex-column-left'>
                                <div>
                                    <p className="maintitle skeleton-child">120+ branches and partner offices</p>
                                    <p className="subhead skeleton-child">Locate and office in your city</p>
                                </div>
                                <div className='cust-dropdown'>

                                    <Form.Select variant="Info" id="dropdown-basic" className="skeleton-child" >
                                        <option selected>Select Your City</option>
                                        <option >Delhi</option>
                                        <option >Bangalore</option>
                                        <option >Hyderabad</option>

                                    </Form.Select>

                                </div>
                            </div>
                            <div className="text-right address">
                                <p className="maintitle skeleton-child">Bhopal, Madhya Pradesh</p>
                                <p className="subtext mb-0 skeleton-child">(+91) - 8080-80-8875</p>
                                <p className="subtext skeleton-child">support@choiceindia.com</p>
                                <p className="subtext skeleton-child">Behari Complex, R-2, Ram Gopal Maheshwari Marg,<br />
                                    Opp Harsh Express,Near Bank, Zone-I,Maharana <br />Pratap Nagar, Bhopal, Madhya Pradesh 462011
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='container-fluid mt-10 skeleton-child-map'>
                        <div className='row'>
                            <div className='map'>
                                <div style={{ width: "100%" }}></div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactTemplate;