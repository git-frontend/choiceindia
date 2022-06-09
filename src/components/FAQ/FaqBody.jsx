import React from 'react';
import  Image1  from '../../assets/images/icons/auction.svg';
import  Image2  from '../../assets/images/icons/shield2.svg';
import  Image3  from '../../assets/images/icons/padlock.svg';
import { Accordion } from 'react-bootstrap';

export default function FaqBody() {
  return (
    <>
    <div className='faq-body'>

    <section className="security-privacy same-list-bx"> 
				<div className="container">	
					<div className="row d-flex justify-content-center">
						<div className="col-md-12">
							<div className="heading-sec">
								<h3 className="title-first ">Looking for an Answer? </h3>								
							</div>
						</div>
					</div>
					<div className="row">
          <div className="col-md-12">
            <div className="same-list-bx-list">
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image1} className="" alt="" />
                  <h4>My Account</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image2} className="" alt="" />
                  <h4>Stocks</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image3} className="" alt="" />
                  <h4>Derivatives</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image3} className="" alt="" />
                  <h4>Mutual Funds</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image3} className="" alt="" />
                  <h4>Insurance</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image3} className="" alt="" />
                  <h4>Loans</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image3} className="" alt="" />
                  <h4>NPS</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>
              <div className="same-list-bx-item">
                <div className="bx-item-cont">
                  <img src={Image3} className="" alt="" />
                  <h4>Bonds / FD’s</h4>
                  <p>Explore the world of Corporate Industry with our blogs, news, research.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
				</div>
			</section>

        <section className='faq-accordion'>
            <div className='container'>
            <div className='faq-header'>
              <h1>Loans</h1>
            </div>
             <div className='faq-container'>
            <div  className='content-list accordion-lists'>
            <div className='content-list-itm list-itm-active'>
            <p>Account Opening</p>
            </div>
            <div className='content-list-itm'>
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
            </div>
            </div>
            <div className='content-list accordion-list '>
            <Accordion defaultActiveKey="0" >
  <Accordion.Item eventKey="0">
    <Accordion.Header>How do i open an account online?</Accordion.Header>
    <Accordion.Body>
       You can open AlphaBee account online using the Android or iOS app or via the website.The account openiing process is very simple.With some basic information and uploading of certain documents like PAN,Address Proof,Bank Details,photo and Contact Details the signup process takes less than 5 minutes  
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
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
</Accordion.Item>
</Accordion>

            </div>
            </div>
            </div>
        </section>
    </div>
    </>
  )
}
