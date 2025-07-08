import React from 'react';
import Navbar from './landing_page/Navbar';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/Login/Login';
import Home from './landing_page/home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CookiesProvider> 
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </CookiesProvider>
  </BrowserRouter>
);

