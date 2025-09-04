import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

const TopNav = () => {
  return (
    <>
    <div className="row justify-content-around top-item">
  <div className="col-sm-4 text-light p-2 pt-1 fs-5 "><b>shwetashweta96436@gmail.com</b></div>
  <div className="col-sm-4 text-light pt-1"><b className='p-2 fs-4'><RiFacebookFill /></b><b className='p-2 fs-4'><FaYoutube /></b><b className='p-2 fs-4'> <FiTwitter /></b><b className='p-2 fs-4'><IoLogoInstagram /></b></div>
</div>

    
    </>
  )
}

export default TopNav