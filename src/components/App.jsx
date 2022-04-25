import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './assets/stylesheets/application.css'

// importing from components
import Header from './Header';
import HomeCarousel from './HomeCarousel';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';
import Footer from "./Footer";
import Menu from "./Menu";
import Blog from "./Blog";
import { LanguageProvider } from './LanguageProvider';

function App() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch("/api/v1/blogs")
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      setBlogs(data);
    })
  }, [])

  return (
    <LanguageProvider>
      <Router>
        <Header />
         <Routes>
          <Route exact path="/" element={(
            <> 
              <HomeCarousel />
              <PhotoGallery />
              <Contact />
            </>
          )}
          >
          </Route>
          
          <Route path="/menu" element={(
            <>
              <Menu />
            </>
          )}>
          </Route>
          <Route path="/blog" element={
            <>
              < Blog blogs={ blogs } />
            </>
          }>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
