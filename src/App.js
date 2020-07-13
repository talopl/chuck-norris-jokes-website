import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const BASE_URL = "https://api.chucknorris.io/jokes/random";

  const initialJokeValue = "Loading . . . ";

  const [joke, setJoke] = useState(() => initialJokeValue);

  function fetchJoke() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setJoke((value) => data["value"]));
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  function changeJoke() {
    setJoke(initialJokeValue);
    fetchJoke();
  }
  return (
    <>
      <div className="joke-container">
        <div className="title">The Funniest Joke Ever</div>
        <div className="joke" dangerouslySetInnerHTML={{ __html: joke }}></div>
        <button className="generate-joke-btn" onClick={changeJoke}>
          New Joke
        </button>
      </div>
    </>
  );
}

export default App;
