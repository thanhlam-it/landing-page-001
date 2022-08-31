import React, { useEffect } from "react";

import WOW from 'wowjs';

import Introduce from "../../components/Introduce";
import ListServices from "../../components/ListServices";
import BackToTopBtn from "../../components/BackToTopBtn"

const Services = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);

    return <>
        <BackToTopBtn />
        <header>
            {/* <NavBar /> */}
            <div className="container">
                <div className="page-banner">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">Services</li>
                                </ul>
                            </nav>
                            <h1 className="text-center">Our Services</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Introduce />

        <ListServices />
    </>
};

export default Services;
