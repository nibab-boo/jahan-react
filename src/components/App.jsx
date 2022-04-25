import React, { useEffect, useState } from 'react';
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
    // fetch('https://www.dynamism.com/blogs', {
    fetch('http://localhost:3000/api/v1/blogs', {
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': "omegaegg12@gmail.com",
        'X-User-Token': "KThUiv6_PJp9j_Vs74wk",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <>
                <HomeCarousel />
                <PhotoGallery />
                <Contact />
              </>
          )}
          />

          <Route
            path="/menu"
            element={(
              <>
                <Menu />
              </>
          )}
          />
          <Route
            path="/blog"
            element={(
              <>
                <Blog blogs={blogs} />
              </>
          )}
          />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
