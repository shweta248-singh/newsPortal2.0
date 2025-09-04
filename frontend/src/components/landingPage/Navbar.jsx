import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { RiLoginBoxFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { FaCashRegister } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    setUserInfo(userData)

  }, [])

  const logOut = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');


  }
  if (userInfo?.userType == "user") {
    return (
      <>
        <nav className="nav navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link  fs-5" aria-current="page" to="/user-profile">
                    <b className='text-mycolor'><FaRegUserCircle />Userprofile</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/user-addnews">
                    <b className='text-mycolor'><FaRegNewspaper /> UserpostNews</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/user-list">
                    <b className='text-mycolor'><FaRegNewspaper /> UserNews</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/user-alllist">
                    <b className='text-mycolor'><FaRegNewspaper /> UserAllNews</b>
                  </Link>
                </li>
                <li className="nav-item" onClick={logOut}>
                  <Link className="nav-link  fs-5">
                   <b className='text-mycolor'><IoMdLogOut />UserLogout</b>
                  </Link>
                </li>

              </ul>

            </div>
          
        </nav>
      </>)
  }
  else if (userInfo?.userType == "admin") {
    return (
      <>
        <nav className="nav navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link fs-5" aria-current="page" to="/admin-profile">
                    <b className='text-mycolor'><FaRegUserCircle />AdminProfile</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fs-5" to="/admin-newslist">
                   <b className='text-mycolor'><FaRegNewspaper /> News</b>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link  fs-5" to="/admin-contactus">
                    <b className='text-mycolor'><IoIosContact />AdminContactus</b>
                  </Link>
                </li>
                <li className="nav-item" onClick={logOut}>
                  <Link className="nav-link  fs-5">
                   <b className='text-mycolor'> <IoMdLogOut />AdminLogout</b>
                  </Link>
                </li>

              </ul>

            </div>
          
        </nav>


      </>)
  }
  else {
    return (
      <>
        <nav className="nav navbar-expand-lg navbar-light bg-light shadow-lg">
          <div className="container-fluid">

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="nav-toggler-icon" />
            </button>
           
              <ul className="nav justify-content-center ">
                <li className="nav-item">
                  <Link className="nav-link fs-5 " aria-current="page" to="/">
                   <b className='text-mycolor'><FaHome /> Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5" to="/about">
                    <b className='text-mycolor'><FaRegUserCircle />About</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5" to="/news">
                    <b className='text-mycolor'><FaRegNewspaper />News</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5" to="/gallery">
                   <b className='text-mycolor'><GrGallery /> Gallery</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5" to="/contact">
                    <b className='text-mycolor'><IoIosContact />Contact</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5" to="/registration">
                    <b className='text-mycolor'><FaCashRegister />Register</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5" to="/login">
                    <b className='text-mycolor'><RiLoginBoxFill />Login</b>
                  </Link>
                </li>
              </ul>

            </div>
          
        </nav>
      </>)
  }


}
export default Navbar