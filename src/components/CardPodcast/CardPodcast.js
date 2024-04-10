import React from "react";
import "./CardPodcast.style.css";

function CardPodcast({ title, artist, summary, img }) {
  return (
    <div className="card-podcast-container">
      <div className="card-podcast">
        <div className="img-podcast-container">
          <img src={img} />
        </div>
        <div className="artist-podcast-container">
          <p className="blod">{title}</p>
          <p className="italic">by {artist}</p>
        </div>
        <div className="description-podcast-container">
          <p className="blod">Desciption:</p>
          <p className="italic overflow">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default CardPodcast;
