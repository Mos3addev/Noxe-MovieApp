/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
// import { decrease, increase,incrementByAmount } from '../../Redux/counterSlice'
import { useDispatch } from 'react-redux'

export default function Navbar({userData , logOut}) {
  // let dispatch = useDispatch()
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Noxe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse py-2' id="navbarSupportedContent">
            {userData?
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">   
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="tv">Tv</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="people">People</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="network">Networks</Link>
              </li>
            </ul>
            :''}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <button className='btn text-white' onClick={()=>dispatch(increase())}>+1</button>
              <button className='btn text-white' onClick={()=>dispatch(decrease())}>-1</button>
              <button className='btn text-white' onClick={()=>dispatch(incrementByAmount(100))}>+100</button> */}
              <li className="nav-item d-flex text-white me-2">
                <a className="nav-link text-white" href='https://www.facebook.com/ahmedm0s3ad/' target='_blank' rel="noreferrer"><i className='fab fa-facebook'></i></a>
                <a className="nav-link text-white" href='https://www.instagram.com/ahmedmos3add/' target='_blank' rel="noreferrer"><i className='fab fa-instagram'></i></a>
                <a className="nav-link text-white" href='https://www.linkedin.com/in/ahmedmosaadd/' target='_blank' rel="noreferrer"><i className='fab fa-linkedin'></i></a>
                <a className="nav-link text-white" href='https://github.com/Mos3addev' target='_blank' rel="noreferrer"><i className='fab fa-github'></i></a>
              </li>
              {userData?
              <li className="nav-item">
                <div className='d-flex'>
                  <Link className="nav-link text-white" to="profile">{userData.first_name}</Link>    
                  <span onClick={logOut} className="nav-link text-white" to="logout">Logout</span>
                </div>

              </li>:<>
              <li className="nav-item">
                <Link className="nav-link text-white" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="register">Register</Link>
              </li>
              </>
              }
            </ul>
          </div>
          </div>
      </nav>
    </>
  )
}
