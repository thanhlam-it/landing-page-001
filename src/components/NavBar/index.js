import React, { useEffect, useState } from "react";

const NavBar = () => {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY >= 800);
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky ${isFixed ? "fixed" : ""}`} data-offset="500">
        <div className="container">
            <a href="#" className="navbar-brand">Seo<span className="text-primary">Gram.</span></a>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="service.html">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-primary ml-lg-2" href="#">Free Analytics</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>




}

export default NavBar;