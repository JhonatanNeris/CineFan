import {React, useState} from 'react'

//Import do Router
import { Link, useNavigate } from 'react-router-dom'

//Import de icons
import { BiSolidCameraMovie, BiSearchAlt2, BiCameraMovie } from "react-icons/bi";

//Import styles
import styles from "./Navbar.module.css"

const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)

    setSearch("")

  }
  return (    
    <nav className={styles.navbar}>
        <h2>
          <Link to="/"><BiSolidCameraMovie />CineFan</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Busque um filme' 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button type='submit'><BiSearchAlt2 /></button>
        </form>
    </nav>
    
  )
}

export default Navbar