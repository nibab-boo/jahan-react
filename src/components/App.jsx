import { Carousel } from 'bootstrap';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";


// importing from components
import Header from './Header';
import HomeCarousel from './HomeCarousel';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';
import Footer from "./Footer";
import Menu from "./Menu"


const App = () => {

  const apiTest = async () => {
    axios.get('http://localhost:5000/api').then(res => {
      const answers = res.data;
      console.log(res);
    });
  };
  apiTest();
  return (
    <>
      <Router>
        < Header />
        <Routes>
          <Route exact path="/" element= {
            <>
              < HomeCarousel />
              < PhotoGallery />
              < Contact />
            </>
            } >
          </Route>
          <Route path="/menu" element= {
            <>
              < Menu />
              {/* < Menu /> */}
            </>
          }>
          </Route>
        </Routes>
        < Footer />
      </Router>
    </>
  );
};

export default App;