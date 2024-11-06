import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from '../Components/VideoTitle';
import VideoBackground from '../Components/VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies )
    if (!movies) return;
    const mainMovie = movies[0];
   
    const {original_title, overview, id} = mainMovie;

return (
  <div className="pt-[10%] bg-black md:pt-0">
  <VideoTitle title={original_title} overview={overview} />
  <VideoBackground movieId={id} />
  </div>
 
  )
};

export default MainContainer
