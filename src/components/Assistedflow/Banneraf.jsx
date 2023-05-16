import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LazyLoader from "../Common-features/LazyLoader";
import { Link } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Redirect from '../../assets/images/aof/redirect-arrow.gif';
import ThumbUp from '../../assets/images/aof/thumb-up.png';

function Banneraf() {

    const [showFirstButton, setShowFirstButton] = useState(true);
    const [showSecondDiv, setShowSecondDiv] = useState(false);
    const [showThirdDiv, setShowThirdDiv] = useState(false);
    const [name, setName] = useState('hideform');
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName('visibleform');
            } else {
                setName('hideform');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);

    const handleFirstButtonClick = () => {
        setShowFirstButton(false);
        setShowSecondDiv(true);
    };

    const handleSecondButtonClick = () => {
        setShowSecondDiv(false);
        setShowThirdDiv(true);
    };
    return (
        <div>
            <section className='afsec'>
                <div className="container">
                    <div className="row">
                        <h1 className="title-secnd pt-5">
                            Investments for you!
                        </h1>
                        <p className='subhead'>Funds for Children's Education</p>
                        <p className="profile">X008593 | Nishant Patil  </p>
                    </div>
                    <div className="row">

                        <div className="left-sec">
                            <div className="table-sec">
                                <div className="rowwrap">
                                    <div className="name">
                                        DSP Tax Saver Fund Growth
                                    </div>
                                    <div className="textwrap">
                                        <div className="numberwrap">
                                            <div className="number">64.4</div>
                                            <p className="percent">3 yrs Returns %</p>
                                        </div>
                                        <div className="amount">
                                            <div className="rupee">₹ 4,000</div>
                                            <p className="text">Amount</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rowwrap">
                                    <div className="name">
                                        DSP Tax Saver Fund Growth
                                    </div>
                                    <div className="textwrap">
                                        <div className="numberwrap">
                                            <div className="number">04.4</div>
                                            <p className="percent">3 yrs Returns %</p>
                                        </div>
                                        <div className="amount">
                                            <div className="rupee">₹ 4,000</div>
                                            <p className="text">Amount</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rowwrap">
                                    <div className="name">
                                        Mirae asset tax saver fund growth
                                    </div>
                                    <div className="textwrap">
                                        <div className="numberwrap">
                                            <div className="number">04.4</div>
                                            <p className="percent">3 yrs Returns %</p>
                                        </div>
                                        <div className="amount">
                                            <div className="rupee">₹ 4,000</div>
                                            <p className="text">Amount</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rowwrap">
                                    <div className="name">
                                        DSP Tax Saver Fund Growth
                                    </div>
                                    <div className="textwrap">
                                        <div className="numberwrap">
                                            <div className="number">04.4</div>
                                            <p className="percent">3 yrs Returns %</p>
                                        </div>
                                        <div className="amount">
                                            <div className="rupee">₹ 4,000</div>
                                            <p className="text">Amount</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rowwrap">
                                    <div className="name">
                                        Mirae asset tax saver fund growth
                                    </div>
                                    <div className="textwrap">
                                        <div className="numberwrap">
                                            <div className="number">04.4</div>
                                            <p className="percent">3 yrs Returns %</p>
                                        </div>
                                        <div className="amount">
                                            <div className="rupee">₹ 4,000</div>
                                            <p className="text">Amount</p>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                        <div className="right-sec">
                            <div className="formwrapper">
                                {showFirstButton && (
                                    <div className='new-wrapp'>
                                        <div className="infowrap">
                                            <p>Nishant Patil</p>
                                            <p>X008593</p>
                                        </div>
                                        <div className="amtwrap">
                                            <p className="investmentamount">Total Investment Amount</p>
                                            <p className="amountrs">₹ 15,000</p>
                                        </div>
                                        <Button className="btn-bg btn-bg-dark investnowbtn" onClick={handleFirstButtonClick}><span>Invest Now</span></Button>
                                    </div>
                                )}
                                {showSecondDiv && (
                                    <div className="otpsec">
                                        <div className="resdiv">
                                            <div className="otpmodal">
                                                <p className="otptext">Enter One Time<br/> Authentication Code</p>
                                                <p className="subtext">Code sent to your registered mobile number +91 87******68</p>
                                            </div>
                                            {/* <div class="otp-wrapper" >
                                            <input type="text" class="otp-input" maxlength="1" / >
                                            <input type="text" class="otp-input"  maxlength="1"/ >
                                            <input type="text" class="otp-input" maxlength="1"/ >
                                            <input type="text" class="otp-input" maxlength="1"/ >
                                            <input type="text" class="otp-input" maxlength="1"/ >
                                            <input type="text"  class="otp-input" maxlength="1"/ >
                                        </div> */}

                                            <div id="divOuter">
                                                <div id="divInner">
                                                    <input formcontrolname="otpValue" id="partitioned" maxlength="6" type="text" class="" />
                                                    <i class="bar"></i>
                                                </div>
                                              
                                            </div>
                                            {/* <div class="otp-input-wrapper">
  <input type="text" maxlength="6" pattern="[0-9]*" autocomplete="off"/>
  <svg viewBox="0 0 240 1" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="0" x2="240" y2="0" stroke="#fff" stroke-width="2" stroke-dasharray="22,22,22,22,22,22" />
  </svg>
</div> */}
                                            <p className="warning mb-4">Resend OTP in 30 sec</p>
                                            {/* <div className="mb-4"><a href="#" className=" resend">Resend OTP</a></div> */}
                                            </div>
                                            <Button className="btn-bg btn-bg-dark submitbtn disablebtn" onClick={handleSecondButtonClick}><span>Submit</span></Button>
                                      
                                        </div>
                                )}
                                        {showThirdDiv && (
                                            <div className="redirectwrap">
                                                <LazyLoader src={Redirect} alt={""} className={"img-fluid redirectimg"} width={"74"} height={"74"} />
                                                <p className="redirecttext">Redirecting to Payment Page</p>
                                            </div>
                                        )}
                                    </div>

                            


                        </div>
                            {/* <div className="sticky-investnow">
                                <div className="stickywrap">
                                    <div className="left">
                                        <p className="text">Total Investment Amount</p>
                                        <p className="num">₹ 15,000</p>
                                    </div>
                                    <div className="rightbtn">
                                        <Link to="/" className="btn-bg btn-bg-dark investnowbtn" onClick=""><span>Invest Now</span> </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="successful">
                            <LazyLoader src={ThumbUp} alt={""} className={"img-fluid redirectimg"} width={"74"} height={"74"} />
                            <p className="sucesstext">Your order is successful!</p>
                            <div className="rightbtn">
                                <Link to="/" className="btn-bg btn-bg-dark awesomebtn" onClick=""><span>Awesome!</span> </Link>
                            </div>
                        </div>

                        <div className="order-register">

                            <p className="sucesstext">Order Registered!</p>
                            <p className="subtext">Copy &amp; Share link with client to complete the payment.</p>
                            <div className="rightbtn">
                                <Link to="/" className="btn-bg btn-bg-dark copybtn" onClick="" ><span>Copy Link</span> </Link>
                            </div>
                        </div>
                    </div>

            </section>




        </div>

    );
}

export default Banneraf;
