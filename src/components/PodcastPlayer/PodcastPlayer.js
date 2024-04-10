import React from "react";
import "./PodcastPlayer.style.css";
import { Link } from "react-router-dom";
import { parseDescription } from "../../utils/parseDescription";

function PodcastPlayer({ title, description, podcast, id }) {
  return (
    <div className="container-player">
      <div className="right-align">
        <Link to={`/podcast/${id}`} className="">
          Volver al podcast
        </Link>
      </div>
      <h3>{title}</h3>
      <div className="player-description italic">{parseDescription(description)}</div>
      <audio controls>
        <source src={podcast} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default PodcastPlayer;
