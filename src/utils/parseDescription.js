import React from "react";

export function parseDescription(description) {
  return description.split("\n").map((paragraph, index) => (
    <p key={index}>
      {paragraph.split(/(https?:\/\/[^\s]+)/g).map((segment, i) => {
        if (segment.match(/^https?:\/\//)) {
          return (
            <a href={segment} key={i} target="_blank" rel="noopener noreferrer">
              {segment}
            </a>
          );
        } else {
          return segment;
        }
      })}
    </p>
  ));
}
