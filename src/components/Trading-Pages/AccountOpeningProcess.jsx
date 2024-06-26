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
                    <h2 className="sect-title">Commodity Account Opening Online Process</h2>
                    <div className="row">
                        {
                            data.map((response, index) =>{
                                return(
                                    <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4" key={index}>
                                        <div className="demat-steps">
                                            <div className="imgwrap width66">
                                                <LazyLoader src={response.processImg1} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={response.processAlt} />
                                                <LazyLoader src={response.processImg2} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step One"} />
                                                <LazyLoader src={response.processImg3} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step One"} />
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