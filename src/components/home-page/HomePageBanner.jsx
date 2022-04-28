import  ImageSub1  from '../../assets/images/home-banner.jpg';


function HomePageBanner() {
    return (
        <div>


            <section className="home-banner">
                <img src={ImageSub1} className="banner-img" />
                <div className="banner-desc">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner-caption">
                                    <h3>Experience<br />
                                        The Joy of Earning</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
}

export default HomePageBanner;