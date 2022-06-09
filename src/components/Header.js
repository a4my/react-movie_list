import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to="/" className={nav => (nav.isActive ? 'nav-active' : '')}>
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/my_movies"
            className={nav => (nav.isActive ? 'nav-active' : '')}
          >
            <li>My Movies</li>
          </NavLink>
        </ul>
      </nav>
      <h1>Movie List</h1>
    </div>
  )
}

export default Header
