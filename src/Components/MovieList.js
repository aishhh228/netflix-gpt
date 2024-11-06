import React from 'react'
import MovieCard from './MovieCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const MovieList = ({title, movies, id}) => {
    const sildeLeft = () =>{
      var silder = document.getElementById(id)
      silder.scrollLeft = silder.scrollLeft - 500
     
    }
    const sildeRight = () =>{
      var silder = document.getElementById(id)
      silder.scrollLeft = silder.scrollLeft + 500
     
    }


  return (
    <div className="px-8">
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
    <div className='relative flex items-center'>
    <MdChevronLeft className='cursor-pointer text-white absolute hover:opacity-50 left-0 z-10' onClick={sildeLeft} size={40} />
    <div id={id} className="flex overflow-x-scroll scroll-smooth hide-scrollbar mx-12">
      <div className="flex ">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
    <MdChevronRight  className='cursor-pointer text-white absolute hover:opacity-50 right-0 z-10' onClick={sildeRight}  size={40}/>
    </div>
   
  </div>
  )
}

export default MovieList
