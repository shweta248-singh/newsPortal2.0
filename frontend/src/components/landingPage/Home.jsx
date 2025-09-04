

import React from 'react'
import Slider from './Slider';
import NewsCategory from './NewsCategory';

import LatestNews from './LatestNews';
import LatestVideos from './LatestVideo';
import City from './City';
import ImageGallery from './ImageGallery';
import ContactUs from './Contactus';
import AboutUs from './AboutUs';
import Feedback from './Feedback';
import Navbar from './Navbar'




const Home = () => {
  return (
    <>
    <Navbar/>
     <Slider />
     <NewsCategory/>
      <LatestNews />
      <LatestVideos />
      <City />
      <ImageGallery/>
      <AboutUs />
      <Feedback />
      
      

    </>
  )
}

export default Home