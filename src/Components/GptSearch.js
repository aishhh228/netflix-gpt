import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utlis/constant'

const GptSearch = () => {
  return (
    <div>
       <div className="absolute w-full h-full -z-10">
        <img className="object-cover w-full h-full" src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
