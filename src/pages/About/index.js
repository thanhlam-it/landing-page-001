import React, { useEffect } from "react";

import WOW from 'wowjs';

import AboutUs from "../../components/AboutUs";
import PricingPlan from "../../components/PricingPlan";
import BackToTopBtn from "../../components/BackToTopBtn"

const About = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);

    return <>
        <BackToTopBtn />
        <header>
            <div className="container">
                <div className="page-banner">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">About</li>
                                </ul>
                            </nav>
                            <h1 className="text-center">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <AboutUs />

        <PricingPlan />

    </>
};

export default About;
