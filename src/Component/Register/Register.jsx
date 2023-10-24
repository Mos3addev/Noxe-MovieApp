import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';


export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorList, setErrorList] = useState([]);
  const [user, setUser] = useState({
    first_name : '',
    last_name : '',
    age:0,
    email:'',
    password:''
  })
  async function sendUserDataToApi(){
    let {data} = await axios.post(`https://movies-api.routemisr.com/signup`,user);
    if(data.message === 'success'){
      setLoading(false);
      navigate('/login');
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
    let validation = validateRegisterForm();
    if (validation.error){
      setErrorList(validation.error.details)
    }
    else{
      sendUserDataToApi();
    }
  }
  function validateRegisterForm(){
    let scheme =  Joi.object({
      first_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email({tlds:{allow:['com','net'] } }).required(),
      password: Joi.string(),      
    });
    return scheme.validate(user , {abortEarly:false});
 }

  return (
    <>
    <div className='w-75 mx-auto py-3'>
      <h3 className='my-4'>Registration Form</h3>
      {error?
      <p className='text-danger'>
        {error}
      </p>:''}
      
      <form onSubmit={submitRegisterForm}>
        <label htmlFor='first_name'>First name :</label>
        <input onChange={getUserData} className="form-control my-input my-2" type="text" name='first_name' id='first_name'/>   
        <p className='text-danger'>{errorList.filter((error)=>error.context.label === "first_name")[0]?.message}</p>

        <label htmlFor='last_name'>Last name :</label>
        <input onChange={getUserData} className="form-control my-input my-2" type="text" name='last_name' id='last_name'/>   
        <p className='text-danger'>{errorList.filter((error)=>error.context.label === "last_name")[0]?.message}</p>

        <label htmlFor='age'>Age :</label>
        <input onChange={getUserData} className="form-control my-input my-2" type="Number" name='age' id='age'/>  
        <p className='text-danger'>{errorList.filter((error)=>error.context.label === "age")[0]?.message}</p>

        <label htmlFor='email'>Email :</label>
        <input onChange={getUserData} className="form-control my-input my-2" type="email" name='email' id='email'/>   
        <p className='text-danger'>{errorList.filter((error)=>error.context.label ==="email")[0]?.message}</p>

        <label htmlFor='password'>Password :</label>
        <input onChange={getUserData} className="form-control my-input my-2" type="Password" name='password' id='password'/>   
        {errorList.map((error,index) =>{
        if(error.context.label === 'password'){
          return <p key={index} className='text-danger'>{errorList.filter((error)=>error.context.label ==="password")[0]?.message}</p>
        }})}

        <button type='submit' className='btn btn-info'>
        {loading ? <i className='fas fa-spinner fa-spin'></i>:'Register'}</button>
        
      </form>
    </div>
    </>
  )
}
