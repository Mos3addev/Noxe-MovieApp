import React, { useContext, useEffect } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import { context } from '../../Context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { getTrending } from '../../Redux/moviesSlice';

export default function Home() {
  const {counter , userName }=useSelector((state)=>state.counter)
  let {trendingMovies,trendingTv,trendingPerson }=useSelector((state)=>state.movie)
  // let {trendingMovies,trendingTv,trendingPerson}= useContext(context);
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrending('movie'))
    dispatch(getTrending('tv'))
    dispatch(getTrending('person'))
  }, [])
  
return <>
    <div className='row'>
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='brdrLine w-25 mb-3'></div>
          {/* <h1>Counter :{counter}</h1> */}
          <h4>Name :{userName}</h4>
          <h2 className='h4'>Trending Movies <br /> To Watch Right Now</h2>
          <p className='textMuted py-3'>Most watched Movies by Days</p>
          <div className='brdrLine w-100 mt-3'></div>
        </div>
      </div>
      {trendingMovies?trendingMovies.slice(0,10).map((movie , index)=> <MediaItem key={index} movie={movie}/>):''}
    </div>
    <div className='row py-5'>
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='brdrLine w-25 mb-3'></div>
          <h2 className='h4'>Trending TV <br /> To Watch Right Now</h2>
          <p className='textMuted py-3'>Most watched Movies by Days</p>
          <div className='brdrLine w-100 mt-3'></div>
        </div>
      </div>
      {trendingTv.slice(0,10).map((movie , index)=> <MediaItem key={index} movie={movie}/>)}
    </div>
    <div className='row'>
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='brdrLine w-25 mb-3'></div>
          <h2 className='h4'>Trending People <br /> To Watch Right Now</h2>
          <p className='textMuted py-3'>Most watched People by Days</p>
          <div className='brdrLine w-100 mt-3'></div>
        </div>
      </div>
      {trendingPerson.slice(0,10).map((movie , index)=> <MediaItem key={index} movie={movie}/>)}
    </div>
    </>
}
