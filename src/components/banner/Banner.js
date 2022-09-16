import React, { useEffect, useState } from 'react'
import { AXIOS } from '../../constants/axios'
import {API_KEY,MOVIE_URL} from '../../constants/constants'
import './Banner.css'

function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    AXIOS.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      const arrayNumber = Math.floor(Math.random() * 20)
      console.log(arrayNumber);
      setMovie(response.data.results[arrayNumber])
    })
  },[])
  const truncate = (str,length)=>{
    if (str.length > length) {
      return str.substring(0, length)+'...';
    } else {
      return str;
    }
  };
  return (
    <>
    <div style={{backgroundImage : `url(${movie ? MOVIE_URL+movie.backdrop_path : ''}`}} className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.title || movie.name : ''}</h1>
            <div className="banner-buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>     
            <h1 className="description">{movie ? truncate(movie.overview,300)  : ''}</h1>
        </div>
            <div className="banner-fade"></div>
    </div>
    </>
  )
}

export default Banner