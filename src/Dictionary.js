import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    //console.log(response.data[0].meanings[0].synonyms);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //alert(`Searching for the definition of ${keyword}`);

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form className="inputForm" onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Type the word to search"
          onChange={handleKeywordChange}
        />
        <input className="SubmitValue" type="submit" value="Search" />
      </form>
      {keyword && <Results results={results} />}
    </div>
  );
}
