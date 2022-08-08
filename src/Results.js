import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2 className="searched-word mt-3 ml-5"> {props.results.word}</h2>
          {props.results.phonetics.map(function(phonetics, index) {
            return (
              <div key={index} className="phonetics ml-5 row">
                <Phonetic phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function(meaning, index) {
          return (
            <section key={index} className="meanings">
              <Meanings meanings={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
