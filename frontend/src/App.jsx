import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {useLocation, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/landingPage/Navbar'
import Home from './components/landingPage/Home';
import Login from './components/landingPage/Login';
import AboutUs from './components/landingPage/AboutUs';
import NewsCategory from './components/landingPage/NewsCategory';
import ImageGallery from './components/landingPage/ImageGallery';
import Contactus from './components/landingPage/Contactus';
import UserRegister from './components/landingPage/UserRegister';
import EditProfile from './components/adminComponent/EditProfile';
import AllNews from './components/adminComponent/AllNews';
import AdminContactUsList from './components/adminComponent/AdminContactUsList';
import AdminLogout from './components/adminComponent/AdminLogout';
import UserEditProfile from './components/userComponent/EditProfile'
import PostNews from './components/userComponent/PostNews';
import YourNews from './components/userComponent/YourNews';
import NewsDetails from './components/landingPage/NewsDetails';
import UserAllNewsList from './components/userComponent/UserAllNewsList';
import UserLogout from './components/userComponent/UserLogout';
import TopNav from './components/landingPage/TopNav'
import Logo from './components/landingPage/Logo'
import NotFound from './NotFound';
import Footer from './components/landingPage/Footer'
import { useEffect,useState } from 'react';

function App() {
  const location=useLocation()
  const[userData,setUserData]=useState(null)
  useEffect(()=>{
   const user= JSON.parse(localStorage.getItem('userInfo'));
   setUserData(user);
  },[location?.pathname])
  
  return (
    <>
      <TopNav/>
      <Logo/>
         
        <Routes>
          {/* LandingPage */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/news' element={<NewsCategory />} />
          <Route path='/gallery' element={<ImageGallery />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/registration' element={<UserRegister />} />
          <Route path='/login' element={<Login />} />
           <Route path='/news-details' element={<NewsDetails/>}/>
          {/* Admin Route */}
          {userData?.userType=="admin" && <>
          <Route path='/admin-profile' element={<EditProfile />} />
          <Route path='/admin-newslist' element={<AllNews />} />
          <Route path='/admin-contactus' element={<AdminContactUsList />} />
          <Route path='/admin-logout' element={<AdminLogout />} />
          </>}
          {/* UserROute */}
          {userData?.userType=='user' && <>
          <Route path='/user-profile' element={<><UserEditProfile /> </>} />
          <Route path='/user-addnews' element={<PostNews />} />
          <Route path='/user-list' element={<YourNews />} />
          <Route path='/user-alllist' element={<UserAllNewsList />} />
          <Route path='/user-logout' element={<UserLogout />} />
          </>}
          <Route path='*' element={<h1><NotFound/></h1>}/>

        </Routes>
        <Footer/>
      
    </>
  )
}

export default App