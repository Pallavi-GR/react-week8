import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="container photos">
        {props.photos.map(function(photo, index) {
          return (
            <div className="col-4">
              {" "}
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.tiny}
                  className="img-fluid img"
                  key={index}
                  alt={photo.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
      //</div>
    );
  } else {
    return null;
  }
}
