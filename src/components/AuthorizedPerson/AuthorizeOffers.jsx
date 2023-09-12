import React from 'react';
import ContestModal from '../SubBroker/ContestModal';
function RemisierOffers() {
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
                                                <th width="25%">Number of Accounts</th>
                                                <th>Account with minimum Rs. 1,000 Investment &amp;  <span>2 transaction</span></th>
                                                <th>Account with minimum Rs. 25,000 Investment &amp;  <span>2 transaction</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="charges-heads">10-99</td>
                                                <td>100</td>
                                                <td>200</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">100-299</td>
                                                <td>150</td>
                                                <td>400</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">300-1999</td>
                                                <td>250</td>
                                                <td>500</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">2000+</td>
                                                <td>400</td>
                                                <td>1000</td>
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

export default RemisierOffers;