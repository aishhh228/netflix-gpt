import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)

  if(!movies) return;

  return (
    movies.nowPlayingMovies &&( 
      <div className="bg-black w-screen aspect-video">
    <div className='-mt-72 relative z-10'>
      <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies} id="nowPlayingMovies"/> 
      <MovieList title={"Trending"} movies = {movies.nowPlayingMovies}  id="trendingMovies" /> 
      <MovieList title={"Popular"} movies = {movies.popularMovies} id="popularMovies"/> 
      <MovieList title={"Upcoming Movies"} movies = {movies.upcomingMovies} id="upcomingMovies"/> 
      <MovieList title={"Hrror"} movies = {movies.nowPlayingMovies} id="horrorMovies" /> 
    </div>
     </div>)
   
  )
}

export default SecondaryContainer
