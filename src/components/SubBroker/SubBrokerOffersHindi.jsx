import React from 'react';
import ContestModalHindi from './ContestModalHindi';

function SubBrokerOffersHindi(){
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
                                <table class="table table-hover table-striped ">
                               <thead>
                                  <tr>
                                     <th width="25%"> <span></span> </th>
                                     <th>खाते के साथ इक्विटी में न्यूनतम निवेश रु. 1,000 और <span> 2 लेनदेन + म्यूचुअल फंड में 1 SIP न्यूनतम रु.500</span></th>
                                     <th>खाते के साथ इक्विटी में न्यूनतम निवेश रु. 5,000 और  <span>2 लेनदेन + म्यूचुअल फंड में 1 SIP न्यूनतम रु.500</span></th>
                                     <th>खाते के साथ इक्विटी में न्यूनतम निवेश रु. 25,000 और <span>2 लेनदेन + म्यूचुअल फंड में 1 SIP न्यूनतम रु.500</span></th>	
                                  </tr>
                               </thead>
                               <tbody>
                                  <tr>
                                     <td class="charges-heads">केवल इक्विटी</td>
                                     <td>200</td>
                                     <td>400</td>
                                     <td>700</td>
                                  </tr>
                                  <tr class="grey-back">
                                     <td class="charges-heads">केवल म्यूचुअल फंड</td>
                                     <td>100</td>
                                     <td>100</td>
                                     <td>100</td>
                                  </tr>
                                  <tr>
                                     <td class="charges-heads">इक्विटी + म्यूचुअल फंड</td>
                                     <td>400</td>
                                     <td>700</td>
                                     <td>1100</td>
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