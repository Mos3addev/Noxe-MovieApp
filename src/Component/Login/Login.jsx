import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Login({saveUserData}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorList, setErrorList] = useState([]);
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  async function sendUserDataToApi(){
    let {data} = await axios.post(`https://movies-api.routemisr.com/signin`,user);
    if(data.message == 'success'){
      setLoading(false);
      localStorage.setItem('userToken',data.token); 
      saveUserData();
      navigate('/');
    }
    else{
      setLoading(false);
      setError(data.message)
    }
  }
  function getUserData(e)
  {
    let myUser={...user};
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  function submitRegisterForm(e){
    e.preventDefault();
    setLoading(true);
    let validation = validateLoginForm();
    if (validation.error){
      setErrorList(validation.error.details)
    }
    else{
      sendUserDataToApi();
    }
  }
  function validateLoginForm(){
    let scheme =  Joi.object({
      email: Joi.string().email({tlds:{allow:['com','net'] } }).required(),
      password: Joi.string(),      
    });
    return scheme.validate(user , {abortEarly:false});
 }

  return (
    <>
    <div className='w-75 mx-auto py-3'>
      {error?
      <p className='text-danger'>
        {error}
      </p>:''}
      
      <form onSubmit={submitRegisterForm}>

        <label htmlFor='email'>Email :</label>
        <input onChange={getUserData} className="form-control my-input my-2" type="email" name='email' id='email'/>   
        <p className='text-danger'>{errorList.filter((error)=>error.context.label ==="email")[0]?.message}</p>

        <label htmlFor='password'>Password :</label>
        <input onChange={getUserData} className="form-control my-input my-2" type="Password" name='password' id='password'/>   
        {errorList.map((error,index)=>{
        if(error.context.label === 'password'){
          return <p key={index} className='text-danger'>Password not allowed</p>
        }})}

        <button type='submit' className='btn btn-info'>
        {loading ? <i className='fas fa-spinner fa-spin'></i>:'Login'}</button>
        
      </form>
    </div>
    </>
  )
}
