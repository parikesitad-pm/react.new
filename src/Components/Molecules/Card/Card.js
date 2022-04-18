import './Card.scss'

import React from 'react'

const Card = ({ title, urlToImage, author, publishedAt, description }) => {
  return (
    <>
      <div className="cardItem">
        <img className="cardImage" src={urlToImage} alt={title} />
        <div className="contentDetail">
          <p className="title">{title}</p>
          <p className="author">
            {author} - {publishedAt}
          </p>
          <p className="body">{description}</p>
        </div>
      </div>
    </>
  )
}

export default Card
