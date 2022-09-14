import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleHint(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${event.target.id}`;
    console.log(keyword);
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f917000010000019a393949c72f44bb897f7f2eb94a0247";
    let pexelsUrl = `https://api.pexels.com/v1/search/?per_page=9&query=${event.target.id}`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000128056f28b0214e3db8f3b845c2df66f0";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse); //  authentication using headers from pexels
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    //search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Search mb-5">
          <section>
            <h1>Please type the word to search</h1>
            <form onSubmit={handleSubmit}>
              <div className=" search-element ml-5">
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  placeholder="Search a word"
                />
              </div>
            </form>
            <div className="mb-3 hint ">
              <span className="hint-example">Examples: </span>
              <button className=" btn " onClick={handleHint} id="wine">
                wine{" "}
              </button>
              <button className=" btn " onClick={handleHint} id="beach">
                beach{" "}
              </button>
              <button className=" btn " onClick={handleHint} id="yoga">
                yoga{" "}
              </button>
            </div>
          </section>
          {keyword && <Results results={results} />}
          <section>{keyword && <Photos photos={photos} />}</section>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
