import React, { useRef, useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import faqService from '../../Services/faqService';


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function FaqBody() {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState("General");
  const [trigger, setTrigger] = useState(false);
  const [folder, setFolder] = useState([]);
  const[article,setArticle] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [selected, setSelected] = useState(0);
  const [active,setActive]=useState(true)
  
 

  // const Ref = useRef(null);

  // function handleFocus ()
  // {
  //   scrollToRef(Ref);
  // };
  const testRef = useRef(null);
  function scrollToElement (){
    testRef.current.scrollIntoView();
  } 




  function loadfaqcategory() {
    faqService.FaqCategory().then(
      res => {
        setList(res);
        loadfaqFolder(res[0].id);
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

  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
      loadfaqcategory();

    }

  }, [trigger])

  return (
    <>
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
                        <div key={response.id} className={classNameNm2}  onClick={() => {
                          
                          loadfaqFolder(response.id);
                          setList2(response.name)
                          setSelectedId(0)
                          setSelected(i)
                          scrollToElement();
                        }}>
                          <div className="bx-item-cont"  >
                            {/** <img src={Image1} className="" alt="" /> */}
                            <h4>{response.name}</h4>
                            <p>{response.description}</p>
                          </div>
                        </div>
                      )
                    }
                    )
                  }
                  {/**<div className="same-list-bx-item">
                    <div className="bx-item-cont" onClick={handleFocus}>
                      <img src={Image2} className="" alt="" />
                      <h4>Security</h4>
                      <p>We follow Industry leading security protocols.</p>
                    </div>
                  </div>
                  <div className="same-list-bx-item">
                    <div className="bx-item-cont" onClick={handleFocus}>
                      <img src={Image3} className="" alt="" />
                      <h4>Privacy</h4>
                      <p>We will never share your data without your consent.</p>
                    </div>
                  </div>
                  <div className="same-list-bx-item">
                    <div className="bx-item-cont" onClick={handleFocus}>
                      <img src={Image3} className="" alt="" />
                      <h4>Privacy</h4>
                      <p>We will never share your data without your consent.</p>
                    </div>
                  </div>
                  <div className="same-list-bx-item">
                          <div className="bx-item-cont" onClick={handleFocus}>
                            <img src={Image3} className="" alt="" />
                            <h4>Privacy</h4>
                            <p>We will never share your data without your consent.</p>
                          </div>
                        </div>
                        <div className="same-list-bx-item">
                          <div className="bx-item-cont" onClick={handleFocus}>
                            <img src={Image3} className="" alt="" />
                            <h4>Privacy</h4>
                            <p>We will never share your data without your consent.</p>
                          </div>
                        </div>
                        <div className="same-list-bx-item">
                          <div className="bx-item-cont" onClick={handleFocus}>
                            <img src={Image3} className="" alt="" />
                            <h4>Privacy</h4>
                            <p>We will never share your data without your consent.</p>
                          </div>
                        </div>
                        <div className="same-list-bx-item">
                          <div className="bx-item-cont" onClick={handleFocus}>
                            <img src={Image3} className="" alt="" />
                            <h4>Privacy</h4>
                            <p>We will never share your data without your consent.</p>
                          </div>
            </div>*/}

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='faq-accordion' ref={testRef} >
          <div className='container'>
            <div className='faq-header'>
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

                {/**<div className='content-list-itm'>
                <p>Account related Charges</p>
              </div>
              <div className='content-list-itm'>
                <p>Login Credentials</p>
              </div>
              <div className='content-list-itm'>
                <p>DP ID &amp; Bank Details</p>
              </div>
              <div className='content-list-itm'>
                <p> profile</p>
              </div>
              <div className='content-list-itm'>
                <p>Modification</p>
                  </div>*/}
              </div>
              <div className='content-list accordion-list '>
                <Accordion defaultActiveKey="0" >

                {
                  article.map((res,index)=>{
                   
                    
          
                    return(
                    <div>
                    <Accordion.Item key={res.id} eventKey={index}>
                    <Accordion.Header>{res.title}</Accordion.Header>
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
                  
                  {/**<Accordion.Item eventKey="1">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8">
                    <Accordion.Header>what is the power of Attorney(PoA) and why is it needed?</Accordion.Header>
                    <Accordion.Body>
                      You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes
                    </Accordion.Body>
                </Accordion.Item>*/}
                </Accordion>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
