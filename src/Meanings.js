import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meanings(props) {
  if (props.meanings) {
    return (
      <div className="meanings">
        <div className="card mt-3">
          <div className="card-body">
            <h3>[{props.meanings.partOfSpeech}]</h3>
            <h6>Definition(s):</h6>

            {props.meanings.definitions.map(function(definition, index) {
              return (
                <div key={index}>
                  <ul>
                    <li>{definition.definition}</li>
                  </ul>
                </div>
              );
            })}

            <Synonyms synonyms={props.meanings.synonyms} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Meanings">
        <div className="card mt-3">
          <div className="card-body">
            <h3>[{props.meanings.partOfSpeech}]</h3>
            <h6>Definition(s):</h6>
            <div>
              <em>Synonyms not available</em>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
