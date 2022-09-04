import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import logo from './logo.svg';

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/Blogs/BlogDetails";
import PageNotFound from "./pages/Errors/PageNotFound";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />

        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
