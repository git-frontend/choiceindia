import React from 'react';
import ContestModal from './ContestModalTelagu';

function SubBrokerOffers() {
    return (
        <div>
            <section className="franchise-offers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">సబ్‌ బ్రోకర్‌ ఫ్రాంఛైజ్‌ ఆఫర్</h2>
                            <p className="sml-para-dv">ఈ కింది టేబుల్‌లో అకౌంట్‌ చొప్పున అందుకునే ప్రోత్సాహక ఆఫర్‌ను మీరు చూడండి</p>
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
                                                <th>రూ.1000 కనీస పెట్టుబడి &amp; ఈక్విటీలో 2 లావాదేవీలు </th>
                                                {/* <th>రూ.5000 కనీస పెట్టుబడి &amp; ఈక్విటీలో 2 లావాదేవీలు  </th> */}
                                                <th>రూ.25000 కనీస పెట్టుబడి &amp; ఈక్విటీలో 2 లావాదేవీలు </th>
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

export default SubBrokerOffers;