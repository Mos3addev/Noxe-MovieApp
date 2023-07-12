import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams , Link  } from 'react-router-dom'
import avatar from '../../avatar.jpg';

export default function MovieDetails() {
    let params = useParams();
    const [itemDetails, setItemDetails] = useState({})
    const [similarItem, setSimilarItem] = useState([])
    async function getItemDetails(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=f04abd28a278b378a10634e8da13acc0&language=en-US`);
        setItemDetails(data);
    }
    async function getSimilar(){
        if(params.mediaType === 'movie'){
          let {data} = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}/similar?api_key=f04abd28a278b378a10634e8da13acc0&language=en-US&page=1`);
          setSimilarItem(data.results);
        }
        
    }
    useEffect(()=>{
        getItemDetails();
        getSimilar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id , params.mediaType])
  return <>
  <div className='row'>
    <div className='col-md-4'>
        {itemDetails.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+itemDetails.poster_path} alt='#'/>:''}
        {itemDetails.profile_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+itemDetails.profile_path} alt='#'/>:''}
        {!itemDetails.profile_path && !itemDetails.poster_path ? <img className='w-100' src={avatar} alt="" />:''}
    </div>
    {params.mediaType === 'person'?
    <div className='col-md-8'>
        {itemDetails.name?<h1>{itemDetails.name}</h1>:''}
        {itemDetails.birthday?<h4>Birth Day: {itemDetails.birthday}</h4>:''}
        {itemDetails.place_of_birth?<h4>Place Of Birth: {itemDetails.place_of_birth}</h4>:''}
        {itemDetails.popularity?<h4 className='py-1'>popularity : {itemDetails.popularity}</h4>:''}
        {itemDetails.biography?<h5 className='textMuted'>{itemDetails.biography}</h5>:''}
    </div>
    :
    <div className='col-md-8'>
        <h1>{itemDetails.title} {itemDetails.name}</h1>
        <h3 className='textMuted'> {itemDetails.tagline}</h3>
        <div className='d-flex py-4 px-2'>
          {itemDetails.genres?itemDetails.genres.map((item,index)=>(
              <div key={index} className='bg-light-main me-3'>{item.name}</div>
          )):''}
        </div>
        {itemDetails.vote_average?<h4 className='py-1'>Vote : {itemDetails.vote_average?.toFixed(1)}</h4>:''}
        {itemDetails.vote_count?<h4 className='py-1'>Vote count : {itemDetails.vote_count}</h4>:''}
        {itemDetails.release_date?<h4 className='py-1'>release date : {itemDetails.release_date}</h4>:''}
        {itemDetails.popularity?<h4 className='py-1'>popularity : {itemDetails.popularity}</h4>:''}
        {itemDetails.overview?<h5 className='py-1 textMuted'>{itemDetails.overview}</h5>:''}
    </div>
    }
    
  </div>
  {similarItem?
  <div className='row pt-5'>
        {similarItem.slice(0,10).map((movie)=>
        <div key={movie.id} className='col-md-2'>
          <Link to={'/moviedetails/'+movie.id +'/'+params.mediaType}>
            <div className='movie position-relative'>
              {movie.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt='#'/>:''}
              {movie.profile_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.profile_path} alt='#'/>:''}
              {!movie.profile_path && !movie.poster_path ? <img className='w-100' src={avatar} alt="" />:''}
              <h3 className='h6 my-2'>{movie.title}{movie.name}</h3>
              {movie.vote_average?<div className='vote p-2 text-center position-absolute'>{movie.vote_average?.toFixed(1)}</div>:''}
            </div>
          </Link>
        </div>
        )}
  </div>:''}
  </>
}
