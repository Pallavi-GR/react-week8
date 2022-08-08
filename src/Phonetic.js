import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetics.audio && props.phonetics.text) {
    return (
      <div className="phonetics mb-2">
        <div className="phonetic-block">
          <div className="audio-player">
            <audio controls className="d-none" src={props.phonetics.audio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>{" "}
          <div className="pronunciation"> {props.phonetics.text}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
