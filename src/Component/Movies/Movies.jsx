import React, { useContext, useEffect } from "react";
import MediaItem from "../MediaItem/MediaItem";
import { context } from "../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../Redux/moviesSlice";

export default function Movies() {
  let {trendingMovies }=useSelector((state)=>state.movie)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTrending('movie'))
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdrLine w-25 mb-3"></div>
          <h2 className="h4">
            Trending Movies <br /> To Watch Right Now
          </h2>
          <p className="textMuted py-3">Most watched Movies by Days</p>
          <div className="brdrLine w-100 mt-3"></div>
        </div>
      </div>
      {trendingMovies.map((movie, index) => (
        <MediaItem key={index} movie={movie} />
      ))}
    </div>
  );
}
