import './Header.scss'

import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <p className="menu-logo">NewsApp</p>
        </Link>
        <Link to="/news">
          <p className="menu-item">News</p>
        </Link>
      </div>
    </>
  )
}

export default Header
