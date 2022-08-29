import React from "react";

import NavBar from "../NavBar";
import Banner from "./components/Banner";
import Introduce from "./components/Introduce";
import AboutMe from "./components/AboutMe";
import ListServices from "./components/ListServices";
import Subscribe from "./components/Subscribe";

import PricingPlan from "./components/PricingPlan";

import Footer from "./components/Footer";

import BannerFooter from "./components/BannerFooter";

import Blogs from "./components/Blogs";

import BackToTopBtn from "./components/BackToTopBtn";

const Home = () => {
    return <>
        <BackToTopBtn />
        <header>
            <NavBar />
            <Banner />
        </header>

        <Introduce />

        <AboutMe />

        <ListServices />

        <Subscribe />

        <PricingPlan />

        <BannerFooter />

        <Blogs />

        <Footer />
    </>
};

export default Home;
