import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Import do Router
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Import de pages
import App from './App.jsx'
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';
import Home from './pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/search' element={<Search />}/>

        </Route>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>,
)
