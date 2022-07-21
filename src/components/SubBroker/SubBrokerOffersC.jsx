import React from 'react';
import ContestModal from './ContestModal';

function SubBrokerOffers(){
    return (
        <div>
            <section className="franchise-offers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">Sub Broker Franchise Offer</h2>
                            <p className="sml-para-dv">See the per account incentive offer in the below table</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="offers-table-sec">
                                <div className="table-responsive wow fadeInUp">
                                    <table className="table table-hover table-striped ">
                                        <thead>
                                            <tr>
                                                <th width="25%"></th>
                                                <th width="20%">Account with <span>minimum Rs. 1,000  </span> <span>Investment & 2 transaction in EQ +</span> 1 SIP in MF Minimum Rs. 500</th>
                                                <th>Account with <span>minimum Rs. 5,000  </span><span>Investment & 2 transaction in EQ + </span>1 SIP in MF Minimum Rs. 500</th>
                                                <th>Account with <span>minimum Rs. 25,000  </span><span>Investment & 2 transaction in EQ + </span>1 SIP in MF Minimum Rs. 500</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="charges-heads">Equity Only</td>
                                                <td>200</td>
                                                <td>400</td>
                                                <td>700</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">MF only</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">EQ + MF</td>
                                                <td>400</td>
                                                <td>700</td>
                                                <td>1100</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>                                
                            </div>
                            <div className='d-flex justify-content-end'>
                                <ContestModal />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            

        </div>

    );
}

export default SubBrokerOffers;