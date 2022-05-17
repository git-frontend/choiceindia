import  ImageSub1  from '../../assets/images/banner.png';


function HomePageBanner() {
    return (
        <div>


            <section className="home-banner">
                <div className="banner-desc">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-caption">
                                    <h1>Experience<br />
                                        The Joy of Earning</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <img src={ImageSub1} className="banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default HomePageBanner;