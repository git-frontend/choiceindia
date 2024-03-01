// import React, { useState, useEffect } from "react";
function BugBountyRules() {


    return (
        <>
            <section className="bounty-rules">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="rules-ttl">
                                <h2 className="title-secnd">Rules of Disclosure</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-md-12">
                            <div className="rules-list">
                                <div className="">
                                    <h3>Scope:</h3>
                                    <ul>
                                        <li>This program applies to Choice Equity Broking's mobile application and website (<a href="https://choiceindia.com/">https://choiceindia.com</a>).</li>
                                        <li>Only vulnerabilities within the designated scope are eligible for rewards.</li>
                                    </ul>
                                    <h3>Responsible Disclosure:</h3>
                                    <ul>
                                        <li>You must <strong>act in good faith</strong> and responsibly report vulnerabilities.</li>
                                        <li><strong>Do not exploit</strong> vulnerabilities for personal gain or harm the company or its users.</li>
                                        <li><strong>Do not disclose</strong> vulnerabilities publicly before they are fixed.</li>
                                    </ul>
                                    <h3>Report Submission:</h3>
                                    <ul>
                                        <li><strong>Submit all reports</strong> through the bug bounty form on this page.</li>
                                        <li><strong>Include a detailed description</strong> of the vulnerability, including steps to reproduce and potential impact.</li>
                                        <li><strong>Proof of concept (POC) is strongly encouraged</strong> but not mandatory for all vulnerabilities.</li>
                                    </ul>
                                    <h3>Communication:</h3>
                                    <ul>
                                        <li>We will acknowledge your report within <strong>72 hours</strong> of receipt.</li>
                                        <li>We will keep you <strong>updated on the progress</strong> of investigating and fixing the reported vulnerability.</li>
                                        <li>We will <strong>communicate our decision</strong> regarding reward eligibility within a reasonable timeframe.</li>
                                    </ul>
                                    <h3>Exclusions:</h3>
                                    <ul>
                                        <li><strong>Social engineering attacks, physical security issues, and spam reports</strong> are not eligible for rewards.</li>
                                        <li><strong>Denial-of-Service (DoS) attacks</strong> without POC are not eligible.</li>
                                       <li><strong>Testing against third-party libraries or services beyond your control</strong> is not permitted.</li>
                                        <li><strong>Vulnerabilities in personal accounts or internal systems</strong> are not in scope.</li>
                                    </ul>
                                    <h3>Legal:</h3>
                                    <ul>
                                        <li>You are responsible for your actions and <strong>comply with all applicable laws and regulations.</strong></li>
                                        <li>You agree <strong>not to hold Choice Equity Broking liable</strong> for any damages resulting from your participation in the program.</li>
                                    </ul>
                                    <h3>Reporting:</h3>
                                    <ul>
                                        <li>We reserve the right to <strong>disclose your username and the nature of the reported vulnerability</strong> after it is fixed, without disclosing confidential information.</li>
                                        <li>We reserve the right to <strong>modify these rules at any time</strong> without prior notice.</li>
                                    </ul>
                                    <h3>Additional Rules:</h3>
                                    <ul>
                                        <li><strong>Do not attempt to gain unauthorized access</strong> to user accounts or data.</li>
                                        <li><strong>Do not modify or damage</strong> Choice Equity Broking's systems or data.</li>
                                        <li><strong>Respect the privacy of users and do not access or disclose their data.</strong></li>
                                        <li><strong>Follow ethical hacking practices</strong> and treat all information with confidentiality.</li>
                                    </ul>
                                    <h3>Bounty:</h3>
                                    <ul>
                                        <li>The bounty amount will be determined based on the severity, impact, and exploitability of the reported vulnerability, following our internal guidelines.</li>
                                        <li>We reserve the right to <strong>not award a bounty</strong> if the vulnerability is deemed low impact or not actionable.</li>
                                    </ul>
                                    <h3>Dispute Resolution:</h3>
                                    <ul>
                                        <li>We will make good-faith efforts to resolve any disputes regarding this program.</li>
                                        <li>If a dispute cannot be resolved, we reserve the right to <strong>terminate your participation</strong> in the program.</li>
                                    </ul>
                                    <p><strong>By participating in this program, you agree to these Rules of Disclosure.</strong></p>
                                    <p><strong>This is not an exhaustive list of rules, and we may update it periodically. Please check back for any changes.</strong></p>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BugBountyRules;