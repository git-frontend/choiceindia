import React from "react";
import { useState } from "react";
import NewFormSection from '../Common-features/NewFormSection';
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import {
  useLocation,
} from 'react-router-dom';
import stockmarketholidays from "../../assets/images/share-market-holidays/pdf/stock-market-holidays-2024.pdf";
import nseholidays from "../../assets/images/share-market-holidays/pdf/nse-holidays-2024.pdf";
import bseholidays from "../../assets/images/share-market-holidays/pdf/bse-holidays-2024.pdf";
import mcxncdexholidays from "../../assets/images/share-market-holidays/pdf/mcx-ncdex-holidays-2024.pdf";
import { FaRegFilePdf } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from "react";
import holidaylist from '../../Data/StockMarketHolidays';
import FreeAmc from "../../assets/images/share-market-holidays/Free-Account-Opening.svg";
import LowDP from "../../assets/images/share-market-holidays/Free-Expert-Research.svg";
import NoAutoSquare from "../../assets/images/share-market-holidays/Low-DP-charges.svg";
import FreeResearch from "../../assets/images/share-market-holidays/Zero-Auto-Square.svg";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
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

  let holi ={
    "id":1,
    "holidayName":"New Year Day",
    "date":"January 01, 2024",
    "month":"January",
    "day":"Monday",
}

  const toggleTab = (index) => {
    setToggleState(index);
  };


  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      checkurl == 'stock-market-holidays' ? setToggleState(0) :

        checkurl == 'nse-holidays' ? setToggleState(1) :

          checkurl == 'bse-holidays' ? setToggleState(2) :

            checkurl == 'mcx-ncdex-holidays' ? setToggleState(3) :
              // console.log(holidaylist)
      FilterMonth()
      OtherHolidays()

    }
  }, [rendercount])

  useEffect(() => {
    if(toggleState === 3){
      monthFliter(month,3)
    }else{
    
      monthFliter(month)
      }
    


  }, [toggleState])


  let AllmonthValue = {};
  let nsebsevalue = {};
  let nseMonthvalue = {}
  let nsebsevalue2 = {};


  function OtherHolidays() {
    holidaylist.forEach((data) => {
      if (!nsebsevalue[data.title]) {
        nsebsevalue[data.title] = [];
        nsebsevalue[data.title].push(data)
      } else {
        nsebsevalue[data.title].push(data)
      }


    })



    setNselist(nsebsevalue.nsebse);
    nsebsevalue.nsebse.forEach((ele) => {
      if (!nseMonthvalue[ele.month]) {
        nseMonthvalue[ele.month] = [];
        nseMonthvalue[ele.month].push(ele)
      } else {
        nseMonthvalue[ele.month].push(ele)

      }

    })
    setnsefilter(nseMonthvalue)




  }


  function FilterMonth() {
    holidaylist.forEach((res) => {
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
  function monthFliter(id, value) {
    value ? setToggleState( ()=>value) : ""
    setmonth(id)
    setShowdata(() => false);
    if (value == 3 && nselist && nselist[0]?.id !=1) {
      nselist.unshift(holi)
    
    }else{
      if(nselist && nselist[0]?.id ===1){
        nselist.shift()
      }
    }
    
    

    if (toggleState == 1 || toggleState == 2 || toggleState == 3 ) {
      
      
      id == "All" ? setfilterlist(nselist) : setfilterlist(nsefilter[id])
    } 
    else {
      id == "All" ? setfilterlist(holidaylist) : setfilterlist(datalist[id])
    }



  }

 


  const sections = [
    {
      title: [
        'Open a ',<span className="bold_text"> Free Demat Account </span>,'\n ',
        '+ Free 1st Year AMC'
      ],
      images: [FreeAmc, LowDP, NoAutoSquare,FreeResearch],
      subtitle: ['Free Account Opening', 'Free Expert Research', 'Low DP \nCharges','Zero AMC For First Year'],
      alt:['Open Demat Account with Choice','Stock Research by Choice','DP Charges after Demat Account Opening','AMC Charges at Choice']
    },
   
  ];



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
                          <h1 className=" title-secnd1">Stock Market Holidays 2024</h1>
                          <p className="title_para res_para ">Here is the complete list of Indian stock market holidays for the year 2024.</p>
                        </div> :
                        toggleState == 1 ?
                          <div>
                            <h1 className=" title-secnd1">NSE Holidays 2024</h1>
                            <p className="title_para res_para ">Following are the complete NSE holidays 2024 list</p>
                          </div> :
                          toggleState == 2 ?
                            <div>
                              <h1 className=" title-secnd1">BSE Holidays 2024</h1>
                              <p className="title_para res_para ">Here is the complete list of BSE holidays for the year 2024.</p>
                            </div> :
                            toggleState == 3 ?
                              <div>
                                <h1 className=" title-secnd1">MCX/NCDEX Holidays 2024</h1>
                                <p className="title_para res_para">Following are the list of MCX & NCDEX holidays in 2024.</p>
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
                                            <div className="holiday-text">Stock Market Holidays 2024 List PDF</div>
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
                                              <div className="holiday-text">NSE Holidays 2024 List PDF</div>
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
                                                <div className="holiday-text">BSE Holidays 2024 List PDF</div>
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
                                                  <div className="holiday-text">MCX/NCDEX Holidays 2024 List PDF</div>
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
            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
            <NewFormSection sections={sections} />
            </GoogleReCaptchaProvider>
            <section className="readmoresection holiday-readmore">
              <div className="container">

                {
                  toggleState == 0 ?
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">Stock Market Holidays in 2024</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext"> The Indian stock market is an exciting proposition for investors to generate additional income. Every year, numerous brokers, dealers, and traders explore the market to deal in lucrative financial holdings.
                            <br /><br />
                            However, as an investor, you should know that the stock market does not operate 24x7. There are predefined stock market holidays during which there are no trading activities.
                            <br /><br />
                            So, the equity sector does not witness any trading activity. This article aims to inform you about the stock market holidays 2024 and their significance.
                            <br />
                            <span className="read-more-target restext">
                              Ensure you note these dates before planning a well-thought 2024 share market trading schedule.
                              <h3 className="third-heading-para">Indian Stock Market Holidays 2024</h3>
                              Here are the details of all the holidays that you will come across in the annual year 2024:
                              <h4 className="fourth-heading-para"><strong>1. Republic Day – 26th January 2024</strong></h4>
                              <strong>Day: Friday</strong>
                              <br /><br />
                              Republic Day is one of the most vibrant national festivals. It is the first day in the list of stock market holidays 2024 and has several astounding reasons for celebration.
                              <br /><br />
                              On this day, you can witness the national parade at Janpath and the extravagant display of the Indian army.

                              <h4 className="fourth-heading-para"><strong>2. Holi – 25th March 2024</strong></h4>
                              <strong>Day: Monday</strong>
                              <br /><br />
                              The festival of colors marks one of the important share market holidays 2024. It is a Hindu festival that holds prominence in the annual calendar.
                              <br /><br />
                              This holiday marks the celebration of the triumph of good over evil. It is a cultural festival and usually falls on the full moon.
                              <h4 className="fourth-heading-para"><strong>3. Ram Navami – 17th April 2024</strong></h4>
                              <strong>Day: Wednesday</strong>
                              <br /><br />
                              This festival celebrates the birthday of lord Rama. People make Panakam on this day and celebrate the occasion in fervor.
                              <br /><br />
                              It is one of the important stock market holidays, and you cannot perform any trading on this day.
                              <h4 className="fourth-heading-para"><strong>4. Mahavir Jayanti – 21st April 2024</strong></h4>
                              <strong>Day: Sunday</strong>
                              <br /><br />
                              This Jain festival celebrates the birth of lord Mahavir. On this day, people observe peace and spread the teachings of the last Tirthankara of avasarpini.
                              <br /><br />
                              It is a vital holiday, especially for people who practice Jainism.
                              <h4 className="fourth-heading-para"><strong>5. Good Friday – 29 March 2024</strong></h4>
                              <strong>Day: Friday</strong>
                              <br /><br />
                              This gazetted holiday honors the life of Jesus Christ. It commemorates Jesus's crucifixion and his final hours before the same.
                              <br /><br />
                              Notably, this day is the Friday before Easter Sunday. No transactions can be performed on share market holidays 2024.
                              <h4 className="fourth-heading-para"><strong>6. Dr. Baba Saheb Ambedkar Jayanti – 14th April 2024</strong></h4>
                              <strong>Day: Sunday</strong>
                              <br /><br />
                              Dr. B.R. Ambedkar was a well-known Indian social reformer and economist. He was the main architect of India’s constitution, and this holiday honors his pivotal contribution.
                              <br /><br />
                              So, his birthday is a national holiday in the country.
                              <h4 className="fourth-heading-para"><strong>7. Maharashtra Day – 01st May 2024</strong></h4>
                              <strong>Day: Wednesday</strong>
                              <br /><br />
                              This holiday marks the annual festival of Maharashtra, a western state in India. It celebrates the formation of the state.
                              <br /><br />
                              You can witness parades and cultural exhibitions of Maharashtra, one of the vital stock market holidays.
                              <h4 className="fourth-heading-para"><strong>8. Bakri Id – 17th June 2024</strong></h4>
                              <strong>Day: Monday</strong>
                              <br /><br />
                              Also known as the ‘holiday of sacrifice,’ this Islamic festival is another inclusion in the Indian stock market holidays 2024.
                              <br /><br />
                              The followers celebrate this festival to honor the willingness of Abraham to sacrifice his son. It highlights the act of obeying God’s command.
                              <h4 className="fourth-heading-para"><strong>9. Independence Day – 15th August 2024</strong></h4>
                              <strong>Day: Thursday</strong>
                              <br /><br />
                              This public day marks the celebration of India’s independence from British rule. On this day, no one can conduct any share market activities.
                              <br /><br />
                              You can witness extravagant parades and national programs on television and at various locations.
                              <h4 className="fourth-heading-para"><strong>10. Ganesh Chaturthi – 07th September 2024</strong></h4>
                              <strong>Day: Saturday</strong>
                              <br /><br />
                              This holiday commemorates the Hindu god of wisdom, Lord Ganesha. People install clay idols and pray to Lord Ganpati for prosperity and wisdom.
                              <br /><br />
                              Notably, this day is the tenth off-day in the list of stock market holidays.
                              <h4 className="fourth-heading-para"><strong>11. Mahatma Gandhi Jayanti – 02nd October 2024</strong></h4>
                              <strong>Day: Wednesday</strong>
                              <br /><br />
                              This holiday marks the celebration of Mahatma Gandhi’s birth anniversary. It is a national holiday that includes various educational programs to recall Gandhiji’s teachings.
                              <br /><br />
                              Like other festivals, all stock market activities are inactive on this day.
                              <h4 className="fourth-heading-para"><strong>12. Dussehra – 12th October 2024</strong></h4>
                              <strong>Day: Saturday</strong>
                              <br /><br />
                              This festival is a religious holiday to celebrate the triumph of Lord Rama over the demon king Ravana. Notably, this day ends the auspicious Durga Puja festival and consists of various religious rituals.
                              <h4 className="fourth-heading-para"><strong>13. Diwali Balipratipada – 02nd November 2024</strong></h4>
                              <strong>Day: Saturday</strong>
                              <br /><br />
                              Diwali is the festival of lights and is a religious Hindu holiday. People enjoy lighting firecrackers and celebrating through the devotion of Goddess Laxmi.
                              <br /><br />
                              However, the stock market has ‘Muhurat Trading’, which takes place for an hour during the Diwali season. The normal market hours will begin at 06:15 p.m. and commence at 07:15 p.m. The closing session of this trading is at 07:35 p.m.
                              <h4 className="fourth-heading-para"><strong>14. Guru Nanak Jayanti – 15th November 2024</strong></h4>
                              <strong>Day: Friday</strong>
                              <br /><br />
                              This is an important Sikh festival that celebrates the birth of Guru Nanak, the first mentor in Sikhism. It is one of the final stock market holidays of 2024, and you cannot trade on this holiday.
                              <h4 className="fourth-heading-para"><strong>15. Christmas – 25th December 2024</strong></h4>
                              <strong>Day: Wednesday</strong>
                              <br /><br />
                              The final off day in the stock market holidays is the Christian day of Christmas. On this holiday, Christians celebrate the birth of Jesus Christ.
                              <br /><br />
                              It is a worldwide cultural holiday that has celebrations all across India.
                              <br /><br />
                              The stock market holidays 2024 list contains 15 off days that do not fall on weekends. So, as an investor, you need to keep track of these holidays for better planning.
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
                          <h2 className="secttitle text-center">NSE Holidays 2024 List</h2>
                        </div>
                        <div className="col-md-12">
                          <div className="para px-3">
                            <input type="checkbox" className="read-more-state" id="post-1" />
                            <span className="read-more-wrap restext"> The National Stock Exchange of India (NSE) is one of the leading stock exchanges globally. Founded in 1992, the NSE was established to usher in accessibility and transparency to the Indian market.
                              <br /><br />
                              The institution offers investors several options, from equities and mutual funds to currency and commodities. However, trading is not available on all days.
                              <br /><br />
                              For instance, regular market sessions on weekdays last from 9:15 a.m. to 3:30 p.m. Following a 10-minute hiatus, closing sessions begin at 3:40 p.m. and end at 4:00 p.m. The NSE is also closed for trading on Saturdays and Sundays.
                              <br />
                              <span className="read-more-target restext">
                                If you are a frequent investor, you must keep track of the NSE holidays to maintain a consistent trading routine.
                                <br /><br />
                                Below, you will find a complete list of the same.

                                <h3 className="third-heading-para">NSE Trading Holidays in 2024</h3>
                                There are 19 NSE trading holidays in 2024. However, since Mahashivratri, Eid-Ul-Fitr, Muharram, and Diwali-Laxmi Pujan fall on either Saturday or Sunday, they are effectively counted out.
                                <br /><br />
                                So, here are the 15 remaining ones that you should be mindful of:
                                <h4 className="fourth-heading-para"><strong>1. Republic Day</strong></h4>
                                <strong>Date: </strong> 26th January
                                <br />
                                <strong>Day: </strong>Friday
                                <br /><br />
                                One of the first NSE holidays is Republic Day. This holiday marks the date on which the Constitution of India finally came into effect. Replacing the Government of India Act 1935 as the nation’s governing document, this was a direct representation of the country’s sovereign status.
                                <h4 className="fourth-heading-para"><strong>2. Holi</strong></h4>
                                <strong>Date: </strong>25th March
                                <br />
                                <strong>Day:</strong> Monday
                                <br /><br />
                                Stemming from ancient Hindu traditions, Holi marks the beginning of spring and is believed to symbolize the triumph of good over evil. While several activities are associated with the festival, the most prominent one involves people playing with colors.
                                <h4 className="fourth-heading-para"><strong>3. Ram Navami</strong> </h4>
                                <strong>Date:</strong> 17th April
                                <br />
                                <strong>Day:</strong> Wednesday
                                <br /><br />
                                Third on the NSE trading holidays list is Ram Navami. A Hindu festival, it celebrates the deity Vishnu being born as Ram.
                                <h4 className="fourth-heading-para"><strong>4. Good Friday </strong></h4>
                                <strong>Date:</strong> 29th March
                                <br />
                                <strong>Day:</strong> Friday
                                <br />
                                <br />
                                Alternatively known as Holy or Great Friday, Good Friday commemorates the crucifixion of Jesus Christ and his subsequent death at Calvary. It is one of the most revered religious occasions in the Christian community.
                                <h4 className="fourth-heading-para"><strong>5. Maharashtra Day</strong></h4>
                                <strong>Date:</strong> 1st May
                                <br />
                                <strong>Day:</strong> Wednesday
                                <br /> <br />
                                One of the more regionally focused NSE holidays in 2024, Maharashtra Day celebrates the formation of the state and commemorates the reorganization and division of the Bombay State in 1960.
                                <h4 className="fourth-heading-para"><strong>6. Bakri Eid</strong></h4>
                                <strong>Date:</strong> 17th June
                                <br />
                                <strong>Day:</strong> Monday
                                <br />
                                <br />
                                Also called Eid al-Adha, Bakri Eid is one of the most significant religious occasions in the Islamic community. The festival honors Abraham’s willingness to sacrifice his son, Ishmael, to demonstrate his faith and obedience to God.
                                <h4 className="fourth-heading-para"><strong>7. Independence Day</strong></h4>
                                <strong>Date:</strong> 15th August
                                <br />
                                <strong>Day:</strong> Thursday
                                <br /> <br />
                                One of the most prominent NSE holidays, Independence Day marks an end to India’s 200-year struggle for freedom from British rule and its beginning as a sovereign, independent nation.
                                <h4 className="fourth-heading-para"><strong>8. Mahatma Gandhi Jayanti</strong></h4>
                                <strong>Date:</strong> 2nd October
                                <br />
                                <strong>Day:</strong> Wednesday
                                <br /><br />
                                Among the more notable NSE trading holidays is Gandhi Jayanti. Meant to celebrate the birth of Mohandas Karamchand Gandhi and his role in India’s fight for independence, the occasion also doubles as the International Day of Non-Violence.
                                <h4 className="fourth-heading-para"><strong>9. Gurunanak Jayanti</strong></h4>
                                <strong>Date: </strong> 15th November
                                <br />
                                <strong>Day: </strong> Friday
                                <br /><br />
                                Celebrating the birth of the first Sikh guru and the founder of the religion, Gurunanak Jayanti is among the most revered festivals in the Sikh community.
                                <h4 className="fourth-heading-para"><strong>10. Christmas</strong></h4>
                                <strong>Date: </strong> 25th December
                                <br />
                                <strong>Day: </strong>Monday
                                <br />
                                <br />
                                One of the most culturally significant holidays in the Christian community, Christmas marks the birth of Jesus Christ.  This is also the final one of the NSE holidays for 2024.
                                <br /><br />
                                Even though this article lists all of the NSE holidays for 2024, it is critical to note that NSE reserves the right to close the market on any given day. In addition, the Exchange can open trading on a previously declared holiday.
                                <br /><br />
                                Apart from that, NSE may also reduce, extend, advance, or postpone trading hours at its discretion.
                                <br /><br />
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
                            <h2 className="secttitle text-center">BSE Holidays 2024</h2>
                          </div>
                          <div className="col-md-12">
                            <div className="para px-3">
                              <input type="checkbox" className="read-more-state" id="post-1" />
                              <span className="read-more-wrap restext"> The Bombay Stock Exchange (BSE) is among the largest and oldest stock exchanges globally in India. It provides multiple earning opportunities to investors who want to explore the stock market. However, the trading opportunities are not available all day.
                                <br /><br />
                                If you are an investor, it’s important to keep the main operating hours of the BSE in mind. For instance, on weekdays, trade-in hours are 9.15 a.m. to 3.30 p.m. Pre-market open trading time is between 9.00 to 9.15 a.m. Furthermore, both Saturday and Sunday are holidays.
                                <br />
                                <span className="read-more-target restext">
                                  <br />
                                  Besides, there are many BSE holidays when you can’t trade. Take a look at the BSE holidays 2024 list to plan your trading strategy successfully.
                                  <h3 className="third-heading-para">BSE Stock Market Holidays in India 2024</h3>
                                  Let’s delve into the major BSE <Link to="/stock-market-holidays" onClick={() => setToggleState(0)}>stock market holidays of 2024</Link> and their significance.
                                  <h4 className="fourth-heading-para"><strong>1. Republic Day</strong></h4>
                                  <strong>Date – 26th January, Friday</strong>
                                  <br /><br />
                                  It is the first holiday on the list of BSE trading holidays. Republic Day marks the day when the constitution of the country was established. The government organizes several events and parades on this day.
                                  <h4 className="fourth-heading-para"><strong>2. Maha Shivaratri</strong></h4>
                                  <strong>Date –  8th March, Friday</strong>
                                  <br /><br />
                                  A popular BSE holiday, Maha Shivaratri is observed as the wedding day of Shiva and Parvati. The event usually takes place at night.
                                  <h4 className="fourth-heading-para"><strong>3. Holi</strong></h4>
                                  <strong>Date – 25th March, Monday</strong>
                                  <br /><br />
                                  Known as the festival of colors, Holi signifies the victory of good over evil. People celebrate it by using colors and arranging events.
                                  <h4 className="fourth-heading-para"><strong>4. Ram Navami</strong></h4>
                                  <strong>Date – 17th March, Wednesday</strong>
                                  <br /><br />
                                  Ram Navami is next on the list of BSE stock market holidays. It is a celebration of the body of Ram, as an avatar of Vishnu.
                                 
                                  <h4 className="fourth-heading-para"><strong>5. Good Friday</strong></h4>
                                  <strong>Date – 29th March, Friday</strong>
                                  <br /><br />
                                  A famous BSE trading holiday, Good Friday, commemorates the crucifixion and death of Jesus. It is also called Holy Friday by the Christian community.
                                  <h4 className="fourth-heading-para"><strong>6. Dr.Baba Saheb Ambedkar Jayanti</strong></h4>
                                  <strong>Date – 14th April, Sunday</strong>
                                  <br /><br />
                                  Also known as Bhim Jayanti, this holiday marks the birthday of Dr.Baba Saheb Ambedkar. He was a social reformer who helped draft the constitution and fought for India’s independence.
                                  <h4 className="fourth-heading-para"><strong>7. Maharashtra Day</strong></h4>
                                  <strong>Date – 1st May, Wednesday</strong>
                                  <br /><br />
                                  Maharashtra Day is an important holiday as it celebrates the formation of Maharashtra as a state.
                                  <h4 className="fourth-heading-para"><strong>8. Id-ul-Fitr</strong></h4>
                                  <strong>Date – 11th May, Thursday</strong>
                                  <br /><br />
                                  Id-ul-Fitr is also called the festival of sweets and is celebrated by the Muslim community as the end of Ramadan.
                                  <h4 className="fourth-heading-para"><strong>9. Bakri Eid</strong></h4>
                                  <strong>Date – 17th June, Monday</strong>
                                  <br /><br />
                                  Bakri Eid is an essential Muslim holiday. It is a representation of how Abraham sacrificed his son Ishmael to God.
                                  <h4 className="fourth-heading-para"><strong>10. Muharram</strong></h4>
                                  <strong>Date – 17th August, Wednesday</strong>
                                  <br /><br />
                                  After Ramadan, Muharram is considered to be the second holiest month. During this time, warfare is completely forbidden.
                                  <h4 className="fourth-heading-para"><strong>11. Independence Day</strong></h4>
                                  <strong>Date – 15th August, Thursday</strong>
                                  <br /><br />
                                  It is the most essential BSE stock market holiday as it celebrates India's Independence from British rule. India achieved independence on 15 August 1947, after 200 years of struggle.
                                  <h4 className="fourth-heading-para"><strong>12. Mahatma Gandhi Jayanti</strong></h4>
                                  <strong>Date – 2nd October, Wednesday</strong>
                                  <br /><br />
                                  This BSE holiday marks the birthday of Mahatma Gandhi, the father of our nation.
                                  <h4 className="fourth-heading-para"><strong>13. Gurunanak Jayanti</strong></h4>
                                  <strong>Date – 15th November, Friday</strong>
                                  <br /><br />
                                  Guru Nanak Jayanti is another BSE holiday. On this day, Guru Nanak Dev Ji Gurpurab was born. As he founded the religion of Sikhism, this day is important to many people.
                                  <h4 className="fourth-heading-para"><strong>14. Christmas</strong></h4>
                                  <strong>Date – 25th December, Wednesday</strong>
                                  <br /><br />
                                  Christmas is among the most celebrated festivals in the world and is the final one of the BSE stock market holidays. This holiday is a celebration of the birth of Jesus Christ, whose teachings form the foundation of Christianity.
                                  <br /><br />
                                  Although the primary list of BSE holidays 2024 is given here, BSE may modify the schedule. That's why it is important to keep an eye out on the official website for an updated holiday list. So, plan your trades according to the holiday list and the availability of shares.
                                  <br /><br />
                                  Also, remember that market trading hours can differ according to the trading instrument.

                                </span>
                              </span>
                              <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                            </div>
                          </div>
                        </div> :
                        toggleState == 3 ?
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="secttitle text-center">A List of MCX Holidays in 2024</h2>
                            </div>
                            <div className="col-md-12">
                              <div className="para px-3">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap restext"> The multi-commodity exchange (MCX) is an established commodity derivatives exchange in India registered with the Securities and Exchange Board of India (SEBI). It is the largest commodity exchange in India, allowing users to freely buy and sell commodities like metals, oil or even coffee.
                                  <br /><br />
                                  MCX offers an attractive option for investors looking to diversify beyond stocks or bonds and invest in commodities. The trading window opens at 9 AM and closes at 11:30 PM, operational from Monday to Friday.
                                  <br />
                                  <span className="read-more-target restext">
                                    <br />
                                    Usually, the MCX trading window only remains closed for the weekend. But the exchange has also specified a list of holidays that coincide with major Indian festivals. Read on to understand why it's important to keep track of MCX holidays 2024 and get information about each designated holiday.
                                    <h3 className="third-heading-para">Why You Should Track MCX Holidays</h3>
                                    On standard trading days, MCX conducts two sessions - one in the morning and another in the evening. Morning sessions begin at 9 AM and continue until 5 PM, while the evening session starts at 5 PM and ends by 11:30 PM. MCX also constantly alters the closing times according to the changes in daylight saving hours.
                                    <br /><br />
                                    If you are an investor who regularly deals with commodities, it is natural that you are aware of the market movements that influence the price of these commodities. Staying updated about upcoming MCX holidays can help you better plan your strategy and allow you to decide whether to hold your assets for another trading day or sell them before they depreciate in value.
                                    <br /><br />
                                    Every year, the multi-commodity exchange decides on a list of holidays and releases a circular to inform investors. The exchange can also alter or change these holidays with appropriate prior notice.
                                    <h3 className="third-heading-para">MCX Trading Holidays for 2024</h3>
                                    The circular for MCX holidays 2024 in India has already been released. According to the contents of the notice, here are the days on which the commodity market will either remain completely closed or close off a particular trading section.
                                    <h4 className="fourth-heading-para"><strong>1st January 2024 - New Year's Day</strong></h4>
                                    <strong>Status:</strong> The evening session remains closed.
                                    <br /><br />
                                    Traders and investors can utilise the morning session of the first day of the year to indulge in the market. But as soon as it is 5 PM, MCX will end the trading window, and you can only buy and sell commodities starting from 9 AM the next day.
                                    <h4 className="fourth-heading-para"><strong>26th January 2024 - Republic Day</strong></h4>
                                    <strong>Status:</strong> Closed all day.
                                    <br /><br />
                                    2024 will mark the 74th republic day for India. Every year, the 26th of January is marked as a national holiday for drafting the Indian Constitution on the same date in the year 1950. The commodity trading exchange will remain shut to honour this day.
                                    

                                    <h4 className="fourth-heading-para"><strong>25th March 2024 - Holi</strong></h4>
                                    <strong>Status:</strong> The commodity market is shut for the entire day.
                                    <br /><br />
                                    The festival of colours is celebrated with pomp and celebration around the country. Since the primary celebrations of Holi occur during the early morning hours and extend up to the afternoon, MCX has decided to close off the morning session and strictly limit the operational hours to the evening session.
                                    <h4 className="fourth-heading-para"><strong>17th March 2024 - Ram Navami</strong></h4>
                                    <strong>Status:</strong> The commodity market is shut for the entire day
                                    <br /><br />
                                    The birth of the Indian god, Rama, is regarded as one of the most key events in India. Celebrations in various cities last throughout the day and extend to later hours of the night. Considering this, MCX has decided to shut off trading for the day.
                                    <h4 className="fourth-heading-para"><strong>29th March 2024 - Good Friday</strong></h4>
                                    <strong>Status:</strong> Closed for the entire day.
                                    <br /><br />
                                    Every year, Good Friday is celebrated to commemorate the crucifixion of Jesus, which led to his death. It is regarded as one of the most important days for Christians and is synonymous with prayers and fasting. The commodity trading market considers this and grants investors an off-day.

                                    <h4 className="fourth-heading-para"><strong>14th April 2024 - Dr. Baba Saheb Ambedkar Jayanti</strong></h4>
                                    <strong>Status:</strong> All sessions closed.
                                    <br /><br />
                                    Marking the birth of the architect of the Indian constitution, the 14th of April is celebrated across the world as an ode to the celebrated Dr Baba Saheb Ambedkar. In recognition of his achievements for independent India, MCX has suspended all daily trading activities.
                                    <h4 className="fourth-heading-para"><strong>11th April 2024 - Ramzan Eid</strong></h4>
                                    <strong>Status:</strong> Completely closed.
                                    <br /><br />
                                    Ramzan Eid marks the end of a 30-day fasting period for Muslims, where they do not consume food or water from the first light of dawn to the setting of the sun. Ramzan Eid is a day of celebration, with feasts and other activities that last the entire day. Hence, MCX has included the 22nd of April as a holiday for the commodity trading space.

                                    <h4 className="fourth-heading-para"><strong>1st May 2024 - Maharashtra Day</strong></h4>
                                    <strong>Status:</strong> Only morning session closed.
                                    <br /><br />
                                    It marks the day on which the prosperous state of Maharashtra was formed. Maharashtra Day is a state-wide holiday celebrated with a flag hoisting and function. Hence, the commodity exchanges have decided to address the early morning festivities and declare a holiday for the morning session.
                                    <h4 className="fourth-heading-para"><strong>17th July 2024 - Muharram</strong></h4>
                                    <strong>Status:</strong> Morning session closed.
                                    <br /><br />
                                    The first day of the year in the Islamic calendar is crucial for the Islamic community, marking the start of the holy month. As an ode to the community celebrations, the commodity exchange only permits trading in the evening session.

                                    <h4 className="fourth-heading-para"><strong>15th August 2024 - Independence Day</strong></h4>
                                    <strong>Status:</strong> Closed for the entire day.
                                    <br /><br />
                                    One of the three national holidays in India, Independence day marks a memorable moment in Indian history. On this day in 1947, India was finally freed from British Rule and ushered in a new era. The significance of this feat compels MCX to suspend all trading activities for the day.

                                    <h4 className="fourth-heading-para"><strong>7th September 2024 - Ganesh Chaturthi</strong></h4>
                                    <strong>Status:</strong> Morning session paused.
                                    <br /><br />
                                    The commodity market witnesses no activity during the morning of the start of Ganesh Chaturthi, a festival where people install idols of Ganpati in their houses for 1, 3, 5, 7 or 11 days.

                                    <h4 className="fourth-heading-para"><strong>2nd October 2024 - Gandhi Jayanti</strong></h4>
                                    <strong>Status:</strong> All trading sessions closed.
                                    <br /><br />
                                    The birthday of the father of the nation is celebrated as a national holiday in India. Gandhi Jayanti is characterised by prayer services and tributes to Mahatma Gandhi all over India. Hence, it is no surprise that the commodity market remains shut for the entire day on 2nd October.
                                    <h4 className="fourth-heading-para"><strong>1st November 2024 - Laxmi Poojan</strong></h4>
                                    <strong>Status:</strong> Morning sessions off.
                                    <br /><br />
                                    The third day of Diwali is celebrated with devotion throughout the country. Since the puja primary takes place during the initial hours of the day, MCX has decided to close the morning trading sessions for this day.

                                    <h4 className="fourth-heading-para"><strong>15th November 2024 - Guru Nanak Jayanti</strong></h4>
                                    <strong>Status:</strong> The morning trading session was called off.
                                    <br /><br />
                                    The birth of Guru Nanak, the founder of Sikhism, is celebrated all over the country. It is the most important festival for the Sikh community. MCX has decided to continue only the evening trading sessions during this festival.

                                    <h4 className="fourth-heading-para"><strong>25th December 2024 - Christmas</strong></h4>
                                    <strong>Status:</strong> Full day off.
                                    <br /><br />
                                    Christmas is marked by decorations, lit-up trees and several types of sweets to celebrate the birth of Jesus Christ. It is a religious and cultural celebration that takes up the entire day, making it possible for MCX to pause all trading activities on the 25th of December.
                                    <br /><br />
                                    India is home to only two major commodity exchanges- MCX and NCDEX. The list of NCDEX holidays 2024 matches the ones specified by MCX. Hence, the entire commodity market follows a similar pattern in terms of holidays.
                                    <br /><br />
                                    So, why not keep this list handy and start derivative trading if you haven’t yet? Simply <Link to="/open-free-demat-account"> open a demat account with Choice India </Link>to be eligible for executing trades in the commodity market and diversify your portfolio!

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
