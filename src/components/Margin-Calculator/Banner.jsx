import React from 'react'
import { useState } from 'react';
function Banner() {


    const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
        <section className='banner-section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-9 col-md-12'>
                        <div className='banner-ttle text-center'>
                            <h1 className='big-ttl'>Margin Calculator</h1>
                            <p>Use Choice FinX Margin Calculator to calculate the margin for Future & Option (F&O), Commodity, and Currency segments.</p>
                        </div>
                    </div>
                </div>
                <div className='field-sec'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='tabs-btn'>
                            <div className='row justify-content-center'>
                              <div className='col-xl-6 col-md-12'>
                                <ul className='list_group1'>
                                        <li  className={toggleState === 1 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(1); setData(0) }}>All</li>
                                        <li  className={toggleState === 2 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(2); setData(1) }}>F&O</li>
                                        <li  className={toggleState === 3 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(3); setData(2) }}>Commodity</li>
                                        <li  className={toggleState === 4 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(4); setData(3) }}>Forex</li>
                                </ul>
                              </div>
                           </div>
                            </div>
                          
                            <div className="content-tabs">
                                <div className={toggleState === 1 ? "content active-content" : "content"}>
                                        <div className='form-section'>
                                            <div className='left-sec'>
                                                <div className="row-sec row-flex">
                                                    <div className="flex-items">
                                                        <p className='frm-label'>Search</p>
                                                        <input className='form-control input-font search-icon' placeholder='NIFTY 29JUN23'/>
                                                    </div>
                                                    <div className="flex-items">
                                                        <p className='frm-label'>Quantity</p>
                                                        <input type="text" className='form-control input-font'placeholder='50'/>
                                                        <span className='val-qty'>Lot Size = 50</span>
                                                    </div>
                                                </div>
                                                <div className="row-flex radio-section">
                                                    <div className="flex-items">
                                                        <div class="custom_radio">
                                                           <div className='radio-flex'>
                                                                <input type="radio" id="featured-1" name="featured" checked/>
                                                                <label for="featured-1">BUY</label>
                                                           </div>
                                                           <div className='radio-flex'>
                                                                <input type="radio" id="featured-2" name="featured"/>
                                                                <label for="featured-2">SELL</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-items">
                                                        <div className='button-sec'>
                                                            <div>
                                                                <button type="submit" className="btn-add btn btn-primary">Add</button>
                                                            </div>
                                                            <div>
                                                                <button type="submit" className="btn-reset btn btn-primary">Resset All</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div className='right-sec'>
                                                <div className='brokerage-card'>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Span Margin</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>₹ 86,423.00</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Exposure Margin</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>₹ 18,420.25</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex brd'></div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Total Margin</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>₹ 104,843.25</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Margin Benefit</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='font-success'>₹ 279,571.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='table-sec'>
                                        <table class="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th>Contract</th>
                                                <th>Qty</th>
                                                <th>Trade</th>
                                                <th>Strike</th>
                                                <th>Span Margin</th>
                                                <th>Exposure Margin</th>
                                                <th>Total Margin</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>NIFTY 29JUN23</td>
                                                <td>50</td>
                                                <td>BUY</td>
                                                <td>NA</td>
                                                <td>86,602.00</td>
                                                <td>18,420.25</td>
                                                <td>105,022.25</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>NIFTY 29JUN23</td>
                                                <td>50</td>
                                                <td>BUY</td>
                                                <td>NA</td>
                                                <td>86,602.00</td>
                                                <td>18,420.25</td>
                                                <td>105,022.25</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>NIFTY 29JUN23</td>
                                                <td>50</td>
                                                <td>BUY</td>
                                                <td>NA</td>
                                                <td>86,602.00</td>
                                                <td>18,420.25</td>
                                                <td>105,022.25</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>NIFTY 29JUN23</td>
                                                <td>50</td>
                                                <td>BUY</td>
                                                <td>NA</td>
                                                <td>86,602.00</td>
                                                <td>18,420.25</td>
                                                <td>105,022.25</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        </div>
                                </div>
                                {/* <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                    2
                                </div> */}
                                  {/* <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                    3
                                </div> */}
                                  {/* <div className={toggleState === 4 ? "content  active-content" : "content"}>
                                   4
                                </div> */}
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner