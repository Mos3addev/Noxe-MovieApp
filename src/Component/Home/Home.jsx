import React, { useContext } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import { context } from '../../Context/Context';

export default function Home() {

  let {trendingMovies,trendingTv,trendingPerson}= useContext(context);
  return <>
    <div className='row'>
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='brdrLine w-25 mb-3'></div>
          <h2 className='h4'>Trending Movies <br /> To Watch Right Now</h2>
          <p className='textMuted py-3'>Most watched Movies by Days</p>
          <div className='brdrLine w-100 mt-3'></div>
        </div>
      </div>
      {trendingMovies.slice(0,10).map((movie , index)=> <MediaItem key={index} movie={movie}/>)}
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
