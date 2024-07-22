import React from 'react';
import ContestModalHindi from './ContestModalHindi';

function SubBrokerOffersHindi() {
    return (
        <div>
            <section className="franchise-offers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">सब ब्रोकर फ्रेंचाइजी ऑफर</h2>
                            <p className="sml-para-dv">नीचे दी गई तालिका में प्रति खाता प्रोत्साहन प्रस्ताव देखें|</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="offers-table-sec">
                                <div className="table-responsive wow fadeInUp">
                                    <table className="table table-hover table-striped ">
                                        <thead>
                                            <tr>
                                                <th width="25%"> खातों की संख्या</th>
                                                <th>खाते के साथ इक्विटी में न्यूनतम निवेश रु. 1,000 और <span> 2 लेनदेन </span></th>
                                                <th>खाते के साथ इक्विटी में न्यूनतम निवेश रु. 25,000 और <span>2 लेनदेन </span></th>
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
                                <ContestModalHindi />
                            </div>

                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default SubBrokerOffersHindi;