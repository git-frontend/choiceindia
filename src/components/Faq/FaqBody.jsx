import React, { useState, useEffect, useRef } from 'react';
import { Accordion } from 'react-bootstrap';
import faqService from '../../Services/faqService';
import LazyLoader from '../Common-features/LazyLoader';
import { Button, Form } from "react-bootstrap";
import image1 from "../../assets/images/Faq/faq-banner.webp";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function FaqBody() {
  const [list, setList] = useState([]);
  const [searchlist, setSearchlist] = useState([]);
  const [list2, setList2] = useState("Stocks");
  const [trigger, setTrigger] = useState(false);
  const [folder, setFolder] = useState([]);
  const [article, setArticle] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [select, setSelect] = useState(-1);

  const [selected, setSelected] = useState(0);
  const [isactive, setIsactive] = useState(false);
  const [isarticle, setIsarticle] = useState(false);
  let data = '';




  const schema = yup.object().shape({
    faq: yup.string().required("plz write your queries")
  })



  /** Get Faq qus  */
  const faqChange = (e2) => {
    // setdata(e2.target.value)
    data = e2.target.value;
  };




  const { register, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  function loadfaqsearch() {
    chapterScroll('faq-section')
    setIsactive(false)
   
    faqService.FaqSearch(data).then(
      res => {
        setIsactive(true)
        setSearchlist(res);




        // loadfaqFolder(res[0].category_linkage);
      }
    )
  };


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

  function clearvalue() {
    console.log("check");
    let btnClear = document.querySelector('.ser');
    let inputs = document.querySelectorAll('.formcontrol');
    btnClear.addEventListener('click', () => {
      inputs.forEach(data => data.value = "")
    });
  }



  function loadfaqcategory() {
    faqService.FaqCategory().then(
      res => {
        setList(res);
        loadfaqFolder(res[0].category_linkage);
      }
    )
  };

  function loadfaqFolder(id) {
    faqService.FaqFolder(id).then(
      res => {
        setFolder(res)
        loadfaqarticle(res[0].id);
      }
    )
  };


  function loadfaqarticle(id) {
    faqService.FaqArticle(id).then(
      res => {
        setArticle(res)
      }
    )
  };

  function categoryClick(){
    console.log("check");
    let btnClear = document.querySelector('.ser');
    let inputs = document.querySelectorAll('.formcontrol');
    btnClear.addEventListener('click', () => {
      inputs.forEach(data => data.value = "")
    });
    // chapterScroll('faq-section')

  }



  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
      loadfaqcategory();
      // clearvalue()

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
                    <Form>
                    <div className="faq-search" >
                      <Form.Control type="text" autoComplete="off" placeholder="Search for your issue" className="formcontrol" {...register('faq', { onChange: (e2) => { faqChange(e2) } })} />
                      <Button type="submit" className='ser' variant="warning" onClick={() => data.length > 0 ? loadfaqsearch() : ''}>Search</Button>
                    </div>

                    </Form>


                    <div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {isactive == false ?
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
                    <div className="same-list-bx-list">

                      {
                        list.map((response, i) => {

                          let classNameNm2 = "same-list-bx-item" + ((i === selected) ? ' bx-item-cont-active' : "")


                          return (
                            <div key={response.id} className={classNameNm2} onClick={() => {

                              loadfaqFolder(response.category_linkage);
                              setList2(response.category_name);
                              setSelectedId(0);
                              setSelected(i);
                              // scrollToElement();
                            }}>
                              <div className="bx-item-cont" onClick={() => { chapterScroll('faq-section') }}  >
                                <img src={`https://cmsapi.choiceindia.com/assets/${response.category_icon}`} className="" alt="" />
                                <h4>{response.category_name}</h4>
                                <p>{response.category_description}</p>
                              </div>
                            </div>
                          )
                        }
                        )
                      }


                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='faq-accordion'  >
              <div className='container'>
                <div className='faq-header' id='faq-section'>
                  <h1>{list2}</h1>
                </div>
                <div className='faq-container'>
                  <div className='content-list accordion-lists' >
                    {
                      folder.map((response, index) => {

                        let classNameNm = "content-list-itm" + ((index === selectedId) ? ' list-itm-active' : '')



                        return (
                          <div key={response.id} className={classNameNm} onClick={() => {
                            loadfaqarticle(response.id);
                            setSelectedId(index)

                          }}>
                            <p>{response.name}</p>
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
                            <div>
                              <Accordion.Item key={res.id} eventKey={index}>
                                <Accordion.Header >{res.title}</Accordion.Header>
                                {/**<div className={"ac-a accordion-collapse collapse" + ((active && index == 0) ? " show" : "")}>*/}
                                <Accordion.Body>
                                  {res.description_text}
                                </Accordion.Body>
                                {/**</div>*/}
                              </Accordion.Item>
                            </div>

                          )
                        })

                      }


                    </Accordion>

                  </div>
                </div>
              </div>
            </section>
          </div> :
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



                    <div className="same-list-bx-list">
                      {
                        list.map((response, i) => {

                          let classNameNm2 = "same-list-bx-item" + ((i === select) ? ' bx-item-cont-active' : "")


                          return (
                            <div key={response.id} className={classNameNm2} onClick={() => {

                              loadfaqFolder(response.category_linkage);
                              setList2(response.category_name);
                              setSelectedId(0);
                              setIsarticle(true);
                              setSelect(i);

                              // scrollToElement();
                            }}>
                              <div className="bx-item-cont" onClick={() => {chapterScroll('faq-section');reset()}}  >
                                <img src={`https://cmsapi.choiceindia.com/assets/${response.category_icon}`} className="" alt="" />
                                <h4>{response.category_name}</h4>
                                <p>{response.category_description}</p>
                              </div>
                            </div>
                          )
                        }
                        )
                      }


                    </div>




                  </div>
                </div>
              </div>
            </section>

            {
              isarticle == true ?

                <section className='faq-accordion'  >
                  <div className='container'>
                    <div className='faq-header' id='faq-section'>
                      <h1>{list2}</h1>
                    </div>
                    <div className='faq-container'>
                      <div className='content-list accordion-lists' >
                        {
                          folder.map((response, index) => {

                            let classNameNm = "content-list-itm" + ((index === selectedId) ? ' list-itm-active' : '')



                            return (
                              <div key={response.id} className={classNameNm} onClick={() => {
                                loadfaqarticle(response.id);
                                setSelectedId(index)

                              }}>
                                <p>{response.name}</p>
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
                                <div>
                                  <Accordion.Item key={res.id} eventKey={index}>
                                    <Accordion.Header >{res.title}</Accordion.Header>
                                    {/**<div className={"ac-a accordion-collapse collapse" + ((active && index == 0) ? " show" : "")}>*/}
                                    <Accordion.Body>
                                      {res.description_text}
                                    </Accordion.Body>
                                    {/**</div>*/}
                                  </Accordion.Item>
                                </div>

                              )
                            })

                          }


                        </Accordion>

                      </div>
                    </div>
                  </div>
                </section> :

                <section className='faq-accordion'  >
                  <div className='container'>

                    <div className='faq-container justify-content-center'>
                      
                      <div className='content-list accordion-list ' >
                        <Accordion defaultActiveKey="0" >

                          {
                            searchlist.map((res, index) => {

                              return (
                                <div>
                                  <Accordion.Item key={res.id} eventKey={index}>
                                    <Accordion.Header >{res.title}</Accordion.Header>
                                    {/**<div className={"ac-a accordion-collapse collapse" + ((active && index == 0) ? " show" : "")}>*/}
                                    <Accordion.Body>
                                      {res.description_text}
                                    </Accordion.Body>
                                    {/**</div>*/}
                                  </Accordion.Item>
                                </div>

                              )
                            })

                          }


                        </Accordion>

                      </div>
                    </div>
                  </div>
                </section>

            }



          </div>
        }

      </div>
    </>
  )
}
