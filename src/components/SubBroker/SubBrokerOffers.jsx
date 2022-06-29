import React from 'react';

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
                                    </table>
                                </div>
                            </div>
                            <h6 className="trm-link-bx"><a className="trm-link" data-toggle="modal" data-target="#Contest">For Contest Terms &amp; Conditions Click Here</a></h6>
                        </div>
                    </div>
                </div>
            </section>

            {/*<div className="modal fade" id="Contest" tabIndex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="modalLabelSmall">Terms &amp; Conditions</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <ul className="reset" id="style-scrll">
                                <li>All Trading accounts opened between 1st March, 2022 to 31st March,2022 will only be considered in above scheme</li>
                                <li>Grace period is provided till 6th April, 2022 to add Margin &amp; Trade</li>
                                <li>Cash Margin collected during scheme period will be considered for incentive calculation.</li>
                                <li>Total Margin added in account till 6th April, 2022 will be considered for final payout calculation</li>
                                <li>Client added with Margin should be active for minimum 3 months i.e Minimum 2 trade every month</li>
                                <li>Monthly Payout for the contest will be released by 25th April,2022</li>
                                <li>Scheme is applicable for all Online Accounts only</li>
                                <li>Applicable for CBA's, Choice Franchisee &amp; all Choice Group Employees (Except Choice Broking Employees)</li>
                                <li>Franchise/CBA will get rewards based on accounts open through their respective codes</li>
                                <li>If the client becomes inactive before completion of 3 months, the payout will be recovered</li>
                                <li>Management reserves right for any alteration or cancellation of scheme, With or without prior intimation.</li>
                                <li>No other scheme / contest / offer can be clubbed with this</li>
                                <li>No backend mapping of CBA / AP code will be allowed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false} className='Contest'>
                <Modal.Header closeButton>
                    <Modal.Title>Terms &amp; Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ul className="reset" id="style-scrll">
                        <li>All Trading accounts opened between 1st March, 2022 to 31st March,2022 will only be considered in above scheme</li>
                        <li>Grace period is provided till 6th April, 2022 to add Margin &amp; Trade</li>
                        <li>Cash Margin collected during scheme period will be considered for incentive calculation.</li>
                        <li>Total Margin added in account till 6th April, 2022 will be considered for final payout calculation</li>
                        <li>Client added with Margin should be active for minimum 3 months i.e Minimum 2 trade every month</li>
                        <li>Monthly Payout for the contest will be released by 25th April,2022</li>
                        <li>Scheme is applicable for all Online Accounts only</li>
                        <li>Applicable for CBA's, Choice Franchisee &amp; all Choice Group Employees (Except Choice Broking Employees)</li>
                        <li>Franchise/CBA will get rewards based on accounts open through their respective codes</li>
                        <li>If the client becomes inactive before completion of 3 months, the payout will be recovered</li>
                        <li>Management reserves right for any alteration or cancellation of scheme, With or without prior intimation.</li>
                        <li>No other scheme / contest / offer can be clubbed with this</li>
                        <li>No backend mapping of CBA / AP code will be allowed</li>
                    </ul>
                </Modal.Body>
            </Modal>*/}

        </div>

    );
}

export default SubBrokerOffers;