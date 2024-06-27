import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';

function AccountOpeningProcess({data}) {
    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

  return (
    <>
        <section className="open-acnt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="get-started-sect">
                                <div className="headtext">
                                    <h3 className="mb-0" dangerouslySetInnerHTML={{ __html: data[0].title }}></h3>
                                </div>
                                <div className="text-right text-sm-center">
                                    <Link to={data[0].pageLink} ><span className="btn-bg btn-bg-dark "  onClick={() => { scrollToId('open-account-wrap') }}>Open Now</span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="sect-title" dangerouslySetInnerHTML={{ __html: data[0].subtitle }}></h2>
                    <div className="row">
                        {
                            data.map((response, index) =>{
                                return(
                                    <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4 steps-number-prnt" key={index}>
                                        <div className="demat-steps">
                                            <div className="num-wrap">
                                               <h4 className='steps-number'>{response.stepsNum}</h4>
                                            </div>
                                            <div className="info respspace">
                                                <h5>{response.processH}</h5>
                                                <p>{response.processT}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
    </>
  )
}

export default AccountOpeningProcess