import React from 'react';

// photo import
import twoCurrySet from "./../../assets/images/2curryset.jpg"
import cheeseNan from "./../../assets/images/cheese_nan.jpeg"
import puriIce from "./../../assets/images/puri_ice.JPG"
import kingfisher from "./../../assets/images/kingfisher.png"
import vodkha from "./../../assets/images/8848vodkha.png"
import seekhKabab from "./../../assets/images/seekh_kabab.jpeg"
import keema from "./../../assets/images/kemma.jpeg"


const PhotoGallery = () => {
  return (
    <>
    {/* // <div className='container pt-3'> */}
      <h2 className='my-5 text-center jahan'>Photo Gallery</h2>
      <div className="photo-gallery">
        <div className="div1">
          <img src={twoCurrySet} alt="gallery_image" />
        </div>
        <div className="div2">
          <img src={vodkha} alt="gallery_image" />
        </div>
        <div className="div3">
          <img src={puriIce} alt="gallery_image" />
        </div>
        <div className="div4">
          <img src={cheeseNan} alt="gallery_image" />
        </div>
        <div className="div5">
          <img src={kingfisher} alt="gallery_image" />
        </div>
        <div className="div6">
          <img src={seekhKabab} alt="gallery_image" />
        </div>
        <div className="div7">
          <img src={keema} alt="gallery_image" />
        </div>
      </div>
    </>
    // </div>
  );
};

export default PhotoGallery;