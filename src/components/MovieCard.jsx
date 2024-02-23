import React from 'react'

//Import do router
import { Link } from 'react-router-dom';

//Import dos icons
import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {

  const voteAverage = (vote) => {
    return vote.toFixed(1)
  }
  return (
    <div className='movie-card'>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {voteAverage(movie.vote_average)}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}

    </div>
  )
}

export default MovieCard