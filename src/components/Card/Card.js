import React from 'react'
import "./Card.style.css"
import { Link } from 'react-router-dom';

function Card({title, artist, img, id}) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className="container">
        <div className="container-image">
          <img src={img} />
        </div>
        <div className="container-details">
          <p className="details-title">{title}</p>
          <p className="details-artist">Autor: {artist}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card