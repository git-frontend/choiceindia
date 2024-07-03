import {useState} from 'react';
import pdfIco from "../../assets/images/upcoming-ipo/pdf-icon.svg"
function IpoLists() {

  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   };


  return (
    <>
        <section className='ipo-list-data'>
              <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                       <div className='head-ttl'>
                          <h2 className='title-secnd'>Access Upcoming IPOs with Choice</h2>
                          <p>Get detailed data and analysis on the most anticipated upcoming IPOs in India in 2024.</p>
                       </div>
                       <div className='ipo-tabs'>
                            <div className='tabs-menus'>
                                <ul>
                                  <li>
                                      <button href='#' className={toggleState === 1 ? "tabs  active" : "tabs"}
                           onClick={() => toggleTab(1)}>Open IPOs</button>
                                  </li>
                                  <li>
                                      <button href='#' className={toggleState === 2 ? "tabs  active" : "tabs"}
                           onClick={() => toggleTab(2)}>Upcoming IPOs</button>
                                  </li>
                                  <li>
                                      <button href='#' className={toggleState === 3 ? "tabs  active" : "tabs"}
                           onClick={() => toggleTab(3)}>Closed IPOs</button>
                                  </li>
                                </ul>
                            </div>
                            <div className='ipo-tabs-content'>
                                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                                    <div className='list-data-cont'>
                                        <div className='head-cont'>
                                            <h3>Subscribe Open IPOs</h3>
                                        </div>
                                        <div className='table'>
                                            <table className='table-list'>
                                                <tr className='hide-mb'>
                                                  <th>IPO Name</th>
                                                  <th>Closes On</th>
                                                  <th>Price Range</th>
                                                  <th>Lot Size</th>
                                                  <th>IPO Size</th>
                                                  <th>Min Investment</th>
                                                  <th>Action</th>
                                                </tr>
                                                <tr>
                                                    <td className='ipo-name'>Storage Technologies and Automation Ltd IPO</td>
                                                    <td data-label="Closes On" className='txt-right'>7 Jun 2024</td>
                                                    <td data-label="Price Range">₹ 120 - ₹ 140</td>
                                                    <td data-label="Lot Size" className='txt-right'>2000 Shares</td>
                                                    <td data-label="IPO Size">₹30000 Cr.</td>
                                                    <td data-label="Min Investment" className='txt-right'>₹14000</td>
                                                    <td className='actin-btns'>
                                                      <a href='#' className='pdf-link' target='_blank'>
                                                          <img src={pdfIco} className='' />
                                                      </a>
                                                      <a href='#' className='btn-bg'>Apply</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='ipo-name'>Storage Technologies and Automation Ltd IPO</td>
                                                    <td data-label="Closes On" className='txt-right'>7 Jun 2024</td>
                                                    <td data-label="Price Range">₹ 120 - ₹ 140</td>
                                                    <td data-label="Lot Size" className='txt-right'>2000 Shares</td>
                                                    <td data-label="IPO Size">₹30000 Cr.</td>
                                                    <td data-label="Min Investment" className='txt-right'>₹14000</td>
                                                    <td className='actin-btns'>
                                                      <a href='#' className='pdf-link' target='_blank'>
                                                          <img src={pdfIco} className='' />
                                                      </a>
                                                      <a href='#' className='btn-bg'>Apply</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                <div className='list-data-cont'>
                                        <div className='head-cont'>
                                            <h3>Upcoming IPOs List</h3>
                                        </div>
                                        <div className='table'>
                                            <table className='table-list'>
                                                <tr className='hide-mb'>
                                                  <th>IPO Name</th>
                                                  <th>Issue Date</th>
                                                  <th>Price Range</th>
                                                  <th>Lot Size</th>
                                                  <th>IPO Document</th>
                                                </tr>
                                                <tr>
                                                    <td className='ipo-name'>Storage Technologies and Automation Ltd IPO</td>
                                                    <td data-label="Issue Date" className='txt-right'>7 Jun 2024</td>
                                                    <td data-label="Price Range">₹ 120 - ₹ 140</td>
                                                    <td data-label="Lot Size" className='txt-right'>2000 Shares</td>
                                                    <td className='actin-btns'>
                                                        <a href='#' className='btn-bg'>Pre-Apply</a>
                                                        <a href='#' className='' target='_blank'>
                                                          <img src={pdfIco} className='' />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                <div className='list-data-cont'>
                                        <div className='head-cont'>
                                            <h3>Recently Closed IPOs</h3>
                                        </div>
                                        <div className='table'>
                                            <table className='table-list'>
                                                <tr className='hide-mb'>
                                                  <th>IPO Name</th>
                                                  <th>Subscribed</th>
                                                  <th>Issue Date</th>
                                                  <th>Price Range</th>
                                                  <th>IPO Size</th>
                                                  <th>IPO Document</th>
                                                </tr>
                                                <tr>
                                                    <td className='ipo-name'>Storage Technologies and Automation Ltd IPO</td>
                                                    <td data-label='Subscribed' className='txt-right'>Expected</td>
                                                    <td data-label="Closes On" >7 Jun 2024</td>
                                                    <td data-label="Price Range" className='txt-right'>₹ 120 - ₹ 140</td>
                                                    <td data-label="IPO Size">₹30000 Cr.</td>
                                                    <td className='txt-right actin-btns'>
                                                        <a href='#' className='btn-bg'>Download</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
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

export default IpoLists