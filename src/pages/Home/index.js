import React, { useEffect } from "react";

import WOW from 'wowjs';

import Banner from "../../components/Banner";
import Introduce from "../../components/Introduce";
import AboutUs from "../../components/AboutUs";
import ListServices from "../../components/ListServices";
import Subscribe from "../../components/Subscribe";
import PricingPlan from "../../components/PricingPlan";
import BannerFooter from "../../components/BannerFooter";
import Blogs from "../../components/Blogs";
import BackToTopBtn from "../../components/BackToTopBtn"

const Home = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);

    return <>
        <BackToTopBtn />
        <header>
            {/* <NavBar /> */}
            <Banner />
        </header>

        <Introduce />

        <AboutUs />

        <ListServices />

        <Subscribe />

        <PricingPlan />

        <BannerFooter />

        <Blogs />
    </>
};

export default Home;
