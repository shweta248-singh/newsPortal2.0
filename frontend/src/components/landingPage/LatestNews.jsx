import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

import {useLocation} from 'react-router-dom'
const LatestNews = () => {
 const location=useLocation()
  const [categoryList, setCatrgoryList] = useState([])
  const [newsList, setNewsList] = useState([])
  const [cityList, setCityList] = useState([])

  useEffect(() => {
    fetchCategory()
    fetchTopNews()
    fetchCity()
  }, [])
  const navigate=useNavigate()
  const fetchCategory = async () => {
    const response = await axios.get('http://localhost:9000/api/top-category');
    if (response?.data?.code == 200) {
      setCatrgoryList(response?.data?.data?.slice(0, 4));
    }
  }
  const fetchTopNews = async () => {
    const response = await axios.get('http://localhost:9000/api/top-ten-news');
    if (response?.data?.code == 200) {
      setNewsList(response?.data?.data?.slice(0, 3));
    }
  }
  const fetchCity = async () => {
    const response = await axios.get('http://localhost:9000/api/top-city');
    if (response?.data?.code == 200) {
      setCityList(response?.data?.data?.slice(0, 4));
    }
  }
  
  return (
   <>
    {location?.pathname!=="/" && <Navbar/>}
      <div className=' row py-2'>
        <p className='fs-3 text-center'><b>Latest</b> <b className='text-mycolor'>News</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className='row'>
          </div>
          <div className='row py-3'>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg category_latest_news" >
                <div className="card-header text-center text-light bg-danger"><h5>News Category</h5></div>
                <ul className="list-group list-group-flush">
                  {categoryList?.map((item) => {
                    return (<>
                      <li onClick={()=>{localStorage.setItem("newsDetails",JSON.stringify(item));navigate('/news-details')}}  className="list-group-item">
                        <div className='card m-1'>
                          <div className='row g-0'>
                            <div className='col-4'>
                              <img width={100} src={item?.url} className='img-fluid rounded-start categoryimg' />
                            </div>
                            <div className='col-8'>
                              <p className='text-center pt-1'><b>{item?.category}</b></p>
                            </div>
                          </div>
                        </div>
                      </li>

                    </>)
                  })}
                  {categoryList?.length == 0 && <h3 className='text-center'>No Record Found</h3>}
                </ul>
              </div>

            </div>
            {/* latest news */}
            <div className='col-sm-6'>

              {
                newsList?.map((item) => {
                  return (<>
                    <div onClick={()=>{localStorage.setItem("newsDetails",JSON.stringify(item));navigate('/news-details')}} className="card mb-3 mx-auto shadow-lg border border-0">
                      <div className="row g-0 latest-news">
                        <div className="col-md-4">
                          <img width={180} src={item?.url} className="img-thumbnail rounded-start latestimg" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body p-1 ">
                            <h6 className="card-title m-0">{item?.title}</h6>
                            <p className="card-text m-0">
                              {item?.desc?.slice(0, 50)}...
                            </p>
                            <p className='m-0'>
                              <a className='btn bg-danger p-1 text-light'>View More</a>
                              <span> {item?.category} </span>
                              <span> {item?.city}</span>
                            </p>
                            <p className="card-text m-0">
                              <small className="text-body-secondary">Last updated: {new Date(item?.createAt).toDateString()}</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>)
                })
              }
              {newsList?.length == 0 && <h3 className='text-center'>No Record Found</h3>}
            </div>
            {/* cities */}
            <div className='col-sm-3 '>
              <div className="card mx-auto shadow-lg category_latest_news" >
                <div className="card-header text-center bg-danger text-light"><h5>City</h5></div>
                <ul className="list-group list-group-flush">
                  {
                    cityList?.map((item) => {
                      return (<>
                        <li  onClick={()=>{localStorage.setItem("newsDetails",JSON.stringify(item));navigate('/news-details')}} className="list-group-item">
                          <div className='card m-1'>
                            <div className='row g-0'>
                              <div className='col-4'>
                                <img width={100} src={item?.url} className='img-fluid rounded-start categoryimg' />
                              </div>
                              <div className='col-8'>
                                <p className='text-center pt-1'><b>{item?.city}</b></p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>)
                    })
                  }
                  {cityList?.length == 0 && <h3 className='text-center'>No Record Found</h3>}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNews