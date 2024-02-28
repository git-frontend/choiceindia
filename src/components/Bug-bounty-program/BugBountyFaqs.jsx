// import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
function BugBountyFaqs() {


    return (
        <>


        <section className="bugs-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="faq-ttl">
                                <h2 className="title-secnd">Bugs Security Level</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-11 col-md-12">
                            <Accordion defaultActiveKey="0" flush className='bugs-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Critical</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                    <ul>
                                        <li>Pre-authentication reflected or DOM XSS (Cross-site scripting)</li>
                                        <li>Any stored XSS that is generally accessibly by users</li>
                                        <li>Command injection (blind command injection should pay more)</li>
                                        <li>Deserialization attacks</li>
                                        <li>Forced browsing attackers that supply credentials, including session tokens of logged in users</li>
                                        <li>SQL injection (2nd order SQLi and command execution through SQLi should pay more)</li>
                                        <li>Forced browsing leading directly to customer data</li>
                                        <li>Account takeover vulnerabilities (e.g. an attacker can take control of a user’s account through a logic flaw or inappropriate session handling)</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>High</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                        <ul>
                                            <li>Pre-authentication reflected or DOM XSS (Cross-site scripting)</li>
                                            <li>Any stored XSS that is generally accessibly by users</li>
                                            <li>Command injection (blind command injection should pay more)</li>
                                            <li>Deserialization attacks</li>
                                            <li>Forced browsing attackers that supply credentials, including session tokens of logged in users</li>
                                            <li>SQL injection (2nd order SQLi and command execution through SQLi should pay more)</li>
                                            <li>Forced browsing leading directly to customer data</li>
                                            <li>Account takeover vulnerabilities (e.g. an attacker can take control of a user’s account through a logic flaw or inappropriate session handling)</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Medium</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                        <ul>
                                            <li>Pre-authentication reflected or DOM XSS (Cross-site scripting)</li>
                                            <li>Any stored XSS that is generally accessibly by users</li>
                                            <li>Command injection (blind command injection should pay more)</li>
                                            <li>Deserialization attacks</li>
                                            <li>Forced browsing attackers that supply credentials, including session tokens of logged in users</li>
                                            <li>SQL injection (2nd order SQLi and command execution through SQLi should pay more)</li>
                                            <li>Forced browsing leading directly to customer data</li>
                                            <li>Account takeover vulnerabilities (e.g. an attacker can take control of a user’s account through a logic flaw or inappropriate session handling)</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Low</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                        <ul>
                                            <li>Pre-authentication reflected or DOM XSS (Cross-site scripting)</li>
                                            <li>Any stored XSS that is generally accessibly by users</li>
                                            <li>Command injection (blind command injection should pay more)</li>
                                            <li>Deserialization attacks</li>
                                            <li>Forced browsing attackers that supply credentials, including session tokens of logged in users</li>
                                            <li>SQL injection (2nd order SQLi and command execution through SQLi should pay more)</li>
                                            <li>Forced browsing leading directly to customer data</li>
                                            <li>Account takeover vulnerabilities (e.g. an attacker can take control of a user’s account through a logic flaw or inappropriate session handling)</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Informational</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                    <ul>
                                            <li>Pre-authentication reflected or DOM XSS (Cross-site scripting)</li>
                                            <li>Any stored XSS that is generally accessibly by users</li>
                                            <li>Command injection (blind command injection should pay more)</li>
                                            <li>Deserialization attacks</li>
                                            <li>Forced browsing attackers that supply credentials, including session tokens of logged in users</li>
                                            <li>SQL injection (2nd order SQLi and command execution through SQLi should pay more)</li>
                                            <li>Forced browsing leading directly to customer data</li>
                                            <li>Account takeover vulnerabilities (e.g. an attacker can take control of a user’s account through a logic flaw or inappropriate session handling)</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Not in Scope</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                    <ul>
                                            <li>Pre-authentication reflected or DOM XSS (Cross-site scripting)</li>
                                            <li>Any stored XSS that is generally accessibly by users</li>
                                            <li>Command injection (blind command injection should pay more)</li>
                                            <li>Deserialization attacks</li>
                                            <li>Forced browsing attackers that supply credentials, including session tokens of logged in users</li>
                                            <li>SQL injection (2nd order SQLi and command execution through SQLi should pay more)</li>
                                            <li>Forced browsing leading directly to customer data</li>
                                            <li>Account takeover vulnerabilities (e.g. an attacker can take control of a user’s account through a logic flaw or inappropriate session handling)</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                    </Accordion>
                                </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BugBountyFaqs;