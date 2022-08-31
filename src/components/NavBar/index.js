import React, { useEffect, useState } from "react";
import {
    NavLink
} from "react-router-dom";

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
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/service">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
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