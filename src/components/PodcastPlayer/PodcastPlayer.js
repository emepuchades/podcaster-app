import React from "react";
import './PodcastPlayer.style.css'

function PodcastPlayer({ title, description, podcast }) {
  return (
    <div className="container-player">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: description }} className="player-description italic"/>
      <audio controls>
        <source src={podcast} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default PodcastPlayer;
