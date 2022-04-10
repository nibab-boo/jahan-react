import { Carousel } from 'bootstrap';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// importing from components
import Header from './Header';
import HomeCarousel from './HomeCarousel';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';
import Footer from "./Footer";


const App = () => {
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
        </Routes>
        < Footer />
      </Router>
    </>
  );
};

export default App;