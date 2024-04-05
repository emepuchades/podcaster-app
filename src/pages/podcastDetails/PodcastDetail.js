import React from "react";
import { useParams } from "react-router-dom";

function PodcastDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle del Podcast {id}</h2>
    </div>
  );
}

export default PodcastDetail;
