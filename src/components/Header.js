import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Imagine a large banner here!</h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/event-list'>Event List</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header