import React, { useContext } from "react";
import MediaItem from "../MediaItem/MediaItem";
import { context } from "../../Context/Context";

export default function Movies() {
  let { trendingMovies } = useContext(context);

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
