import {React, useState, useEffect} from 'react'

//Import do router 
import { useSearchParams } from 'react-router-dom'

//Import de componentes 
import MovieCard from '../components/MovieCard'

//Import do css
import "./MoviesGrid.css"

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  // Envolver o searchParams dentro de um array
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get("q")
  
  const getSearchedMovies = async (url) => {

    const res = await fetch (url)
    const data = await res.json()

    console.log(data)

    setMovies(data.results)

}

useEffect(() => {

    // const searchWithQuertUrl = `${searchUrl}?${apiKey}&query=${query}`
    const searchWithQuertUrl = `${searchUrl}?query=${query}&${apiKey}`

    console.log(searchWithQuertUrl);

    getSearchedMovies(searchWithQuertUrl)

}, [query])

  return (
    <div className='container'>
        <h2 className='title'>Resultado para: <span className='query-text'>{query}</span></h2>
        <div className='movies-container'>
            {movies.length == 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}

        </div>
        
    </div>
  )
}

export default Search