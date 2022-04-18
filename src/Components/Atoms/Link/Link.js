import './Link.scss'

import { Link } from 'react-router-dom'
import React from 'react'

const CLink = ({ to, title, onClick }) => {
  return (
    <>
      <Link to={to}>
        <p className="link" onClick={onClick}>
          {title}
        </p>
      </Link>
    </>
  )
}

export default CLink
