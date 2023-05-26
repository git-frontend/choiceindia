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
      checkurl == 'stock-market-holidays'?setToggleState(0):

      checkurl == 'nse-holidays' ? setToggleState(1):

      checkurl == 'bse-holidays'? setToggleState(2):

      checkurl == 'mcx-ncdex-holidays'? setToggleState(3):
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


    console.log("month a",nseMonthvalue)


  }


  function FilterMonth() {
    holidaylist.forEach((res) => {
      console.log(res)
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
    // setIsActive(current => !current);


  }

  // console.log("month value",isActive)







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
                          <h1 className=" title-secnd1">Upcoming Dividend</h1>
                          <p className="title_para res_para">Find out the list of upcoming dividend paying stocks in 2023.</p>
                        </div> :
                        toggleState == 1 ?
                          <div>
                            <h1 className=" title-secnd1">Upcoming Bonus Shares</h1>
                            <p className="title_para res_para ">Get the list of upcoming bonus shares in 2023.</p>
                          </div> :
                          toggleState == 2 ?
                            <div>
                             <h1 className=" title-secnd1">Upcoming Stock Splits</h1>
                              <p className="title_para res_para">View the list of upcoming stock splits in 2023 in India.</p>
                            </div> :
                            toggleState == 3 ?
                              <div>
                               <h1 className=" title-secnd1">Upcoming AGM</h1>
                                <p className="title_para res_para ">Following are the complete Upcoming AGM 2023 list.</p>
                              </div> :
                               toggleState == 4 ?
                               <div>
                                <h1 className=" title-secnd1">Upcoming Board Meetings</h1>
                                <p className="title_para res_para ">Following are the complete list of upcoming board meetings in 2023.</p>
                               </div> :
                                toggleState == 5 ?
                                <div>
                                  <h1 className=" title-secnd1">Upcoming Rights Issue</h1>
                                  <p className="title_para res_para">Check out the list of upcoming rights issues of shares in 2023.</p>
                                </div> :
                              ""
                    }



                  </div>
                  <div className="col-xl-10 col-md-12" id="best-stock">
                    <ul className="list-group list_group1  holiday-list">
                      <li className={toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} > <Link className="urllinks1" to="/upcoming-dividend-paying-stocks" onClick={() => { setToggleState(0), monthFliter(month, 0) }} >Dividend </Link></li>
                      <li className={toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} ><Link className="urllinks1" to="/upcoming-bonus-shares" onClick={() => { setToggleState(1), monthFliter(month, 1) }} >Bonus Shares</Link></li>
                      <li className={toggleState === 2 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/upcoming-stock-splits" onClick={() => { setToggleState(2), monthFliter(month, 2) }} >Splits</Link></li>
                      <li className={toggleState === 3 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/upcoming-agm" onClick={() => { setToggleState(3), monthFliter(month, 3) }}>AGM</Link></li>
                      <li className={toggleState === 4 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/upcoming-board-meeting" onClick={() => { setToggleState(4), monthFliter(month, 4) }}>Board Meetings</Link></li>
                      <li className={toggleState === 5 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/upcoming-rights-issue" onClick={() => { setToggleState(5), monthFliter(month, 5) }}>Rights</Link></li>
                    </ul>

                  </div>
                  {/* <div>
                    {
                      showdata ?
                        <p className="title_para title_para-second">Trading Holidays in 2023</p> :
                        <p className="title_para title_para-second">Stock Market Holidays in {month} 2023</p>
                    }



                  </div> */}
                </div>
              </div>
            </section>


            <section className="main-parent holiday-parent pb-5">
              <div className="container">
                <div className="content-tabs best-stock-tabs-cont active-content holiday-content mb-5">
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
                                              </div>
                                            </div> :
                                             toggleState == 4 ?
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
                                               </div>
                                             </div> :
                                             toggleState == 5 ?
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
            <section className="readmoresection holiday-readmore">
              <div className="container">

                {
                  toggleState == 0 ?
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">Upcoming Dividend in 2023</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext">Dividend is sharing profit with shareholders by a company. The Dividend section will provide the list of upcoming dividend paying stocks who have announced dividends for their shareholders. Investors and traders will be able to track the highest dividend paying stocks to modify their portfolios accordingly. You can also use the customize option by modifying your date to understand which are the best dividend paying stocks for the long-term.
                            <br />
                            <h3 className="third-heading-para"><strong>Upcoming Dividend Paying Stocks</strong></h3>
                              You can browse the Dividends section and view the Dividend (%) to understand upcoming dividend stocks which are paying the highest dividend in 2023.
                              <br/>
                            <span className="read-more-target restext">
                              <h3 className="third-heading-para">How Do Dividends Work?</h3>
                              <ul>
                                <li>You purchase a certain number of shares. For example, let’s say you own 100 shares of WIPRO stock and WIPRO announced a quarterly dividend payout on 14th January, 2023 of Rs. 50 per equity share to all shareholders.</li>
                                <li>Multiply the dividend by the number of shares. In this case: 50*100 i.e., you receive a quarterly payment of Rs. 500.</li>
                                <li>The company usually sends a cheque or makes a payment into your brokerage account.</li>
                                <li>Dividend Reinvestment Programs or DRIPs are offered by companies if you would like to reinvest the payout back into company stock.</li>
                              </ul>
                            </span>
                          </span>
                          <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                        </div>
                      </div>
                    </div> :
                    toggleState == 1 ?
                    <div className="row">
                    <div className="col-md-12">
                      <h2 className="secttitle text-center">Upcoming Bonus Shares in 2023</h2>
                    </div>
                    <div className="col-md-12">
                      <div className="para px-3">
                        <input type="checkbox" className="read-more-state" id="post-1" />
                        <span className="read-more-wrap restext">Bonus Shares are additional shares offered to the shareholders of the company. The company can opt to give out its accumulated earnings in the form of Bonus Shares instead of Dividends.
                          <br />
                          <h3 className="third-heading-para"><strong>Upcoming Bonus Shares in India</strong></h3>
                            This section lists the companies likely to declare Bonus Shares in 2023. It will dynamically be updated as and when the announcement is made. The ratio of Bonus Shares is given alongside the date of the announcement.
                            <br/>
                          <span className="read-more-target restext">
                            <h3 className="third-heading-para">Why Are Companies Issuing Bonus Shares?</h3>
                            <br/>
                             <strong>To increase retail participation:</strong> When the price of a share is high it becomes difficult for retail investors to purchase shares of a particular company. When the number of shares increases the price goes down making it accessible to retail traders. <br /><br />
                             <strong>To increase liquidity base:</strong> Issuing Bonus Shares increases the number of outstanding shares. This leads to higher participation of traders, which in turn increases the liquidity of the shares.<br /><br />
                             <strong>To reward investors:</strong> Rewarding the investors for their confidence and commitment to the company, which also helps in boosting the investor sentiment towards the company.<br />
                          </span>
                        </span>
                        <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                      </div>
                    </div>
                  </div> :
                      toggleState == 2 ?
                      <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">Upcoming Stock Splits in 2023</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext">Splits are a company’s way of increasing outstanding shares while lowering the price of a stock. Share Splits make the stock within the reach of smaller investors.
                            <br />
                            <h3 className="third-heading-para"><strong>Upcoming Stock Splits in India</strong></h3>
                              In this section you can view the upcoming share splits as well as the recent stock splits announcements and even modify your search criteria by choosing a custom date range. The value of the share before and after the split will be provided alongside.
                              <br />
                            <span className="read-more-target restext">
                              <h3 className="third-heading-para">Differences between Bonus Shares and Share Split</h3>
                              <ul>
                                <li>Bonus Share is an additional share offered and Share Split is when the share is divided</li>
                                <li>Bonus Shares are available to existing shareholders whereas existing and new investors can benefit from the Share Split</li>
                                <li>Face value of the share in Stock Splits is reduced to half while in Bonus Shares the face value remains the same</li>
                              </ul>
                              <h3 className="third-heading-para">Similarities between Bonus Shares and Share Split</h3>
                              <ul>
                                <li>Bonus Shares and Stock Splits both increase the quantity of shares</li>
                                <li>Bonus Shares and Stock Splits do not change the fundamentals of the company</li>
                              </ul>
                            </span>
                          </span>
                          <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                        </div>
                      </div>
                    </div> :
                      toggleState == 3 ?
                      <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">Upcoming AGM</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext">AGM stands for Annual General Meeting and EGM stands for Extraordinary General Meeting. AGM is a mandatory yearly meeting convened by the Board to talk about the company’s performance, profitability and future plans. EGM is held when business matters need to be discussed and resolved by the company with immediate effect.
                            <br /><br />
                            This section shows the list of upcoming AGM and EGM meetings announced by the company.
                            <br/>
                            <span className="read-more-target restext">
                              <h3 className="third-heading-para">Benefits of Annual General Meetings for Shareholders</h3>
                              <ul>
                                <li>One can get first-hand information regarding the company’s direction</li>
                                <li>It invariably has an effect on the company’s stock price, so the Trader / Investor can plan their trades or investments</li>
                                <li>Most important announcements are kept for the AGM. The trader can find out if the management is aligned with shareholder's interests</li>
                                <li>For every positive and progressive development, the company’s stock witnesses a significant movement simultaneously</li>
                              </ul>
                              <h3 className="third-heading-para">How to use this section?</h3>
                              <ul>
                                <li>Goto Tools from the website menu. Scroll to Calendars -&gt; Event Calendar</li>
                                <li>From the Event Calendar page select AGM/EGM</li>
                                <li>Select from This Year - Today - Tomorrow - This Week - Next Week - Custom</li>
                                <li>In Custom you can enter the Date Range from the Date box</li>
                              </ul>
                              <h3 className="third-heading-para">AGM Meeting Dates</h3>
                              AGM meeting dates help you to plan your investments / trades as important announcements are made at AGMs.
                            </span>
                          </span>
                          <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                        </div>
                      </div>
                    </div> :
                     toggleState == 4 ?
                     <div className="row">
                     <div className="col-md-12">
                       <h2 className="secttitle text-center">Latest & Forthcoming Board Meetings Dates</h2>
                     </div>
                     <div className="col-md-12">
                       <div className="para px-3">
                         <input type="checkbox" className="read-more-state" id="post-1" />
                         <span className="read-more-wrap restext">A Board Meeting is a gathering of the Board of Directors of a company. This meeting takes place in order to discuss issues pertaining to the company, evaluate its performance, monitor management, review strategic matters and announce new plans; all these factors will determine the value of the company in the future.
                           <br />
                           <h3 className="third-heading-para"><strong>Upcoming Board Meeting of NSE & BSE Listed Companies</strong></h3>
                             This section will show you the list of the upcoming board meeting dates of NSE & BSE listed companies. Media plays an active role in relaying every significant announcement or development which has a direct bearing on the stocks.
                             <br/>
                           <span className="read-more-target restext">
                             <h3 className="third-heading-para">Why Is It Important To Keep Track Of Upcoming Board Meeting Dates?</h3>
                             It is important to keep a track of the outcome of these meetings as they tend to have an impact on respective stocks.
                             <br /><br />
                             With the help of a list of the latest Board Meeting, traders/investors get an opportunity to plan their portfolio.
                             <br /><br />
                             While the value of the information shared during board meetings is not limited to a specific category; it is important to know that as compared to long-term investors, board meetings are extremely important to short-term investors.
                             <br /><br />
                             The conducting of a company board meeting within scheduled intervals helps build more transparency and provides clarity to traders/investors which eventually help them make better investment decisions.
                           </span>
                         </span>
                         <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                       </div>
                     </div>
                   </div> :
                     toggleState == 5 ?
                     <div className="row">
                     <div className="col-md-12">
                       <h2 className="secttitle text-center">Upcoming Rights Issue in 2023</h2>
                     </div>
                     <div className="col-md-12">
                       <div className="para px-3">
                         <input type="checkbox" className="read-more-state" id="post-1" />
                         <span className="read-more-wrap restext">Rights issue or rights offering are shares issued by a company for its shareholders. Only existing shareholders have the right to subscribe to these shares. Right Issue is offered when a company wants to raise capital for expansion.
                           <br />
                           <h3 className="third-heading-para"><strong>Upcoming Rights Issue of Shares</strong></h3>
                             This section provides an updated list of the upcoming rights issue announced by the companies. The information can help investors modify their portfolio or increase their investments in particular companies.
                             <br/>
                           <span className="read-more-target restext">
                             <h3 className="third-heading-para">Benefits of Rights Issue for Shareholders?</h3>
                              <ul>
                                <li>Rights Issue are offered to existing shareholders at a discounted price</li>
                                <li>Shareholders retain the control of the company since Rights Issue are only offered to existing shareholders</li>
                                <li>The value of current holdings or shares are not diluted. The perceived dip in the value of the share is compensated by offering new shares at a discounted price</li>
                                <li>It enhances company brand image and perception. This eventually helps increase the value of the existing shares and by extension the shareholder value</li>
                              </ul>
                           </span>
                         </span>
                         <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                       </div>
                     </div>
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
