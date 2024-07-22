import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { useState, useEffect, useRef } from 'react';
import cmsService from "../../Services/cmsService";
import utils from "../../Services/utils";
import { Accordion } from "react-bootstrap";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'
import NewDematAccountForm from "../Common-features/NewDematAccountForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function Banner() {

  const [name, setName] = useState('card-sticky');
  const [name2, setName2] = useState('hideform');
  const [apiData, setApiData] = useState();
  const [show, setshow] = useState(false);
  const [rendercount, setRenderCount] = useState(false);
  const AllFilesValue = {}
  let navigate = useNavigate();
  /**mobile view */
  const [view, setView] = useState({
    matches: window.innerWidth < 767 ? false : true,
  });
  const [isActive, setIsActive] = useState(false);
  const [formMobile, setFormMobile] = useState('form-mobile');
  const [popUp, setPopUp] = useState(false);
  const [highlightForm, setHighlightForm] = useState(false);
  /**for slider */
  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1.5,
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,

  };

  const [outCome, setOutCome] = useState();

  const mobileForm=useRef("");

  /**function to generate random probabity number for AB test */
  function generateRandomNumber() {
    var random = Math.random();

    if (random < 0.75) {
      setOutCome(() => 'A'); // Return a random number when the probability is less than 70%
    } else {
      setOutCome(() => 'B'); // Return a different number when the probability is greater than or equal to 70%
    }
  }

  /** for position identifier */
  const getPosition = () => {
    const element = document.getElementById("showCard");
    if (element) {
      const rect = element.getBoundingClientRect();

      if (rect.top.toFixed() < 530) {
        setName('card-sticky-blog visibleBlog');
      } else {
        setName('card-sticky');
      }
    }
  };

  /** for position identifier */
  const getPosition2 = () => {
    const element = document.getElementById("showCard");
    if (element) {
      const rect = element.getBoundingClientRect();

      if (rect.top.toFixed() < 259) {
        setName2('visibleform');
      } else {
        setName2('hideform');
      }
    }
  };

  /** company ipo detail */
  function loadCompanyIpo() {
    let urlIdentity = window.location.pathname.split('/ipo/')[1]
    let values = {}
    cmsService.companyIpoService().then(
      res => {
        if (res) {
          values = res.data.data;
          values.forEach(ele => {
            if (!AllFilesValue[ele.slug_url]) {
              if ((urlIdentity == ele.slug_url)) {

                AllFilesValue['Body'] = [];
                AllFilesValue['Body'].push(ele)
              }
            }


          })

          if (AllFilesValue.Body) {
            setApiData(AllFilesValue.Body);

          } else {
            navigate(`/404`, { replace: true });
          }

          document.title = AllFilesValue.Body[0].ipo_meta_title ? AllFilesValue.Body[0].ipo_meta_title : '';
          document.getElementById('meta-tags').content = AllFilesValue.Body[0].ipo_meta_content ? AllFilesValue.Body[0].ipo_meta_content : '';
          document.getElementById('canonical-link').href = AllFilesValue.Body[0].ipo_canonical_link ? AllFilesValue.Body[0].ipo_canonical_link : '';

          document.getElementById('meta-type').content = AllFilesValue.Body[0].ipo_og_type ? AllFilesValue.Body[0].ipo_og_type : '';
          document.getElementById('meta-url').content = AllFilesValue.Body[0].ipo_og_url ? AllFilesValue.Body[0].ipo_og_url : '';
          document.getElementById('meta-descr').content = AllFilesValue.Body[0].ipo_og_description ? AllFilesValue.Body[0].ipo_og_description : '';
          document.getElementById('meta-title').content = AllFilesValue.Body[0].ipo_og_title ? AllFilesValue.Body[0].ipo_og_title : '';
          document.getElementById('meta-image').content = AllFilesValue.Body[0].ipo_og_image ? `https://cmsapi.choiceindia.com/assets/${AllFilesValue.Body[0].ipo_og_image}` : '';

          document.getElementById('twitter-meta-url').content = AllFilesValue.Body[0].ipo_twitter_url ? AllFilesValue.Body[0].ipo_twitter_url : '';
          document.getElementById('twitter-meta-descr').content = AllFilesValue.Body[0].ipo_twitter_desc ? AllFilesValue.Body[0].ipo_twitter_desc : '';
          document.getElementById('twitter-meta-title').content = AllFilesValue.Body[0].ipo_twitter_title ? AllFilesValue.Body[0].ipo_twitter_title : '';
          document.getElementById('twitter-meta-image').content = AllFilesValue.Body[0].ipo_twitter_image ? `https://cmsapi.choiceindia.com/assets/${AllFilesValue.Body[0].ipo_twitter_image}` : '';
        } else {
          setApiData([]);
        }

      }
    ), err => {
      if (err && err.message && (err.message.indexOf('404') > -1)) {
        navigate(`/404`, { replace: true });
      }
      // console.log("ERROR",err)
    }
  }
  /** for avoid multiple rendering */
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      window.addEventListener('scroll', getPosition);
      window.addEventListener('scroll', getPosition2);
      loadCompanyIpo();
      generateRandomNumber();
    }
  }, [rendercount]);



  /**mobile view */

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 767px)");
    mediaQuery.addListener(setView);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setView);
  }, []);

  function blogPop(isPopUp) {
    //console.log("Flag " + isPopUp);
    if (isPopUp) {
      setFormMobile('');
    }
    else {
      setFormMobile('form-mobile');
    }
    setPopUp(isPopUp);
  }


  const openAccountMobile = useRef("");
  const handleClick = (event) => {
    if (popUp) {
      return;
    }

    openAccountMobile.current.style.zIndex = 0;
    setIsActive(true);

  };
  function modifyHighLight(value) {
    setHighlightForm(value);
}
  return (
    <>
    
      <div className={`${name2}`+ ' card-sticky visibleCard'}>
        <div className="container d-flex justify-content-end">
          <div className="sticky-new" >
            <div className={`${formMobile} ` + (isActive ? 'p-hide' : 'p-show')} ref={mobileForm}>
            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
              <NewDematAccountForm modifyHighLight={modifyHighLight} blogPop={blogPop} openAccount={openAccountMobile} setIsActive={setIsActive} highlight={highlightForm} isActive={isActive} mobileForm={mobileForm}/>
              </GoogleReCaptchaProvider>
            </div>
          </div>

        </div>
      </div>

      {/* Banner Section */}
      <section className="ipo-banner">
        {
          apiData?.map((res) => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="banner-caption">
                      <div className="cmp-logo">
                        <span className="img-brder">
                          <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.banner_img}`} alt={res.banner_alt} className={"img-fluid"} width={"117"} height={"45"} />
                        </span>
                      </div>
                      <div className="heading-sec">
                        <h1 className="title-secnd">{res.banner_title}</h1>
                        <p>{res.banner_subtitle}</p>
                      </div>
                    </div>
                    <div className="banner-card">
                      <ul>
                        <li>
                          <span className="scr-date">{res.open_date_name}</span>
                          <span className="date">{res.open_date ? utils.formatDate(new Date(res.open_date), "dd MMMM , yyyy") : 'To be announced'}</span>
                        </li>
                        <li>
                          <span className="scr-date">{res.close_date_name}</span>
                          <span className="date">{res.close_date ? utils.formatDate(new Date(res.close_date), "dd MMMM , yyyy") : 'To be announced'}</span>
                        </li>
                        <li>
                          <span className="scr-date">{res.Banner_price_band_name}</span>
                          <span className="date">{res.price_band_value || 'To be announced'}</span>
                        </li>
                        <li>
                          <span className="scr-date">{res.lot_size_name}</span>
                          <span className="date">{res.lot_size_value || 'To be announced'}</span>
                        </li>
                        <li>
                          <span className="scr-date">{res.investment_per_lot_name}</span>
                          <span className="date">{res.investment_per_date || 'To be announced'}</span>
                        </li>
                        <li>
                          <span className="scr-date">{res.Listing_At_name}</span>
                          <span className="date">{res.listing_at_value || 'To be announced'}</span>
                        </li>
                      </ul>
                      <div className="card-bottom">
                        <div className="btn-sec">
                          <button className="btn-bg" onClick={() => window.open(res.subscribe_ipo_link || '')}>Subscribe to IPO</button>
                        </div>
                        <div className="dont-ac">
                          <a href={res.account_link || ''} >Don’t Have an Account?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={name2}>
                  <div className="btn-fixed" ref={openAccountMobile}>
                    <a className="openbtn" onClick={handleClick}>
                      <span>{res.form_title} {res.form_title2} </span>
                      <span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="#FFCE02" />
                          <path d="M8 16H24.6667H8ZM24.6667 16L16.6667 8L24.6667 16ZM24.6667 16L16.6667 24L24.6667 16Z" fill="#FFCE02" />
                          <path d="M8 16H24.6667M24.6667 16L16.6667 8M24.6667 16L16.6667 24" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }

      </section>

      {/* IPO Details section */}
      <section className="ipo-details" id="showCard">
        <div className="container">
          {
            apiData?.map((res) => {
              return (
                <div className="row">
                  <div className="col-xl-8">
                    <div className="ipo-text-details">
                      <h2 className="title-first">{res.ipo_detail_title} <span>IPO Details</span></h2>
                      <div className="para-sec">

                        <div dangerouslySetInnerHTML={{ __html: res.ipo_detail }}>

                        </div>
                        {show ?
                          <div>
                            <div>
                              <p className="pd-1">{res.ipo_detail_read_more_1}</p>
                              <p>{res.ipo_detail_read_more_2}  </p>
                              <p>{res.ipo_detail_read_more_3}</p>
                              <p>{res.ipo_detail_read_more_4}</p></div>
                            <span onClick={() => { setshow(false); }}>&nbsp;<em className="btn-read">Read less</em></span></div> : <span onClick={() => { setshow(true); }}>... <em className="btn-read">Read more</em></span>}
                      </div>
                    </div>
                    <div className="ipo-strength">
                      <h4 className="title-ipo">{res.ipo_strengths_title}</h4>
                      <ul dangerouslySetInnerHTML={{ __html: res.ipo_strengths_description }}></ul>
                    </div>
                    <div className="ipo-weekness">
                      <h4 className="title-ipo">{res.ipo_weaknesses_title}</h4>
                      <ul dangerouslySetInnerHTML={{ __html: res.ipo_weaknesses_description }}></ul>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </section>

      {/* Graph section */}
      <section className='revenue-chart-sec'>
        <div className='container'>
          {
            apiData?.map((res) => {
              return (
                <div className='row'>
                  <div className='col-xl-8'>
                    <h2 className='title-first'>{res.ipo_detail_title} <span>Revenue &amp; Profit</span></h2>
                    <div className='chart-card'>
                      <div className='chart-header'>
                        <div className='header-item'>
                          <div className='item1'>
                            <span className='cir-col revenue-color'></span> Revenue
                          </div>
                          <div className='item1'>
                            <span className='cir-col profit-color'></span> Profit
                          </div>
                          <div className='item1'>
                            <span className='cir-col loss-color'></span> Loss
                          </div>
                        </div>
                        <div className='header-item'>
                          <span className='value-all'>All value in ₹ {res.revenue_numbers}</span>
                        </div>
                      </div>
                      <div className='chart-custom'>
                        <table className='q-graph'>
                          <tbody>
                            {(res?.revenue_first && res?.profit_loss_1) ?
                              <tr className='qtr'>
                                <td className='sent bar' style={{ height: `${res.revenue_first.split(' ')[0]}` * 10 + '%' }}><p>{res.revenue_first.split(' ')[0]}</p></td>
                                <td className={res.profit_loss_1 < 0 ? 'paid bar loss' : 'paid bar profit'} style={{ height: `${res.profit_loss_1.replace('-', '+')}` * 10 + '%' }}><p>{res.profit_loss_1}</p></td>
                              </tr> : ''
                            }
                            {(res?.revenue_second && res?.profit_loss_2) ?
                              <tr className='qtr'>
                                <td className='sent bar' style={{ height: `${res.revenue_second.split(' ')[0]}` * 10 + '%' }}><p>{res.revenue_second.split(' ')[0]}</p></td>
                                <td className={res.profit_loss_2 < 0 ? 'paid bar loss' : 'paid bar profit'} style={{ height: `${res.profit_loss_2.replace('-', '+')}` * 10 + '%' }}><p>{res.profit_loss_2}</p></td>
                              </tr> : ''
                            }
                            {(res?.revenue_third && res?.profit_loss_3) ?
                              <tr className='qtr'>
                                <td className='sent bar' style={{ height: `${res.revenue_third.split(' ')[0]}` * 10 + '%' }}><p>{res.revenue_third.split(' ')[0]}</p></td>
                                <td className={res.profit_loss_3 < 0 ? 'paid bar loss' : 'paid bar profit'} style={{ height: `${res.profit_loss_3.replace('-', '+')}` * 10 + '%' }}><p>{res.profit_loss_3}</p></td>
                              </tr> : ''}

                            {(res?.revenue_fourth && res?.profit_loss_4) ?
                              <tr className='qtr'>
                                <td className='sent bar' style={{ height: `${res.revenue_fourth.split(' ')[0]}` * 10 + '%' }}><p>{res.revenue_fourth.split(' ')[0]}</p></td>
                                <td className={res.profit_loss_4 < 0 ? 'paid bar loss' : 'paid bar profit'} style={{ height: `${res.profit_loss_4.replace('-', '+')}` * 10 + '%' }}><p>{res.profit_loss_4}</p></td>

                              </tr> : ''}


                          </tbody>
                        </table>

                        <div className='ticks'>
                          <div className='tick' ><p>10</p></div>
                          <div className='tick' ><p>8</p></div>
                          <div className='tick' ><p>6</p></div>
                          <div className='tick' ><p>4</p></div>
                          <div className='tick' ><p>2</p></div>
                          <div className='tick' ><p>0</p></div>
                        </div>
                        <div className='for-date'>
                          {
                            res?.revenue_first ?
                              <div className='sub-l1'>
                                {res?.revenue_first.split(' ')[1]}
                              </div> : ''
                          }
                          {
                            res?.revenue_second ?
                              <div className='sub-l1'>
                                {res?.revenue_second.split(' ')[1]}
                              </div> : ''
                          }
                          {
                            res?.revenue_third ?
                              <div className='sub-l1'>
                                {res?.revenue_third.split(' ')[1]}
                              </div> : ''
                          }
                          {
                            res?.revenue_fourth ?
                              <div className='sub-l1'>
                                {res?.revenue_fourth.split(' ')[1]}
                              </div> : ''
                          }


                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </section>

      {/* IPO Date section */}
      <section className='ipo-dates-section'>
        <div className='container'>
          {
            apiData?.map((res) => {
              return (
                <div className='row'>
                  <div className='col-xl-8'>
                    <div>
                      <h2 className='title-first'>{res.ipo_detail_title} <span>IPO Dates</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                      <table className='table table-striped2'>
                        <tbody>
                          <tr>
                            <td>{res.open_date_name}</td>
                            <td className='txt-right'>{res.open_date ? utils.formatDate(new Date(res.open_date), "dd MMMM , yyyy") : 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.close_date_name}</td>
                            <td className='txt-right'>{res.close_date ? utils.formatDate(new Date(res.close_date), "dd MMMM , yyyy") : 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.ipo_date_allotment_name}</td>
                            <td className='txt-right'>{res.ipo_date_allotment ? utils.formatDate(new Date(res.ipo_date_allotment), "dd MMMM , yyyy") : 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.ipo_date_initiation_of_refunds}</td>
                            <td className='txt-right'>{res.ipo_Initiation_of_Refunds_value || 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.ipo_date_Credit_of_Shares_name}</td>
                            <td className='txt-right'>{res.ipo_date_Credit_of_Shares || 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.ipo_date_listing}</td>
                            <td className='txt-right'>{res.ipo_date_listing_value || 'To be announced'}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )
            }
            )}
        </div>
      </section>

      {/* IPO Lot Size */}

      <section className='ipo-lotsize'>
        <div className='container'>
          {
            apiData?.map((res) => {
              return (
                <div className='row'>
                  <div className='col-xl-8'>
                    <div>
                      <h2 className='title-first'>{res.ipo_detail_title} <span>IPO Lot Size</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                      <table className='table table-striped2'>
                        <tbody>
                          <tr>
                            <td>{res.ipo_lot_minimum}</td>
                            <td className='txt-right'>{res.ipo_lot_minimum_value || 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.ipo_lot_maximum}</td>
                            <td className='txt-right'>{res.ipo_lot_maximum_value || 'To be announced'}</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )
            }
            )}
        </div>
      </section>

      {/* Don’t Miss the Investment */}

      <section className='investment-opportunity'>
        <div className='container'>
          {
            apiData?.map((res) => {
              return (
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='left-sec'>
                      <h2 className='title-first'><span className='yello-txt'>Don’t Miss</span> the Investment <span className='yello-txt'>Opportunity</span> in {res.banner_title}?</h2>
                      <div className='btn-open'>
                        <button className="btn-bg btn-bg-dark" onClick={() => {
                          utils.pushDataLayerEvent({
                            'event': 'open_free_account_btn',
                            'page_path': window.location.pathname,
                            'page_url': window.location.href,
                            'lead_source': 'choiceindia',
                            'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                          })
                          window.open(res.open_free_account_link || '')
                        }}>Open Free Account</button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    {
                      view && !view.matches ?

                        <Slider {...settings} className='all-features-list'>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_1}`} alt={res.investment_image_1_alt} className={"img-fluid svg-w"} width={"84"} height={"76"} />
                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_1 }}></div></h5>
                          </div>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_2}`} alt={res.form_image_2_alt} className={"img-fluid svg-w"} width={"77"} height={"76"} />
                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_2 }}></div></h5>
                          </div>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_3}`} alt={res.form_image_3_alt} className={"img-fluid svg-w"} width={"53"} height={"76"} />

                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_3 }}></div></h5>
                          </div>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_4}`} alt={res.form_image_4_alt} className={"img-fluid svg-w"} width={"76"} height={"76"} />
                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_4 }}></div></h5>
                          </div>
                        </Slider>
                        :
                        <div className='all-features-list'>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_1}`} alt={res.form_image_1_alt} className={"img-fluid svg-w"} width={"84"} height={"76"} />

                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_1 }}></div></h5>
                          </div>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_2}`} alt={res.form_image_2_alt} className={"img-fluid svg-w"} width={"77"} height={"76"} />

                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_2 }}></div></h5>
                          </div>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_3}`} alt={res.form_image_3_alt} className={"img-fluid svg-w"} width={"53"} height={"76"} />

                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_3 }}></div></h5>
                          </div>
                          <div className="feature-item">
                            <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.investment_image_4}`} alt={res.form_image_4_alt} className={"img-fluid svg-w"} width={"76"} height={"76"} />
                            <h5 className="feature-ttl"><div dangerouslySetInnerHTML={{ __html: res.investment_name_4 }}></div></h5>
                          </div>
                        </div>
                    }
                  </div>
                </div>
              )
            }
            )}
        </div>
      </section>

      {/* Subscription Breakup */}

      <section className='ipo-breakup'>
        <div className='container'>
          {
            apiData?.map((res) => {
              return (
                <div className='row'>
                  <div className='col-xl-8'>
                    <div>
                      <h2 className='title-first'>{res.banner_title} <span>Subscription Breakup</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                      <table className='table table-striped2'>
                        <tbody>
                          <tr>
                            <td>{res.breakup_qib_name}</td>
                            <td className='txt-right'>{res.breakup_qib_value || 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.breakup_non_institutional_name}</td>
                            <td className='txt-right'>{res.breakup_institutional_value || 'To be announced'}</td>
                          </tr>
                          <tr>
                            <td>{res.breakup_retails_name}</td>
                            <td className='txt-right'>{res.breakup_retail_value || 'To be announced'}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )
            }
            )}
        </div>
      </section>

      {/* How to Apply */}

      <section className='how-apply-ipo'>
        <div className='container'>
          {
            apiData?.map((res) => {
              return (
                <div className='row'>
                  <div className='col-xl-8'>
                    <div>
                      <h2 className='title-first'><span>How to Apply</span> for {res.banner_title}?</h2>
                    </div>
                    <div className='steps-sec' dangerouslySetInnerHTML={{ __html: res.applys_steps }}>

                    </div>
                    <div className="btn-open">
                      <button className="btn-bg" onClick={() => window.open(res.applying_link || '')}>Apply for {res.banner_title}</button>
                    </div>
                  </div>
                </div>
              )
            }
            )}
        </div>
      </section>
      {/* faq section for ipo page */}

      <section className='ipo-faq'>
        {
          apiData?.map((res) => {
            return (
              <div className="container" >

                <div className="row">
                  <div className="col-xl-8">
                    <h2 className="title-first">{res.ipo_detail_title} <span>IPO FAQs</span></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                      {
                        (res?.ipo_faq_1 && res?.ipo_faq_desc_1) ?
                          <Accordion.Item eventKey="0" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_1}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_1}
                            </Accordion.Body>
                          </Accordion.Item> : ''
                      }
                      {
                        (res?.ipo_faq_2 && res?.ipo_faq_desc_2) ?
                          <Accordion.Item eventKey="1" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_2}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_2}
                            </Accordion.Body>
                          </Accordion.Item> : ""}
                      {
                        (res?.ipo_faq_3 && res?.ipo_faq_desc_3) ?
                          <Accordion.Item eventKey="2" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_3}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_3}
                            </Accordion.Body>
                          </Accordion.Item> : ""}
                      {
                        (res?.ipo_faq_4 && res?.ipo_faq_desc_4) ?
                          <Accordion.Item eventKey="3" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_4}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_4}
                            </Accordion.Body>
                          </Accordion.Item> : ''}
                      {
                        (res?.ipo_faq_5 && res?.ipo_faq_desc_5) ?
                          <Accordion.Item eventKey="4" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_5}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_5}
                            </Accordion.Body>
                          </Accordion.Item> : ""}
                      {
                        (res?.ipo_faq_6 && res?.ipo_faq_desc_6) ?
                          <Accordion.Item eventKey="5" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_6}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_6}
                            </Accordion.Body>
                          </Accordion.Item> : ''}
                      {
                        (res?.ipo_faq_7 && res?.ipo_faq_desc_7) ?
                          <Accordion.Item eventKey="6" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_7}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_7}
                            </Accordion.Body>
                          </Accordion.Item> : ''}
                      {
                        (res?.ipo_faq_8 && res?.ipo_faq_desc_8) ?
                          <Accordion.Item eventKey="7" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_8}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_8}
                            </Accordion.Body>
                          </Accordion.Item> : ''}
                      {
                        (res?.ipo_faq_9 && res?.ipo_faq_desc_9) ?
                          <Accordion.Item eventKey="8" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_9}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_9}
                            </Accordion.Body>
                          </Accordion.Item> : ''}
                      {
                        (res?.ipo_faq_10 && res?.ipo_faq_desc_10) ?
                          <Accordion.Item eventKey="9" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>{res.ipo_faq_10}</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                              {res.ipo_faq_desc_10}
                            </Accordion.Body>
                          </Accordion.Item> : ''
                      }


                    </Accordion>




                  </div>
                </div>
              </div>
            )
          }
          )}
      </section>


    </>
  );
}

export default Banner;
