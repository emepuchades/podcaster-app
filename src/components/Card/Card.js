import React from 'react'
import "./Card.style.css"

function Card({title, artist, img}) {
  return (
    <div className="container">
      <div className="container-image">
        <img src={img} />
      </div>
      <div className="container-details">
        <p className="details-title">{title}</p>
        <p className="details-artist">Autor: {artist}</p>
      </div>
    </div>
  );
}

export default Card