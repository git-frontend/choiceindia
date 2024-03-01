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
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='bugs-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Critical</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                    <ul>
                                        <li><strong>Remote Code Execution (RCE):</strong> Vulnerabilities allowing unauthorized code execution on company servers.</li>
                                        <li><strong>SQL Injection:</strong> Exploiting vulnerabilities in database queries to gain unauthorized access or manipulate data.</li>
                                        <li><strong>Cross-Site Scripting (XSS):</strong> Injecting malicious scripts into web pages to steal user data or hijack sessions.</li>
                                        <li><strong>Broken Authentication:</strong> Weaknesses in user authentication mechanisms, such as password cracking or session hijacking.</li>
                                        <li><strong>Security Misconfigurations:</strong> Improper server configuration exposing sensitive data or compromising security features.</li>
                                        <li><strong>Unintended Data Disclosure:</strong> Sensitive information like user data or financial records being exposed unintentionally.</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>High</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                        <ul>
                                            <li><strong>Insecure Direct Object References (IDOR):</strong> Vulnerabilities allowing unauthorized access to user accounts or data.</li>
                                            <li><strong>Insufficient Logging & Monitoring:</strong> Lack of adequate logging and monitoring to detect and respond to security incidents.</li>
                                            <li><strong>Security Testing Failures:</strong> Failure to conduct regular security testing and address identified vulnerabilities.</li>
                                            <li><strong>Denial of Service (DoS):</strong> Attacks overwhelming systems with traffic, making them unavailable to legitimate users.</li>
                                            <li><strong>Use of Known Vulnerable Components:</strong> Employing outdated or unpatched software with known security vulnerabilities.</li>
                                            <li><strong>Cross-Site Request Forgery (CSRF):</strong> Forcing a user's browser to perform unauthorized actions on a trusted website.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Medium</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                        <ul>
                                            <li><strong>Session Management Vulnerabilities:</strong> Weaknesses in session management like session fixation or hijacking.</li>
                                            <li><strong>Insecure Deserialization:</strong> Exploiting vulnerabilities in deserialization processes to execute malicious code.</li>
                                            <li><strong>Security Misconfiguration of Mobile Apps:</strong> Improper security settings in mobile applications exposing data or functionality.</li>
                                            <li><strong>Insufficient Input Validation:</strong> Lack of proper validation for user inputs, leading to potential injection attacks.</li>
                                            <li><strong>Cross-Site Request Forgery (CSRF) variations:</strong> Less critical variations of CSRF attacks.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Low</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                        <ul>
                                            <li><strong>Exposed Personally Identifiable Information (PII)</strong> outside intended context</li>
                                            <li><strong>Weak password policies</strong> (not exploitable but concerning)</li>
                                            <li><strong>Missing security headers</strong> (not critical but improves security posture)</li>
                                            <li><strong>Outdated software versions</strong> (potential vulnerabilities, requires further investigation)</li>
                                            <li><strong>Phishing attempts</strong> (not directly related to code vulnerabilities)</li>
                                            <li><strong>Typosquatting & Phishing:</strong> Discovering fake websites mimicking Choice to steal user credentials.</li>
                                            <li><strong>Social Engineering:</strong> Identifying potential social engineering attempts targeting Choice employees or users.</li>
                                            <li><strong>Brandjacking:</strong> Identifying unauthorized use of Choice branding for malicious purposes.</li>
                                            <li><strong>Open Source Misconfigurations:</strong> Discovering publicly accessible information revealing potential security weaknesses.</li>
                                            <li><strong>Missing Security Measures:</strong> Identifying missing security elements like encryption or two-factor authentication.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Not in Scope</Accordion.Header>
                                    <Accordion.Body className='bugs-faq-body'>
                                    <ul>
                                            <li><strong>Issues not directly related to the security of the platform (e.g., legal compliance)</strong></li>
                                            <li><strong>Publicly known vulnerabilities without a specific exploit or path to exploitation</strong></li>
                                            <li><strong>Denial-of-Service (DoS) attacks:</strong> These are not considered bug bounty targets due to their disruptive nature.</li>
                                            <li><strong>Brute-force attacks:</strong> Attempts to guess user credentials are not considered exploitable vulnerabilities.</li>
                                            <li><strong>Social engineering attacks directly targeting users:</strong> These are not vulnerabilities in the platform itself.</li>
                                            <li><strong>Vulnerabilities in external systems not directly controlled by Choice or Vulnerabilities in third-party libraries outside our organizational control (unless actively exploited)</strong></li>
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