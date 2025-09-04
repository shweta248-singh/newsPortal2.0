import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/landingPage/Navbar'

const NotFound = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        // navigate('/login');

    },[])
  return (
    <>
    <Navbar/>
    <div className='row'>
        
        <div className='col-sm-12'>
        <h1 className='text-center border border-0 shadow-lg w-100 Error'><b className='text-mycolor'>404</b> Not Found</h1>
        </div>
        
    </div>
    </>
  )
}

export default NotFound;