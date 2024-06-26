import React from "react";
import { useState } from "react";
import rest from "../../Services/rest";
import { useParams } from 'react-router-dom';
import utils from "../../Services/utils";
import Template5 from '../Common-features/Template5';
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import {
  useLocation,
} from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import Sharemarketholidays from "./UpcomingAGM";


function Holidayscategory() {
 


  const [toggleState, setToggleState] = useState(0);
  const [skeleton, setSkeleton] = useState(() => true);
  /**Show loader */
  const [showLoader, setShowLoader] = useState(false)
  const [check3, setcheck3] = useState(false)

  const [ndata, setNdata] = useState()

  const { segment } = useParams();
  const [events, setEvents] = useState({
    lBoardMeetings: { key: 'lBoardMeetings', value: 'Board Meeting', data: [] },
    lAGMEGM: { key: 'lAGMEGM', value: 'AGM/EGM', data: [] },
    lBonus: { key: 'lBonus', value: 'Bonus', data: [] },
    lDividend: { key: 'lDividend', value: 'Dividends', data: [] },
    lRights: { key: 'lRights', value: 'Rights', data: [] },
    lSplits: { key: 'lSplits', value: 'Splits', data: [] }
  });
  const toggleTab = (index) => {
    setToggleState(index);
  };

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const [filterRanges, setFilterRanges] = useState({
    'all': { min: new Date().getFullYear().toString() + '-01-01', max: new Date().getFullYear().toString() + '-12-31' },
    // 'yesterday': { min: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0), max: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).setHours(23, 59, 59, 999) },
    'today': { min: new Date().setHours(0, 0, 0, 0), max: new Date().setHours(23, 59, 59, 999) },
    'tommorow': { min: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0), max: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(23, 59, 59, 999) },
    'thisWeek': { min: new Date(new Date().setDate(new Date().getDate() - new Date().getDay())).setHours(0, 0, 0, 0), max: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 6)).setHours(23, 59, 59, 999) },
    'nextWeek': { min: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 7)).setHours(0, 0, 0, 0), max: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 13)).setHours(23, 59, 59, 999) },
  });

  const [config, setConfig] = useState({
    activeFilter: {
      name: 'all',
      min: new Date(filterRanges['all'].min).toISOString(),
      max: new Date(filterRanges['all'].max).toISOString(),
      dates: [
        utils.formatDate(new Date(filterRanges['all'].min), 'YYYY-MM-DD'),
        utils.formatDate(new Date(filterRanges['all'].max), 'YYYY-MM-DD')
      ]
    },
    eventCategories: [
      { key: 'lBoardMeetings', value: 'Board Meetings', slug: 'upcoming-board-meeting', dateKey: 'StartDate', checked: true },
      { key: 'lAGMEGM', value: 'AGM/EGM', slug: 'upcoming-agm', dateKey: 'Date', checked: true },
      { key: 'lBonus', value: 'Bonus', slug: 'upcoming-bonus-shares', dateKey: 'ExBonus', checked: true },
      { key: 'lDividend', value: 'Dividends', slug: 'upcoming-dividend-paying-stocks', dateKey: 'ExDividendDate', checked: true },
      { key: 'lRights', value: 'Rights', slug: 'upcoming-rights-issue', dateKey: 'ExRightsDate', checked: true },
      { key: 'lSplits', value: 'Splits', slug: 'upcoming-stock-splits', dateKey: 'SplitDate', checked: true }
    ],

    activeTab: [
      { key: 'lBoardMeetings' }
    ]
  })
  useEffect(() => {
    const eventName = (segment || '').toLowerCase().trim();
   const eventObject = config.eventCategories.find((event) => event.slug === eventName) || (window.location.pathname.indexOf('upcoming-board-meeting') > -1) ? config.eventCategories[0]:(window.location.pathname.indexOf('upcoming-agm') > -1)? config.eventCategories[1]:(window.location.pathname.indexOf('upcoming-bonus-shares') > -1)?config.eventCategories[2]:(window.location.pathname.indexOf('upcoming-dividend-paying-stocks') > -1)?config.eventCategories[3]:(window.location.pathname.indexOf('upcoming-rights-issue') > -1)?config.eventCategories[4]:(window.location.pathname.indexOf('upcoming-stock-splits') > -1)?config.eventCategories[5]:"";
    activateSegment(eventObject, true);
    activateSegment(eventObject, true);
   
  }, [segment]);


  
  
  useEffect(() => {
    config.activeTab.key =(window.location.pathname.indexOf('upcoming-board-meeting') > -1) ? config.activeTab[0].key:(window.location.pathname.indexOf('upcoming-agm') > -1)? "lAGMEGM":(window.location.pathname.indexOf('upcoming-bonus-shares') > -1)?"lBonus":(window.location.pathname.indexOf('upcoming-dividend-paying-stocks') > -1)?"lDividend":(window.location.pathname.indexOf('upcoming-rights-issue') > -1)?"lRights":(window.location.pathname.indexOf('upcoming-stock-splits') > -1)?"lSplits":"";
   
  }, []);


  const fetchEvents = (request) => {
    config.isServiceHit = true;
    rest.EventDetails(request)
      .then((res) => {
        if (res.Status === 'Success' && res.Response) {
          const processedEvents = processEventCalendar(res.Response);
          setEvents(processedEvents)
        }
      })
      .catch((err) => {
        // Handle error
      })
      .finally(() => {
        config.isServiceHit = false;
      });
  };

  const processEventCalendar = (data) => {
    const validEvents = config.eventCategories;
    const categories = {
      lBoardMeetings: { key: 'lBoardMeetings', value: 'Board Meeting', data: [] },
      lAGMEGM: { key: 'lAGMEGM', value: 'AGM/EGM', data: [] },
      lBonus: { key: 'lBonus', value: 'Bonus', data: [] },
      lDividend: { key: 'lDividend', value: 'Dividends', data: [] },
      lRights: { key: 'lRights', value: 'Rights', data: [] },
      lSplits: { key: 'lSplits', value: 'Splits', data: [] }
    };

    data.forEach((event, index) => {
      const companyURL = `/instrument/equity/${(event.SecDesc || '').toLowerCase().replace(/[\s|\&|\%]/g, '').trim()}/${event.SegmentID}/${event.Token}`;
      validEvents.forEach((eventType, evIndex) => {
        if (event[eventType.key]) {
          const finalEvent = { ...event, ...event[eventType.key] };
          finalEvent.momentDate = new Date(finalEvent[eventType.dateKey]);
          finalEvent.companyURL = companyURL;
          finalEvent[eventType.dateKey] = finalEvent.momentDate.valueOf();
          finalEvent.EventDate = new Date(finalEvent.EventDate).valueOf();
          finalEvent.RecordDate ? (finalEvent.RecordDate = new Date(finalEvent.RecordDate).valueOf()) : '';
          finalEvent.AnnouncementDate ? (finalEvent.AnnouncementDate = new Date(finalEvent.AnnouncementDate).valueOf()) : '';
          delete finalEvent[eventType.key];
          finalEvent.eventType = eventType.value;
          categories[eventType.key].data.push(finalEvent);
        }
      });
    });

    return categories;
  };
  const activateSegment = (item, isForce) => {
    if (item && (item.key !== config.activeTab.key || isForce)) {
      setConfig({ ...config, activeTab: item });
      filterCalendar(config.activeFilter.name, isForce);
      window.history.replaceState(null, '', `${item.slug}`);
      setNdata(meta_tags[item.slug]);
      
    }
  };




  const filterCalendar = (key, isForce) => {
    let temp1 = config.activeFilter.dates[0];
    let temp2 = config.activeFilter.dates[1];
    if (
      isForce ||
      (filterRanges[key] && config.activeFilter.name !== key) &&
      key !== 'custom'
    ) {
      setConfig({
        ...config, activeFilter: {
          name: key,
          min: filterRanges[key].min,
          max: filterRanges[key].max,
          dates: [
            key === 'custom'
              ? config.activeFilter.dates[0]
              : filterRanges[key].min,
            key === 'custom'
              ? config.activeFilter.dates[1]
              : filterRanges[key].max
          ]
        }
      })
      const request = {
        SegmentID: 1,
        Token: 0,
        MonthYear: '',
        Purpose: '',
        FromDate: utils.formatDate(
          new Date(filterRanges[key].min),
          'yyyy-MM-dd'
        ),
        ToDate: utils.formatDate(
          new Date(filterRanges[key].max),
          'yyyy-MM-dd'
        )
      };
      fetchEvents(request);
    } else if (key === 'custom') {
      config.activeFilter = {
        name: key,
        min: filterRanges[key].min,
        max: filterRanges[key].max,
        dates: [config.activeFilter.dates[0], config.activeFilter.dates[1]]
      };
    }
  };




  return (
    <div>
      { check3 && ndata   ? (
        <Sharemarketholidays holiday={ndata} ischeck={check3}/>
      ) : (
        ''
      )}

      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <section className="mainhead holiday-main">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                    {
                      config?.activeTab.key == 'lBoardMeetings' ?
                        <div>
                          <h1 className=" title-secnd1">Upcoming Board Meetings</h1>
                          <p className="title_para res_para">Following are the complete list of upcoming board meetings in 2024.</p>
                        </div> :
                        config?.activeTab?.key == 'lAGMEGM' ?
                          <div>
                            <h1 className=" title-secnd1">Upcoming AGM</h1>
                            <p className="title_para res_para ">Following are the complete Upcoming AGM 2024 list.</p>
                            
                          </div> :
                          config?.activeTab?.key == 'lBonus' ?
                            <div>
                              <h1 className=" title-secnd1">Upcoming Bonus Shares</h1>
                              <p className="title_para res_para">Get the list of upcoming bonus shares in 2024</p>
                            </div> :
                            config?.activeTab?.key == 'lDividend' ?
                              <div>
                                <h1 className=" title-secnd1">Upcoming Dividend</h1>
                                <p className="title_para res_para ">Find out the list of upcoming dividend paying stocks in 2024</p>
                              </div> :
                              config?.activeTab?.key == 'lRights' ?
                                <div>
                                  <h1 className=" title-secnd1">Upcoming Rights Issue</h1>
                                  <p className="title_para res_para ">Check out the list of upcoming rights issues of shares in 2024.</p>
                                </div> :
                                config?.activeTab?.key == 'lSplits' ?
                                  <div>
                                    <h1 className=" title-secnd1">Upcoming Stock Splits</h1>
                                    <p className="title_para res_para">View the list of upcoming stock splits in 2024 in India</p>
                                  </div> :
                                  ""
                    }



                  </div>
                  <div className="col-xl-10 col-md-12" id="best-stock">
                    <ul className="list-group list_group1  holiday-list">

                      {config.eventCategories.map((item) => (
                        <li
                          className={config.activeTab.key === item.key ? 'list-group-item list listsec' : 'list-group-item list'}
                          onClick={() => {activateSegment(item),setcheck3(true)}}
                          key={item.key}
                        >
                          <a>{item.value}</a>
                        </li>
                      ))}
                    </ul>

                  </div>

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
                              <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={100} width={100} />
                            </div>
                          </div> :
                          <div>
                            {
                              <div className=" gx-5">
                                <div className="">
                                  {
                                    config?.activeTab.key === 'lBoardMeetings' ?
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="holidays-table event-table-prnt">
                                            <div className="table-responsive wow fadeInUp table-desk event-table">
                                              
                                                <table className="table table-hover table-striped event-table-strip">
                                                  <thead className="event-sticky">
                                                    <tr className="event-tr-fix">
                                                      <th width="35%">Company Name</th>
                                                      <th width="25%" className="holidaydropdown">
                                                        <Dropdown className="drop_list">
                                                          <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn">
                                                            Meeting Date
                                                          </Dropdown.Toggle>
                                                          <Dropdown.Menu>
                                                            <div className="months-custom">
                                                              <Dropdown.Item name="flexCheck" value="" id="check1" onClick={() => filterCalendar('all')} className={config?.activeFilter?.name === 'all' ? 'activemonth' : ''}>All</Dropdown.Item>
                                                              <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('today')} className={config?.activeFilter?.name === 'today' ? 'activemonth' : ''}>Today</Dropdown.Item>
                                                              <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('tommorow')} className={config?.activeFilter?.name === 'tommorow' ? 'activemonth' : ''}>Tomorrow</Dropdown.Item>
                                                              <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('thisWeek')} className={config?.activeFilter?.name === 'thisWeek' ? 'activemonth' : ''}>This Week</Dropdown.Item>
                                                              <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('nextWeek')} className={config?.activeFilter?.name === 'nextWeek' ? 'activemonth' : ''}>Next Week</Dropdown.Item>
                                                            </div>
                                                          </Dropdown.Menu>
                                                        </Dropdown>
                                                      </th>
                                                      <th>Agenda</th>
                                                    </tr>
                                                  </thead>
                                                  {
                                                    events.lBoardMeetings.data && (events.lBoardMeetings.data).length ?
                                                      <tbody>
                                                        {events.lBoardMeetings.data.map((row, index) => {
                                                          return (
                                                            <tr key={index}>
                                                              <td><a >{row.SecName || row.SecDesc}</a></td>
                                                              <td>{utils.formatDate(new Date(row.EndDate), 'dd-MMM-yyyy')}</td>
                                                              <td>{row.Agenda}</td>
                                                            </tr>
                                                          );
                                                        })}
                                                      </tbody>
                                                      :
                                                      <div className="mt- mb-2 empty-row">
                                                        <div className="pl-4">No data to display</div>
                                                      </div>
                                                  }
                                                </table>
                                           
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      :
                                      config?.activeTab?.key == 'lAGMEGM' ?
                                        <div className="row">
                                          <div className="col-md-12">
                                            <div className="holidays-table event-table-prnt">
                                              <div className="table-responsive wow fadeInUp table-desk event-table">
                                                {config.isServiceHit && (
                                                  <table className="table table-hover table-striped event-table-strip">
                                                    <thead className="event-sticky">
                                                      <tr>
                                                        <th width="35%">Company Name</th>
                                                        <th className="holidaydropdown">
                                                          <Dropdown className="drop_list" >
                                                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                              Announcement Date
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                              <div className="months-custom">
                                                                <Dropdown.Item name="flexCheck" value="" id="check1" onClick={() => filterCalendar('all')} className={config?.activeFilter?.name === 'all' ? 'activemonth' : ''}>All</Dropdown.Item>
                                                                <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('today')} className={config?.activeFilter?.name === 'today' ? 'activemonth' : ''}>Today</Dropdown.Item>
                                                                <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('tommorow')} className={config?.activeFilter?.name === 'tommorow' ? 'activemonth' : ''}>Tomorrow</Dropdown.Item>
                                                                <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('thisWeek')} className={config?.activeFilter?.name === 'thisWeek' ? 'activemonth' : ''}>This Week</Dropdown.Item>
                                                                <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('nextWeek')} className={config?.activeFilter?.name === 'nextWeek' ? 'activemonth' : ''}>Next Week</Dropdown.Item>
                                                              </div>
                                                            </Dropdown.Menu>
                                                          </Dropdown>
                                                        </th>
                                                        <th>Agenda</th>
                                                      </tr>
                                                    </thead>
                                                    {
                                                      events.lAGMEGM.data && (events.lAGMEGM.data).length ?
                                                        <tbody>

                                                          {events.lAGMEGM.data.map((row, index) => {
                                                            return (
                                                              <tr key={index}>
                                                                <td>{row.SecName || row.SecDesc}</td>
                                                                <td>{utils.formatDate(new Date(row.Date), 'dd-MMM-yyyy')}</td>
                                                                <td>{row.Agenda + '(' + row.Purpose + ')'}</td>
                                                              </tr>
                                                            )
                                                          })
                                                          }
                                                        </tbody>
                                                        :
                                                        <div className="mt- mb-2 empty-row">
                                                          <div className="pl-4">No data to display</div>
                                                        </div>
                                                    }
                                                  </table>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div> :
                                        config?.activeTab?.key == 'lBonus' ?
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="holidays-table event-table-prnt">
                                                <div className="table-responsive wow fadeInUp table-desk event-table">
                                                  {config.isServiceHit && (
                                                    <table className="table table-hover table-striped event-table-strip">
                                                      <thead className="event-sticky">
                                                        <tr>
                                                          <th width="35%">Company Name</th>
                                                          <th>Bonus Date</th>
                                                          <th className="holidaydropdown">

                                                            <Dropdown className="drop_list" >
                                                              <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                                Record Date
                                                              </Dropdown.Toggle>
                                                              <Dropdown.Menu>
                                                                <div className="months-custom">
                                                                  <Dropdown.Item name="flexCheck" value="" id="check1" onClick={() => filterCalendar('all')} className={config?.activeFilter?.name === 'all' ? 'activemonth' : ''}>All</Dropdown.Item>
                                                                  <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('today')} className={config?.activeFilter?.name === 'today' ? 'activemonth' : ''}>Today</Dropdown.Item>
                                                                  <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('tommorow')} className={config?.activeFilter?.name === 'tommorow' ? 'activemonth' : ''}>Tomorrow</Dropdown.Item>
                                                                  <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('thisWeek')} className={config?.activeFilter?.name === 'thisWeek' ? 'activemonth' : ''}>This Week</Dropdown.Item>
                                                                  <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('nextWeek')} className={config?.activeFilter?.name === 'nextWeek' ? 'activemonth' : ''}>Next Week</Dropdown.Item>
                                                                </div>
                                                              </Dropdown.Menu>
                                                            </Dropdown>
                                                          </th>
                                                          <th>Ratio</th>

                                                        </tr>
                                                      </thead>
                                                      {
                                                        events.lBonus.data && (events.lBonus.data).length ?
                                                          <tbody>
                                                            {
                                                              events.lBonus.data.map((row, index) => {
                                                                return (
                                                                  <tr key={index}>
                                                                    <td>{row.SecName || row.SecDesc}</td>
                                                                    <td>{utils.formatDate(new Date(row.ExBonus), 'dd-MMM-yyyy')}</td>
                                                                    <td>{utils.formatDate(new Date(row.RecordDate), 'dd-MMM-yyyy')}</td>
                                                                    <td>{row.BonusRatio}</td>
                                                                  </tr>
                                                                )
                                                              })
                                                            }
                                                          </tbody>
                                                          : <div className="mt- mb-2 empty-row">
                                                            <div className="pl-4">No data to display</div>
                                                          </div>}
                                                    </table>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </div> :
                                          config?.activeTab?.key == 'lDividend' ?
                                            <div className="row">
                                              <div className="col-md-12">
                                                <div className="holidays-table event-table-prnt">
                                                  <div className="table-responsive wow fadeInUp table-desk event-table">
                                                    {config.isServiceHit && (
                                                      <table className="table table-hover table-striped event-table-strip">
                                                        <thead className="event-sticky">
                                                          <tr>
                                                            <th width="35%">Company Name</th>
                                                            <th>Announcement Date</th>
                                                            <th className="holidaydropdown">
                                                              <Dropdown className="drop_list" >
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                                  Dividend Date
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                  <div className="months-custom">
                                                                    <Dropdown.Item name="flexCheck" value="" id="check1" onClick={() => filterCalendar('all')} className={config?.activeFilter?.name === 'all' ? 'activemonth' : ''}>All</Dropdown.Item>
                                                                    <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('today')} className={config?.activeFilter?.name === 'today' ? 'activemonth' : ''}>Today</Dropdown.Item>
                                                                    <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('tommorow')} className={config?.activeFilter?.name === 'tommorow' ? 'activemonth' : ''}>Tomorrow</Dropdown.Item>
                                                                    <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('thisWeek')} className={config?.activeFilter?.name === 'thisWeek' ? 'activemonth' : ''}>This Week</Dropdown.Item>
                                                                    <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('nextWeek')} className={config?.activeFilter?.name === 'nextWeek' ? 'activemonth' : ''}>Next Week</Dropdown.Item>
                                                                  </div>
                                                                </Dropdown.Menu>
                                                              </Dropdown>
                                                            </th>
                                                            <th>Dividend(%)</th>
                                                            <th>Remarks</th>
                                                          </tr>
                                                        </thead>
                                                        {
                                                          events.lDividend.data && (events.lDividend.data).length ?
                                                            <tbody>
                                                              {
                                                                events.lDividend.data.map((row, index) => {
                                                                  return (
                                                                    <tr key={index}>

                                                                      <td>{row.SecName || row.SecDesc}</td>
                                                                      <td>{utils.formatDate(new Date(row.AnnouncementDate), 'dd-MMM-yyyy')}</td>
                                                                      <td>{utils.formatDate(new Date(row.ExDividendDate), 'dd-MMM-yyyy')}</td>
                                                                      <td>{((row.DividendPercentage).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00"}</td>
                                                                      <td>{row.DividendType}</td>
                                                                    </tr>
                                                                  )
                                                                })
                                                              }
                                                            </tbody>
                                                            :
                                                            <div className="mt- mb-2 empty-row">
                                                              <div className="pl-4">No data to display</div>
                                                            </div>}
                                                      </table>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div> :
                                            config?.activeTab?.key == 'lRights' ?
                                              <div className="row">
                                                <div className="col-md-12">
                                                  <div className="holidays-table event-table-prnt">
                                                    <div className="table-responsive wow fadeInUp table-desk event-table">
                                                      {config.isServiceHit && (
                                                        <table className="table table-hover table-striped event-table-strip">
                                                          <thead className="event-sticky">
                                                            <tr>

                                                              <th width="35%">Company Name</th>
                                                              <th className="holidaydropdown">
                                                                <Dropdown className="drop_list" >
                                                                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                                    Right Date
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu>
                                                                    <div className="months-custom">
                                                                      <Dropdown.Item name="flexCheck" value="" id="check1" onClick={() => filterCalendar('all')} className={config?.activeFilter?.name === 'all' ? 'activemonth' : ''}>All</Dropdown.Item>
                                                                      <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('today')} className={config?.activeFilter?.name === 'today' ? 'activemonth' : ''}>Today</Dropdown.Item>
                                                                      <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('tommorow')} className={config?.activeFilter?.name === 'tommorow' ? 'activemonth' : ''}>Tomorrow</Dropdown.Item>
                                                                      <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('thisWeek')} className={config?.activeFilter?.name === 'thisWeek' ? 'activemonth' : ''}>This Week</Dropdown.Item>
                                                                      <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('nextWeek')} className={config?.activeFilter?.name === 'nextWeek' ? 'activemonth' : ''}>Next Week</Dropdown.Item>
                                                                    </div>
                                                                  </Dropdown.Menu>
                                                                </Dropdown>
                                                              </th>
                                                              <th>Ratio</th>
                                                              <th>Premium</th>
                                                            </tr>
                                                          </thead>
                                                          {
                                                            events.lRights.data && (events.lRights.data).length ?
                                                              <tbody>
                                                                {
                                                                  events.lRights.data.map((row, index) => {
                                                                    return (
                                                                      <tr key={index}>
                                                                        <td>{row.SecName || row.SecDesc}</td>
                                                                        <td>{utils.formatDate(new Date(row.ExRightsDate), 'dd-MMM-yyyy')}</td>
                                                                        <td>{row.RightsRatio}</td>
                                                                        <td>{row.Premium + ".00"}</td>
                                                                      </tr>
                                                                    )
                                                                  })
                                                                }
                                                              </tbody>
                                                              : <div className="mt- mb-2 empty-row">
                                                                <div className="pl-4">No data to display</div>
                                                              </div>}

                                                        </table>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div> :
                                              config?.activeTab?.key == 'lSplits' ?
                                                <div className="row">
                                                  <div className="col-md-12">
                                                    <div className="holidays-table event-table-prnt">
                                                      <div className="table-responsive wow fadeInUp table-desk event-table">
                                                        {config.isServiceHit && (
                                                          <table className="table table-hover table-striped event-table-strip">
                                                            <thead className="event-sticky">
                                                              <tr>

                                                                <th width="35%">Company Name</th>
                                                                <th className="holidaydropdown">
                                                                  <Dropdown className="drop_list" >
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn" >
                                                                      Split Date
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                      <div className="months-custom">
                                                                        <Dropdown.Item name="flexCheck" value="" id="check1" onClick={() => filterCalendar('all')} className={config?.activeFilter?.name === 'all' ? 'activemonth' : ''}>All</Dropdown.Item>
                                                                        <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('today')} className={config?.activeFilter?.name === 'today' ? 'activemonth' : ''}>Today</Dropdown.Item>
                                                                        <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('tommorow')} className={config?.activeFilter?.name === 'tommorow' ? 'activemonth' : ''}>Tomorrow</Dropdown.Item>
                                                                        <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('thisWeek')} className={config?.activeFilter?.name === 'thisWeek' ? 'activemonth' : ''}>This Week</Dropdown.Item>
                                                                        <Dropdown.Item name="flexCheck" value="" id="check2" onClick={() => filterCalendar('nextWeek')} className={config?.activeFilter?.name === 'nextWeek' ? 'activemonth' : ''}>Next Week</Dropdown.Item>
                                                                      </div>
                                                                    </Dropdown.Menu>
                                                                  </Dropdown>
                                                                </th>
                                                                <th>FV Before</th>
                                                                <th>FV After</th>
                                                              </tr>
                                                            </thead>
                                                            {
                                                              events.lSplits.data && (events.lSplits.data).length ?
                                                                <tbody>
                                                                  {
                                                                    events.lSplits.data.map((row, index) => {
                                                                      return (
                                                                        <tr key={index}>
                                                                          <td>{row.SecName || row.SecDesc}</td>
                                                                          <td>{utils.formatDate(new Date(row.SplitDate), 'dd-MMM-yyyy')}</td>
                                                                          <td>{(row.OldFacevalue) + ".00"}</td>
                                                                          <td>{(row.NewFaceValue) + ".00"}</td>
                                                                        </tr>
                                                                      )
                                                                    })
                                                                  }
                                                                </tbody>
                                                                : <div className="mt- mb-2 empty-row">
                                                                  <div className="pl-4">No data to display</div>
                                                                </div>}
                                                          </table>
                                                        )}
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
            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
              <OpenDemateAccountStickyFooter />
            </GoogleReCaptchaProvider>
            <section className="readmoresection holiday-readmore">
              <div className="container">

                {
                  config?.activeTab.key == 'lBoardMeetings' ?
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
                            <br />
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
                    config?.activeTab?.key == 'lAGMEGM' ?
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
                              <br />
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
                      config?.activeTab?.key == 'lBonus' ?
                        <div className="row">
                          <div className="col-md-12">
                            <h2 className="secttitle text-center">Upcoming Bonus Shares in 2024</h2>
                          </div>
                          <div className="col-md-12">
                            <div className="para px-3">
                              <input type="checkbox" className="read-more-state" id="post-1" />
                              <span className="read-more-wrap restext">Bonus Shares are additional shares offered to the shareholders of the company. The company can opt to give out its accumulated earnings in the form of Bonus Shares instead of Dividends.
                                <br />
                                <h3 className="third-heading-para"><strong>Upcoming Bonus Shares in India</strong></h3>
                                This section lists the companies likely to declare Bonus Shares in 2024. It will dynamically be updated as and when the announcement is made. The ratio of Bonus Shares is given alongside the date of the announcement.
                                <br />
                                <span className="read-more-target restext">
                                  <h3 className="third-heading-para">Why Are Companies Issuing Bonus Shares?</h3>
                                  <br />
                                  <strong>To increase retail participation:</strong> When the price of a share is high it becomes difficult for retail investors to purchase shares of a particular company. When the number of shares increases the price goes down making it accessible to retail traders. <br /><br />
                                  <strong>To increase liquidity base:</strong> Issuing Bonus Shares increases the number of outstanding shares. This leads to higher participation of traders, which in turn increases the liquidity of the shares.<br /><br />
                                  <strong>To reward investors:</strong> Rewarding the investors for their confidence and commitment to the company, which also helps in boosting the investor sentiment towards the company.<br />
                                </span>
                              </span>
                              <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                            </div>
                          </div>
                        </div> :
                        config?.activeTab?.key == 'lDividend' ?
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="secttitle text-center">Upcoming Dividend in 2024</h2>
                            </div>
                            <div className="col-md-12">
                              <div className="para px-3">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap restext">Dividend is sharing profit with shareholders by a company. The Dividend section will provide the list of upcoming dividend paying stocks who have announced dividends for their shareholders. Investors and traders will be able to track the highest dividend paying stocks to modify their portfolios accordingly. You can also use the customize option by modifying your date to understand which are the best dividend paying stocks for the long-term.
                                  <br />
                                  <h3 className="third-heading-para"><strong>Upcoming Dividend Paying Stocks</strong></h3>
                                  You can browse the Dividends section and view the Dividend (%) to understand upcoming dividend stocks which are paying the highest dividend in 2024.
                                  <br />
                                  <span className="read-more-target restext">
                                    <h3 className="third-heading-para">How Do Dividends Work?</h3>
                                    <ul>
                                      <li>You purchase a certain number of shares. For example, let’s say you own 100 shares of WIPRO stock and WIPRO announced a quarterly dividend payout on 14th January, 2024 of Rs. 50 per equity share to all shareholders.</li>
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
                          config?.activeTab?.key == 'lRights' ?
                            <div className="row">
                              <div className="col-md-12">
                                <h2 className="secttitle text-center">Upcoming Rights Issue in 2024</h2>
                              </div>
                              <div className="col-md-12">
                                <div className="para px-3">
                                  <input type="checkbox" className="read-more-state" id="post-1" />
                                  <span className="read-more-wrap restext">Rights issue or rights offering are shares issued by a company for its shareholders. Only existing shareholders have the right to subscribe to these shares. Right Issue is offered when a company wants to raise capital for expansion.
                                    <br />
                                    <h3 className="third-heading-para"><strong>Upcoming Rights Issue of Shares</strong></h3>
                                    This section provides an updated list of the upcoming rights issue announced by the companies. The information can help investors modify their portfolio or increase their investments in particular companies.
                                    <br />
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
                            config?.activeTab?.key == 'lSplits' ?
                              <div className="row">
                                <div className="col-md-12">
                                  <h2 className="secttitle text-center">Upcoming Stock Splits in 2024</h2>
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
