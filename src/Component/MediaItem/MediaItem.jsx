import React from 'react'
import avatar from '../../avatar.jpg';
import { Link } from 'react-router-dom';

export default function MediaItem({movie}) {
  return <>
        <div className='col-md-2'>
          <Link to={/moviedetails/+movie.id+'/'+movie.media_type}>
            <div className='movie position-relative'>
              {movie.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt='#'/>:''}
              {movie.profile_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.profile_path} alt='#'/>:''}
              {!movie.profile_path && !movie.poster_path ? <img className='w-100' src={avatar} alt="" />:''}
              <h3 className='h6 my-2'>{movie.title}{movie.name}</h3>
              {movie.vote_average?<div className='vote p-2 text-center position-absolute'>{movie.vote_average?.toFixed(1)}</div>:''}
            </div>
          </Link>
        </div>
  </>
}
