
const e = React.createElement;
const $ = React.createElement;
/**
 * FAQ section
 * @returns FAQ Component
 */
const FaqCommon = () => {
  const [activeAcc, activeAccordion] = React.useState(true);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);

  /**
   * Get FAQ List
   */
  function getData() {
    var myHeaders = new Headers();
    myHeaders.append("authorization", " Basic d09tdkVOeXJSZElaMW9oOXNpVE86eA==");
    myHeaders.append("Cookie", "_x_w=20");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch('https://choicebroking.freshdesk.com/api/v2/solutions/folders/22000178107/articles', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(users => {
        setData(prevUsers => ([...prevUsers, ...users].filter((ele,i)=>i<5)));
      });
  }
  return (
    <section className="basket-faqs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-sec text-center">
              <h3 className="title-first">FAQs</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="accordion-container">
              {
                data.map((res, i) => {
                  return (

                    <div className="ac accordion-item" key={i} onClick={() => activeAccordion(false)}>
                      <button className="ac-q acc" data-bs-toggle="collapse" data-bs-target={"#collapseone" + res.id} aria-expanded="true" >
                        {res.title}
                      </button>
                      <div className={"ac-a accordion-collapse collapse" + ((activeAcc && i == 0) ? "show" : "")} id={"collapseone" + res.id}>
                        <div><p>{res.description_text}</p></div>
                      </div>
                    </div>


                  )
                })
              }
            </div>
          </div>
          <div className="col-md-12 text-center">     
          <a className="btn-bg btn-banner" href='https://choicebroking.freshdesk.com/support/solutions/folders/22000178107' target='_blank' >
            Explore FAQ's
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}



/**
 * Basket Section Code
 * @returns Basket Component
 */
function BasketSection() {
  const [skeleton, setSkeleton] = React.useState(() => true);
  const [checkdevice, setcheckdevice] = React.useState(false);
  const [videoVisibility, setVideoVisibility] = React.useState(false);
  const [displayShimmer, setDisplayShimmer] = React.useState(false);

  const myTimeout = setTimeout(myGreeting, 700);
  function myGreeting() {
    setSkeleton(() => false);
  }

  /**
   * Detect Device
   */
  function Detect() {
    if (/Android|webOS|windows phone|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      setcheckdevice(false)
    } else if (/iPod|iPhone|iPad/i.test(navigator.userAgent)) {
      setcheckdevice(true)
    }
  }


  
  // let imgLoad=[
  //   {id:'camp-logo',img:'<img  src="images/basket/choicelogo.webp" className="img-fluid" alt="loading"  loading="lazy" />'},
  //   {id:'banner-image',img:'<img  src="images/basket/banner-image.webp" className="img-fluid bannerimg" alt="loading" loading="lazy"/>'}
  // ]

  // setTimeout(() => {
  //   imgLoad.forEach(ele=>{
  //     let doc=document.getElementById(ele.id)
  //     if(doc){
  //       doc.innerHTML = ele.img; 
  //     }
  //   })
  // }, 2000);


  
  // let imgLoad=[{id:'camp-logo',img:<img  src="images/basket/choicelogo.webp" className="img-fluid" alt="loading" />}]

  // setTimeout(() => {
  //   imgLoad.forEach(ele=>{
  //     let doc=document.getElementById(ele.id)
  //     if(doc){
  //       doc.innerHTML=ele.img
  //     }
  //   })
  // }, 2000);
  // React.useEffect(() => {
  //   setDisplayShimmer(true);
  //   setTimeout(() => {
  //     setDisplayShimmer(false);
  //   }, 200);    
  // }, [])
  if (!displayShimmer) {
    return (


      skeleton ?
      <div className='template-parent'>
            <section className='template-child-3'>
                <div className='template-child3-content'>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className='template-child3-img'>
                </div>
            </section>
            <section className='template2-child-1'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
            <section className='template2-child-2'>
                <h1></h1>
                <p></p>
            </section>
            <section className='template3-child-3'>
                <div className='template3-child3-content'>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <h3></h3>
                </div>
                <div className='template3-child3-img'>
                    <div></div>
                </div>
            </section>
            <section className='template3-child-3'>
                <div className='template3-child3-img'>
                    <div></div>
                </div>
                <div className='template3-child3-content'>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <h3></h3>
                </div>
            </section>
        </div>
  :
      <div className="Home" id="root">
        <header className="camp-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a href="https://choiceindia.com/" className="camp-logo" id="camp-logo">
                <img  src="images/basket/choicelogo.webp" className="img-fluid logoimg" alt="loading" loading="lazy" /> 
                {/* <img  src="images/basket/choicelogo.webp" className="img-fluid" alt="loading" loading="lazy" /> */}
                 {/* {return setTimeout(()=>{
                  return  <img  src="images/basket/choicelogo.webp" className="img-fluid" alt="loading" />
                 },1000)} */}
                 {
                  // customImageLoader( <img  src="images/basket/choicelogo.webp" className="img-fluid" alt="loading" />)
                 }
                  </a>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="banner">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-md-6">
                  <div className="banner-caption">
                    <h1>Basket Investing Simplified for You</h1>
                    <div><p>Diversify your portfolio by investing in stocks through
                      <span> Thematic Baskets</span>
                    </p></div>
                    <div onClick={() => Detect()}>
                      {
                        checkdevice === true ?
                          <a className="btn-bg btn-banner" href='https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1' target='_blank' >
                            <span  >Explore Baskets</span>
                          </a>
                          :
                          <a className="btn-bg btn-banner" href='https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy' target='_blank'  >
                            <span >Explore Baskets</span>
                          </a>
                      }
                    </div>

                    <div><p>Don’t have an account? <span><a href="https://choiceindia.com/open-free-demat-account">Open Now</a></span> </p></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img  fetchpriority="high" src="images/basket/banner-image.webp" className="img-fluid bannerimg" alt="loading" />
                </div>
              </div>
            </div>
          </section>

          <section className="basket-investing">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-sec text-center">
                    <h2 className="title-first">Why Basket Investing?</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="basket-investing-list">
                    <div className="investing-list-itm">
                      <div className="list-itm-box">
                        <img  src="images/basket/income-source.svg" className="img-icon basketicon" alt="Loading" loading="lazy" />
                        <h3>Passive Income Source</h3>
                        <div><p>To achieve your financial goals, invest in thematic baskets to create a passive income source.
                        </p></div>
                      </div>
                    </div>
                    <div className="investing-list-itm">
                      <div className="list-itm-box">
                        <img  src="images/basket/portfoio-optimisation.svg" className="img-icon basketicon" alt="Loading"  loading="lazy" />
                        <h3>Quantitative Portfolio Optimisation</h3>
                        <div><p>A quantitative optimised process that has been back-tested for the past 10 years and aims to
                          reduce portfolio volatility in contrast to the benchmark.</p></div>
                      </div>
                    </div>
                    <div className="investing-list-itm">
                      <div className="list-itm-box">
                        <img  src="images/basket/quarterly-rebalanceing.svg" className="img-icon basketicon" alt="Loading" loading="lazy"  />
                        <h3>Quarterly Rebalancing</h3>
                        <div><p>Our skilled research team evaluates the performance of the baskets on a quarterly basis in order
                          to rebalance your portfolio and achieve the highest CAGR possible.</p></div>
                      </div>
                    </div>
                    <div className="investing-list-itm">
                      <div className="list-itm-box">
                        <img  src="images/basket/minimum-investment.svg" className="img-icon basketicon" alt="Loading"  loading="lazy" />
                        <h3>Minimum Investment</h3>
                        <div><p>With a minimum investment of Rs. 6000, you can begin investing in baskets.</p></div>
                      </div>
                    </div>
                    <div className="investing-list-itm">
                      <div className="list-itm-box">
                        <img  src="images/basket/no-extra-cost.svg" className="img-icon basketicon" alt="Loading"  loading="lazy" />
                        <h3>No Extra Cost</h3>
                        <div><p>Investing in Baskets is absolutely free, with the exception of the brokerage fee charged when the
                          order is placed.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="baskets-features-cont">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-sec">
                    <h3 className="title-first">Thematic Baskets for Everyone</h3>
                    <div><p>Our research team has created thematic baskets to make investing easier that could be aligned with
                      your financial goals.</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="baskets-features-list-cont">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <BasketLand></BasketLand>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div onClick={() => Detect()}>
                      {
                        checkdevice === true ?
                          <a className="exp-btn" href='https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1' target='_blank' >
                            <span  >Explore more BASKETS!</span>
                          </a>
                          :
                          <a className="exp-btn" href='https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy' target='_blank' >
                            <span >Explore more BASKETS!</span>
                          </a>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="start-basket-steps">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-sec text-center">
                    <h3 className="title-first">How to Start Basket Investing with Choice?</h3>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="imgwrap">
                    {/*  */}
                    {!videoVisibility && <div className="youtube-container">
                      <img  className="youtube-container-img" src="images/basket/youtube_icon.webp" alt="Loading" onClick={() => {

                        console.log("Onhover")
                        setVideoVisibility(true)
                      }}></img>


                      <div className="ytubeBg" title="Click to play" onClick={() => {

                        console.log("Onhover")
                        setVideoVisibility(true)
                      }}>
                        <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="-7 0 50 55">
                          <path className="path" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" />
                        </svg>
                      </div>
                    </div>}
                   
                   {videoVisibility&& <iframe width="470" src="https://www.youtube.com/embed/WrL6Ihbg8LU?autoplay=1" height="350" id="my-deferred-iframe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen de></iframe>}
                  </div>

                </div>
                <div className="col-md-5">
                  <div className="basket-steps-list">
                    <div className="steps-list-itm">
                      <h4>Select the basket</h4>
                      <div><p>To begin investing, select one of our specifically crafted thematic baskets.</p></div>
                    </div>
                    <div className="steps-list-itm">
                      <h4>Place Order</h4>
                      <div><p>After you've chosen your basket, you can place your order, which will be completed during market hours.</p></div>
                    </div>
                    <div className="steps-list-itm">
                      <h4>Basket in Portfolio</h4>
                      <div><p>The invested basket would be available in your portfolio.</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="basket-quick-bar">
            <div className="container">
              <div className="quick-bar-middle">
                <h3>Start investing in Baskets with Choice</h3>

                <div onClick={() => Detect()}>
                  {
                    checkdevice === true ?
                      <a className="btn-bg btn-bg-light" href='https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1' target="_blank"  >
                        <span  >Invest Now</span>
                      </a>
                      :
                      <a className="btn-bg btn-bg-light" href='https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy' target="_blank"  >
                        <span >Invest Now</span>
                      </a>
                  }
                </div>
              </div>
            </div>
          </section>
          <FaqCommon></FaqCommon>
        </main>
        <footer className="main-footer">
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="article">
                    <div className="footer-bottom">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="article">
                              <p><span className="bold">SEBI Reg. No. of RA</span>- INH000000222</p>
                              <p>
                                <span className="bold"> Certification:</span> The views expressed in this advertisement accurately reflect the personal views of the analyst(s) about the subject securities or issuers and no part of the compensation of the research analyst(s) was. is, or will be directly or indirectly related to the specific recommendations or views expressed by the research analyst(s). The advertisements are bound by stringent internal regulations and also legal and statutory requirements of the Securities and Exchange Board of India (hereinafter "SEBI").
                              </p>
                              <p><span className="bold">Disclaimer:</span> Investment in the securities market is subject to market risks, read all the related documents carefully before investing.</p>
                              <p><span className="bold">Note:</span> Basket is not an approved product of exchange. Any grievances will not be dealt at the exchange. Jiffy app users can access the basket feature.</p>
                              <p><span className="bold">Address:</span> Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099.</p>
                              <p>&copy; Choiceinternational. CIN - U65999MH2010PTC198714.        All Rights Reserved.</p>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  } else {
    return (
      <div className="card br">
        <div className="wrapper">
          <div className="profilePic animate din"></div>
          <div className="comment br animate w80"></div>
          <div className="comment br animate"></div>
          <div className="comment br animate"></div>
        </div>
        <div></div>
      </div>
    )
  }

}

function BasketLand() {
  let values;
  const [value, setValue] = React.useState({});

  React.useEffect(() => {
    generateSessionId();
   // loadDeferredIframe();
  }, [])


  /**
   * Generate Session Id
   */
  function generateSessionId() {
    fetch('https://api.jiffy.in/api/settings/GenKey')
      .then(response => {
        return response.json();
      })
      .then(res => {
        let unique = res.Response
        var myHeaders = new Headers();
        myHeaders.append("authorization", `${unique} ${unique}`);
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        fetch('https://jiffy.choiceindia.com/api/jiffy/Basket/List', requestOptions)
          .then(response => {
            return response.json();
          })
          .then(res => {
            values = res.Response.baskets;

            let basketFormatted = {}

            values.forEach(ele => {
              basketFormatted[ele.name] = ele

            })
            setValue(basketFormatted);

          });
      })

  }

  /**Load Youtube Video */
  function loadDeferredIframe() {
    setTimeout(() => {
      let iframe = document.getElementById("my-deferred-iframe");
      iframe.src = 'https://www.youtube.com/embed/WrL6Ihbg8LU';
      setDisplayShimmer(false);
    }, 3000);
  }
  return (

    <div className="baskets-features-list" id="basketInvest">
      <div className="feature-item">
        <img  className="img-fluid basketicon" alt="Loading" src="images/basket/large-cap-stars.svg"  loading="lazy" />
        <h4>Large Cap Stars</h4>
        <div><p>The Large Cap Stars basket selects Large Cap stocks on a factor investing framework from the
          Nifty100 Index. The stocks are carefully selected on a factor-based approach encompassing smart
          beta factors.</p></div>
        <h5>Minimum Investment - <span>Rs. {value['Large Cap Stars'] ? value['Large Cap Stars'].minamt : 0}/-</span></h5>

      </div>
      <div className="feature-item">
        <img  className="img-fluid basketicon" alt="Loading" src="images/basket/alpha-auto.svg"  loading="lazy" />
        <h4>Alpha Auto Ancillaries</h4>
        <div><p>The Auto Ancillaries Alpha (“AAA”) sectoral basket selects automobile parts manufacturing stocks
          on a factor investing framework. The stocks are carefully selected on a factor-based approach
          encompassing smart beta factors and liquidity factors. </p></div>
        <h5>Minimum Investment - <span>Rs. {value['Alpha Auto Ancillaries'] ? value['Alpha Auto Ancillaries'].minamt : 0}/-</span></h5>

      </div>
      <div className="feature-item">
        <img  className="img-fluid basketicon" alt="Loading" src="images/basket/supermarket.svg"  loading="lazy" />
        <h4>Supermarket</h4>
        <div><p>The FMCG (“Supermarket”) sectoral basket selects FMCG stocks on a factor investing framework. The
          stocks are carefully selected on a factor-based approach encompassing smart beta factors and
          liquidity.</p></div>
        <div id="basketInvest">
          <h5>Minimum Investment -<span>Rs. {value['Supermarket'] ? value['Supermarket'].minamt : 0}/-</span></h5>
        </div>

      </div>
      <div className="feature-item">
        <img  className="img-fluid basketicon" alt="Loading" src="images/basket/mighty-it.svg"  loading="lazy" />
        <h4>Mighty IT</h4>
        <div><p>The (“Mighty IT”) sectoral basket selects IT stocks on a factor investing framework. The stocks
          are carefully selected on a factor-based approach encompassing smart beta factors and liquidity
          factors. </p></div>
        <h5>Minimum Investment - <span>Rs. {value['Mighty IT'] ? value['Mighty IT'].minamt : 0}/-</span></h5>

      </div>
    </div>
  )
}

let data = document.querySelectorAll('.basket_container')

const commentID = parseInt(data[0].dataset.commentid, 10);
const root = ReactDOM.createRoot(data[0]);
root.render(
  e(BasketSection, { commentID: commentID })
);



