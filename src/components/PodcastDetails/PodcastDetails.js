import React from "react";
import "./PodcastDetails.style.css";
import { formatDate, millisToMinutes } from "../../utils/formatDate";
import { Link } from "react-router-dom";

function PodcastDetails({ resultCount, episodes, id }) {
  return (
    <div>
      <div className="count-result">Episodes: {resultCount}</div>
      <div className="container-details-podcast">
        <table>
          <thead className="table-header">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes?.map((episode, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "table-row-even" : ""}
              >
                <td className="table-cell">
                  <Link to={`/podcast/${id}/episode/${episode.trackId}`}>
                    {episode.trackName}
                  </Link>
                </td>
                <td className="table-cell">
                  {formatDate(episode.releaseDate)}
                </td>
                <td className="table-cell">
                  {millisToMinutes(episode.trackTimeMillis)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PodcastDetails;
