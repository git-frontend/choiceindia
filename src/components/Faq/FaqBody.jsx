import React, { useState, useEffect, useRef } from 'react';
import { Accordion } from 'react-bootstrap';
import faqService from '../../Services/faqService';
import LazyLoader from '../Common-features/LazyLoader';
import { Button, Form } from "react-bootstrap";
import image1 from "../../assets/images/Faq/faq-banner.webp";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import Spinner from 'react-bootstrap/Spinner';
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function FaqBody() {
  const [list, setList] = useState([]);
  const [searchlist, setSearchlist] = useState([]);
  const [list2, setList2] = useState("Stocks");
  const [trigger, setTrigger] = useState(false);
  const [folder, setFolder] = useState([]);
  const [article, setArticle] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [isloader, setIsloader] = useState(false)
  const [selected, setSelected] = useState(0);
  const [isarticle, setIsarticle] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [iscategory, setiscategory] = useState(true);
  let data = '';
  var active = useRef('');
  const [searchParams, setSearchParams] = useSearchParams();
  active.current = searchParams.get('active') || '';
  // console.log("check",active.current)

  /** yup validation search text */
  const schema = yup.object().shape({
    faq: yup.string().required("plz write your queries")
  })

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 6,
    autoplay: false,
    margin: 10,
    dots: false,
    autoplaySpeed: 800,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
          dots:true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          arrows: false,
        },
      },
    ],
  };

  /** Get Faq qus  */
  const faqChange = (e2) => {
    data = e2.target.value;
  };



  /** Faq search text */

  const { register, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });


  /** faq search function */

  function loadfaqsearch() {
    setIsloader(true);
    setisloading(true);

    faqService.FaqSearch(data).then(
      res => {
        if (res) {
          setisloading(false);
          chapterScroll('faq-section')
          setIsloader(false)
          setIsarticle(true);
          setSelected(-1)
          setSearchlist(res);

        } else {
          setisloading(false);
          setSearchlist([]);

        }



      }
    ).catch((error) => {
      setisloading(false);
      setSearchlist([]);
    });

  };


  /** scroll id view */

  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  /** FAQ category section */

  function loadfaqcategory() {
    // setisloading(true);
    faqService.FaqCategory().then(
      res => {
        if (res) {
          setiscategory(false)
          setList(res);
          if(active.current == 'loan') {
            loadfaqFolder("22000109076");
            setSelected(5)
            setList2("Loans")

          } else{
            loadfaqFolder(res[0].category_linkage);

          } 

        } else {
          setiscategory(false)
          setList([]);

        }

      }
    ).catch((error) => {
      setiscategory(false)
      setList([]);
    });
  };

  /** FAQ Folder section */

  function loadfaqFolder(id) {
    // console.log("id " ,id)
    setisloading(true);
    faqService.FaqFolder(id).then(
      res => {
        if (res) {
          setisloading(false)
          setFolder(res)
          loadfaqarticle(res[0].id);

        } else {
          setisloading(false)
          setFolder([])
        }


      }
    ).catch((error) => {
      setisloading(false)
      setFolder([]);
    });
  };

  /** FAQ Article section */

  function loadfaqarticle(id) {
    setisloading(true);
    faqService.FaqArticle(id).then(
      res => {
        if (res) {
          setisloading(false)
          setArticle(res)
        } else {
          setisloading(false)
          setArticle([])
        }


      }
    ).catch((error) => {
      setisloading(false)
      setArticle([]);
    });
  };

  /** FAQ search text clear */

  function categoryClick() {
    let h = document.getElementById('value3')
    h.value = ""

  }

  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
      loadfaqcategory();

      var input = document.getElementById("value3");
      input.addEventListener("keypress", function (eve) {
        if (eve.key === "Enter") {

          document.getElementById("btnsearch").click();
        }
      })
    }

  }, [trigger])

  return (
    <>
      <div className="faq-main">

        <section className="banner-app">
          <img src={image1} className="ban-img" alt='Loading' width={"1519"} height={"669"} />
          <div className='app-banner-caption'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='caption-cont'>
                    <h1 className='big-ttl faq-title'>How can I help you ?</h1>

                    <div className="faq-search" >

                      <Form.Control type="text" id="value3" autoComplete="off" placeholder="Search for your issue" className="formcontrol" {...register('faq', { onChange: (e2) => { faqChange(e2) } })} />

                      <Button type='submit' id="btnsearch" variant="warning" onClick={() => data.length > 0 ? loadfaqsearch() : ''}>{isloader == false ? 'Search' : <Spinner animation="border" />}</Button>
                    </div>
                    <div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className='faq-body'>

          <section className="security-privacy same-list-bx">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                  <div className="heading-sec">
                    <h3 className="title-first ">Looking for an Answer?</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {
                    iscategory ?
                      <div className="text-center">
                        <div>
                          {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
                          <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                          </div>
                      </div>
                      :
                      <div>
                        {
                          list && list.length === 0 ?
                            <div className="text-center">
                              <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                            </div> :
                            // <div className="same-list-bx-list">

                            //   {
                            //     list.map((response, i) => {
                                   

                            //       let classNameNm2 = "same-list-bx-item" + ((i === selected) ? ' bx-item-cont-active' : "")


                            //       return (
                            //         <div key={response.id} className={classNameNm2} onClick={() => {

                            //           loadfaqFolder(response.category_linkage);
                            //           setList2(response.category_name);
                            //           setSelectedId(0);
                            //           setSelected(i);
                            //           setIsarticle(false);
                            //           // scrollToElement();
                            //         }}>
                            //           <div className="bx-item-cont" onClick={() => { chapterScroll('faq-section'); categoryClick() }}  >
                            //             <span className='cont-img'>
                            //               <img src={`https://cmsapi.choiceindia.com/assets/${response.category_icon || 'No data'}`} className="sl-img" alt="" width={"50"} height={"50"} />
                            //             </span>
                            //             <h4>{response.category_name || 'No data'}</h4>
                            //             {/* <p>{response.category_description || 'No data'}</p> */}
                            //           </div>
                            //         </div>
                            //       )
                            //     }
                            //     )
                            //   }


                            // </div>
                            <Slider {...settings} className="same-list-bx-list same-list-faq">
                             {
                                list.map((response, i) => {
                                   

                                  let classNameNm2 = "same-list-bx-item" + ((i === selected) ? ' bx-item-cont-active' : "")


                                  return (
                                    <div key={response.id} className={classNameNm2} onClick={() => {

                                      loadfaqFolder(response.category_linkage);
                                      setList2(response.category_name);
                                      setSelectedId(0);
                                      setSelected(i);
                                      setIsarticle(false);
                                      // scrollToElement();
                                    }}>
                                      <div className="bx-item-cont" onClick={() => { chapterScroll('faq-section'); categoryClick() }}  >
                                        <span className='cont-img'>
                                          <img src={`https://cmsapi.choiceindia.com/assets/${response.category_icon || 'No data'}`} className="sl-img" alt="" width={"50"} height={"50"} />
                                        </span>
                                        <h4>{response.category_name || 'No data'}</h4>
                                        {/* <p>{response.category_description || 'No data'}</p> */}
                                      </div>
                                    </div>
                                  )
                                }
                                )
                              }

                              </Slider>
                        }

                      </div>
                      
                  }

                  

                </div>
              </div>
            </div>
          </section>

          {
            isarticle == false ?

              <section className='faq-accordion'  >
                <div className='container'>
                  <div className='faq-header' id='faq-section'>
                    <h1>{list2}</h1>
                  </div>
                  {
                    isloading ?
                      <div className="text-center">
                        <div>
                          {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> */}
                          <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                           </div>
                      </div>
                      :
                      <div>
                        {
                          (article && article.length) ?
                            <div className='faq-container'>
                              <div className='content-list accordion-lists' >
                                {
                                  folder.map((response, index) => {

                                    let classNameNm = "content-list-itm" + ((index === selectedId) ? ' list-itm-active' : '')



                                    return (
                                      <div key={response.id} className={classNameNm} onClick={() => {
                                        loadfaqarticle(response.id);
                                        chapterScroll('faq-section');
                                        setSelectedId(index)
                                      }}>
                                        <p>{response.name || 'No data'}</p>
                                      </div>

                                    )
                                  }
                                  )
                                }


                              </div>
                              <div className='content-list accordion-list ' >

                                <Accordion defaultActiveKey="0" >

                                  {
                                    article.map((res, index) => {

                                      return (
                                        <div key={res.id}>
                                          <Accordion.Item eventKey={index}>
                                            <Accordion.Header >{res.title || 'Loading'}</Accordion.Header>
                                            {/**<div className={"ac-a accordion-collapse collapse" + ((active && index == 0) ? " show" : "")}>*/}
                                            <Accordion.Body  dangerouslySetInnerHTML={{__html: res.description}}>
                                              
                                              {/* {res.description_text  || 'Loading'} */}
                                            </Accordion.Body>
                                            {/**</div>*/}
                                          </Accordion.Item>
                                        </div>

                                      )
                                    })

                                  }


                                </Accordion>


                              </div>
                            </div> :
                            <div className="text-center">
                              <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                            </div>


                        }
                      </div>
                  }


                </div>
              </section> :

              <section className='faq-accordion' id='faq-section'>
                <div className='container'>

                  <div className='faq-container justify-content-center'>
                    {
                      isloading ?
                        <div className="text-center">
                          <div>
                            {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
                            <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                            {/* <video className='img-fluid d-block mx-auto' autoPlay loop muted height={250} width={250}>
                      <source src={loaderimg2}  type='video/mp4' />
                    </video> */}
                          </div>
                        </div>
                        :
                        <div className='content-list accordion-list ' >
                          {
                            searchlist.length ?
                              <Accordion defaultActiveKey="0" >

                                {
                                  searchlist.map((res, index) => {

                                    return (
                                      <div key={res.id}>
                                        <Accordion.Item eventKey={index}>
                                          <Accordion.Header >{res.title || 'Loading'}</Accordion.Header>
                                          {/**<div className={"ac-a accordion-collapse collapse" + ((active && index == 0) ? " show" : "")}>*/}
                                          <Accordion.Body dangerouslySetInnerHTML={{__html: res.description}}>
                                            {/* {res.description_text || 'Loading'} */}
                                          </Accordion.Body>
                                          {/**</div>*/}
                                        </Accordion.Item>
                                      </div>

                                    )
                                  })

                                }


                              </Accordion> :
                              <div className="text-center">
                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                              </div>
                          }


                        </div>


                    }


                  </div>
                </div>
              </section>

          }
        </div>


      </div>
    </>
  )
}
