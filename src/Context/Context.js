import { useEffect, useState, createContext } from "react";
import axios from "axios";

export let context = createContext(null);
export default function ContextProvider(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);

  async function getTrending (mediaType,func){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f04abd28a278b378a10634e8da13acc0`);
    func(data.results);
  } 
  useEffect(()=>{
    getTrending('movie',setTrendingMovies);
    getTrending('tv',setTrendingTv);
    getTrending('person',setTrendingPerson);
  },[]);
  
  return (
    <context.Provider
      value={{
        trendingMovies,trendingTv,trendingPerson
      }}
    >
      {props.children}
    </context.Provider>
  );
}
