import React from "react";
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import {
  useLocation,
} from 'react-router-dom';
import stockmarketholidays from "../../assets/images/share-market-holidays/pdf/stock-market-holidays-2023.pdf";
import nseholidays from "../../assets/images/share-market-holidays/pdf/nse-holidays-2023.pdf";
import bseholidays from "../../assets/images/share-market-holidays/pdf/bse-holidays-2023.pdf";
import mcxncdexholidays from "../../assets/images/share-market-holidays/pdf/mcx-ncdex-holidays-2023.pdf";
import { FaRegFilePdf } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

import { useEffect } from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';
import holidaylist from '../../Data/StockMarketHolidays';


function Holidayscategory() {


  let checkurl = (window.location.pathname == "/stock-market-holidays") ? "stock-market-holidays" : (window.location.pathname == "/nse-holidays") ? "nse-holidays" : (window.location.pathname == "/bse-holidays") ? "bse-holidays" : (window.location.pathname == "/mcx-ncdex-holidays") ? "mcx-ncdex-holidays" : "";

  const [toggleState, setToggleState] = useState(0);
  const [rendercount, setRenderCount] = useState(() => false);
  const [skeleton, setSkeleton] = useState(() => true);
  /**Show loader */
  const [showLoader, setShowLoader] = useState(false)
  const [datalist, setDatalist] = useState({});
  const [nselist, setNselist] = useState({});
  const [nsefilter, setnsefilter] = useState({})
  const [showdata, setShowdata] = useState(() => true);
  const [filterlist, setfilterlist] = useState({});
  const [month, setmonth] = useState("All");
  const [isActive, setIsActive] = useState(1);
  const [title, setTitle] = useState("All");


  const toggleTab = (index) => {
    setToggleState(index);
  };



  // console.log("fgh", holidaylist)

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      checkurl == 'stock-market-holidays';
      checkurl == 'nse-holidays';
      checkurl == 'bse-holidays';
      checkurl == 'mcx-ncdex-holidays';
      // console.log(holidaylist)
      FilterMonth()
      OtherHolidays()

    }
  }, [rendercount])

  useEffect(() => {
    monthFliter(month)


  }, [toggleState])


  let AllmonthValue = {};
  let nsebsevalue = {};
  let nseMonthvalue = {}



  function OtherHolidays() {
    holidaylist.forEach((data) => {
      // console.log("for nse",data)
      if (!nsebsevalue[data.title]) {
        nsebsevalue[data.title] = [];
        nsebsevalue[data.title].push(data)
      } else {
        nsebsevalue[data.title].push(data)
      }


    })



    setNselist(nsebsevalue.nsebse);
    // console.log("new r3w",nsebsevalue)

    nsebsevalue.nsebse.forEach((ele) => {
      if (!nseMonthvalue[ele.month]) {
        nseMonthvalue[ele.month] = [];
        nseMonthvalue[ele.month].push(ele)
      } else {
        nseMonthvalue[ele.month].push(ele)

      }

    })
    setnsefilter(nseMonthvalue)


    // console.log("month a",nseMonthvalue)


  }


  function FilterMonth() {
    holidaylist.forEach((res) => {
      // console.log(res)
      if (!AllmonthValue[res.month]) {
        AllmonthValue[res.month] = [];
        AllmonthValue[res.month].push(res)
      } else {
        AllmonthValue[res.month].push(res)

      }
    }
    )


    setDatalist(AllmonthValue);
  }
  // console.log("toggleafter",toggleState)
  function monthFliter(id, value) {
    value ? setToggleState(value) : ""
    // console.log (toggleState,"toggle3")
    setmonth(id)
    setShowdata(() => false);

    if (toggleState == 1 || toggleState == 2 || toggleState == 3) {
      id == "All" ? setfilterlist(nselist) : setfilterlist(nsefilter[id])
    }
    else {
      id == "All" ? setfilterlist(holidaylist) : setfilterlist(datalist[id])
    }

    // console.log("acsdncj", filterlist)
    setIsActive(current => !current);


  }

  // console.log("month value",nseMonthvalue)







  return (
    <div>
      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <section className="mainhead holiday-main">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                    {
                      toggleState == 0 ?
                        <div>
                          <h2 className=" title-secnd1">Stock Market Holidays 2023</h2>
                          <p className="title_para res_para ">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                        </div> :
                        toggleState == 1 ?
                          <div>
                            <h2 className=" title-secnd1">NSE Holidays 2023</h2>
                            <p className="title_para res_para ">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                          </div> :
                          toggleState == 2 ?
                            <div>
                              <h2 className=" title-secnd1">BSE Holidays 2023</h2>
                              <p className="title_para res_para ">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                            </div> :
                            toggleState == 3 ?
                              <div>
                                <h2 className=" title-secnd1">MCX/NCDEX Holidays 2023</h2>
                                <p className="title_para res_para">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                              </div> :
                              ""
                    }



                  </div>
                  <div className="col-xl-9 col-md-12" id="best-stock">
                    <ul className="list-group list_group1  holiday-list">
                      <li className={toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} > <Link className="urllinks1" to="/stock-market-holidays" onClick={() => { setToggleState(0), monthFliter(month, 0) }} > All</Link></li>
                      <li className={toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} ><Link className="urllinks1" to="/nse-holidays" onClick={() => { setToggleState(1), monthFliter(month, 1) }} >NSE Holidays</Link></li>
                      <li className={toggleState === 2 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/bse-holidays" onClick={() => { setToggleState(2), monthFliter(month, 2) }} >BSE Holidays</Link></li>
                      <li className={toggleState === 3 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/mcx-ncdex-holidays" onClick={() => { setToggleState(3), monthFliter(month, 3) }}>MCX/NCDEX Holidays</Link></li>
                    </ul>

                  </div>
                  <div>
                    {
                      showdata ?
                        <p className="title_para title_para-second">Trading Holidays in 2023</p> :
                        <p className="title_para title_para-second">Stock Market Holidays in {month} 2023</p>
                    }



                  </div>
                </div>
              </div>
            </section>


            <section className="main-parent holiday-parent">
              <div className="container">
                <div className="content-tabs best-stock-tabs-cont active-content holiday-content">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                      <div>
                        {showLoader ?

                          <div className="text-center">
                            <div>
                              {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
                              <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={100} width={100} />
                            </div>
                          </div> :
                          <div>
                            {
                              <div className=" gx-5">
                                <div className="">
                                  {
                                    toggleState == 0 ?
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="holidays-table">
                                            <div className="table-responsive wow fadeInUp table-desk">
                                              <table className="table table-hover table-striped ">
                                                <thead>
                                                  <tr>
                                                    <th width="15%">S.No </th>
                                                    <th width="35%">Holidays</th>
                                                    <th className="holidaydropdown">

                                                      <Dropdown className="drop_list" >
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                          {title}
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu  >
                                                          <div className="months-custom" >
                                                            <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => { monthFliter("All"), setIsActive(1), setTitle("All") }} label='All' className={isActive == 1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => { monthFliter('January'), setIsActive(2), setTitle("January") }} label='January' className={isActive == 2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => { monthFliter('February'), setIsActive(3), setTitle("February") }} label='February' className={isActive == 3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => { monthFliter('March'), setIsActive(4), setTitle("March") }} label='March' className={isActive == 4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => { monthFliter('April'), setIsActive(5), setTitle("April") }} label='April' className={isActive == 5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => { monthFliter('May'), setIsActive(6), setTitle("May") }} label='May' className={isActive == 6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => { monthFliter('June'), setIsActive(7), setTitle("June") }} label='June' className={isActive == 7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => { monthFliter('July'), setIsActive(8), setTitle("July") }} label='July' className={isActive == 8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => { monthFliter('August'), setIsActive(9), setTitle("August") }} label='August' className={isActive == 9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() => { monthFliter('September'), setIsActive(10), setTitle("September") }} label='September' className={isActive == 10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() => { monthFliter('October'), setIsActive(11), setTitle("October") }} label='October' className={isActive == 11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() => { monthFliter('November'), setIsActive(12), setTitle("November") }} label='November' className={isActive == 12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() => { monthFliter('December'), setIsActive(13), setTitle("December") }} label='December' className={isActive == 13 ? 'activemonth' : ''} >December</Dropdown.Item>
                                                          </div>
                                                        </Dropdown.Menu>
                                                      </Dropdown>
                                                    </th>
                                                    <th>Day</th>
                                                  </tr>
                                                </thead>
                                                {
                                                  showdata ?
                                                    <tbody>
                                                      {
                                                        holidaylist.map((res, i) => {
                                                          return (
                                                            <tr key={i}>
                                                              <td className="charges-heads">{i + 1}</td>
                                                              <td>{res.holidayName}</td>
                                                              <td>{res.date}</td>
                                                              <td>{res.day}</td>
                                                            </tr>
                                                          )
                                                        })
                                                      }
                                                    </tbody> :
                                                    <tbody>
                                                      {

                                                        filterlist?.map((res, i) => {
                                                          return (
                                                            <tr key={i}>
                                                              <td className="charges-heads">{i + 1}</td>
                                                              <td>{res.holidayName}</td>
                                                              <td>{res.date}</td>
                                                              <td>{res.day}</td>
                                                            </tr>
                                                          )
                                                        })
                                                      }
                                                    </tbody>
                                                }







                                              </table>
                                            </div>
                                          </div>
                                          <div className="holiday-list d-flex justify-content-between ">
                                            <div className="holiday-text">Stock Market Holidays 2023 List PDF</div>
                                            <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(stockmarketholidays) }} className="cursor-pointer mr4" /></div>
                                          </div>
                                        </div>
                                      </div> :
                                      toggleState == 1 ?
                                        <div className="row">
                                          <div className="col-md-12">
                                            <div className="holidays-table">
                                              <div className="table-responsive wow fadeInUp table-desk">
                                                <table className="table table-hover table-striped ">
                                                  <thead>
                                                    <tr>
                                                      <th width="15%">S.No </th>
                                                      <th width="35%">Holidays</th>
                                                      <th className="holidaydropdown">

                                                        <Dropdown className="drop_list" >
                                                          <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                            {title}
                                                          </Dropdown.Toggle>
                                                          <Dropdown.Menu  >
                                                            <div className="months-custom" >
                                                              <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => { monthFliter("All"), setIsActive(1), setTitle("All") }} label='All' className={isActive == 1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => { monthFliter('January'), setIsActive(2), setTitle("January") }} label='January' className={isActive == 2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => { monthFliter('February'), setIsActive(3), setTitle("February") }} label='February' className={isActive == 3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => { monthFliter('March'), setIsActive(4), setTitle("March") }} label='March' className={isActive == 4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => { monthFliter('April'), setIsActive(5), setTitle("April") }} label='April' className={isActive == 5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => { monthFliter('May'), setIsActive(6), setTitle("May") }} label='May' className={isActive == 6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => { monthFliter('June'), setIsActive(7), setTitle("June") }} label='June' className={isActive == 7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => { monthFliter('July'), setIsActive(8), setTitle("July") }} label='July' className={isActive == 8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => { monthFliter('August'), setIsActive(9), setTitle("August") }} label='August' className={isActive == 9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() => { monthFliter('September'), setIsActive(10), setTitle("September") }} label='September' className={isActive == 10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() => { monthFliter('October'), setIsActive(11), setTitle("October") }} label='October' className={isActive == 11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() => { monthFliter('November'), setIsActive(12), setTitle("November") }} label='November' className={isActive == 12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() => { monthFliter('December'), setIsActive(13), setTitle("December") }} label='December' className={isActive == 13 ? 'activemonth' : ''} >December</Dropdown.Item>
                                                            </div>
                                                          </Dropdown.Menu>
                                                        </Dropdown>
                                                      </th>
                                                      <th>Day</th>
                                                    </tr>
                                                  </thead>
                                                  {
                                                    showdata ?
                                                      <tbody>
                                                        {
                                                          nselist.map((res, i) => {
                                                            return (
                                                              <tr key={i}>
                                                                <td className="charges-heads">{i + 1}</td>
                                                                <td>{res.holidayName}</td>
                                                                <td>{res.date}</td>
                                                                <td>{res.day}</td>
                                                              </tr>
                                                            )
                                                          })
                                                        }
                                                      </tbody> :
                                                      <tbody>
                                                        {

                                                          filterlist?.map((res, i) => {
                                                            return (
                                                              <tr key={i}>
                                                                <td className="charges-heads">{i + 1}</td>
                                                                <td>{res.holidayName}</td>
                                                                <td>{res.date}</td>
                                                                <td>{res.day}</td>
                                                              </tr>
                                                            )
                                                          })
                                                        }
                                                      </tbody>
                                                  }
                                                </table>
                                              </div>
                                            </div>
                                            <div className="holiday-list d-flex justify-content-between ">
                                              <div className="holiday-text">NSE Holidays 2023 List PDF</div>
                                              <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(nseholidays) }} className="cursor-pointer mr4" /></div>
                                            </div>
                                          </div>
                                        </div> :
                                        toggleState == 2 ?
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="holidays-table">
                                                <div className="table-responsive wow fadeInUp table-desk">
                                                  <table className="table table-hover table-striped ">
                                                    <thead>
                                                      <tr>
                                                        <th width="15%">S.No </th>
                                                        <th width="35%">Holidays</th>
                                                        <th className="holidaydropdown">

                                                          <Dropdown className="drop_list" >
                                                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                              {title}
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu  >
                                                              <div className="months-custom" >
                                                                <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => { monthFliter("All"), setIsActive(1), setTitle("All") }} label='All' className={isActive == 1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => { monthFliter('January'), setIsActive(2), setTitle("January") }} label='January' className={isActive == 2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => { monthFliter('February'), setIsActive(3), setTitle("February") }} label='February' className={isActive == 3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => { monthFliter('March'), setIsActive(4), setTitle("March") }} label='March' className={isActive == 4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => { monthFliter('April'), setIsActive(5), setTitle("April") }} label='April' className={isActive == 5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => { monthFliter('May'), setIsActive(6), setTitle("May") }} label='May' className={isActive == 6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => { monthFliter('June'), setIsActive(7), setTitle("June") }} label='June' className={isActive == 7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => { monthFliter('July'), setIsActive(8), setTitle("July") }} label='July' className={isActive == 8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => { monthFliter('August'), setIsActive(9), setTitle("August") }} label='August' className={isActive == 9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() => { monthFliter('September'), setIsActive(10), setTitle("September") }} label='September' className={isActive == 10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() => { monthFliter('October'), setIsActive(11), setTitle("October") }} label='October' className={isActive == 11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() => { monthFliter('November'), setIsActive(12), setTitle("November") }} label='November' className={isActive == 12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                                <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() => { monthFliter('December'), setIsActive(13), setTitle("December") }} label='December' className={isActive == 13 ? 'activemonth' : ''} >December</Dropdown.Item>
                                                              </div>
                                                            </Dropdown.Menu>
                                                          </Dropdown>
                                                        </th>
                                                        <th>Day</th>
                                                      </tr>
                                                    </thead>
                                                    {
                                                      showdata ?
                                                        <tbody>
                                                          {
                                                            nselist.map((res, i) => {
                                                              return (
                                                                <tr key={i}>
                                                                  <td className="charges-heads">{i + 1}</td>
                                                                  <td>{res.holidayName}</td>
                                                                  <td>{res.date}</td>
                                                                  <td>{res.day}</td>
                                                                </tr>
                                                              )
                                                            })
                                                          }
                                                        </tbody> :
                                                        <tbody>
                                                          {

                                                            filterlist?.map((res, i) => {
                                                              return (
                                                                <tr key={i}>
                                                                  <td className="charges-heads">{i + 1}</td>
                                                                  <td>{res.holidayName}</td>
                                                                  <td>{res.date}</td>
                                                                  <td>{res.day}</td>
                                                                </tr>
                                                              )
                                                            })
                                                          }
                                                        </tbody>
                                                    }







                                                  </table>
                                                </div>
                                              </div>
                                              <div className="holiday-list d-flex justify-content-between ">
                                                <div className="holiday-text">BSE Holidays 2023 List PDF</div>
                                                <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(bseholidays) }} className="cursor-pointer mr4" /></div>
                                              </div>
                                            </div>
                                          </div> :
                                          toggleState == 3 ?
                                            <div className="row">
                                              <div className="col-md-12">
                                                <div className="holidays-table">
                                                  <div className="table-responsive wow fadeInUp table-desk">
                                                    <table className="table table-hover table-striped ">
                                                      <thead>
                                                        <tr>
                                                          <th width="15%">S.No </th>
                                                          <th width="35%">Holidays</th>
                                                          <th className="holidaydropdown">

                                                            <Dropdown className="drop_list" >
                                                              <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                                {title}
                                                              </Dropdown.Toggle>
                                                              <Dropdown.Menu  >
                                                                <div className="months-custom" >
                                                                  <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => { monthFliter("All"), setIsActive(1), setTitle("All") }} label='All' className={isActive == 1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => { monthFliter('January'), setIsActive(2), setTitle("January") }} label='January' className={isActive == 2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => { monthFliter('February'), setIsActive(3), setTitle("February") }} label='February' className={isActive == 3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => { monthFliter('March'), setIsActive(4), setTitle("March") }} label='March' className={isActive == 4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => { monthFliter('April'), setIsActive(5), setTitle("April") }} label='April' className={isActive == 5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => { monthFliter('May'), setIsActive(6), setTitle("May") }} label='May' className={isActive == 6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => { monthFliter('June'), setIsActive(7), setTitle("June") }} label='June' className={isActive == 7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => { monthFliter('July'), setIsActive(8), setTitle("July") }} label='July' className={isActive == 8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => { monthFliter('August'), setIsActive(9), setTitle("August") }} label='August' className={isActive == 9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() => { monthFliter('September'), setIsActive(10), setTitle("September") }} label='September' className={isActive == 10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() => { monthFliter('October'), setIsActive(11), setTitle("October") }} label='October' className={isActive == 11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() => { monthFliter('November'), setIsActive(12), setTitle("November") }} label='November' className={isActive == 12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                                  <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() => { monthFliter('December'), setIsActive(13), setTitle("December") }} label='December' className={isActive == 13 ? 'activemonth' : ''} >December</Dropdown.Item>
                                                                </div>
                                                              </Dropdown.Menu>
                                                            </Dropdown>
                                                          </th>
                                                          <th>Day</th>
                                                        </tr>
                                                      </thead>
                                                      {
                                                        showdata ?
                                                          <tbody>
                                                            {
                                                              nselist.map((res, i) => {
                                                                return (
                                                                  <tr key={i}>
                                                                    <td className="charges-heads">{i + 1}</td>
                                                                    <td>{res.holidayName}</td>
                                                                    <td>{res.date}</td>
                                                                    <td>{res.day}</td>
                                                                  </tr>
                                                                )
                                                              })
                                                            }
                                                          </tbody> :
                                                          <tbody>
                                                            {

                                                              filterlist?.map((res, i) => {
                                                                return (
                                                                  <tr key={i}>
                                                                    <td className="charges-heads">{i + 1}</td>
                                                                    <td>{res.holidayName}</td>
                                                                    <td>{res.date}</td>
                                                                    <td>{res.day}</td>
                                                                  </tr>
                                                                )
                                                              })
                                                            }
                                                          </tbody>
                                                      }
                                                    </table>
                                                  </div>
                                                </div>
                                                <div className="holiday-list d-flex justify-content-between ">
                                                  <div className="holiday-text">MCX/NCDEX Holidays 2023 List PDF</div>
                                                  <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(mcxncdexholidays) }} className="cursor-pointer mr4" /></div>
                                                </div>
                                              </div>
                                            </div> :
                                            ""
                                  }
                                </div>



                              </div>

                            }

                          </div>
                        }
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </section>
            <OpenDemateAccountStickyFooter />
            <section className="readmoresection ">
              <div className="container">

                {
                  toggleState == 0 ?
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">Stock Market Holidays</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext"> The Indian stock market is an exciting proposition for investors to generate additional income. Every year, numerous brokers, dealers, and traders explore the market to deal in lucrative financial holdings.
                            <br /><br />
                            However, as an investor, you should know that the stock market does not operate 24x7. There are predefined <strong>stock market holidays</strong> during which there are no trading activities.
                            <br /><br />
                            So, the equity sector does not witness any trading activity. This article aims to inform you about the <strong>stock market holidays 2023</strong> and their significance.
                            
                            <span className="read-more-target restext">
                              Ensure you note these dates before planning a well-thought 2023 share market trading schedule.
                              <br /><br />
                              <h2 className="font-bold">Indian stock market holidays 2023</h2>
                              Here are the details of all the holidays that you will come across in the annual year 2023:
                              <h3>1. Republic Day – 26th January 2023</h3>
                              <strong>Day: Thursday</strong>
                              <br /><br />
                              Republic Day is one of the most vibrant national festivals. It is the first day in the list of <strong>stock market holidays 2023 </strong>and has several astounding reasons for celebration.
                              <br /><br />
                              On this day, you can witness the national parade at Janpath and the extravagant display of the Indian army.

                              <h3>2. Holi – 07th March 2023</h3>
                              <strong>Day: Tuesday</strong>
                              <br /><br />
                              The festival of colors marks one of the important <strong>share market holidays 2023.</strong> It is a Hindu festival that holds prominence in the annual calendar.
                              <br /><br />
                              This holiday marks the celebration of the triumph of good over evil. It is a cultural festival and usually falls on the full moon.
                              <h3>3. Ram Navami – 30th March 2023</h3>
                              <strong>Day: Thursday</strong>
                              <br /><br />
                              This festival celebrates the birthday of lord Rama. People make Panakam on this day and celebrate the occasion in fervor.
                              <br /><br />
                              It is one of the important <strong>stock market holidays,</strong> and you cannot perform any trading on this day.
                              <h3>4. Mahavir Jayanti – 04th April 2023</h3>
                              <strong>Day: Tuesday</strong>
                              <br /><br />
                              This Jain festival celebrates the birth of lord Mahavir. On this day, people observe peace and spread the teachings of the last Tirthankara of avasarpini.
                              <br /><br />
                              It is a vital holiday, especially for people who practice Jainism.
                              <h3>5. Good Friday – 07th April 2023</h3>
                              <strong>Day: Friday</strong>
                              <br /><br />
                              This gazetted holiday honors the life of Jesus Christ. It commemorates Jesus's crucifixion and his final hours before the same.
                              <br /><br />
                              Notably, this day is the Friday before Easter Sunday. No transactions can be performed on <strong>share market holidays 2023.</strong> 
                              <h3>6. Dr. Baba Saheb Ambedkar Jayanti – 14th April 2023</h3>
                              <strong>Day: Friday</strong>
                              <br /><br />
                              Dr. B.R. Ambedkar was a well-known Indian social reformer and economist. He was the main architect of India’s constitution, and this holiday honors his pivotal contribution.
                              <br /><br />
                              So, his birthday is a national holiday in the country.
                              <h3>7. Maharashtra Day – 01st May 2023</h3>
                              <strong>Day: Monday</strong>
                              <br /><br />
                              This holiday marks the annual festival of Maharashtra, a western state in India. It celebrates the formation of the state.
                              <br /><br />
                              You can witness parades and cultural exhibitions of Maharashtra, one of the vital <strong>stock market holidays.</strong>
                              <h3>8. Bakri Id – 28th June 2023</h3>
                              <strong>Day: Wednesday</strong>
                              <br /><br />
                              Also known as the ‘holiday of sacrifice,’ this Islamic festival is another inclusion in the <strong>Indian stock market holidays 2023.</strong>  
                              <br /><br />
                              The followers celebrate this festival to honor the willingness of Abraham to sacrifice his son. It highlights the act of obeying God’s command.
                              <h3>9. Independence Day – 15th August 2023</h3>
                              <strong>Day: Tuesday</strong>
                              <br /><br />
                              This public day marks the celebration of India’s independence from British rule. On this day, no one can conduct any share market activities.
                              <br /><br />
                              You can witness extravagant parades and national programs on television and at various locations.
                              <h3>10. Ganesh Chaturthi – 19th September 2023 </h3> 
                              <strong>Day: Tuesday</strong>
                              <br /><br />
                              This holiday commemorates the Hindu god of wisdom, Lord Ganesha. People install clay idols and pray to Lord Ganpati for prosperity and wisdom.
                              <br /><br />
                              Notably, this day is the tenth off-day in the list of <strong>stock market holidays.</strong>
                              <h3>11. Mahatma Gandhi Jayanti – 02nd October 2023</h3>
                              <strong>Day: Monday</strong>
                              <br /><br />
                              This holiday marks the celebration of Mahatma Gandhi’s birth anniversary. It is a national holiday that includes various educational programs to recall Gandhiji’s teachings.
                              <br /><br />
                              Like other festivals, all stock market activities are inactive on this day.
                              <h3>12. Dussehra – 24th October 2023</h3>
                              <strong>Day: Tuesday</strong>
                              <br /><br />
                              This festival is a religious holiday to celebrate the triumph of Lord Rama over the demon king Ravana. Notably, this day ends the auspicious Durga Puja festival and consists of various religious rituals.
                              <h3>13. Diwali Balipratipada – 14th November 2023</h3> 
                              <strong>Day: Tuesday</strong>
                              <br /><br />
                              Diwali is the festival of lights and is a religious Hindu holiday. People enjoy lighting firecrackers and celebrating through the devotion of Goddess Laxmi.
                              <br /><br />
                              However, the stock market has ‘Muhurat Trading’, which takes place for an hour during the Diwali season. The normal market hours will begin at 06:15 p.m. and commence at 07:15 p.m. The closing session of this trading is at 07:35 p.m.
                              <h3>14. Guru Nanak Jayanti – 27th November 2023</h3>
                              <strong>Day: Monday</strong>
                              <br /><br />
                              This is an important Sikh festival that celebrates the birth of Guru Nanak, the first mentor in Sikhism. It is one of the final <strong>stock market holidays of 2023,</strong> and you cannot trade on this holiday.
                              <h3>15. Christmas – 25th December 2025</h3>
                              <strong>Day: Monday</strong>
                              <br /><br />
                              The final off day in the stock market holidays is the Christian day of Christmas. On this holiday, Christians celebrate the birth of Jesus Christ.
                              <br /><br />
                              It is a worldwide cultural holiday that has celebrations all across India.
                              <br /><br />
                              The stock market holidays 2023 list contains 15 off days that do not fall on weekends. So, as an investor, you need to keep track of these holidays for better planning.
                              <br /><br />
                              Plan and capitalize on all the vital offerings in the Indian stock market. Hopefully, you will land profitable deals and make the most of the entire year. 
                            </span>
                          </span>
                          <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                        </div>
                      </div>
                    </div> :
                    toggleState == 1 ?
                    <div className="row">
                    <div className="col-md-12">
                      <h2 className="secttitle text-center">NSE Holidays</h2>
                    </div>
                    <div className="col-md-12">
                      <div className="para px-3">
                        <input type="checkbox" className="read-more-state" id="post-1" />
                        <span className="read-more-wrap restext"> The National Stock Exchange of India (NSE) is one of the leading stock exchanges globally. Founded in 1992, the NSE was established to usher in accessibility and transparency to the Indian market.
                          <br /><br />
                          The institution offers investors several options, from equities and mutual funds to currency and commodities. However, trading is not available on all days.
                          <br /><br />
                          For instance, regular market sessions on weekdays last from 9:15 a.m. to 3:30 p.m. Following a 10-minute hiatus, closing sessions begin at 3:40 p.m. and end at 4:00 p.m. The NSE is also closed for trading on Saturdays and Sundays.
                          
                          <span className="read-more-target restext">
                          If you are a frequent investor, you must keep track of the NSE holidays to maintain a consistent trading routine. 
                          <br /><br />
                          Below, you will find a complete list of the same.
                          <br /><br />
                            <h2 className="font-bold">NSE Holidays in 2023</h2>
                            There are 19 NSE trading holidays in 2023. However, since Mahashivratri, Eid-Ul-Fitr, Muharram, and Diwali-Laxmi Pujan fall on either Saturday or Sunday, they are effectively counted out.
                            <br /><br />
                            So, here are the 15 remaining ones that you should be mindful of:
                            <h3>1. Republic Day</h3>
                            <strong>Date: </strong> 26th January
                            <br/>
                            <strong>Day: </strong>Thursday
                            <br/><br/>
                            One of the first NSE holidays is Republic Day. This holiday marks the date on which the Constitution of India finally came into effect. Replacing the Government of India Act 1935 as the nation’s governing document, this was a direct representation of the country’s sovereign status.
                            <h3>2. Holi</h3>
                            <strong>Date: </strong>7th March
                            <br/>
                            <strong>Day:</strong> Tuesday	
                            <br/><br/>
                            Stemming from ancient Hindu traditions, Holi marks the beginning of spring and is believed to symbolize the triumph of good over evil. While several activities are associated with the festival, the most prominent one involves people playing with colors.
                            <h3>3. Ram Navami </h3>
                            <strong>Date:</strong> 30th March
                            <br/>
                            <strong>Day:</strong> Thursday
                            <br/><br/>
                            Third on the NSE trading holidays list is Ram Navami. A Hindu festival, it celebrates the deity Vishnu being born as Ram.
                            <h3>4. Mahavir Jayanti </h3>
                            <strong>Date:</strong> 4th April
                            <br/>
                            <strong>Day:</strong> Tuesday
                            <br/>
                            <br/>
                            One of the most important religious festivals in the Jain community, Mahavir Jayanti celebrates the birth of the 24th and the last Tirthankara, Mahavir. The exact date of the occasion varies on the Gregorian calendar, occurring in either March or April.
                            <h3>5. Good Friday </h3>
                            <strong>Date:</strong> 7th April
                            <br/>
                            <strong>Day:</strong> Friday
                            <br/>
                            <br/>
                            Alternatively known as Holy or Great Friday, Good Friday commemorates the crucifixion of Jesus Christ and his subsequent death at Calvary. It is one of the most revered religious occasions in the Christian community.
                            <h3>6. Dr. Baba Saheb Ambedkar Jayanti</h3>
                            <strong>Date:</strong> 14th April
                            <br/>
                            <strong>Day:</strong>Friday
                            <br/>
                            <br/>
                            Also called Bhim or, simply, Ambedkar Jayanti, this celebrates the birthday of Dr. Baba Saheb Ambedkar. A social reformer who advocated for social equality, Dr. Ambedkar was also involved in drafting the Constitution of India.
                            <h3>7. Maharashtra Day</h3>
                            <strong>Date:</strong> 1st May
                            <br/>
                            <strong>Day:</strong> Monday
                            <br/> <br/>
                            One of the more regionally focused NSE holidays in 2023, Maharashtra Day celebrates the formation of the state and commemorates the reorganization and division of the Bombay State in 1960.
                            <h3>8. Bakri Eid</h3>
                            <strong>Date:</strong> 28th June
                            <br/>
                            <strong>Day:</strong> Wednesday
                            <br/>
                            <br/>
                            Also called Eid al-Adha, Bakri Eid is one of the most significant religious occasions in the Islamic community. The festival honors Abraham’s willingness to sacrifice his son, Ishmael, to demonstrate his faith and obedience to God.
                            <h3>9. Independence Day</h3>
                            <strong>Date:</strong> 15th August
                            <br/>
                            <strong>Day:</strong> Tuesday
                            <br/> <br/>
                            One of the most prominent NSE holidays, Independence Day marks an end to India’s 200-year struggle for freedom from British rule and its beginning as a sovereign, independent nation.
                            <h3>10. Ganesh Chaturthi</h3>
                            <strong>Date:</strong> 19th September
                            <br/>
                            <strong>Day:</strong> Tuesday
                            <br/><br/>
                            Sometimes referred to as Ganeshotsav, Ganesh Chaturthi celebrates the birth of the Hindu deity, Ganesh. The festival typically involves the installation of clay idols in private residences and public settings.
                            <h3>11. Mahatma Gandhi Jayanti</h3>
                            <strong>Date:</strong> 2nd October
                            <br/>
                            <strong>Day:</strong> Monday
                            <br/><br/>
                            Among the more notable NSE trading holidays is Gandhi Jayanti. Meant to celebrate the birth of Mohandas Karamchand Gandhi and his role in India’s fight for independence, the occasion also doubles as the International Day of Non-Violence.
                            <h3>12. Dussehra</h3>
                            <strong>Date:</strong>24th October
                            <br/>
                            <strong>Day:</strong> Tuesday
                            <br/><br/>
                            A major Hindu festival, Dussehra, is celebrated for different reasons across India. In the country's eastern, northeastern, and southern parts, it commemorates the end of Durga Puja. In the central, western, and northern Indian states, Dussehra symbolizes the end of Ramlila.
                            <h3>13. Diwali-Balipratipada</h3>
                            <strong>Date: </strong> 14th November
                            <br/>
                            <strong>Day: </strong> Tuesday
                            <br/><br/>
                            Also known as Virapratipada, Balipratipada is the fourth day of Diwali and honors the symbolic return of Mahabali, a notable king featured in numerous Hindu religious texts. The date for this festival varies on the Gregorian calendar, often falling in either October or November.
                            <h3>14. Gurunanak Jayanti</h3>
                            <strong>Date: </strong> 27th November
                            <br/>
                            <strong>Day: </strong> Monday
                            <br/><br/>
                            Celebrating the birth of the first Sikh guru and the founder of the religion, Gurunanak Jayanti is among the most revered festivals in the Sikh community.
                            <h3>15. Christmas</h3>
                            <strong>Date: </strong> 25th December
                            <br/>
                            <strong>Day: </strong>Monday
                            <br/>
                            <br/>
                            One of the most culturally significant holidays in the Christian community, Christmas marks the birth of Jesus Christ.  This is also the final one of the NSE holidays for 2023.
                            <br/><br/>
                            Even though this article lists all of the NSE holidays for 2023, it is critical to note that NSE reserves the right to close the market on any given day. In addition, the Exchange can open trading on a previously declared holiday.
                            <br/><br/>
                            Apart from that, NSE may also reduce, extend, advance, or postpone trading hours at its discretion.
                            <br/><br/>
                            That is why it is crucial to keep track of any announcements or changes made from the official website.

                          </span>
                        </span>
                        <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                      </div>
                    </div>
                  </div> :
                      toggleState == 2 ?
                      <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">BSE Holidays 2023</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext"> The Bombay Stock Exchange (BSE) is among the largest and oldest stock exchanges globally in India. It provides multiple earning opportunities to investors who want to explore the stock market. However, the trading opportunities are not available all day. 
                            <br /><br />
                            If you are an investor, it’s important to keep the main operating hours of the BSE in mind. For instance, on weekdays, trade-in hours are 9.15 a.m. to 3.30 p.m. Pre-market open trading time is between 9.00 to 9.15 a.m. Furthermore, both Saturday and Sunday are holidays.
                            
                            <span className="read-more-target restext">
                            <br/>
                            Besides, there are many <strong>BSE holidays</strong> when you can’t trade. Take a look at the <strong>BSE holidays 2023</strong> list to plan your trading strategy successfully. 
                            <br /><br />
                              <h2 className="font-bold">BSE Stock Market Holidays in India 2023</h2>
                              Let’s delve into the major <strong>BSE</strong> <Link to="/stock-market-holidays" onClick={()=>setToggleState(0)}>stock market holidays of 2023</Link> and their significance.
                              <h3>1. Republic Day</h3>
                              <strong>Date –</strong> 26th January, Thursday
                              <br /><br />
                              It is the first holiday on the list of <strong>BSE trading holidays.</strong> Republic Day marks the day when the constitution of the country was established. The government organizes several events and parades on this day.
                              <h3>2. Maha Shivaratri</h3>
                              <strong>Date –</strong> 1st March, Tuesday
                              <br /><br />
                              A popular <strong>BSE holiday,</strong> Maha Shivaratri is observed as the wedding day of Shiva and Parvati. The event usually takes place at night.
                              <h3>3. Holi</h3>
                              <strong>Date –</strong> 7th March, Tuesday
                              <br /><br />
                              Known as the festival of colors, Holi signifies the victory of good over evil. People celebrate it by using colors and arranging events.
                              <h3>4. Ram Navami</h3>
                              <strong>Date –</strong> 30th March, Thursday
                              <br /><br />
                              Ram Navami is next on the list of <strong>BSE stock market holidays.</strong> It is a celebration of the body of Ram, as an avatar of Vishnu.
                              <h3>5. Mahavir Jayanti</h3>
                              <strong>Date –</strong> 4th April, Tuesday
                              <br /><br />
                              Mahavir Jayanti is the most important festival of the Jain community. It celebrates the birth of the last Tirthankara, Mahavir.
                              <h3>6. Good Friday</h3>
                              <strong>Date –</strong> 7th April, Friday
                              <br /><br />
                              A famous <strong>BSE trading holiday,</strong> Good Friday, commemorates the crucifixion and death of Jesus. It is also called Holy Friday by the Christian community.
                              <h3>7. Dr.Baba Saheb Ambedkar Jayanti</h3>
                              <strong>Date –</strong> 14th April, Friday
                              <br /><br />
                              Also known as Bhim Jayanti, this holiday marks the birthday of Dr.Baba Saheb Ambedkar. He was a social reformer who helped draft the constitution and fought for India’s independence.
                              <h3>8. Maharashtra Day</h3>
                              <strong>Date –</strong> 1st May, Monday
                              <br /><br />
                              Maharashtra Day is an important holiday as it celebrates the formation of Maharashtra as a state.
                              <h3>9. Id-ul-Fitr</h3>
                              <strong>Date –</strong> 3rd May, Tuesday
                              <br /><br />
                              Id-ul-Fitr is also called the festival of sweets and is celebrated by the Muslim community as the end of Ramadan.
                              <h3>10. Bakri Eid</h3>
                              <strong>Date –</strong> 28th June, Wednesday
                              <br /><br />
                              Bakri Eid is an essential Muslim holiday. It is a representation of how Abraham sacrificed his son Ishmael to God.
                              <h3>11. Muharram</h3>
                              <strong>Date –</strong> 9th August, Tuesday
                              <br /><br />
                              After Ramadan, Muharram is considered to be the second holiest month. During this time, warfare is completely forbidden.  
                              <h3>12. Independence Day</h3>
                              <strong>Date –</strong> 15th August, Tuesday
                              <br /><br />
                              It is the most essential <strong>BSE stock market holiday</strong> as it celebrates India's Independence from British rule. India achieved independence on 15 August 1947, after 200 years of struggle.
                              <h3>13. Ganesh Chaturthi</h3>
                              <strong>Date –</strong> 19th September, Tuesday
                              <br /><br />
                              This is one of the biggest Hindu festivals that celebrates Ganesha’s birth. Public pandals and clay idols are created to worship God.
                              <h3>14. Mahatma Gandhi Jayanti</h3>
                              <strong>Date –</strong> 2nd October, Monday
                              <br /><br />
                              This <strong>BSE holiday</strong> marks the birthday of Mahatma Gandhi, the father of our nation.
                              <h3>15. Dussehra</h3>
                              <strong>Date –</strong> 24th October, Tuesday
                              <br /><br />
                              Dussehra or Vijayadashmi celebrates the triumph of Lord Rama over Ravana. The event takes place when Navaratri ends.
                              <h3>16. Diwali Balipratipada</h3>
                              <strong>Date –</strong> 14th November, Tuesday
                              <br /><br />
                              Diwali is also known as the festival of lights and is famous across the globe. It celebrates the victory of good over evil and lights over darkness.  
                              <h3>17. Gurunanak Jayanti</h3>
                              <strong>Date –</strong> 27th November, Monday
                              <br /><br />
                              Guru Nanak Jayanti is another BSE holiday. On this day, Guru Nanak Dev Ji Gurpurab was born. As he founded the religion of Sikhism, this day is important to many people.  
                              <h3>18. Christmas</h3>
                              <strong>Date –</strong> 25th December, Monday
                              <br /><br />
                              Christmas is among the most celebrated festivals in the world and is the final one of the BSE <strong>stock market holidays.</strong> This holiday is a celebration of the birth of Jesus Christ, whose teachings form the foundation of Christianity.
                              <br/><br/>
                              Although the primary list of <strong>BSE holidays 2023</strong> is given here, BSE may modify the schedule. That's why it is important to keep an eye out on the official website for an updated holiday list. So, plan your trades according to the holiday list and the availability of shares.
                              <br/><br/>
                              Also, remember that market trading hours can differ according to the trading instrument.

                            </span>
                          </span>
                          <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                        </div>
                      </div>
                    </div> :
                        toggleState == 3 ?
                          <div className="row">

                          </div> :
                          ""
                }

              </div>
            </section>

          </div>


      }
    </div>
  );
}

export default Holidayscategory;
