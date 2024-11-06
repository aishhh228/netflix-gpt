import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  const trailerVideos = useSelector(store =>store.movies?.trailerVideos);
   
  useMovieTrailer(movieId);
  return (
    <div  className=" w-screen ">
      <iframe className="w-screen aspect-video -mt-2"
       src={"https://www.youtube.com/embed/"+ trailerVideos?.key + "?&autoplay=1&mute=1"}
       title="YouTube video player"  
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
