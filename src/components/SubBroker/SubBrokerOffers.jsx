import React from 'react';
import ContestModal from './ContestModal';

function SubBrokerOffers() {
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
                                    {/* <table className="table table-hover table-striped ">
                                        <thead>
                                            <tr>
                                                <th width="25%">Number of <span>Accounts</span> </th>
                                                <th width="20%">Account <span>Opened</span></th>
                                                <th>Account Opened + <span>Cash Margin &gt; Rs 10K + 2T</span></th>
                                                <th>Account Opened + <span>Cash Margin &gt; Rs 30K + 2T</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="charges-heads">4-49</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>500</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">50-99</td>
                                                <td>100</td>
                                                <td>200</td>
                                                <td>700</td>
                                            </tr>
                                            <tr>
                                                <td className="charges-heads">100-299</td>
                                                <td>150</td>
                                                <td>300</td>
                                                <td>1000</td>
                                            </tr>
                                            <tr className="grey-back">
                                                <td className="charges-heads">300+</td>
                                                <td>250</td>
                                                <td>500</td>
                                                <td>1000</td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                    <table class="table table-hover table-striped ">
                                        <thead>
                                            <tr>
                                                <th width="25%"> <span></span> </th>
                                                <th>Account with minimum Rs. 1,000 Investment &amp; <span>2 transaction in EQ + 1 SIP in MF Minimum Rs. 500</span></th>
                                                <th>Account with minimum Rs. 5,000 Investment &amp; <span>2 transaction in EQ + 1 SIP in MF Minimum Rs. 500</span></th>
                                                <th>Account with minimum Rs. 25,000 Investment &amp; <span>2 transaction in EQ + 1 SIP in MF Minimum Rs. 500</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="charges-heads">Equity Only</td>
                                                <td>200</td>
                                                <td>400</td>
                                                <td>700</td>
                                            </tr>
                                            <tr class="grey-back">
                                                <td class="charges-heads">MF only</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td class="charges-heads">EQ + MF</td>
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