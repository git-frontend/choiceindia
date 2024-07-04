import React from 'react'

function AvailbleOn({data}) {
  return (
    <>
       <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="availablewrap ">
                                <div className='row align-items-center'>
                                <div className="col-xl-4 col-md-6">
                                    <h2 className="wraptitle">We’re <br /> Available On</h2>
                                </div>
                                <div className="col-xl-8 col-md-6">
                                    <div className="iconwrap">
                                    {
                                        data.map((response, index) =>{
                                            return(
                                        <a href={response.availbleLink} target="_blank" key={index}>
                                            <div className="icon">
                                                <img src={response.availbleIcon} alt="Choice FinX Trading platform" width={"45"} height={"46"} className="img-fluid " />
                                                <p>{response.availbleHead}</p>
                                            </div>
                                        </a>
                                    )
                                        })
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
    </>
  )
}

export default AvailbleOn