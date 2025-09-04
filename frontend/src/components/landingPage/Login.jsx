import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'


const schema=yup
.object()
.shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(16),
  
})
const Login = () => {
  const navigate=useNavigate()
  const { register , handleSubmit , formState : {errors} } = useForm({
    resolver:yupResolver(schema),
  });
  const handleLogin=async(data)=>{
    const response=await axios.post('http://localhost:9000/api/login',data);
    if(response?.data?.code==200){
      Swal.fire({
        title:"Login",
        text:response?.data?.message,
        icon:"success"

      });
      localStorage.setItem("userInfo",JSON.stringify(response?.data?.data));
      if(response?.data?.data?.userType=="user"){
        navigate('/user-profile')
      }else if(response?.data?.data?.userType=="admin"){
        navigate('/admin-profile')
      }

    }else{
      Swal.fire({
        title:"Login",
        text:response?.data?.message,
        icon:"error"
      });
    }
  }
  return (
    <>
    <Navbar/>
    <div className='container-fluid login '>
        <div className='row rowcol  row1 '></div>
        <div className='row  row2 '>
          
        
          <div className='col-sm-4 rowcol'></div>
          
          <div className='col-sm-4  border border-0 shadow-lg'>
            <form onSubmit={handleSubmit((d)=> handleLogin(d))}>
            <h3 className=' p-3 text-center'><b>User Login</b></h3>
            <div className='text-center'>
              <label for="inputemail" className='t p-3 fs-5'><b>Email:-</b></label>
              <input type="text" className='m-4' id="inputemail"placeholder='enter email'{...register('email')} />
              {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
            </div>
            <div className='text-center'>
              <label for="inputemail" className=' fs-5'><b>Password:-</b></label>
              <input type="password" className='m-3' id="inputemail"placeholder='enter password'{...register('password')} />
              {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
            </div><div className='text-center'>
            <button className='btn btn-danger  w-50 mx-auto' onclick={handleLogin}><b>Submit</b></button>
            </div>
            </form>
          </div>
         
          <div className='col-sm-4 rowcol'></div>
          
        </div>
        
        <div className='row rowcol row1'></div>


      </div>
    
    </>
  )
}
    

export default Login