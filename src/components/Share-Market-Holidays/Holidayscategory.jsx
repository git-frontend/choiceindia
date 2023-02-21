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
  const [nsefilter, setnsefilter]=useState({})
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
  let nsebsevalue={};
  let nseMonthvalue={}
  
 

  function OtherHolidays(){
    holidaylist.forEach((data) => {
      // console.log("for nse",data)
      if(!nsebsevalue[data.title]){
        nsebsevalue[data.title]=[];
        nsebsevalue[data.title].push(data)
      }else{
        nsebsevalue[data.title].push(data)
      }
     

      })

      
    
    setNselist(nsebsevalue.nsebse);
    // console.log("new r3w",nsebsevalue)

    nsebsevalue.nsebse.forEach((ele)=>{
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
  function monthFliter(id,value) {
    value ? setToggleState(value):""
    // console.log (toggleState,"toggle3")
    setmonth(id)
    setShowdata(() => false);
   
    if(toggleState==1 || toggleState==2 ||toggleState==3){
      id == "All" ? setfilterlist(nselist) : setfilterlist(nsefilter[id])
    }
    else{
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
                      <li className={toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} > <Link className="urllinks1" to="/stock-market-holidays" onClick={() =>{setToggleState(0),monthFliter(month,0)}} > All</Link></li>
                      <li className={toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} ><Link className="urllinks1" to="/nse-holidays" onClick={() => {setToggleState(1),monthFliter(month,1)}} >NSE Holidays</Link></li>
                      <li className={toggleState === 2 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/bse-holidays" onClick={() => {setToggleState(2),monthFliter(month,2)}} >BSE Holidays</Link></li>
                      <li className={toggleState === 3 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/mcx-ncdex-holidays" onClick={() => {setToggleState(3),monthFliter(month,3)} }>MCX/NCDEX Holidays</Link></li>
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
                                                            <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => {monthFliter("All"),setIsActive(1),setTitle("All")}}  label='All' className={isActive==1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => {monthFliter('January'),setIsActive(2),setTitle("January")}}  label='January'  className={isActive==2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => {monthFliter('February'),setIsActive(3),setTitle("February")}}label='February' className={isActive==3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => {monthFliter('March'),setIsActive(4),setTitle("March")}} label='March' className={isActive==4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => {monthFliter('April'),setIsActive(5),setTitle("April")}} label='April' className={isActive==5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => {monthFliter('May'),setIsActive(6),setTitle("May")}}label='May' className={isActive==6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => {monthFliter('June'),setIsActive(7),setTitle("June")}} label='June' className={isActive==7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => {monthFliter('July'),setIsActive(8),setTitle("July")}} label='July' className={isActive==8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => {monthFliter('August'),setIsActive(9),setTitle("August")}} label='August' className={isActive==9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() =>{monthFliter('September'),setIsActive(10),setTitle("September")}} label='September' className={isActive==10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() =>{monthFliter('October'),setIsActive(11),setTitle("October")}} label='October' className={isActive==11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() =>{monthFliter('November'),setIsActive(12),setTitle("November")} }label='November' className={isActive==12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() =>{monthFliter('December'),setIsActive(13),setTitle("December")}} label='December' className={isActive==13 ? 'activemonth' : ''} >December</Dropdown.Item>
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
                                                              <td className="charges-heads">{i+1}</td>
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
                                                              <td className="charges-heads">{i+1}</td>
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
                                                          <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => {monthFliter("All"),setIsActive(1),setTitle("All")}}  label='All' className={isActive==1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => {monthFliter('January'),setIsActive(2),setTitle("January")}}  label='January'  className={isActive==2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => {monthFliter('February'),setIsActive(3),setTitle("February")}}label='February' className={isActive==3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => {monthFliter('March'),setIsActive(4),setTitle("March")}} label='March' className={isActive==4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => {monthFliter('April'),setIsActive(5),setTitle("April")}} label='April' className={isActive==5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => {monthFliter('May'),setIsActive(6),setTitle("May")}}label='May' className={isActive==6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => {monthFliter('June'),setIsActive(7),setTitle("June")}} label='June' className={isActive==7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => {monthFliter('July'),setIsActive(8),setTitle("July")}} label='July' className={isActive==8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => {monthFliter('August'),setIsActive(9),setTitle("August")}} label='August' className={isActive==9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() =>{monthFliter('September'),setIsActive(10),setTitle("September")}} label='September' className={isActive==10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() =>{monthFliter('October'),setIsActive(11),setTitle("October")}} label='October' className={isActive==11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() =>{monthFliter('November'),setIsActive(12),setTitle("November")} }label='November' className={isActive==12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                          <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() =>{monthFliter('December'),setIsActive(13),setTitle("December")}} label='December' className={isActive==13 ? 'activemonth' : ''} >December</Dropdown.Item>
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
                                                            <td className="charges-heads">{i+1}</td>
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
                                                            <td className="charges-heads">{i+1}</td>
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
                                                            <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => {monthFliter("All"),setIsActive(1),setTitle("All")}}  label='All' className={isActive==1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => {monthFliter('January'),setIsActive(2),setTitle("January")}}  label='January'  className={isActive==2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => {monthFliter('February'),setIsActive(3),setTitle("February")}}label='February' className={isActive==3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => {monthFliter('March'),setIsActive(4),setTitle("March")}} label='March' className={isActive==4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => {monthFliter('April'),setIsActive(5),setTitle("April")}} label='April' className={isActive==5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => {monthFliter('May'),setIsActive(6),setTitle("May")}}label='May' className={isActive==6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => {monthFliter('June'),setIsActive(7),setTitle("June")}} label='June' className={isActive==7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => {monthFliter('July'),setIsActive(8),setTitle("July")}} label='July' className={isActive==8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => {monthFliter('August'),setIsActive(9),setTitle("August")}} label='August' className={isActive==9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() =>{monthFliter('September'),setIsActive(10),setTitle("September")}} label='September' className={isActive==10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() =>{monthFliter('October'),setIsActive(11),setTitle("October")}} label='October' className={isActive==11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() =>{monthFliter('November'),setIsActive(12),setTitle("November")} }label='November' className={isActive==12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                            <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() =>{monthFliter('December'),setIsActive(13),setTitle("December")}} label='December' className={isActive==13 ? 'activemonth' : ''} >December</Dropdown.Item>
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
                                                              <td className="charges-heads">{i+1}</td>
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
                                                              <td className="charges-heads">{i+1}</td>
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
                                      </div>  :
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
                                                              <Dropdown.Item name='flexCheck' value='' id='check1' onClick={() => {monthFliter("All"),setIsActive(1),setTitle("All")}}  label='All' className={isActive==1 ? "activemonth" : ''} >All</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check2' onClick={() => {monthFliter('January'),setIsActive(2),setTitle("January")}}  label='January'  className={isActive==2 ? 'activemonth' : ''}>January</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check3' onClick={() => {monthFliter('February'),setIsActive(3),setTitle("February")}}label='February' className={isActive==3 ? 'activemonth' : ''} >February</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check4' onClick={() => {monthFliter('March'),setIsActive(4),setTitle("March")}} label='March' className={isActive==4 ? 'activemonth' : ''} >March</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check5' onClick={() => {monthFliter('April'),setIsActive(5),setTitle("April")}} label='April' className={isActive==5 ? 'activemonth' : ''} >April</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check6' onClick={() => {monthFliter('May'),setIsActive(6),setTitle("May")}}label='May' className={isActive==6 ? 'activemonth' : ''}>May</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check7' onClick={() => {monthFliter('June'),setIsActive(7),setTitle("June")}} label='June' className={isActive==7 ? 'activemonth' : ''} >June</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check8' onClick={() => {monthFliter('July'),setIsActive(8),setTitle("July")}} label='July' className={isActive==8 ? 'activemonth' : ''} >July</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check9' onClick={() => {monthFliter('August'),setIsActive(9),setTitle("August")}} label='August' className={isActive==9 ? 'activemonth' : ''}>August</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check10' onClick={() =>{monthFliter('September'),setIsActive(10),setTitle("September")}} label='September' className={isActive==10 ? 'activemonth' : ''} >September</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check11' onClick={() =>{monthFliter('October'),setIsActive(11),setTitle("October")}} label='October' className={isActive==11 ? 'activemonth' : ''} >October</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check12' onClick={() =>{monthFliter('November'),setIsActive(12),setTitle("November")} }label='November' className={isActive==12 ? 'activemonth' : ''} >November</Dropdown.Item>
                                                              <Dropdown.Item name='flexCheck' value='' id='check13' onClick={() =>{monthFliter('December'),setIsActive(13),setTitle("December")}} label='December' className={isActive==13 ? 'activemonth' : ''} >December</Dropdown.Item>
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
                                                                <td className="charges-heads">{i+1}</td>
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
                                                                <td className="charges-heads">{i+1}</td>
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
                                        </div>  :
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
            <section className="readmoresection readmorecontent">
              <div className="container">

                {
                  toggleState == 0 ?
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">NSE & BSE HOLIDAYS 2023</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext"> It’s important to know NSE/BSE holiday list 2023 in advance so that Traders/Investors can square off or carry-forward their positions.
                            <br />
                            <br />
                            <h2 className="font-bold">Share Market Holidays</h2>
                            <br />

                            The Holiday Calendar section will show you the entire list of Market Holidays 2023 that will be observed by all the exchanges including the primary, NSE and BSE. During Market Holidays the Share, Currency or Commodity Trading segments remain closed apart from weekends.
                            <br />
                            <br />
                            <h2 className="font-bold">Muhurat Trading 2023</h2>
                            <br />
                            Muhurat Trading shall be held on Thursday, November 04, 2023 (Diwali – Laxmi Pujan). Timings of Muhurat Trading shall be notified subsequently.
                            Please Note: The Exchange may alter/change any of the above Share Market Holidays for 2023, for which a separate circular shall be issued in advance. The Exchange may, however, close the market on days other than the above schedule holidays or may open the market on days originally declared as holidays. The Exchange may also extend, advance or reduce trading hours when it deems fit and necessary.
                            {/* <span className="read-more-target restext">
                                Signal, an Automated Research Engine that provides research advisory with customised strategies for all types of Traders
                                has been back tested by our in-house advisory with a proven track record that has been in existence for almost a decade
                                now to provide the best intraday stocks to buy and sell.
                                <br />
                                For all stock recommendations for intra day trades, short-term trades and long-term trades , you can refer to the segment providing you with the latest research calls from the experts. <Link to="/open-free-demat-account"> Open a free demat account  </Link> with us to get the best intraday stocks to buy today in India.
                              </span> */}
                          </span>
                          {/* <label htmlFor="post-1" className="read-more-trigger moreless-button"></label> */}
                        </div>
                      </div>
                    </div> :
                    toggleState == 1 ?
                      <div className="row">

                      </div> :
                      toggleState == 2 ?
                        <div className="row">

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
