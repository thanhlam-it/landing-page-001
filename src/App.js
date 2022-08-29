import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import logo from './logo.svg';

import Home from "./components/Home";

import "./assets/css/maicons.css";
import "./assets/css/bootstrap.css";
import "./assets/vendor/animate/animate.css";
import "./assets/css/theme.css";
import './App.css';

function App() {
  return (
    <Home />
  );
}

export default App;
