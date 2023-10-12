import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

//Global Syle//
import GlobalStyle from './components/GlobalStyle';
 
// IMPORT PAGES

import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

//Animation//

import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode='wait' >
      <Routes location={location} key={location.pathname} >   
        <Route path='/' element={<AboutUs />} />
        <Route path='/work' element={<OurWork />} />
        <Route path='/work/:id' element={<MovieDetail />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
