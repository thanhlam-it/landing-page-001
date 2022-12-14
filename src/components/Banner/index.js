import React from "react";

const Banner = () => {
    return <div className="container">
        <div className="page-banner home-banner">
            <div className="row align-items-center flex-wrap-reverse h-100">
                <div className="col-md-6 py-5 wow fadeInLeft">
                    <h1 className="mb-4">Let's Check and Optimize your website!</h1>
                    <p className="text-lg text-grey mb-5">Ignite the most powerfull growth engine you have ever built for your company</p>
                    <a href="#" className="btn btn-primary btn-split">Watch Video <div className="fab"><span className="mai-play"></span></div></a>
                </div>
                <div className="col-md-6 py-5 wow zoomIn">
                    <div className="img-fluid text-center">
                        <img src={require('./../../assets/img/banner_image_1.svg').default} alt="" />
                    </div>
                </div>
            </div>
            <a href="#about" className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down"></span></a>
        </div>
    </div>
}

export default Banner;