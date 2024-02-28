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
                                <ol className="list-data">
                                    <li>The security researcher knows his responsibility and adheres to all ethical guidelines.</li>
                                    <li>The security researcher reporting the bug or members of any external organization who were/are part of the supporting development teams and their relatives are not allowed to participate in the Bug Bounty Program.</li>
                                    <li>The security researcher may report any security breaches and vulnerabilities found in the system or network.</li>
                                    <li>The security researcher should keep their discoveries confidential at all times and not disclose the vulnerability to the public or other organizations.</li>
                                    <li>The security researcher shall not copy, paste, share, transfer, replicate, or any such activity that would lead to data breach and shall maintain utmost precaution in handling the data shared by the Upstox and shall at all times adhere to the data security policy of the Upstox.</li>
                                    <li>The security researcher shall act professionally, including but not limited to testing activities, and shall not be associated with malicious hackers or malicious activities.</li>
                                    <li>Testing and identification of the bug should not affect any commercial/trading service at Upstox. Also, you must not break any laws to discover and identify the vulnerabilities.</li>
                                    <li>The use of social engineering techniques on our customers or staff is not accepted.</li>
                                    <li>The bugs identified in the UAT / Dev environment are not accepted.</li>
                                    <li>The security researcher shall always maintain data protection of all the Customers of the Upstox.</li>
                                    <li>The monetary reward and severity will be decided based on the criticality of the issue on a case-to-case basis.</li>
                                    <li>Vulnerabilities reported should be from the latest stable version.</li>
                                    <li>The bug must be new and not previously reported. The Upstox Security team will send a reply to you within a couple of working days if your submitted vulnerability has been previously reported.</li>
                                    <li>We may choose not to provide any monetary benefit if we feel the vulnerability is not critical or the submission doesn’t follow any of the guidelines provided by Upstox.</li>
                                    <li>The program may be amended or discontinued, without notice, at any time.</li>
                                    <li>The bug should not be a random occurrence (i.e., it can be reproduced easily). It must be remotely exploitable by us in a standard configuration.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BugBountyRules;