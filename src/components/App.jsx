import { Carousel } from 'bootstrap';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// importing from components
import Header from './Header';
import HomeCarousel from './HomeCarousel';
import PhotoGallery from './PhotoGallery';

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
            </>
          } >
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;