import { useState, useEffect } from 'react';
// import SubBannerimage from '../../assets/images/intraday-charges/intraday-charges.webp';
import Button from 'react-bootstrap/Button';
import LazyLoader from "../Common-features/LazyLoader";
import { Link } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
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
                                    <div>
                                        <div className="infowrap">
                                            <p>A Nishant Patil</p>
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
                                    <div>
                                        <div className="infowrap">
                                            <p>B Nishant Patil</p>
                                            <p>X008593</p>
                                        </div>
                                        <div className="amtwrap">
                                            <p className="investmentamount">Total Investment Amount</p>
                                            <p className="amountrs">₹ 15,000</p>
                                        </div>
                                        <Button className="btn-bg btn-bg-dark investnowbtn" onClick={handleSecondButtonClick}><span>Submit</span></Button>
                                    </div>
                                )}
                                {showThirdDiv && (
                                    <div>
                                        Third Div
                                    </div>
                                )}
                            </div>


                        </div>
                        <div className="sticky-investnow">
                            <div className="stickywrap">
                                <div className="left">
                                    <p className="text">Total Investment Amount</p>
                                    <p className="num">₹ 15,000</p>
                                </div>
                                <div className="rightbtn">
                                    <Link to="/" className="btn-bg btn-bg-dark investnowbtn" onClick=""><span>Invest Now</span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>




        </div>

    );
}

export default Banneraf;
