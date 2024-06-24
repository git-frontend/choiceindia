import appbanner from "../../assets/images/bug-bounty/app-banner.png"
import LazyLoader from "../Common-features/LazyLoader";
function BugBountyBanner() {


    return (
        <>
        <section className="bug-banner">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-md-6">
                        <div className="caption-txt">
                            <h1 className="big-ttl">Choice Bug <br/>Bounty Program</h1>
                            <p className="para"><strong>Security matters!</strong> Report vulnerabilities and be part of making Choice the most trusted investment platform.</p>
                            <a href="https://forms.gle/3NDK58SHEJm7x5H69" className="btn-bg" target="_blank">Submit</a>
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-sm-block">
                        <div className="rightsec">
                            <LazyLoader src={appbanner} alt={"Choice Bug Bounty Program"} className={"img-fluid"} width={"609"} height={"476"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>


      

          
        </>
    );
}
export default BugBountyBanner;