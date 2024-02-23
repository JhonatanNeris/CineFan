import React from 'react'

//Import de hooks
import { useState, useEffect, useRef } from 'react'

//Import de componentes
import MovieCard from '../components/MovieCard'

//Import do CSS
import "./MoviesGrid.css"

// import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    // console.log(moviesUrl, apiKey)

    const [topMovies, setTopMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])

    //UseRed do carousel 
    const carousel = useRef(null);

    const getTopRatedMovies = async (url) => {

        const res = await fetch (url)
        const data = await res.json()

        console.log(data)

        setTopMovies(data.results)

    }
    const getPopularMovies = async (url) => {

        const res = await fetch (url)
        const data = await res.json()

        console.log(data)

        setPopularMovies(data.results)

    }
    const getNowPlayingMovies = async (url) => {

        const res = await fetch (url)
        const data = await res.json()

        console.log(data)

        setNowPlayingMovies(data.results)

    }

    useEffect(() => {

        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
        const popularUrl = `${moviesUrl}popular?${apiKey}`
        const nowPlayingUrl = `${moviesUrl}now_playing?${apiKey}`

        getTopRatedMovies(topRatedUrl)
        getPopularMovies(popularUrl)
        getNowPlayingMovies(nowPlayingUrl)

    }, [])

    // Tentando criar carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = Math.ceil(popularMovies.length / 4);

    const prevSlide = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const nextSlide = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
  return (
    <div className='container'>
        <h2 className='title'>Melhores filmes:</h2>
        <div className='movies-container'>
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}

        </div>
        <h2 className='title'>Filmes populares:</h2>
        <div className='movies-container-carousel'>
            <div className='carousel-items' ref={carousel}>
                {popularMovies.length === 0 && <p>Carregando...</p>}
                {popularMovies.length > 0 && popularMovies.map((movie, index) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
            <div className="carousel-nav">
                <button className="prevBtn" onClick={prevSlide}>&lt;</button>
                <button className="nextBtn" onClick={nextSlide}>&gt;</button>
            </div>            
        </div>
        <h2 className='title'>Filmes em cartaz:</h2>
        <div className='movies-container-carousel'>
            <div className='carousel-items'>
                {nowPlayingMovies.length === 0 && <p>Carregando...</p>}
                {nowPlayingMovies.length > 0 && nowPlayingMovies.map((movie, index) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
            <div className="carousel-nav">
                <button className="prevBtn" onClick={prevSlide}>&lt;</button>
                <button className="nextBtn" onClick={nextSlide}>&gt;</button>
            </div>            
        </div>
        <h2 className='title'>Filmes em cartaz:</h2>
        <div className='movies-container-carousel-swiper'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={8}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                autoplay
            >
                {nowPlayingMovies.length === 0 && <p>Carregando...</p>}
                {nowPlayingMovies.length > 0 && nowPlayingMovies.map((movie, index) => <SwiperSlide key={movie.id}><MovieCard movie={movie} /></SwiperSlide>)}
            </Swiper>
        </div>
        
        
    </div>
  )
}

export default Home